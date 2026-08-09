# PROC-BND-004: Generate and Approve a Change Plan

## Purpose

Convert approved work into a small-batch, verifiable execution plan and obtain accountable human decisions before any AI-authored change begins.

## Use when

PROC-BND-003 has produced a passing, current execution boundary for an eligible change.

## Do not use when

The outcome, acceptance, base revision, authority grant or required approvers are unresolved, or exploration would require write access.

## Accountable owner

The human change owner.

## Participants

- Change owner, AI planner and intended executor.
- Product, repository, architecture, security, test, release and service owners as applicable.
- Authority, control and recovery owners.

## Preconditions

- PROC-BND-001 through PROC-BND-003 outputs are current and agree on scope.
- Planning uses read-only access.
- Consequential decisions and accountable approvers are identified.
- Acceptance, stop and recovery conditions are known.

## Inputs

- Classified outcome and acceptance evidence.
- Prepared repository revision and applicable instructions.
- Authenticated execution-boundary version.
- Required controls, checks, reviewers, release conditions and known risks.

## Actions

1. **The change owner states the planning question.** Bind it to work identifier, base revision, outcome, exclusions and boundary version.
2. **The AI planner inspects authorized context.** Cite relevant files, tests, interfaces, dependencies and instructions and record missing or conflicting context.
3. **The AI planner identifies decision points.** Separate factual constraints from choices involving product intent, architecture, security, data, compatibility, operations or release.
4. **The AI planner proposes alternatives.** For consequential choices, describe bounded options, tradeoffs, risks and evidence needed without selecting on behalf of accountable humans.
5. **Accountable owners decide.** Record selected or rejected alternatives and any conditions in the durable decision record.
6. **The AI planner creates ordered batches.** For each batch state intended change, allowed paths and operations, dependencies, deterministic checks, review evidence, stop condition and recovery point.
7. **Control owners review the verification plan.** Confirm required build, test, lint, scan, policy, comparison and manual review gates are independent of AI claims.
8. **The recovery owner reviews reversibility.** Confirm each batch can stop and restore an independently verifiable acceptable state.
9. **The authority owner checks plan-to-boundary fit.** Reject any task, tool, path, side effect or duration outside the implemented grant.
10. **Required humans approve the immutable plan.** Authenticate plan version, base revision, boundary, decisions, batches, checks, reviewers, stop conditions and expiry.
11. **The execution owner performs the final gate.** Confirm approval is current and technical execution cannot start against another plan or revision.

## Required human decisions

- Product and change owners decide intended behavior and acceptance.
- Domain owners decide consequential architecture, security, data, compatibility, operational and release choices.
- Control and recovery owners approve checks and reversibility.
- The authority owner approves plan-to-grant fit.
- AI cannot approve, self-modify or silently reinterpret the plan.

## Outputs

- Immutable, versioned change plan.
- Source inventory, facts, assumptions, gaps and alternatives.
- Authenticated consequential decisions and approvers.
- Ordered batches with checks, review, stop and recovery instructions.
- Approval, rejection or clarification record.

## Verification

- Plan scope, base revision and boundary versions match upstream evidence.
- Every consequential choice has one accountable human disposition.
- Each batch is independently checkable and recoverable.
- Required deterministic checks and reviewers are named before execution.
- Technical gating rejects an absent, expired, changed or mismatched approval.

## Stop conditions

Stop when context or acceptance is ambiguous, a consequential decision lacks an approver, the plan exceeds the boundary, a batch is not recoverable, required verification is unavailable, or scope or base revision changes.

## Completion criteria

- The approved plan is complete, immutable and current.
- Human decisions and required reviewers are authenticated.
- Every batch has observable checks and recovery.
- Execution is bound technically to the approved plan, boundary and base revision.
- PROC-BND-005 can begin without hidden conversation context.

## Measures

Record clarification cycles, rejected plans, decisions surfaced before execution, plan changes, boundary mismatches, batch size and execution rework caused by plan defects.

## Next procedures

- PROC-BND-005 to execute the approved plan.
- PROC-BND-001 through PROC-BND-003 when scope, risk, repository or authority changes.
- Human-only design work when consequential choices remain unresolved.

## Applicable principles and controls

- PRIN-001 through PRIN-006 and PRIN-008 through PRIN-012.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-BATCH, CTRL-CTX and CTRL-EXC controls.
- CTRL-STATE-BND and applicable CTRL-BASELINE controls.
- PROC-BND-001 through PROC-BND-003.

