# PROC-PILOT-004: Start a Pilot

## Purpose

Integrate readiness, team and use-case selection, chartering, baseline, controls and technical launch into one testable pilot-start gate.

## Use when

An enterprise charter and ART-USE-001 nominate a possible Assisted Work or Bounded Change pilot.

## Do not use when

Ownership, willingness, classification, readiness, baseline, controls, support, incident response or recovery cannot be proven.

## Accountable owner

ROLE-OPS-003 value-stream owner with ROLE-ENT-001 accountable for state and authority.

## Participants

- Enterprise, value-stream, product, pilot and measurement owners.
- Candidate team and participant representatives.
- Platform, context, architecture, security, service, support and incident owners.

## Preconditions

- Current ART-ENT-001 and ART-USE-001.
- Named owners and willing candidate participants.
- Candidate scope is eligible under enterprise stance.

## Inputs

- Enterprise charter, use-case intake and relevant policy.
- Candidate team, repository, work, data, tools and environments.
- Readiness conditions, control baseline and role assignments.

## Actions

1. **The pilot owner invokes PROC-READY-001.** Produce current ART-READY-001 for the exact candidate.
2. **The selection group invokes PROC-PILOT-002.** Select representative bounded work and reject showcase, unwilling or unsupported candidates.
3. **Classification owners confirm USE and RISK.** Exclude denied or Pilot Edition-ineligible work.
4. **The measurement owner invokes PROC-PILOT-001.** Freeze cohort, measures, lineage, baseline, limitations and claim rules.
5. **The pilot owner creates ART-PILOT-001.** Record scope, outcomes, guardrails, exclusions, support, incident, recovery, review and stop criteria.
6. **Control owners apply and rehearse the exact profile.** Run allowed, denied, revocation, evidence, recovery and unable-to-evaluate scenarios.
7. **Participant representatives validate conditions.** Confirm informed willingness, safe reporting, time, review capacity and support access.
8. **Required owners approve the charter.** Authenticate state, authority, risks, baseline and launch conditions.
9. **Technical owners implement the decision.** Configure identities, grants, tools, context, environments, evidence and stop routes.
10. **An independent launch check compares decision with reality.** Start only when every precondition passes.

## Required human decisions

- Governance selects state and authority.
- Value-stream and product owners select work and outcomes.
- Participants agree to working conditions.
- Control, service and risk owners accept their launch evidence.

## Outputs

- Approved or rejected ART-PILOT-001.
- ART-READY-001, baseline and classification references.
- Passing control, support, incident and recovery rehearsals.
- Exact launch grant, participant scope and start date.

## Verification

- Every precondition has observable passing evidence.
- Charter names exclusions and stop criteria.
- Baseline predates pilot work.
- Ineligible work is technically excluded.
- Technical state matches all authenticated decisions.

## Stop conditions

Stop on failed readiness, missing baseline, unwilling participation, ineligible work, failed control or rehearsal, unresolved risk, inadequate review capacity, unsafe incentive or decision-to-technical mismatch.

## Completion criteria

- ART-PILOT-001 is approved and implemented.
- Baseline, controls and routes pass.
- Participant list and eligible work are fixed.
- PROC-PILOT-005 can onboard without hidden context.

## Measures

Record excluded candidates, failed preconditions, rehearsal defects, time to safe launch and technical-state mismatches.

## Next procedures

- PROC-PILOT-005 after approval.
- PROC-READY-001 or remediation after a stop.

## Applicable principles and controls

- PRIN-001 through PRIN-012 and all applicable readiness, baseline, state and substrate controls.
- ART-ENT-001, ART-USE-001, ART-READY-001 and ART-PILOT-001.
- PROC-PILOT-001 and PROC-PILOT-002.

