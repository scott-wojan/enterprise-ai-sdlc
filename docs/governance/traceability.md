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

### Authority boundaries and risk treatment

- PRIN-001 is implemented by CTRL-AUTH-003, CTRL-AUTH-006 and CTRL-AUTH-008.
- PRIN-002 is implemented by CTRL-AUTH-001 through CTRL-AUTH-008.
- PRIN-003 is implemented by CTRL-AUTH-005.
- PRIN-004 is implemented by CTRL-AUTH-001, CTRL-AUTH-005, CTRL-AUTH-006, CTRL-AUTH-007 and CTRL-AUTH-008.
- PRIN-005 is implemented by CTRL-AUTH-002, CTRL-AUTH-003, CTRL-AUTH-004, CTRL-AUTH-007 and CTRL-AUTH-008.
- PRIN-006 is implemented by CTRL-AUTH-003 and CTRL-AUTH-004.
- PRIN-008 is implemented by CTRL-AUTH-001, CTRL-AUTH-002, CTRL-AUTH-006 and CTRL-AUTH-008.
- PRIN-010 is implemented by CTRL-AUTH-004.
- CTRL-AUTH-001 through CTRL-AUTH-008 consume CTRL-ACC-001, CTRL-ACC-003, CTRL-ACC-005 and CTRL-ACC-007.
- CTRL-AUTH-001 through CTRL-AUTH-008 are defined in `docs/core/authority-and-risk.md`.
- SRC-003, SRC-007 and SRC-009 inform the authority model and are interpreted in `docs/core/authority-and-risk.md`.
- Later Pilot Edition procedures and artifacts must identify which CTRL-AUTH controls they implement or consume.

### Durable evidence

- PRIN-003 is implemented by CTRL-EVID-004 and CTRL-EVID-008.
- PRIN-004 is implemented by CTRL-EVID-001 through CTRL-EVID-008.
- PRIN-005 is implemented by CTRL-EVID-003, CTRL-EVID-005, CTRL-EVID-006 and CTRL-EVID-008.
- PRIN-008 is implemented by CTRL-EVID-001, CTRL-EVID-003 and CTRL-EVID-008.
- PRIN-009 is implemented by CTRL-EVID-002, CTRL-EVID-006 and CTRL-EVID-007.
- PRIN-011 is supported by CTRL-EVID-003, CTRL-EVID-005 and CTRL-EVID-008 because they preserve failure and disposition evidence for later system improvement.
- CTRL-EVID-001 through CTRL-EVID-008 consume CTRL-ACC-001, CTRL-ACC-004, CTRL-ACC-005 and CTRL-ACC-007.
- CTRL-EVID-001 through CTRL-EVID-008 consume CTRL-AUTH-001, CTRL-AUTH-002, CTRL-AUTH-005, CTRL-AUTH-007 and CTRL-AUTH-008.
- CTRL-EVID-001 through CTRL-EVID-008 are defined in `docs/core/evidence.md`.
- SRC-002, SRC-003, SRC-004 and SRC-009 inform the evidence model and are interpreted in `docs/core/evidence.md`.
- Later Pilot Edition procedures and artifacts must identify which CTRL-EVID controls they implement or consume.

### Deterministic and inferential control precedence

- PRIN-004 is implemented by CTRL-PREC-001, CTRL-PREC-004, CTRL-PREC-005 and CTRL-PREC-006.
- PRIN-005 is implemented by CTRL-PREC-001 through CTRL-PREC-007.
- PRIN-007 is supported by CTRL-PREC-006 and CTRL-PREC-007 because they preserve control outcomes and effectiveness evidence.
- PRIN-008 is implemented by CTRL-PREC-001, CTRL-PREC-002, CTRL-PREC-005 and CTRL-PREC-007.
- PRIN-011 is implemented by CTRL-PREC-007.
- CTRL-PREC-001 through CTRL-PREC-007 consume CTRL-ACC-002, CTRL-ACC-004, CTRL-ACC-005 and CTRL-ACC-007.
- CTRL-PREC-001 through CTRL-PREC-007 consume CTRL-AUTH-002, CTRL-AUTH-003, CTRL-AUTH-007 and CTRL-AUTH-008.
- CTRL-PREC-001 through CTRL-PREC-007 consume CTRL-EVID-001, CTRL-EVID-002, CTRL-EVID-005, CTRL-EVID-006 and CTRL-EVID-008.
- CTRL-PREC-001 through CTRL-PREC-007 are defined in `docs/core/control-precedence.md`.
- SRC-005, SRC-006, SRC-007 and SRC-008 inform the control-precedence model and are interpreted in `docs/core/control-precedence.md`.
- Later Pilot Edition procedures and artifacts must identify which CTRL-PREC controls they implement or consume.

### Small batches and reversibility

- PRIN-001 is implemented by CTRL-BATCH-003, CTRL-BATCH-004 and CTRL-BATCH-007.
- PRIN-002 is implemented by CTRL-BATCH-002, CTRL-BATCH-003 and CTRL-BATCH-005.
- PRIN-003 is implemented by CTRL-BATCH-003, CTRL-BATCH-005 and CTRL-BATCH-007.
- PRIN-004 is implemented by CTRL-BATCH-001 and CTRL-BATCH-003 through CTRL-BATCH-007.
- PRIN-005 is implemented by CTRL-BATCH-004, CTRL-BATCH-006 and CTRL-BATCH-007.
- PRIN-006 is implemented by CTRL-BATCH-001 through CTRL-BATCH-007.
- PRIN-008 is implemented by CTRL-BATCH-002, CTRL-BATCH-003 and CTRL-BATCH-005.
- PRIN-011 is supported by CTRL-BATCH-007.
- CTRL-BATCH-001 through CTRL-BATCH-007 consume CTRL-ACC-001, CTRL-ACC-003, CTRL-ACC-005 and CTRL-ACC-007.
- CTRL-BATCH-001 through CTRL-BATCH-007 consume CTRL-AUTH-002 through CTRL-AUTH-005, CTRL-AUTH-007 and CTRL-AUTH-008.
- CTRL-BATCH-001 through CTRL-BATCH-007 consume CTRL-EVID-001 through CTRL-EVID-008 and CTRL-PREC-001 through CTRL-PREC-007 as applicable.
- CTRL-BATCH-001 through CTRL-BATCH-007 are defined in `docs/core/small-batch-and-reversibility.md`.
- SRC-001, SRC-003 and SRC-007 inform the small-batch and reversibility model and are interpreted in `docs/core/small-batch-and-reversibility.md`.
- Later Pilot Edition procedures and artifacts must identify which CTRL-BATCH controls they implement or consume.

### Context, exceptions and system learning

- PRIN-001 is implemented by CTRL-CTX-002, CTRL-EXC-002, CTRL-LEARN-002 and CTRL-LEARN-003.
- PRIN-002 is implemented by CTRL-CTX-002, CTRL-EXC-001, CTRL-EXC-002 and CTRL-LEARN-003.
- PRIN-003 is implemented by CTRL-CTX-001, CTRL-CTX-003, CTRL-EXC-001, CTRL-EXC-002 and CTRL-LEARN-001 through CTRL-LEARN-003.
- PRIN-004 is implemented by CTRL-CTX-001 through CTRL-CTX-004, CTRL-EXC-001, CTRL-EXC-002 and CTRL-LEARN-001 through CTRL-LEARN-003.
- PRIN-005 is implemented by CTRL-EXC-001, CTRL-LEARN-002 and CTRL-LEARN-003.
- PRIN-008 is implemented by CTRL-CTX-002, CTRL-EXC-001, CTRL-EXC-002 and CTRL-LEARN-003.
- PRIN-009 is implemented by CTRL-CTX-001 through CTRL-CTX-004.
- PRIN-010 is protected by CTRL-EXC-001 because an exception cannot exceed the Pilot Edition authority ceiling.
- PRIN-011 is implemented by CTRL-LEARN-001 through CTRL-LEARN-003.
- CTRL-CTX-001 through CTRL-CTX-004, CTRL-EXC-001, CTRL-EXC-002 and CTRL-LEARN-001 through CTRL-LEARN-003 consume the applicable CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC and CTRL-BATCH controls.
- These controls are defined in `docs/core/context-exceptions-and-learning.md`.
- SRC-005, SRC-006 and SRC-007 inform the context, exception and learning model and are interpreted in `docs/core/context-exceptions-and-learning.md`.
- Later Pilot Edition procedures and artifacts must identify which CTRL-CTX, CTRL-EXC and CTRL-LEARN controls they implement or consume.

### Foundation adoption state

- PRIN-001 is implemented by CTRL-STATE-FND-001, CTRL-STATE-FND-004 and CTRL-STATE-FND-005.
- PRIN-002 is implemented by CTRL-STATE-FND-001 through CTRL-STATE-FND-005.
- PRIN-003 is implemented by CTRL-STATE-FND-003 through CTRL-STATE-FND-005.
- PRIN-004 is implemented by CTRL-STATE-FND-001 and CTRL-STATE-FND-003 through CTRL-STATE-FND-005.
- PRIN-005 is implemented by CTRL-STATE-FND-002 and CTRL-STATE-FND-004.
- PRIN-007 is implemented by CTRL-STATE-FND-004 and CTRL-STATE-FND-005.
- PRIN-008 is implemented by CTRL-STATE-FND-002 and CTRL-STATE-FND-003.
- PRIN-010 is implemented by CTRL-STATE-FND-001 and CTRL-STATE-FND-005.
- CTRL-STATE-FND-001 through CTRL-STATE-FND-005 consume the applicable normative-core controls.
- CTRL-STATE-FND-001 through CTRL-STATE-FND-005 are defined in `docs/adoption/foundation.md`.
- SRC-001 and SRC-010 inform the Foundation state and are interpreted in `docs/adoption/foundation.md`.
- Later Pilot Edition procedures and artifacts must identify how they implement or consume the Foundation state controls.

### Assisted Work adoption state

- PRIN-001 is implemented by CTRL-STATE-AST-001, CTRL-STATE-AST-004 and CTRL-STATE-AST-005.
- PRIN-002 is implemented by CTRL-STATE-AST-001, CTRL-STATE-AST-002 and CTRL-STATE-AST-005.
- PRIN-003 is implemented by CTRL-STATE-AST-002, CTRL-STATE-AST-003 and CTRL-STATE-AST-005.
- PRIN-004 is implemented by CTRL-STATE-AST-001 through CTRL-STATE-AST-005.
- PRIN-005 is implemented by CTRL-STATE-AST-003.
- PRIN-007 is implemented by CTRL-STATE-AST-004.
- PRIN-008 is implemented by CTRL-STATE-AST-001, CTRL-STATE-AST-002 and CTRL-STATE-AST-005.
- PRIN-009 is implemented by CTRL-STATE-AST-003.
- PRIN-010 is implemented by CTRL-STATE-AST-001 and CTRL-STATE-AST-004.
- CTRL-STATE-AST-001 through CTRL-STATE-AST-005 consume the applicable normative-core and Foundation controls.
- CTRL-STATE-AST-001 through CTRL-STATE-AST-005 are defined in `docs/adoption/assisted-work.md`.
- SRC-001, SRC-005 and SRC-010 inform the Assisted Work state and are interpreted in `docs/adoption/assisted-work.md`.
- Later Pilot Edition procedures and artifacts must identify how they implement or consume the Assisted Work state controls.
