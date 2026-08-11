# Gate 6.2 Screen Responsibility Map

## Status

Proposed for product-owner approval under [Gate 6.2](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/149).

This map assigns one primary job to each destination or focused task view. It defines information ownership and movement, not layout, styling or technology.

Read with the [Navigation Model](navigation-model.md), [Task Flow Model](task-flow-model.md) and proposed [DEC-UX-003](decisions/0003-decision-led-durable-navigation.md).

## Governing rules

### One screen, one primary job

A destination may summarize or link to related records, but it must not become a dashboard of every available fact.

### One authoritative source

- Decisions owns decision state and history.
- Evidence owns evidence records and snapshots.
- Risks and remediation owns risks, hard stops, restrictions and corrective work.
- Opportunities owns the use-case record, not its final selection decision.
- Adoption increments owns the bounded-change record, not the decisions that authorize it.
- Governed practices owns the operating-practice record, not the decisions that authorize it.
- Reports owns generated views, not the facts they communicate.

Filtered views and summaries link to the source record. They do not create copies.

### Guidance before input

Before asking for organizational information, every response task explains:

- the decision being supported;
- why the information matters;
- who is accountable;
- what useful specificity looks like;
- one insufficient example and why it fails;
- one useful example and why it works;
- minimum acceptable information;
- evidence expected;
- available honest states such as unknown or not yet established;
- the consequence of material gaps.

### Consequences stay with their trigger

A system consequence, hard stop or restriction appears in the same decision context immediately after the triggering response or evidence review. A person does not need to open a report to learn that work is blocked.

### Completion is not authority

Saving a response, completing a section, uploading evidence or finishing a screen never grants authority. Only the named accountable human decision changes authority.

## Public destinations

### Home

**Primary job**

Help a first-time visitor determine within the opening content whether this product addresses their problem and where to begin.

**Audience and entry**

Anyone under pressure to adopt AI in software delivery, including leaders, product and delivery owners, engineers, control functions and consulting teams. Home is the default public entry and the safe fallback for an invalid public link.

**Information it uses**

Approved product purpose, target audiences, enterprise challenges, nine-stage journey summary, SDLC coverage, participant summary and starting-point guidance.

**Content priority**

1. Why the product exists and the situation that brings people here.
2. What decisions and problems it helps address.
3. Who must participate.
4. What the complete adoption journey looks like.
5. How the complete SDLC and total cost are evaluated.
6. Starting choices.

**Primary actions**

- Understand why this matters.
- Explore the adoption journey.
- See how guidance applies across the SDLC.
- Choose an informed starting point.
- Resume existing initiative work.

**Output and next step**

An informed route to Why, Journey, SDLC or Apply. Home does not create a workspace record.

**Must not contain**

A workbook modal, readiness form, progress count, pilot-only navigation, operating-model detail or a demand for organizational data.

### Why This Matters

**Primary job**

Explain the enterprise adoption problem, the risks of disconnected experimentation and the standard of proof required for responsible investment.

**Information it uses**

Product Contract, adoption modes, accountability principles, evidence model, hard-stop principles and product limitations.

**Content priority**

1. Pressure organizations face.
2. Problems caused by unmanaged or poorly evidenced adoption.
3. What responsible adoption requires.
4. Why local speed and usage are not proof of value.
5. When restriction or stopping is the correct outcome.
6. What this product does and does not do.

**Primary actions**

- Continue to the journey.
- Explore a relevant SDLC activity.
- Choose a starting point.

**Output and next step**

A shared understanding of the problem and a route to action. It records no organizational decision.

**Direct entry**

A deep link begins with a short page purpose and links back to Home orientation without forcing it.

### Adoption Journey

**Primary job**

Explain the nine adoption stages as recurring decision work, including what each stage produces and why an organization may stop, return or proceed.

**Information it uses**

Approved information architecture, lifecycle, stage guidance, outputs, roles and stage gates.

**Content priority**

1. Complete journey overview.
2. Current stage selected by the reader.
3. Decision required at that stage.
4. Expected outputs and required participants.
5. Evidence and stop conditions.
6. Related SDLC activities and Apply transition.

**Primary actions**

- Open one stage.
- Move to a related stage without implying linear completion.
- View related SDLC guidance or roles.
- Apply the stage to an initiative.

**Output and next step**

Understanding of the selected stage and an informed Apply route. The journey is guidance, not an organizational progress tracker.

**Direct entry**

A stage deep link identifies its position in the full journey and its likely prerequisites.

### SDLC Activity Guidance

**Primary job**

Explain responsible AI participation in one software-delivery activity and connect it to the adoption decisions that govern its use.

**Information it uses**

One of the nine shared SDLC activities, relevant opportunities, context requirements, authority boundaries, validation, evidence, roles and journey stages.

**Content priority**

1. The activity and why AI participation changes its risk or evidence needs.
2. Appropriate and inappropriate AI participation.
3. Context and access requirements.
4. Human validation and approval.
5. Evidence across upstream and downstream work.
6. Related journey decisions.

**Primary actions**

- Compare participation postures.
- Open related journey guidance.
- View responsible roles.
- Apply the activity to an opportunity or increment.

**Output and next step**

Activity-specific understanding and a contextual Apply route. The page never creates a second decision record.

**Direct entry**

The page identifies the activity, relevant adoption stages and the difference between guidance and current organizational authority.

### Apply the Playbook

**Primary job**

Create an informed boundary between reading public guidance and entering organizational work.

**Information it uses**

The reader's selected need, expected decision, output, prerequisites, required people, evidence needs, data-handling notice and known existing initiative.

**Content priority**

1. Decision the person is about to support.
2. Exact kind of scope involved.
3. Required participants and authority.
4. Evidence needed.
5. Missing prerequisites and possible restrictions.
6. What will be recorded, saved or exported.
7. Entry or resume choices.

**Primary actions**

- Begin new initiative work.
- Resume an existing initiative.
- Review a provisional export.
- Return to prerequisite guidance.

**Output and next step**

A deliberate transition into a named initiative and relevant decision area.

**Direct entry**

If reached from a public stage or SDLC activity, Apply preserves that intent. If reached without context, it asks what the person needs to decide before requesting organizational information.

**Must not do**

Open an unexplained form, imply that submitting information grants approval or silently invent a new initiative.

## Durable initiative destinations

### Initiative Overview

**Primary job**

Orient a participant to the initiative's current decision posture and route them to the most consequential next work.

**Information it uses**

Summaries from initiative purpose and ownership, decisions, opportunities, increments, practices, evidence, risks and reports.

**Content priority**

1. Initiative identity and exact viewed scope.
2. Active hard stops, restrictions and expired authority.
3. Current accountable decision and owner.
4. What may continue and what must stop.
5. Next decision and required evidence.
6. Active opportunities, increments and practices.
7. Recent material changes.

**Primary actions**

- Open the next material decision.
- Inspect a hard stop or restriction.
- Open an active increment or practice.
- Review missing evidence.
- Open the relevant leadership decision.

**Output and next step**

Orientation and a route to a source record. Overview edits no source state.

**Direct entry**

Always safe. If initiative access or identity is unavailable, explain the condition and return to Apply or initiative selection.

### Initiative Decisions

**Primary job**

Find, conduct and review authoritative human decisions across the initiative.

**Information it uses**

Decision proposals, exact scopes, accountable owners, participants, evidence snapshots, consequences, outcomes, conditions, dates and supersession history.

**Content priority**

1. Decisions requiring action.
2. Blocked, expired or condition-failed authority.
3. Decisions waiting for evidence or review.
4. Current approvals and restrictions.
5. Decision history grouped by stage and scope.

**Primary actions**

- Open a material decision unit.
- Filter by scope, stage, owner or state.
- compare a current decision with the proposal and prior decision.
- begin reassessment where eligible.
- inspect source evidence and related risks.

**Output and next step**

An authoritative decision or direct route to the work required before one can be made.

**Direct entry**

A decision deep link opens its exact scope and governing status. Missing evidence or authority is shown before editable responses.

### Opportunities

**Primary job**

Assess and track candidate problems or use cases without treating every idea as approved adoption work.

**Information it uses**

Need, current pain, SDLC activity, intended outcome, alternative options, suitability, reversibility, evidence feasibility, total-cost boundary and linked selection decision.

**Content priority**

1. Candidate need and intended outcome.
2. Selection status and decision link.
3. Evidence feasibility and alternatives to AI.
4. Linked increments and current restrictions.
5. Deferred or rejected reasoning.

**Primary actions**

- Add or inspect an opportunity.
- Prepare a selection proposal.
- Open the authoritative selection decision.
- Create a proposed increment only after selection permits design.
- compare alternatives.

**Output and next step**

A candidate record plus an authoritative selection, deferral or rejection decision stored in Decisions.

**Direct entry**

An opportunity deep link keeps the initiative visible and identifies whether selection permits increment design.

### Adoption Increments and Pilots

**Primary job**

Define and follow one bounded change in AI participation, including a first pilot, repeat pilot, remediation test or bounded expansion.

**Information it uses**

Linked opportunity, exact scope, hypothesis, current and proposed posture, operating boundary, owners, evidence plan, cost boundary, dates, stop conditions and linked decisions.

**Content priority**

1. Exact increment scope and work status.
2. Current permitted, restricted and prohibited activity.
3. Active hard stops and conditions.
4. Current decision and next decision.
5. Operating boundary and evidence plan.
6. Timeline, records and history.

**Primary actions**

- Inspect an increment.
- Prepare scope and boundary.
- Open readiness, launch, continuation or evaluation decisions.
- record operating observations.
- inspect risks and evidence.
- propose a later bounded increment.

**Output and next step**

A durable increment record and links to authoritative decisions. Completing increment setup does not authorize launch.

**Direct entry**

The increment identifies its initiative parent and opportunity. If a governing decision is missing, the page explains what may still be prepared and blocks authority-dependent action.

### Evidence

**Primary job**

Create, review and find evidence records and frozen decision snapshots.

**Information it uses**

Purpose, scope, source owner, observation period, provenance, status, quality, limitations, protection, review, version, linked decisions and reports.

**Content priority**

1. Evidence missing or rejected for a current decision.
2. Evidence requiring review.
3. Evidence status, scope and limitations.
4. Complete-SDLC and total-cost coverage.
5. Frozen snapshots and use history.

**Primary actions**

- Add a protected evidence reference.
- review or verify evidence for a declared use.
- inspect gaps and limitations.
- open decisions or reports that use it.
- freeze or inspect an evidence snapshot as part of an authorized decision process.

**Output and next step**

A versioned evidence record or snapshot. Verification supports a decision but never makes it.

**Direct entry**

An evidence deep link shows scope, declared use, protection notice and current status. Access denial does not reveal protected content.

### Risks, Hard Stops and Remediation

**Primary job**

Make risk, active prohibitions, containment and corrective work directly actionable.

**Information it uses**

Finding, credible consequence, severity, exact affected scope, stopped action, trigger, evidence, containment, owner, corrective action, due date, clearance evidence, verifier and reassessment link.

**Content priority**

1. Active hard stop or restriction and exact affected action.
2. What may continue and what must stop.
3. Immediate containment and accountable owner.
4. Required remediation and completion evidence.
5. Verification and reassessment status.
6. history and related decisions.

**Primary actions**

- Inspect the trigger and affected scope.
- acknowledge and contain.
- assign or update remediation.
- provide and verify completion evidence.
- begin an eligible reassessment.
- close without proceeding.

**Output and next step**

A source risk, hard-stop or remediation record and, when eligible, a link to a new accountable decision.

**Direct entry**

A hard-stop link opens the consequence first. It must never land on a generic risk list or hide the restriction below history.

### Governed Practices

**Primary job**

Operate, review, restrict or retire an AI-enabled practice accepted into normal work for an exact scope.

**Information it uses**

Operating boundary, current posture, owner, evidence health, cost, incidents, conditions, review dates, decisions, change history and retirement status.

**Content priority**

1. Exact current authority and scope.
2. Active incidents, hard stops, failed conditions or review expiry.
3. Current operating health and evidence limitations.
4. Next review decision and owner.
5. boundary, history and improvement opportunities.

**Primary actions**

- inspect current authority.
- review evidence and operating health.
- open an incident or remediation.
- conduct a periodic decision.
- propose a bounded improvement increment.
- restrict or retire the practice through Decisions.

**Output and next step**

An operating record and route to the next accountable review or bounded change.

**Direct entry**

The page identifies current authority, expiry and restrictions before operational history.

### Leadership Decisions and Reports

**Primary job**

Present an accountable investment choice using a readable, source-linked view of value, cost, risk and authority.

**Information it uses**

Frozen evidence conclusion, complete-SDLC results, total cost, category-owner decisions, risks, restrictions, options, recommendation, dissent and source links.

**Content priority**

1. Decision required now.
2. Recommended action and exact scope.
3. What the evidence supports and does not support.
4. Complete-SDLC and total-cost result.
5. Current authority, hard stops and restrictions.
6. Options, consequences, owners and dates.
7. Source records and limitations.

**Primary actions**

- review the briefing.
- open source evidence, decisions or risks.
- record the authorized investment decision.
- return for missing evidence or challenge.
- publish a reviewed report for a stated audience.

**Output and next step**

A leadership investment decision in Decisions and a derived report in Reports. Editing report prose cannot alter evidence or authority.

**Direct entry**

A report deep link identifies its publication state, audience, snapshot date and any superseding report. A pending decision opens separately from a published report.

## Focused task and output views

These views are reached from durable destinations. They are not additional top-level navigation.

### Material Decision Unit

**Primary job**

Help required people make one consequential decision for one exact proposal and scope.

**Information it uses**

Guidance, structured responses, evidence, deterministic rules, system consequences, provisional interpretation, decision owner, conditions and decision trace.

**Required reading order**

1. Current decision, proposal and exact scope.
2. Current authority and immediate consequence.
3. What may continue and what must stop.
4. Why the decision matters and who participates.
5. Responses with good and bad examples.
6. Evidence and limitations.
7. Provisional interpretation.
8. Accountable disposition.
9. Next decision and history.

**Primary actions**

- save a draft response.
- add or link evidence.
- interpret responses.
- inspect a triggered hard stop.
- request review.
- record the accountable decision.
- return for remediation.

**Output and next step**

A versioned accountable decision, or an explicit blocked, insufficient-evidence or remediation-required state. Screen completion never produces approval.

**Direct entry**

The unit opens at the consequential current section, not the top of a wizard. It shows missing prerequisites and disables only actions that require them.

### Readiness Output

**Primary job**

Summarize whether one proposed increment may proceed, what blocks it and what action is required next.

**Information it uses**

Readiness decisions, exact scope, current posture, evidence coverage, hard stops, remediation, conditions and owners.

**Content priority**

1. Current readiness decision.
2. Exact scope and requested action.
3. Active hard stops and restrictions.
4. What may continue and what must stop.
5. Required remediation, evidence, owner and date.
6. Supporting favorable conditions and evidence gaps.
7. next reassessment decision.

**Primary actions**

- open a hard stop or remediation.
- open the underlying decision.
- share or export a provisional summary.
- begin reassessment when eligible.

**Output and next step**

A derived readiness report. It does not own readiness state or authorize launch.

**Direct entry**

Shows current decision and snapshot date first, with links to superseding decisions.

### Pilot Evaluation

**Primary job**

Determine what a completed increment demonstrated across the full SDLC and total cost, then support separate authority and investment decisions.

**Information it uses**

Frozen baseline and evaluation snapshot, dimension results, adverse evidence, dissent, total cost, evidence limitations, evidence conclusion and category-owner dispositions.

**Content priority**

1. Exact evaluation boundary and comparability.
2. Evidence conclusion.
3. Complete-SDLC and total-cost result.
4. Material deterioration, adverse evidence and uncertainty.
5. Local improvements in their full context.
6. Current authority and restrictions.
7. Decisions required next.

**Primary actions**

- inspect each evidence dimension.
- challenge or return the evidence package.
- record the evidence conclusion.
- open a restriction or continuation decision.
- open the leadership investment decision.
- generate the tangible-value assessment.

**Output and next step**

A frozen evidence conclusion followed by separate accountable authority and investment decisions.

**Direct entry**

If evaluation is incomplete, the page names missing material evidence and prohibits unsupported value or expansion claims.

### Explicit Later-Scenario Transition

**Primary job**

Let a validator inspect the completed-pilot evaluation slice without implying that earlier blocked work automatically advanced.

**Information it uses**

A clearly labeled hypothetical chronology: prior hard stops, verified remediation, new launch decision, completed pilot and frozen evaluation snapshot.

**Content priority**

1. This is a later representative scenario, not completed organizational work.
2. What changed since blocked readiness.
3. Which human decisions occurred.
4. Which authority applied during the pilot and when it ended.
5. What evidence is now available.
6. Where the person will land.

**Primary actions**

- enter the later representative scenario.
- return to blocked readiness.
- inspect the chronology and source assumptions.

**Output and next step**

A deliberate transition to Pilot Evaluation with no mutation of real initiative state.

**Direct entry**

A direct link opens the explanation before the evaluation. It cannot silently mark remediation, launch or pilot work complete.

## Responsibility conflicts resolved by this map

### Decisions versus object detail

An opportunity, increment or practice provides the context for work. Decisions owns the authoritative approval, restriction or rejection. Object pages show and link to that decision.

### Evidence versus evaluation

Evidence owns source records and snapshots. Pilot Evaluation interprets one frozen snapshot and records an evidence conclusion through the decision process.

### Risks versus readiness

Risks and remediation owns the hard-stop and corrective-work records. Readiness Output summarizes their consequence for a proposed increment.

### Reports versus authority

Reports communicate decisions and evidence to an audience. Decisions owns authority. A report cannot be edited to create a more favorable source state.

### Journey stage versus progress

The public Journey teaches recurring decision work. The workspace may identify the current stage for an exact scope, but neither surface presents page completion as organizational progress.

## Screen-level approval questions

1. Does each destination have one clear primary job?
2. Are authoritative decisions, evidence, risks and reports owned in only one place?
3. Does the workspace distinguish summaries from source records?
4. Do direct links preserve initiative and exact-scope context?
5. Are hard stops and restrictions visible without opening a report?
6. Does post-pilot work remain inside the same initiative structure?
7. Do the focused views avoid becoming permanent top-level destinations?
