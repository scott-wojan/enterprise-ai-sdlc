# Gate 6.3 Responsive Reading Order

## Status

Proposed for product-owner approval under [Gate 6.3](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/151).

This document defines semantic and one-column reading order before responsive wireframes. It does not select a sidebar, drawer, columns, breakpoints, component system or visual treatment.

Read with the [Content Priority Model](content-priority-model.md), [Interaction Sequence Model](interaction-sequence-model.md), [Vertical-Slice Content Blueprints](vertical-slice-content-blueprints.md) and proposed [DEC-UX-004](decisions/0004-decision-consequence-content-hierarchy.md).

## Governing rule

Every representative view has one canonical reading order.

Mobile presents that order directly.

Desktop may place secondary content beside primary content only when:

- semantic reading order remains unchanged;
- keyboard focus follows the canonical order;
- the secondary content is not required to understand an earlier action;
- the content retains the same meaning when returned to one column;
- no current hard stop, restriction, evidence limitation or next decision is moved into a detached rail.

The product must not maintain separate desktop and mobile meanings.

## Global page order

Every public destination follows:

1. Skip link.
2. Product identity.
3. Public navigation.
4. Breadcrumb when not on Home.
5. Page purpose and heading.
6. Current public content.
7. Contextual actions.
8. Related guidance.
9. Product status and footer.

Every workspace destination follows:

1. Skip link.
2. Product identity and public-workspace distinction.
3. Initiative identity.
4. Initiative navigation.
5. Local opportunity, increment or practice context when present.
6. Destination heading and exact viewed scope.
7. Active governing consequence.
8. Destination-specific task content.
9. Next accountable action.
10. Supporting source links and history.

Initiative context occurs before local context. Local context occurs before the task heading. This ordering prevents a decision or hard stop from appearing detached from its parent initiative and exact object scope.

## Public Home reading order

1. Product name.
2. Direct heading that states the adoption job.
3. Opening explanation of leadership pressure and disconnected adoption.
4. Primary action that continues to the problems and decisions.
5. Secondary action to explore the journey.
6. Who the product is for.
7. Why the product exists.
8. Challenges the product helps address.
9. Decisions and outputs the organization can produce.
10. Responsible adoption is not maximum automation.
11. Complete journey preview.
12. Complete SDLC preview.
13. Who participates.
14. Tangible-value and stopping discipline.
15. Starting choices.
16. Product status and source.

The primary action moves focus to the challenge heading. It does not return to the top or open a workspace.

## Adoption Journey readiness entry order

1. Breadcrumb and journey identity.
2. Stage 2 name.
3. Stage purpose.
4. Readiness decision.
5. Why the decision matters.
6. Inputs and prerequisites.
7. Required roles.
8. Conditions that support proceeding.
9. Conditions that block, restrict or require remediation.
10. Expected output.
11. Related stages and SDLC activities.
12. Apply readiness guidance.
13. Return to journey overview.

The stage number provides context. It is not a progress count.

## Apply the Playbook reading order

1. Breadcrumb and public Apply identity.
2. Selected starting point.
3. Decision being prepared.
4. Expected output.
5. Exact kind of scope.
6. Accountable owner required.
7. Other participants required.
8. Evidence to gather.
9. Missing prerequisites and consequence.
10. Information protection notice.
11. Provisional-state and no-authority notice.
12. Begin new work.
13. Resume existing work.
14. Choose another starting point.
15. Continue public guidance.

No organizational input appears before item 12.

## Initiative Overview in blocked readiness

1. Initiative identity.
2. Overview heading.
3. Exact proposed pilot scope.
4. Direct blocked recommendation.
5. Current AI participation and governing decision.
6. Three active hard stops.
7. What may continue.
8. What must stop.
9. Next accountable decision and owner.
10. Remediation due.
11. Evidence gaps.
12. Favorable conditions.
13. Active opportunity and increment links.
14. Leadership output link.
15. Recent material changes.
16. Source records and history.

Favorable conditions remain below governing hard stops. A summary count cannot replace the three stop conditions.

## Material readiness decision unit

1. Initiative identity.
2. Increment identity and local navigation.
3. Decision-unit heading.
4. Decision being prepared.
5. Exact scope.
6. Current authority and governing decision.
7. Active consequence, if one exists.
8. What may continue and what must stop.
9. Why the question matters.
10. Accountable owner.
11. Required participants.
12. Guidance for answering.
13. Response choices.
14. Written-response examples when required.
15. Response input.
16. Evidence requirement.
17. Evidence references, statuses and limitations.
18. Save draft.
19. Interpret response.
20. Interpretation result.
21. Immediate consequence.
22. Remediation or review action.
23. Accountable decision when eligible.
24. Next decision.
25. Supporting detail and history.

After interpretation, the consequence is inserted into the semantic sequence after the interpretation result. It is also summarized near the top on later visits. It is not rendered only at the end.

## Written-response reading order

1. Question.
2. Why it matters.
3. Accountable owner.
4. Minimum specificity.
5. Insufficient example.
6. Why it fails.
7. Useful example.
8. Why it works.
9. Evidence expected.
10. Written input.
11. Evidence reference.
12. Save draft.
13. Interpret response.
14. Validation or interpretation result.

When examples use disclosures, their controls remain before the input. The user can reopen them without losing input or position.

## Evidence-gap reading order

1. Evidence requirement.
2. Direct missing or limited statement.
3. Claim or action affected.
4. Exact scope and period.
5. Current evidence status and limitation.
6. What may continue.
7. What must not be approved or claimed.
8. Evidence owner.
9. Required source or method.
10. Reviewer.
11. Reassessment action.
12. Related decision and report.

## Immediate hard-stop reading order

1. Hard-stop heading that names the stopped action.
2. Exact affected scope.
3. Direct reason.
4. What may continue.
5. What must stop.
6. Immediate containment.
7. Corrective action.
8. Accountable owner and due date.
9. Completion evidence.
10. Verifier.
11. Reassessment owner and decision.
12. Triggering response and evidence.
13. Rule explanation and history.

When the stop first appears after interpretation, focus moves to item 1.

## Remediation and reassessment reading order

1. Finding addressed.
2. Current restriction.
3. Corrective action.
4. Accountable owner.
5. Due date.
6. Dependencies.
7. Completion evidence.
8. Evidence status.
9. Verifier.
10. Submit for verification.
11. Verification result.
12. Statement that authority remains unchanged.
13. Begin reassessment when eligible.
14. Reassessment owner.
15. Prior and current decision links.
16. History.

Verified status never precedes or replaces the current restriction.

## Readiness Output reading order

1. Output title and status.
2. Decision required.
3. Recommendation.
4. Exact scope.
5. Why the recommendation governs.
6. Current AI participation.
7. Gate decision.
8. Active hard stops.
9. What may continue.
10. What must stop.
11. Required remediation.
12. Owners and dates.
13. What is established.
14. Evidence conclusion and claim limits.
15. Next decision.
16. Source decisions, evidence and report history.

## Later-scenario transition reading order

1. Separate-scenario heading.
2. Statement that the current blocked readiness state will not change.
3. Hypothetical chronology between scenarios.
4. Human decisions that would have been required.
5. Authority that applied during the fictional pilot.
6. Evidence snapshot now available.
7. Enter later scenario.
8. Return to blocked readiness.

The action label cannot imply completion of remediation, launch or pilot work.

## Completed-pilot evaluation reading order

1. Initiative identity.
2. Completed increment identity.
3. Later representative scenario label.
4. Evaluation heading and decision.
5. Exact scope and evidence snapshot.
6. Current authority, ended pilot period and no expansion authority.
7. Comparability.
8. Completeness.
9. Material limitations and dissent.
10. Complete-system evidence conclusion.
11. Product or business outcome.
12. Delivery flow and total human effort.
13. Quality and maintainability.
14. Security and control.
15. Release and operations.
16. Team experience and capability.
17. Total economics.
18. Claim limits.
19. Accountable operating consequence.
20. Category-owner dispositions.
21. What may continue.
22. What must stop.
23. Remediation and reassessment.
24. Leadership investment decision.
25. Generated outputs and source history.

The local implementation improvement appears inside item 12. Total economics stays a separate dimension and is repeated in the complete-system conclusion. Neither becomes a detached metric card that can be read as the whole result.

## Negative net-value conclusion reading order

1. Evidence conclusion.
2. Exact scope.
3. Complete-system rationale.
4. Local implementation improvement.
5. Transferred effort.
6. Quality and maintainability deterioration.
7. Operational deterioration.
8. Participant deterioration.
9. Total-cost deterioration.
10. Unchanged product outcome.
11. Security result and increased control burden.
12. Limitations and dissent.
13. Claim limits.
14. Statement that the conclusion does not change authority.
15. Open accountable authority decision.

The local improvement remains visible but cannot precede the complete conclusion.

## Accountable restriction reading order

1. Authority decision required.
2. Exact scope.
3. Current and proposed AI participation.
4. Evidence conclusion and category constraints.
5. Authority removed.
6. Activity retained.
7. Expansion prohibition.
8. What may continue.
9. What must stop.
10. Remediation option.
11. Evidence and approvals required for reconsideration.
12. Accountable owner.
13. Effective period.
14. Record decision.
15. Decision trace.

## Leadership investment decision reading order

1. Decision required now.
2. Recommended action.
3. Exact investment and operating scope.
4. Current authority and restrictions.
5. Complete-SDLC and total-cost conclusion.
6. Material limitations and dissent.
7. Category-owner decisions.
8. Available option 1 and consequence.
9. Available option 2 and consequence.
10. Delay consequence.
11. Unavailable options and reason.
12. Funding boundary and cost ceiling.
13. Owners and dates.
14. Decision rationale.
15. Record investment decision.
16. Next review.
17. Source records and derived report.

## Leadership output reading order

1. Report title, audience and status.
2. Decision required.
3. Recommended action.
4. Exact scope and evidence date.
5. Complete-SDLC and total-cost result.
6. Current authority and restrictions.
7. What may continue.
8. What must stop.
9. Options and consequences.
10. Owners and dates.
11. Limitations, dissent and claim boundaries.
12. Linked source decisions, evidence and risks.
13. Publication and supersession information.

The report remains readable as a sequence of sections. It does not require a wide comparison table.

## Desktop composition constraints

Gate 6.4 may test multiple columns only after this reading order is accepted.

A desktop secondary region may contain:

- initiative identity;
- local object index;
- source links;
- related guidance;
- nonmaterial history;
- a summary that duplicates, but does not replace, a current state already present in reading order.

A desktop secondary region must not be the only location for:

- decision required;
- exact scope;
- hard stop;
- what may continue;
- what must stop;
- evidence limitation;
- current authority;
- remediation owner;
- next decision;
- leadership option.

A sticky region may not create a second changing evaluation state detached from the evidence that produced it.

## Mobile constraints

Mobile uses one column and the canonical order.

It must not require:

- horizontal scrolling;
- persistent left navigation;
- persistent right evaluation rail;
- hover;
- tiny status badges as the only explanation;
- a wide evidence matrix;
- a fixed footer that covers decision content;
- jumping to the top after a task action.

Long supporting content may use labeled disclosures. Current consequences, action boundaries and next decisions remain open in the primary path.

## Keyboard order

Keyboard order follows semantic reading order, not visual column position.

### Navigation landmarks

Provide distinct labels for:

- public navigation;
- initiative navigation;
- local opportunity, increment or practice navigation;
- content;
- supporting guidance.

### Focus sequence

- Skip link reaches the current content heading.
- Initiative navigation precedes local navigation.
- Task actions follow the information required to understand them.
- Supporting disclosures follow the current task.
- Source links follow the summary they support.

### Dynamic results

- Save confirmation is announced without moving focus.
- Validation error moves focus to the error summary.
- Interpretation moves focus to the interpretation heading.
- Hard stop moves focus to the hard-stop heading.
- Decision record moves focus to the recorded-decision summary.
- Later-scenario transition moves focus to the scenario heading.
- Report generation moves focus to report status and decision required.

## Screen-reader meaning

- State labels include their scope in nearby text.
- Color, position and iconography never carry the only meaning.
- Expanded and collapsed state is announced.
- Errors identify their fields.
- Dynamic consequences use an appropriate live announcement without repeating the entire page.
- Tables, if later used for supporting evidence, have a linear alternative and never contain the only decision summary.
- Abbreviations are expanded at first use.
- Control identifiers remain supporting detail.

## Responsive-reading approval questions

1. Does one canonical order preserve meaning across desktop and mobile?
2. Is initiative context established before local and task context?
3. Are decisions, hard stops and action boundaries in the main reading sequence?
4. Does the evaluation place the complete conclusion before dimension detail while preserving local improvement?
5. Can leadership understand the decision without a wide table?
6. Are desktop secondary regions constrained to truly secondary content?
7. Does keyboard order follow meaning rather than visual placement?
8. Are dynamic focus changes defined for every consequential interaction?
