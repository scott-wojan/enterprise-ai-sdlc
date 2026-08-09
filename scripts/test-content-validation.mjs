import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const validator = path.join(scriptDirectory, "validate-content.mjs");

const procedureSections = [
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

async function writeFixture(root, files) {
  for (const [relativePath, content] of Object.entries(files)) {
    const absolutePath = path.join(root, relativePath);
    await mkdir(path.dirname(absolutePath), { recursive: true });
    await writeFile(absolutePath, content, "utf8");
  }
}

function runValidator(root) {
  return spawnSync(process.execPath, [validator, "--root", root], {
    encoding: "utf8"
  });
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function runCase(parent, testCase) {
  const root = path.join(parent, testCase.name);
  await mkdir(root, { recursive: true });
  await writeFixture(root, testCase.files);

  const result = runValidator(root);
  if (testCase.expectedCode) {
    assert(result.status !== 0, `${testCase.name}: expected a nonzero exit.`);
    assert(
      result.stderr.includes(`[${testCase.expectedCode}]`),
      `${testCase.name}: expected ${testCase.expectedCode}, received:\n${result.stderr}`
    );
  } else {
    assert(result.status === 0, `${testCase.name}: expected success, received:\n${result.stderr}`);
  }
}

const validProcedure = `# PROC-TEST-001: Example procedure

${procedureSections.map((heading) => `## ${heading}\n\nFixture content.`).join("\n\n")}
`;

const testCases = [
  {
    name: "valid-content",
    files: {
      "README.md": "# Valid fixture\n\n[Guide](guide.md)\n",
      "guide.md": "# Guide\n\n## Details\n\nValid content.\n",
      "docs/procedures/example.md": validProcedure
    }
  },
  {
    name: "em-dash",
    expectedCode: "EM_DASH",
    files: { "README.md": "# Invalid fixture\n\nThis contains an em — dash.\n" }
  },
  {
    name: "broken-link",
    expectedCode: "BROKEN_LINK",
    files: { "README.md": "# Invalid fixture\n\n[Missing](missing.md)\n" }
  },
  {
    name: "wide-table",
    expectedCode: "WIDE_TABLE",
    files: {
      "README.md": "# Invalid fixture\n\n| One | Two | Three | Four |\n| --- | --- | --- | --- |\n| A | B | C | D |\n"
    }
  },
  {
    name: "heading-skip",
    expectedCode: "HEADING_SKIP",
    files: { "README.md": "# Invalid fixture\n\n### Skipped level\n" }
  },
  {
    name: "procedure-sections",
    expectedCode: "PROCEDURE_SECTION",
    files: {
      "README.md": "# Fixture\n",
      "docs/procedures/incomplete.md": "# PROC-TEST-002: Incomplete procedure\n\n## Purpose\n\nFixture content.\n"
    }
  }
];

const temporaryRoot = await mkdtemp(path.join(tmpdir(), "content-validation-"));

try {
  for (const testCase of testCases) {
    await runCase(temporaryRoot, testCase);
  }
  console.log(`Seeded validation tests passed for ${testCases.length} case(s).`);
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}
