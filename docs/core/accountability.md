# Human Accountability and Consequential Decisions

## Purpose

This chapter defines who remains accountable when AI participates in software delivery, which decisions require a human owner, what evidence makes a human decision valid and when work must stop for escalation.

The requirements apply to AI assistance that advises, drafts, plans or executes software-delivery work. They do not assume that AI is permitted to perform every activity described here.

## Source basis and playbook decision

The source material establishes several relevant patterns:

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) treats successful AI adoption as dependent on organizational capabilities and a clear AI stance, not tool adoption alone.
- [SRC-002](../sources/source-ledger.md#src-002-aws-ai-driven-development-life-cycle) describes AI creating plans and executing work while humans make critical decisions, provide validation and retain oversight.
- [SRC-003](../sources/source-ledger.md#src-003-aws-adaptive-ai-dlc-workflows) adds explicit human checkpoints, recorded approvals and review of final artifacts.
- [SRC-015](../sources/source-ledger.md#src-015-nist-ai-risk-management-framework) calls for documented accountability structures, clear roles and responsibilities, executive responsibility for AI risk decisions and differentiation of human and AI roles.

The controls below are this playbook's normative decisions. They are not copied vendor requirements. They make the source concepts operational for enterprise software delivery.

## Accountability model

CTRL-ACC-001 and CTRL-ACC-002 make this model enforceable.

Accountability belongs to a human who has all of the following:

- Organizational authority to make the decision.
- Sufficient competence to evaluate the evidence and consequences.
- Access to the relevant context, verification results and unresolved concerns.
- Enough time to perform a meaningful review.
- The ability to reject the proposal, require changes, stop the work or escalate it.
- Answerability for the decision after the work is complete.

AI may participate as an analyst, drafter, planner, reviewer or bounded executor. AI is not an accountable role, approval authority, policy owner or risk-acceptance authority.

Accountability follows the decision and outcome. It does not transfer to AI because AI generated a recommendation, plan, test, change or explanation.

## Decision test

The decision test is a normative component of CTRL-ACC-003.

A decision is consequential when it does one or more of the following:

- Changes intended product behavior, user outcomes or an external commitment.
- Establishes or materially changes architecture, data design or an integration contract.
- Accepts, transfers or creates a security, privacy or safety exposure.
- Interprets or satisfies a legal, regulatory, contractual or policy obligation.
- Commits material expenditure, consumption, licensing or commercial terms.
- Authorizes merge, release, deployment or promotion into a controlled environment.
- Changes a production service, production data, access rights or operational posture.
- Grants, expands, restricts or revokes AI authority.
- Accepts an exception to an approved standard, control or risk treatment.

If the decision owner cannot determine whether a decision is consequential, the decision is treated as consequential until the designated escalation authority classifies it.

## Consequential decision categories

The category definitions and role mappings are normative components of CTRL-ACC-003.

The organization maps its job titles to the accountable role archetypes below. A person may hold more than one archetype when organizational policy permits it. Every individual decision still has exactly one accountable human.

### Product and business decisions

**Includes:** intended behavior, acceptance criteria, user impact, prioritization, material scope changes and business-rule interpretation.

**Accountable role:** Product accountable owner.

**AI participation:** AI may analyze intent, identify ambiguity, draft options and predict affected areas. AI does not decide which outcome the organization will pursue.

**Minimum decision evidence:** intended outcome, affected users or stakeholders, acceptance criteria, material alternatives and recorded disposition of unresolved product questions.

### Architecture and data-design decisions

**Includes:** system boundaries, interfaces, data models, data migration strategy, material dependencies, reliability patterns and technology exceptions.

**Accountable role:** Architecture accountable owner.

**AI participation:** AI may generate options, evaluate stated tradeoffs and draft decision records. AI does not select or approve the target architecture.

**Minimum decision evidence:** decision context, considered alternatives, constraints, consequences, affected systems and reversibility or migration implications.

### Security, privacy and safety decisions

**Includes:** threat treatment, access control, sensitive-data handling, privacy impact, safety exposure, security exceptions and residual-risk acceptance within delegated authority.

**Accountable role:** Security accountable owner.

**AI participation:** AI may identify candidate threats, controls and verification gaps. AI does not accept residual risk or approve an exception.

A privacy decision that requires interpretation of law, regulation, contract or mandatory policy is also classified under the legal, regulatory, contractual and policy category.

**Minimum decision evidence:** applicable threats or harms, affected assets and people, proposed controls, verification results, residual exposure and the authority under which risk is accepted.

### Legal, regulatory, contractual and policy decisions

**Includes:** interpretation of obligations, evidence of compliance, contract restrictions, intellectual-property constraints and exceptions to mandatory policy.

**Accountable role:** Compliance accountable owner.

**AI participation:** AI may retrieve approved policy text, summarize obligations and identify possible conflicts. AI output is not a legal or compliance determination.

**Minimum decision evidence:** applicable obligation, authoritative source, interpretation, affected scope, required evidence and any specialist review.

### Financial and commercial decisions

**Includes:** material spend, consumption limits, license commitments, commercial terms and acceptance of financial exposure.

**Accountable role:** Financial accountable owner.

**AI participation:** AI may estimate cost from approved inputs and compare options. AI does not authorize expenditure or accept commercial terms.

**Minimum decision evidence:** assumptions, estimated range, approval threshold, funding or cost owner, commercial constraints and authorized amount or limit.

### Release and deployment decisions

**Includes:** merge approval where required by policy, release authorization, production promotion, rollout strategy and acceptance of release-specific residual risk.

**Accountable role:** Release accountable owner.

**AI participation:** AI may assemble evidence, report check results and recommend a rollout. AI does not approve its own change or authorize production promotion.

**Minimum decision evidence:** approved scope, verification results, unresolved findings, dependency status, rollback or recovery readiness and release decision.

### Production and operational decisions

**Includes:** production configuration, service-level changes, operational exceptions, incident actions with material impact, destructive recovery actions and return-to-service decisions.

**Accountable role:** Service accountable owner.

**AI participation:** AI may analyze telemetry, propose actions and execute previously approved runbook steps within its authority. AI does not independently accept operational risk or declare recovery complete.

**Minimum decision evidence:** service impact, current state, proposed action, operational checks, recovery path, communications impact and outcome verification.

### AI-use authority decisions

**Includes:** approval of a use case, permitted actions, tool and data access, execution environment, human gates, exception handling, authority expansion, restriction and revocation.

**Accountable role:** AI delivery governance owner.

**AI participation:** AI may provide inventory, observed results and candidate safeguards. AI does not determine or expand its own authority.

**Minimum decision evidence:** approved work type, risk classification, authority boundary, required controls, named owner, effective period, stop conditions and review or expiry date.

## Normative controls

### CTRL-ACC-001: Name accountable humans before work begins

**Purpose:** Ensure that every AI-assisted work item and expected consequential decision has a human owner.

**Control type:** Preventive.

**Applicable adoption states and risks:** All adoption states and all AI-assisted work. The control applies before risk-based authority is granted.

**Owner:** Delivery accountable owner.

**Requirement:** Before AI assistance begins, the work record must name one identifiable human accountable for the work outcome. It must also name one accountable human for every consequential decision category expected in the work. The same human may fill multiple categories when authorized. A group, committee, team name or AI identity does not satisfy this requirement unless one human is named as the accountable decision owner.

**Enforcement or evaluation mechanism:** The work-intake or planning gate checks for resolvable human identities, mapped role archetypes and current organizational authority.

**Evidence:** Work identifier, accountable human, role archetype, scope of accountability, authority source and effective period.

**Failure response:** Do not begin or continue AI-assisted work. Assign the missing owner or reduce the work scope until accountable ownership is complete.

**Review frequency:** At work intake and whenever scope, risk, personnel or organizational authority changes.

### CTRL-ACC-002: Keep accountability and approval human

**Purpose:** Prevent AI participation from being mistaken for organizational accountability or approval.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** All adoption states, work types and risk levels.

**Owner:** AI delivery governance owner.

**Requirement:** AI must not be recorded as accountable, approve its own output, satisfy a human gate, accept risk, waive a control or infer approval from silence, prior behavior or access to a tool. A human may use AI-generated analysis when deciding, but the decision record must distinguish the AI contribution from the human judgment.

**Enforcement or evaluation mechanism:** Approval systems and artifact validation reject AI identities as approvers and require an authenticated human action at every human gate.

**Evidence:** Authenticated human identity, decision record, referenced AI contribution and explicit decision.

**Failure response:** Treat the decision as unapproved. Halt affected work, remove any resulting authority and repeat the gate with an authorized human.

**Review frequency:** At every human gate and during periodic approval-record sampling.

### CTRL-ACC-003: Classify consequential decisions and assign one owner

**Purpose:** Route each consequential decision to a human with the appropriate organizational authority.

**Control type:** Preventive.

**Applicable adoption states and risks:** All AI-assisted work that may create a consequential decision.

**Owner:** Delivery accountable owner.

**Requirement:** The work owner must apply the decision test and classify each consequential decision into one or more categories defined in this chapter. Each category must have exactly one accountable human for that decision. When a decision spans categories, each category owner decides within that person's authority. AI must not resolve a conflict between category owners.

**Enforcement or evaluation mechanism:** The decision record requires a category, one accountable human per category and evidence that the human holds the mapped role archetype.

**Evidence:** Decision identifier, category, accountable human, role mapping and any cross-category concurrence or escalation.

**Failure response:** Stop at the decision gate. Resolve missing ownership or escalate conflicts through the organization's documented authority chain.

**Review frequency:** When a decision is identified and whenever its scope or impact changes.

### CTRL-ACC-004: Provide an informed decision package

**Purpose:** Give the accountable human enough information to exercise judgment rather than merely confirm an AI recommendation.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every consequential decision.

**Owner:** The accountable human for the decision.

**Requirement:** Before deciding, the accountable human must receive and review the decision identifier, decision category, proposed action, material alternatives, relevant constraints, verification results, unresolved findings, expected consequences and reversibility. The package must identify content produced or evaluated by AI and must not represent an AI assertion as verified evidence.

**Enforcement or evaluation mechanism:** The human gate validates required decision fields and records an explicit acknowledgement that unresolved findings were reviewed.

**Evidence:** Versioned decision package, referenced source artifacts, verification results and unresolved-item disposition.

**Failure response:** Defer the decision and obtain the missing context or verification. If the information cannot be obtained, escalate or reject the proposed action.

**Review frequency:** At every consequential decision and again after any material change to the package.

### CTRL-ACC-005: Record approval before consequential effect

**Purpose:** Prevent work from creating a consequential effect before the authorized human decision exists.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every consequential decision and its downstream action.

**Owner:** The accountable human for the decision.

**Requirement:** The accountable human must explicitly approve, reject, approve with conditions or escalate the decision before the consequential action occurs. Approval must identify its exact scope, conditions and effective period. A material change to scope, evidence, risk, implementation or unresolved findings invalidates the approval until the accountable human re-evaluates it.

**Enforcement or evaluation mechanism:** The workflow checks for a current approval linked to the exact artifact version or action being authorized.

**Evidence:** Authenticated human identity, timestamp, decision, scope, conditions, artifact version and expiry or review date when applicable.

**Failure response:** Block the action. If an effect occurred without valid approval, stop further work, contain or reverse the effect where safe and initiate the applicable incident or exception process.

**Review frequency:** Immediately before the authorized action and after any material change.

### CTRL-ACC-006: Control delegation and temporary reassignment

**Purpose:** Allow work to continue during absence or organizational change without losing accountable ownership.

**Control type:** Preventive.

**Applicable adoption states and risks:** All adoption states and every delegated task or reassigned decision.

**Owner:** The current accountable human or the organizational authority responsible for the role.

**Requirement:** Delegating analysis or execution does not transfer accountability. Accountability transfers only through an explicit reassignment to another authorized human. The reassignment must record the previous owner, new owner, affected decisions, authority source, start time and end time or review date. Accountability must not be reassigned to AI. The new owner must have the competence, information and authority required by this chapter.

**Enforcement or evaluation mechanism:** Decision and work records retain delegation and reassignment history and reject expired acting assignments.

**Evidence:** Delegated task record or accountability-reassignment record with both identities, scope, authority and effective period.

**Failure response:** Stop affected decisions until an authorized human accepts accountability. Expired or ambiguous assignments provide no approval authority.

**Review frequency:** At delegation, reassignment, expiry, personnel change and each affected human gate.

### CTRL-ACC-007: Stop and escalate when accountability is ineffective

**Purpose:** Prevent progress when the named human cannot provide valid accountability or when decision authority is disputed.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** All adoption states and all consequential decisions.

**Owner:** Delivery accountable owner until the escalation is accepted by the designated authority.

**Requirement:** Work must stop at the affected gate when the accountable human is unavailable, lacks authority, lacks required competence or context, cannot independently evaluate the evidence, faces an unresolved category conflict or identifies risk beyond delegated tolerance. Work must also stop when AI crosses its authority boundary, presents fabricated approval evidence or represents its own conclusion as a human decision. The issue must be escalated through a named organizational route. No response is not approval.

**Enforcement or evaluation mechanism:** Workflows expose stop reasons, prevent downstream action and require an identified escalation recipient and disposition.

**Evidence:** Stop event, trigger, affected work, escalation recipient, containment action, decision and authorization to resume or close.

**Failure response:** Preserve the stop, contain any affected system or authority and invoke incident, exception or risk-acceptance processes as applicable.

**Review frequency:** At every stop event and during periodic review of escalation patterns.

## Minimum human decision record

Until the formal artifact system is published, a consequential decision record contains at least:

- Decision identifier and related work identifier.
- Decision category.
- Accountable human identity and role archetype.
- Authority source.
- Proposal and material alternatives.
- Referenced context and verification evidence.
- AI contribution, if any.
- Unresolved findings and their disposition.
- Explicit decision and conditions.
- Scope and artifact version covered by the decision.
- Timestamp and effective period.
- Escalation or reconsideration trigger.

The record is stored with the work or linked from it. Chat text, an AI summary or an unauthenticated name is not sufficient approval evidence by itself.

## Completion check

Accountability for a work item is complete only when all of the following are true:

- The work outcome has one named accountable human.
- Every consequential decision category used by the work has one named accountable human.
- Each accountable human has the required authority and can reject or stop the work.
- Required decisions were made from the applicable evidence package.
- AI participation is identified separately from human judgment.
- Every approval is linked to the exact scope and artifact version it covers.
- Delegations, reassignments, stops and escalations are recorded.
- No consequential effect occurred under missing, expired or invalid approval.

## Related principles and sources

This chapter implements [PRIN-002](../principles.md#prin-002-grant-authority-by-work-and-risk), [PRIN-003](../principles.md#prin-003-preserve-human-accountability), [PRIN-004](../principles.md#prin-004-require-durable-evidence), [PRIN-005](../principles.md#prin-005-prefer-deterministic-enforcement) and [PRIN-008](../principles.md#prin-008-apply-least-authority).

Sources: [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model), [SRC-002](../sources/source-ledger.md#src-002-aws-ai-driven-development-life-cycle), [SRC-003](../sources/source-ledger.md#src-003-aws-adaptive-ai-dlc-workflows) and [SRC-015](../sources/source-ledger.md#src-015-nist-ai-risk-management-framework).
