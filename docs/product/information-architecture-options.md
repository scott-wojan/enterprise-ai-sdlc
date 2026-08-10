# Information Architecture Options

## Status

Draft for explicit selection under [Gate 2](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/134) of the [product-recovery epic](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/131).

The approved [Product Contract](product-contract.md) governs these options.

This document defines hierarchy, navigation, page relationships, and the boundary between public guidance and an adoption workspace. It does not select a visual design, framework, hosting platform, storage model, or production implementation.

## Selected direction

Option A is selected as the primary architecture.

The approved combination is:

- Journey-led public guidance.
- Option B's decision structure inside the adoption workspace and at adoption-stage decision points.
- Option C's role and software-delivery views as secondary lenses that link to shared guidance rather than duplicate it.

The remaining Gate 2 decision is approval of the exact page inventory and navigation behavior in [information-architecture.md](information-architecture.md).

## Original decision frame

Select the organizing model that will help a person:

1. Understand why the product exists before being shown a process or form.
2. See the complete adoption journey from leadership mandate through increasingly integrated operation.
3. Explore how AI applies across the complete software-delivery lifecycle.
4. Find responsibilities relevant to their role without receiving a different version of the method.
5. Apply guidance, capture evidence, identify risk, and generate decisions when they intentionally begin work.
6. Return to a specific page, assessment, risk, or decision without starting over.

## Requirements shared by every option

Every acceptable architecture must:

- explain the adoption problem on the first screen;
- avoid presenting a pilot as the entire product;
- keep public guidance usable without starting an assessment;
- introduce interactive work only after explaining its purpose and consequences;
- support the complete adoption journey and complete software-delivery lifecycle;
- make evidence, net value, risk, hard stops, and leadership decisions visible;
- use stable, directly addressable pages;
- separate reading progress from readiness;
- keep roles, detailed controls, templates, source identifiers, and internal repository structure out of the primary path;
- avoid a permanent desktop sidebar and a long mobile navigation drawer;
- remove the global workbook action;
- permit the final platform to change after the vertical slice establishes actual requirements.

## Option A: Journey-led architecture

## Organizing idea

The primary structure follows the organization's adoption journey. Users can understand the complete path, enter at the stage that matches their current situation, and move backward when a later-stage decision exposes an earlier gap.

The software-delivery lifecycle and organizational roles are supporting lenses. They do not replace the shared journey.

## Home-page order

1. **Minimal header**
   - Product name
   - Why this matters
   - Adoption journey
   - Across the SDLC
   - Apply the playbook
   - Examples and resources
   - No workbook button
   - No progress indicator

2. **Why this product exists**
   - Restrained title
   - Direct explanation of leadership pressure, disconnected experimentation, and the need for evidence and accountable decisions
   - Primary action: See what this helps you decide
   - Secondary action: Explore the adoption journey
   - No assessment or workbook action

3. **Challenges this product helps address**
   - Appropriate work for AI
   - Accountability for output
   - Context, tool, and authority boundaries
   - Validation and approval
   - Tangible net value
   - Failure, restriction, and stop behavior
   - Continued investment and expansion decisions

4. **What the organization will produce**
   - Readiness position
   - Risk and remediation register
   - Use-case decision
   - Pilot charter
   - Evidence plan
   - Tangible-value assessment
   - Leadership decision memorandum
   - Bounded expansion plan

5. **How the product protects decision quality**
   - Baselines before value claims
   - Total-system evidence
   - Material risks and hard stops
   - Unknowns treated as evidence gaps
   - Human accountability
   - Expansion limited to approved scope

6. **The adoption journey**
   - Understand and align
   - Assess readiness and baseline
   - Select opportunities
   - Design the first adoption increment
   - Prepare and run
   - Evaluate and decide
   - Expand incrementally
   - Govern and integrate
   - Operate and improve

7. **AI across the software-delivery lifecycle**
   - Product discovery and planning
   - Requirements and analysis
   - Architecture and design
   - Implementation
   - Testing and quality engineering
   - Security and compliance
   - Release and change
   - Production operations
   - Incident response and learning

8. **Who participates**
   - Sponsor
   - Adoption owner
   - Pilot or program lead
   - Engineering and product
   - Architecture and platform
   - Security, risk, legal, and compliance
   - Quality, release, and operations
   - Measurement and finance
   - Delivery team
   - Consulting team

   Role summaries explain responsibility and link into the same shared guidance. They do not create separate copies of the journey.

9. **Choose what you need to do next**
   - Understand the approach
   - Assess current readiness
   - Select a use case
   - Design a pilot
   - Evaluate an active pilot
   - Plan a bounded expansion
   - Review a specific SDLC activity

   This is the first point where a new user is invited to begin interactive work.

10. **Current product status and source**
    - Vendor-neutral position
    - Product status and limitations
    - Maintainer access to canonical source and change history

## Primary navigation

- **Why this matters**
- **Adoption journey**
- **Across the SDLC**
- **Apply the playbook**
- **Examples and resources**

About, methodology governance, terminology, source tracing, contributor information, and repository links remain in the footer or secondary navigation.

## Adoption-journey structure

### Understand and align

- Why AI adoption needs an operating model
- Define the problem and intended outcome
- Name accountable decision owners
- Identify participants and constraints
- Understand available operating modes
- Produce the adoption intent and ownership decision

### Assess readiness and establish baselines

- Organization
- Engineering
- Context
- Controls
- Measurement
- Team
- Establish the affected delivery boundary
- Establish baseline evidence and total cost
- Produce the current readiness position, material risks, and remediation plan

### Select opportunities

- Explore AI use across the SDLC
- Identify candidate problems and work
- Evaluate suitability, reversibility, evidence, and authority
- Compare candidate use cases
- Reject unsuitable work
- Select the first use case and operating mode

### Design the first adoption increment

- Define the hypothesis
- Select the team
- Define allowed and prohibited work
- Establish context, access, tool, and authority boundaries
- Define validation and approval
- Define tangible-value evidence
- Define support, incident, and stop conditions
- Produce the pilot charter

### Prepare and run

- Test controls, revocation, recovery, and evidence
- Onboard participants
- Apply Assisted Work or an approved bounded mode
- Capture material outcomes and costs
- Inspect failures and transferred effort
- Restrict, pause, remediate, or restart
- Produce weekly health and incident records

### Evaluate and decide

- Compare the complete affected delivery path with baseline
- Evaluate quality, security, operations, product, people, and economics
- State confidence, limitations, and missing evidence
- Decide to continue, restrict, remediate, expand, or stop
- Produce leadership guidance and the decision memorandum

### Expand incrementally

- Choose one dimension to change
- Reassess readiness for the proposed change
- Carry forward only applicable evidence
- Define new boundaries and decision conditions
- Produce the bounded next-increment plan

### Govern and integrate

- Establish repeatable AI-enabled workflows
- Integrate approved context, controls, verification, and evidence
- Define human approval and recovery points
- Introduce selective orchestration only where justified
- Prevent authority from expanding silently

### Operate and improve

- Monitor tangible value and total cost
- Reassess control effectiveness
- Inspect incidents and repeated failure
- Review tool, model, policy, and organizational changes
- Restrict or retire ineffective practices
- Standardize evidence-supported practices

## Across-the-SDLC structure

Each software-delivery activity receives one stable landing page with the same internal structure:

1. What the activity is trying to accomplish.
2. Where AI may help.
3. Work suitable for Assisted Work.
4. Conditions required for greater authority.
5. Context and access needs.
6. Credible failure modes.
7. Validation and approval requirements.
8. Evidence needed to demonstrate tangible value.
9. Good and bad use-case examples.
10. Restrictions and hard stops.
11. Related adoption stages and workspace decisions.

This keeps the lifecycle visible without creating a separate methodology for every discipline.

## Role model

Roles are a contextual lens.

A role page shows:

- decisions the role owns;
- decisions the role participates in;
- evidence the role must provide or review;
- conditions the role may block;
- outputs the role receives;
- relevant journey stages and software-delivery activities.

Changing role emphasis must never change the underlying decision rule or evidence requirement.

## Guidance and workspace boundary

### Public guidance

Public pages explain the purpose, journey, software-delivery activities, roles, evidence principles, examples, and decision logic.

A reader can explore all of this without entering data.

### Apply the playbook

The Apply landing page explains:

- what will be captured;
- who should participate;
- what evidence should be available;
- how risks and hard stops will be handled;
- what outputs will be produced;
- what information should not be entered.

Only then does the user begin or resume work.

### Contextual workspace

The workspace is organized around the current adoption scope:

- Current posture
- Decisions and ownership
- Readiness and baseline
- Candidate and approved use cases
- Risks and remediation
- Boundaries and controls
- Evidence and tangible value
- Incidents and pauses
- Decisions and reports
- Next increment

Inputs appear beside the guidance and examples needed to answer them. There is no global blank workbook.

## Stable location model

Public examples:

- Home
- Why this matters
- Adoption journey
- One adoption stage
- Across the SDLC
- One software-delivery activity
- One role
- One example
- One reference concept

Workspace examples:

- Workspace overview
- One assessment area
- One use case
- One risk
- One remediation
- One evidence measure
- One decision report

The final technical route format will be selected later. The information architecture requires each destination to be directly addressable.

## Mobile implications

- Home uses a short collapsed menu, not a permanent sidebar.
- The journey appears as a vertical stage list.
- A journey page uses a compact stage selector and clear breadcrumb.
- Assessment content follows one-column order: explanation, criteria, examples, response, evidence, result, next action.
- Risk and decision status appears beside the relevant answer and in a separate workspace summary.
- Previous and next actions move within the current journey context and focus the destination heading.
- Wide maturity matrices and large horizontal progress diagrams are prohibited from the primary mobile path.

## Strengths

- Establishes a clear beginning, middle, and continuing operating cycle.
- Makes the pilot one part of a larger adoption journey.
- Works for organizations at different stages.
- Supports incremental expansion and return to earlier conditions.
- Makes it easier to connect decisions, evidence, and outputs to a stage.
- Gives first-time readers a comprehensible path without forcing them into a wizard.

## Failure risks

- The journey could become another linear checklist if every page is presented as mandatory.
- Nine stages could become overwhelming if the stage summaries are not concise.
- Users focused on one software-delivery activity may need an additional route into the same guidance.

## Required safeguards

- Allow exploration and direct stage entry.
- Mark required decisions by current scope rather than marking every page required.
- Provide the Across-the-SDLC lens as a first-class secondary route.
- Generate a contextual path after the organization begins applying the playbook.

## Option B: Decision-led architecture

## Organizing idea

The primary structure follows the decisions an organization must make rather than its adoption stage.

A user enters through the question they need to answer, such as whether the organization is ready, where AI should be used, whether the evidence demonstrates value, or whether expansion is justified.

## Home-page order

1. Why the product exists
2. The decisions leadership and delivery teams must make
3. What evidence is required
4. What outputs the product produces
5. Choose a decision to work on
6. How decisions connect over time
7. AI across the SDLC
8. Participants
9. Current product status

## Primary navigation

- **Why this matters**
- **Are we ready?**
- **Where should AI be used?**
- **What boundaries are required?**
- **Is it creating tangible value?**
- **Should we continue or expand?**
- **Examples and resources**

## Decision groups

### Establish intent and ownership

- Why are we considering AI?
- What outcome should change?
- Who owns the enterprise decision?
- Who may pause or stop work?

### Determine readiness

- Can the organization govern the proposed use?
- Can the team deliver and verify safely?
- Is context sufficient?
- Can access and authority be enforced?
- Is baseline and cost evidence available?
- Can the team report failure safely?

### Select use

- What problem is worth solving?
- What work is suitable?
- What software-delivery activity is affected?
- What operating mode is justified?
- What must remain outside scope?

### Set boundaries

- What context and data may be used?
- What tools and commands may be used?
- What may AI read, propose, change, or execute?
- How will output be checked and approved?
- How will access be revoked and work recovered?

### Prove tangible value

- What is the complete affected delivery path?
- What changed from baseline?
- What effort moved downstream?
- What happened to quality, security, operations, maintainability, team experience, and cost?
- What is known, unknown, and attributable?

### Decide and report

- Continue, restrict, remediate, expand, or stop?
- What evidence supports and opposes the decision?
- What must leadership decide?
- What conditions permit reassessment?

### Expand or integrate

- What one dimension should change?
- Is the proposed change separately ready?
- What evidence carries forward?
- What new controls and evidence are required?

## Workspace model

The workspace follows the same decision groups. Every answer contributes to a current decision posture and one or more outputs.

## Mobile implications

Decision questions work well in a compact list. The risk is that the list becomes long and repetitive because the same decision must be revisited at different adoption stages and for different scopes.

## Strengths

- Very direct for users arriving with a specific question.
- Places evidence and decisions at the center.
- Makes hard stops and leadership outputs highly visible.
- Avoids process language.

## Failure risks

- Hides the long-term adoption journey.
- Makes it difficult to understand how pilot, expansion, governed workflow, and selective orchestration relate.
- Repeated decisions may appear duplicated without stage and scope context.
- A first-time reader may understand individual questions but not the overall operating model.
- The structure can become a large assessment rather than a complete guidance product.

## Best fit

This structure works best for an experienced practitioner or as the workspace organization inside another architecture. It is weaker as the complete public information architecture.

## Option C: Role-and-context hub architecture

## Organizing idea

After understanding the purpose, users enter through their role or the software-delivery activity they are responsible for.

The product behaves as a hub connecting roles, adoption stages, software-delivery activities, decisions, risks, evidence, and outputs.

## Home-page order

1. Why the product exists
2. Challenges it helps address
3. What it produces
4. Choose your role
5. Choose the software-delivery activity
6. Choose the current adoption stage
7. Shared evidence and decision principles
8. Current product status

## Primary navigation

- **Why this matters**
- **For leaders**
- **For adoption owners**
- **For engineering and product**
- **For platform and risk**
- **For quality and operations**
- **Across the SDLC**
- **Apply the playbook**

## Role hubs

Each role hub contains:

- current responsibilities;
- decisions owned;
- required evidence;
- relevant software-delivery activities;
- relevant adoption stages;
- risks the role must inspect;
- actions and outputs.

## Context mapping

Every piece of guidance is tagged by:

- adoption stage;
- software-delivery activity;
- responsible role;
- operating mode;
- decision;
- evidence type;
- risk type;
- output.

Users can move among these views without duplicating the underlying requirement.

## Workspace model

The workspace dashboard initially adapts to the user's role while preserving shared organizational decisions and evidence.

## Mobile implications

Role entry is easy to present as a short list, but switching among role, stage, activity, decision, and output dimensions creates substantial mobile-navigation complexity.

## Strengths

- Immediately relevant to a person's responsibilities.
- Strong for consulting teams assembling a role-specific working session.
- Makes cross-functional participation visible.
- Supports flexible exploration when users already understand the product.

## Failure risks

- Encourages fragmented role-specific experiences.
- Makes it harder to understand the shared adoption journey.
- Creates a high risk of duplicate or contradictory guidance.
- Users may miss decisions owned by another role but material to their work.
- Multiple filtering dimensions increase cognitive load.
- The navigation is difficult to make comprehensible on mobile.
- It risks recreating the repository as a large cross-reference system.

## Best fit

This structure is useful as a secondary role index and workspace emphasis. It is not recommended as the primary architecture.

## Comparison

## Option A: Journey-led

Best at:

- orienting first-time users;
- showing adoption from initial mandate through integrated operation;
- connecting stages to decisions and outputs;
- preventing the pilot from becoming the whole product.

Main risk:

- becoming an inflexible linear process.

## Option B: Decision-led

Best at:

- direct assessment;
- risk interpretation;
- hard stops;
- leadership decisions.

Main risk:

- losing the long-term adoption journey and turning the product into a large questionnaire.

## Option C: Role-and-context hub

Best at:

- role relevance;
- cross-functional working sessions;
- flexible reference.

Main risk:

- fragmentation, duplication, and excessive navigation complexity.

## Recommendation

Adopt **Option A, Journey-led**, as the primary information architecture.

Use two elements from the other options:

- Use the decision groups from Option B inside the contextual workspace and at stage gates.
- Use the role and software-delivery mappings from Option C as secondary lenses, not as competing primary navigation.

The recommended model is therefore:

**Journey-led public guidance with decision-led application and contextual role and SDLC lenses.**

This model gives a first-time reader one coherent explanation while supporting experienced users who need to enter directly through a decision, role, or software-delivery activity.

## Recommended primary structure

- Home
- Why this matters
- Adoption journey
- Across the SDLC
- Apply the playbook
- Examples and resources

## Recommended secondary structure

- Roles and responsibilities
- Product outputs
- Evidence and tangible-value principles
- Decision and risk principles
- Definitions
- Methodology governance
- Source and contributor information

## Recommended workspace structure

- Current posture
- Decisions and ownership
- Readiness and baseline
- Use cases
- Risks and remediation
- Boundaries and controls
- Evidence and tangible value
- Incidents and pauses
- Decisions and reports
- Next increment

## Content intentionally excluded from global navigation

- A 19-step page-completion checklist
- A global workbook
- Every canonical control
- Every artifact definition
- Stable requirement identifiers
- Source provenance
- Internal repository folders
- Separate copies of the journey for each role
- Tool and vendor implementation guidance
- A maturity score
- A large adoption-by-SDLC matrix

These remain contextual, generated, secondary, or maintainer-facing as appropriate.

### Selection record

Selected: Journey-led architecture with decision-led application and contextual role and software-delivery lenses.

The exact page inventory, page hierarchy, section order, cross-links, and navigation behavior are defined in the companion Gate 2 artifact. No wireframes or production implementation should begin before that artifact is approved.
