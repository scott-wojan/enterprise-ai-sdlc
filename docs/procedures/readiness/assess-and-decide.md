# PROC-READY-001: Assess Readiness and Decide

## Purpose

Convert scoped organizational, team, engineering, context, control and measurement evidence into an explicit adoption-state decision, restrictions and owned remediation.

## Use when

- A team, repository and work type are first evaluated for AI-assisted delivery.
- Assisted Work or Bounded Change is proposed.
- A state review, expansion, restoration or material operating change requires reassessment.
- A failure, incident or evidence gap may invalidate prior readiness.

## Do not use when

- The scope, accountable owner or proposed work type is unknown.
- Required evidence cannot be accessed by authorized reviewers.
- An active incident requires immediate containment before assessment.
- The request seeks a vendor comparison, product configuration or general AI-governance decision outside software delivery.

## Accountable owner

The AI delivery governance owner is accountable for the readiness decision. Each readiness condition, consequential decision and remediation item retains its named owner.

## Participants

- Delivery accountable owner.
- Team delivery accountable owner.
- Repository and engineering-control owners.
- Context, identity, access, security, compliance, release and service owners as applicable.
- Pilot measurement and support owners.
- Representatives of the proposed participant team.

## Preconditions

- The enterprise AI stance and organizational authority are resolvable.
- The team, repository, work types, data, environment and proposed state are named.
- CTRL-READY-ORG-001 through CTRL-READY-ORG-004 and CTRL-READY-TEAM-001 through CTRL-READY-TEAM-002 can be evaluated.
- CTRL-READY-ENG-001 through CTRL-READY-ENG-004 and CTRL-READY-CTX-001 through CTRL-READY-CTX-002 can be evaluated.
- CTRL-READY-CTL-001 through CTRL-READY-CTL-004 and CTRL-READY-MEAS-001 through CTRL-READY-MEAS-003 can be evaluated.
- Evidence storage, access and decision recording are available.

## Inputs

- Proposed readiness and state-decision scope.
- Intended delivery outcomes and proposed AI participation.
- [Organizational and team readiness](../../readiness/organizational-and-team.md) evidence.
- [Engineering and context readiness](../../readiness/engineering-and-context.md) evidence.
- [Control and measurement readiness](../../readiness/control-and-measurement.md) evidence.
- Applicable Foundation, Assisted Work and Bounded Change state requirements.
- Current authority grants, exceptions, incidents, failures and remediation.
- Existing baseline, measure definitions and known data limitations.
- Prior ART-READY-001 records for the scope.

## Actions

1. **The AI delivery governance owner fixes the decision scope.** Record the enterprise boundary, team, repository, work types, risk classes, data, environment, AI identities, current state, proposed state and review period. Identify overlapping state decisions and apply the more restrictive state until resolved.
2. **Condition owners assemble evidence.** Link each mandatory readiness condition to current evidence, source, version, owner and review date. Record unavailable, stale, conflicting and scope-mismatched evidence as gaps.
3. **Qualified participants evaluate conditions.** Assign Ready, Ready with restriction, Gap or Not applicable to each condition. Record the observable basis. Do not calculate a composite score.
4. **The delivery owner maps findings to work and authority.** Identify which work types and actions each gap prohibits or restricts. Missing capability must change eligible work or authority rather than remain a narrative concern.
5. **Participants evaluate target-state eligibility.** Apply the exact Foundation, Assisted Work or Bounded Change requirements and the advancement gate in the state-decision chapter. Confirm that the proposed state is the least autonomous state that achieves the intended outcome.
6. **Owners create remediation.** For every gap, record one accountable owner, required action, completion evidence, dependencies, current restriction and reassessment trigger. When remediation will not be pursued, route the exposure to an authorized human risk decision.
7. **The AI delivery governance owner makes the state decision.** Select Foundation, Assisted Work, Bounded Change or no AI use for the exact scope. The decision may continue, restrict or roll back an existing state. Record conditions, effective period, stop triggers and next review.
8. **The artifact owner publishes ART-READY-001.** Preserve evidence links, findings, restrictions, remediation and authenticated decisions. Notify work, authority, support and control owners of resulting obligations.
9. **The AI delivery governance owner verifies enforcement.** Confirm state and grant systems implement the selected scope and restrictions before any work begins or resumes.

## Required human decisions

- One accountable human disposition for every Not applicable finding and disputed readiness condition.
- One authorized risk decision for every gap intentionally left without remediation.
- The AI delivery governance owner's authenticated state decision for the exact scope.
- Applicable consequential-decision owner approval when the proposed state or remediation affects product, architecture, security, compliance, financial, release or operational authority.

AI may assemble evidence and identify inconsistencies within its authority. It must not assign readiness outcomes, accept gaps, select the state or approve remediation.

## Outputs

- One completed ART-READY-001 readiness decision.
- Exact adoption-state and authority scope.
- List of eligible and prohibited work types.
- Enforced restrictions and stop triggers.
- Remediation backlog with owners and evidence requirements.
- Risk decisions for intentionally accepted gaps.
- Reassessment schedule and event triggers.

## Verification

- Every mandatory readiness condition has exactly one outcome and current evidence or an explicit gap.
- No composite score appears in the decision.
- Every gap changes eligible work or has an authorized risk decision.
- Every remediation item has one accountable owner and observable completion evidence.
- The selected state satisfies its entry or continuation requirements.
- Mixed-state and overlapping scopes are resolved through the more restrictive state.
- The implemented grant and technical boundaries match ART-READY-001.
- All authenticated decisions reference the exact artifact version.

## Stop conditions

Stop the procedure when:

- Decision scope or accountability is unresolved.
- Evidence integrity, provenance or access is unreliable.
- An active incident or boundary breach requires containment.
- Participants cannot independently evaluate a material condition.
- A proposed exception exceeds the Pilot Edition boundary.
- A state or grant is activated before the decision is complete.

Contain affected work, preserve evidence and escalate under CTRL-ACC-007, CTRL-EVID-008 or CTRL-AUTH-008 as applicable.

## Completion criteria

- ART-READY-001 is complete, versioned and approved.
- Every condition and gap has a disposition.
- The selected state, eligible work and restrictions are technically implemented.
- Remediation and risk decisions have owners and review triggers.
- Affected participants and control owners have received the decision.
- No work begins or resumes outside the approved scope.

## Measures

Measure procedure operation using:

- Time from complete evidence availability to decision.
- Number and age of unresolved readiness gaps.
- Percentage of remediation items verified by their target review.
- State or authority mismatches found after decision.
- Reassessment triggered by material change, failure or incident.
- Participant reports that readiness restrictions or decisions are unclear.

These are procedure-health measures. They do not establish pilot success or justify advancement alone.

## Next procedures

- Foundation remediation and enterprise-foundation procedures for unresolved gaps.
- Pilot selection and preparation after an eligible state is approved.
- Assisted Work procedures for approved advisory work.
- Bounded Change procedures only after exact Bounded Change eligibility and authority are approved.
- Repeat PROC-READY-001 at the recorded reassessment trigger.

## Applicable principles and controls

- PRIN-001 through PRIN-012 as applicable.
- CTRL-ACC-001 through CTRL-ACC-007.
- CTRL-AUTH-001 through CTRL-AUTH-008.
- CTRL-EVID-001 through CTRL-EVID-008.
- CTRL-PREC-001 through CTRL-PREC-007.
- CTRL-BATCH-001 through CTRL-BATCH-007.
- CTRL-CTX-001 through CTRL-CTX-004.
- CTRL-EXC-001 through CTRL-EXC-002.
- CTRL-LEARN-001 through CTRL-LEARN-003.
- All applicable CTRL-STATE and CTRL-READY controls.
