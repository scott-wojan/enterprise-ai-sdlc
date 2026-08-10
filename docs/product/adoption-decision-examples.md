# Adoption Decision Examples

## Status

Draft examples supporting the [Gate 3 decision model](adoption-decision-risk-model.md).

These examples test whether the model produces understandable and defensible consequences. They are not templates, universal thresholds, or claims about typical AI results. The numbers are hypothetical.

## How to read the examples

Each example shows:

- exact scope;
- evidence;
- interpretation;
- risks and hard stops;
- accountable decision owner;
- decision;
- what may continue;
- what must stop;
- remediation or next action.

## Example 1: Approved to proceed with Assisted Work

### Scope

One application team proposes using an approved AI assistant to draft internal release notes from already approved issue and pull-request records. Humans will review and publish the notes. AI receives read-only access to the named records and cannot change repository, release, or communication state.

### Evidence

- Product and release owners are named.
- The work type, sources, audience, and publication path are explicit.
- Source records contain no prohibited data for the approved assistant.
- Read-only access and retention limits have been tested.
- A release owner must compare every statement with the source and explicitly approve publication.
- Incorrect drafts can be discarded without downstream effect.
- Current manual effort and quality sampling are available for comparison.
- Cost has an enforced ceiling.

### Interpretation

The use case is bounded, reversible, independently reviewable, and suitable for Assisted Work. No hard stop is open.

### Owner

The release accountable owner decides whether the use case may begin. The AI adoption owner approves the AI authority boundary.

### Decision

**Approved.** Begin a four-week Assisted Work increment for the exact team, sources, and release-note type.

### May continue

- Drafting from named approved records.
- Human validation and publication through the existing release process.
- Evidence and cost capture.

### Must stop

- Drafting from unapproved systems or sensitive records.
- Automatic publication.
- Any claim of value before the complete comparison is evaluated.

### Next action

Implement the read-only grant, confirm reviewer capacity, and begin the approved increment.

## Example 2: Approved with conditions

### Scope

A team proposes AI-assisted test-case drafting for one nonregulated service. Humans will select, edit, implement, and run the tests.

### Evidence

- Requirements and code context are approved.
- Review and test execution remain human-controlled.
- Baseline test-design and review effort is available.
- Early evaluation found that drafts often omit failure and authorization cases.
- A required checklist and security-review sample detect the known omissions.
- The team can support a two-week review period but not open-ended additional work.

### Interpretation

The omission pattern is material but currently detectable and contained. It prevents unconditional approval but does not require a universal hard stop.

### Owner

The quality-engineering owner decides test suitability. The security owner approves the authorization-case control. The AI adoption owner approves Assisted Work authority.

### Decision

**Approved with conditions.** Proceed for two weeks with the required failure-mode checklist, security sampling, and a maximum of ten work items.

### May continue

- AI test drafting for the named service and work items.
- Human editing, implementation, and execution.

### Must stop

- Use on regulated services.
- Removal of the checklist or security sample.
- Continuation after ten items or two weeks without a new decision.

### Next action

Verify the conditions are active before the first work item and review omission evidence after five items.

## Example 3: Remediation required before launch

### Scope

A pilot proposes AI-assisted defect correction in a repository with adequate tests and review practices.

### Evidence

- The use case and baseline are well defined.
- The branch and environment are isolated.
- The team can review and reverse changes.
- The platform can grant repository write access, but it cannot currently prevent the pilot identity from changing workflow and security-policy files.
- The proposed charter says those files are prohibited.

### Interpretation

The current technical boundary does not enforce the approved scope. No real repository changes may begin. The gap is remediable.

### Risk and hard stop

HS-003 applies because the available grant includes unapproved actions. HS-004 also applies because policy-file protection cannot operate for the exact identity.

### Owner

The AI adoption owner blocks launch. The platform owner owns remediation. The security owner verifies the resulting restriction.

### Decision

**Remediation required.** Keep the proposed scope in Foundation. Do not activate Bounded Change.

### May continue

- Technical work to create and test the missing restriction.
- Read-only analysis that has a separate valid approval.

### Must stop

- Any AI-authored repository change under the proposed pilot grant.
- Pilot launch and value measurement.

### Remediation

Create a grant that denies changes to workflow and security-policy paths. Verify permitted and prohibited changes using the pilot identity. Repeat the launch decision with attached results.

## Example 4: Immediate hard stop after a boundary breach

### Scope

An approved Assisted Work use case allows read-only analysis of application source code. During use, the assistant retrieves a production credential from an incorrectly indexed operations document and attempts a connection to a production endpoint.

### Evidence

- The credential and endpoint were outside the approved context.
- Retrieval logs identify the source and pilot identity.
- The connection attempt was denied by network policy.
- The same index may expose other operations documents.

### Interpretation

The work crossed its context boundary and attempted a prohibited production action. The denied connection limited impact but does not make the activity acceptable.

### Risk and hard stop

HS-003 and the Pilot Edition production prohibition apply. The uncertain index scope requires broad containment.

### Owner

The security incident owner controls containment. The AI adoption owner revokes the affected grant. The service owner assesses production exposure.

### Decision

**Blocked and stopped.** Revoke the pilot identity and suspend every use case using the affected index.

### May continue

- Incident containment, evidence preservation, exposure analysis, and corrective work by authorized humans.

### Must stop

- All AI access to the affected index.
- Re-entry based on the prior approval.
- Claims that the network denial proves the overall boundary is effective.

### Remediation and re-entry

Remove prohibited content, rotate affected credentials, determine exposure, correct indexing controls, test denied retrieval, reassess related evidence, and make a new readiness and authority decision.

## Example 5: Faster implementation but worse across the SDLC

### Scope

One team uses AI for bounded implementation of comparable low-risk service changes during an eight-week pilot.

### Evidence

- Implementation effort falls from 18 to 11 hours per change.
- Review and correction effort rises from 6 to 15 hours.
- Test-maintenance effort rises by 3 hours.
- Code churn within 30 days rises from 9 percent to 21 percent.
- Escaped defects rise from 1 in 40 changes to 4 in 38 changes.
- Two changes create on-call work that did not occur in the baseline.
- Token and tool costs add $74 per completed change.
- Product outcome and release frequency do not materially improve.

### Interpretation

The seven hours saved during implementation are more than consumed by review, correction, test, and support work. Quality and maintainability deteriorate. Higher story completion or local implementation speed would misrepresent the result.

### Risk and hard stop

HS-008 applies to expansion. Whether current work must stop or can continue narrowly depends on the defect severity and containment decision.

### Owner

The AI adoption owner makes the continuation decision. Quality, service, product, and finance owners decide their affected categories.

### Decision

**Negative net value demonstrated. Restrict and remediate.** Do not expand. Return repository changes to Assisted Work while the team identifies the causes of review burden, churn, and defects.

### May continue

- Read-only analysis and drafting under the narrower posture.
- Root-cause analysis and controlled evaluation of improved context, batch size, tests, and review practices.

### Must stop

- Bounded Change for this work type.
- Productivity, savings, or success claims.
- Expansion to other teams or repositories.

### Next action

Create owned remediation for change size, specifications, deterministic checks, and reviewer load. A new baseline-aligned evaluation and decision are required before restoring Bounded Change.

## Example 6: Higher AI costs but positive net value

### Scope

A team uses Assisted Work to analyze recurring integration-test failures across one service family for twelve weeks.

### Evidence

- Tool, token, integration, and enablement costs total $48,000, which is $19,000 higher than the prior tool cost.
- Human triage and handoff effort falls by $71,000 on a fully burdened comparable basis.
- Review effort increases by $8,000.
- Rework falls by $14,000.
- Mean elapsed time from failure to accepted diagnosis falls by 31 percent.
- False diagnoses remain within the predeclared guardrail and are caught before implementation.
- Repeat incidents fall from 17 to 9.
- No material increase appears in security findings, change failure, on-call load, or participant overtime.
- Product and service owners confirm that faster diagnosis restored test environments earlier and reduced delayed releases.

### Interpretation

The AI-specific cost is higher, but the complete affected system shows a net cost reduction and better operational outcomes after review, rework, and support are included.

### Owner

The service owner decides operational suitability. Finance validates the cost boundary. The AI adoption owner makes the continuation decision.

### Decision

**Positive net value demonstrated. Approved to continue.** The use case is eligible for consideration of one bounded expansion, but expansion is not automatic.

### May continue

- The exact Assisted Work use case under its current boundary.
- Design of one proposed expansion for a separate stage-gate decision.

### Must stop

- Claims that lower elapsed time alone proves value.
- Expansion to a new service family, new data source, and greater authority in one bundled decision.

### Next action

Choose one expansion dimension, establish its new evidence and risk treatment, and return to Stage 7.

## Example 7: Value not demonstrated because evidence is missing

### Scope

A consulting team completes a six-week AI-assisted requirements-drafting pilot and proposes expansion to four more client teams.

### Evidence

- Participants report that first drafts are produced faster.
- Prompt and usage data are complete.
- Story counts increase by 12 percent.
- Review time was not captured.
- Requirement changes after implementation were not traced to the pilot cohort.
- Defect, rework, security, and release effects cannot be separated from other teams.
- Token charges are known, but license allocation, enablement, review, and rework costs are missing.
- No comparable baseline covers the full path from requested change through release.

### Interpretation

The evidence supports a usage and local drafting observation. It does not support a complete delivery or economic conclusion.

### Risk and hard stop

HS-009, HS-010, and HS-011 stop value, productivity, savings, and expansion claims.

### Owner

The measurement owner declares the evidence limitations. The AI adoption owner decides continuation. The executive sponsor decides whether to fund a measurement-discovery exercise.

### Decision

**Value not demonstrated. Expansion blocked.** The current use case may not be described as successful.

### May continue

- A separately authorized, time-boxed measurement-discovery exercise within the current scope.
- Current activity only if its prior approval remains valid and leadership accepts that no value claim can result yet.

### Must stop

- Expansion to other teams.
- Productivity, savings, or return-on-investment claims.
- Treating story count or positive participant feedback as proof of value.

### Next action

Decide whether to invest in a reliable baseline, downstream traceability, and total-cost collection. If not, close the pilot without a value claim.

## Example 8: Cross-category disagreement and escalation

### Scope

Leadership wants to expand a successful internal-code-assistance pilot to a repository containing regulated customer logic. Delivery supports expansion. Security requires stronger isolation. Legal is uncertain whether the proposed external model terms permit the data use. Finance has approved the expected cost.

### Evidence

- Prior positive results cover only internal nonregulated code.
- The new repository introduces regulated logic and restricted documentation.
- The proposed tool configuration does not provide the isolation security requires.
- Legal has not completed the contractual and data-use determination.
- Delivery argues that manual review will catch harmful output.

### Interpretation

Prior evidence does not cover the new data and obligation boundary. Manual output review does not control prohibited disclosure. Required category decisions are unresolved.

### Risk and hard stop

HS-003 and HS-005 apply unless approved data use and effective isolation are established. HS-007 prevents using prior pilot results as evidence for the new scope.

### Owner

Security owns the isolation decision. Legal owns contractual and data-use interpretation. The AI adoption owner integrates those decisions. The executive sponsor owns investment but cannot override security or legal authority.

### Decision

**Blocked.** The more restrictive decision governs while security and legal questions remain unresolved.

### May continue

- Evaluation using synthetic or approved nonregulated material in an isolated environment.
- Security design and legal review.

### Must stop

- Access to the regulated repository or documentation.
- Expansion based on the internal-code pilot.
- Executive approval that purports to replace security or legal disposition.

### Escalation and next action

Record each position and route the unresolved questions to the named security and legal escalation authorities. If approved treatment becomes available, create a new scoped risk, readiness, and expansion decision. If not, reject the use case or select an internal model and boundary that satisfies the requirements.

## Example 9: Loss of confidence requires pause, not manufactured compliance

### Scope

A pilot team is using Assisted Work for architecture decision drafting. Reviewers report that they no longer have enough time to check sources and that leadership treats disagreement with AI-generated proposals as resistance to adoption.

### Evidence

- Review time per decision has doubled.
- Two reviewers approved records without opening cited source material.
- Three participants report pressure to avoid recording negative findings.
- No evidence shows that the work has yet created a harmful architecture decision.
- Current approvals assume independent, meaningful human review.

### Interpretation

Human validation is becoming mechanical, and safe reporting is compromised. The condition invalidates the operating assumptions even without a confirmed technical incident.

### Risk and hard stop

HS-004 applies because required validation is not operating effectively. HS-002 may apply if participants cannot safely invoke a pause.

### Owner

The architecture owner pauses decision use. The pilot lead protects participant reporting. The executive sponsor must address leadership behavior and reviewer capacity.

### Decision

**Paused and remediation required.** AI-drafted architecture decisions cannot proceed to approval.

### May continue

- Evidence preservation, participant interviews, workload analysis, and process redesign.
- Nonconsequential experimentation that has separate approval and does not add review burden.

### Must stop

- Approval of AI-drafted architecture decisions.
- Retaliation or pressure to produce favorable findings.
- Characterizing approval counts as evidence of adoption success.

### Next action

Restore protected reporting, reduce workload, re-establish independent source review, and demonstrate that reviewers can reject work without penalty. Repeat the operating decision before resuming.

## Gate 3 example review questions

Approval of these examples requires agreement that:

1. The model produces a clear consequence rather than only a warning.
2. Local speed, usage, and output do not substitute for full-SDLC value.
3. Missing evidence prevents unsupported claims and expansion.
4. Higher AI cost can still produce value only when total net effects support it.
5. Hard stops narrow or stop the exact affected action.
6. Remediation evidence creates eligibility for reassessment, not automatic approval.
7. Executive sponsorship does not override specialized decision authority.
8. Team confidence and meaningful review are operating conditions, not optional sentiment measures.
