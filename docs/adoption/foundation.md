# Foundation Adoption State

## Purpose

Foundation is the default adoption state for an enterprise scope that has not yet demonstrated the capabilities required for AI-assisted delivery. It allows the organization to establish governance, controls, evidence, baselines and pilot support without treating tool access or elapsed time as readiness.

Foundation is not a low maturity score or a temporary waiting period. A team, repository, work type or enterprise scope may remain in Foundation for as long as its evidence supports that decision.

## Source basis and playbook decision

The required sources provide two relevant patterns:

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) treats AI benefit as dependent on organizational and delivery capabilities, with implementation, monitoring and continuous improvement rather than tool access alone.
- [SRC-010](../sources/source-ledger.md#src-010-github-enterprise-copilot-adoption-guidance) recommends specific engineering goals, small pilots, onboarding, support, feedback and iterative improvement.

This state is the playbook's normative entry boundary. It is vendor-neutral and more restrictive than product rollout guidance because it governs delivery authority, not license distribution.

## State assignment

A scope is assigned to Foundation when any of the following is true:

- It has not been evaluated against the Foundation exit evidence.
- Accountable ownership or the enterprise AI stance is missing or disputed.
- Approved use categories and prohibited uses are not explicit.
- Risk classification, authority grants or technical boundaries are unavailable.
- Evidence, control, context, exception, incident or revocation capabilities are not operational.
- The delivery baseline or pilot outcome measures are absent.
- The proposed team, repository or work type has not been approved for Assisted Work.
- A failure, incident or changed condition invalidates prior eligibility.

Assignment is made for a named scope. Different teams, repositories and work types may occupy different adoption states under common enterprise governance.

## Permitted activities

Foundation permits human-led preparation needed to establish and evaluate the operating system, including:

- Define accountable owners and escalation paths.
- Approve the enterprise AI stance, use categories and prohibitions.
- Classify work and risk and design authority boundaries.
- Establish context ownership, evidence storage and control mechanisms.
- Baseline delivery, quality, security, operational, experience and economic outcomes.
- Select candidate pilot teams, repositories and work types.
- Create onboarding, support, incident, restriction and revocation paths.
- Evaluate tools using public, synthetic or explicitly approved nonproduction material inside an isolated boundary.
- Rehearse controls, evidence capture and human gates without using outputs in managed delivery work.

Foundation evaluation activity must have a named owner, explicit scope, permitted data, isolated environment, resource limits and retained evidence. Evaluation does not create delivery authority.

## Prohibited activities

Within a scope assigned to Foundation, AI must not:

- Access nonpublic enterprise delivery context unless a separate, explicit evaluation grant permits the exact context and isolated purpose.
- Produce output that is used as an input to managed software-delivery decisions or changes.
- Modify a managed repository, shared environment or delivery artifact.
- Invoke state-changing enterprise tools or downstream workflows.
- Satisfy a human gate, approve work, accept risk or approve an exception.
- Receive production data, credentials, access or connectivity.
- Release, deploy, operate or modify production systems.
- Orchestrate delivery stages or other AI identities.

Uncontrolled individual experimentation with enterprise code, data or tools is not a permitted Foundation activity.

## Required capabilities

Foundation exit requires evidence that the target scope can operate all applicable capabilities below.

### Accountability and stance

- Named delivery, AI-governance and consequential-decision owners.
- Approved enterprise AI stance defining goals, allowed use, prohibited use and risk boundaries.
- A documented route to stop work and resolve disputed authority.

### Work and risk classification

- Approved use categories and exclusions.
- A method to classify work, data, systems, reversibility, blast radius and consequential decisions.
- A rule that uncertainty produces the more restrictive outcome.

### Authority and technical boundaries

- Versioned authority grants implementing CTRL-AUTH-001 through CTRL-AUTH-008.
- Identity, least authority, isolation, tool, context, resource, expiry and revocation enforcement.
- Technical prevention of actions prohibited by the target adoption state.

### Evidence and controls

- Durable evidence implementing CTRL-EVID-001 through CTRL-EVID-008.
- A control plan applying CTRL-PREC-001 through CTRL-PREC-007.
- Tested stop behavior for missing, failing or unreliable evidence and controls.

### Context and change safety

- Owned, versioned context assets and conflict handling.
- Small-batch, boundary, verification and recovery capabilities for any future state-changing work.
- Expiring exceptions, failure classification and repeated-failure improvement.

### Delivery baseline and measures

- Current baseline for the outcomes the pilot intends to affect.
- Quality, operational, security, product, experience and economic guardrails appropriate to the scope.
- A decision rule that does not treat usage, generated volume or suggestion acceptance as success.

### Pilot operation and support

- A candidate team, repository and work type with bounded objectives.
- Participant onboarding and an accessible support path.
- Incident, containment, restriction and revocation responsibilities.
- A review cadence and named authority for continuation, restriction and exit decisions.

## Required Foundation evidence

Foundation is evaluated through evidence, not a maturity score. The evidence package includes:

- Named scope and accountable owners.
- Approved AI stance, use categories and prohibitions.
- Work and risk classification method with completed examples for the target scope.
- Tested authority-grant and revocation mechanisms.
- Tested evidence and control-plan mechanisms.
- Context ownership inventory for required pilot assets.
- Delivery baseline and proposed pilot outcome measures.
- Candidate pilot definition, support route and incident rehearsal.
- Open gaps, exceptions and accountable dispositions.
- Explicit state decision and effective period.

Documents alone are insufficient where the capability is meant to enforce, detect or recover. The enterprise must provide an executed test, rehearsal or other observable result.

## State decisions

### Continue in Foundation

Use when preparation is progressing, the scope is intentionally not adopting AI-assisted delivery or exit evidence is incomplete. The decision records remaining gaps, owners and review triggers. Continued Foundation status is a valid outcome.

### Restrict or deny evaluation

Use when Foundation evaluation itself exceeds approved data, tool, environment, cost or risk boundaries, or when a failure invalidates its controls. Preserve evidence, contain effects and restrict or revoke the evaluation grant.

### Exit to Assisted Work

Use only when every applicable Foundation exit capability has current evidence and the target team, repository and work types are named. The AI delivery governance owner records the decision, exact scope, effective period, required controls and stop conditions. Exit permits only the Assisted Work state defined by the playbook. It does not grant Bounded Change authority.

### Exit to no AI use

Use when the organization decides that AI assistance is unnecessary, uneconomic, prohibited or unsupported for the scope. Record the reason and conditions that could trigger reassessment.

## Normative controls

### CTRL-STATE-FND-001: Assign Foundation by evidence gap

**Purpose:** Prevent unevaluated scopes from receiving AI-assisted delivery authority.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every enterprise, team, repository and work type before Assisted Work is approved and whenever eligibility becomes uncertain.

**Owner:** AI delivery governance owner.

**Requirement:** A scope must remain in or return to Foundation unless current evidence satisfies every applicable Foundation exit capability. Tool access, license assignment, user demand, prior success, elapsed time or another scope's approval must not establish eligibility.

**Enforcement or evaluation mechanism:** State assignment resolves the named scope and checks the Foundation evidence package before any Assisted Work grant can activate.

**Evidence:** Scope, evidence coverage, gaps, state decision, accountable owner, effective period and review triggers.

**Failure response:** Deny or suspend AI-assisted delivery authority and complete the missing evaluation or choose no AI use.

**Review frequency:** At initial classification, proposed exit and every material change, failure or incident affecting eligibility.

### CTRL-STATE-FND-002: Enforce Foundation prohibitions

**Purpose:** Keep preparation and tool evaluation from becoming unapproved delivery work.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every scope assigned to Foundation.

**Owner:** AI delivery governance owner.

**Requirement:** Foundation technical and process boundaries must prevent the prohibited activities in this state. An evaluation grant must not authorize managed delivery output, shared or production state change, consequential decisions or use of unapproved enterprise context.

**Enforcement or evaluation mechanism:** Identity, data, environment, tool, repository, network and downstream-effect boundaries enforce the state and record attempted violations.

**Evidence:** State policy, evaluation grants, technical boundary tests, action records and violation findings.

**Failure response:** Stop evaluation, contain effects, preserve evidence and restrict or revoke the grant under CTRL-AUTH-008.

**Review frequency:** At every grant, evaluation session, boundary change and detected violation.

### CTRL-STATE-FND-003: Bound and evidence Foundation evaluations

**Purpose:** Allow learning about tools and controls without silently creating delivery authority.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every AI-enabled evaluation performed in Foundation.

**Owner:** Delivery accountable owner for the evaluation.

**Requirement:** An evaluation must define objective, owner, public, synthetic or explicitly approved data, isolated environment, permitted tools and actions, resource limits, completion criteria, evidence and disposal. Outputs must be labeled evaluation-only and must not enter managed delivery work without a later state decision and separate authority.

**Enforcement or evaluation mechanism:** Evaluation intake validates the complete boundary and the environment prevents unauthorized data, state and downstream effects.

**Evidence:** Evaluation plan, grant, boundary verification, action and control results, findings, cost and disposal record.

**Failure response:** Do not begin or continue the evaluation. Correct the boundary, reduce scope or deny the activity.

**Review frequency:** Before each evaluation and whenever its data, tools, environment, scope or effects change.

### CTRL-STATE-FND-004: Demonstrate Foundation capabilities operationally

**Purpose:** Distinguish implemented capabilities from policies that have not been exercised.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every proposed exit from Foundation.

**Owner:** AI delivery governance owner with each capability owner.

**Requirement:** Every applicable Foundation exit capability must have current evidence. Enforcement, detection, stop, revocation, evidence and incident capabilities must be tested or rehearsed against the target scope. A document, configuration claim or product feature description alone must not prove operational readiness.

**Enforcement or evaluation mechanism:** Exit review maps each capability to an owner, artifact and observable test or rehearsal result and records open limitations.

**Evidence:** Completed Foundation evidence package, capability tests, rehearsal results, unresolved gaps and owner attestations tied to exact versions.

**Failure response:** Continue in Foundation, remediate the capability or narrow the proposed Assisted Work scope.

**Review frequency:** At proposed exit and after material capability, scope, tool, policy or personnel changes.

### CTRL-STATE-FND-005: Make an explicit continuation or exit decision

**Purpose:** Ensure state changes are accountable, scoped and evidence-based.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every Foundation review and proposed state change.

**Owner:** AI delivery governance owner.

**Requirement:** The owner must explicitly decide to continue Foundation, restrict or deny evaluation, exit to Assisted Work or exit to no AI use. The decision must identify exact scope, evidence, unresolved conditions, permitted activities, effective period, stop conditions and next review. Silence, elapsed time and partial completion do not change state.

**Enforcement or evaluation mechanism:** State management requires an authenticated decision and creates or changes authority only for the exact approved scope.

**Evidence:** State-decision record, evidence-package version, scope, outcome, conditions, effective period and review triggers.

**Failure response:** Preserve Foundation as the governing state and deny broader AI authority.

**Review frequency:** At every scheduled or triggered state review and proposed exit.

## Foundation completion check

Foundation is complete for a scope only when CTRL-STATE-FND-005 records an explicit exit. Completion does not imply advancement is required or desirable.

An exit to Assisted Work is valid only when:

- The exact scope and work types are named.
- Every applicable exit capability has current evidence.
- Required technical boundaries have been tested.
- Outcome baselines and guardrails exist.
- Support, incident, restriction and revocation routes are operational.
- Open gaps do not contradict the proposed authority.
- The decision grants only Assisted Work permissions.
