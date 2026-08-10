# Risk, Tangible-Value, and Reporting Model

## Status

Draft for explicit approval under [Gate 4](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/138) of the [product-recovery epic](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/131).

This document defines how the future product explains current posture, risks, hard stops, remediation, tangible value and leadership decisions. It does not define visual design, platform implementation or production behavior.

## Purpose

Reports must help people act. They must not dump every captured field into a document and require the reader to interpret the methodology.

Every material report must make clear:

- what exact scope it covers;
- what was observed;
- what evidence is missing or limited;
- what the evidence supports;
- what risks and hard stops govern;
- what may continue;
- what must stop;
- who must act;
- what decision is required next.

## Governing sources

This model is governed by:

- the approved [Product Contract](https://github.com/scott-wojan/enterprise-ai-sdlc/blob/main/docs/product/product-contract.md);
- the approved [information architecture](https://github.com/scott-wojan/enterprise-ai-sdlc/blob/main/docs/product/information-architecture.md);
- the approved [adoption, decision, risk and hard-stop model](adoption-decision-risk-model.md);
- the [response and evidence model](response-evidence-model.md);
- [Baseline, Flow and Quality Measures](../measures/baseline-flow-quality.md);
- [Balanced Pilot Outcome Measures](../measures/balanced-outcomes.md).

## Three reporting levels

### Immediate consequence

Shown directly after a material response or evidence review.

It states:

- response or evidence interpreted;
- governing rule;
- current consequence;
- what may continue;
- what must stop;
- required remediation or next evidence;
- accountable owner.

### Workspace posture

Shown whenever a user enters or resumes an adoption workspace.

It states:

- exact scope;
- journey stage;
- adoption posture;
- work status;
- gate decision;
- evidence conclusion;
- permitted, restricted and prohibited activity;
- hard stops;
- material risks;
- evidence gaps;
- overdue remediation;
- approvals and expiries;
- next decision and owner.

### Durable report

Generated for a defined audience and decision using a versioned evidence snapshot.

It includes source references, limitations, decision status and a statement that later changes may supersede the report.

## Reporting language

Reports must distinguish:

- **Observed fact:** Directly supported by a cited record.
- **Verified result:** A qualified evaluator accepted the evidence for an exact use.
- **Interpretation:** Human analysis of what the evidence means.
- **Recommendation:** Proposed action that has not yet been decided.
- **Decision:** Authenticated accountable human disposition.
- **Unknown:** Material information that is not currently established.
- **Limitation:** A constraint on scope, reliability, comparison or claim.

The product must not present an interpretation, recommendation or AI-generated summary as a verified fact.

## Risk reporting

### Risk item order

Every material risk is reported in this order:

1. Direct description of the condition.
2. Exact affected scope.
3. Affected people, systems, data, SDLC activities, outcomes and obligations.
4. Current evidence and limitations.
5. Credible cause and maximum credible impact.
6. Likelihood, detectability, reversibility and recovery.
7. Current controls and operational proof.
8. Remaining exposure and severity.
9. Current decision consequence.
10. What may continue.
11. What must stop.
12. Owner, action and due date.
13. Completion evidence and verifier.
14. Reassessment trigger.
15. Current status and history.

### Risk summary

A risk summary may show counts by category, severity, owner or status for navigation. It must also show every critical risk, material risk that constrains a decision and unknown condition that could plausibly be critical.

The summary must not:

- average risk into one number;
- label the workspace safe or ready because most items are favorable;
- hide overdue remediation;
- omit risk accepted with conditions;
- omit dissenting evidence;
- treat an unknown as no risk.

### Risk changes

Each report must identify risks that are:

- new;
- increased;
- reduced;
- unchanged;
- reopened;
- closed after verification;
- superseded by a new scope or decision.

A risk is not closed because a report period ended.

## Hard-stop reporting

### Required hard-stop content

Every open hard stop must display:

- hard-stop identifier and direct title;
- triggering observation;
- affected scope and action;
- time declared;
- declarer and accountable owner;
- immediate containment or restriction;
- who was notified;
- what may continue;
- what must stop;
- whether remediation and reconsideration are permitted;
- completion evidence required;
- qualified verifier;
- new decision required to resume;
- current status.

### Visibility rules

An open hard stop must appear in:

- immediate response interpretation;
- workspace posture;
- relevant risk and remediation view;
- every report whose decision or claim it affects;
- approval package;
- leadership briefing when leadership action or awareness is required.

A report cannot display an overall favorable status while an applicable hard stop remains open.

### Scope rules

Hard-stop language must say exactly what is stopped. It must not imply that the entire enterprise must stop when the trigger affects only one repository and work type. It must also not narrow the stop prematurely when spillover remains uncertain.

### Clearance reporting

Clearance reports must show:

- original trigger;
- containment;
- remediation;
- operational verification;
- remaining exposure;
- affected prior decisions;
- verifier disposition;
- new accountable decision;
- restored or changed authority;
- next review and triggers.

“Resolved” without this information is not sufficient.

## Remediation reporting

### Remediation item order

Every remediation item states:

1. Finding or hard stop addressed.
2. Exact scope.
3. Current restriction.
4. Required corrective action.
5. One accountable owner.
6. Dependencies.
7. Due date and review date.
8. Observable completion evidence.
9. Independent verifier when required.
10. Reassessment decision and owner.
11. Status and history.

### Overdue remediation

When remediation is overdue, the product must:

- preserve the current restriction;
- show the overdue status in workspace posture;
- identify the accountable owner and escalation route;
- invalidate conditional approval when its terms require timely completion;
- trigger reassessment when delay materially changes risk or feasibility.

### Verified remediation

Verified remediation changes the item status and makes the affected scope eligible for reassessment. It does not automatically change adoption posture, restore authority, clear a hard stop or authorize restart.

## Tangible-value reporting

### Governing rule

Tangible value is determined across the complete affected delivery system. Faster work in one activity is not a benefit when equal or greater effort, cost, risk or harm is created elsewhere.

### Declared comparison boundary

Before evaluative work begins, record:

- business, product, service or risk-reduction outcome;
- eligible work type and cohort;
- comparison start and end;
- included upstream and downstream SDLC activities;
- baseline period and source;
- pilot or operating period;
- intended benefit;
- quality, security, control, operational, product, team and economic constraints;
- cost boundary;
- independent reviewer;
- known limitations and confounders.

Changing the boundary after observing results creates a new version and requires accountable justification. It must not silently remove adverse effects.

### Evidence readiness gate

A tangible-value conclusion requires all of the following:

- trustworthy baseline for comparable work;
- complete declared delivery boundary;
- material downstream effects observable;
- total material costs available;
- applicable guardrail evidence available;
- independent challenge;
- traceable calculation and evidence lineage;
- material limitations disclosed.

If any material requirement is missing or unreliable, the conclusion is **value not demonstrated**.

### Outcome dimensions

Evaluate each applicable dimension separately.

#### Product or business outcome

Determine whether the work produced the intended customer, user, service, risk-reduction or business result. More generated output or completed stories is not sufficient.

#### Delivery flow and human effort

Measure elapsed time and human effort across the declared path. Include waiting, handoffs, review, approval, correction and rework, not only the AI-assisted activity.

#### Quality and maintainability

Include review findings, repeated corrections, test effectiveness, defects, escaped defects, code churn, maintainability and recurring failure.

#### Security and control

Include failed or unable-to-evaluate controls, security findings, policy exceptions, boundary events, disclosure, approval failures and remediation effort.

#### Release and operations

Include release effort, change failure, rollback, reliability, incident impact, recovery, support load and operational work.

#### Team experience and capability

Include cognitive load, review burden, confidence, learning, frustration, support dependence, psychological safety and ability to understand and maintain the result.

#### Economics

Include:

- model and token cost;
- licenses;
- infrastructure;
- integration;
- enablement and training;
- review and approval;
- verification and control operation;
- correction and rework;
- support;
- governance and audit;
- incidents and recovery;
- opportunity cost;
- fixed and variable cost allocation.

### Dimension result

Each dimension receives one result against predeclared interpretation rules:

- improved;
- no material change;
- deteriorated;
- unknown;
- not applicable with accountable justification.

The report shows the underlying measure, baseline, observed result, practical significance, confidence, limitations and decision implication. It must not average dimension results.

### Economic result

The economic section reports:

- total baseline cost;
- total pilot or operating cost;
- cost difference;
- monetized benefit or avoided cost when supported;
- allocation assumptions;
- material nonmonetized outcomes;
- sensitivity or range when estimates are uncertain;
- costs excluded and why;
- accountable financial review.

The product must not force every product, risk-reduction or operational outcome into a monetary estimate. It must still disclose total cost and explain the decision basis.

### Evidence conclusions

#### Value not evaluated

Use before a value decision is required or for a separately approved learning exercise that cannot support a value claim.

#### Value not demonstrated

Use when material baseline, boundary, downstream, cost, guardrail, comparison, attribution or independent-review evidence is missing or unreliable.

The report must name every material gap and the claim or decision it blocks.

#### Negative net value demonstrated

Use when the complete evidence shows unacceptable harm or materially worse total value, effort, cost, quality, security, operations, maintainability, team sustainability or business outcome.

Positive local speed or usage cannot offset the result.

#### No material net improvement demonstrated

Use when evidence is complete and applicable guardrails remain acceptable, but the intended meaningful improvement is not present after total effort and cost are considered.

#### Positive net value demonstrated

Use only when:

- intended outcome is meaningfully improved or equivalent value is achieved with materially lower total effort or cost;
- full-SDLC and total-cost evidence supports the result;
- no applicable hard stop remains;
- quality, security, control, operational, maintainability and team constraints remain acceptable;
- limitations do not invalidate the claim;
- independent review supports the interpretation.

Positive net value makes a scope eligible for a continuation or bounded-expansion decision. It does not authorize either automatically.

#### Mixed result

Use when material benefits and material deterioration coexist and neither can be responsibly omitted.

The report must identify which work may continue, what must change or stop, and whether a narrower scope has a justified purpose.

### No productivity score

The product must not generate one productivity score, return-on-investment badge or traffic-light summary that hides dimension results, missing evidence or hard stops.

Usage, generated output, acceptance, story count and local task speed may appear only as diagnostic context.

## Current posture summary

### Audience

Workspace participants, decision owners and authorized reviewers.

### Minimum content

- exact scope;
- current journey stage;
- current adoption posture and work status;
- current gate decision and evidence conclusion;
- permitted activity;
- restricted and prohibited activity;
- hard stops;
- material and critical risks;
- material evidence gaps;
- overdue remediation;
- approvals, conditions and expiry;
- next decision, owner and date;
- changes since the prior posture.

### Generation rule

Generate from current decisions and records. Do not infer a favorable posture from completed pages or absent data.

## Adoption intent and ownership decision

### Audience

Executive sponsor, enterprise AI adoption owner, affected leaders and consulting team.

### Minimum content

- problem and intended outcome;
- why AI is being considered;
- adoption scope;
- executive sponsor and investment authority;
- adoption lead and stop authority;
- affected decision categories and owners;
- funding and cost boundary;
- permission to report adverse evidence;
- constraints and hard stops;
- decision to assess, condition, remediate or stop;
- next decision.

## Readiness and baseline report

### Audience

AI adoption owner, delivery and engineering leadership, control owners, measurement, finance and pilot lead.

### Minimum content

- exact assessed scope;
- proposed work and adoption posture;
- readiness condition findings;
- evidence and limitations;
- baseline definition and reliability;
- full delivery and cost boundary;
- eligible, restricted and prohibited activity;
- risks, hard stops and evidence gaps;
- remediation and owners;
- gate decision and next review.

### Generation rule

No composite readiness or maturity score.

## Risk, evidence-gap, and remediation register

### Audience

Workspace owners, affected category owners and authorized leadership.

### Minimum content

- individually visible risks, hard stops and evidence gaps;
- affected scope and consequence;
- what may continue and what must stop;
- current treatment and restriction;
- owner, due date and escalation;
- completion evidence and verifier;
- reassessment decision;
- changes and history.

## Use-case selection and rejection record

### Audience

Product, delivery, architecture, security, quality, service, measurement, finance and adoption owners.

### Minimum content

- candidate work and SDLC activity;
- intended outcome and current pain;
- alternative approaches;
- proposed AI participation and authority;
- required context, data, tools and systems;
- validation and recovery feasibility;
- evidence and total-cost feasibility;
- material risks and hard stops;
- selection, narrower selection, hold or rejection;
- rationale and next action.

Rejected cases remain visible so they are not repeatedly reintroduced without changed evidence.

## Pilot or first-increment charter

### Audience

Pilot participants, support, control and decision owners.

### Minimum content

- exact scope and period;
- intended outcome;
- included and excluded work, people, data, tools, systems and actions;
- adoption posture and AI authority;
- baseline, evidence and total-cost plan;
- controls, validation and approval;
- onboarding, support and safe-reporting route;
- cost and consumption limits;
- launch, pause, stop, recovery and restart conditions;
- decision date and required approvers.

## Authority, context, access, and control boundary

### Audience

AI adoption, platform, architecture, security, delivery, release and service owners.

### Minimum content

- AI identity;
- accountable owner;
- approved work and scope;
- allowed and prohibited context;
- tools and specific actions;
- state-change authority;
- environment and downstream effects;
- resource and cost limits;
- required controls and human gates;
- effective period and expiry;
- stop, restriction, revocation and recovery;
- operational test results.

## Evidence and tangible-value plan

### Audience

Measurement, finance, product, delivery, quality, security, operations, participant and adoption owners.

### Minimum content

- intended outcome and comparison boundary;
- eligible cohort;
- baseline and source;
- dimension measures and predeclared interpretation rules;
- guardrails;
- downstream evidence sources;
- total-cost sources and allocation;
- participant evidence and protections;
- independent reviewer;
- limitations and confounders;
- evidence owners and collection cadence;
- value decision date.

## Onboarding and support record

### Audience

Participants, pilot lead, support, platform, security and workforce owners.

### Minimum content

- included participants and roles;
- permitted and prohibited work;
- boundaries and controls;
- review and approval responsibilities;
- support and escalation routes;
- safe reporting and nonretaliation expectation;
- incident and stop route;
- demonstrated understanding;
- unresolved questions and follow-up.

## Recurring pilot health report

### Audience

Pilot lead, team, category owners and executive sponsor when escalation is required.

### Minimum content

- period and scope;
- current posture and decision;
- work performed;
- material control and evidence status;
- quality, review, rework, cost and participant signals;
- scope changes;
- new or changed risks and hard stops;
- incidents, pauses and remediation;
- what may continue and what must stop;
- decision or help required before the next period.

The report is an operating decision aid, not a celebration of usage.

## Incident, pause, restriction, remediation, and restart record

### Audience

Incident, security, service, delivery, adoption and affected decision owners.

### Minimum content

- trigger and detection;
- affected and uncertain scope;
- immediate stop, containment and authority change;
- evidence preservation;
- impact and affected parties;
- investigation and root cause when required;
- remediation and verification;
- remaining exposure;
- restart, restriction, rollback or closure decision;
- communications and next review.

## Tangible-value assessment

### Audience

Executive sponsor, adoption owner, product, delivery, measurement, finance and affected category owners.

### Minimum content

- exact evaluated scope and period;
- baseline and comparability;
- intended outcome;
- dimension-level results;
- full human effort and elapsed time;
- total cost;
- adverse, dissenting and participant evidence;
- hard stops and guardrails;
- limitations and confounders;
- evidence conclusion;
- claim boundary;
- recommendation and alternatives.

## Decision memorandum

### Audience

Accountable decision owners, implementation owners and audit or governance reviewers.

### Minimum content

- decision required;
- exact scope and evidence snapshot;
- current posture and proposal;
- evidence conclusion;
- material benefits, harms, costs, risks, hard stops and unknowns;
- alternatives including no change, reduction and stop;
- recommendation;
- authenticated decision by category;
- conditions;
- what may continue and what must stop;
- authority changes;
- owners and due dates;
- effective period and reconsideration triggers.

## Leadership briefing

### Audience

Executive sponsor and leadership decision participants.

### Required order

1. Decision required now.
2. Recommended action.
3. Exact scope and current posture.
4. Problem and intended outcome.
5. What was observed across the complete SDLC.
6. Total cost and tangible-value conclusion.
7. Material risks, hard stops, restrictions and unknowns.
8. What may continue and what must stop.
9. Options and consequences.
10. Remediation, owners and dates.
11. Required category decisions.
12. Effective period and next review.

### Decision options

When applicable, leadership must be able to choose:

- continue exact scope;
- continue with conditions;
- fund remediation or measurement work;
- restrict scope or authority;
- pause;
- stop;
- approve evaluation of one bounded expansion;
- reject the recommendation and record an authorized alternative.

The briefing must explain the consequence of approving, rejecting, delaying or changing the proposal.

### Executive limit

The executive sponsor owns investment and enterprise direction. The briefing must not imply that executive approval overrides a security, legal, financial, release, service or other category decision outside the sponsor's authority.

## Bounded next-increment plan

### Audience

Adoption owner, executive sponsor and owners affected by the proposed change.

### Minimum content

- evidence supporting consideration;
- exact current scope;
- one proposed change dimension;
- why that dimension is justified;
- new people, systems, data, work or authority affected;
- evidence that remains applicable;
- evidence that must be recollected;
- updated risk, controls, support, baseline and total-cost plan;
- rollback and expiry;
- approval or rejection.

## Governed-workflow operating record

### Audience

Delivery, platform, control, support, audit and operational owners.

### Minimum content

- workflow purpose and scope;
- approved adoption posture;
- human and AI responsibilities;
- inputs, outputs and durable context;
- authority at each step;
- controls and human decisions;
- evidence and monitoring;
- support, incident, recovery and revocation;
- cost and capacity ownership;
- change control;
- periodic review and retirement conditions.

## Integrated-adoption roadmap

### Audience

Executive sponsor, adoption owner, portfolio, platform, delivery and control leadership.

### Minimum content

- approved current capabilities and scope;
- practices to retain, improve, restrict or retire;
- bounded candidate increments;
- prerequisites and dependencies;
- evidence required for each decision;
- organizational, technical, control and support capacity;
- expected cost and funding decisions;
- decision sequence and owners;
- explicit non-goals;
- triggers that reorder or stop the roadmap.

The roadmap is a decision sequence, not a calendar-based maturity plan.

## Role-sensitive reporting

Reports may emphasize information according to a person's job without changing the underlying facts or decisions.

Examples:

- executives see decision, net value, material exposure, investment and consequences first;
- delivery leaders see scope, flow, review, rework, quality and capacity;
- security and compliance see data, authority, controls, incidents and unresolved exposure;
- finance sees total cost, allocation, assumptions and economic result;
- participants see permitted work, support, stop routes and current conditions.

Role-sensitive views must link to the same canonical evidence, risks, decisions and history. They must not maintain separate conflicting versions.

## Report generation and review

### Generated draft

The product may assemble a report draft from structured workspace records. Generated language must remain traceable to source records and clearly marked as draft until reviewed.

### Human review

Report reviewers must verify:

- scope;
- evidence snapshot;
- claim boundaries;
- adverse and dissenting evidence;
- hard stops and restrictions;
- decision request;
- audience access and sensitivity.

### Approval

A report that includes a consequential recommendation or decision must identify the accountable human approvers and exact approved version.

### Supersession

A report is superseded when its scope, evidence, decision, authority or material condition changes. Prior versions remain accessible according to retention policy.

## Mobile and document behavior carried forward

Later visual design must present report content as readable sections rather than wide matrices. The most important consequence, hard stop and decision request must not depend on hovering, opening a tooltip or scrolling a wide table.

## Gate 4 risk, value and reporting approval questions

Approval requires agreement that:

1. Immediate consequence, workspace posture and durable reports form the correct reporting levels.
2. Risk and hard-stop reports make governing conditions individually visible.
3. Remediation reporting preserves restrictions through verification and reassessment.
4. The tangible-value evidence gate prevents unsupported claims.
5. Dimension-level results cannot be averaged into a favorable score.
6. Economic reporting includes total cost without forcing unsupported monetization.
7. Evidence conclusions match the approved Gate 3 meanings.
8. Each required output has the correct audience and minimum content.
9. The leadership briefing starts with the decision required and shows consequences.
10. Role-sensitive views change emphasis without changing canonical facts.
