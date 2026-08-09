# Validation Approach

Validation occurs at the issue, pull-request, milestone and release levels.

## Issue validation

Before work begins, confirm that the issue satisfies the definition of ready in `CONTRIBUTING.md`.

## Pull-request validation

Every pull request must be checked for:

- Scope fidelity
- Acceptance-criteria coverage
- Terminology consistency
- Normative language correctness
- Required identifiers
- Internal link integrity
- Source and decision updates
- Traceability impact
- Mobile-readable formatting
- Unresolved contradictions

## Procedure validation

Every procedure must pass the complete procedure schema and be executable without hidden author context.

## Scenario validation

The method will be pressure-tested against representative scenarios including:

- Advisory analysis
- Unit-test creation
- Bounded defect correction
- Dependency upgrade
- Material application feature
- Database-schema change
- Authentication change
- Legacy modernization
- Production incident
- Regulated business-rule change

For each scenario, the playbook must answer:

- Which adoption state permits the work?
- What may AI do?
- Which human role is accountable?
- Which artifacts are required?
- Which controls apply?
- Which stop conditions apply?
- What evidence proves completion?
- How is expansion, restriction or rollback decided?

## Release validation

A release must not be published until:

- All milestone acceptance criteria are satisfied.
- Required procedures and artifacts are complete.
- Worked examples conform to normative content.
- Known gaps and limitations are documented.
- Distribution formats are generated from canonical source.
- The release decision is recorded.

## Automation roadmap

Repository automation should eventually validate headings, required procedure sections, stable identifiers, internal links, prohibited terminology, orphaned artifacts and basic traceability coverage.

## Initial automated validation

The repository provides a zero-dependency Node.js validation command:

```bash
npm run validate
```

Node.js 24 or later is required. The command runs both the canonical-content check and seeded failure tests. Contributors may run the checks separately:

```bash
npm run validate:content
npm run test:validation
```

The canonical-content check validates:

- Internal Markdown file links and heading anchors resolve.
- External links are excluded from this structural check.
- Prose outside fenced and inline code contains no em dashes.
- Markdown tables contain no more than three columns.
- Canonical Markdown outside `.github` contains exactly one level-one heading and does not skip heading levels.
- Procedure files under `docs/procedures` use a `PROC` identifier in the title and contain every section defined by the procedure schema in [the writing standard](writing-standard.md).

Diagnostics identify the file, line, rule code and failure. Any failure produces a nonzero exit status.

The seeded test command creates isolated temporary fixtures for valid content, an em dash, a broken link, a wide table, a skipped heading level and an incomplete procedure. Each invalid fixture must produce a nonzero exit status and the expected rule code.

The `Content validation` GitHub Actions workflow runs `npm run validate` for every pull request and every push to `main`. The workflow has read-only repository permission.
