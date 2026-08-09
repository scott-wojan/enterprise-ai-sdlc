# PROC-BND-008: Respond to Failed or Abandoned Execution

## Purpose

Contain a failed, unsafe or abandoned Bounded Change attempt, verify recovery, preserve reconstructable evidence and route repeated causes into system improvement.

## Use when

Any Bounded Change gate stops, an executor violates or approaches a boundary, work is abandoned, or release and operational validation fail.

## Do not use when

An active incident requires a higher-priority enterprise incident process. In that case, invoke that process and use this procedure only for AI-delivery evidence and follow-up.

## Accountable owner

The human failure-response owner, normally the change or incident owner.

## Participants

- Execution, authority, recovery, evidence and repository owners.
- Incident, service, security and data owners as applicable.
- Pilot governance and context owners for learning.

## Preconditions

- Independent stop, revocation and evidence mechanisms are available.
- Recovery target and acceptable-state checks were defined before execution.
- Escalation routes and severity ownership exist.

## Inputs

- Stop signal, failed gate, error, denial or abandonment record.
- Plan, boundary, candidate, checkpoint and action evidence.
- Recovery procedure, clean base and affected environment inventory.
- Incident and notification criteria.

## Actions

1. **The controller stops and revokes.** End execution, identities, credentials, network access, tools, jobs and side effects without waiting for AI cooperation.
2. **The response owner classifies the event.** Determine whether enterprise incident handling, security containment, notification or evidence preservation takes precedence.
3. **The evidence owner freezes reconstructable state.** Preserve requests, decisions, context versions, actions, outputs, denied attempts, candidate changes and control results.
4. **The recovery owner contains affected resources.** Prevent merge, release, propagation or reuse of uncertain artifacts.
5. **The recovery owner restores.** Use the last approved checkpoint, clean base, rollback or forward recovery named before execution.
6. **An independent verifier checks recovery.** Run restored-state integrity, access, build, data, service and security checks appropriate to impact.
7. **Technical owners clean up.** Remove residual workspaces, processes, credentials, caches, artifacts and permissions and verify removal.
8. **Accountable owners decide disposition.** Abandon, correct through a new approved plan, reclassify, restrict the use, pause the pilot or escalate.
9. **The learning owner classifies causes.** Examine requirements, context, harness, workflow, control, tool, model, environment and human-system factors, not only prompts.
10. **Repeated patterns create owned changes.** Assign context, control, workflow or readiness remediation with validation and due dates before another similar attempt.

## Required human decisions

- The response or incident owner decides severity, containment and communication.
- The recovery owner accepts the restored state.
- Governance decides restriction, retry or pilot pause.
- AI cannot decide recovery adequacy, erase evidence or authorize retry.

## Outputs

- Stop and revocation evidence.
- Preserved reconstructable failure record.
- Containment, recovery and cleanup evidence.
- Human disposition and any incident linkage.
- Cause classification and owned system remediation.

## Verification

- No executor authority or residual process remains.
- Affected artifacts cannot enter release accidentally.
- Restored state passes independent checks against the defined target.
- Evidence reconstructs events up to and after stop.
- Repeat failures are linked to system-level action and restricted until validated.

## Stop conditions

Escalate and keep the scope restricted when revocation, containment, recovery, evidence preservation or cleanup fails; impact is unknown; sensitive data may be exposed; or safe restoration cannot be proven.

## Completion criteria

- Execution is stopped and authority revoked.
- Containment, recovery and cleanup are independently verified.
- Evidence and human disposition are retained.
- Incident duties are satisfied where applicable.
- Retry is blocked until required remediation and new approvals pass.

## Measures

Record time to stop, revoke, contain and recover; residual-access failures; data or artifact propagation; recurrence; cause category; remediation completion; and unsafe retry attempts.

## Next procedures

- PROC-BND-001 through PROC-BND-004 for a newly approved retry.
- Pilot failure inspection and readiness reassessment.
- Existing enterprise incident management.

## Applicable principles and controls

- PRIN-001 through PRIN-012 as applicable.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-BATCH, CTRL-CTX, CTRL-EXC and CTRL-LEARN controls.
- Applicable state, baseline and pilot controls and PROC-BND-001 through PROC-BND-007.

