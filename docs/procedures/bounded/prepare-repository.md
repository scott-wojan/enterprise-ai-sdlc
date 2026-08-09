# PROC-BND-002: Prepare a Repository

## Purpose

Verify that a classified repository scope contains sufficient, current and testable context for bounded AI execution.

## Use when

PROC-BND-001 approves proposed work for Bounded Change.

## Do not use when

Classification is missing or expired, the repository revision is unstable, required instructions cannot be authoritative, or control and recovery checks cannot be run.

## Accountable owner

The human repository owner.

## Participants

- Repository, change, context, test and control owners.
- Architecture, security and service owners as applicable.
- AI may perform read-only discovery and propose gaps.

## Preconditions

- Current PROC-BND-001 decision identifies exact scope and treatment.
- The repository, base revision and ownership are fixed.
- Required access is available through approved identities and tools.

## Inputs

- Classification decision and control profile.
- Repository instructions, architecture and ownership records.
- Build, test, lint, scan, packaging and recovery commands.
- Dependency, environment, data and release constraints.

## Actions

1. **The repository owner fixes the base.** Record repository, branch or equivalent, immutable revision, paths and excluded areas.
2. **The context owner inventories instructions.** Identify applicable repository, directory and work-specific rules and resolve precedence.
3. **The delivery team verifies navigation context.** Confirm ownership, architecture boundaries, interfaces, dependencies, generated content and sensitive locations are discoverable.
4. **Control owners run preparation checks.** Execute approved build, test, lint, scan and policy commands on the unchanged base and retain results.
5. **The recovery owner proves restoration.** Verify clean reset or equivalent recovery to the recorded base without relying on the AI executor.
6. **The tool owner verifies isolation and access.** Confirm identity, write paths, network, secrets, tools, time and resource limits match the classification.
7. **The context owner records gaps and contradictions.** Assign owners and either repair context through a normal human-owned change or restrict scope.
8. **The repository owner issues a preparation decision.** Mark ready for boundary definition, ready with explicit restrictions, or stopped.

## Required human decisions

- The repository owner approves the base, instructions and preparation status.
- Control owners accept check evidence and any restriction.
- The recovery owner accepts the recovery proof.
- AI cannot declare the repository ready or repair context under this procedure.

## Outputs

- Revision-bound repository preparation record.
- Applicable instruction and context inventory.
- Baseline check results and recovery proof.
- Approved tool, identity and isolation configuration.
- Owned gaps, restrictions or stop decision.

## Verification

- A new participant can locate all applicable instructions from the recorded scope.
- Baseline checks run with reproducible commands and retained outputs.
- Recovery restores and independently verifies the recorded base.
- Technical permissions match the classified scope.
- Missing or contradictory context is not hidden in prompts.

## Stop conditions

Stop when the base moves, instructions conflict, ownership is absent, required checks fail unexplained, recovery is unproven, sensitive paths are not isolated, or needed access exceeds classification.

## Completion criteria

- Repository, revision, scope and instructions are fixed.
- Baseline checks and recovery proof pass.
- Access and isolation match treatment.
- Gaps are resolved, restricted or explicitly stop execution.
- Outputs are ready for PROC-BND-003.

## Measures

Record preparation failures, context gaps, baseline defects, recovery failures, time to readiness and repeated repository-level friction.

## Next procedures

- PROC-BND-003 to define the execution boundary.
- PROC-BND-001 when scope or risk changes.
- Context remediation through normal human-owned change control.

## Applicable principles and controls

- PRIN-001 through PRIN-006 and PRIN-008 through PRIN-011.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-BATCH, CTRL-CTX and CTRL-LEARN controls.
- CTRL-STATE-BND controls, applicable readiness and CTRL-BASELINE controls.

