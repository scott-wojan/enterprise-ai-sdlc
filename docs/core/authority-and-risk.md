# Authority Boundaries and Risk Treatment

## Purpose

This chapter defines how an enterprise grants, limits, reviews, restricts and revokes AI authority for software-delivery work.

It answers five operational questions:

- Which AI identity is authorized?
- What work, information, tools and actions are permitted?
- Where and for how long are they permitted?
- How does risk reduce permitted authority?
- What immediately restricts or revokes the grant?

## Relationship to human accountability

Every authority grant is an AI-use authority decision governed by [CTRL-ACC-003](accountability.md#ctrl-acc-003-classify-consequential-decisions-and-assign-one-owner) through [CTRL-ACC-007](accountability.md#ctrl-acc-007-stop-and-escalate-when-accountability-is-ineffective).

The AI delivery governance owner is accountable for the grant. Other consequential-decision owners provide decisions within their categories. Granting authority to AI does not transfer accountability from any human named under [the accountability controls](accountability.md).

## Source basis and playbook decision

The required sources provide three complementary patterns:

- [SRC-003](../sources/source-ledger.md#src-003-aws-adaptive-ai-dlc-workflows) adapts workflow breadth and depth to context, requires humans to validate the proposed rigor and records approvals and interactions.
- [SRC-007](../sources/source-ledger.md#src-007-engineering-the-agentic-sdlc) describes phase-specific context, verification gates, nonproduction scenario testing, isolated execution and governance through identity, audit and policy.
- [SRC-009](../sources/source-ledger.md#src-009-finos-mcp-server-security-governance) uses approved-tool allowlists, human approval for initial adoption, identity propagation, short-lived access, monitoring, isolation and rapid incident containment.

The controls below are this playbook's normative decisions. The playbook generalizes the source patterns beyond any vendor, protocol or implementation.

## Pilot Edition authority ceiling

The Pilot Edition permits organizations to learn through assistance and bounded changes without adopting production autonomy.

Within this edition, the greatest permitted AI execution authority is a bounded change in a designated repository, branch and isolated or nonproduction environment. Required human review and verification follow the change.

The Pilot Edition does not grant AI authority to:

- Approve or merge its own change.
- Authorize a release or deployment.
- Deploy to or directly modify production.
- Modify production data, production secrets or production access controls.
- Accept product, architecture, security, compliance, financial, release or operational risk.
- Commit expenditure or commercial terms.
- Waive a control or approve an exception.
- Create, expand, renew or restore its own authority.
- Delegate authority to another AI identity.
- Initiate selective orchestration across agents or delivery stages.

Existing human-controlled release and operational processes may consume verified outputs from bounded AI-assisted work. That does not extend AI authority into those processes.

This ceiling is a normative component of CTRL-AUTH-004.

## Authority grant dimensions

CTRL-AUTH-001 and CTRL-AUTH-002 require every grant to define all applicable dimensions below. An omitted dimension is not implicitly allowed.

### Identity

The specific AI system, agent instance, service identity or delegated machine identity receiving authority. A product name or model family alone is not a sufficient identity.

### Accountable owner

The identifiable AI delivery governance owner accountable for granting, reviewing, restricting and revoking authority.

### Work type and objective

The approved class of work and intended outcome, such as explanation, test drafting, defect analysis or implementation of one approved bounded change.

### Work scope

The issue, specification, task, repository, component, files, services and other resources included in the grant.

### Context and data

The information the AI identity can read, retrieve or retain, including sensitivity, approved sources, prohibited sources and permitted disclosure destinations.

### Tools and actions

Each approved tool and the actions permitted through it. Access to a tool does not authorize every function the tool exposes.

### State-change permissions

The state the AI identity can create, modify or delete. Read, draft, write, execute and delete are separate permissions.

### Environment

The exact execution boundary, such as local read-only analysis, a disposable sandbox, a designated development environment or an approved nonproduction environment.

### Downstream effects

The systems, workflows, people or external parties the AI identity can notify, trigger or affect. Unlisted downstream actions are prohibited.

### Resource and economic limits

Time, requests, compute, storage, network, concurrency, monetary consumption and other applicable limits.

### Required controls and human gates

The deterministic checks, review steps, approval points and evidence requirements that must succeed before the next action.

### Effective period

The start, expiry and, when needed, earlier review time. A permanent grant is not permitted in the Pilot Edition.

### Stop, restriction and revocation conditions

The observations that suspend work, narrow authority or terminate the grant, plus the human and technical route used to apply the action.

## Risk assessment

Risk assessment changes what AI can do. It does not merely add documentation around an unchanged permission set.

The risk assessment and treatment rules are normative components of CTRL-AUTH-003.

### Required risk factors

The grant decision evaluates at least:

- Consequential-decision categories involved.
- Sensitivity and criticality of code, data, credentials and infrastructure.
- Privilege level and destructive capability of requested actions.
- Proximity to production and ability to create downstream effects.
- Maximum credible blast radius.
- Reversibility, recovery method and time to restore.
- Strength and coverage of deterministic verification.
- Novelty, ambiguity and unresolved technical or domain uncertainty.
- External connectivity, third-party tools and supply-chain dependencies.
- Legal, regulatory, contractual and policy constraints.
- Frequency, duration, concurrency and economic consumption.
- Relevant incidents, control failures and prior observed behavior.

### Risk-treatment rules

- Increased risk must not result in increased authority.
- Missing or unreliable risk information results in the more restrictive authority outcome until the uncertainty is resolved.
- Irreversible actions, uncontrolled blast radius or absent recovery evidence prohibit execution authority.
- Weak deterministic verification restricts work to advisory, drafting or isolated experimentation.
- Sensitive context is limited to approved sources and destinations and may require removal of external connectivity.
- Novel or ambiguous work starts with planning, drafting or isolated execution rather than bounded state change.
- Access to production, production data, production credentials or production control planes is prohibited for AI execution in the Pilot Edition.
- Prior success does not automatically expand authority. Expansion requires a new risk decision and a new or amended grant.
- A control failure, incident or unexplained behavior can only preserve or reduce authority until a human approves a new treatment.

## Permitted authority outcomes

The grant decision selects one of the following outcomes. These outcomes are normative components of CTRL-AUTH-003 and CTRL-AUTH-004.

### Denied

**Permitted:** No AI participation for the assessed work.

**Use when:** The work is prohibited, required controls are unavailable, risk is outside tolerance or uncertainty prevents a reliable grant.

### Read-only advisory

**Permitted:** Read explicitly approved context and return analysis, explanation, questions or recommendations.

**Not permitted:** File changes, command execution, external calls, state changes or retention beyond the approved interaction.

### Plan and draft

**Permitted:** Produce specifications, plans, candidate patches, tests, documentation or commands for human evaluation without executing them against managed resources.

**Not permitted:** Apply changes, invoke state-changing tools or represent drafts as approved evidence.

### Isolated execution

**Permitted:** Execute approved tools and create temporary state inside a disposable sandbox with no unauthorized data, credentials or downstream effects.

**Not permitted:** Write to managed repositories, shared environments or production-connected resources.

### Bounded repository change

**Permitted:** Modify the approved repository scope on a designated branch and run approved verification in an isolated or nonproduction environment.

**Not permitted:** Expand file or component scope, change protected policy or controls, approve or merge the change, release it, deploy it or access production authority.

## Normative controls

### CTRL-AUTH-001: Require an explicit authority grant

**Purpose:** Ensure that AI acts only under recorded authorization rather than inferred permission.

**Control type:** Preventive.

**Applicable adoption states and risks:** All adoption states, work types and AI identities.

**Owner:** AI delivery governance owner.

**Requirement:** Before an AI identity accesses nonpublic enterprise context, invokes an enterprise tool or changes state, it must have a current authority grant. Tool availability, credentials, interface options, prior access, prior approval or successful earlier work do not create authority. Anything not explicitly granted is prohibited.

**Enforcement or evaluation mechanism:** The entry gate resolves the AI identity and current grant before providing context, credentials, tools or execution access.

**Evidence:** Grant identifier, AI identity, accountable owner, approval and effective period.

**Failure response:** Deny access or execution. If ungranted activity occurred, stop the work, contain affected access and invoke CTRL-AUTH-008.

**Review frequency:** Before every work item or session that could access enterprise context, tools or state.

### CTRL-AUTH-002: Bound every authority dimension

**Purpose:** Apply least authority across the complete work and execution envelope.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every non-denied authority outcome.

**Owner:** AI delivery governance owner.

**Requirement:** The grant must define identity, accountable owner, work type, work scope, context and data, tools and actions, state-change permissions, environment, downstream effects, resource limits, required controls, human gates, effective period and stop conditions. Broad tool access must be decomposed into permitted actions. Wildcard scope and unbounded downstream effects are not valid Pilot Edition grants.

**Enforcement or evaluation mechanism:** Grant validation rejects missing dimensions and compares requested context, tool calls, resource use and state changes with the recorded boundaries.

**Evidence:** Complete authority-grant record and the technical policy or configuration that enforces each applicable dimension.

**Failure response:** Reject the grant or remove the unsupported permission until its scope and enforcement are explicit.

**Review frequency:** At grant creation, amendment, renewal and every scope change.

### CTRL-AUTH-003: Change permitted actions through risk treatment

**Purpose:** Make risk assessment alter the authority AI actually receives.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every proposed grant or authority change.

**Owner:** AI delivery governance owner, with decisions from other applicable category owners defined by CTRL-ACC-003.

**Requirement:** The grant decision must evaluate every required risk factor, select one permitted authority outcome and record the treatment rationale. Greater risk, unresolved uncertainty, weaker verification, lower reversibility or larger blast radius must preserve or reduce authority. The assessment must not compensate for missing controls by relying only on prompts or AI self-restraint.

**Enforcement or evaluation mechanism:** Grant approval requires a completed risk record whose selected outcome matches the permissions encoded in the grant.

**Evidence:** Risk factors, supporting evidence, applicable decision owners, treatment, authority outcome and unresolved conditions.

**Failure response:** Default to the more restrictive outcome, obtain missing evidence or deny the grant.

**Review frequency:** Before grant approval and whenever risk, scope, controls or operating conditions change.

### CTRL-AUTH-004: Enforce the Pilot Edition authority ceiling

**Purpose:** Prevent incremental adoption from silently becoming production autonomy or selective orchestration.

**Control type:** Preventive.

**Applicable adoption states and risks:** All Pilot Edition use cases and grants.

**Owner:** AI delivery governance owner.

**Requirement:** An authority grant must not exceed the Pilot Edition ceiling defined in this chapter. The maximum execution outcome is a bounded repository change in a designated branch and isolated or nonproduction environment, followed by required human review. Production actions, production authority, approval, merge, release, risk acceptance, expenditure, control waiver, self-extension and multi-agent orchestration remain human-controlled or prohibited.

**Enforcement or evaluation mechanism:** Grant validation rejects prohibited actions, environments and downstream effects. Technical boundaries prevent AI identities from receiving the corresponding credentials or permissions.

**Evidence:** Grant outcome, prohibited-action list, environment boundary and access-policy verification.

**Failure response:** Deny or reduce the grant. Treat any attempted or completed breach as a revocation trigger under CTRL-AUTH-008.

**Review frequency:** At every grant and whenever the release boundary or adoption-state policy changes.

### CTRL-AUTH-005: Approve grants through accountable human decisions

**Purpose:** Ensure that authority is granted by humans with the applicable organizational mandate.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every new, amended, renewed or restored grant.

**Owner:** AI delivery governance owner.

**Requirement:** The AI delivery governance owner must approve the complete grant under CTRL-ACC-005. Product, architecture, security, compliance, financial, release or service owners must decide any consequential category within their authority. The AI identity receiving authority must not approve, amend, renew or restore its grant.

**Enforcement or evaluation mechanism:** The approval gate verifies authenticated human decisions, role authority, exact grant version and required category-owner decisions.

**Evidence:** Human decision records, grant version, conditions, effective period and category-owner dispositions.

**Failure response:** Keep the grant inactive. If it became active without valid approval, suspend it and invoke CTRL-AUTH-008.

**Review frequency:** At initial approval, amendment, renewal and restoration.

### CTRL-AUTH-006: Expire and re-evaluate authority

**Purpose:** Prevent stale grants from surviving changes in work, risk, people, tools or environments.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every active grant.

**Owner:** AI delivery governance owner.

**Requirement:** Every grant must have an expiry or earlier mandatory review. The grant becomes inactive at expiry without explicit human renewal. A material change to work, scope, context, tools, permissions, environment, risk, controls, accountable owner, AI identity or observed behavior invalidates the affected authority until re-evaluated and approved.

**Enforcement or evaluation mechanism:** Access and workflow policies check grant status, version and time before use and invalidate grants when a monitored change occurs.

**Evidence:** Start, expiry, review date, change history, renewal decision and current status.

**Failure response:** Suspend affected permissions, stop work at a safe point and require a new or amended grant.

**Review frequency:** Continuously for expiry and monitored changes, plus the recorded periodic review.

### CTRL-AUTH-007: Enforce and observe the authority boundary

**Purpose:** Detect and prevent action outside the recorded grant.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every active non-advisory grant, with controls proportional to the permitted outcome.

**Owner:** Platform or control owner designated by the AI delivery governance owner.

**Requirement:** The implemented boundary must enforce identity, resources, approved tool actions, state-change permissions, environment, network destinations, resource limits and human gates wherever deterministic enforcement is feasible. It must record attempted and completed use. Prompt instructions and AI self-report are not sufficient enforcement for a permission that can be constrained technically.

**Enforcement or evaluation mechanism:** Identity-aware access, allowlists, isolation, policy checks, resource limits, approval gates and audit logging compare activity with the current grant.

**Evidence:** Policy evaluation, access decision, tool invocation, resource consumption, state change, gate result and boundary violation records.

**Failure response:** Block the action when possible. Preserve evidence and invoke CTRL-AUTH-008 for attempted bypass, repeated violation or completed out-of-bound activity.

**Review frequency:** At every access or action and through periodic review of boundary and violation records.

### CTRL-AUTH-008: Restrict or revoke authority on trigger

**Purpose:** Reduce exposure when a grant is no longer safe, valid or necessary.

**Control type:** Preventive, detective and corrective.

**Applicable adoption states and risks:** Every proposed, active, suspended or recently revoked grant.

**Owner:** AI delivery governance owner. Security or service owners may initiate emergency suspension within their authority.

**Requirement:** Authority must be restricted or revoked when the grant expires, the owner or identity becomes invalid, risk increases beyond treatment, a required control fails, activity crosses or attempts to bypass a boundary, evidence is missing or inconsistent, a tool or context source is compromised, verification repeatedly fails, resource use is abnormal, an incident affects the work or an authorized human orders suspension. Restoration requires containment, impact assessment, corrective action, fresh risk treatment and a new human approval.

**Enforcement or evaluation mechanism:** Emergency suspension disables credentials, tool routes, sessions and execution environments while preserving evidence. Revocation prevents reuse of the grant identifier and associated authority.

**Evidence:** Trigger, detection time, initiator, affected grant, restriction or revocation action, containment, impact assessment, corrective action and restoration decision if any.

**Failure response:** Escalate as a control failure or incident, contain downstream effects and verify that access and active execution have stopped.

**Review frequency:** Continuously for defined triggers and after every restriction, revocation or restoration.

## Minimum authority-grant record

Until the formal artifact system is published, an authority-grant record contains at least:

- Grant identifier and version.
- AI identity.
- Accountable owner and decision record.
- Work type, objective and included scope.
- Approved context, data and destinations.
- Approved tools and actions.
- State-change permissions.
- Environment and network boundary.
- Permitted downstream effects.
- Resource and economic limits.
- Risk factors, treatment and selected authority outcome.
- Required controls, human gates and evidence.
- Start, expiry and review time.
- Stop, restriction and revocation triggers.
- Current status and change history.

The record is linked to the work it authorizes. A role prompt, tool configuration or credential is not an authority-grant record by itself.

## Grant decision sequence

The grant owner performs these steps in order:

1. Confirm accountability under CTRL-ACC-001 and CTRL-ACC-003.
2. Identify the AI identity and requested authority dimensions.
3. Evaluate every required risk factor.
4. Select the most restrictive authority outcome that can accomplish the approved objective.
5. Define deterministic boundaries, human gates and evidence.
6. Obtain the human decisions required by CTRL-AUTH-005.
7. Activate the exact approved grant version.
8. Observe use, enforce expiry and apply restriction or revocation triggers.

Failure at any step leaves the grant inactive or moves it to a more restrictive outcome.

## Completion check

An authority decision is complete only when all of the following are true:

- The receiving AI identity is specific and resolvable.
- Every authority dimension is explicit.
- The risk assessment changed or confirmed the selected authority outcome.
- The grant is within the Pilot Edition ceiling.
- Accountable humans approved the exact grant version.
- Technical enforcement matches the recorded permissions.
- The grant has an expiry or earlier review.
- Restriction and revocation can be applied without relying on AI cooperation.
- Use and violations produce reviewable evidence.
- Nothing outside the grant is treated as implicitly allowed.

## Related principles, controls and sources

This chapter implements [PRIN-001](../principles.md#prin-001-adopt-by-capability-not-calendar), [PRIN-002](../principles.md#prin-002-grant-authority-by-work-and-risk), [PRIN-003](../principles.md#prin-003-preserve-human-accountability), [PRIN-004](../principles.md#prin-004-require-durable-evidence), [PRIN-005](../principles.md#prin-005-prefer-deterministic-enforcement), [PRIN-006](../principles.md#prin-006-work-in-small-reversible-units), [PRIN-008](../principles.md#prin-008-apply-least-authority) and [PRIN-010](../principles.md#prin-010-treat-selective-orchestration-as-optional).

It consumes [CTRL-ACC-001](accountability.md#ctrl-acc-001-name-accountable-humans-before-work-begins), [CTRL-ACC-003](accountability.md#ctrl-acc-003-classify-consequential-decisions-and-assign-one-owner), [CTRL-ACC-005](accountability.md#ctrl-acc-005-record-approval-before-consequential-effect) and [CTRL-ACC-007](accountability.md#ctrl-acc-007-stop-and-escalate-when-accountability-is-ineffective).

Sources: [SRC-003](../sources/source-ledger.md#src-003-aws-adaptive-ai-dlc-workflows), [SRC-007](../sources/source-ledger.md#src-007-engineering-the-agentic-sdlc) and [SRC-009](../sources/source-ledger.md#src-009-finos-mcp-server-security-governance).
