# PROC-AST-004: Suggest Tests

## Purpose

Produce evidence-linked test and edge-case suggestions for human evaluation without claiming that suggested or generated tests pass.

## Use when

An approved Assisted Work pilot needs advisory test ideas for a bounded requirement, component, change or failure.

## Do not use when

The task requires executing tests, changing a suite, approving coverage, processing unapproved data or substituting AI judgment for the test owner.

## Accountable owner

The human test or delivery owner for the scope.

## Participants

- Test or delivery owner and relevant developer.
- Product, security, reliability and domain reviewers as applicable.
- AI assistant operating with advisory, read-only authority.

## Preconditions

- PROC-PILOT-002 approves the Assisted Work use and sources.
- Requirements, revision, risk class and existing verification evidence are named.
- The test owner defines the decision the suggestions will support.

## Inputs

- Versioned requirements, acceptance criteria, code, interfaces and existing tests.
- Risk, incident, defect and operational evidence.
- Test standards, constraints and exclusions.

## Actions

1. **The test owner bounds the request.** Record scope, revision, test levels, risks and exclusions.
2. **The AI assistant inventories evidence.** Identify inspected behavior, requirements, existing tests and known failures.
3. **The AI assistant proposes test intents.** Cover normal, boundary, failure, misuse, recovery, concurrency, security and relevant nonfunctional behavior.
4. **The AI assistant links every suggestion.** Cite the requirement, code path, risk or prior failure that motivates it and label inference.
5. **The AI assistant states expected observations.** Describe setup, action and observable result without representing execution.
6. **The test owner triages suggestions.** Accept, revise, reject or defer each based on risk and existing coverage.
7. **Authorized humans implement and execute selected tests.** Use normal change, review and deterministic verification routes.
8. **The test owner records results separately.** Preserve actual run evidence and never merge suggestions with execution status.

## Required human decisions

- The test owner decides relevance, priority, adequacy and coverage.
- Authorized humans decide whether and how to implement tests.
- Only deterministic execution and accountable review establish a passing result.

## Outputs

- Evidence-linked test suggestion set.
- Human triage dispositions.
- References to separately implemented tests and actual run evidence when available.
- Explicit gaps, assumptions and escalation items.

## Verification

- Each suggestion links to an inspected source or labeled inference.
- Suggestions contain observable expected results.
- No suggestion is labeled passed, failed or covered without run evidence.
- Human ownership and disposition are recorded.
- AI made no repository or test-system change.

## Stop conditions

Stop when requirements, expected behavior, revision, data handling or ownership are unclear; sources conflict materially; or suggestions require prohibited access or speculation.

## Completion criteria

- Scope and evidence revision are recorded.
- Suggestions and human dispositions are retained.
- Actual test status, if any, is linked from separate deterministic evidence.
- Remaining gaps and risks have owners.

## Measures

Record accepted and rejected suggestions, defects found by implemented suggestions, duplicate suggestions, false assumptions, missing-context stops and review effort. Suggestion count is not coverage.

## Next procedures

- PROC-AST-002 for ambiguous expected behavior.
- PROC-AST-005 for advisory review of a human-created change.
- A Bounded Change procedure after separate change authorization.

## Applicable principles and controls

- PRIN-001 through PRIN-008 and PRIN-010 through PRIN-011 as applicable.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-CTX and CTRL-LEARN controls.
- CTRL-STATE-AST-001 through CTRL-STATE-AST-005 and the applicable CTRL-BASELINE profile.
- PROC-PILOT-002.

