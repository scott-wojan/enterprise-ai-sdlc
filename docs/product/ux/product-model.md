# Gate 6.1 Product Model

## Status

Approved by the product owner under [Gate 6.1](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/147) on 11 August 2026.

[DEC-UX-002](decisions/0002-adoption-initiative-product-model.md) is the accepted architecture decision.

This document defines the durable concepts people must be able to understand and navigate. It is not a database schema, platform decision, navigation design or visual specification.

[DEC-UX-002](decisions/0002-adoption-initiative-product-model.md) records the proposed architecture decision.

## Product model in one sentence

The public playbook explains the complete adoption journey, and the adoption workspace helps an organization manage one adoption initiative containing opportunities, bounded adoption increments, evidence, risks, remediation and accountable decisions over time.

## Connected product surfaces

### Public playbook

The public playbook is open guidance.

It helps a reader:

- understand why responsible AI adoption involves more than selecting a tool;
- recognize the enterprise problems the product addresses;
- explore the nine-stage adoption journey;
- understand AI use across the complete SDLC;
- understand who participates and what each role owns;
- understand evidence, tangible value, risk and stopping;
- choose an appropriate starting point;
- understand what organizational work will require before entering the workspace.

Public guidance contains no organization-specific decision record and does not require a workspace.

### Apply transition

Apply the Playbook is the informed boundary between reading and organizational work.

Before creating or resuming work, it explains:

- the decision the organization is about to make;
- the expected output;
- the exact scope that will be recorded;
- the people who must participate;
- the evidence required;
- how hard stops and restrictions work;
- what may be saved or exported;
- that entering information and completing screens do not grant authority.

### Adoption workspace

The workspace applies the playbook to a named adoption initiative.

It contains the durable record of:

- enterprise intent and ownership;
- opportunities considered;
- selected and rejected use cases;
- current and proposed AI participation;
- adoption increments;
- exact scopes and operating boundaries;
- material decisions and their evidence;
- risks, hard stops and remediation;
- incidents, pauses and restart decisions;
- full-SDLC and total-cost evaluation;
- leadership investment decisions;
- bounded next increments;
- governed practices and ongoing review.

The workspace is not a pilot-only application. A pilot is one kind of adoption increment inside it.

## Durable concept hierarchy

### Organization

The organization is the enterprise, business unit, client or other accountable boundary sponsoring adoption.

It owns one or more adoption initiatives.

The organization provides:

- executive authority;
- policy and control context;
- investment boundary;
- shared participants;
- common platforms and constraints.

An organization-level statement does not automatically authorize work in every initiative, team or repository.

### Adoption initiative

The adoption initiative is the durable workspace container.

It represents a connected enterprise effort with:

- a stated reason for adoption;
- an executive sponsor;
- an enterprise AI adoption owner;
- an investment and decision boundary;
- affected business and technology areas;
- shared evidence and control context;
- one or more opportunities and adoption increments;
- a history of decisions and leadership outcomes.

An initiative can continue after one pilot is completed, restricted or stopped.

An organization may have more than one initiative when the purpose, accountable ownership or decision boundary is materially different. Gate 6 represents one initiative only and does not decide how future platforms separate organizations or tenants.

### Exact scope definition

Every consequential record binds to an exact, versioned scope.

A scope identifies the applicable:

- organization or business boundary;
- adoption initiative;
- team and participant group;
- product, service, repository, component or workflow;
- SDLC activity;
- work type and expected frequency;
- data and context classes;
- AI identity or system class;
- tools and permitted actions;
- environment and downstream effects;
- current AI participation;
- proposed change;
- effective period and review triggers.

Scope is a first-class concept because an approval, restriction, evidence conclusion or positive result for one scope does not apply to another.

Material scope change creates a new version and requires reassessment.

### Opportunity or use case

An opportunity describes a problem that may or may not justify AI participation.

It records:

- user or business need;
- current work and pain;
- SDLC activity;
- proposed mechanism of benefit;
- alternatives to AI;
- suitability and reversibility;
- likely context, tool and authority needs;
- evidence feasibility;
- estimated total-cost boundary;
- selection or rejection decision.

A selected opportunity may produce one or more adoption increments. A rejected opportunity remains in the decision history.

### Adoption increment

An adoption increment is a bounded, decision-ready change in how AI participates.

It has:

- a selected opportunity;
- an exact scope;
- a hypothesis;
- current and proposed AI participation;
- participants and owners;
- operating boundary;
- evidence plan;
- cost boundary;
- start, review and expiry conditions;
- stop, recovery and restart conditions;
- launch, health and evaluation decisions.

Types of increment may include:

- first pilot;
- repeat pilot;
- bounded expansion;
- governed-workflow introduction;
- selective-orchestration trial;
- improvement or restriction increment.

“Pilot” remains the plain-language term for the first controlled increment. The durable product concept is adoption increment because the workspace must continue after the pilot.

### Governed practice

A governed practice is an AI-enabled way of working that has been explicitly accepted into normal operation for an exact scope.

It records:

- operating owner;
- permitted posture and authority;
- workflow and decision points;
- evidence and monitoring;
- controls and recovery;
- support and cost;
- incidents and exceptions;
- periodic review;
- restriction or retirement history.

A governed practice is not permanent approval. Material change, declining value, control drift or expired authority can return it to an earlier journey stage.

## Authority and operating concepts

### AI participation posture

AI participation posture describes the type and level of AI participation currently authorized for an exact scope:

- No AI use
- Foundation
- Assisted Work
- Bounded Change
- Governed Workflow
- Selective Orchestration

Posture is not a maturity score and is not stored as one organization-wide achievement.

Different scopes inside one initiative may have different authorized postures. The workspace may summarize them, but the most permissive posture must never be presented as general authority.

### Operating boundary

The operating boundary defines what the AI system and participants may access and do.

It includes:

- identities;
- repositories, systems and environments;
- data and context;
- tools;
- read, propose, modify and execute authority;
- validation and approval;
- isolation and logging;
- revocation and recovery;
- cost limits;
- incident handling.

The boundary belongs to an exact scope and decision version.

### Participant and role assignment

A participant is a person or represented group involved in the initiative.

A role assignment records:

- role;
- decision category;
- scope;
- authority;
- evidence responsibility;
- review responsibility;
- effective period;
- delegate or backup when applicable.

Role pages remain secondary guidance. The workspace links a participant to the shared role definition rather than creating a second role model.

## Decision and evidence concepts

### Material decision

A material decision is a consequential choice requiring accountable human authority.

It records:

- decision category;
- exact proposal;
- exact scope;
- accountable owner;
- required participants;
- evidence snapshot;
- unresolved risks and dissent;
- outcome;
- conditions;
- operational consequence;
- effective period;
- reconsideration trigger;
- supersession history.

Examples include readiness, launch, continuation, pause, restriction, restart, expansion, standardization, investment and retirement.

### Decision proposal

The proposal is the exact change being considered.

It must remain separate from the final decision so users can distinguish:

- what is requested;
- what the evidence supports;
- what the system immediately restricts;
- what accountable humans authorize.

### Response and decision unit

A material decision unit connects:

1. guidance;
2. structured response;
3. evidence;
4. immediate system consequence;
5. provisional interpretation;
6. accountable decision;
7. decision trace.

Completing the response does not complete the decision.

### Evidence record

An evidence record describes one source used to support or challenge a decision.

It identifies:

- purpose;
- exact scope;
- source owner;
- observation period;
- provenance;
- quality and limitations;
- review and verification;
- protection and retention;
- version and status.

Evidence remains adverse or incomplete when that is what the source shows.

### Evidence snapshot

An evidence snapshot freezes the exact evidence versions used for a decision or report.

A later evidence change does not silently rewrite the historical decision. It creates a new snapshot and, when material, a reassessment.

### System consequence

A system consequence is an immediate rule-based restriction or evidence requirement.

It may:

- block an invalid action;
- apply the more restrictive interim condition;
- identify an evidence gap;
- create draft remediation;
- invalidate expired or stale authority.

It is not an accountable human decision.

### Provisional interpretation

A provisional interpretation is a draft human-reviewed or AI-supported finding awaiting accountable disposition.

It may explain likely consequences but cannot approve, clear a hard stop, accept risk or change authority.

### Accountable decision

An accountable decision is the authenticated human disposition bound to the proposal, scope and evidence snapshot.

Only this concept grants, restricts, pauses, restarts, expands, standardizes or retires authority.

## Risk and recovery concepts

### Risk

A risk records a specific condition, credible consequence, affected scope, evidence, uncertainty, severity, controls, remaining exposure, owner, treatment and decision consequence.

A risk is not reduced to a score that can be averaged with favorable conditions.

### Hard stop

A hard stop is a binary prohibition for a named scope and action.

It records:

- trigger;
- stopped action;
- affected scope;
- declaration authority;
- containment;
- required notification;
- remediation eligibility;
- clearance evidence;
- verifier;
- required new decision.

A hard stop may create an immediate system consequence before a final human review. A confirmed hard stop cannot be waived by completing other questions.

### Remediation

Remediation is owned corrective work connected to a finding, risk or hard stop.

It records:

- affected scope and current restriction;
- corrective action;
- owner;
- dependencies and dates;
- completion evidence;
- independent verifier when required;
- reassessment decision and owner;
- status and history.

Verified remediation makes a scope eligible for reassessment. It does not restore authority.

### Incident, pause and restart record

This record connects an operating event to:

- containment;
- affected work and evidence;
- revoked or reduced authority;
- recovery;
- remediation;
- verification;
- restart proposal;
- accountable restart decision.

## Evaluation and leadership concepts

### Evaluation

An evaluation compares one completed increment or governed practice with an approved evidence snapshot and declared comparison boundary.

It preserves separate results for:

- product or business outcome;
- delivery flow and total human effort;
- quality and maintainability;
- security and control;
- release and operations;
- team experience and capability;
- economics and total cost.

It produces an evidence conclusion. It does not change authority by itself.

### Evidence conclusion

An evidence conclusion states what the observed evidence supports:

- Value not evaluated
- Value not demonstrated
- Negative net value demonstrated
- No material net improvement demonstrated
- Positive net value demonstrated
- Mixed result

The conclusion applies only to the evaluated scope and snapshot.

### Leadership decision

A leadership decision records the accountable investment or enterprise choice after evidence and category-owner dispositions are available.

Examples include:

- fund remediation;
- stop investing in the use case;
- continue the current bounded scope;
- approve one bounded next increment;
- standardize a governed practice;
- restrict or retire a practice.

Leadership cannot use an investment preference to override a category decision outside its authority.

### Report

A report is a versioned, audience-specific view of source records.

It may summarize:

- current posture;
- readiness;
- risks and remediation;
- increment charter;
- operating health;
- incidents and pauses;
- tangible value;
- decision memorandum;
- leadership briefing;
- next increment;
- governed practice.

A report does not own state and does not grant authority. It links back to its scope, evidence, risks and decisions.

## Relationships that govern later design

- An organization has one or more adoption initiatives.
- An adoption initiative contains opportunities, adoption increments, governed practices and shared decision records.
- An opportunity may be rejected or may produce one or more adoption increments.
- Every increment, decision, risk, evidence conclusion and posture authorization binds to an exact scope.
- An increment has many material decisions over its lifecycle.
- A decision uses one evidence snapshot.
- An evidence snapshot contains versioned evidence records.
- A response may trigger a system consequence, risk, hard stop or remediation.
- A system consequence does not grant authority.
- A hard stop may affect one increment, several scopes or the initiative, depending on its declared scope.
- Remediation connects to a finding and may later trigger reassessment.
- Verified remediation does not restore authority.
- An evaluation produces an evidence conclusion.
- An accountable human decision changes authority.
- A completed increment may produce another increment, a governed practice, a restriction or a stopped use case.
- Reports are generated from source records and may be superseded.

## Gate 6 representative instance

The vertical slice will instantiate only enough of this model to prove the experience:

- one organization;
- one adoption initiative;
- one selected opportunity;
- one first pilot;
- one exact scope;
- Foundation posture during readiness;
- three governing readiness decisions;
- three hard stops and remediations;
- one explicit later pilot state;
- one frozen evaluation snapshot;
- one negative net-value conclusion;
- one accountable restriction to Assisted Work;
- one leadership investment decision;
- one provisional leadership output.

The prototype does not need to expose every concept as a separate screen.

## Decisions requiring product-owner approval

1. The adoption initiative is the durable workspace container.
2. “Adoption increment” is the durable concept, with “pilot” used for the first controlled increment.
3. AI participation posture applies to an exact scope, not the organization as a single achievement.
4. Journey stage may differ across scopes and increments.
5. Reports are derived views and never own authority.
6. Evidence conclusion, system consequence, provisional interpretation and accountable decision remain separate.
7. Verified remediation triggers reassessment but does not restore authority.
