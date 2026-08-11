# Gate 6.4A Anchor Structure Brief

## Status

Anchor 1 and Anchor 2 desktop and mobile structures were accepted on 11 August 2026. Anchor 3 desktop structure was selected and its mobile adaptation was directionally accepted. Anchors 4 and 5 remain proposed.

This document is not a wireframe, visual direction or implementation target. It defines the screen responsibilities, representative state and content boundaries that the next visual exploration must preserve.

## Why the first exploration was rejected

The first material-readiness explorations combined too many responsibilities in one composition:

- journey position;
- initiative status;
- work progress;
- response and evidence collection;
- interpreted consequence;
- remediation;
- decision history;
- navigation instruction.

The user could not tell whether the pilot was blocked by the current response or an earlier finding, whether resolving the current item would remove the overall block, what could continue or what to do next.

The next exploration must demonstrate separation rather than improve the styling of the rejected screens.

## Governing screen families

### Journey overview

The journey overview owns:

- the current lifecycle position for one exact adoption increment;
- current AI participation;
- overall decision readiness;
- unresolved blockers across the increment;
- the next recommended initiative action;
- links to the work creating those facts.

It does not collect detailed answers or evidence.

### Focused work item

The focused work item owns:

- one requirement, question or corrective action;
- why it matters;
- guidance and examples;
- the response;
- directly supporting evidence;
- Save draft and Interpret response;
- the local result after interpretation.

It shows only restrained journey context. It does not reproduce the initiative dashboard or all blockers.

### Gate-decision review

The gate-decision review owns:

- the exact decision requested;
- the exact scope;
- verified evidence and unresolved requirements;
- all governing blockers;
- what may continue and what must stop;
- the accountable decision and its consequences.

Completing work items can make the gate ready for review. It cannot make the decision.

### Leadership report

The leadership report owns:

- a readable derived conclusion;
- the current authority and restrictions;
- complete-system outcomes and total cost;
- available investment choices;
- limitations and source links.

It cannot change response, evidence, gate or authority state.

## Representative initiative

- Initiative: Account Services AI Adoption
- Opportunity: Reduce total effort and elapsed time for Service A authentication defect corrections without worsening quality, security, operations, maintainability, team experience or total cost
- Adoption increment: First controlled pilot
- Increment status: Proposed and not launched
- Current lifecycle stage: Assess readiness and establish baselines
- Current AI participation: Foundation
- Proposed participation: Bounded Change
- Proposed delivery boundary: Accepted authentication defect through fourteen days of production support
- Readiness owner: Maria Patel, Director of Engineering

## Readiness fact sequence

The wireframes must distinguish these events.

### Before the current response

- The readiness assessment is in progress.
- The proposed pilot has not launched.
- Foundation activities remain permitted.
- Two earlier requirements already block pilot launch: complete cost allocation and production-support attribution.
- The current stop-path work item has not been interpreted.

### Current response

- The responder selects Documented but not demonstrated.
- The responder explains that a runbook exists but no end-to-end stop exercise has been completed for the exact scope.
- The responder references the runbook and a planned exercise.
- Saving creates a draft only.
- Interpreting applies the deterministic rule for a mandatory demonstrated stop path.

### After interpretation

- The current response creates a third blocker.
- Pilot launch is blocked by this requirement and two earlier requirements.
- Resolving the stop-path requirement will remove one blocker but will not make launch eligible.
- Current AI participation remains Foundation.
- Real AI-assisted delivery and Bounded Change remain prohibited.
- Readiness and corrective work may continue.
- The recommended next action is to create and assign the stop-path remediation.

### After remediation verification

- The stop-path blocker is verified for reassessment.
- Two other blockers remain.
- The prior blocked readiness decision still governs.
- No authority is restored automatically.

## Anchor 1: Public Home

### Screen responsibility

Explain why the product exists and help the reader choose an informed starting path.

### Primary user

An enterprise or consulting leader asked to introduce AI into software delivery responsibly.

### First content

Organizations are being pushed to adopt AI before they can prove where it helps, what it costs, who remains accountable or how to prevent local speed from damaging the complete delivery system.

### Primary action

Understand the adoption journey.

### Supporting action

Assess readiness for a specific initiative.

### Must not appear

- organizational inputs;
- a workbook modal;
- a pilot progress sidebar;
- unexplained method or role selection;
- workspace status.

## Anchor 2: Focused readiness work item

### Screen responsibility

Help the readiness owner provide an accurate response and supporting evidence for one mandatory requirement.

### Exact represented state

The stop-path response is being prepared. It has not been interpreted. The current item has not yet created a blocker.

### Restrained context

Show one compact context line:

Account Services AI Adoption / First controlled pilot / Readiness assessment / Not launched

Provide a link back to Readiness overview. Do not show all journey stages, all progress dimensions or all blockers in the task header.

### Primary content order

1. Requirement: Demonstrate that an authorized person can stop AI-assisted activity for this exact scope.
2. Why this matters.
3. What a sufficient response must establish.
4. Useful and insufficient examples.
5. Structured response.
6. Supporting evidence.
7. Save draft.
8. Interpret response.

### Primary action

Interpret response.

### Supporting action

Save draft.

### Must not appear

- overall blocked status caused by an uninterpreted response;
- a complete journey dashboard;
- global progress percentage;
- remediation inputs before a gap exists;
- decision history in the primary path;
- a right-side evaluation rail.

## Anchor 3: Immediate hard-stop result

### Screen responsibility

Explain the consequence of the interpreted response and give the user a safe, concrete recovery path.

### Exact represented state

The current response has been interpreted. It created the third active blocker. The screen is not a gate decision and does not represent a new readiness decision.

### First content

Pilot launch is blocked by this requirement.

The current response says the stop path is documented but has not been demonstrated for the exact scope. A demonstrated stop path is mandatory before real AI-assisted work can begin.

### Required causal explanation

- This response created one of three current blockers.
- Two blockers existed before this response.
- Correcting this requirement removes one blocker.
- The pilot will remain blocked until the other two requirements are resolved, verified and a new readiness decision is recorded.

### What may continue

- readiness assessment;
- non-AI planning;
- configuring and exercising the stop mechanism;
- completing cost allocation;
- establishing production-support attribution.

### What must stop

- real AI-assisted delivery for this scope;
- pilot launch;
- Bounded Change authorization;
- value, productivity, savings or expansion claims.

### Primary action

Create remediation task.

### Supporting actions

- Review the response that caused this blocker.
- Return to Readiness overview.

### Must not appear

- the full editable response form;
- all initiative metrics;
- a generic Continue action;
- an implication that remediation automatically restores authority;
- an isolated red status without cause or recovery.

## Anchor 4: Completed-pilot evaluation

### Screen responsibility

Help evidence reviewers determine what a completed later pilot demonstrated across the complete affected delivery system and total cost.

### Exact represented state

This is a clearly labeled separate later representative scenario. The pilot completed, its Bounded Change period ended, the evidence snapshot is frozen and no expansion authority exists.

### Primary content

Decision required: What did the completed pilot demonstrate, and what claims can the organization support?

The complete-system conclusion remains Decision pending until accountable disposition. Local implementation effort improved, but total flow, review, quality, operations, participant burden and total cost deteriorated.

### Primary action

Review complete-system evidence.

### Must remain separate

- evidence conclusion;
- authority decision;
- leadership investment decision.

## Anchor 5: Leadership investment decision and output

### Screen responsibility

Help the executive sponsor decide whether to fund bounded remediation under Assisted Work or stop further investment.

### Exact represented state

Negative net value has been recorded. The accountable authority decision restricted the scope to Assisted Work. Leadership cannot authorize Bounded Change or expansion from this screen.

### Primary content

- decision required;
- recommendation;
- exact scope;
- current Assisted Work restriction;
- complete-system and total-cost conclusion;
- fund-remediation and stop-investment choices;
- consequences, cost ceiling, owners and review date;
- unavailable choices and reasons.

### Primary action

Record investment decision.

### Report relationship

The readable leadership output is derived from the evidence conclusion, authority decision and investment decision. Editing the report cannot change those source records.

## Responsive contract

- Mobile and desktop use the same semantic order.
- Mobile uses one column without a permanent sidebar.
- Desktop may use secondary placement only for content that already appears in semantic order.
- Journey context may collapse to a short line with an accessible disclosure.
- Essential cause, consequence, permitted work, prohibited work and next action cannot move into a detached rail.
- Primary controls remain reachable without horizontal scrolling.

## Visual exploration target

The first revised visual exploration tested Anchor 3, Immediate hard-stop result. The product owner selected the second desktop exploration as the better representation of this moment and confirmed that its mobile adaptation directionally preserves the meaning. See the [Anchor 3 Selection and Responsive Review](anchor-3-selection-review.md).

Anchor 2, Focused readiness work item, was then tested on desktop and mobile. The product owner accepted both structures for the represented pre-interpretation moment. See the [Anchor 2 Selection Review](anchor-2-selection-review.md).

Anchor 1, Public Home, was corrected after the first attempt exposed too much product documentation in the orientation layer. The product owner accepted the revised desktop and mobile structures. See the [Anchor 1 Selection Review](anchor-1-selection-review.md).

This is the most demanding intersection between focused work and journey consequence. It must prove that the product can:

- preserve exact journey context without showing a journey dashboard;
- connect the status to the current response;
- disclose earlier blockers without reproducing the whole readiness overview;
- separate local remediation from the later gate decision;
- provide one clear next action;
- remain readable without a permanent sidebar or consequence rail.

The exploration uses a 1440 by 1024 desktop viewport and low visual fidelity. It tests hierarchy and composition, not brand, typography, color or production components.

## Anchor 3 validation questions

Without explanation from the designer, a representative pilot lead must be able to answer:

1. What initiative and increment is this?
2. Has the proposed pilot launched?
3. What happened on this screen?
4. Did the current response create the blocked condition?
5. Were there blockers before this response?
6. Would resolving this item unblock the pilot?
7. What work may continue?
8. What work must stop?
9. What should happen next?
10. Who owns that next action?
11. Does remediation restore authority automatically?
12. Where can the person see the complete readiness state?

Failure on any question requires revision before Gate 6.4 closes.
