# Context Ownership, Exceptions and System Learning

## Purpose

This chapter defines context as an owned engineering asset, prevents exceptions from becoming permanent hidden policy, classifies failures consistently and requires repeated failures to improve the delivery system or receive explicit human risk acceptance.

The chapter closes the loop between observed AI-assisted delivery failures and changes to context, workflow, tools, controls, authority or scope.

## Source basis and playbook decision

The required sources provide three complementary patterns:

- [SRC-005](../sources/source-ledger.md#src-005-context-engineering-for-coding-agents) describes layered context, deterministic and model-selected loading, gradual context construction and the risk of stale, excessive or contradictory instructions.
- [SRC-006](../sources/source-ledger.md#src-006-harness-engineering-for-coding-agent-users) combines feedforward guidance with feedback sensors and recommends improving the harness when the same issue recurs.
- [SRC-007](../sources/source-ledger.md#src-007-engineering-the-agentic-sdlc) separates system, domain and approach context and attributes many failures to gaps in the surrounding workflow rather than the model alone.

The controls below are this playbook's normative decisions. They make these patterns operational without requiring a specific context format, agent or platform.

## Context assets

A context asset is a durable source intentionally made available to humans, AI or controls for delivery work. Examples include:

- Product intent, specifications and acceptance criteria.
- Architecture decisions, system boundaries and interface contracts.
- Domain rules, examples, terminology and authoritative references.
- Repository instructions, coding conventions and secure-development rules.
- Procedures, runbooks, control definitions and approval policies.
- Tool descriptions, schemas and permitted-use instructions.
- Test data, scenarios, captured behavior and expected outcomes.
- Operational knowledge, service dependencies and recovery guidance.

Conversation history is not an owned context asset unless required content is extracted, reviewed, versioned and stored in an approved system of record.

## Context ownership standard

CTRL-CTX-001 through CTRL-CTX-004 make this standard enforceable.

Every material context asset must have:

- A stable identifier or resolvable location.
- One accountable human owner.
- Defined purpose, audience and work types.
- Authoritative source and provenance.
- Scope, applicability and precedence.
- Sensitivity and access classification.
- Current version and effective date.
- Validation method and known limitations.
- Review frequency and event-based review triggers.
- Supersession, retirement and escalation rules.

The owner is accountable for correctness, applicability, conflict resolution, access and lifecycle. The owner may delegate maintenance but does not transfer accountability without explicit reassignment.

## Context review triggers

A context asset must be reviewed when:

- Its scheduled review is due.
- The owning product, domain, architecture, policy, tool or system changes materially.
- A referenced source is updated, withdrawn or becomes unavailable.
- A control failure, incident, escaped defect or repeated clarification indicates a context gap.
- Users or AI identify ambiguity, contradiction, missing scope or stale guidance.
- The asset is proposed for a new work type, adoption state, repository, team or risk class.
- Its owner, access classification or system of record changes.
- An exception relies on or contradicts it.

Until review resolves a material concern, the asset is restricted to its last verified scope or removed from active context.

## Context assembly and precedence

Context supplied for a work item must be the smallest sufficient set of applicable assets. More context is not automatically better.

The assembly record identifies:

- Work and authority-grant identifiers.
- Included asset identifiers and versions.
- Why each asset applies.
- Required assets that were unavailable or excluded.
- Material conflicts and their disposition.
- Sensitivity and permitted destinations.

When context conflicts, mandatory law, regulation, contract and organizational policy govern within their authority. More specific approved guidance governs over general guidance only within its stated scope. A newer version governs only after its effective approval. AI must not choose between unresolved authoritative conflicts. The applicable human owner resolves or escalates them.

## Exception standard

An exception is explicit, temporary authorization to deviate from a named requirement within a bounded scope. It is not a change to the requirement itself.

Every exception must record:

- Exception identifier and exact requirement or control.
- Business and delivery reason.
- Affected work, systems, data, people and period.
- Risk and maximum credible impact.
- Alternatives considered and why they are not used.
- Compensating controls and verification.
- Accountable requestor, control owner and authorized approver.
- Start, expiry and any earlier review trigger.
- Stop, revocation and incident conditions.
- Evidence, monitoring and closure obligations.
- Remediation owner and target condition when the exception addresses a capability gap.

An exception must not:

- Assign accountability or approval authority to AI.
- Allow AI to approve, expand or renew its own authority.
- Exceed the Pilot Edition authority ceiling.
- Treat missing evidence, silence or elapsed time as approval.
- Conceal or relabel a failed control.
- Override applicable law, regulation, contract or mandatory policy without the authorized human determination required by that authority.
- Remove the obligation to contain and escalate an incident.

Changing these boundaries requires a methodology or release decision, not an operational exception.

## Exception lifecycle

An exception can have one of four states:

- **Proposed:** Not authorized and provides no permission to deviate.
- **Active:** Approved for the exact scope and period under stated conditions.
- **Suspended:** Temporarily provides no permission because a review, stop condition or control failure is unresolved.
- **Closed:** Expired, revoked, remediated or no longer applicable and provides no permission.

Expiry closes the exception unless a new assessment and approval create a new version. Prior approval, continued use, absence of harm or pending renewal does not extend it.

## Failure classification

CTRL-LEARN-001 requires material failures to be classified by the part of the delivery system that should change. A failure may have multiple contributing classes.

### Intent and specification

The objective, requirement, acceptance criterion or constraint was missing, ambiguous, contradictory or wrong.

### Context

Required context was absent, stale, excessive, inaccessible, misleading, conflicting or applied outside its scope.

### Authority and boundary

Permissions, environment, scope, resources or downstream effects were excessive, insufficient, unclear or not enforced.

### Workflow and human decision

Planning, sequencing, handoff, approval, review, escalation or accountability failed.

### Tool and integration

A tool, interface, dependency or integration was unavailable, unsuitable, misconfigured, ambiguous or produced an unexpected result.

### Deterministic control

A required control was missing, defective, stale, bypassed, misapplied or insufficiently covered the requirement.

### Inferential control

An inferential evaluator missed a material issue, created an unsupported finding, drifted or was used beyond its defined semantic question.

### Change design and recovery

The batch was too large, blast radius was uncontrolled, dependencies were hidden or recovery was incomplete or ineffective.

### Model behavior

AI behavior remained materially unsuitable after applicable context, authority, workflow, tools and controls were verified. Model behavior must not be used as a default classification that prevents investigation of the surrounding system.

### External or operational condition

An external system, service, policy, incident or environmental condition invalidated otherwise reasonable assumptions.

## Repeated-failure improvement rule

A failure pattern is repeated when evidence shows the same or materially similar failure has recurred and the existing treatment did not prevent or reliably detect it. The classification owner determines similarity using the failure records, affected requirement, mechanism and consequences, not superficial wording alone.

Repeated conversational correction is not an acceptable final treatment. The accountable owner must choose and complete one or more system actions:

- Clarify, split, replace or retire a context asset.
- Change the specification, example or acceptance criterion.
- Reduce AI authority, scope, permissions or adoption state.
- Change workflow sequencing, ownership or human gates.
- Replace or improve a tool or integration.
- Add, repair or strengthen a deterministic control.
- Recalibrate, corroborate, restrict or withdraw an inferential control.
- Reduce batch size or improve recovery capability.
- Change the approved model or prohibit the use case.

If the organization intentionally accepts recurrence instead, an authorized human must record the affected scope, evidence, exposure, rationale, conditions, monitoring, effective period and review date. Risk acceptance does not erase the failure or permit authority beyond the Pilot Edition ceiling.

## Normative controls

### CTRL-CTX-001: Assign ownership to material context assets

**Purpose:** Make context correctness, applicability and lifecycle somebody's explicit responsibility.

**Control type:** Preventive.

**Applicable adoption states and risks:** All adoption states and every context asset used for material AI-assisted work.

**Owner:** Accountable human assigned to the context asset.

**Requirement:** Every material context asset must satisfy the context ownership standard before it is relied on. A team name, repository name, AI identity or unknown author does not satisfy accountable ownership. Unowned assets must not be treated as authoritative context.

**Enforcement or evaluation mechanism:** Context registration and work-intake checks validate ownership, version, provenance, scope, classification, review and lifecycle fields.

**Evidence:** Context-asset identifier, owner, purpose, provenance, scope, classification, version, validation, review and lifecycle record.

**Failure response:** Remove the asset from authoritative context, assign an authorized owner and validate it, or restrict work to a scope that does not rely on it.

**Review frequency:** At registration, owner change, scheduled review and every context review trigger.

### CTRL-CTX-002: Assemble applicable and sufficient context

**Purpose:** Give AI and reviewers the context needed for the approved work without uncontrolled disclosure or irrelevant instruction.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every AI-assisted work item.

**Owner:** Delivery accountable owner, with context-asset owners responsible for their assets.

**Requirement:** Before AI participation, the work must have a versioned context assembly linked to the work and authority grant. It must include required applicable assets, justify material inclusions, identify missing or excluded required context, preserve access restrictions and remain within the context boundary. Volume or model context-window availability must not substitute for applicability review.

**Enforcement or evaluation mechanism:** Work intake compares the assembly with the work type, risk, scope, authority, required assets and permitted destinations.

**Evidence:** Context assembly, asset identifiers and versions, applicability reasons, exclusions, access classification, unresolved gaps and accountable disposition.

**Failure response:** Do not begin or continue affected AI work. Obtain, correct or narrow context, reduce scope or select a more restrictive authority outcome.

**Review frequency:** Before AI participation and whenever work, risk, authority, context versions or observed ambiguity changes.

### CTRL-CTX-003: Resolve context conflicts through accountable owners

**Purpose:** Prevent AI from silently choosing between contradictory sources or applying guidance outside its authority.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every work item with conflicting, ambiguous, stale or overlapping context.

**Owner:** Owner of the governing requirement or decision category.

**Requirement:** Material context conflicts must be recorded and resolved by the applicable accountable human using authoritative scope, applicability, approval and effective version. AI must not resolve an authoritative conflict, invent precedence or proceed using whichever instruction supports its preferred action.

**Enforcement or evaluation mechanism:** Context and planning gates detect declared or observed conflicts, keep affected work blocked and require an authenticated disposition linked to exact asset versions.

**Evidence:** Conflicting assets, affected scope, precedence basis, accountable decision, resulting context versions and any follow-up correction.

**Failure response:** Stop affected work, restrict the disputed assets and escalate unresolved cross-category conflicts under CTRL-ACC-007.

**Review frequency:** At every detected conflict and after either asset, its authority or its scope changes.

### CTRL-CTX-004: Review and retire context after change or failure

**Purpose:** Prevent stale or misleading context from repeatedly shaping delivery work.

**Control type:** Detective and corrective.

**Applicable adoption states and risks:** Every material context asset and every context review trigger.

**Owner:** Context-asset owner.

**Requirement:** The owner must review an asset at its scheduled interval and whenever a context review trigger occurs. The review must retain, revise, restrict, supersede or retire the asset and identify affected active work. Materially suspect context must not remain active without a recorded restriction and accountable decision.

**Enforcement or evaluation mechanism:** Context registry tracks review status and triggers, prevents use of expired or restricted authoritative assets and notifies affected work owners.

**Evidence:** Review trigger, assessment, decision, revised or retired version, affected-work analysis and notification.

**Failure response:** Restrict the asset, stop work that depends on it and reassess affected decisions and outputs under CTRL-EVID-008.

**Review frequency:** At the asset's scheduled interval and every event-based trigger.

### CTRL-EXC-001: Authorize only bounded and eligible exceptions

**Purpose:** Permit explicit temporary deviation without silently changing policy or expanding AI authority.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every proposed deviation from a mandatory playbook or organizational requirement.

**Owner:** Owner of the requirement or control, with every applicable consequential-decision owner.

**Requirement:** An exception must satisfy the exception standard, remain within the exception boundaries in this chapter and receive authenticated approval from humans authorized for the affected requirement and risk. It must identify exact scope, compensating controls, evidence, start, expiry, stop conditions and remediation. Approval applies only to the recorded version.

**Enforcement or evaluation mechanism:** The exception gate validates eligibility, approver authority, exact requirement, scope, period, compensating controls and prohibited boundaries before activation.

**Evidence:** Versioned exception record, risk assessment, alternatives, compensating-control results, human decisions and effective period.

**Failure response:** Keep the exception proposed and the original requirement fully effective. Reduce scope, remediate the capability gap or stop the work.

**Review frequency:** At proposal, activation, scope or risk change, review trigger and before any renewal assessment.

### CTRL-EXC-002: Expire, suspend and close exceptions explicitly

**Purpose:** Prevent temporary deviations from becoming permanent through silence or continued use.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every proposed or active exception.

**Owner:** Owner of the excepted requirement or control.

**Requirement:** Every active exception must have an expiry and earlier suspension triggers. Expiry, a violated condition, a control failure, changed scope or increased risk removes permission to deviate until a new assessment and approval occur. Exceptions must not auto-renew. Closure must record whether the requirement was restored, remediation completed, work ended or a newly approved version replaced it.

**Enforcement or evaluation mechanism:** Exception tracking enforces state and time boundaries, blocks expired or suspended exception references and requires closure or new approval.

**Evidence:** Status history, monitoring, trigger events, expiry, suspension, reassessment, closure decision and remediation evidence.

**Failure response:** Restore the original requirement, stop affected work, contain unauthorized deviation and invoke incident or authority-revocation handling where warranted.

**Review frequency:** Continuously for triggers, at the defined review point, at expiry and at closure.

### CTRL-LEARN-001: Classify material failures across the delivery system

**Purpose:** Direct corrective action to the context, workflow, tool, control, authority or other system element that should change.

**Control type:** Detective and corrective.

**Applicable adoption states and risks:** Every material control failure, escaped defect, incident, rollback, authority breach and repeated clarification that affects delivery outcome or risk.

**Owner:** Delivery accountable owner until the applicable classification owner accepts the action.

**Requirement:** Each material failure must be recorded and classified using all applicable failure classes in this chapter. Classification must consider surrounding-system causes before assigning model behavior as the primary class. The record must identify affected work, requirement, evidence, impact, containment, owner and corrective-action decision.

**Enforcement or evaluation mechanism:** Failure and incident review requires classification fields and routes corrective actions to the owners of affected system elements.

**Evidence:** Failure identifier, classes, causal evidence, affected scope, impact, containment, accountable owners and corrective actions.

**Failure response:** Keep affected work and authority restricted until material uncertainty and containment are resolved. Escalate unowned or disputed classifications.

**Review frequency:** At every material failure and whenever new evidence changes the classification or affected scope.

### CTRL-LEARN-002: Change the system after repeated failure

**Purpose:** Prevent recurring defects from being handled only through repeated prompts, reminders or manual cleanup.

**Control type:** Corrective.

**Applicable adoption states and risks:** Every repeated failure pattern.

**Owner:** Owner of the system element selected for change, accountable to the delivery accountable owner.

**Requirement:** When a failure pattern is repeated, the owner must implement and verify a change to context, specification, authority, workflow, human gate, tool, deterministic control, inferential control, batch design, recovery or approved model. If the organization accepts recurrence instead, an authorized human must record a bounded, time-limited risk acceptance with monitoring and review. Repeating conversational correction alone does not satisfy this control.

**Enforcement or evaluation mechanism:** Failure-pattern review links related records, requires a system-change or risk-acceptance disposition and blocks closure without an owner and verification plan.

**Evidence:** Linked failure pattern, similarity rationale, selected system change or risk acceptance, owner, implementation, verification, authority impact and review date.

**Failure response:** Restrict the affected AI use, work type or authority until the system change is effective or valid risk acceptance is approved.

**Review frequency:** At every identified repeated pattern and until the disposition is verified or expires.

### CTRL-LEARN-003: Verify improvement before restoring authority

**Purpose:** Ensure corrective changes reduce the observed failure rather than merely documenting activity.

**Control type:** Detective and preventive.

**Applicable adoption states and risks:** Every corrective system change or risk acceptance that affects restricted AI use or authority.

**Owner:** AI delivery governance owner with the owner of the changed system element.

**Requirement:** A corrective change must define expected observable behavior and verification before affected authority is restored. Verification must exercise the relevant failure condition through an approved test, scenario, review or controlled work sample. A risk acceptance must define monitoring and remain within its approved period. Activity completion or document publication alone must not be treated as effectiveness.

**Enforcement or evaluation mechanism:** Restoration and closure gates require effectiveness evidence or a current risk-acceptance record and reassess the applicable authority grant.

**Evidence:** Corrective-change version, verification method and result, residual findings, authority decision, monitoring and review date.

**Failure response:** Keep authority restricted, revise the treatment, reduce scope or prohibit the affected use case.

**Review frequency:** Before restoration, during the defined observation period, at risk-acceptance review and after recurrence.

## Completion check

This chapter's obligations are complete for a work item only when:

- Material context assets are owned, current, applicable and versioned.
- Context conflicts and gaps have accountable dispositions.
- Every active exception is eligible, bounded, monitored and unexpired.
- Material failures are classified and linked to corrective ownership.
- Repeated patterns result in verified system change or explicit current risk acceptance.
- Authority reflects unresolved context, exception and failure conditions.
- The evidence package preserves every decision and outcome.

Completion does not erase prior failures or exceptions. Their evidence remains available for reassessment, trend review and future control improvement.
