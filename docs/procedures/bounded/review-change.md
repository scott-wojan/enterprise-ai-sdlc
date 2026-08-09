# PROC-BND-007: Review a Bounded Change

## Purpose

Require accountable humans to judge intent, design, risk and maintainability after deterministic verification passes and before release.

## Use when

PROC-BND-006 records a passing gate for the exact candidate revision.

## Do not use when

Verification failed or is stale, required reviewers are unavailable or conflicted, the candidate changed, or review evidence is incomplete.

## Accountable owner

The human change-review owner.

## Participants

- Qualified code or artifact reviewer independent of the executor.
- Product, architecture, security, data, test, operations and release owners as required by classification.
- Change author or AI executor as respondent only.

## Preconditions

- Candidate, plan and passing verification evidence are immutable and linked.
- Required reviewer roles and focus areas are defined.
- Reviewers have source, context and decision evidence needed for independent judgment.

## Inputs

- Candidate and base comparison.
- Approved outcome, plan, decisions and acceptance evidence.
- Full execution and deterministic verification evidence.
- Risk, architecture, ownership, operational and recovery context.

## Actions

1. **The review owner confirms gate and identity.** Match the candidate to passing verification and reject stale results.
2. **Reviewers inspect intent.** Confirm the change implements the human-approved outcome and no inferred requirement became silent behavior.
3. **Reviewers inspect design.** Assess architecture fit, interfaces, dependencies, maintainability, data behavior and consistency with repository instructions.
4. **Reviewers inspect risk.** Evaluate security, privacy, compliance, reliability, operational, compatibility and rollback implications required by classification.
5. **Reviewers inspect verification adequacy.** Decide whether tests and controls address material risks without changing their recorded pass or fail state.
6. **Reviewers record evidence-linked findings.** State location, impact, required response and owner and distinguish blocking from advisory findings.
7. **The author responds through controlled change.** Any candidate modification invalidates prior verification and returns through the applicable planning, execution and verification gates.
8. **Required reviewers issue dispositions.** Approve, request changes, restrict or reject for their accountable areas.
9. **The review owner records the gate.** Pass only when all required approvals exist and blocking findings are resolved on the exact candidate.

## Required human decisions

- Product and domain reviewers decide whether intent and consequential constraints are satisfied.
- Qualified reviewers decide maintainability and material findings.
- The review owner decides gate completeness.
- AI cannot approve, dismiss findings, count as an independent reviewer or merge.

## Outputs

- Evidence-linked review findings and responses.
- Required reviewer dispositions.
- Overall human-review gate result bound to the candidate.
- Return path for changes, restrictions or rejection.

## Verification

- Required reviewers are authorized, competent and distinct from the AI executor.
- Review covers intent, design, risk, verification adequacy and maintainability.
- Blocking findings are resolved and reverified after any change.
- Approval refers to the exact candidate and cannot survive revision drift.
- Deterministic verification and human review remain separate recorded gates.

## Stop conditions

Stop on candidate drift, stale or failed verification, missing accountable reviewer, unresolved blocking finding, hidden generated content, unexplained behavior or pressure to approve without adequate evidence.

## Completion criteria

- All required human dispositions are retained.
- Blocking findings are resolved on a reverified candidate.
- The exact candidate has a passing human-review gate.
- Release receives verification and review as separate evidence.

## Measures

Record findings by source and severity, rework cycles, review duration, post-review defects, stale-approval attempts and disagreements that reveal context or control gaps.

## Next procedures

- PROC-BND-008 or replanning when review fails.
- PROC-BND-009 to complete evidence and authorize release after a pass.

## Applicable principles and controls

- PRIN-001 through PRIN-008 and PRIN-010 through PRIN-012.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-BATCH, CTRL-CTX and CTRL-LEARN controls.
- Applicable state and baseline controls and PROC-BND-001 through PROC-BND-006.

