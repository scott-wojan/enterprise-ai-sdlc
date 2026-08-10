# Representative Decision Units

## Status

Draft examples supporting [Gate 4](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/138) of the [product-recovery epic](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/131).

These three units test whether the approved product, decision, response, evidence and reporting rules can produce an experience that a human can understand and use. They define content and behavior, not visual design or platform implementation. Example names, dates and numbers are hypothetical.

## Governing models

The units apply:

- the approved [adoption, decision, risk and hard-stop model](adoption-decision-risk-model.md);
- the [response and evidence model](response-evidence-model.md);
- the [risk, tangible-value and reporting model](risk-value-reporting-model.md).

## Unit 1: Accountable sponsorship and stop authority

### Purpose

Determine whether an organization has the accountable ownership and enforceable authority required to assess or begin an AI-assisted SDLC adoption initiative.

This unit appears during Stage 1, Understand and align. Its result contributes to the adoption intent and ownership decision.

### Decision

Does an identifiable and authorized human own the enterprise investment decision, and can an authorized human pause or stop the work without relying on AI cooperation?

### Why it matters

An adoption initiative cannot be responsibly governed when nobody can answer for the investment, resolve cross-functional ownership or halt unsafe or unsupported activity. A steering group or enthusiastic leadership mandate is not a substitute for one accountable decision owner and an operational stop path.

### Accountable owner

The executive sponsor or another identifiable person with authority over the enterprise adoption intent and investment boundary.

### Required participants

- enterprise AI adoption owner;
- pilot or program lead when already identified;
- representative of the organizational authority that confirms the sponsor's mandate;
- platform or operational owner who can verify the stop mechanism;
- affected delivery and control leadership.

### What the user sees before responding

The product explains:

- the executive sponsor owns investment and direction;
- the adoption lead coordinates the work but does not replace specialized decision owners;
- a named person must be able to pause or stop the initiative;
- lack of ownership triggers HS-001;
- lack of stop authority triggers HS-002;
- predetermined success or suppression of adverse evidence blocks responsible assessment;
- the answer will appear in the adoption intent and leadership record.

### Response 1: Name the accountable investment owner

#### Prompt

Who is personally accountable for deciding whether the organization should invest in, continue, restrict or stop this adoption initiative?

#### Control

Named person and authority.

#### Required fields

- person;
- organizational role;
- authority source;
- investment scope;
- decisions this person may make;
- decisions outside this person's authority;
- effective period;
- acting or delegated status;
- evidence reference.

#### Bad written rationale

> The AI steering committee and CTO organization sponsor this strategic transformation.

#### Why it fails

- It names groups rather than one accountable human.
- It does not identify who can approve spending, reject continuation or stop the initiative.
- It does not define the scope or limit of authority.
- “Strategic transformation” does not describe a decision.

#### Good written rationale

> Maya Chen, Chief Technology Officer, owns the decision to fund, continue, restrict or stop the initial adoption program for the Digital Products division through 31 March 2027. Her authority covers the approved program budget and team participation. Security, legal, release and service owners retain decisions within their categories. The authority is recorded in the 18 August executive operating decision.

#### Why it works

- It names one person.
- It defines the decisions and organizational scope.
- It identifies the effective period.
- It states where authority ends.
- It links to evidence.

#### Minimum acceptable information

One identifiable person, exact decision authority, organizational scope, authority source and effective period.

### Response 2: Name the adoption lead

#### Prompt

Who is authorized to coordinate the adoption work, maintain its current posture and escalate or halt work when approved conditions no longer hold?

#### Control

Named person and authority.

#### Required fields

- person;
- role in the initiative;
- coordination scope;
- pause and escalation authority;
- availability or capacity;
- effective period;
- evidence reference.

#### Bad written rationale

> The architecture team will figure this out and escalate when necessary.

#### Why it fails

- No person is accountable.
- “When necessary” does not define authority or triggers.
- It does not establish that the person can stop work.
- It does not address capacity.

#### Good written rationale

> Jordan Patel, Director of Engineering Enablement, is the adoption lead for the Digital Products division pilot. Jordan may suspend pilot access, pause pilot work and call an unscheduled decision review when a hard stop, boundary breach, missing material evidence or participant-safety concern occurs. Jordan has 40 percent allocated capacity through the pilot decision date of 15 December.

#### Why it works

- It names one person and scope.
- It defines actual stop and escalation actions.
- It names trigger classes.
- It shows that the role has capacity and an effective period.

### Response 3: Verify the stop path

#### Prompt

Can an authorized person stop the affected work and enforce that stop without relying on the AI system's cooperation?

#### Control

Explicit state choice:

- yes, demonstrated;
- no;
- unknown;
- not yet established.

Not applicable is unavailable because this is a universal condition.

#### Required evidence when yes

- named person or role authorized to invoke the stop;
- technical or procedural action used;
- scope affected;
- test or exercise date;
- observed result;
- verifier;
- evidence reference;
- conditions that invalidate the result.

#### Bad evidence statement

> The pilot lead can tell everyone to stop using the tool.

#### Why it fails

- It does not prove access or activity can be stopped.
- It relies on voluntary compliance.
- It does not identify technical enforcement or affected scope.
- It provides no exercise result.

#### Good evidence statement

> On 22 August, Jordan Patel invoked the pilot stop procedure for the six pilot identities. The platform owner disabled repository access and the provider administrator disabled the workspace group. All six identities failed a permitted-read check within four minutes. Security verified the denied results and retained the access logs under evidence item EVID-STOP-004.

#### Why it works

- It describes an actual exercise.
- It identifies identities, actions, time and scope.
- It includes independent verification and evidence.
- It does not rely on AI or participant cooperation.

### Response 4: Confirm safe reporting and failure permission

#### Prompt

Can participants report adverse evidence, disagreement and failure without pressure to manufacture a successful result?

#### Control

Explicit state choice with participant evidence:

- yes, supported;
- no;
- unknown;
- not yet established.

#### Required evidence

- sponsor statement that stop and failure decisions are valid outcomes;
- confidential reporting route;
- escalation owner;
- participant onboarding evidence;
- known limitations;
- reassessment trigger.

#### Bad response

> Leadership is supportive and wants honest feedback.

#### Why it fails

- It describes an intention without a route or protection.
- It does not show that participants understand how to report.
- It provides no evidence that failure is an acceptable outcome.

#### Good response

> The executive sponsor's charter states that pause, restriction and stop are valid outcomes and that participant performance will not be evaluated from AI usage. Participants may report concerns confidentially to the pilot lead or workforce partner. Onboarding requires each participant to identify both routes. The midpoint pulse checks whether people experienced pressure to withhold adverse findings.

#### Why it works

- It defines policy, reporting routes and verification.
- It separates adoption evidence from individual performance.
- It includes an ongoing check rather than relying on a statement alone.

### Evidence package

This unit requires:

- executive authority or operating decision;
- sponsor acceptance;
- adoption-lead assignment;
- stop-path procedure;
- stop-path exercise result;
- participant reporting and protection statement;
- onboarding or awareness evidence;
- any dissent or limitation.

### Deterministic interpretation rules

- No named authorized investment and adoption decision owner triggers HS-001 and blocks approval to assess.
- No authorized person or enforceable stop path triggers HS-002 and blocks real enterprise AI-assisted work.
- “Unknown” or “not yet established” on a universal condition creates an immediate blocked result for the affected action.
- A group without one accountable human does not satisfy ownership.
- A planned stop path without an exercise does not satisfy demonstrated stop capability.
- Predetermined success or inability to report adverse evidence produces a blocked or remediation-required result depending on whether protected reporting can be established before real work.

### Provisional result example

> **Blocked: stop authority is not demonstrated.** Maya Chen is confirmed as the accountable investment owner, and Jordan Patel is assigned as adoption lead. The stop procedure has not been exercised for the proposed pilot identities. Assessment and planning may continue. Live AI-assisted pilot work must not begin. The platform owner must run and document the stop exercise by 5 September, after which the adoption owner must repeat this decision.

### What may continue

- public guidance review;
- stakeholder identification;
- assessment planning;
- creation and testing of the missing stop capability;
- evidence collection that does not authorize real AI-assisted delivery work.

### What must stop

- live AI-assisted pilot work;
- activation of participant access;
- representation that the initiative is ready to launch;
- use of a committee as the only accountable decision owner.

### Remediation created

- **Finding:** HS-002, stop capability not demonstrated.
- **Owner:** Platform owner.
- **Action:** Exercise suspension of the proposed pilot identities and verify denied access.
- **Due date:** 5 September.
- **Completion evidence:** Access-disable event, denied checks for each identity, elapsed time and independent security verification.
- **Current restriction:** No live pilot access.
- **Reassessment:** Adoption intent and ownership decision by the enterprise AI adoption owner.

### Generated adoption-intent excerpt

> **Decision required:** Authorize readiness assessment only. Do not authorize live pilot work.
>
> **Accountable sponsor:** Maya Chen, CTO, through 31 March 2027.
>
> **Adoption lead:** Jordan Patel, Director of Engineering Enablement.
>
> **Current hard stop:** The stop procedure has not been demonstrated for the proposed identities.
>
> **May continue:** Readiness assessment and stop-path remediation.
>
> **Must stop:** Pilot access and live AI-assisted delivery.
>
> **Next decision:** Reassess after security verifies the stop exercise.

## Unit 2: Baseline and complete evidence boundary

### Purpose

Determine whether the organization can compare an AI-assisted increment with a meaningful baseline across the complete affected SDLC and total material cost.

This unit appears during Stage 2, Assess readiness and baseline, and is reused during pilot design and evaluation.

### Decision

Can the organization produce evidence that supports the intended outcome claim and later continuation or expansion decision?

### Why it matters

Local activity data can make adoption appear successful while review, testing, security, release, operations, rework or total cost become worse. A pilot cannot support a value or expansion claim when the comparison boundary or material evidence is missing.

### Accountable owner

The pilot measurement accountable owner, with product, delivery, quality, security, service and finance owners accountable for their evidence categories. The enterprise AI adoption owner makes the resulting gate decision.

### Required participants

- product or business outcome owner;
- delivery or value-stream owner;
- measurement owner;
- finance owner;
- quality and security owners;
- release and service owners;
- participant representative;
- independent reviewer.

### What the user sees before responding

The product explains:

- the intended outcome must be specific and observable;
- the comparison must begin before the AI-assisted activity and end after material downstream effects;
- costs include more than licenses and tokens;
- material missing evidence produces “value not demonstrated”;
- no meaningful baseline triggers HS-009 for an outcome-evaluated pilot;
- missing downstream evidence triggers HS-010 for value and expansion;
- missing total cost triggers HS-011 for economic and expansion claims;
- absent independent challenge triggers HS-012 for final success or expansion approval;
- a separately approved learning exercise remains possible but cannot prove value.

### Response 1: Define the intended outcome

#### Prompt

What exact product, customer, service, risk-reduction or business outcome should this AI-assisted use case improve?

#### Control

Short written rationale supported by scoped selections.

#### Structured fields

- product or service;
- work type;
- affected users or stakeholders;
- start of delivery boundary;
- end of delivery boundary;
- intended observable improvement;
- material guardrails;
- proposed decision date.

#### Bad response

> Improve developer productivity and deliver more stories with AI.

#### Why it fails

- It does not identify the work or affected system.
- It treats story volume as value.
- It does not define start and end points.
- It ignores downstream effort, quality, security, operations and cost.
- It cannot support a continue or stop decision.

#### Good response

> For authentication defect corrections in Service A, determine whether AI assistance reduces total elapsed time and human effort from accepted defect through 14 days after production release. Include analysis, implementation, review, security checking, testing, release, early production support and rework. Do not treat the result as successful if escaped defects, security findings, code churn, change failure, review burden or total delivery cost materially increase.

#### Why it works

- It names the work and system.
- It defines the complete comparison boundary.
- It includes downstream activities.
- It identifies constraints that local speed cannot offset.
- It supports baseline and evidence design.

### Response 2: Define the eligible cohort

#### Prompt

Which work will be included and excluded from the comparison?

#### Control

Scoped entity and work-type selection with inclusion and exclusion rules.

#### Required fields

- team;
- service or repository;
- work type;
- risk class;
- intake criteria;
- completion criteria;
- exclusions and reason;
- incomplete-work treatment;
- minimum observation needed for the decision, justified by variation rather than a universal count.

### Response 3: Define the baseline

#### Prompt

What evidence represents comparable work before AI participation?

#### Control

Evidence references plus bounded dates, cohort and method.

#### Required fields

- baseline period;
- source systems;
- query, report or calculation version;
- eligible cohort count;
- work-mix and risk distribution;
- observed variation;
- missingness;
- material process or staffing changes;
- owner;
- independent reproduction status;
- limitations.

#### Explicit state

- baseline verified;
- baseline available but limited;
- not yet established;
- unavailable;
- disputed.

### Response 4: Select affected SDLC activities

#### Prompt

Which delivery activities may gain or absorb work because of this use case?

#### Control

Multiple selection from:

- product discovery and planning;
- requirements and analysis;
- architecture and design;
- implementation;
- testing and quality engineering;
- security and compliance;
- release and change management;
- production operations;
- incident response and organizational learning.

For every selected activity, identify evidence owner, source, measure or observation and collection period.

The product must also ask whether any unselected activity could plausibly receive transferred effort or risk. A “yes” expands the evidence boundary or requires accountable justification for exclusion.

### Response 5: Define outcome and guardrail evidence

#### Prompt

What evidence will show intended benefit and detect deterioration elsewhere?

#### Control

Repeated measure definitions by dimension.

#### Required fields for each measure

- dimension;
- question the measure answers;
- unit;
- population and denominator;
- source;
- calculation;
- baseline;
- direction of improvement;
- predeclared material-change or guardrail rule;
- collection cadence;
- owner;
- limitations;
- decision use.

Usage may be included only as diagnostic context and must be labeled accordingly.

### Response 6: Define total cost

#### Prompt

Which costs must be included to determine whether the use case creates tangible saved value?

#### Control

Multiple cost categories with currency, period, allocation and source.

#### Required categories

- tokens and model consumption;
- licenses;
- infrastructure;
- integration;
- enablement and training;
- review and approval;
- verification and controls;
- correction and rework;
- support;
- governance and audit;
- incidents and recovery;
- opportunity cost;
- fixed and variable allocation.

Each material category has one state:

- source verified;
- estimated with supported range;
- immaterial with accountable rationale;
- unknown;
- not yet established.

#### Bad cost response

> Copilot costs $39 per user per month, so the pilot costs $2,340.

#### Why it fails

- It includes only a license price.
- It omits tokens or additional services when applicable.
- It omits integration, enablement, review, rework, support and governance.
- It does not state the period or allocation clearly.
- It cannot support a net-value claim.

#### Good cost response

> The 12-week comparison includes $2,340 in allocated licenses, an estimated $1,100 to $1,600 in model consumption, $18,400 in one-time integration and enablement, sampled review and correction effort at approved loaded labor rates, platform-support tickets, security review, evidence administration and any incident or recovery work. One-time learning cost is shown separately but remains part of total pilot cost. Finance owns the allocation method and will reconcile actual provider and labor records before the decision.

#### Why it works

- It includes the material cost boundary.
- It distinguishes actual, estimated, fixed and learning cost.
- It identifies sources and owner.
- It preserves uncertainty rather than hiding it.

### Response 7: Name independent challenge

#### Prompt

Who will independently review the evidence, limitations and proposed value conclusion?

#### Control

Named person and authority with independence declaration.

#### Required fields

- reviewer;
- relevant competence;
- organizational relationship to pilot performers and sponsor;
- evidence access;
- conflicts;
- review scope;
- review date.

The reviewer does not need to be organizationally external. The reviewer must not be the only producer or sponsor of the work being evaluated.

### Response 8: Record confounders and comparison limits

#### Prompt

What else changed that could materially affect the comparison?

#### Control

Structured confounder list with short rationale.

Potential categories include:

- staffing;
- work mix;
- process;
- architecture;
- testing;
- release cadence;
- seasonality;
- reporting behavior;
- concurrent tools;
- policy;
- demand;
- organizational change.

Each item records likely effect, evidence, treatment and remaining limitation.

### Evidence package

This unit requires:

- outcome and scope definition;
- baseline source and reproducibility evidence;
- SDLC activity and downstream-effect map;
- measure definitions and guardrails;
- total-cost plan;
- data-access and reliability results;
- confounder record;
- independent-review assignment;
- product, delivery, finance and measurement dispositions.

### Deterministic interpretation rules

- Unavailable or materially unreliable baseline triggers HS-009 for an outcome-evaluated pilot.
- Material downstream activities without an evidence source trigger HS-010 for value, expansion and standardization claims.
- Material cost categories that are unknown trigger HS-011 for economic-benefit, savings, productivity, expansion and standardization claims.
- No qualified independent challenge triggers HS-012 for final success, advancement, expansion and standardization approval.
- Diagnostic usage does not satisfy an outcome or value measure.
- “Immaterial” requires rationale and accountable review.
- A baseline from a different work type, team or boundary is limited until applicability is demonstrated.

### Provisional result example

> **Value evidence is not ready.** The authentication-defect baseline and implementation, review, test and security sources are verified. Production-support effort is not attributable to the pilot cohort, and enablement, governance and support costs are not yet included. HS-010 and HS-011 block an outcome-evaluated pilot, value claim and expansion decision. A time-boxed measurement-discovery exercise may proceed only if separately approved with no success or expansion claim.

### What may continue

- remediation of data lineage and cost capture;
- baseline validation;
- a separately authorized technical-feasibility or measurement-discovery exercise;
- public guidance and pilot design that do not represent value readiness.

### What must stop

- outcome-evaluated pilot launch under the current plan;
- productivity, savings or return-on-investment claims;
- expansion based on local speed or usage;
- use of missing data as a favorable result.

### Remediation created

#### Production-support linkage

- **Owner:** Service measurement owner.
- **Action:** Link support and incident records to the eligible defect cohort through 14 days after release.
- **Completion evidence:** Reproducible linkage report, missingness analysis and independent sample review.
- **Current restriction:** No tangible-value or expansion conclusion.
- **Reassessment:** Baseline and evidence-boundary decision.

#### Total-cost completion

- **Owner:** Finance owner.
- **Action:** Add enablement, governance, review, support and opportunity-cost allocation to the pilot cost plan.
- **Completion evidence:** Versioned calculation, source reconciliation, assumptions and finance approval.
- **Current restriction:** No savings or economic-benefit claim.
- **Reassessment:** Baseline and evidence-boundary decision.

### Generated readiness excerpt

> **Decision:** Remediation required before an outcome-evaluated pilot.
>
> **Evidence available:** Comparable defect baseline; implementation, review, testing and security sources.
>
> **Material gaps:** Production-support attribution and complete cost boundary.
>
> **Value conclusion available:** None. Value has not been evaluated.
>
> **May continue:** Evidence remediation and a separately approved learning exercise.
>
> **Must stop:** Value claims, expansion and outcome-evaluated launch.
>
> **Next decision:** Reassess when service and finance owners verify the missing evidence.

## Unit 3: Pilot or increment evaluation

### Purpose

Compare a completed pilot or operating increment with its approved baseline across the full delivery system and produce a defensible recommendation and decision request.

This unit appears during Stage 6, Evaluate and decide, and is reused for later operating reviews.

### Decision

What does the complete evidence support for the exact scope, and should the organization stop, remediate, continue, restrict or consider one bounded expansion?

### Why it matters

A credible decision must reconcile intended outcome, complete delivery effort, quality, security, operations, team sustainability and total cost. It cannot begin with a desired conclusion or use one favorable metric to conceal deterioration elsewhere.

### Accountable owner

The enterprise AI adoption owner makes the scoped adoption decision. The executive sponsor owns continued investment. Product, quality, security, finance, release, service and other category owners decide within their authority.

### Required participants

- executive sponsor;
- enterprise AI adoption owner;
- pilot or program lead;
- product or business outcome owner;
- delivery and engineering owner;
- quality owner;
- security and compliance owners;
- release and service owner;
- measurement and finance owners;
- participant representative;
- independent reviewer.

### What the user sees before responding

The product explains:

- evidence is frozen to a versioned snapshot before interpretation;
- baseline and pilot cohorts must be comparable;
- every material dimension is interpreted separately;
- hard stops and guardrails are applied before benefits;
- total cost includes transferred and downstream effort;
- adverse and dissenting evidence remains visible;
- AI may assemble a draft but cannot select the evidence conclusion or decision;
- positive net value creates eligibility for a decision, not automatic expansion.

### Response 1: Fix the evaluation scope and snapshot

#### Control

Scoped entity selections, dates and evidence-package reference.

#### Required fields

- work and decision identifier;
- exact team, product, service, repository and work type;
- adoption posture and authority version;
- baseline version;
- pilot or operating period;
- eligible cohort;
- evidence-package version;
- dataset freeze time;
- included and excluded records;
- missingness;
- changes from the approved plan.

### Response 2: Evaluate comparability

#### Prompt

Are baseline and observed work comparable enough to support the proposed claim?

#### Control

Explicit state choice:

- yes;
- yes, with limitations;
- no;
- unknown;
- disputed.

#### Required supporting fields

- work-mix comparison;
- staffing changes;
- process and tool changes;
- architecture or test changes;
- demand and seasonality;
- reporting changes;
- exclusions;
- confounder treatment;
- reviewer disposition.

“No” or material unknown comparability produces value not demonstrated for the affected claim.

### Response 3: Review evidence completeness

#### Control

Evidence readiness by required category.

For each category, show:

- required evidence;
- verified items;
- limited, stale, rejected or missing items;
- owner;
- impact on conclusion;
- remediation if possible.

The unit cannot proceed to a final positive or negative net-value conclusion when a material result cannot be evaluated reliably. Confirmed serious harm may still require a negative or stop decision even when other evidence is incomplete.

### Response 4: Interpret each outcome dimension

#### Control

Repeated dimension result.

For each dimension, capture:

- baseline;
- observed result;
- absolute and relative difference when meaningful;
- count, denominator and distribution when applicable;
- practical significance;
- predeclared guardrail;
- improved, no material change, deteriorated, unknown or not applicable;
- confidence and limitations;
- owner disposition;
- decision implication.

### Hypothetical observed evidence

The following example uses one bounded implementation pilot:

- implementation effort falls from 18 to 11 hours per change;
- review and correction effort rises from 6 to 15 hours;
- test-maintenance effort adds 3 hours per change;
- 30-day code churn rises from 9 percent to 21 percent;
- escaped defects rise from 1 in 40 changes to 4 in 38 changes;
- two changes create on-call work absent from the baseline;
- token and tool cost adds $74 per completed change;
- product outcome and release frequency show no material improvement;
- participant reports identify unsustainable review load.

These values are illustrative. They are not universal thresholds or expected results.

### Dimension interpretations for the example

#### Product and business outcome

**Result:** No material change.

The work produced no demonstrated improvement in user outcome or release frequency.

#### Delivery flow and human effort

**Result:** Deteriorated across the complete path.

Seven implementation hours were saved, but review, correction and test-maintenance effort increased by 12 hours. Local implementation speed is favorable; total measured human effort is not.

#### Quality and maintainability

**Result:** Deteriorated.

Escaped defects and 30-day churn increased materially against predeclared guardrails.

#### Security and control

**Result:** No material change, with a limitation.

Required controls operated, but the sample is too small to claim security improvement.

#### Release and operations

**Result:** Deteriorated.

Two linked changes created additional on-call work.

#### Team experience and capability

**Result:** Deteriorated.

Review burden exceeded the planned capacity, and participants reported the work was not sustainable.

#### Economics

**Result:** Deteriorated.

Higher total human effort and additional AI cost increased total cost per eligible completion.

### Response 5: Record adverse and dissenting evidence

#### Prompt

What evidence argues against the leading interpretation or recommendation?

#### Control

Structured evidence references and short rationale.

The product must permit multiple positions and must not allow the report author to remove dissenting evidence from the decision package.

#### Good response

> The delivery owner notes that three of the 38 pilot changes involved unfamiliar components, which may explain part of the review increase. The independent reviewer confirmed that excluding those three changes still leaves total review and correction effort above baseline and does not remove the defect or churn deterioration. The limitation narrows confidence in the exact size of the effect but does not change the conclusion.

#### Why it works

- It states the competing explanation.
- It tests rather than dismisses it.
- It explains how the limitation changes confidence and decision.

#### Bad response

> Some changes were harder than usual, but the team generally felt faster.

#### Why it fails

- It has no source or quantification.
- It does not test comparability.
- It uses sentiment to override measured downstream results.

### Response 6: Select the evidence conclusion

#### Control

Human-reviewed single selection from the approved Gate 3 conclusions.

The product applies these constraints:

- material missing baseline, downstream, total-cost, guardrail or independent-review evidence permits only value not demonstrated;
- evidence of unacceptable harm or materially negative complete-system outcome requires negative net value or mixed result with a restrictive decision;
- complete evidence with no meaningful improvement permits no material net improvement;
- positive net value requires intended outcome or equivalent value, full-SDLC and cost evidence, acceptable guardrails and independent support;
- material benefits and material deterioration that cannot be responsibly reduced to one conclusion require mixed result;
- the accountable owner records the final selection and rationale.

#### Example conclusion

**Negative net value demonstrated.**

The local implementation improvement is outweighed by higher complete-path effort, defects, churn, operational work, participant burden and total cost.

### Response 7: Choose the recommendation

#### Control

Human recommendation selection:

- stop AI use for the exact scope;
- pause and investigate;
- remediate and reassess;
- restrict scope or authority;
- continue exact scope;
- continue with conditions;
- evaluate one bounded expansion;
- standardize as a governed workflow when the later stage applies.

The available choices are constrained by the evidence conclusion, hard stops, category decisions and current adoption posture.

For the example, continue, expand and standardize are unavailable while the negative result remains.

### Response 8: Record the decision rationale

#### Prompt

What action should the organization take, for what exact scope, based on which evidence and limitations?

#### Control

Structured decision fields plus short written rationale.

#### Bad response

> The pilot had mixed results, so we should optimize the process and keep moving forward carefully.

#### Why it fails

- It understates a negative complete-system result.
- It does not identify scope, authority or action.
- “Optimize” and “carefully” are not operational consequences.
- It does not say what stops or how reassessment occurs.

#### Good response

> Restrict authentication defect corrections for Team A from Bounded Change to Assisted Work. Do not expand the use case. Although implementation effort fell by seven hours per change, total review, correction and test-maintenance effort increased by five hours, escaped defects and churn exceeded the approved guardrails, two changes added on-call work and total cost increased. Read-only analysis and drafting may continue under the Assisted Work grant. The team must remediate specifications, change size, deterministic checks and reviewer capacity, then run a new baseline-aligned evaluation before Bounded Change can be reconsidered.

#### Why it works

- It names exact scope and authority change.
- It states the full-system evidence.
- It does not hide adverse results.
- It says what may continue and what must stop.
- It defines remediation and reassessment.

### Response 9: Obtain category decisions

#### Control

Authenticated human decision control for each applicable category.

The package routes exact evidence and proposal versions to:

- product owner;
- quality owner;
- security owner;
- service owner;
- finance owner;
- AI adoption owner;
- executive sponsor for investment.

Each owner may approve within authority, approve with conditions, reject or escalate. The most restrictive applicable decision governs unresolved overlap.

### Evidence package

This unit requires:

- frozen baseline and observed dataset;
- comparability and confounder review;
- complete dimension results;
- total-cost reconciliation;
- control and incident evidence;
- participant evidence;
- adverse and dissenting evidence;
- independent review;
- proposed evidence conclusion;
- alternatives;
- category decisions;
- technical implementation of the final decision.

### Deterministic interpretation rules

- Open HS-007 through HS-012 block affected value and expansion decisions.
- A failed hard stop or guardrail remains individually visible and cannot be averaged away.
- Missing material evidence produces value not demonstrated, not no material change.
- Negative net value makes expansion and standardization unavailable.
- Positive net value does not make expansion automatic.
- A recommendation cannot exceed the authority of its approver.
- A scope or evidence change after approval invalidates the affected decision.

### Provisional result example

> **Negative net value demonstrated. Restriction recommended.** Implementation was faster, but the complete delivery path required more human effort and cost while defects, churn, operations and reviewer sustainability deteriorated. Bounded Change and expansion must stop for this work type. Assisted Work may continue under its existing boundary while owned remediation is completed.

### What may continue

- read-only analysis and drafting under a valid Assisted Work grant;
- root-cause analysis;
- remediation of specifications, context, batch size, checks and reviewer capacity;
- evidence collection for a new evaluation.

### What must stop

- Bounded Change for this work type;
- expansion to another team, repository, work type or authority;
- productivity, savings or success claims;
- reliance on the prior approval for restart.

### Remediation created

- **Specification owner:** Define smaller defect-correction batches with explicit acceptance and security criteria.
- **Engineering-control owner:** Add deterministic checks for the defect patterns found during review and after release.
- **Context owner:** Correct missing service and test guidance that caused repeated review findings.
- **Delivery owner:** Restore sustainable reviewer capacity and define a maximum work-in-review limit.
- **Measurement owner:** Preserve the same complete delivery boundary for reassessment.

Each item has a due date, completion evidence, verifier and current restriction. Verified completion permits a new readiness and authority decision. It does not restore Bounded Change automatically.

### Generated tangible-value excerpt

> **Evidence conclusion:** Negative net value demonstrated.
>
> **Intended outcome:** Reduce complete-path effort and elapsed time for authentication defect corrections without unacceptable deterioration.
>
> **Observed result:** Implementation effort improved. Total review, correction and test-maintenance effort increased. Escaped defects, code churn, on-call work, participant burden and total cost worsened. Product outcome and release frequency did not materially improve.
>
> **Claim limit:** The evidence applies only to Team A, Service A authentication defect corrections and the approved pilot period.

### Generated leadership briefing excerpt

> **Decision required now:** Restrict the pilot from Bounded Change to Assisted Work and fund remediation, or stop the use case.
>
> **Recommendation:** Restrict and remediate. Do not expand.
>
> **Why:** Local implementation speed improved, but the complete delivery system became slower in human effort, more expensive and less reliable.
>
> **May continue:** Read-only analysis, drafting and remediation under the existing Assisted Work boundary.
>
> **Must stop:** AI-authored repository changes for this work type, expansion and success or productivity claims.
>
> **Leadership options:** Approve remediation within the current budget and review on 15 February; stop the use case; or propose a narrower alternative for a new risk and evidence decision.
>
> **Required category decisions:** Quality, service, finance and AI adoption owners must approve the restriction and remediation plan within their authority.

## Cross-unit behavior

These units must share canonical records rather than ask the user to retype the same information.

- Unit 1 supplies sponsor, adoption lead, authority and stop-path information to later charters and reports.
- Unit 2 supplies outcome, scope, baseline, evidence and cost definitions to pilot design and Unit 3.
- Unit 3 uses exact versions from Units 1 and 2 and triggers reassessment when those records changed.
- A role-specific view may emphasize different fields but must not create a separate answer.
- An exported report must link to the governing response, evidence and decision versions.

## Gate 4 representative-unit approval questions

Approval requires agreement that:

1. Each unit explains purpose and consequence before asking for information.
2. Structured controls replace blank text areas wherever possible.
3. Typed responses include realistic good and bad examples.
4. Evidence requirements are specific enough to verify.
5. Deterministic rules produce safe immediate consequences without replacing human decisions.
6. Hard stops state what may continue and what must stop.
7. Remediation is owned, testable and linked to reassessment.
8. Generated output excerpts are understandable to teams and leadership.
9. The three units demonstrate the complete Gate 4 model without selecting a visual design or platform.
