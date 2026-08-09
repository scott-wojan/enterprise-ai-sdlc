# PROC-AST-002: Analyze Requirements

## Purpose

Identify ambiguity, conflict, missing acceptance evidence and delivery risk in a bounded requirement set without deciding product intent or changing delivery artifacts.

## Use when

An approved Assisted Work pilot needs a structured human-review aid before planning or implementation.

## Do not use when

The AI would need to invent business intent, approve acceptance criteria, resolve a consequential tradeoff, modify a source of record or access unapproved data.

## Accountable owner

The human product or requirements owner for the analyzed scope.

## Participants

- Product or requirements owner.
- Delivery, architecture, security, compliance, service and test representatives as applicable.
- Context and source-system owners.
- AI assistant operating with read-only authority.

## Preconditions

- PROC-PILOT-002 approved the use and Assisted Work authority.
- The requirement set, version, source of record and decision owner are named.
- Applicable classification and controls pass.
- Stakeholders and consequential decision boundaries are known.

## Inputs

- Versioned business objective, requirements and acceptance material.
- Applicable policies, architecture constraints, interfaces and service expectations.
- Relevant codebase explanation, incidents, tests and prior decisions.
- Scope, exclusions, risk class and intended downstream use.

## Actions

1. **The requirements owner bounds the analysis.** Record sources, versions, objective, audience, exclusions and decision deadline.
2. **The AI assistant builds a source index.** Assign a reference to each inspected requirement, rule, decision and constraint.
3. **The AI assistant decomposes statements.** Separate outcomes, actors, conditions, inputs, behavior, constraints, failure handling and observable acceptance.
4. **The AI assistant tests analyzability.** Identify vague terms, missing values, unobservable outcomes, hidden dependencies, conflicting statements, unsupported assumptions and absent failure cases.
5. **The AI assistant identifies affected boundaries.** Surface likely security, privacy, compliance, architecture, operations, data, accessibility and release concerns without deciding them.
6. **The AI assistant produces questions and candidate clarifications.** Link every item to sources, label inference and explain what decision or verification the missing information blocks.
7. **Accountable humans resolve the questions.** Accept, revise, defer or reject each proposed clarification in the source-of-record workflow.
8. **The requirements owner validates closure.** Confirm the retained requirement set states observable acceptance and preserves unresolved items as explicit risks or stops.
9. **The requester records disposition.** Retain the analysis, human decisions, revised source version and remaining uncertainty.

## Required human decisions

- The product or requirements owner decides intent, priority and acceptance.
- Domain owners decide applicable constraints and tradeoffs.
- The delivery owner decides whether remaining uncertainty permits planning.
- AI-generated wording is never authoritative until a named human incorporates or approves it in the source of record.

## Outputs

- Version-bound requirements analysis.
- Source index and requirement decomposition.
- Ambiguity, conflict, assumption, dependency and missing-evidence register.
- Human-owned clarification questions and dispositions.
- Revised-source reference or explicit unresolved-risk record.

## Verification

- Every finding links to an inspected source or is labeled inference.
- Each ambiguity explains its delivery or verification consequence.
- Every proposed acceptance statement is observable and has a human owner.
- Human decisions, rejected suggestions and unresolved items are retained.
- No source-of-record or delivery state changed under AI authority.

## Stop conditions

Stop when sources or ownership are unclear, material stakeholders are absent, requirements conflict without an accountable resolver, prohibited data is encountered, or the analysis would require invented intent. Escalate rather than fill gaps probabilistically.

## Completion criteria

- Scope, source versions and objective are recorded.
- Material ambiguities and conflicts have human dispositions.
- Remaining uncertainty is explicit, owned and bounded.
- Acceptance expectations are observable or the work is stopped.
- Read-only authority was preserved.

## Measures

Record findings accepted or rejected by humans, ambiguity discovered before implementation, missing-context stops, analysis corrections and downstream rework linked to unresolved requirements. Counts alone do not establish quality.

## Next procedures

- PROC-AST-001 when implementation evidence is needed.
- An approved Assisted Work documentation, test-suggestion or review procedure.
- A Bounded Change intake procedure only after human-approved requirements and separate change authority.
- PROC-READY-001 when repeated source or ownership failures invalidate readiness.

## Applicable principles and controls

- PRIN-001 through PRIN-005, PRIN-007 through PRIN-011 as applicable.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-CTX, CTRL-EXC and CTRL-LEARN controls.
- CTRL-STATE-AST-001 through CTRL-STATE-AST-005.
- The applicable CTRL-BASELINE profile and PROC-PILOT-002.

