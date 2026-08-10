# Adoption, Decision, Risk, and Hard-Stop Model

## Status

Draft for explicit approval under [Gate 3](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/136) of the [product-recovery epic](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/131).

This document defines the decision logic that the future guidance and adoption workspace must apply. It does not define screens, forms, scoring visuals, storage technology, or platform implementation. It does not change the current production site.

## Purpose

This model helps an enterprise make defensible decisions about whether a specific AI-assisted software-delivery scope may:

- be assessed;
- begin;
- continue;
- continue with conditions;
- pause;
- remediate;
- reduce scope or authority;
- return to an earlier adoption posture;
- expand one bounded dimension;
- become a governed standard practice;
- stop or retire.

The model prevents enthusiasm, usage, isolated speed, or a favorable total score from hiding missing evidence or material harm.

## Governing sources

This model is governed by:

- the approved [Product Contract](https://github.com/scott-wojan/enterprise-ai-sdlc/blob/main/docs/product/product-contract.md);
- the approved [information architecture](https://github.com/scott-wojan/enterprise-ai-sdlc/blob/main/docs/product/information-architecture.md);
- [Governing Principles](../principles.md);
- [Human Accountability and Consequential Decisions](../core/accountability.md);
- [Authority Boundaries and Risk Treatment](../core/authority-and-risk.md);
- [Control Result Precedence](../core/control-precedence.md);
- [Durable Evidence Requirements](../core/evidence.md);
- [Pilot Edition Adoption-State Decisions](../adoption/state-decisions.md);
- [Control and Measurement Readiness](../readiness/control-and-measurement.md).

Where older guidance conflicts with the approved Product Contract, the Product Contract governs. In particular, a local speed improvement is not sufficient evidence of value, and a material hard stop cannot be averaged away.

## Five things the product must keep separate

The product must not use one label such as “readiness,” “maturity,” or “progress” to represent several different facts.

### Adoption posture

Adoption posture describes the level and type of AI participation currently authorized for an exact scope. It answers: **What kind of AI participation is currently allowed here?**

### Journey stage

Journey stage describes where the organization is in the approved adoption journey. It answers: **What work is the organization doing now?**

### Work status

Work status describes whether that stage or increment is being prepared, performed, paused, stopped, or completed. It answers: **What is happening operationally?**

### Gate decision

Gate decision records what accountable humans have decided may happen next. It answers: **What is authorized now, under what conditions?**

### Evidence conclusion

Evidence conclusion states what the observed evidence does and does not support. It answers: **What can the organization defensibly claim?**

These five facts may differ. For example, a team may be in the “Evaluate and decide” journey stage, have an Assisted Work posture, have paused work, receive a “remediation required” gate decision, and have an evidence conclusion of “value not demonstrated.”

## Exact decision scope

Every decision applies only to the scope it names. A decision must identify:

- organization or business boundary;
- accountable sponsor and adoption owner;
- team or participant group;
- product, service, repository, component, or workflow;
- software-delivery activity;
- work type and expected frequency;
- data and context classes;
- AI system or approved identity class;
- tools and permitted actions;
- environment and downstream effects;
- current adoption posture;
- proposed change;
- start, expiry, and review triggers.

Approval for one team, repository, work type, data class, tool, environment, or SDLC activity does not authorize another. Overlapping decisions use the more restrictive applicable rule until an accountable human resolves the conflict.

## Adoption postures

Adoption posture is not a maturity score. Greater AI authority is not inherently better.

### No AI use

AI participation is prohibited or has been deliberately rejected for the exact scope.

Use when the work is unsuitable, prohibited, unsupported, provides no justified value, or creates disproportionate risk or cost.

### Foundation

The organization prepares and tests the people, engineering, context, control, evidence, and measurement conditions required for AI-assisted work. AI output is not yet authorized for managed delivery work in the assessed scope.

### Assisted Work

AI may analyze, explain, recommend, and draft. Humans validate every material output and perform every state-changing action.

### Bounded Change

AI may make a change within an approved repository, branch, environment, task, context, tool, and authority boundary. Deterministic verification and accountable human review remain required.

### Governed Workflow

AI may participate in a repeatable multi-step workflow between explicit control and human decision points. Each step has defined inputs, authority, evidence, failure behavior, and recovery.

### Selective Orchestration

AI may coordinate a bounded set of approved delivery activities or specialized agents. This posture requires stronger isolation, identity, observability, verification, recovery, cost control, and human decision capability.

Selective orchestration is optional. The appropriate long-term posture is the least autonomous posture that produces justified outcomes within acceptable risk and cost.

## Work statuses

Work status is descriptive. It does not grant authority.

- **Not assessed:** The exact scope has not entered the decision process.
- **Preparing evidence:** Owners are assembling the information needed for a decision.
- **In progress:** Work is operating under a current approval.
- **Paused:** Work is temporarily halted while a decision, investigation, or remediation is pending.
- **Stopped:** AI participation for the scope has been terminated.
- **Completed:** The approved increment has ended and its required evidence and decision are recorded.

## Gate decisions

Every gate decision must have one of the following outcomes. A product interface may use shorter labels, but it must preserve these meanings and consequences.

### Insufficient evidence

**Meaning:** Accountable owners cannot make the proposed decision because material evidence is missing, stale, conflicting, unreliable, or outside the exact scope.

**Consequence:** Do not authorize the proposed next action. Continue only work that is already permitted and does not depend on the missing evidence. If current work depends on the missing evidence, pause or restrict it.

**Required next step:** Name the missing evidence, owner, source, due date, current restriction, and reassessment trigger.

### Blocked

**Meaning:** A universal or context-dependent hard stop applies, or a required decision owner has rejected the proposal.

**Consequence:** The affected action must not begin or continue. Apply containment, restriction, rollback, or revocation when current activity is affected.

**Required next step:** Record the governing condition, affected scope, stop authority, containment, remediation if permitted, and evidence required before reconsideration.

### Remediation required

**Meaning:** No hard stop currently requires termination, but one or more material conditions are not adequate for the proposed action.

**Consequence:** Do not authorize the proposed next action. Current lower-risk work may continue only when its existing approval remains valid and the finding does not undermine it.

**Required next step:** Complete and verify owned remediation, then repeat the affected decision.

### Approved with conditions

**Meaning:** The proposed action may proceed within narrower limits or with time-bound obligations that do not conceal a hard stop.

**Consequence:** Activate only the explicitly approved scope, restrictions, controls, limits, and review period. Missing a condition automatically pauses or restricts the affected work.

**Required next step:** Verify that conditions are implemented before work begins and monitor their expiry and triggers.

### Approved

**Meaning:** Required evidence is sufficient, no applicable hard stop is open, material risks have acceptable treatment, and authorized humans approve the exact proposal.

**Consequence:** The exact next action may begin or continue for the stated period.

**Required next step:** Implement the decision, monitor stop triggers, and return at the next scheduled or event-driven gate.

## Evidence conclusions

Gate decisions and value conclusions must remain separate. A pilot may be safely completed while still failing to demonstrate value.

### Value not evaluated

The work is not yet at a point where a value conclusion is required.

### Value not demonstrated

Material baseline, downstream effect, total-cost, comparison, attribution, or data-quality evidence is missing or unreliable. This is not a neutral or positive result and cannot justify expansion.

### Negative net value demonstrated

The complete affected delivery system became materially worse in value, total effort, total cost, quality, security, operations, maintainability, team sustainability, or business outcome.

### No material net improvement demonstrated

The evidence is sufficiently complete, but the result does not show a meaningful improvement after full-SDLC effects and total cost are considered.

### Positive net value demonstrated

The evidence supports a meaningful improvement across the declared delivery boundary after downstream work, adverse effects, and total material cost are included. Applicable quality, security, control, operational, product, and team constraints remain acceptable.

### Mixed result

Material benefits and material deterioration coexist. The result cannot be summarized as success. The decision must identify which scope may continue, what must change or stop, and whether a narrower increment has a defensible purpose.

## Decision consequences

A gate decision must state one or more operational consequences:

- proceed within the current scope;
- proceed with named conditions;
- continue only as a learning exercise with no value or expansion claim;
- remediate before proceeding;
- pause;
- reduce scope, context, tools, access, authority, duration, or participants;
- roll back to a less permissive adoption posture;
- revoke authority;
- stop AI use for the scope;
- expand exactly one bounded dimension;
- standardize as a governed workflow;
- retire an obsolete or unjustified use case.

“Monitor,” “use caution,” and “leadership should review” are not sufficient consequences unless the exact permitted action and responsible owner are also stated.

## Risk model

### Risk categories

Every assessment considers the categories that can materially affect the exact scope:

1. **Accountability and decision authority:** missing owners, unclear decision rights, ineffective review, or inability to stop work.
2. **Purpose and use-case suitability:** vague outcome, unsuitable work, excessive ambiguity, low value, or misalignment with user and business needs.
3. **People and operating conditions:** insufficient competence, unsafe reporting, mechanical review, unsustainable workload, or loss of confidence.
4. **Data, context, intellectual property, and records:** prohibited data, poor context, missing provenance, retention risk, disclosure, or conflicting source material.
5. **Identity, access, tools, and AI authority:** excessive permission, unresolved identity, unapproved tools, self-expansion, or uncontrolled downstream action.
6. **Engineering and verification:** weak specifications, untestable requirements, inadequate deterministic checks, uncontrolled change size, or unreliable review.
7. **Security, privacy, legal, compliance, and safety:** unacceptable exposure, policy conflict, regulatory obligation, unsafe output, or unapproved residual risk.
8. **Release, operations, recovery, and incidents:** production impact, change failure, weak rollback, inadequate containment, service instability, or support burden.
9. **Evidence, measurement, and attribution:** missing baseline, incomplete delivery boundary, unreliable data, confounders, selective reporting, or unsupported claims.
10. **Economics and tangible value:** incomplete cost, transferred effort, higher rework, hidden support burden, opportunity cost, or negative net value.
11. **Third-party and supply-chain exposure:** vendor, model, dependency, licensing, availability, update, or external service risk.
12. **Scope change and expansion:** silent scope drift, bundled expansion, expired approvals, new work type, new data, or increased authority without a new decision.

### Risk record

Each material risk record must contain:

- a specific condition, not a generic topic;
- credible cause;
- affected people, systems, data, SDLC activities, business outcomes, and obligations;
- current evidence and its limitations;
- maximum credible impact;
- likelihood, including “unknown” when honest;
- detectability and time to detection;
- reversibility, recovery method, and time to restore;
- current controls and evidence that they work;
- remaining exposure after controls;
- severity;
- decision consequence;
- one accountable owner;
- required action and due date;
- completion evidence;
- reassessment trigger;
- current status and history.

### Severity rules

Severity describes credible impact. It is not calculated by adding points.

#### Limited

The credible effect is localized, promptly detectable, reversible through a tested routine method, and does not materially affect protected data, consequential decisions, delivery outcomes, compliance, production, or total economics.

Limited risks may be monitored under an existing approval.

#### Material

The credible effect can change a delivery, product, quality, security, compliance, operational, team, or economic decision. It requires an owner, treatment, completion evidence, and a gate consequence.

A material risk prevents unconditional approval. It results in remediation required, approved with conditions, restriction, or pause depending on current exposure and control effectiveness.

#### Critical

The credible effect includes severe harm, prohibited access or action, uncontrolled production or data impact, serious legal or regulatory exposure, inability to recover, invalid decision evidence, or another condition outside authorized tolerance.

A critical risk is a hard stop for the affected scope. It cannot receive “approved with conditions” while the critical condition remains.

#### Unknown materiality

Available evidence cannot determine whether the credible effect is limited, material, or critical.

Unknown materiality is treated as at least material. If the condition could plausibly be critical and the scope cannot be reduced enough to contain it, the condition is treated as a hard stop until resolved.

### Likelihood, controls, and uncertainty

Likelihood informs treatment but does not erase severe impact. A low-likelihood event may still require a hard stop when the credible harm is unacceptable or recovery is not demonstrated.

A planned control is not an effective control. A control affects the decision only after the organization has evidence that it operates for the exact scope.

Missing evidence is not scored as zero. The decision must identify whether the uncertainty causes insufficient evidence, remediation required, restriction, or a hard stop.

### No composite risk or readiness score

The product must not calculate one readiness, maturity, safety, or success score that allows favorable answers to offset a material failure.

Summaries may show counts by status or category. They must also show every material risk, hard stop, restriction, and missing-evidence condition individually.

## Hard-stop model

### Definition

A hard stop is a condition that prohibits a named action or requires current work to halt. It is binary for its affected scope and action. It is not a severe-looking warning that a decision-maker may ignore without a governed disposition.

Every hard stop must define:

- the observation that triggers it;
- the scope and action it stops;
- who may declare it;
- immediate containment or restriction;
- who must be notified;
- whether remediation and reconsideration are permitted;
- who may verify that the condition is cleared;
- evidence required to clear it;
- whether a new approval, authority grant, or stage decision is required.

### Universal hard stops

These conditions stop the affected adoption action in every organization and posture.

#### HS-001: No accountable human decision owner

**Trigger:** No identifiable human has the competence and organizational authority to decide, reject, stop, and answer for the proposed action or a consequential decision it creates.

**Stops:** Assessment approval, launch, continuation, expansion, standardization, and re-entry for the affected action.

**Cleared by:** Naming an authorized, informed owner and recording that person's acceptance of accountability for the exact decision.

#### HS-002: No authorized person can pause or stop the work

**Trigger:** The pilot or adoption lead, accountable owner, control owner, or incident route cannot halt activity and enforce the halt without relying on AI cooperation.

**Stops:** Any real enterprise AI-assisted work.

**Cleared by:** Demonstrating the human and technical stop path for the exact scope.

#### HS-003: Prohibited or unapproved access, data, system, tool, model, or action

**Trigger:** The proposed or observed activity includes something prohibited, not explicitly authorized, outside the approved boundary, or not attributable to a resolvable identity.

**Stops:** The affected access or work immediately. Current authority is restricted or revoked when containment is uncertain.

**Cleared by:** Removing the prohibited element, containing any exposure, completing required incident review, and issuing a new approval when reconsideration is permitted.

#### HS-004: Required validation or approval cannot operate

**Trigger:** A material AI output or state change cannot be independently checked, a required control cannot evaluate, or an accountable human approval cannot be obtained before effect.

**Stops:** Use of the output or execution of the affected action in managed delivery.

**Cleared by:** Operating and evidencing the required validation and approval path against the exact scope.

#### HS-005: Unresolved critical harm or exposure

**Trigger:** A critical security, privacy, legal, regulatory, contractual, safety, production, operational, financial, or workforce condition remains open.

**Stops:** Any action that could create, continue, or expand the exposure.

**Cleared by:** Verified removal or reduction below critical severity and accountable category-owner disposition. A person cannot clear a condition outside that person's authority.

#### HS-006: Required containment or recovery is absent

**Trigger:** The proposed action can change state or create a material downstream effect, but the organization cannot bound impact, stop the action, preserve evidence, or restore an acceptable state.

**Stops:** The state-changing or downstream action.

**Cleared by:** A successful exercise or operational proof of containment and recovery for the exact boundary.

#### HS-007: Decision evidence is materially unreliable

**Trigger:** Evidence provenance, scope, integrity, completeness, or reproducibility is unreliable enough that accountable owners cannot determine what occurred or what the evidence supports.

**Stops:** The affected readiness, value, continuation, expansion, standardization, or re-entry decision.

**Cleared by:** Restoring or recollecting trustworthy evidence. If that is impossible, the claim or decision remains unsupported.

#### HS-008: Material harm or unacceptable negative net value is occurring

**Trigger:** Evidence shows serious degradation, unacceptable harm, or negative net value that exceeds approved tolerance across the affected SDLC boundary.

**Stops:** Current work that contributes to the condition and any expansion.

**Cleared by:** Containment, root-cause treatment, verified improvement, and a new scoped decision. Prior success does not authorize restart.

### Decision-specific hard stops

These conditions stop a particular claim or decision even when narrower learning activity might remain permissible.

#### HS-009: No meaningful baseline for an outcome claim

**Trigger:** The organization cannot establish a trustworthy comparison for the outcome it intends to claim.

**Stops:** Launch of an outcome-evaluated pilot, any success or productivity claim, and any continuation or expansion decision based on outcome improvement.

**Permitted alternative:** Leadership may separately authorize a time-boxed technical-feasibility or measurement-discovery exercise. It must be labeled as learning only, must not be called a successful pilot, and cannot justify expansion.

**Cleared by:** Approving a reproducible baseline covering the declared comparison boundary before evaluative work begins.

#### HS-010: Material downstream effects cannot be observed

**Trigger:** The organization can observe the AI-assisted activity but cannot observe material review, test, security, release, operations, incident, rework, maintainability, or support effects.

**Stops:** A tangible-value conclusion and any expansion or standardization decision based on that conclusion.

**Permitted alternative:** Continue only as bounded learning when other universal hard stops do not apply and leadership accepts that value cannot be demonstrated.

**Cleared by:** Establishing reliable evidence across the complete affected delivery boundary.

#### HS-011: Material cost is unknown

**Trigger:** Token, license, infrastructure, integration, enablement, review, rework, support, governance, incident, or opportunity costs could materially change the economic result but are missing.

**Stops:** Any economic-benefit, savings, productivity, expansion, or standardization claim that depends on net value.

**Permitted alternative:** Continue only as bounded learning under a stated cost ceiling when other hard stops do not apply.

**Cleared by:** Producing a total-cost view for the declared scope with limitations and accountable financial review.

#### HS-012: Independent challenge is absent

**Trigger:** The people who performed or sponsored the AI-assisted work are the only people evaluating success, adverse effects, or expansion.

**Stops:** Final success, advancement, expansion, or standardization approval.

**Cleared by:** Independent participation from qualified delivery, measurement, control, finance, product, or affected-party reviewers as applicable.

### Context-dependent hard stops

The organization must define additional hard stops for its work and obligations. Examples include:

- regulated or contractually restricted data leaving an approved boundary;
- generated content whose license or provenance cannot be accepted;
- critical infrastructure, safety-related, financial, clinical, or other high-impact behavior without required assurance;
- destructive actions without tested recovery;
- production execution without explicitly approved posture-specific controls;
- external communication or customer commitment without human approval;
- excessive consumption or spending beyond an enforced limit;
- a vendor, model, integration, or control change that invalidates prior evidence;
- participant coercion, suppressed reporting, or review workload that makes responsible operation impossible.

Within the Pilot Edition, direct AI modification of production systems, production data, production access controls, release approval, deployment authorization, self-expansion of authority, and multi-agent orchestration are prohibited. Later product modules may propose stronger postures, but those capabilities remain stopped until separately approved requirements exist.

## Declaring and clearing a hard stop

### Who may declare

Any participant may report a suspected hard-stop condition. The accountable adoption owner, pilot lead, affected category owner, control owner, incident owner, or authorized technical control may place the affected scope into a stopped or paused state.

Reporting does not require proof beyond reasonable concern when delay could increase harm. Investigation determines the final disposition.

### Immediate response

The responsible owner must:

1. stop the affected action;
2. contain access and downstream effects;
3. preserve evidence;
4. identify the affected scope and any uncertain spillover;
5. notify accountable owners;
6. decide whether broader restriction or revocation is required;
7. record the condition and next decision.

### Who may clear

A hard stop requires both:

- verification by the owner or qualified evaluator responsible for the failed condition; and
- a new decision from the accountable owner for the affected adoption action.

When several consequential categories are involved, every category owner decides within that person's authority. The adoption owner cannot override a security, legal, financial, release, service, or other category decision outside the adoption owner's authority.

The person or AI system whose work caused the condition cannot be the only verifier.

### Evidence required to clear

Clearance evidence must show:

- the original trigger and affected scope;
- containment and current safe state;
- root cause when required;
- completed remediation;
- operational proof that the remediation works;
- treatment of affected prior decisions and evidence;
- remaining exposure and accountable disposition;
- updated controls, authority, and stop triggers;
- the exact new approval and effective period.

Closing a task, changing a policy document, purchasing a product feature, or receiving a verbal assurance is not sufficient without evidence that the required condition now operates.

## Remediation model

Every material finding or hard stop that permits remediation must create a remediation record with:

- finding or hard-stop identifier;
- exact affected scope;
- current decision and restriction;
- one accountable owner;
- required corrective action;
- dependencies;
- due date and review date;
- observable completion evidence;
- verifier independent of the producer when material;
- reassessment decision and owner;
- status and history.

### Remediation statuses

- **Open:** Accepted for action but not started.
- **In progress:** Work is underway; the current restriction remains.
- **Pending verification:** The owner claims completion, but required proof has not been accepted.
- **Verified:** Completion evidence passed and the affected decision may be reassessed.
- **Rejected:** Evidence or treatment is insufficient; the restriction remains.
- **Deferred by authorized decision:** Work will not proceed now; the affected action remains restricted or stopped.
- **Closed without proceeding:** The organization chose not to continue the affected adoption action.

“Verified” does not automatically restore authority. It makes the scope eligible for a new decision.

### Reassessment triggers

Reassessment occurs when:

- required remediation is verified;
- a condition or approval expires;
- scope, work type, data, tool, model, environment, participant, or authority changes;
- a control, evidence source, or baseline changes materially;
- an incident, escaped defect, repeated failure, or unexpected cost occurs;
- a category owner changes a consequential disposition;
- stakeholders report that review, support, or safe participation is no longer sustainable.

## Exceptions and accepted risk

### What an exception may do

An authorized exception may temporarily permit a defined alternative control or reduced scope when:

- the underlying action is not prohibited;
- no universal hard stop remains;
- the decision-maker has authority for the affected consequence;
- compensating conditions are explicit and testable;
- the exception has an owner, reason, start, expiry, review trigger, and revocation condition;
- residual exposure is recorded and visible.

### What an exception may not do

An exception may not:

- make missing evidence count as favorable evidence;
- convert “value not demonstrated” into success;
- allow a person to decide outside that person's authority;
- treat AI approval as human approval;
- hide a failed or unable-to-evaluate control;
- override prohibited access or action;
- authorize activity beyond the current approved product posture;
- remain permanent or renew automatically;
- erase the original result from the record.

### Accepted risk

Risk acceptance applies only to a named residual exposure within the decision-maker's delegated authority. It does not prove readiness, value, or control effectiveness. Acceptance must identify the scope, rationale, alternatives, maximum exposure, effective period, monitoring, and stop trigger.

## Disagreement and escalation

### Governing rule

AI must not resolve disagreement among accountable humans. The most restrictive applicable decision governs until the conflict is resolved.

### Required process

1. Record each position and the evidence supporting it.
2. Identify the decision categories and the authority held by each owner.
3. Apply immediate containment or restriction when delay could increase harm.
4. Route the dispute to the named escalation authority for the unresolved category.
5. Preserve failed, warning, dissenting, and unable-to-evaluate evidence.
6. Record the disposition, rationale, scope, conditions, and effective period.

No response, meeting attendance, tool access, prior success, or executive enthusiasm constitutes approval.

### Cross-category decisions

The executive sponsor owns the enterprise investment decision but cannot overrule a category owner on a matter outside the sponsor's delegated authority. For example:

- security decides whether a security exposure is acceptable within its mandate;
- legal or compliance decides obligation and policy questions;
- product decides intended user and business outcomes;
- release and service owners decide production and operational effects;
- finance decides material economic commitments;
- the AI adoption owner integrates these dispositions into the final adoption decision.

If a required category rejects the action, the action is blocked or narrowed even when other categories support it.

## Stage-gate model

Each of the nine approved journey stages ends in a decision. The future product must explain the decision before collecting input and must show the resulting consequence immediately after interpretation.

### Stage 1: Understand and align

**Decision:** Is there a real problem, accountable enterprise intent, and authorized ownership to assess AI adoption?

**Accountable owner:** Executive sponsor or another identifiable human with authority over the adoption intent and investment boundary.

**Required participants:** Enterprise AI adoption owner, affected product and delivery leaders, finance, and initially identifiable control partners.

**Minimum evidence:** Mandate or problem statement, intended outcome, affected scope, decision rights, funding or cost boundary, named adoption lead, affected stakeholders, known constraints, and explicit permission to report failure and stop work.

**Possible outcomes:** Approved to assess, approved with conditions, remediation required, or blocked.

**Stops this stage:** No accountable investment and adoption decision owner; no authorized adoption lead; success is predetermined; participants cannot report adverse evidence; nobody can stop the work.

**Output:** Adoption intent and ownership decision.

### Stage 2: Assess readiness and baseline

**Decision:** Does the exact scope have enough organizational, team, engineering, context, control, evidence, and measurement capability to consider real AI-assisted delivery work?

**Accountable owner:** Enterprise AI adoption owner.

**Required participants:** Delivery, engineering, platform, security, legal or compliance, quality, release, service, measurement, finance, and participant representatives as applicable.

**Minimum evidence:** Scoped readiness findings, enforceable authority boundaries, validation and approval path, incident and revocation exercise, reliable evidence path, meaningful full-boundary baseline, total-cost plan, gaps, restrictions, and remediation.

**Possible outcomes:** Approved to select use cases within stated posture, approved with conditions, remediation required, insufficient evidence, or blocked.

**Stops this stage:** Any applicable HS-001 through HS-007; inability to establish a meaningful baseline for an outcome-evaluated pilot; inability to observe material downstream effects or costs for a later value decision.

**Output:** Current posture, readiness decision, baseline, risk and evidence-gap register, restrictions, and remediation plan.

### Stage 3: Select opportunities

**Decision:** Is the proposed work appropriate and worthwhile for the current posture and evidence capability?

**Accountable owner:** Product or business owner for the intended outcome, with the AI adoption owner deciding permitted AI participation.

**Required participants:** Delivery, architecture, engineering, quality, security, operations, measurement, finance, and affected practitioners as applicable.

**Minimum evidence:** Specific work type, frequency, complete delivery boundary, user or business need, expected mechanism of benefit, current pain, alternatives, risk and reversibility, required context and tools, available validation, baseline fit, and estimated total cost.

**Possible outcomes:** Select, select with narrower scope or conditions, hold for remediation, reject for AI use, or reject as not worth pursuing.

**Stops this stage:** Vague or unmeasurable outcome; prohibited work or data; unacceptable consequence or blast radius; no reliable validation; no plausible enterprise value after total effort and cost; AI selected only because licenses exist or leadership demanded usage.

**Output:** Use-case selection and rejection record.

### Stage 4: Design the first adoption increment

**Decision:** Is the proposed pilot or first increment bounded, measurable, supportable, reversible, and decision-ready?

**Accountable owner:** Pilot or program lead, with the AI adoption owner approving posture and authority.

**Required participants:** Product, delivery, engineering, platform, quality, security, legal or compliance, release, service, measurement, finance, support, and team representatives as applicable.

**Minimum evidence:** Charter, exact scope, current and proposed posture, authority boundary, control plan, baseline, full-SDLC evidence plan, total-cost plan, onboarding and support, decision date, stop triggers, containment, recovery, and leadership decision criteria.

**Possible outcomes:** Approved for preparation, approved with conditions, remediation required, insufficient evidence, or blocked.

**Stops this stage:** Missing baseline or downstream evidence plan; missing total-cost boundary; no stop authority; no support or safe reporting; no containment or recovery for state-changing work; predetermined success; unresolved critical exposure.

**Output:** Approved pilot charter, authority and control boundary, evidence plan, and decision plan.

### Stage 5: Prepare and run

**Decision:** May the exact increment launch, continue, change within its approved boundary, pause, restrict, or stop?

**Accountable owner:** Pilot or program lead for operation, with the AI adoption owner accountable for authority and required category owners accountable for their controls.

**Required participants:** Delivery team, engineering and platform owners, quality, security, release, service, support, measurement, and affected category owners.

**Minimum evidence before launch:** Verified access and authority, tested controls, onboarding completion, baseline frozen, evidence capture operating, cost limits, support route, incident and revocation exercise, recovery proof, and valid approvals.

**Minimum evidence during operation:** Scope and authority use, control results, quality and review findings, rework, incidents, costs, participant experience, evidence gaps, changes, and remediation.

**Possible outcomes:** Launch, continue, continue with conditions, change within approved bounds, pause, restrict, roll back, or stop.

**Stops this stage:** Boundary breach; invalid approval; required control failure or inability to evaluate; unreliable evidence; serious quality, security, operational, workforce, or cost condition; scope drift; ineffective human review; inability to contain or recover.

**Output:** Launch decision, weekly health decisions, incident and pause records, updated risks, and complete evidence package.

### Stage 6: Evaluate and decide

**Decision:** What does the complete evidence support, and should the exact scope stop, remediate, continue, restrict, or become eligible for one bounded expansion?

**Accountable owner:** Enterprise AI adoption owner, with the executive sponsor owning continued investment and each category owner deciding within that person's authority.

**Required participants:** Independent measurement reviewer, product, delivery, engineering, quality, security, service, finance, participant representatives, and other affected owners.

**Minimum evidence:** Comparable baseline and pilot data across the complete affected SDLC, total material cost, intended product or business outcome, quality, security, operations, maintainability, team sustainability, incidents, adverse evidence, confounders, limitations, and independent challenge.

**Possible outcomes:** Stop, value not demonstrated, remediate and reassess, continue current scope, restrict, roll back, or eligible for one bounded expansion.

**Stops this stage:** HS-007 through HS-012; any unresolved hard stop; selective reporting; missing guardrail evidence; unsupported productivity or savings claim; expansion proposed despite negative or unknown net value.

**Output:** Tangible-value assessment, decision memorandum, leadership briefing, and next-increment recommendation.

### Stage 7: Expand incrementally

**Decision:** May exactly one dimension of scope or authority expand, and can its effects be distinguished from the prior state?

**Accountable owner:** Enterprise AI adoption owner, with executive sponsor approval for investment and required category-owner decisions.

**Required participants:** Owners affected by the dimension being expanded, measurement, finance, platform, security, delivery, operations, and representatives of newly affected people.

**Minimum evidence:** Positive or otherwise explicitly justified prior decision, exact proposed dimension, new risk assessment, new baseline or comparison treatment, capacity for review and support, updated controls, cost ceiling, rollback, expiry, and isolation from simultaneous material changes.

**Possible outcomes:** Expand one dimension, expand with conditions, continue unchanged, remediate, restrict, or stop.

**Stops this stage:** More than one material dimension bundled without separable evidence; prior value not demonstrated; unresolved hard stop; control or support capacity does not scale; expansion exceeds authorized posture; inability to distinguish the expanded effect.

**Output:** Bounded next-increment plan and updated authority, evidence, risk, and support plan.

### Stage 8: Govern and integrate

**Decision:** Has the practice earned repeatable inclusion in the organization's normal delivery system for the exact scope?

**Accountable owner:** Enterprise AI adoption owner with the delivery or platform owner accountable for the integrated workflow.

**Required participants:** Product, delivery, architecture, platform, quality, security, compliance, release, operations, finance, workforce, and evidence owners as applicable.

**Minimum evidence:** Repeated results across relevant variation, stable ownership, operational controls, monitored authority, support capacity, durable context, reliable evidence, cost management, incident learning, exceptions, training, recovery, and periodic review.

**Possible outcomes:** Standardize as a governed workflow, standardize with conditions, continue as a limited practice, remediate, restrict, or retire.

**Stops this stage:** Results depend on heroic individuals; controls or evidence are manual and unsustainable; ownership is unclear; material costs or downstream effects remain unknown; repeated failures have not improved the system; practice cannot be safely supported as normal operation.

**Output:** Governed workflow definition, ownership and operating record, integrated controls, and review schedule.

### Stage 9: Operate and improve

**Decision:** Should the practice continue, change, reduce, pause, return to an earlier posture, or retire under current evidence and conditions?

**Accountable owner:** Operational owner of the governed practice, with the AI adoption owner accountable for posture and authority.

**Required participants:** Delivery, platform, quality, security, service, finance, product, workforce, evidence, and affected user representatives as applicable.

**Minimum evidence:** Current outcomes and costs, control health, incidents and near misses, model and tool changes, drift, participant experience, support load, context quality, exceptions, changed obligations, and ongoing business relevance.

**Possible outcomes:** Continue, improve within bounds, continue with conditions, reduce, pause, roll back posture, re-enter an earlier journey stage, or retire.

**Stops this stage:** Expired or invalid authority; material change without reassessment; declining net value; unacceptable risk or harm; control drift; unsupported operation; loss of business need; inability to maintain evidence or recovery.

**Output:** Periodic operating decision, updated controls and risks, remediation, and retirement or next-improvement plan.

## Minimum decision record

Every material stage or operating decision must record:

- decision identifier and journey stage;
- exact scope;
- current adoption posture and work status;
- question being decided;
- accountable owner and required participants;
- evidence reviewed, including limitations and dissent;
- applicable risks and hard stops;
- material alternatives, including no AI use, no change, restriction, and stop;
- decision outcome and evidence conclusion;
- what may continue;
- what must stop;
- conditions, remediation, and owners;
- authority or technical changes required;
- effective period, expiry, and review triggers;
- authenticated human approvals;
- leadership implication and next decision.

AI may assemble, summarize, challenge, and identify inconsistency within its approved authority. AI may not own the decision, accept risk, clear its own failure, approve expansion, or infer approval.

## Written-field quality standard

Gate 4 will define exact response controls. Any Gate 3 field that ultimately requires written explanation must follow the Product Contract's example standard.

### Risk statement

**Bad:** “Security could be a problem.”

**Why it fails:** It identifies no condition, scope, effect, evidence, control, or decision consequence.

**Good:** “The approved assistant can read the full repository, including deployment configuration containing internal service names. Repository policy permits source-code access but prohibits infrastructure configuration. Current access cannot exclude that directory. Until path-level restriction is demonstrated, Assisted Work is blocked for this repository.”

**Why it works:** It names the boundary, conflict, evidence, current control gap, and exact consequence.

### Remediation

**Bad:** “Improve access controls and confirm with security.”

**Why it fails:** It has no owner, test, affected scope, due date, or completion evidence.

**Good:** “The platform owner will deny the assistant access to `/deployment` for Repository A by 30 September. The security owner will verify a permitted source read and a denied deployment-directory read using the pilot identity. The pilot remains blocked until both results are attached to the readiness decision.”

**Why it works:** It is owned, bounded, testable, time-bound, and tied to the governing decision.

### Decision rationale

**Bad:** “The pilot went well, so expand to more teams.”

**Why it fails:** It does not state the evidence boundary, adverse results, total cost, proposed expansion, or conditions.

**Good:** “Continue the authentication-defect use case for Team A without expanding authority. Total effort from accepted defect through 14 days of production support decreased by 18 percent across 24 comparable defects. Review effort, escaped defects, security findings, change failure, and support load remained within the predeclared guardrails. Total cost decreased by 9 percent after licenses, tokens, enablement, review, and support were included. Evidence does not cover other work types or teams.”

**Why it works:** It connects the exact scope, full delivery boundary, constraints, economics, limitations, and permitted consequence.

### Exception rationale

**Bad:** “Approve an exception because the pilot is strategically important.”

**Why it fails:** Strategic interest does not identify the requirement, compensating control, exposure, authority, expiry, or stop trigger.

**Good:** “For the two-week measurement-discovery exercise only, permit manual cost capture because automated token allocation is not yet available. Finance will reconcile daily provider usage to the five named participants and apply a $500 enforced ceiling. No savings, productivity, continuation, or expansion claim may use this exercise. The exception expires on 15 October or immediately if participant attribution fails.”

**Why it works:** It narrows the scope, preserves the claim restriction, defines a control, names an owner, and expires automatically.

## Product behavior requirements for later gates

The future product must:

- explain a decision before asking for input;
- identify owner and required participants;
- distinguish posture, status, decision, and evidence conclusion;
- show hard stops without requiring a report or hidden calculation;
- state what may continue and what must stop;
- prevent approval when a universal hard stop remains;
- preserve unknown and adverse evidence;
- show good and bad examples beside written fields;
- create owned remediation from material findings;
- require verification before remediation can be reassessed;
- keep prior results and decision history visible;
- generate a decision record and leadership explanation;
- avoid a composite readiness, maturity, risk, or success score;
- avoid treating page completion as adoption progress.

Gate 4 will define response types, evidence capture, risk reporting, leadership reporting, exports, and the exact interaction between user input and these rules.

## Gate 3 approval questions

Approval requires agreement that:

1. Adoption posture, journey stage, work status, gate decision, and evidence conclusion are correctly separated.
2. Gate decision outcomes have clear and nonoverlapping consequences.
3. Risk categories and severity rules are sufficient and do not depend on a composite score.
4. Universal, decision-specific, and context-dependent hard stops are classified correctly.
5. Baseline, downstream evidence, total cost, and independent challenge create the right limits on claims and expansion.
6. Hard-stop declaration and clearance authority are appropriate.
7. Remediation, reassessment, exception, and escalation rules are enforceable.
8. Each of the nine journey stages has the right decision, owner, evidence, outcomes, and stop conditions.
9. The minimum decision record is complete.
10. The model gives Gate 4 enough stable logic to design response capture and reporting without inventing policy in the interface.

After approval, this document governs Gate 4. Visual design and production implementation remain blocked until their later gates.
