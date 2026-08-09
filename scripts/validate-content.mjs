import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const IGNORED_DIRECTORIES = new Set([".git", "node_modules"]);
const MAX_TABLE_COLUMNS = 3;
const PROCEDURE_PREFIX = "docs/procedures/";

const REQUIRED_PROCEDURE_HEADINGS = [
  "Purpose",
  "Use when",
  "Do not use when",
  "Accountable owner",
  "Participants",
  "Preconditions",
  "Inputs",
  "Actions",
  "Required human decisions",
  "Outputs",
  "Verification",
  "Stop conditions",
  "Completion criteria",
  "Measures",
  "Next procedures",
  "Applicable principles and controls"
];

function normalizePath(value) {
  return value.split(path.sep).join("/");
}

async function collectMarkdownFiles(root) {
  const files = [];

  async function visit(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    entries.sort((left, right) => left.name.localeCompare(right.name));

    for (const entry of entries) {
      if (entry.isDirectory() && IGNORED_DIRECTORIES.has(entry.name)) {
        continue;
      }

      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(absolutePath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(absolutePath);
      }
    }
  }

  await visit(root);
  return files;
}

function contentLines(markdown) {
  const lines = markdown.split(/\r?\n/);
  let inFence = false;

  return lines.map((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      return "";
    }

    if (inFence) {
      return "";
    }

    return line.replace(/`[^`]*`/g, "");
  });
}

function addError(errors, file, line, code, message) {
  errors.push({ file, line, code, message });
}

function validateEmDashes(lines, file, errors) {
  lines.forEach((line, index) => {
    if (line.includes("—")) {
      addError(errors, file, index + 1, "EM_DASH", "Replace the prohibited em dash.");
    }
  });
}

function tableColumnCount(line) {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").length;
}

function validateTables(lines, file, errors) {
  const delimiterPattern = /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/;

  lines.forEach((line, index) => {
    if (!delimiterPattern.test(line)) {
      return;
    }

    const columns = tableColumnCount(line);
    if (columns > MAX_TABLE_COLUMNS) {
      addError(
        errors,
        file,
        index + 1,
        "WIDE_TABLE",
        `Markdown tables may contain at most ${MAX_TABLE_COLUMNS} columns; found ${columns}.`
      );
    }
  });
}

function validateHeadingStructure(lines, file, errors) {
  const headings = lines
    .map((line, index) => {
      const match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
      return match ? { level: match[1].length, line: index + 1 } : null;
    })
    .filter(Boolean);

  const levelOneHeadings = headings.filter((heading) => heading.level === 1);
  if (levelOneHeadings.length !== 1) {
    addError(
      errors,
      file,
      levelOneHeadings[1]?.line ?? 1,
      "H1_COUNT",
      `Canonical Markdown must contain exactly one level-one heading; found ${levelOneHeadings.length}.`
    );
  }

  for (let index = 1; index < headings.length; index += 1) {
    const previous = headings[index - 1];
    const current = headings[index];
    if (current.level > previous.level + 1) {
      addError(
        errors,
        file,
        current.line,
        "HEADING_SKIP",
        `Heading level ${current.level} follows level ${previous.level}.`
      );
    }
  }
}

function headingSlug(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[\p{P}\p{S}]/gu, (character) => (character === "-" || character === "_" ? character : ""))
    .replace(/\s+/g, "-");
}

function extractAnchors(lines) {
  const anchors = new Set();
  const slugCounts = new Map();

  for (const line of lines) {
    const heading = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (heading) {
      const base = headingSlug(heading[2]);
      const count = slugCounts.get(base) ?? 0;
      anchors.add(count === 0 ? base : `${base}-${count}`);
      slugCounts.set(base, count + 1);
    }

    for (const match of line.matchAll(/<a\s+(?:[^>]*?\s)?(?:id|name)=["']([^"']+)["'][^>]*>/gi)) {
      anchors.add(match[1]);
    }
  }

  return anchors;
}

function splitLinkTarget(target) {
  const hashIndex = target.indexOf("#");
  if (hashIndex === -1) {
    return { pathname: target, fragment: "" };
  }

  return {
    pathname: target.slice(0, hashIndex),
    fragment: target.slice(hashIndex + 1)
  };
}

function isExternalTarget(target) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(target);
}

async function validateLinks(lines, absoluteFile, relativeFile, root, errors, anchorCache) {
  const linkPattern = /!?\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;

  for (let index = 0; index < lines.length; index += 1) {
    for (const match of lines[index].matchAll(linkPattern)) {
      const target = match[1].replace(/^<|>$/g, "");
      if (!target || isExternalTarget(target)) {
        continue;
      }

      const { pathname, fragment } = splitLinkTarget(target);
      let decodedPath;
      let decodedFragment;

      try {
        decodedPath = decodeURIComponent(pathname);
        decodedFragment = decodeURIComponent(fragment);
      } catch {
        addError(errors, relativeFile, index + 1, "INVALID_LINK", `Link target is not valid URI encoding: ${target}`);
        continue;
      }

      const targetFile = decodedPath
        ? path.resolve(decodedPath.startsWith("/") ? root : path.dirname(absoluteFile), decodedPath.replace(/^\//, ""))
        : absoluteFile;
      const relativeTarget = path.relative(root, targetFile);

      if (relativeTarget.startsWith("..") || path.isAbsolute(relativeTarget)) {
        addError(errors, relativeFile, index + 1, "LINK_OUTSIDE_ROOT", `Link leaves the repository: ${target}`);
        continue;
      }

      try {
        await access(targetFile);
      } catch {
        addError(errors, relativeFile, index + 1, "BROKEN_LINK", `Internal link target does not exist: ${target}`);
        continue;
      }

      if (!decodedFragment) {
        continue;
      }

      const targetStats = await stat(targetFile);
      if (!targetStats.isFile() || !targetFile.endsWith(".md")) {
        continue;
      }

      if (!anchorCache.has(targetFile)) {
        const targetMarkdown = await readFile(targetFile, "utf8");
        anchorCache.set(targetFile, extractAnchors(contentLines(targetMarkdown)));
      }

      if (!anchorCache.get(targetFile).has(decodedFragment)) {
        addError(errors, relativeFile, index + 1, "BROKEN_ANCHOR", `Markdown anchor does not exist: ${target}`);
      }
    }
  }
}

function validateProcedureHeadings(lines, file, errors) {
  const headings = new Map();

  lines.forEach((line, index) => {
    const match = /^#{2,6}\s+(.+?)\s*#*\s*$/.exec(line);
    if (match) {
      headings.set(match[1].trim().toLowerCase(), index + 1);
    }
  });

  const firstHeading = lines.find((line) => /^#\s+/.test(line));
  if (!firstHeading || !/^#\s+PROC-[A-Z0-9-]+:\s+\S/.test(firstHeading)) {
    addError(
      errors,
      file,
      1,
      "PROCEDURE_IDENTIFIER",
      "Procedure title must use '# PROC-<identifier>: <name>'."
    );
  }

  for (const requiredHeading of REQUIRED_PROCEDURE_HEADINGS) {
    if (!headings.has(requiredHeading.toLowerCase())) {
      addError(
        errors,
        file,
        1,
        "PROCEDURE_SECTION",
        `Missing required procedure section: ${requiredHeading}.`
      );
    }
  }
}

function isCanonicalContent(relativeFile) {
  return !relativeFile.startsWith(".github/");
}

function isProcedureFile(relativeFile) {
  return relativeFile.startsWith(PROCEDURE_PREFIX) && !relativeFile.endsWith("/README.md");
}

export async function validateRepository(rootValue = process.cwd()) {
  const root = path.resolve(rootValue);
  const files = await collectMarkdownFiles(root);
  const errors = [];
  const anchorCache = new Map();

  for (const absoluteFile of files) {
    const relativeFile = normalizePath(path.relative(root, absoluteFile));
    const markdown = await readFile(absoluteFile, "utf8");
    const lines = contentLines(markdown);

    validateEmDashes(lines, relativeFile, errors);
    validateTables(lines, relativeFile, errors);
    await validateLinks(lines, absoluteFile, relativeFile, root, errors, anchorCache);

    if (isCanonicalContent(relativeFile)) {
      validateHeadingStructure(lines, relativeFile, errors);
    }

    if (isProcedureFile(relativeFile)) {
      validateProcedureHeadings(lines, relativeFile, errors);
    }
  }

  return { errors, filesChecked: files.length };
}

function parseRootArgument(argumentsList) {
  if (argumentsList.length === 0) {
    return process.cwd();
  }

  if (argumentsList.length === 2 && argumentsList[0] === "--root") {
    return argumentsList[1];
  }

  throw new Error("Usage: node scripts/validate-content.mjs [--root <repository-path>]");
}

async function main() {
  const root = parseRootArgument(process.argv.slice(2));
  const result = await validateRepository(root);

  if (result.errors.length > 0) {
    for (const error of result.errors) {
      console.error(`${error.file}:${error.line} [${error.code}] ${error.message}`);
    }
    console.error(`Content validation failed with ${result.errors.length} error(s).`);
    process.exitCode = 1;
    return;
  }

  console.log(`Content validation passed for ${result.filesChecked} Markdown file(s).`);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
