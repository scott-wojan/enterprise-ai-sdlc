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

### Bounded Change adoption state

- PRIN-001 is implemented by CTRL-STATE-BND-001 and CTRL-STATE-BND-006.
- PRIN-002 is implemented by CTRL-STATE-BND-001 through CTRL-STATE-BND-003 and CTRL-STATE-BND-006.
- PRIN-003 is implemented by CTRL-STATE-BND-003, CTRL-STATE-BND-005 and CTRL-STATE-BND-006.
- PRIN-004 is implemented by CTRL-STATE-BND-001 and CTRL-STATE-BND-003 through CTRL-STATE-BND-006.
- PRIN-005 is implemented by CTRL-STATE-BND-002, CTRL-STATE-BND-004 and CTRL-STATE-BND-006.
- PRIN-006 is implemented by CTRL-STATE-BND-001, CTRL-STATE-BND-003, CTRL-STATE-BND-004 and CTRL-STATE-BND-006.
- PRIN-008 is implemented by CTRL-STATE-BND-001, CTRL-STATE-BND-002 and CTRL-STATE-BND-006.
- PRIN-010 is implemented by CTRL-STATE-BND-001 and CTRL-STATE-BND-005.
- CTRL-STATE-BND-001 through CTRL-STATE-BND-006 consume the applicable normative-core, Foundation and Assisted Work controls.
- CTRL-STATE-BND-001 through CTRL-STATE-BND-006 are defined in `docs/adoption/bounded-change.md`.
- SRC-002, SRC-003, SRC-004 and SRC-007 inform the Bounded Change state and are interpreted in `docs/adoption/bounded-change.md`.
- Later Pilot Edition procedures and artifacts must identify how they implement or consume the Bounded Change state controls.

### Adoption-state decisions

- PRIN-001 is implemented by CTRL-STATE-DEC-001 through CTRL-STATE-DEC-005.
- PRIN-002 is implemented by CTRL-STATE-DEC-001 through CTRL-STATE-DEC-005.
- PRIN-003 is implemented by CTRL-STATE-DEC-002 through CTRL-STATE-DEC-005.
- PRIN-004 is implemented by CTRL-STATE-DEC-001, CTRL-STATE-DEC-002 and CTRL-STATE-DEC-004.
- PRIN-007 is implemented by CTRL-STATE-DEC-002 and CTRL-STATE-DEC-003.
- PRIN-008 is implemented by CTRL-STATE-DEC-001, CTRL-STATE-DEC-004 and CTRL-STATE-DEC-005.
- PRIN-010 is implemented by CTRL-STATE-DEC-003.
- CTRL-STATE-DEC-001 through CTRL-STATE-DEC-005 consume the three Pilot Edition state definitions and applicable normative-core controls.
- CTRL-STATE-DEC-001 through CTRL-STATE-DEC-005 are defined in `docs/adoption/state-decisions.md`.
- SRC-001 and SRC-010 inform the state-decision model and are interpreted in `docs/adoption/state-decisions.md`.
- Later Pilot Edition procedures and artifacts must identify the state decisions they consume or produce.

### Organizational and team readiness

- PRIN-001 is implemented by CTRL-READY-ORG-001 through CTRL-READY-ORG-004 and CTRL-READY-TEAM-001 through CTRL-READY-TEAM-002.
- PRIN-002 is implemented by CTRL-READY-ORG-001, CTRL-READY-ORG-002 and CTRL-READY-TEAM-001.
- PRIN-003 is implemented by CTRL-READY-ORG-001 through CTRL-READY-ORG-004 and CTRL-READY-TEAM-001.
- PRIN-004 is implemented by all organizational and team readiness controls.
- PRIN-007 is implemented by CTRL-READY-ORG-002 and CTRL-READY-TEAM-002.
- PRIN-008 is implemented by CTRL-READY-ORG-002, CTRL-READY-ORG-003 and CTRL-READY-TEAM-001.
- PRIN-010 is implemented by CTRL-READY-TEAM-002.
- CTRL-READY-ORG-001 through CTRL-READY-ORG-004 and CTRL-READY-TEAM-001 through CTRL-READY-TEAM-002 consume the applicable normative-core, Foundation and state-decision controls.
- These controls are defined in `docs/readiness/organizational-and-team.md`.
- SRC-001 and SRC-010 inform organizational and team readiness and are interpreted in `docs/readiness/organizational-and-team.md`.
- The readiness decision procedure must consume each readiness finding and its evidence.

### Engineering and context readiness

- PRIN-001 is implemented by CTRL-READY-ENG-001 through CTRL-READY-ENG-004 and CTRL-READY-CTX-001 through CTRL-READY-CTX-002.
- PRIN-002 is implemented by CTRL-READY-ENG-002 through CTRL-READY-ENG-004 and CTRL-READY-CTX-002.
- PRIN-004 is implemented by all engineering and context readiness controls.
- PRIN-005 is implemented by CTRL-READY-ENG-003 and CTRL-READY-ENG-004.
- PRIN-006 is implemented by CTRL-READY-ENG-002 and CTRL-READY-ENG-004.
- PRIN-008 is implemented by CTRL-READY-CTX-002.
- PRIN-009 is implemented by CTRL-READY-CTX-001 and CTRL-READY-CTX-002.
- PRIN-011 is supported by the remediation and review triggers in all engineering and context readiness controls.
- CTRL-READY-ENG-001 through CTRL-READY-ENG-004 and CTRL-READY-CTX-001 through CTRL-READY-CTX-002 consume the applicable normative-core and adoption-state controls.
- These controls are defined in `docs/readiness/engineering-and-context.md`.
- SRC-001, SRC-005, SRC-006 and SRC-007 inform engineering and context readiness and are interpreted in `docs/readiness/engineering-and-context.md`.
- The readiness decision procedure must consume each finding, restriction and remediation item.

### Control and measurement readiness

- PRIN-001 is implemented by all control and measurement readiness controls.
- PRIN-002 is implemented by CTRL-READY-CTL-001 through CTRL-READY-CTL-004.
- PRIN-003 is implemented by CTRL-READY-CTL-001, CTRL-READY-CTL-003 and CTRL-READY-CTL-004.
- PRIN-004 is implemented by CTRL-READY-CTL-001, CTRL-READY-CTL-003, CTRL-READY-CTL-004 and CTRL-READY-MEAS-001 through CTRL-READY-MEAS-003.
- PRIN-005 is implemented by CTRL-READY-CTL-002 and CTRL-READY-CTL-003.
- PRIN-007 is implemented by CTRL-READY-MEAS-001 through CTRL-READY-MEAS-003.
- PRIN-008 is implemented by CTRL-READY-CTL-001, CTRL-READY-CTL-002 and CTRL-READY-CTL-004.
- CTRL-READY-CTL-001 through CTRL-READY-CTL-004 and CTRL-READY-MEAS-001 through CTRL-READY-MEAS-003 consume the applicable normative-core and adoption-state controls.
- These controls are defined in `docs/readiness/control-and-measurement.md`.
- SRC-001, SRC-008 and SRC-009 inform control and measurement readiness and are interpreted in `docs/readiness/control-and-measurement.md`.
- The readiness decision and pilot procedures must consume each finding, restriction, baseline and measure definition.

### Readiness decision and remediation

- PRIN-001 is implemented by PROC-READY-001 and ART-READY-001 through evidence-based state selection and reassessment.
- PRIN-002, PRIN-003, PRIN-004, PRIN-007, PRIN-008 and PRIN-010 are implemented by the procedure's scoped decision, accountability, evidence, measurement, authority and optional-advancement rules.
- PRIN-011 is implemented by owned remediation and triggered reassessment.
- PROC-READY-001 consumes every organizational, team, engineering, context, control and measurement readiness condition.
- PROC-READY-001 consumes the Pilot Edition state definitions and CTRL-STATE-DEC-001 through CTRL-STATE-DEC-005.
- PROC-READY-001 produces ART-READY-001, state and authority restrictions, remediation and risk decisions.
- ART-READY-001 is defined in `docs/artifacts/readiness-decision.md` and consumed by state, authority, foundation and pilot procedures.
- SRC-001 informs the procedure's capability and evidence orientation and is interpreted in the readiness chapters.

### Enterprise ownership and AI stance

- PRIN-001, PRIN-002, PRIN-003, PRIN-004, PRIN-008 and PRIN-010 are implemented by CTRL-BASE-OWN-001 through CTRL-BASE-OWN-005.
- PRIN-009 and PRIN-011 are implemented by CTRL-BASE-OWN-002, CTRL-BASE-OWN-003 and CTRL-BASE-OWN-005.
- ROLE-ENT-001 through ROLE-ENT-004 are defined in `docs/foundation/ownership-and-ai-stance.md` and consume the accountable role archetypes in `docs/core/accountability.md`.
- CTRL-BASE-OWN-001 through CTRL-BASE-OWN-005 consume organizational readiness, ART-READY-001 and the applicable normative-core and state controls.
- SRC-001 and SRC-010 inform enterprise ownership and stance and are interpreted in `docs/foundation/ownership-and-ai-stance.md`.
- Foundation, readiness, pilot and team procedures must identify the enterprise roles and stance version they consume.

### Approved use and change-risk classification

- PRIN-001, PRIN-002, PRIN-004, PRIN-006, PRIN-008 and PRIN-010 are implemented by CTRL-BASE-CLASS-001 through CTRL-BASE-CLASS-005.
- PRIN-003 is implemented by the consequential-decision ownership required by CTRL-BASE-CLASS-001, CTRL-BASE-CLASS-003 and CTRL-BASE-CLASS-005.
- USE-ADV, USE-BND, USE-EVAL and USE-DENY define approved-use categories.
- RISK-C1 through RISK-C4 define change-risk classes and their actions and gates.
- CTRL-BASE-CLASS-001 through CTRL-BASE-CLASS-005 consume the normative-core risk, authority, batch and evidence controls plus the Pilot Edition states.
- These categories, classes and controls are defined in `docs/foundation/use-and-risk-classification.md`.
- SRC-002, SRC-003, SRC-008 and SRC-009 inform classification and are interpreted in `docs/foundation/use-and-risk-classification.md`.
- Readiness, pilot and delivery procedures must consume and preserve the classification.

### Pilot Edition minimum control baseline

- PRIN-002, PRIN-004, PRIN-005 and PRIN-008 are implemented by CTRL-BASELINE-001 through CTRL-BASELINE-005.
- PRIN-001 and PRIN-010 are implemented by the baseline's state and risk profiles and restriction rules.
- The Foundation, Assisted Work and Bounded Change profiles map normative controls to required owners, enforcement and evidence.
- RISK-C1 through RISK-C4 add risk overlays to those state profiles.
- CTRL-BASELINE-001 through CTRL-BASELINE-005 consume CTRL-READY-CTL and the normative control families.
- The profiles and controls are defined in `docs/foundation/minimum-controls.md`.
- SRC-006, SRC-008 and SRC-009 inform the baseline and are interpreted in `docs/foundation/minimum-controls.md`.
- Readiness, pilot selection and delivery procedures must consume the applicable profile and preserve test evidence.

### Pre-pilot delivery baseline

- PRIN-001, PRIN-004, PRIN-007 and PRIN-010 are implemented by PROC-PILOT-001.
- PROC-PILOT-001 consumes ART-READY-001, CTRL-READY-MEAS-001 through CTRL-READY-MEAS-003 and the applicable state and baseline controls.
- PROC-PILOT-001 produces versioned scope, measure definitions, baseline results, lineage, limitations, confounders and claim restrictions.
- SRC-001 and SRC-010 inform the outcome and pilot orientation and are interpreted in `docs/procedures/pilot/establish-baseline.md`.
- Pilot selection, review and advancement procedures must consume the exact baseline version.

### Pilot selection and preparation

- PRIN-001, PRIN-002, PRIN-003, PRIN-004, PRIN-007, PRIN-008 and PRIN-010 are implemented by PROC-PILOT-002.
- PROC-PILOT-002 consumes ART-READY-001, the AI stance, use and risk classification, minimum control profile and PROC-PILOT-001 baseline.
- It produces the pilot charter, launch decision, exact grant, support map, participant preparation, stop criteria and incident and recovery rehearsal evidence.
- SRC-001 and SRC-010 inform evidence-based pilot selection, support and iterative review and are interpreted in `docs/procedures/pilot/select-and-prepare.md`.
- Every Pilot Edition delivery procedure must consume the approved pilot scope and stop criteria.

### Assisted explanation and requirements analysis

- PRIN-001 through PRIN-005 and PRIN-008 through PRIN-011 are implemented by PROC-AST-001 through bounded, read-only, source-grounded explanation and human validation.
- PRIN-001 through PRIN-005 and PRIN-007 through PRIN-011 are implemented by PROC-AST-002 through versioned analysis, visible uncertainty and human-owned intent decisions.
- PROC-AST-001 and PROC-AST-002 consume the approved Assisted Work scope, CTRL-STATE-AST controls, the applicable CTRL-BASELINE profile and PROC-PILOT-002.
- They produce revision-bound evidence, explicit fact and inference separation, human dispositions, unresolved-risk records and escalation evidence.
- SRC-005 and SRC-006 inform context-grounded explanation and specification analysis and are interpreted in `docs/procedures/assisted/`.
- No output from these procedures grants change authority.

### Assisted documentation drafting

- PRIN-001 through PRIN-005 and PRIN-007 through PRIN-011 are implemented by PROC-AST-003 through source mapping, draft-only authority, human accuracy review and authorized publication.
- PROC-AST-003 consumes the approved Assisted Work scope, CTRL-STATE-AST controls, applicable classification and CTRL-BASELINE profile, and PROC-PILOT-002.
- It produces an authorized source map, non-authoritative draft, review dispositions, human-approved candidate and verified publication record.
- SRC-005 and SRC-010 inform context-grounded drafting and bounded pilot use and are interpreted in `docs/procedures/assisted/draft-documentation.md`.
- AI cannot own accuracy, approval, publication or audience permissions.

### Assisted test suggestion and code review

- PROC-AST-004 implements evidence-linked advisory test design while separating suggestions from deterministic execution results.
- PROC-AST-005 implements revision-bound advisory code review while preserving independent checks and accountable human approval.
- Both procedures consume the approved Assisted Work scope, CTRL-STATE-AST controls, CTRL-PREC controls, applicable CTRL-BASELINE profile and PROC-PILOT-002.
- They produce source-linked observations, visible uncertainty, coverage limits and human dispositions without change or approval authority.
- SRC-006 and SRC-008 inform specification-led review and deterministic control precedence and are interpreted in these procedures.

### Assisted incident summary and outcome evaluation

- PROC-AST-006 preserves human incident authority while producing a source-grounded timeline with visible uncertainty.
- PROC-AST-007 uses the pre-pilot baseline and balanced flow, quality, risk and experience evidence to decide continue, condition, restrict, pause or stop.
- Both consume the approved Assisted Work scope, applicable controls and PROC-PILOT-002. PROC-AST-007 also consumes PROC-PILOT-001.
- SRC-001, SRC-005 and SRC-010 inform balanced outcome review, context-grounded synthesis and measured rollout and are interpreted in these procedures.

### Bounded Change classification and repository preparation

- PROC-BND-001 consumes USE and RISK classification plus Bounded Change state controls and prevents the executor from lowering treatment.
- PROC-BND-002 consumes the classification and produces revision-bound context, baseline checks, access configuration and recovery evidence.
- Both produce explicit reroute, restriction and stop evidence and implement bounded authority, small-batch, context and reversibility principles.
- SRC-003, SRC-004 and SRC-005 inform lifecycle classification, specification evidence and repository context preparation and are interpreted in these procedures.

### Bounded execution boundary

- PROC-BND-003 translates classification and repository preparation into an explicit, least-authority, expiring technical grant.
- It covers repository, revision, path, environment, data, secret, identity, tool, command, network, side-effect, resource, time, output, evidence, recovery and cleanup dimensions.
- Positive and negative boundary tests implement deterministic precedence and produce durable evidence before execution.
- SRC-007, SRC-008 and SRC-009 inform harness-enforced boundaries, security controls and financial-services governance and are interpreted in this procedure.

### Bounded plan and approval

- PROC-BND-004 consumes classification, prepared-repository and execution-boundary versions and produces an immutable small-batch plan.
- It separates factual constraints from consequential choices and records accountable human dispositions before execution.
- Each batch names scope, checks, review, stop and recovery, and technical gating prevents execution without matching approval.
- SRC-002, SRC-003 and SRC-004 inform specification artifacts, lifecycle gates and human approval and are interpreted in this procedure.

### Bounded execution

- PROC-BND-005 consumes the immutable plan, boundary, prepared base and executor identity as a matched start tuple.
- It executes recoverable batches, records material actions, runs independent checks and stops on uncertainty or deviation before unapproved action.
- It produces a candidate or verified recovered state, full execution evidence and revocation and cleanup proof without claiming success.
- SRC-003, SRC-004 and SRC-007 inform lifecycle execution, specification-led batches and harness enforcement and are interpreted in this procedure.
