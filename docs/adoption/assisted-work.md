# Assisted Work Adoption State

## Purpose

Assisted Work permits AI to analyze, explain, question, recommend and draft for real enterprise delivery while an accountable human independently evaluates every material output and performs every state-changing action.

AI remains advisory in this state. It receives no authority to apply a change, invoke a state-changing enterprise tool, satisfy a human gate or make a consequential decision.

## Source basis and playbook decision

The required sources provide three relevant patterns:

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) treats AI outcomes as dependent on organizational and delivery capabilities and evaluates effects beyond tool use.
- [SRC-005](../sources/source-ledger.md#src-005-context-engineering-for-coding-agents) distinguishes instructions, guidance and context interfaces while warning that model behavior remains probabilistic.
- [SRC-010](../sources/source-ledger.md#src-010-github-enterprise-copilot-adoption-guidance) uses bounded pilots, specific engineering goals, onboarding, support, feedback and iterative improvement.

The controls below are the playbook's normative decisions. Assisted Work applies these patterns to vendor-neutral enterprise delivery without treating suggestion use as successful delivery.

## Eligibility

A named team, repository and work type is eligible for Assisted Work only when:

- Foundation exit was approved for that exact scope under CTRL-STATE-FND-005.
- The work has one accountable human and every expected consequential decision has an owner.
- The AI identity has a current read-only advisory or plan-and-draft authority grant.
- Approved context sources, sensitivity boundaries, tools and destinations are explicit.
- Required deterministic and inferential controls are available.
- Evidence capture, support, incident, restriction and revocation routes are operational.
- The human participant is competent to evaluate the output and perform the work without treating AI as authority.
- The intended outcome and applicable delivery-system baseline are defined.

Prior Assisted Work approval for another team, repository, data set or work type does not create eligibility.

## Eligible work

Assisted Work may include:

- Explain approved code, architecture, interfaces or operational information.
- Identify ambiguity, missing requirements, assumptions and questions.
- Draft requirements, plans, documentation, tests, examples or review findings.
- Suggest implementation approaches, edge cases and alternatives.
- Analyze a defect, incident or dependency using approved evidence.
- Assist a human code or design review by producing findings for human disposition.
- Produce a candidate patch as a draft that a human may inspect and manually apply under existing delivery controls.

Eligibility is determined by the actual context and effect, not the name of the activity. A request labeled analysis is not Assisted Work if it invokes state-changing tools or produces an unreviewed downstream effect.

## Prohibited work

In Assisted Work, AI must not:

- Modify a managed repository, artifact, issue, configuration, environment or data set.
- Execute a command or tool that can create, update, delete, publish, notify or trigger downstream state.
- Apply its own proposed patch, test, remediation or documentation.
- Approve, merge, release, deploy or operate a system.
- Satisfy a human gate, accept risk, approve an exception or make a consequential decision.
- Expand its context, tools, permissions, scope or effective period.
- Access production credentials, production control planes or prohibited data.
- Present generated output as verified fact, passing evidence or organizational policy.
- Delegate work or authority to another AI identity.

If useful work requires any prohibited action, stop and reclassify it. Assisted Work must not drift into Bounded Change through convenience or repeated manual confirmation.

## Responsibilities

### AI responsibilities

Within its grant, AI may retrieve approved context through read-only mechanisms, identify uncertainty, distinguish sourced fact from inference, produce advisory output and stop when context or authority is insufficient.

AI output must identify:

- Work and authority-grant references.
- Material sources and versions used.
- Assumptions and inferred conclusions.
- Missing, conflicting or stale context.
- Material uncertainty and plausible alternatives.
- Recommended human validation.
- Actions it did not perform.

### Human responsibilities

The accountable human must:

- Define the objective and validate the approved context.
- Review source material rather than relying only on the AI summary.
- Evaluate accuracy, relevance, security, policy and completeness.
- Resolve ambiguity and every consequential decision.
- Reject, revise or accept individual suggestions explicitly.
- Perform all changes through the existing human-controlled delivery process.
- Run required controls against the resulting human-created state.
- Record output disposition, errors, time effects and observed delivery outcomes.
- Stop and escalate when independent evaluation is not possible.

Copying, pasting or mechanically accepting AI output is a human-applied change, but it is not independent validation.

## Minimum controls

Every Assisted Work item applies, at minimum:

- CTRL-ACC-001 through CTRL-ACC-007 for ownership and decisions.
- CTRL-AUTH-001 through CTRL-AUTH-008 with read-only advisory or plan-and-draft authority only.
- CTRL-EVID-001 through CTRL-EVID-008 for material sources, output, validation and disposition.
- CTRL-PREC-001 through CTRL-PREC-007 for applicable verification and review.
- CTRL-CTX-001 through CTRL-CTX-004 for owned, applicable context.
- CTRL-EXC-001 and CTRL-EXC-002 for any permitted deviation.
- CTRL-LEARN-001 through CTRL-LEARN-003 for material and repeated failures.

CTRL-BATCH controls apply to any candidate change drafted through Assisted Work and to the human-applied change that follows. Assisted Work itself does not authorize execution.

## Required evidence

The evidence package must show:

- Work scope, intended outcome and state assignment.
- Accountable human and expected consequential-decision owners.
- AI identity and exact authority-grant version.
- Context assembly and material source versions.
- Advisory output and its stated uncertainty.
- Human validation performed against authoritative sources.
- Accepted, rejected and modified output with rationale for material dispositions.
- Human-performed downstream actions, linked but distinguished from AI activity.
- Required control results against the final human-created state.
- Failures, escalations, restrictions and improvement actions.
- Outcome observations linked to the relevant baseline.

A transcript or accepted suggestion count does not satisfy this package.

## Measures and decisions

The pilot review evaluates whether Assisted Work changes the delivery system as intended without unacceptable quality, operational, security, product, experience or economic effects.

Usage, generated volume, active users, prompt counts and suggestion acceptance may diagnose participation or workflow friction. They must not be treated as successful delivery outcomes.

Continuation evidence should include applicable observations such as:

- Change in time or effort for the eligible work type.
- Defects, rework and escaped issues associated with assisted output.
- Control failures, incorrect claims and context gaps.
- Human review effort and ability to evaluate independently.
- Security, privacy, policy and incident findings.
- Participant experience and support demand.
- Tool, model, review and remediation cost.
- Product or operational outcome affected by the work.

The organization defines measures and guardrails before the pilot. A favorable measure must not silently compensate for a violated safety or policy boundary.

## Stop and restriction conditions

Stop the affected work and restrict or revoke authority when:

- AI attempts or performs a prohibited state-changing action.
- The identity, grant, owner, context or evidence chain cannot be resolved.
- Required context is missing, stale, conflicting or outside the approved boundary.
- The human cannot independently evaluate the output.
- AI presents fabricated sources, approvals, tool results or completion evidence.
- A required control fails or cannot evaluate.
- Sensitive information is exposed to an unapproved destination.
- Output repeatedly causes the same material failure.
- Actual effort, risk, cost or downstream effects exceed the approved treatment.
- An incident, changed condition or expired grant invalidates eligibility.

Stopping one work item does not automatically prohibit all Assisted Work. The accountable owner identifies the affected scope and applies the more restrictive state where uncertainty remains.

## State decisions

### Continue Assisted Work

Continue when the scope remains eligible, controls operate, outcomes remain within guardrails and observed failures have accountable treatment. Record the evidence period, conditions and next review.

### Restrict Assisted Work

Reduce work types, context, tools, participants or duration when evidence supports only a narrower use. Restrictions take effect before additional work.

### Return to Foundation

Return the affected scope when foundational capabilities are absent or unreliable, independent human validation is not sustainable or incidents invalidate eligibility.

### Consider Bounded Change

Assisted Work evidence may support a separate Bounded Change assessment. It does not create execution authority. Advancement is optional and requires the Bounded Change state, exact work scope, technical boundary, verification, human review and new authority decision.

## Normative controls

### CTRL-STATE-AST-001: Assign Assisted Work to an exact scope

**Purpose:** Prevent advisory authority from spreading across unevaluated teams, repositories, work types or data.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every proposed or active Assisted Work use.

**Owner:** AI delivery governance owner.

**Requirement:** Assisted Work must be assigned through an authenticated state decision naming the team, repository, work types, context classes, AI identity, effective period, required controls and stop conditions. Unlisted scope remains in Foundation or its currently approved state.

**Enforcement or evaluation mechanism:** Work intake resolves the state decision and rejects requests outside its exact scope or period.

**Evidence:** State decision, Foundation exit reference, scope, owners, authority-grant version, controls and effective period.

**Failure response:** Deny the work, return it to Foundation evaluation or obtain a new human decision for changed scope.

**Review frequency:** At assignment, every work item, scope change, expiry and triggered state review.

### CTRL-STATE-AST-002: Keep AI advisory and human action explicit

**Purpose:** Prevent Assisted Work from becoming unapproved AI execution.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every Assisted Work item.

**Owner:** Delivery accountable owner.

**Requirement:** AI authority must remain read-only advisory or plan and draft. AI must not change managed state or invoke state-changing tools. A named human must independently decide whether to use each material output and must perform every downstream state change through human-controlled delivery processes.

**Enforcement or evaluation mechanism:** Tool, permission and environment boundaries prevent AI state changes, and work records distinguish AI output, human disposition and human action identities.

**Evidence:** Authority boundary, technical enforcement result, advisory output, human disposition and separate downstream action record.

**Failure response:** Stop work, contain effects and restrict or revoke authority. Reclassify any requested execution as Bounded Change work.

**Review frequency:** At every grant, material output and downstream action.

### CTRL-STATE-AST-003: Require independent human validation

**Purpose:** Prevent plausible AI output from being accepted without accountable examination.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every material Assisted Work output used in delivery.

**Owner:** Accountable human for the output and affected decisions.

**Requirement:** Before using material AI output, the human must validate it against authoritative sources, applicable requirements and controls, resolve consequential decisions and record accepted, rejected or modified content. AI self-review, a second AI opinion or mechanical acceptance must not satisfy this human validation.

**Enforcement or evaluation mechanism:** The use gate requires authenticated human disposition, source references, unresolved findings and applicable control results before downstream use.

**Evidence:** Output version, validation sources, human findings, disposition, changes, decisions and control results.

**Failure response:** Do not use the output. Obtain qualified review, reduce scope or stop the work.

**Review frequency:** For every material output and whenever its source, scope or downstream use changes.

### CTRL-STATE-AST-004: Measure outcomes rather than adoption activity

**Purpose:** Determine whether Assisted Work improves delivery without confusing usage with value.

**Control type:** Detective.

**Applicable adoption states and risks:** Every Assisted Work pilot and periodic continuation decision.

**Owner:** Pilot accountable owner.

**Requirement:** Before the pilot begins, the owner must define intended delivery outcomes, baseline evidence, guardrails and review rules. Usage and suggestion-acceptance measures may be recorded only as diagnostics and must not establish success or justify authority expansion by themselves.

**Enforcement or evaluation mechanism:** Pilot review maps each decision to outcome, guardrail and cost evidence and labels usage measures as diagnostic.

**Evidence:** Baseline, measure definitions, observation results, failures, costs, participant feedback and accountable continuation or restriction decision.

**Failure response:** Continue with restrictions, return to Foundation, change the pilot design or stop the use when outcome evidence is absent or guardrails are breached.

**Review frequency:** At pilot design, each review interval and every material failure or guardrail breach.

### CTRL-STATE-AST-005: Stop and restrict on boundary or validation failure

**Purpose:** Contain unsafe advisory use before it becomes a downstream delivery effect.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every active Assisted Work scope.

**Owner:** Delivery accountable owner until the AI delivery governance, security or incident owner accepts escalation.

**Requirement:** Work must stop when a listed stop condition occurs. The owner must preserve evidence, contain downstream use, identify affected work and decisions, restrict or revoke authority and require an accountable decision before resumption. Uncertainty about affected scope receives the broader restriction until resolved.

**Enforcement or evaluation mechanism:** Work and authority systems expose stop status, block further access or use and require a resolved incident, control or state decision to restore authority.

**Evidence:** Trigger, affected scope, containment, output and decision review, authority action, remediation and resumption or closure decision.

**Failure response:** Keep work stopped, return affected scope to Foundation or prohibit the use case when reliable treatment is unavailable.

**Review frequency:** At every stop event, attempted boundary breach, material failure and state review.

## Assisted Work completion check

An Assisted Work item is complete only when:

- The state decision and authority grant cover the exact work.
- AI performed no prohibited action.
- Material sources, output and uncertainty are preserved.
- A qualified human independently validated and dispositioned the output.
- Every downstream change is attributable to a human-controlled process.
- Required controls evaluated the final resulting state.
- Failures and outcome observations have accountable treatment.

Completion does not authorize reuse for another scope or advancement to Bounded Change.
