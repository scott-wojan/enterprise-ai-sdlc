# Gate 6.1 Adoption Lifecycle

## Status

Approved by the product owner under [Gate 6.1](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/147) on 11 August 2026.

[DEC-UX-002](decisions/0002-adoption-initiative-product-model.md) is the accepted architecture decision.

This document defines how people and records move through the complete adoption journey. It does not prescribe a wizard, page order, navigation pattern or platform workflow.

## Governing lifecycle rule

The nine stages are a decision sequence, not a maturity contest and not a page-completion checklist.

Organizations may enter at different stages, revisit earlier stages and operate multiple adoption increments at different stages. Direct entry never removes a governing prerequisite.

## Three levels of lifecycle work

### Initiative-level work

Initiative-level work establishes:

- enterprise intent;
- accountable ownership;
- investment boundary;
- shared policy and control context;
- common readiness conditions;
- shared evidence capability;
- portfolio-level leadership decisions.

It persists across individual pilots.

### Increment-level work

Increment-level work selects, designs, prepares, operates and evaluates one exact bounded change in AI participation.

A first pilot, repeat pilot or bounded expansion is an increment.

Each increment has its own scope, proposal, decisions, evidence, risks, authority and lifecycle state.

### Practice-level work

Practice-level work governs AI-enabled activity accepted into normal operation.

It includes operating ownership, monitoring, controls, support, evidence, cost, periodic review, restriction and retirement.

## Stage 1: Understand and align

### Purpose

Determine whether there is an accountable enterprise reason and decision structure for assessing AI adoption.

### Primary scope

Adoption initiative.

### Decision

Is there a real problem, accountable intent and authorized ownership for proceeding?

### Required result

- stated enterprise problem or mandate;
- intended outcome;
- executive sponsor;
- enterprise AI adoption owner;
- investment and cost boundary;
- affected stakeholders;
- decision rights;
- permission to report adverse evidence;
- enforceable permission to stop.

### Possible paths

- Approved to assess
- Approved with conditions
- Remediation required
- Blocked
- Initiative stopped before assessment

### Return trigger

The initiative returns here when ownership, investment intent or enterprise purpose changes materially.

## Stage 2: Assess readiness and establish baselines

### Purpose

Determine whether an exact scope has enough organizational, team, engineering, context, control, evidence and measurement capability to consider real AI-assisted delivery work.

### Primary scope

Initiative and candidate scope.

### Decision

Is the proposed scope ready to select opportunities, restricted, in need of remediation, unsupported by evidence or blocked?

### Required result

- current authorized AI participation;
- readiness decision;
- complete affected delivery boundary;
- meaningful baseline;
- total-cost boundary;
- risk and evidence-gap register;
- restrictions;
- owned remediation;
- reassessment triggers.

### Possible paths

- Proceed to opportunity selection within the authorized posture
- Proceed with conditions
- Continue foundation work only
- Remediate and reassess
- Insufficient evidence
- Block real work
- Stop the initiative or scope

### Return triggers

Return when:

- baseline or evidence capability changes;
- an operating boundary changes materially;
- a hard stop or incident undermines readiness;
- a new opportunity needs capabilities outside the assessed scope;
- downstream effects or costs cannot be observed.

## Stage 3: Select opportunities

### Purpose

Determine whether a specific problem is appropriate and worthwhile for the current posture and evidence capability.

### Primary scope

Opportunity or use case.

### Decision

Is the proposed work valuable, bounded, controllable, verifiable and measurable enough to pursue?

### Required result

- problem and affected work;
- intended user or business outcome;
- alternatives to AI;
- suitability and reversibility;
- context, tool and authority needs;
- complete delivery boundary;
- evidence feasibility;
- expected cost;
- selection or rejection rationale.

### Possible paths

- Select for increment design
- Select a narrower opportunity
- Hold for remediation
- Reject AI use
- Reject because the work is not worth pursuing
- Return to readiness because prerequisites are missing

### Return trigger

A material change in work type, expected outcome, context, tool, authority or evidence feasibility requires reselection.

## Stage 4: Design the first adoption increment

### Purpose

Turn a selected opportunity into an exact, bounded, measurable and reversible proposal.

### Primary scope

Adoption increment.

### Decision

Is the proposed increment ready for technical and organizational preparation?

### Required result

- approved hypothesis;
- exact scope;
- participants and owners;
- current and proposed AI participation;
- operating boundary;
- validation and approval plan;
- full-SDLC evidence plan;
- total-cost plan;
- support and escalation;
- stop, containment, recovery and restart conditions;
- decision date and expiry;
- approved or rejected charter.

### Possible paths

- Approved for preparation
- Approved for preparation with conditions
- Narrow and redesign
- Remediate and resubmit
- Insufficient evidence
- Block
- Close without proceeding

### Return triggers

Any material proposal or scope change creates a new version and repeats the affected readiness and design decisions.

## Stage 5: Prepare and run

This stage has separate launch and operating decisions. Preparing the increment does not authorize launch.

### Preparation

#### Purpose

Implement and demonstrate the approved organizational and technical conditions.

#### Required result

- authority and access configured;
- required controls operating;
- participants onboarded;
- baseline frozen;
- evidence capture operating;
- total-cost tracking operating;
- support route working;
- stop, revocation and recovery path demonstrated;
- required approvals current.

#### Possible paths

- Ready for accountable launch decision
- Remediation required
- Insufficient evidence
- Blocked

### Launch decision

#### Decision

May this exact increment begin real work?

#### Possible paths

- Launch
- Launch with conditions
- Continue preparation only
- Block launch
- Close without proceeding

A system showing all preparation tasks complete does not grant launch authority.

### Controlled operation

#### Purpose

Operate within the approved scope while preserving evidence and stop capability.

#### Required result

- scope and authority use recorded;
- control results recorded;
- quality, review and rework observed;
- incidents and exceptions recorded;
- costs and participant experience observed;
- evidence gaps and changes identified;
- weekly or event-driven health decisions recorded.

#### Possible paths

- Continue
- Continue with conditions
- Adjust within approved bounds
- Pause
- Restrict
- Roll back posture
- Stop
- Complete increment and freeze evaluation snapshot

### In-flight stop path

When a hard stop or unacceptable condition occurs:

1. stop the affected action;
2. contain access and downstream effects;
3. preserve evidence;
4. identify affected and uncertain scope;
5. notify accountable owners;
6. reduce or revoke authority when required;
7. create remediation or close without proceeding;
8. require verification and a new restart decision.

Completing remediation does not restart work.

## Stage 6: Evaluate and decide

### Purpose

Determine what the complete evidence supports for the exact increment and what should happen next.

### Primary scope

Completed or stopped adoption increment.

### Entry requirement

The product must identify an explicit evidence snapshot and observation period. Navigating to the stage does not simulate completion of enterprise work.

### Evidence review

Evaluate separate dimensions:

- product or business outcome;
- complete delivery flow and total human effort;
- quality and maintainability;
- security and control;
- release and operations;
- team experience and capability;
- economics and total material cost.

Local implementation speed remains visible but cannot stand in for the complete result.

### Evidence conclusion

Record one:

- Value not evaluated
- Value not demonstrated
- Negative net value demonstrated
- No material net improvement demonstrated
- Positive net value demonstrated
- Mixed result

### Accountable decision

After the evidence conclusion and required category decisions, accountable humans choose:

- stop;
- remediate and reassess;
- continue the current scope;
- restrict;
- roll back to a less permissive posture;
- close without expansion;
- make the scope eligible for one bounded next increment.

The evidence conclusion does not make this decision automatically.

### Possible paths

- Stop the use case
- Restrict AI participation
- Fund remediation
- Continue current bounded scope
- Repeat a comparable increment
- Consider one bounded expansion
- Return to readiness because evidence capability failed

## Stage 7: Expand incrementally

### Purpose

Decide whether one bounded dimension may change while preserving separable evidence and control.

### Primary scope

Proposed next adoption increment.

### One-dimension rule

A proposed increment may change one material dimension such as:

- use case;
- team;
- repository;
- data class;
- tool;
- SDLC activity;
- environment;
- duration;
- AI authority.

Bundled material changes require separation or an explicit reason why effects remain distinguishable.

### Decision

Is the next bounded increment independently justified and ready?

### Possible paths

- Approve one bounded increment
- Approve with conditions
- Continue unchanged
- Repeat current scope for more evidence
- Remediate
- Restrict
- Reject expansion
- Stop

Positive evidence for one scope does not authorize expansion by itself.

## Stage 8: Govern and integrate

### Purpose

Determine whether a proven practice should become a repeatable part of normal delivery for an exact scope.

### Primary scope

Proposed governed practice.

### Decision

Has the practice earned repeatable inclusion in the organization's operating system?

### Required result

- repeated evidence across relevant variation;
- stable ownership;
- repeatable workflow;
- explicit authority and human decision points;
- durable controls and evidence;
- support capacity;
- cost management;
- training;
- incident learning;
- recovery;
- periodic review.

### Possible paths

- Standardize as a governed practice
- Standardize with conditions
- Continue as a limited increment
- Remediate
- Restrict
- Retire

A practice that depends on heroic individuals or unsustainable manual review is not ready for integration.

## Stage 9: Operate and improve

### Purpose

Continuously determine whether a governed practice should continue, change, reduce, pause, return to an earlier posture or retire.

### Primary scope

Governed practice and affected initiative.

### Required observation

- current outcomes and total cost;
- control health;
- incidents and near misses;
- model, tool and policy change;
- context and evidence quality;
- support load;
- participant experience;
- exceptions;
- changing business relevance.

### Possible paths

- Continue
- Improve within current bounds
- Continue with conditions
- Create a bounded improvement increment
- Reduce scope or posture
- Pause
- Return to an earlier journey stage
- Retire

Operation does not create permanent authorization. Expiry, material change, declining value or control drift requires a new decision.

## Parallel and repeated work

### Multiple increments

One initiative may contain:

- Pilot A in evaluation
- Pilot B in design
- a remediating increment in preparation
- one governed practice in operation

The interface must not represent the initiative as having one universal journey stage.

It may show:

- initiative-level current priorities;
- each increment's current stage and work status;
- open initiative-wide blockers;
- the next accountable decisions.

### Shared conditions

Organization or initiative-level evidence, controls and policies may support several increments.

They remain reusable only when:

- their exact scope includes the new increment;
- they are current;
- no material change invalidates them;
- the applicable decision permits reuse.

A shared hard stop may block several increments. A local hard stop must not be shown as organization-wide unless its declared scope supports that conclusion.

### Reassessment

A scope re-enters an earlier decision when:

- remediation is verified;
- approval expires;
- scope, data, tool, model, environment, participant or authority changes;
- evidence or baseline changes materially;
- an incident or repeated failure occurs;
- review, support or participation becomes unsustainable;
- a category owner changes a consequential disposition.

Reassessment creates a new decision. It does not rewrite the historical record.

## Gate 6 representative lifecycle

The prototype uses two explicitly different points in time.

### Readiness scenario

- Initiative established
- First pilot proposed
- Stage 2 readiness work active
- Foundation posture for the exact scope
- Stop path not demonstrated
- Downstream support evidence not observable
- Total material cost incomplete
- Real pilot work blocked
- Remediation allowed

### Explicit elapsed organizational boundary

The prototype states that people later:

1. demonstrated the stop path;
2. established support attribution;
3. completed total-cost tracking;
4. verified remediation;
5. recorded new readiness and launch decisions;
6. ran the bounded pilot;
7. completed the downstream observation period;
8. froze a new evidence snapshot.

A click does not perform or approve these actions.

### Completed-pilot scenario

- Same initiative and opportunity
- Completed first pilot
- Stage 6 evaluation active
- Bounded Change was authorized only for the completed period
- Complete evaluation produces negative net value
- Accountable owners restrict future activity to Assisted Work
- Leadership decides whether to fund remediation or stop the use case
- No expansion is permitted

## Lifecycle decisions requiring product-owner approval

1. The initiative may contain several increments in different stages.
2. “Current journey stage” always names its scope instead of becoming one global progress label.
3. Direct entry checks prerequisites but does not force users through earlier pages.
4. Stage completion never grants authority.
5. A material change or verified remediation creates reassessment rather than editing history.
6. The Gate 6 time boundary represents elapsed human work and decisions, not application navigation.
