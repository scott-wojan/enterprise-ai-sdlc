# PROC-BND-005: Execute a Bounded Change

## Purpose

Execute only the approved plan inside the implemented boundary, one recoverable batch at a time, while preserving action, deviation and stop evidence.

## Use when

PROC-BND-004 has an approved, current plan technically bound to a passing PROC-BND-003 grant and prepared base revision.

## Do not use when

Approval, grant or context expired; the base moved; required controls are unavailable; or any scope, risk or consequential decision remains unresolved.

## Accountable owner

The human execution owner.

## Participants

- AI executor using a dedicated bounded identity.
- Execution, repository, control, recovery and evidence owners.
- Human change owner and escalation contacts.

## Preconditions

- Plan, boundary, base revision and executor identity match.
- Preflight allowed and denied tests pass.
- Workspace is isolated and recoverable.
- Evidence capture and independent stop and revocation are active.

## Inputs

- Immutable approved plan and decisions.
- Versioned boundary grant and base revision.
- Applicable repository instructions and prepared context.
- Batch checks, stop signals, checkpoints and recovery actions.

## Actions

1. **The execution controller validates the start tuple.** Match work, plan, boundary, base, identity, configuration and expiry. Deny execution on any mismatch.
2. **The evidence system opens an execution record.** Capture authenticated start state, actor, versions and control status.
3. **The AI executor starts the next approved batch.** Perform only listed operations, paths, tools and commands. Do not optimize by adding adjacent work.
4. **Enforcement records each material action.** Preserve commands or tool calls, affected resources, outputs, errors, denied attempts and elapsed resource use.
5. **The executor reports uncertainty before acting.** Stop the batch when context conflicts, a consequential choice appears, or an unplanned dependency or side effect is required.
6. **Deterministic batch checks run.** Use the plan's exact commands and independent control status. AI interpretation cannot convert failure into success.
7. **The controller creates a checkpoint.** Record diff or equivalent, check evidence, remaining plan and recoverable state.
8. **A human or approved controller authorizes continuation.** Continue only if the batch matches plan and boundary and its required checks pass.
9. **Deviations follow explicit handling.** Denied operations, changed scope, plan mismatch, failed checks, unexpected sensitive data or resource limits stop execution and trigger containment, recovery, reclassification or replanning.
10. **The executor ends after the final approved batch.** It must not release, merge, deploy, approve, erase evidence or extend its own grant.
11. **The controller revokes and cleans up.** End processes, credentials, network access and workspace permissions, then verify no residual authority remains.

## Required human decisions

- The execution owner authorizes start and any human-gated continuation.
- Consequential or unplanned choices return to accountable domain owners.
- Control and recovery owners decide treatment after failures.
- AI cannot self-authorize deviation, retry outside policy, declare success or release the result.

## Outputs

- Authenticated execution record.
- Per-batch changes, actions, check results and checkpoints.
- Deviation, denial, uncertainty and stop evidence.
- Final candidate change or recovered state.
- Revocation and cleanup evidence.

## Verification

- Every changed resource belongs to an approved batch and path.
- Actions used only granted identities, tools, commands, destinations and resources.
- Each completed batch has independently produced check evidence.
- Deviations stopped before unapproved action.
- Final workspace is either the candidate state or an independently verified recovered state.
- Grant and residual access are removed after execution.

## Stop conditions

Stop immediately on plan or boundary mismatch, base drift, failed mandatory control, denied-operation attempt, unplanned consequential decision, unexpected sensitive data, unexplained check failure, lost evidence capture, resource limit, revocation signal or expired grant.

## Completion criteria

- Approved batches either complete with checkpoints or stop and recover.
- No unapproved work or side effect occurred.
- Actions, results and deviations are retained.
- Authority is revoked and cleanup verified.
- The candidate is handed to independent verification without a success claim.

## Measures

Record batch size, completed and recovered batches, deviations, denied attempts, stops, retries, execution time, resource use, cleanup failures and differences between planned and actual actions.

## Next procedures

- PROC-BND-006 to verify the candidate.
- PROC-BND-008 to respond to stopped or failed execution.
- PROC-BND-001 through PROC-BND-004 when scope, risk, base, boundary or plan changes.

## Applicable principles and controls

- PRIN-001 through PRIN-006 and PRIN-008 through PRIN-012.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-BATCH, CTRL-CTX, CTRL-EXC and CTRL-LEARN controls.
- CTRL-STATE-BND, applicable CTRL-BASELINE controls and PROC-BND-001 through PROC-BND-004.

