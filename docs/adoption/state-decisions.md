# Pilot Edition Adoption-State Decisions

## Purpose

This chapter defines how an enterprise assigns, continues, expands, restricts and rolls back Foundation, Assisted Work and Bounded Change for a specific team, repository and work type.

Advancement is optional. The correct state is the least autonomous state that achieves the intended outcomes within approved risk, control and operating conditions.

## Source basis and playbook decision

The required sources provide two relevant patterns:

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) ties AI outcomes to observable organizational and delivery capabilities that require monitoring and continuous improvement.
- [SRC-010](../sources/source-ledger.md#src-010-github-enterprise-copilot-adoption-guidance) recommends bounded pilots, explicit goals, support, feedback and iterative rollout based on observed results.

The decision system below is the playbook's normative synthesis. It governs delivery authority rather than product deployment and does not assume broader autonomy is desirable.

## Decision scope

Every state decision names:

- Enterprise or business boundary.
- Team and accountable owner.
- Repository, component or service.
- Work type and change-risk class.
- Data and context classes.
- AI identity or approved identity class.
- Environment and downstream boundaries.
- Current state and proposed state.
- Effective period and review triggers.

State is not assigned to a tool, license, job title or enterprise globally unless the evidence truly covers every included scope. Unlisted combinations retain their current state or Foundation when unevaluated.

## Mixed-state operation

An enterprise may operate different states simultaneously. For example:

- One team may use Assisted Work for documentation while remaining in Foundation for regulated business rules.
- One repository may permit Bounded Change for tests but only Assisted Work for authentication code.
- One work type may be Bounded Change in a disposable environment and prohibited against a production-connected environment.
- A team may return one work type to Foundation without affecting a separately evidenced use case.

Shared governance remains consistent, but authority, controls and evidence follow the exact scope. When scopes overlap, the more restrictive applicable state governs the overlapping work until an accountable decision resolves it.

## Required decision inputs

Every state review uses current evidence for:

- Intended delivery outcome and why AI participation is relevant.
- Current state, scope and authority grants.
- Applicable readiness and Foundation capabilities.
- Work, data, system, consequential-decision and reversibility risks.
- Control availability, effectiveness, failures and exceptions.
- Context ownership, quality, conflicts and access.
- Delivery, quality, operational, security, product, experience and economic baseline.
- Observed outcomes for the reviewed scope.
- Human review capacity, competence, support and psychological safety.
- Incidents, rollbacks, repeated failures and corrective actions.
- Cost, resource use and unresolved uncertainty.

Missing or unreliable evidence produces the more restrictive decision. Usage and suggestion acceptance remain diagnostic and cannot prove readiness or success.

## Decision outcomes

### Enter Foundation

Assign when a scope is new, unevaluated or lacks evidence for AI-assisted delivery. Entry may also follow a rollback from a broader state.

### Continue the current state

Use when the state remains effective and proportionate. Record the evidence period, conditions, unresolved items and next review. Continuation is a positive decision, not failure to advance.

### Expand within the current state

Add a team, repository, work type, data class, tool or duration only when the added scope independently satisfies the same state's requirements. Expansion creates a new decision and authority version.

### Advance to the next state

Foundation may advance to Assisted Work. Assisted Work may advance to Bounded Change. A scope must not skip a state because prior evidence from the narrower state is part of the decision basis.

### Restrict within the current state

Reduce scope, context, tools, actions, resources, duration or participants while retaining the state for a smaller boundary.

### Roll back to a more restrictive state

Return Bounded Change to Assisted Work or Foundation, or Assisted Work to Foundation. Rollback is an authority reduction and can occur immediately when evidence or containment is uncertain.

### Exit to no AI use

Stop AI participation for the scope when it is prohibited, unsupported, ineffective or unnecessary.

## Advancement gate

Advancement requires all of the following for the exact proposed scope:

- Current state requirements are satisfied and observed in real or approved evaluation work.
- Target-state eligibility, controls, evidence and support are operational.
- Intended outcomes show sufficient benefit or learning to justify added authority.
- Quality, security, operational, policy, experience and economic guardrails remain acceptable.
- Material failures have treatment and repeated failures have verified system improvement or current risk acceptance.
- Human review and decision capacity remain effective.
- Risk, blast radius and reversibility support the proposed authority.
- A named accountable human approves the exact target state and grant.

No single metric, time period, number of successful tasks or vendor recommendation satisfies the gate. The decision explains why the complete evidence package is sufficient.

## Restriction and rollback triggers

Restrict or roll back when:

- A state eligibility condition or required capability is no longer satisfied.
- Authority, context, evidence, control or recovery boundaries fail.
- A material incident, escaped defect or unexpected downstream effect occurs.
- AI attempts or performs a prohibited action.
- Human validation becomes mechanical, unavailable or unsustainable.
- Repeated failures do not produce effective system change.
- Risk, cost, blast radius or work scope exceeds the approved treatment.
- Data, policy, regulation, contract, tool or operating conditions change materially.
- Outcome evidence shows no justified value or unacceptable tradeoffs.
- The state decision, grant or exception expires.

Restriction may be immediate. Restoration requires fresh evidence and a new state or authority decision.

## Normative controls

### CTRL-STATE-DEC-001: Decide state for an exact scope

**Purpose:** Support mixed-state operation without ambiguous or inherited authority.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every Foundation, Assisted Work and Bounded Change assignment or review.

**Owner:** AI delivery governance owner.

**Requirement:** Every state decision must define the complete decision scope, current and selected state, permitted activities, required controls, evidence, effective period and review triggers. Unlisted or overlapping scope must receive the more restrictive applicable state.

**Enforcement or evaluation mechanism:** State and work-intake systems resolve all scope dimensions before activating or selecting an authority grant.

**Evidence:** Authenticated state decision, exact scope, state, conditions, authority references and effective period.

**Failure response:** Assign Foundation or preserve the more restrictive existing state until scope is resolved.

**Review frequency:** At initial assignment, every work item with ambiguous scope and every material scope change.

### CTRL-STATE-DEC-002: Use complete evidence for every transition

**Purpose:** Prevent state changes based on enthusiasm, isolated success or tool-adoption activity.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every continuation, expansion, advancement, restriction, rollback and exit decision.

**Owner:** AI delivery governance owner with applicable capability, control and outcome owners.

**Requirement:** A transition decision must evaluate every required decision input using current evidence for the exact scope. Missing, stale, conflicting or unreliable evidence must produce the more restrictive outcome. Usage, generated volume, suggestion acceptance and elapsed time must not establish transition eligibility.

**Enforcement or evaluation mechanism:** The decision gate maps each input to a resolvable evidence source, owner, version and disposition.

**Evidence:** Decision-input index, evidence package, gaps, conflicts, owner dispositions and selected outcome.

**Failure response:** Continue or move to the more restrictive state, remediate evidence gaps and set reassessment triggers.

**Review frequency:** At every transition decision and after material evidence-integrity or operating-condition changes.

### CTRL-STATE-DEC-003: Make advancement optional and sequential

**Purpose:** Keep increased AI authority tied to need and demonstrated capability rather than maturity pressure.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every proposed expansion or advancement.

**Owner:** AI delivery governance owner.

**Requirement:** Advancement must be justified against the intended outcome and satisfy the complete advancement gate. A scope must not skip an adoption state. The owner may continue the current state or choose no AI use when added authority provides insufficient value or creates disproportionate risk, cost or review demand.

**Enforcement or evaluation mechanism:** Transition validation checks current-state evidence, target-state evidence, sequential progression and accountable rationale for added authority.

**Evidence:** Current and target states, advancement-gate results, intended outcomes, alternatives, tradeoffs and decision.

**Failure response:** Continue the current state, narrow the proposed scope or reject advancement.

**Review frequency:** At every proposed expansion or advancement.

### CTRL-STATE-DEC-004: Restrict or roll back promptly

**Purpose:** Reduce authority when evidence, controls or operating conditions no longer support the current state.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every active Assisted Work or Bounded Change scope and every listed trigger.

**Owner:** AI delivery governance owner until an incident or control owner accepts escalation.

**Requirement:** A restriction or rollback trigger must stop affected work and produce an immediate scope and authority decision. Uncertain impact receives the broader restriction. Restoration must not rely on the prior approval and requires containment, corrective evidence and a new decision.

**Enforcement or evaluation mechanism:** Monitoring, control and incident routes can suspend grants and state eligibility before review completes.

**Evidence:** Trigger, affected scope, containment, restricted or rolled-back state, authority action, corrective work and restoration or closure decision.

**Failure response:** Keep the scope in the more restrictive state or exit to no AI use until eligibility is re-established.

**Review frequency:** At every trigger, during containment and before restoration.

### CTRL-STATE-DEC-005: Reconcile overlapping state decisions

**Purpose:** Prevent mixed-state operation from creating hidden permission through conflicting scope assignments.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every work item covered by more than one team, repository, work-type, data, environment or enterprise decision.

**Owner:** AI delivery governance owner with owners of the conflicting scopes.

**Requirement:** Before work begins, overlapping state decisions must be reconciled across every scope dimension. The most restrictive applicable state and authority govern until accountable owners record a new consistent decision. AI must not select the broader interpretation.

**Enforcement or evaluation mechanism:** Work intake resolves all applicable decisions, detects conflicts and blocks broader grants while conflict remains.

**Evidence:** Applicable decisions, conflict, temporary governing state, owner disposition and superseding or clarified decision.

**Failure response:** Stop affected work, apply Foundation or the narrower active state and escalate unresolved ownership conflict.

**Review frequency:** At every work intake, organizational or repository change and state-policy update.

## Decision completion check

A state decision is complete only when:

- Exact scope and overlaps are resolved.
- Every required input has current evidence or an explicit gap disposition.
- The selected state grants no broader authority than the evidence supports.
- Advancement, when selected, is sequential and justified.
- Restrictions, expiry and rollback triggers are executable.
- Accountable humans approve the state and resulting authority.
- The evidence package records alternatives, tradeoffs and next review.

A decision to continue, restrict, roll back or use no AI is as valid as advancement when supported by evidence.
