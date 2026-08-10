# Response and Evidence Model

## Status

Draft for explicit approval under [Gate 4](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/138) of the [product-recovery epic](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/131).

This document defines how the future product asks for information, captures evidence, evaluates explicit rules and preserves decision history. It does not define visual design, storage technology, platform implementation or production behavior.

## Purpose

The response and evidence model must help a person answer a consequential adoption question without translating a dense methodology or guessing what a blank form expects.

For every material question, the product must:

- explain the decision before collecting information;
- collect structured information appropriate to the decision;
- allow honest uncertainty;
- show what evidence is required and why;
- apply approved rules consistently;
- make material risks and hard stops visible immediately;
- create specific remediation when a condition is not met;
- preserve who decided what from which evidence;
- feed reusable team and leadership outputs.

## Governing sources

This model is governed by:

- the approved [Product Contract](https://github.com/scott-wojan/enterprise-ai-sdlc/blob/main/docs/product/product-contract.md);
- the approved [information architecture](https://github.com/scott-wojan/enterprise-ai-sdlc/blob/main/docs/product/information-architecture.md);
- the approved [adoption, decision, risk and hard-stop model](adoption-decision-risk-model.md);
- [Human Accountability and Consequential Decisions](../core/accountability.md);
- [Durable Evidence Requirements](../core/evidence.md);
- [Control Result Precedence](../core/control-precedence.md).

Where older artifacts or templates conflict with these approved product documents, the approved product documents govern.

## Core interaction principles

### Explain before asking

A material input must not appear before the user can understand:

- what decision it supports;
- why the answer matters;
- who owns the decision;
- what evidence is expected;
- what can happen when the answer is favorable, unfavorable or unknown.

### Ask only what changes a decision or output

Every captured field must support at least one of these purposes:

- define exact scope;
- identify accountability or required participation;
- establish a condition;
- provide evidence;
- trigger a risk, hard stop or restriction;
- create remediation;
- support an approval;
- generate a required output.

If a field does not change a decision, evidence requirement, action or output, it should not be required.

### Structure before narrative

Use structured controls for facts, states, scope, dates, amounts, owners, evidence and decisions. Use a written explanation only when the meaning cannot be captured reliably through structured fields.

### Interpret before moving on

After a material response is saved, the product must show:

- how the response was interpreted;
- whether evidence is sufficient;
- any risk, hard stop or restriction;
- what may continue;
- what must stop;
- what the user must do next.

The user must not need to finish a questionnaire or open a separate report to discover that an earlier answer blocked the work.

### Preserve human judgment

Deterministic product rules may identify a hard stop, apply a safe default or prevent an invalid action. AI may help explain evidence or identify inconsistency. Neither replaces the accountable human decision required by Gate 3.

### Preserve adverse and unknown information

Unknown, dissenting, failed, unable-to-evaluate and adverse evidence must remain visible. The system must not coerce users toward favorable answers or hide unfavorable information from generated reports.

## Material decision unit

A material decision unit is the smallest complete part of the workspace that can collect, interpret and preserve information used by an adoption decision.

Each unit has four connected parts.

### Guidance

Guidance explains:

- the decision or question;
- why it matters;
- accountable owner;
- required participants;
- conditions that are good, weak or unacceptable;
- examples;
- the evidence needed;
- the possible consequences.

### Response

The response captures:

- structured answer;
- exact scope;
- owner or respondent;
- evidence references;
- uncertainty or disagreement;
- any required rationale.

### Interpretation

The interpretation states:

- rule evaluated;
- evidence status;
- provisional finding;
- risk severity or hard stop;
- what may continue;
- what must stop;
- required remediation;
- reassessment evidence.

### Decision trace

The trace preserves:

- response version;
- evidence versions;
- rule version;
- human review and decision;
- conditions and effective period;
- changes, supersession and next review;
- outputs affected.

## Required information order

Every material decision unit follows this order:

1. Decision or question.
2. Why it matters.
3. Accountable owner.
4. Required participants.
5. Guidance for answering.
6. Good and bad examples when writing is required.
7. Structured response.
8. Supporting evidence.
9. Immediate interpretation.
10. What may continue.
11. What must stop.
12. Required remediation or restriction.
13. Evidence required for reassessment.
14. Output affected.
15. Next decision.

The future visual design may use progressive disclosure, but it must not reorder the logic or hide a material consequence.

## Response-control selection

The content author must select the narrowest response control that captures the information reliably. Convenience is not a valid reason to use a free-form text area.

### Explicit state choice

Use when a question has a small set of governed meanings, such as:

- yes;
- no;
- unknown;
- not yet established;
- not applicable.

The control must define the consequence of every choice. It must not represent an unanswered question as “no,” “not applicable” or favorable.

### Single selection

Use when exactly one option must govern, such as adoption posture, gate decision, work status, evidence conclusion, risk severity or authority outcome.

Options must be mutually exclusive. If two options could both be true, the model is wrong or the response should use multiple selection.

### Multiple selection

Use when several predefined items may apply, such as affected SDLC activities, data classes, risk categories, participating roles or permitted tools.

An “other” choice may require a short explanation. It must not become a route around an approved list or restriction.

### Bounded number

Use for counts, durations, proportions, thresholds, limits and measures.

The response must capture:

- number;
- unit;
- population or denominator when applicable;
- observation period;
- source;
- whether the value is measured, estimated or proposed;
- uncertainty or range when material.

A number without a unit, period and scope is not decision-ready evidence.

### Currency and cost

Use for financial amounts and economic limits.

The response must capture:

- amount or range;
- currency;
- period;
- fixed or variable classification;
- allocation method;
- source;
- owner;
- included and excluded costs;
- estimate or actual status.

### Date, period and expiry

Use for approvals, evidence periods, remediation due dates, pilot windows and reassessment.

The response must distinguish:

- event date;
- start and end period;
- due date;
- review date;
- automatic expiry.

### Named person and authority

Use when accountability, approval, participation or escalation must be assigned.

The response must capture:

- identifiable person;
- role in this decision;
- organizational authority source;
- scope of authority;
- effective period;
- delegated or acting status when applicable.

A team, committee, title or email alias alone does not satisfy a requirement for one accountable human.

### Scoped entity selection

Use for organizations, teams, products, repositories, services, components, work types, data classes, tools, AI identities, environments and SDLC activities.

The response must preserve exact inclusion and exclusion. “Engineering,” “all repositories” or “production systems” is not acceptable scope unless the evidence and authority genuinely cover it.

### Evidence reference

Use to link or attach evidence without copying unnecessary sensitive content.

The response must identify the source record, owner, version, scope, period, access classification and the claim or condition it supports.

### Structured risk record

Use the complete Gate 3 risk record rather than a severity dropdown and note field. The product may prefill fields from triggering responses but an accountable owner must review the record.

### Structured remediation record

Use the complete Gate 3 remediation record. A remediation item must identify the current restriction, one owner, exact action, due date, completion evidence, verifier and reassessment trigger.

### Short written rationale

Use when a person must explain why a structured choice applies, define a bounded objective, explain a limitation or record a decision rationale.

The question must provide:

- a bad or insufficient example;
- why it fails;
- a good example;
- why it works;
- minimum specificity;
- a prompt focused on one decision.

The field should not ask several unrelated questions at once.

### Extended decision narrative

Use only when structured facts and short rationale cannot capture material alternatives, tradeoffs, dissent or consequences.

The narrative must have a defined purpose and section prompts. “Additional comments” is not a material decision field.

### Human decision control

Use for explicit approval, approval with conditions, rejection, escalation, pause, restriction, rollback, restart, expansion, standardization and retirement.

The control must bind the decision to:

- authenticated human identity;
- decision category;
- exact proposal version;
- exact evidence snapshot;
- unresolved findings;
- selected outcome;
- conditions;
- effective period;
- reconsideration trigger.

Silence, page completion, meeting attendance or an AI recommendation is not approval.

## Response statuses

Response status describes the information record. It does not describe readiness or decision approval.

- **Unanswered:** No response has been provided.
- **Draft:** Information has been entered but is not submitted for interpretation.
- **Evidence missing:** A response exists, but required evidence is absent or unusable.
- **Ready for review:** Required response and evidence are present for accountable review.
- **Interpreted:** Applicable rules have produced a provisional consequence.
- **Decided:** The accountable human decision is recorded.
- **Superseded:** A newer version governs.
- **Withdrawn:** The respondent withdrew the response before decision; history remains.

The product must not call a page or stage complete merely because every field contains something.

## Unknown, not established and not applicable

### Unknown

Use when the fact may exist but the respondent cannot currently determine it.

The product must:

- preserve the answer as unknown;
- identify whether the information is material;
- create an evidence gap when material;
- apply the Gate 3 consequence;
- identify an owner and next action when resolution is required.

### Not yet established

Use when the organization acknowledges that a required condition does not currently exist but may create it.

The product must create a gap or remediation item and apply the corresponding restriction. It must not treat intent to establish a condition as evidence that the condition operates.

### Not applicable

Use only when the condition genuinely does not apply to the exact scope.

When the condition could materially affect risk, authority, evidence or value, not applicable requires:

- rationale;
- accountable owner;
- supporting evidence;
- scope;
- review or invalidation trigger.

The product must not offer not applicable for a universal hard stop.

### Unanswered

An unanswered material question is not equivalent to unknown. It means the decision unit is not ready for review. If current work depends on the answer, the safer applicable consequence governs until it is answered.

## Disagreement

The product must allow required participants to disagree without overwriting one another.

A disagreement record captures:

- decision or finding in dispute;
- each position;
- evidence supporting each position;
- decision categories involved;
- accountable owners;
- current interim restriction;
- escalation recipient;
- disposition and effective period.

The more restrictive applicable consequence remains in force until resolved. The product must not use majority voting to decide a question assigned to a specific accountable role.

## Written-response examples

### Requirements for every typed response

Every required typed field must provide:

- an example that is insufficient;
- a direct explanation of why it is insufficient;
- an example that is useful;
- a direct explanation of why it is useful;
- the minimum information expected;
- an honest unknown path when applicable.

### Example quality rules

Examples must:

- use realistic enterprise work;
- show the scope and decision boundary;
- avoid slogans and unexplained jargon;
- avoid pretending that a desired outcome is evidence;
- show material constraints and limitations;
- avoid invented universal thresholds;
- avoid vendor-specific setup unless the content is an adapter.

### Generated suggestions

AI may suggest a response only when:

- the source material is permitted;
- the suggestion identifies its sources;
- the response remains visibly unapproved;
- the user can reject or edit it;
- the accountable person reviews the final response;
- the suggestion is never presented as independent evidence.

## Evidence record

### Identity and purpose

Every evidence item has:

- stable evidence identifier;
- title in direct language;
- evidence category;
- claim, condition, control, risk, measure or decision supported;
- related work and decision identifiers.

### Exact scope

Record applicable:

- organization or business boundary;
- team or participant cohort;
- product, service, repository or component;
- work type and risk class;
- data and context class;
- tool and AI identity;
- environment;
- SDLC activity;
- observation period.

Evidence cannot be reused outside its scope without an explicit applicability decision.

### Source and provenance

Record:

- authoritative source or system of record;
- source owner;
- producer identity and whether human, AI or automated control;
- creation time and relevant event time;
- version, revision, query, report, digest or stable reference;
- collection method;
- transformation or calculation;
- relationship to the original record;
- correction or supersession history.

### Quality and limitations

Record:

- completeness;
- known missingness;
- timeliness;
- scope match;
- reproducibility;
- selection effects;
- confounders;
- assumptions;
- limitations;
- disputes or contradictory evidence.

The product must not compress these properties into one evidence-quality score.

### Review and verification

Record:

- required reviewer;
- reviewer independence requirement;
- review status;
- verification method;
- verified input version;
- findings;
- acceptance, rejection or limitation;
- review date and expiry.

### Protection and retention

Record:

- sensitivity and access classification;
- approved storage reference;
- retention owner;
- retention rule or policy basis;
- preservation status;
- redactions;
- disposition authority.

The product must not require secrets, credentials or unnecessary sensitive payloads to be copied into the workspace. Protected references may represent those facts.

## Evidence classes

Evidence class identifies origin and suitability. It does not automatically determine credibility.

- **Authoritative system record:** Direct record from the system of work, control, finance, security, release, service or another approved source.
- **Independently reproduced result:** A qualified reviewer reproduces a measure, check or finding from the source.
- **Human observation:** A named participant provides an attributable observation, interview response or professional judgment.
- **Participant pulse:** Structured feedback collected with declared population, method, participation and privacy limits.
- **External authoritative source:** A current law, regulation, contract, policy, standard or primary technical source applicable to the decision.
- **AI-generated supporting material:** AI summary, classification, extraction or recommendation linked to permitted sources. It cannot independently prove the underlying claim.
- **Unverified submission:** Material supplied without sufficient provenance or review. It may trigger investigation but cannot satisfy a required evidence condition.

## Evidence statuses

- **Proposed:** Identified as needed but not linked.
- **Linked:** A source is linked but suitability has not been reviewed.
- **Verified:** A qualified reviewer accepts the evidence for the exact stated use, with limitations.
- **Limited:** The evidence supports only a narrower claim or scope.
- **Rejected:** The evidence is not suitable for the proposed use.
- **Stale:** The review period expired or a material change invalidated applicability.
- **Unavailable:** Required evidence cannot be accessed or produced.
- **Superseded:** A newer version governs while history remains.

Only verified evidence can satisfy a material evidence requirement. Limited evidence can satisfy only the narrower accepted use.

## Evidence packages

A workspace must maintain one linked evidence package per material adoption scope or increment.

The package must show:

- expected evidence categories;
- present, missing, stale, limited and rejected evidence;
- claims and decisions supported by each item;
- unresolved conflicts;
- evidence owners;
- next collection or review action;
- completeness for a specific decision, not a universal percentage.

Evidence completeness is evaluated against a named decision. For example, evidence may be sufficient to launch a learning exercise but insufficient to claim value or expand.

## Rule evaluation and interpretation

### Deterministic product rules

Approved deterministic rules may:

- reject structurally incomplete input;
- identify an unanswered required question;
- create an evidence gap;
- identify a hard-stop trigger;
- apply the more restrictive interim consequence;
- prevent an invalid approval or expansion action;
- create a draft remediation requirement;
- invalidate a stale decision after material change or expiry.

The rule result must name the rule, inputs, version, outcome and consequence.

### Human-reviewed interpretation

A qualified human must determine:

- whether evidence is suitable for the exact question;
- whether a risk condition and severity apply when professional judgment is required;
- whether a control works in the relevant context;
- whether limitations materially affect a claim;
- whether a proposed treatment is acceptable within that person's authority;
- the final consequential decision.

### AI-supported interpretation

AI may:

- summarize linked evidence;
- identify missing fields or inconsistent scope;
- compare a response with approved examples;
- draft a risk, remediation or report section;
- identify potential adverse evidence for human review.

AI must not:

- mark its own output verified;
- clear a hard stop;
- accept risk;
- choose a final evidence conclusion;
- approve continuation or expansion;
- hide a failed or dissenting result;
- claim confidence not supported by the evidence record.

### Provisional and final results

The product must distinguish:

- **System consequence:** Immediate rule-based restriction or evidence requirement.
- **Provisional interpretation:** Draft finding awaiting accountable review.
- **Accountable decision:** Authenticated human disposition against an exact evidence snapshot.

A deterministic hard stop may block the affected action immediately. Human review may confirm scope, require broader containment or determine that the trigger did not apply. Human review cannot simply ignore a confirmed universal hard stop.

## Remediation creation

A response must create remediation when an approved rule requires a missing condition to be established or a material gap to be corrected.

The system may prefill:

- triggering response and rule;
- affected scope;
- current restriction;
- required completion evidence;
- reassessment decision.

The accountable owner must confirm:

- corrective action;
- one remediation owner;
- due date;
- dependencies;
- verifier;
- whether work will be remediated or closed without proceeding.

Changing the answer does not close the remediation. Closure requires verified evidence and a new decision when Gate 3 requires one.

## Versioning and change history

Every material response, evidence item, interpretation, remediation and decision must be versioned.

History must show:

- who changed it;
- when it changed;
- what changed;
- why it changed when material;
- prior value;
- affected evidence, risks, reports and decisions;
- whether reassessment was triggered.

A correction creates a new version. It must not silently rewrite the evidence reviewed by an earlier decision.

## Resume behavior

Resume returns the user to:

- the workspace overview when a material new risk, hard stop, approval or expiry exists;
- otherwise, the last incomplete material decision.

The resume view must first show:

- current scope;
- current adoption posture and work status;
- current gate decision and evidence conclusion;
- hard stops and restrictions;
- overdue remediation;
- next decision and owner.

It must not return the user to the top of public guidance or imply progress from visited pages.

## Review and approval behavior

A material decision package presented for approval must include:

- exact proposal and scope;
- evidence snapshot;
- material findings and hard stops;
- adverse and dissenting evidence;
- alternatives;
- recommendation and claim limits;
- conditions;
- what may continue and what must stop;
- expiry and reassessment triggers.

The accountable approver must be able to approve, approve with conditions, reject or escalate. Options that do not apply must remain unavailable rather than relying on instructions not to choose them.

## Export and sharing requirements

Gate 7 will select implementation. Any later export or share capability must preserve:

- report title and type;
- workspace and exact scope;
- generated time;
- source data and evidence snapshot;
- report version;
- decision status;
- unresolved risks, hard stops and limitations;
- access classification;
- links or stable references to supporting records;
- notice when the export is a snapshot and may no longer represent current posture.

Exports must not include secrets or unnecessary sensitive data. Access to an exported report must not imply access to all underlying evidence.

## Product requirements carried into later gates

Later content and implementation must preserve these rules:

- No unexplained question appears before its purpose.
- No material question uses a blank text area by default.
- No unknown or unanswered response is treated as favorable.
- No not-applicable response bypasses a universal hard stop.
- No AI-generated assertion becomes verified evidence by presentation alone.
- No remediation closes because a user changes the triggering answer.
- No hard stop is hidden until the end of a workflow.
- No page completion count represents readiness or progress.
- No approval survives a material change to its scope or evidence.
- Every written response includes useful good and bad examples.

## Gate 4 response and evidence approval questions

Approval requires agreement that:

1. The four-part material decision unit is complete.
2. The response-control taxonomy prevents inappropriate text fields.
3. Unknown, not established, not applicable and disagreement behave correctly.
4. Written examples provide enough help without manufacturing answers.
5. The evidence record is complete but not needlessly duplicative.
6. Evidence classes and statuses correctly distinguish source, suitability and verification.
7. Deterministic, human-reviewed and AI-supported interpretation have appropriate boundaries.
8. Remediation cannot be closed by editing the triggering response.
9. Versioning, resume, review and export behavior preserve decision integrity.
10. The model gives future visual design and platform work clear requirements without selecting either.
