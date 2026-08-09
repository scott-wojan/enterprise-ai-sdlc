# PROC-PILOT-002: Select and Prepare a Pilot

## Purpose

Select a willing team and bounded use case, confirm readiness and controls, and establish support, incident, stop and recovery routes before real AI-assisted delivery work begins.

## Use when

ART-READY-001 approves Assisted Work or Bounded Change for a candidate scope and PROC-PILOT-001 has established the required baseline.

## Do not use when

Readiness, classification, required controls, outcome baseline, accountable owners or participant willingness are unresolved.

## Accountable owner

The pilot accountable owner designated by ROLE-ENT-001 and ROLE-ENT-002.

## Participants

- Candidate team and team delivery accountable owner.
- AI delivery governance and engineering policy owners.
- Product, architecture, security, compliance, release and service owners as applicable.
- Pilot support, enablement, measurement and incident owners.
- Repository, context, tool, identity and control owners.

## Preconditions

- Current ART-READY-001 and state decision cover the exact candidate scope.
- Approved-use category and risk class are current.
- The applicable minimum control profile passes.
- PROC-PILOT-001 baseline and guardrails are approved.
- Team participation is informed and psychologically safe.
- Funding, time and support capacity exist.

## Inputs

- Candidate teams, repositories and work types.
- ART-READY-001, AI stance and classification.
- State and authority requirements.
- Minimum-control profile and rehearsal evidence.
- Pre-pilot baseline, intended outcomes and guardrails.
- Context inventory, recovery evidence and known gaps.
- Support, incident and escalation capabilities.

## Actions

1. **The pilot owner screens candidate teams.** Confirm willingness, capability, stable ownership, relevant work, review capacity and sufficient time to learn and report failures.
2. **The delivery owner selects one bounded use case.** Name team, repository, work type, data, environment, outcome, exclusions and credible value. Reject showcase work that cannot provide representative evidence.
3. **The classification owner confirms treatment.** Reapply USE and RISK classes and verify the chosen state is the least autonomous state needed.
4. **Control owners reconcile the baseline.** Link each required control to owner, implementation, passing evidence, failure response and review trigger. Resolve or restrict every gap.
5. **The recovery owner rehearses stop and recovery.** For Bounded Change, verify batch, rollback or recovery, restored-state checks and authority. For Assisted Work, verify containment of incorrect or sensitive output before downstream use.
6. **The incident owner runs a scenario.** Exercise detection, stop, evidence preservation, access restriction, escalation, participant communication and restoration decision.
7. **The support owner activates support routes.** Publish usage, policy, context, technical, security and incident channels with coverage and escalation owners. Submit representative requests to verify routing.
8. **The enablement owner prepares participants.** Complete role-based scenarios for permissions, validation, evidence, stop conditions and incident reporting. Correct failed exercises before launch.
9. **The measurement owner fixes review rules.** Link baseline, outcomes, guardrails, diagnostic measures, data sources, feedback method and decision cadence.
10. **The pilot owner records launch and stop criteria.** Define scope, participant limit, work intake, effective period, completion, restriction, rollback and early-termination conditions.
11. **The AI delivery governance owner decides launch.** Approve Foundation continuation, Assisted Work, Bounded Change or no launch for the exact scope and activate only the matching grant.
12. **The pilot owner conducts a launch review.** Verify technical configuration matches the decision and every participant knows where to stop, ask for help and report an incident.

## Required human decisions

- Candidate team and use-case selection by the pilot owner.
- Product and delivery acceptance of intended outcome and scope.
- Security, compliance, architecture, release or service decisions required by classification.
- Measurement-owner approval of baseline and review rules.
- AI delivery governance owner's exact state and authority decision.
- Participant informed agreement to the pilot working conditions.

AI may assemble evidence and propose scenarios but must not select the team, approve launch or accept unresolved risk.

## Outputs

- Approved or rejected pilot decision.
- Named team, repository, work types, state, use category and risk class.
- Pilot charter containing outcomes, scope, exclusions, period, owners and stop criteria.
- Operational support and escalation map.
- Incident, containment, recovery and revocation rehearsal evidence.
- Participant preparation and willingness evidence.
- Control-profile, baseline and authority-grant references.

## Verification

- Scope matches ART-READY-001 and the authority grant.
- Required controls pass allowed and prohibited scenarios.
- Support and incident requests reach named owners.
- Stop and revocation can occur without AI cooperation.
- Bounded Change recovery restores an independently verified acceptable state.
- Participants apply policy and stop rules correctly in scenarios.
- Outcome and guardrail calculations reference the approved baseline.
- No unresolved gap is hidden by a launch condition or prompt.

## Stop conditions

Stop preparation or deny launch when ownership, willingness, classification, control operation, context, recovery, incident containment, support coverage, baseline or independent human review is inadequate. Also stop if incentives pressure participation or hide adverse evidence.

## Completion criteria

- The launch decision and exact scope are authenticated and implemented.
- Every owner accepts responsibilities and routes have been rehearsed.
- Participants complete preparation and can stop work safely.
- Controls, baseline, incident and recovery evidence are current.
- Pilot stop, review and closure criteria are published.
- No pilot work begins before these conditions are satisfied.

## Measures

Track preparation gaps, failed rehearsals, support-route failures, participant readiness concerns, time to revoke authority and differences between approved and technical scope. These measure pilot preparedness, not AI value.

## Next procedures

- Assisted Work procedures for an approved Assisted Work pilot.
- Bounded Change procedures for an approved Bounded Change pilot.
- Pilot review and advancement procedures at the defined interval or trigger.
- PROC-READY-001 when readiness is invalidated.
- PROC-PILOT-001 when comparison scope or measure definitions change.

## Applicable principles and controls

- PRIN-001 through PRIN-012 as applicable.
- All applicable CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-BATCH, CTRL-CTX, CTRL-EXC and CTRL-LEARN controls.
- CTRL-STATE-FND, CTRL-STATE-AST, CTRL-STATE-BND and CTRL-STATE-DEC controls.
- CTRL-READY, CTRL-BASE-OWN, CTRL-BASE-CLASS and CTRL-BASELINE controls.
- PROC-READY-001 and PROC-PILOT-001.
