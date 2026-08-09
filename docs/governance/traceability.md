# Traceability Model

## Purpose

Traceability prevents the playbook from becoming a collection of disconnected recommendations.

## Required relationships

The completed playbook must make these relationships explicit:

- A principle is implemented by one or more controls or procedures.
- A procedure names the artifacts it consumes and produces.
- A procedure names applicable controls and adoption states.
- A human gate names one accountable role.
- An advancement criterion names the evidence and measures supporting it.
- A worked example names every procedure, artifact and control it uses.
- An externally derived concept points to a source-ledger entry.

## Coverage checks

Validation should identify:

- Principles with no implementation
- Controls referenced by no procedure
- Artifacts with no owner or consumer
- Human gates without accountable roles
- Procedures without stop conditions
- Measures that support no decision
- Adoption requirements that cannot be verified
- Examples that bypass normative procedures

## Initial implementation

Version 0.1 may maintain traceability in Markdown. A machine-readable register may be added once the identifier and content schemas stabilize.

## Pilot Edition traceability

### Human accountability and consequential decisions

- PRIN-002 is implemented by CTRL-ACC-001, CTRL-ACC-003, CTRL-ACC-006 and CTRL-ACC-007.
- PRIN-003 is implemented by CTRL-ACC-001 through CTRL-ACC-007.
- PRIN-004 is implemented by CTRL-ACC-004, CTRL-ACC-005, CTRL-ACC-006 and CTRL-ACC-007.
- PRIN-005 is implemented by CTRL-ACC-002, CTRL-ACC-005 and CTRL-ACC-007.
- PRIN-008 is implemented by CTRL-ACC-003, CTRL-ACC-006 and CTRL-ACC-007.
- CTRL-ACC-001 through CTRL-ACC-007 are defined in `docs/core/accountability.md`.
- SRC-001, SRC-002, SRC-003 and SRC-015 inform the accountability model and are interpreted in `docs/core/accountability.md`.
- Later Pilot Edition procedures and artifacts must identify which CTRL-ACC controls they implement or consume.
