# Gate 6.3 Interaction Sequence Model

## Status

Proposed for product-owner approval under [Gate 6.3](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/151).

This document defines how people move from guidance to response, evidence, interpretation, remediation and accountable decisions. It does not define page layout, component styling, storage or platform behavior.

Read with the [Content Priority Model](content-priority-model.md), [Responsive Reading Order](responsive-reading-order.md), [Vertical-Slice Content Blueprints](vertical-slice-content-blueprints.md) and proposed [DEC-UX-004](decisions/0004-decision-consequence-content-hierarchy.md).

## Interaction objective

A person must always be able to distinguish:

- navigation from organizational progress;
- draft information from interpreted information;
- deterministic system consequence from human authority;
- evidence conclusion from operating permission;
- remediation verification from restart approval;
- leadership investment from specialized category authority;
- report generation from source-record change.

Each consequential interaction uses an explicit action label and produces an explicit result.

## Interaction vocabulary

### Navigate

Moves to a destination or source record.

Navigation does not:

- save a response;
- mark work complete;
- change a decision;
- clear a hard stop;
- advance a journey stage.

### Save draft

Stores or preserves the current response state.

Save draft does not:

- interpret the response;
- verify evidence;
- submit for review;
- record a decision;
- change authority.

After saving, the interface states: “Draft saved. No interpretation or decision has been recorded.”

### Add evidence reference

Associates a protected source reference with the current evidence requirement.

The action records purpose, source owner, scope, period and declared status. It does not verify the evidence.

### Submit evidence for review

Requests verification for one declared use.

The evidence remains unverified until the named reviewer records a disposition.

### Verify evidence for declared use

Records a reviewer disposition for the exact evidence version, scope and decision use.

Verification supports a decision. It does not make the decision.

### Interpret response

Applies the approved deterministic rule to the current response and evidence state.

The action may:

- identify missing required information;
- identify an evidence gap;
- apply a restrictive system consequence;
- create a draft hard-stop or remediation record;
- produce a provisional interpretation.

It cannot:

- grant approval;
- clear a hard stop;
- accept risk;
- select a final evidence conclusion;
- change AI participation.

### Request accountable review

Freezes the proposal, response versions and evidence snapshot needed for one material decision and routes it to required participants.

It does not imply that the decision is favorable or ready.

### Record accountable decision

Available only to the authenticated accountable owner after required participation and evidence conditions are satisfied or explicitly disposed.

The action records:

- proposal;
- exact scope;
- evidence snapshot;
- outcome;
- rationale;
- unresolved risk and dissent;
- conditions;
- permitted and prohibited activity;
- effective period;
- next decision;
- supersession link.

Only this interaction grants, restricts, pauses, restarts, expands, standardizes or retires authority.

### Record remediation progress

Updates corrective work and evidence. It does not change the governing restriction.

### Submit remediation for verification

Requests review of completion evidence.

The governing restriction remains.

### Verify remediation

Records whether completion evidence satisfies the stated corrective action.

A verified result changes the remediation to Verified and the related hard stop to Cleared for reassessment when the governing rule allows it. It does not restore authority.

### Begin reassessment

Creates a new decision proposal connected to the prior decision, remediation and new evidence snapshot.

### Generate report

Builds a derived audience view from frozen source records.

The report is draft until reviewed. Editing report wording cannot change decisions, evidence, risks or authority.

### Record leadership investment decision

Records funding or continuation support within the leader's authority. It cannot override specialized category decisions.

### Enter later representative scenario

Moves a prototype validator into a separate fictional scenario state after explaining the hypothetical decisions and work between states.

It does not modify real initiative records.

## Standard response sequence

### Step 1: Establish decision context

Show:

- decision being prepared;
- exact proposal and scope;
- current AI participation;
- current governing decision;
- current restrictions;
- accountable owner and required participants.

If a person enters directly, show missing prerequisites before editable content.

### Step 2: Explain why the response matters

Show:

- direct reason the information affects the decision;
- credible consequence of a weak, unknown or failed condition;
- output affected.

Do not expose detailed methodology before the person understands the decision.

### Step 3: Provide answer guidance

For a structured response, show:

- available choices;
- what each choice means;
- evidence expected;
- whether Not applicable is available and who must justify it.

For a written response, show:

- minimum specificity;
- insufficient example;
- why it fails;
- useful example;
- why it works;
- evidence expected.

### Step 4: Capture response and evidence separately

The person records:

- structured choice or written response;
- named people, scope and dates where required;
- evidence references;
- declared evidence status;
- known limitations.

Saving creates a draft only.

### Step 5: Validate required structure

Validation checks whether required information is present and internally coherent.

A validation error:

- identifies the exact field or relationship;
- explains how to correct it;
- preserves all entered information;
- does not interpret the response;
- does not move focus to the top of the page.

### Step 6: Interpret explicitly

The person selects **Interpret response**.

The product shows:

- response version used;
- evidence state used;
- rule applied in direct language;
- provisional interpretation;
- immediate system consequence;
- what may continue;
- what must stop;
- remediation when created;
- next accountable decision.

### Step 7: Continue through the appropriate branch

Possible branches are:

- continue preparing the current decision;
- add or repair evidence;
- inspect a hard stop;
- complete remediation;
- request accountable review;
- close without proceeding.

There is no generic Next action.

## Written-response interaction

### Before the input

Visible or immediately available:

- question;
- why it matters;
- accountable owner;
- minimum specificity;
- insufficient example and explanation;
- useful example and explanation;
- evidence expected;
- consequence of Unknown or Not yet established.

### Input behavior

- The response has a visible label.
- Helper text is separate from placeholder text.
- The input supports review without losing examples.
- Draft state is visible.
- The product does not generate a favorable answer on the person's behalf.
- AI-supported drafting, if added later, must be clearly identified and remain editable. It cannot attest to evidence or authority.

### Good and bad examples

Examples may be collapsed after the person has seen that they exist, but the control label must state what is inside, such as:

- “See an insufficient response and why it fails”
- “See a useful response and why it works”

The product never uses the examples as prefilled organizational answers.

### Unknown and not yet established

When the honest state is Unknown or Not yet established:

1. Accept the state without forcing invented detail.
2. Explain whether the condition is universal or scope-dependent.
3. Identify the evidence gap.
4. State which action or claim is affected.
5. Identify an owner and evidence needed.
6. Apply the appropriate restrictive consequence.
7. Preserve the state in reports.

Unknown is not neutral or favorable.

## Structured-choice interaction

Each choice includes direct meaning.

Example:

- **Demonstrated for the exact scope:** current verified evidence supports the condition.
- **Documented but not demonstrated:** a procedure exists but no operational proof exists.
- **Demonstration failed:** the tested control did not produce the required result.
- **Not yet established:** the required condition does not exist.
- **Unknown:** the respondent cannot determine the current condition.

If a choice triggers a hard stop, the consequence appears after explicit interpretation without requiring completion of other responses.

## Evidence interaction

### Add evidence

The person sees:

- claim or condition supported;
- expected source and owner;
- required scope and period;
- accepted protection method;
- minimum verification;
- consequence of missing evidence.

The person records a protected reference rather than copying sensitive source content when appropriate.

### Review evidence

The reviewer records:

- evidence version;
- declared use;
- exact scope and period;
- status;
- limitation;
- verification rationale;
- narrower permitted use when limited;
- rejection reason when rejected.

### Missing or limited evidence

After review, the current decision context states:

- what is missing or limited;
- which claim or action is affected;
- whether the decision can continue on a narrower basis;
- what may continue;
- what must stop;
- evidence owner and next review.

Limited evidence never becomes verified for a broader use than the reviewer accepted.

### Freeze evidence snapshot

Before a material evaluation or decision:

1. Identify all evidence versions included.
2. Show missing, stale, rejected and disputed items.
3. Require disposition of material gaps.
4. Freeze the snapshot identifier and date.
5. Preserve limitations and dissent.
6. Link every generated report to the snapshot.

Later evidence creates a new snapshot. It does not rewrite the prior decision.

## Hard-stop interaction

### Trigger

A response or evidence review satisfies a versioned hard-stop rule.

### Immediate result

The same decision context shows:

1. Direct blocked or stopped statement.
2. Exact affected scope and action.
3. What may continue.
4. What must stop.
5. Immediate containment.
6. Required remediation.
7. Evidence required for verification.
8. New decision required after verification.

### Automatic behavior

The product may:

- block submission of the prohibited action;
- apply the more restrictive interim condition;
- create a source hard-stop record;
- create draft remediation;
- notify the declared owner where platform behavior later supports it.

The product cannot automatically:

- approve an alternative action;
- close the hard stop;
- accept risk;
- restore authority.

### Multiple hard stops

Each hard stop remains separately visible with its scope and stopped action.

The current decision summary states the governing combined consequence:

- the most restrictive applicable rule governs overlapping work;
- one cleared condition does not clear another;
- favorable conditions do not reduce hard-stop priority.

### Hard-stop focus and announcement

After interpretation:

- keyboard focus moves to the hard-stop heading;
- the blocked action and scope are announced;
- entered response remains preserved;
- the person can move to remediation or back to the response;
- focus does not move to the page top.

## Remediation interaction

### Create or inspect remediation

The remediation is linked to:

- triggering finding;
- exact affected scope;
- current restriction;
- corrective action;
- accountable owner;
- due date;
- completion evidence;
- verifier;
- reassessment owner.

### Update remediation

The owner can record progress and add evidence while the current restriction remains visible.

### Submit for verification

The product confirms:

- which evidence version will be reviewed;
- who will verify;
- that authority remains unchanged;
- what a verified result permits.

### Verify

The verifier records Verified or Rejected with rationale.

If Verified:

- remediation becomes Verified;
- the hard stop may become Cleared for reassessment;
- the prior blocked decision remains governing;
- **Begin reassessment** becomes available;
- no launch, restart or expansion occurs.

If Rejected:

- the restriction remains;
- missing or failed evidence is identified;
- remediation returns to the owner.

### Reassess

Begin reassessment creates a new decision unit with:

- prior decision;
- prior hard stop;
- verified remediation;
- new evidence snapshot;
- changed scope or conditions;
- required participants;
- current governing restriction.

The accountable owner records a new decision. The prior decision remains historical.

## Readiness-decision interaction

### Prepare

The person moves directly among material readiness decisions. Favorable conditions may be summarized after verification. The current three governing hard stops remain prominent.

### Interpret

Each decision unit produces its own consequence. The consolidated readiness interpretation combines source consequences without averaging them.

### Request review

The readiness package shows:

- exact proposed pilot;
- current Foundation posture;
- favorable conditions;
- three hard stops;
- what may continue;
- what must stop;
- remediation;
- required specialized dispositions;
- next decision.

### Record decision

The accountable owner selects:

- Insufficient evidence
- Blocked
- Remediation required
- Approved with conditions
- Approved

For the representative slice, Blocked is the only result supported by the scenario.

### Output

The Readiness Output and leadership briefing derive from the recorded decision, evidence, hard stops and remediation.

## Later-scenario interaction

The representative prototype needs both blocked readiness and completed-pilot evaluation without pretending that one click performed months of organizational work.

### Before transition

Show:

- current blocked readiness state;
- active hard stops;
- statement that the later scenario is fictional and separate;
- hypothetical intervening events;
- statement that no real state will change.

### Transition action

Use: **Inspect the later completed-pilot scenario**

Do not use:

- Continue
- Next
- Complete remediation
- Launch pilot
- Finish pilot

### After transition

Pilot Evaluation opens with:

- later scenario label;
- completed pilot scope;
- ended pilot authority;
- frozen evidence date;
- no expansion authority;
- decision pending.

The person can return to blocked readiness without either state being overwritten.

## Evaluation interaction

### Evidence readiness

The evaluation begins by freezing evidence, checking comparability and checking completeness.

If material evidence is missing:

- evidence conclusion becomes Value not demonstrated after accountable disposition;
- value and expansion claims remain blocked;
- dimension review may continue for learning;
- missingness remains visible.

### Dimension review

Each dimension is reviewed separately.

The person sees baseline, pilot result, practical difference, evidence status, limitation, adverse evidence, reviewer disposition and decision implication.

A dimension result does not decide the overall conclusion by itself.

### Complete-system conclusion

After required dimensions and dissent are reviewed, the accountable owner chooses one evidence conclusion.

For the representative scenario, **Negative net value demonstrated** is supported.

The product must show:

- local implementation improvement;
- transferred review, correction and support work;
- complete delivery deterioration;
- quality, operational, participant and economic deterioration;
- unchanged product outcome;
- acceptable security outcome with increased control burden;
- limitations and dissent.

It must state why Mixed result is not appropriate for an overall materially worse system.

### Authority decision

After the evidence conclusion, a separate interaction asks what AI participation is permitted now.

For the representative scenario:

- restrict from Bounded Change to Assisted Work;
- prohibit state-changing AI activity;
- permit human-led analysis and AI-assisted explanation and drafting;
- prohibit expansion and favorable value claims;
- require a new evaluation and approval before Bounded Change can return.

### Investment decision

After category-owner dispositions and authority restriction, the executive sponsor chooses:

- fund bounded remediation;
- stop further investment;
- delay while the current restriction remains.

Continued Bounded Change and expansion are unavailable.

## Leadership-decision interaction

### Before the decision

Show:

- decision required;
- recommendation;
- exact scope;
- evidence conclusion;
- current authority;
- category-owner decisions;
- available options;
- consequence, cost boundary and next evidence for each option;
- material limitations and dissent.

### Record decision

The authorized leader records:

- selected option;
- rationale;
- funding boundary;
- conditions;
- owners;
- dates;
- next review;
- dissent.

### After the decision

The product shows:

- recorded investment decision;
- authority that remains unchanged;
- work funded or closed;
- next accountable decision;
- generated report status.

The report remains derived.

## Error, interruption and recovery behavior

### Validation error

- Preserve all input.
- Place a clear error summary before the affected response group.
- Move focus to the summary.
- Link each error to its field.
- Use direct correction language.
- Do not clear a selected honest uncertainty state.

### Evidence or authority conflict

- Apply the more restrictive current condition.
- Name the conflicting records and scopes.
- Block the action that requires resolved authority.
- Permit safe preparation.
- route to accountable resolution.

### Session or navigation interruption

When persistence exists:

- preserve a clear draft state;
- Resume returns to the current incomplete material decision when still current;
- stale or superseded work opens Initiative Overview with an explanation;
- browser back returns to the prior meaningful context;
- no interaction silently resubmits or reinterprets a response.

### Changed scope

A material change to team, repository, work type, data, tool, environment, SDLC activity or authority:

- identifies the changed fields;
- invalidates only dependent interpretations or approvals;
- creates a new scope version;
- requires reassessment;
- preserves the prior scope and decision.

## Keyboard and focus contract

### Navigation

After destination navigation, focus moves to the destination heading.

### Save draft

Focus remains in task context. A nonblocking confirmation is announced.

### Validation error

Focus moves to the error summary, then follows linked fields.

### Interpret response

Focus moves to the interpretation heading.

### Hard stop

Focus moves to the hard-stop heading, which contains the blocked action and scope.

### Disclosure

Opening a disclosure keeps focus on its control and makes the relationship programmatically available.

### Add or review evidence

On return, focus moves to the evidence summary or triggering evidence requirement.

### Record decision

Focus moves to the recorded decision summary.

### Later-scenario transition

Focus moves to the later-scenario heading and announcement.

### Report generation

Focus moves to the report status and decision-required heading.

No core flow requires hover, pointer precision or drag interaction.

## Interaction approval questions

1. Are Save, Interpret, Review and Decide sufficiently separate?
2. Does every action label state the organizational effect accurately?
3. Can a hard stop interrupt the task without erasing the triggering response?
4. Is verified remediation clearly separated from restart authority?
5. Are evidence conclusion, authority and investment recorded through separate interactions?
6. Does the later scenario avoid teaching false automatic progression?
7. Do Resume, browser history and changed-scope behavior preserve meaningful context?
8. Does the keyboard and focus contract support the full representative flow?
