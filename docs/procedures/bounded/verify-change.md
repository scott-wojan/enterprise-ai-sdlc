# PROC-BND-006: Verify a Bounded Change

## Purpose

Establish deterministic evidence about a candidate change before human review, with every required failure blocking completion.

## Use when

PROC-BND-005 produces a candidate change and complete execution evidence.

## Do not use when

The candidate revision is unknown, evidence is incomplete, required checks cannot run independently, or the workspace retains execution authority.

## Accountable owner

The human verification owner.

## Participants

- Verification, test, security, repository and evidence owners.
- Change author or AI executor as a respondent only.
- Required specialist owners for risk-specific checks.

## Preconditions

- Candidate, base, plan and boundary versions are fixed.
- Execution access is revoked and evidence preserved.
- Verification uses trusted identities and environments independent of the executor.

## Inputs

- Candidate diff or equivalent and base revision.
- Approved plan, acceptance criteria and required check set.
- Execution, checkpoint, denial and deviation evidence.
- Prepared baseline results and risk treatment.

## Actions

1. **The verification owner checks provenance.** Match candidate, base, plan, boundary and execution records and confirm no unrecorded changes.
2. **The verifier recreates a trusted test state.** Build from authoritative revisions in an approved environment independent of executor residue.
3. **Deterministic controls run in required order.** Execute build, lint, unit, integration, contract, security, policy, packaging and other classified checks.
4. **The evidence system records raw results.** Preserve command or control version, inputs, environment, timestamps, exit state and outputs.
5. **The verifier compares scope.** Detect changed files, dependencies, generated outputs, interfaces and side effects not present in the approved plan.
6. **The verifier handles failures.** Mark the gate failed, preserve evidence and route to failure response or a newly approved correction. Do not waive or reinterpret through AI narrative.
7. **The verification owner issues a gate result.** Record pass only when every required deterministic control passes against the exact candidate.

## Required human decisions

- The verification owner decides evidence completeness and candidate identity.
- Control owners decide whether a check is applicable, never whether a failure may be called a pass.
- Any waiver follows the exception process with an accountable human and cannot exceed the pilot ceiling.

## Outputs

- Immutable verification evidence set.
- Candidate provenance and scope comparison.
- Per-control pass, fail or not-run state with rationale.
- Overall verification gate result and routed failures.

## Verification

- Results come from trusted systems independent of executor self-report.
- Raw evidence is reproducible and bound to the candidate.
- Every required check ran and passed for an overall pass.
- Scope comparison finds no unapproved change.
- Failed, missing or stale evidence blocks PROC-BND-007.

## Stop conditions

Stop on provenance mismatch, unrecorded change, unavailable required check, compromised environment, lost evidence, non-reproducible result or any deterministic failure.

## Completion criteria

- Candidate provenance is proven.
- All required checks have retained results.
- Overall gate is unambiguously pass or fail.
- Only a passing candidate proceeds to human review.

## Measures

Record check failures, flaky or non-reproducible results, verification duration, scope mismatches, escaped failures and repeated control defects.

## Next procedures

- PROC-BND-007 after a pass.
- PROC-BND-008 after a failure.
- PROC-BND-004 for an approved correction plan.

## Applicable principles and controls

- PRIN-002 through PRIN-008 and PRIN-011 through PRIN-012.
- CTRL-EVID, CTRL-PREC, CTRL-BATCH, CTRL-AUTH and applicable state and baseline controls.
- PROC-BND-003 through PROC-BND-005.

