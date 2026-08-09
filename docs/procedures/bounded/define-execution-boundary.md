# PROC-BND-003: Define an Execution Boundary

## Purpose

Translate an approved work classification into an explicit, least-authority, technically verifiable execution envelope that expires and can be revoked independently of the AI executor.

## Use when

PROC-BND-001 approves Bounded Change and PROC-BND-002 marks the exact repository revision ready.

## Do not use when

Scope or risk changed, repository preparation is incomplete, required isolation is unavailable, or the requested permissions exceed the Pilot Edition ceiling.

## Accountable owner

The human authority-grant owner.

## Participants

- Change, repository, identity, tool, environment and control owners.
- Security, data, network, service and release owners as applicable.
- AI executor, which receives only the implemented grant.

## Preconditions

- Current classification and preparation records identify the same scope and base revision.
- Required controls and recovery proof pass.
- Grant, revocation and evidence mechanisms operate without AI cooperation.

## Inputs

- Work classification, risk treatment and repository preparation record.
- Intended change, allowed files and acceptance evidence.
- Identity, tool, network, data, environment, resource and time capabilities.
- Stop, recovery, retention and exception requirements.

## Actions

1. **The change owner declares the required actions.** List only operations needed to produce the classified outcome.
2. **Each control owner defines its dimension.** Specify repository and revision, branch or workspace, writable and read-only paths, prohibited paths, environment, data classes, secrets, identities, tools, commands, network destinations, external side effects, compute limits, elapsed time, concurrency and output destinations.
3. **The authority owner removes unnecessary capability.** Deny by default and grant the smallest path, operation, duration and resource set that can complete the approved plan.
4. **The recovery owner defines containment.** State batch limit, checkpoints, stop signals, revocation mechanism, cleanup, rollback and acceptable restored-state checks.
5. **The evidence owner defines capture.** Identify immutable request, grant, identity, tool activity, changes, check results, approvals, exceptions and revocation evidence with retention.
6. **Required owners review exceptions.** Record rationale, compensating controls, owner and expiry. No exception may exceed the Pilot Edition ceiling or silently weaken a deterministic gate.
7. **Technical owners implement the boundary.** Configure permissions and enforcement outside prompts or model instructions.
8. **An independent verifier runs boundary tests.** Attempt allowed operations and representative denied operations for every material dimension.
9. **The authority owner issues the grant.** Bind it to the work identifier, base revision, executor identity, configuration version and automatic expiry.
10. **The execution owner performs a preflight.** Verify current technical state matches the authenticated grant immediately before plan approval or execution.

## Required human decisions

- Control owners decide limits for their dimensions.
- The authority owner approves the exact grant and any exception.
- The recovery owner accepts containment and recovery.
- An independent human accepts boundary-test evidence.
- AI cannot expand, renew, reinterpret or approve its own authority.

## Outputs

- Versioned execution-boundary specification.
- Implemented, time-bound authority grant.
- Allowed and denied boundary-test evidence.
- Revocation, cleanup, recovery and retention configuration.
- Approved exceptions with owners and expiry.

## Verification

- Every authority dimension is explicit, including a deny statement where no access is allowed.
- Permissions are enforced technically and do not rely only on prompts.
- Allowed tests succeed and representative prohibited operations fail safely.
- Revocation and expiry work without executor cooperation.
- Repository, identity, configuration and base revision match all upstream records.
- Cleanup leaves no residual credential, workspace, process or access grant.

## Stop conditions

Stop when any dimension is implicit, excessive or unenforced; a denied operation succeeds; revocation, expiry, cleanup or recovery fails; the base moves; an exception lacks approval; or required evidence cannot be retained.

## Completion criteria

- The least-authority boundary is approved and implemented.
- Every dimension has passing positive and negative evidence.
- Expiry, revocation, cleanup and recovery are rehearsed.
- The immutable grant version is ready for PROC-BND-004.

## Measures

Record excess permissions removed, failed negative tests, boundary violations, exception count and age, time to revoke, cleanup failures and scope changes requiring a new grant.

## Next procedures

- PROC-BND-004 to generate and approve a plan inside this boundary.
- PROC-BND-001 when work or risk changes.
- PROC-BND-002 when repository or base revision changes.
- Incident and revocation handling after a boundary violation.

## Applicable principles and controls

- PRIN-001 through PRIN-006, PRIN-008, PRIN-010 and PRIN-012.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-BATCH, CTRL-CTX and CTRL-EXC controls.
- CTRL-STATE-BND controls and applicable CTRL-BASELINE profile.
- PROC-BND-001 and PROC-BND-002.

