# Gate 6.3 Content Priority Model

## Status

Proposed for product-owner approval under [Gate 6.3](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/151).

This document defines what people must understand first, what belongs in the active task, and what remains available as supporting detail. It does not define page layout, visual styling, component design or implementation.

Read with the accepted [Screen Responsibility Map](screen-responsibility-map.md), the [Interaction Sequence Model](interaction-sequence-model.md), the [Responsive Reading Order](responsive-reading-order.md), the [Vertical-Slice Content Blueprints](vertical-slice-content-blueprints.md) and proposed [DEC-UX-004](decisions/0004-decision-consequence-content-hierarchy.md).

## Objective

Every representative experience must help a person answer these questions in order:

1. What decision, condition or task requires attention?
2. What exact scope does it affect?
3. What is currently permitted, restricted or prohibited?
4. Who owns the decision or corrective action?
5. What evidence and response are required?
6. What does the evidence support and not support?
7. What must happen next?

The product must answer these questions without exposing the reader to an entire source package, methodology or record history at once.

## Selected priority model

Content is organized into five priority levels. A later level can support an earlier one, but it cannot displace it.

### Priority 1: Decision or governing consequence

This is the first task-specific content.

It contains one of:

- the decision being prepared;
- an active hard stop or restriction;
- an evidence conclusion requiring disposition;
- the leadership investment decision;
- a direct public explanation of why the product exists.

It always names the exact scope when organizational work is involved.

It does not lead with:

- a method name;
- a status dashboard;
- a progress count;
- a role list;
- a metric panel;
- a form;
- a generic call to “get started.”

### Priority 2: Current action boundary

This explains what the Priority 1 condition means now.

It contains:

- current AI participation;
- current accountable decision;
- what may continue;
- what must stop;
- immediate containment when required;
- next accountable decision;
- owner and date.

A hard stop moves this level directly after the stop statement. It never appears only in a detached panel or report.

### Priority 3: Decision reasoning and task input

This is the active work required to support the decision.

It contains:

- why the decision matters;
- accountable owner and required participants;
- guidance for answering;
- structured response;
- useful and insufficient examples when a written response is required;
- evidence expected;
- evidence reference, status and limitations;
- explicit unknown or not-yet-established choices;
- deterministic interpretation;
- provisional finding where applicable;
- human decision controls when the decision is ready.

Priority 3 is not rendered as one uninterrupted block. It is sequenced around the current response and consequence.

### Priority 4: Connected corrective or decision work

This is the work created by the current result.

It contains:

- remediation;
- completion evidence;
- verifier;
- eligibility for reassessment;
- category-owner dispositions;
- leadership options and consequences;
- next-increment proposal;
- linked source records.

It must remain reachable from the triggering decision without requiring navigation through unrelated content.

### Priority 5: Supporting explanation and trace

This preserves depth and defensibility without competing with the current task.

It contains:

- definitions;
- extended methodology;
- detailed controls;
- source provenance;
- complete record fields;
- prior and superseded decisions;
- evidence-version history;
- audit trace;
- related examples;
- role and SDLC lenses;
- maintainer identifiers.

Priority 5 may use progressive disclosure or a separate directly linked destination. It is never the only location for a current scope, hard stop, evidence limitation, required owner or next decision.

## Public content priority

### Home

Home uses this order:

1. Direct statement of the reader situation and product purpose.
2. Problems and decisions the product helps address.
3. What the organization can produce.
4. Complete adoption journey preview.
5. Complete SDLC coverage.
6. People who must participate.
7. Tangible-value, risk and stopping discipline.
8. Starting choices.
9. Product status and source.

The opening must make clear that this product helps an organization adopt AI in software delivery through accountable decisions and evidence. It must not begin with an operating model, role selector, navigation explanation or form.

### Why This Matters

Use this order:

1. Pressure and disconnected adoption problem.
2. Enterprise decisions a tool rollout cannot make.
3. Accountability and authority.
4. Tangible value across the full SDLC and total cost.
5. Restriction, stopping and remediation.
6. Product scope and limitations.
7. Route to the adoption journey or an informed starting point.

### Adoption Journey stage

Use this order:

1. Stage purpose and decision.
2. Why this decision occurs now.
3. Inputs and prerequisites.
4. Responsible roles.
5. Conditions that support proceeding.
6. Conditions that require restriction, return or stop.
7. Output.
8. Related stages, SDLC activities and Apply transition.

Journey stages are not page-completion steps. The stage does not display a completion percentage.

### Apply the Playbook

Use this order:

1. Selected starting need.
2. Decision being prepared.
3. Expected output.
4. Exact kind of scope involved.
5. Required accountable owner and participants.
6. Evidence to gather.
7. Known missing prerequisites and their consequence.
8. Information protection and provisional-state notice.
9. Begin, resume or return actions.

Apply explains before asking for information. It never opens with organization fields or a workbook.

## Workspace content priority

### Initiative Overview

Use this order:

1. Initiative identity and current governing condition.
2. Active hard stops, restrictions or expired authority.
3. What may continue and what must stop.
4. Next accountable decision, owner and date.
5. Current opportunities, increments and governed practices that require attention.
6. Missing material evidence and overdue remediation.
7. Recent material changes.
8. Source-linked summaries and history.

The Overview prioritizes consequence and next action, not a balanced grid of statuses.

### Material Decision Unit

Use this order:

1. Decision and exact proposal.
2. Exact scope.
3. Current authority and governing decision.
4. Immediate active consequence.
5. What may continue and what must stop.
6. Why the decision matters.
7. Accountable owner and required participants.
8. Response guidance.
9. Response and evidence.
10. Deterministic interpretation.
11. Remediation or category review when required.
12. Accountable disposition.
13. Next decision.
14. Source and history detail.

When no active consequence exists, items 4 and 5 state that no decision has been made yet and identify what preparatory work is permitted. They do not imply approval.

### Hard stop

A hard-stop interruption uses this order:

1. Direct statement that the action is blocked or must stop.
2. Exact stopped action and affected scope.
3. Why the condition governs.
4. What may continue.
5. What must stop.
6. Immediate containment.
7. Corrective action, owner and due date.
8. Completion evidence and verifier.
9. Reassessment decision and owner.
10. Source rule and history.

The product must never lead a hard-stop view with a risk score, generic warning, control identifier or long explanation.

### Remediation

Use this order:

1. Finding addressed.
2. Current restriction.
3. Corrective action.
4. Accountable owner and due date.
5. Dependencies.
6. Completion evidence.
7. Verifier.
8. Current status.
9. Reassessment owner and decision.
10. History.

Verified is not shown as approved or restarted. It is shown as eligible for reassessment.

### Readiness Output

Use this order:

1. Decision required.
2. Recommendation.
3. Exact scope.
4. Why the recommendation governs.
5. Active hard stops and restrictions.
6. What may continue.
7. What must stop.
8. Required remediation, owners and dates.
9. What is established.
10. Evidence conclusion and claim limits.
11. Next decision.
12. Source decisions and evidence.

Favorable conditions appear after governing blockers. They remain visible but cannot visually or semantically outweigh a hard stop.

### Pilot Evaluation

Use this order:

1. Decision being prepared.
2. Exact evaluated scope and frozen evidence snapshot.
3. Current authority and proposed decision.
4. Comparability, completeness and material limitations.
5. Current evidence conclusion. Before accountable disposition, this is Decision pending. After the conclusion is recorded, the complete-system result is summarized here.
6. Results by separate dimension. On initial review, these dimensions are dispositioned before the accountable evidence conclusion is recorded.
7. Adverse evidence and dissent.
8. Claim limits.
9. Accountable operating decision.
10. What may continue and what must stop.
11. Remediation and reassessment.
12. Leadership investment decision.
13. Source evidence and history.

A local implementation improvement appears inside the Delivery Flow dimension and in the result explanation. It does not appear as the page headline, primary metric or top-level success indicator.

### Leadership Decision

Use this order:

1. Decision required now.
2. Recommended action.
3. Exact scope and current authority.
4. Complete-SDLC and total-cost conclusion.
5. Material evidence and limitations.
6. Current restrictions and category-owner decisions.
7. Available leadership options.
8. Consequence of each option.
9. What may continue and what must stop.
10. Decision owner, rationale, effective period and next review.
11. Source links and report status.

Leadership options that category owners do not permit remain unavailable and are explained. They are not displayed as equivalent choices.

### Leadership Output

Use this order:

1. Decision required.
2. Recommended action.
3. Exact scope and evidence date.
4. What the complete evidence supports.
5. Current authority and restrictions.
6. What may continue and what must stop.
7. Options and consequences.
8. Owners and dates.
9. Limitations, dissent and claim boundaries.
10. Linked source records.
11. Publication and supersession status.

The report begins with the decision, not an executive-summary slogan or a metric dashboard.

## Response content priority

### Before a person responds

Show:

1. Question or decision.
2. Why it matters.
3. Accountable owner.
4. Required participants.
5. Guidance for answering.
6. Response choices or minimum specificity.
7. Evidence expected.
8. Known consequence of an unknown or failed condition.

For a written response, also show that examples are available before the input.

### While a person responds

Keep available:

- exact scope;
- the question;
- minimum specificity;
- useful example;
- insufficient example;
- why they differ;
- evidence expected;
- save state.

Examples must not exist only as placeholder text. They remain accessible after typing begins.

### After Save draft

Show:

- confirmation that the draft is saved;
- missing required information;
- evidence still needed;
- no interpretation unless the user explicitly selected an interpretation action;
- no change in authority.

### After Interpret response

Show:

1. How the response was interpreted.
2. Evidence status and limitation.
3. Immediate system consequence.
4. What may continue.
5. What must stop.
6. Required remediation.
7. Next accountable decision.

The interpretation appears in the same decision context. It cannot claim that an accountable human approved the result.

## Evidence content priority

### Evidence request

Use this order:

1. Condition or claim the evidence supports.
2. Why it matters to the decision.
3. Expected source and owner.
4. Exact scope and observation period.
5. Minimum evidence quality and verification.
6. Protection and reference instructions.
7. Honest evidence states.
8. Consequence of missing, limited, stale or rejected evidence.

### Evidence record summary

Show:

- evidence purpose;
- exact scope and period;
- source owner;
- status;
- material limitation;
- decision or report affected;
- protected reference.

Detailed provenance, transformation, retention and version history remain supporting detail unless one is currently disputed.

### Evidence gap

A material gap uses this order:

1. Evidence missing or unreliable.
2. Claim or action affected.
3. Exact scope.
4. What may continue.
5. What must not be approved or claimed.
6. Evidence owner.
7. Required source or method.
8. Review and reassessment.

A material gap is not presented as an incomplete checklist item.

## Tangible-value evidence priority

The evaluation must preserve separate dimensions:

- product or business outcome;
- complete delivery flow and total human effort;
- quality and maintainability;
- security and control;
- release and operations;
- team experience and capability;
- total economics.

Each dimension shows:

1. Intended result or guardrail.
2. Baseline.
3. pilot result.
4. difference and practical meaning.
5. evidence status.
6. limitation or confounder.
7. adverse or dissenting evidence.
8. accountable reviewer disposition.
9. decision implication.

The product does not calculate or display a composite value score.

### Local improvement rule

When one local activity improves but the complete system deteriorates:

- preserve the local improvement;
- place it inside the affected dimension;
- show the transferred effort and total result in the same reading sequence;
- prohibit a productivity, savings or success claim;
- do not label the overall result mixed merely because the local observation is favorable.

### Missing evidence rule

When material downstream evidence or total cost is missing:

- the conclusion is value not demonstrated;
- value, productivity, savings and expansion claims are blocked;
- missingness remains visible;
- favorable local evidence remains an observation only.

## State-language hierarchy

The product must label different facts by their actual meaning.

### System consequence

Use: “Current consequence” or direct action language such as “Pilot launch is blocked.”

Do not use: “Decision approved,” “Final result” or language implying accountable disposition.

### Provisional interpretation

Use: “Provisional interpretation” or “How this response was interpreted.”

Do not use: “Organization decision” or “Approved recommendation.”

### Evidence conclusion

Use one approved evidence-conclusion value and state the exact evaluation scope.

Do not use it as an authority label.

### Accountable authority decision

Use: “Accountable decision,” name the owner, scope, effective period and permitted or prohibited activity.

### Leadership investment decision

Use: “Leadership investment decision,” name the funding boundary and state which category decisions it cannot override.

### Report

Use: “Report status,” audience, evidence snapshot and supersession state.

A report does not display itself as the source of authority.

## Progressive disclosure rules

### May be progressively disclosed

- extended definitions;
- complete methodology;
- additional good and bad examples;
- detailed control references;
- evidence provenance and transformation;
- historical record versions;
- superseded decisions;
- related role and SDLC explanations;
- calculation detail after the result and limitation are understood.

### Must remain in the primary reading path

- decision or task;
- exact scope;
- current authority;
- active hard stop or restriction;
- what may continue;
- what must stop;
- material evidence gap;
- evidence conclusion;
- accountable owner;
- required corrective action;
- next accountable decision;
- material limitation or dissent that could change the decision;
- total-cost result;
- report publication and supersession state when reading a report.

### Disclosure behavior

- A disclosure has a direct label that says what it contains.
- It never uses “Learn more” when a specific label is possible.
- Opening or closing supporting detail does not change response or decision state.
- Keyboard and screen-reader users receive the same content and control state.
- Direct links may open a supporting section without changing the governing task context.

## Clear-language rules

Use direct language that tells a person:

- what happened;
- what it affects;
- who must act;
- what evidence is missing;
- what may continue;
- what must stop;
- what decision comes next.

Avoid:

- unexplained jargon;
- slogans;
- buzzwords;
- vague verbs such as “align,” “enable,” “drive” or “operationalize” without a concrete action;
- generic labels such as “status,” “progress” or “success” when a more precise state exists;
- unexplained abbreviations;
- control identifiers in the primary reading path.

When a necessary term first appears, define it in the current decision context and use it consistently.

## Content compression rules

To reduce cognitive load without losing meaning:

- Summarize source packages into the current decision, not into a generic short paragraph.
- Remove duplicated explanations and link to one shared source.
- Use headings that state the decision or consequence.
- Break long evidence into dimension-level records.
- Show one useful and one insufficient example at the point of written input.
- Place all current action boundaries together.
- Keep historical and methodological detail after current work.
- Preserve adverse evidence even when it makes the summary longer.
- Do not compress scope, owner, evidence limitation or authority into a badge without explanatory text.
- Do not replace a decision with a score.

## Gate 6.3 content-priority approval questions

1. Does the five-level priority model reflect how people make consequential enterprise decisions?
2. Is the current decision or governing consequence always first?
3. Are current action boundaries more prominent than supporting method detail?
4. Do public pages explain before Apply requests information?
5. Do response examples remain available at the point of need?
6. Are hard stops and evidence gaps impossible to mistake for optional warnings?
7. Does the evaluation prevent local speed from dominating the complete result?
8. Do reports begin with the decision and recommendation?
9. Are state families labeled so evidence, interpretation, authority and investment remain distinct?
10. Do the progressive-disclosure rules reduce density without hiding material meaning?
