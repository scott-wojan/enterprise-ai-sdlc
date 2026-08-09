import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const guideRoot = path.resolve("docs/guide");

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory()
        ? markdownFiles(target)
        : entry.isFile() && entry.name.endsWith(".md")
          ? [target]
          : [];
    }),
  );
  return nested.flat().sort();
}

const files = await markdownFiles(guideRoot);
const failures = [];

if (files.length !== 22) {
  failures.push(`Expected 22 Pilot Guide pages, found ${files.length}.`);
}

const requiredSections = [
  "### Understand",
  "### Prepare",
  "### Run",
  "### Decide",
  "### Reference",
];

const landing = await readFile(path.join(guideRoot, "README.md"), "utf8");
for (const section of requiredSections) {
  if (!landing.includes(section)) {
    failures.push(`Start Here is missing ${section}.`);
  }
}

for (let number = 1; number <= 22; number += 1) {
  const marker = number === 1 ? "1. **Start here**" : `${number}. [`;
  if (!landing.includes(marker)) {
    failures.push(`Start Here navigation is missing page ${number}.`);
  }
}

const actionFiles = files.filter(
  (file) =>
    !file.endsWith(path.join("guide", "README.md")) &&
    !file.includes(`${path.sep}reference${path.sep}`),
);

const requiredActionContent = [
  "## Why am I here?",
  "**Owner:**",
  "**Participants:**",
  "**Time:**",
  "**Bring:**",
  "**Leave with:**",
  "## Stop",
  "**Previous:**",
  "**Next:**",
];

for (const file of files) {
  const content = await readFile(file, "utf8");
  const relative = path.relative(process.cwd(), file);

  if (content.includes("—")) {
    failures.push(`${relative} contains an em dash.`);
  }
  if (/^\|.*\|\s*$/m.test(content)) {
    failures.push(`${relative} contains a Markdown table.`);
  }
  if (/\b(?:ART|CTRL|PROC|ROLE|MEAS|REQ)-[A-Z0-9-]+\b/.test(content)) {
    failures.push(`${relative} exposes an internal identifier.`);
  }
}

for (const file of actionFiles) {
  const content = await readFile(file, "utf8");
  const relative = path.relative(process.cwd(), file);
  for (const required of requiredActionContent) {
    if (!content.includes(required)) {
      failures.push(`${relative} is missing ${required}.`);
    }
  }
}

if (failures.length > 0) {
  console.error("Pilot Guide validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Pilot Guide validation passed for ${files.length} pages.`);
