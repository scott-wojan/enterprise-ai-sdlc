# PROC-AST-001: Explain a Codebase

## Purpose

Produce a source-grounded explanation of a bounded codebase area without changing code, configuration, data or delivery state.

## Use when

An approved Assisted Work pilot needs architecture orientation, dependency tracing, behavior explanation, onboarding support or investigation planning.

## Do not use when

The request requires a change, access outside the approved scope, consequential operational judgment, secrets, prohibited data or an answer that cannot be checked against authoritative repository evidence.

## Accountable owner

The human requester who accepts the explanation for its stated use.

## Participants

- Human requester and relevant code owner.
- Repository and context owners.
- Security, architecture or service owners when their boundary is involved.
- AI assistant operating with read-only authority.

## Preconditions

- PROC-PILOT-002 approved the team, repository, use and Assisted Work authority.
- Repository scope, revision and access are explicit.
- Applicable context and minimum controls pass.
- The requester states the question, audience and intended decision.

## Inputs

- Exact question and bounded repository paths.
- Repository revision and approved context sources.
- Architecture records, tests, interfaces, operational documentation and ownership data.
- Applicable classification, exclusions and stop criteria.

## Actions

1. **The requester bounds the inquiry.** Record the question, audience, paths, revision, intended use and excluded systems.
2. **The AI assistant inventories available evidence.** List code, tests, configuration, documentation and records inspected. Do not imply access to uninspected sources.
3. **The AI assistant traces the relevant behavior.** Follow entry points, calls, data transformations, dependencies, side effects, failure paths and tests only as far as the question requires.
4. **The AI assistant labels every material statement.** Mark direct repository facts with source locations, identify reasoned interpretations as inference and identify unknowns explicitly.
5. **The AI assistant checks contradictions.** Compare implementation, tests, documentation and architecture records. Report conflicts instead of silently choosing one.
6. **The AI assistant drafts the explanation.** State scope and revision, then behavior, evidence, inferences, unknowns, risks and questions. Keep claims narrow enough to verify.
7. **The human code owner validates the result.** Check material claims against the cited revision, correct errors and decide whether the explanation is adequate for its intended use.
8. **The requester records disposition.** Accept, revise, escalate or reject the explanation and retain the decision with the evidence.

## Required human decisions

- The requester defines the question and intended use.
- The repository or code owner determines whether evidence is sufficient and the explanation is accurate.
- Relevant owners resolve contradictions and consequential interpretations.
- Only a human may authorize a follow-on change or operational action.

## Outputs

- A revision-bound codebase explanation.
- Evidence index with repository paths and symbols.
- Separate fact, inference, contradiction and unknown sections.
- Human validation and disposition record.
- Escalation or follow-on questions where needed.

## Verification

- Every material fact resolves to an inspected source at the recorded revision.
- Inferences are visibly distinct from facts and state their basis.
- Unknowns and contradictory sources are preserved.
- No file, repository setting, ticket, environment or runtime state changed.
- A knowledgeable human validates the explanation for its intended use.

## Stop conditions

Stop when scope is ambiguous, required context is unavailable or stale, access would exceed the grant, sensitive data appears unexpectedly, sources materially conflict, or the answer would require unsupported speculation. Escalate to the accountable owner.

## Completion criteria

- Scope, revision, intended use and inspected evidence are recorded.
- Material claims are verifiable and human validated.
- Facts, inferences, contradictions and unknowns are distinguishable.
- Disposition and any escalation are retained.
- Read-only authority was preserved.

## Measures

Record validation corrections, unsupported claims, missing-context stops, time to validated explanation and downstream rework attributed to the explanation. Do not treat output volume as value.

## Next procedures

- PROC-AST-002 when the explanation exposes requirement ambiguity.
- An approved Assisted Work procedure for documentation, tests or review.
- A Bounded Change intake procedure only after a separate human authorization.
- PROC-READY-001 when repeated context or control failures invalidate readiness.

## Applicable principles and controls

- PRIN-001 through PRIN-005, PRIN-008 through PRIN-011 as applicable.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-CTX, CTRL-EXC and CTRL-LEARN controls.
- CTRL-STATE-AST-001 through CTRL-STATE-AST-005.
- The applicable CTRL-BASELINE profile and PROC-PILOT-002.

