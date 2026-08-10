# Approved-Direction Information Architecture

## Status

Draft for exact-structure approval under [Gate 2](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/134).

The selected direction is:

- Journey-led public guidance.
- Decision-led application inside the adoption workspace and at adoption-stage decision points.
- Role and software-delivery views as secondary lenses over shared guidance.

The approved [Product Contract](product-contract.md) governs this structure. The [options document](information-architecture-options.md) records the alternatives and selection.

This document does not define visual design, final copy, framework, hosting, authentication, storage, or production implementation.

## Structural principles

1. The first screen explains why the product exists.
2. Public guidance is usable without entering information.
3. The adoption journey is the primary organizing structure.
4. A pilot is one adoption increment, not the entire product.
5. Software-delivery activities and roles provide direct access to relevant shared guidance.
6. Interactive work begins only after the user understands its purpose, evidence requirements, and consequences.
7. Material decisions use structured responses and evidence inside a workspace.
8. Every primary destination has a stable location that can be linked or resumed.
9. Public reading has no completion percentage.
10. Workspace status describes decisions, evidence, risks, restrictions, remediation, and current posture.
11. Detailed controls, templates, sources, and identifiers appear when relevant or in secondary reference.
12. The repository's folder structure does not determine end-user navigation.

## Product layers

### Layer 1: Public guidance

Public guidance explains:

- why the product exists;
- the challenges it addresses;
- the adoption journey;
- AI use across the software-delivery lifecycle;
- roles and responsibilities;
- evidence and tangible-value expectations;
- decision and risk principles;
- examples;
- product limitations and methodology governance.

No workspace is required to read this material.

### Layer 2: Apply the playbook

Apply the playbook is the transition from learning to organizational work.

Before accepting any response, it explains:

- what decisions the organization will make;
- who must participate;
- what evidence should be available;
- what information will be captured;
- how risks, restrictions, and hard stops will be handled;
- what reports will be produced;
- what information should not be entered;
- how work can be saved, shared, or exported once the platform is selected.

### Layer 3: Adoption workspace

The workspace applies decision structure to a specific organization and scope.

It contains the organization's current:

- intent and decision ownership;
- readiness and baseline;
- selected and rejected use cases;
- risks and remediation;
- boundaries and controls;
- evidence and tangible-value findings;
- incidents, pauses, and restart conditions;
- decision reports;
- next increment.

### Layer 4: Secondary reference and maintainer material

This layer contains:

- definitions;
- detailed controls;
- artifact definitions and templates;
- facilitation guidance;
- source provenance;
- stable requirement identifiers;
- product decisions;
- contribution and methodology-governance information.

It supports implementation and assurance without burdening the primary reading path.

## Global public navigation

The public header contains:

- **Why this matters**
- **Adoption journey**
- **Across the SDLC**
- **Apply the playbook**
- **Examples and resources**

The product name links to Home.

A search entry may be included when the content volume requires it. Search is not a substitute for navigation.

The public header does not contain:

- Open pilot workbook
- Start the 19-step path
- Page completion
- Readiness percentage
- Role selector
- Operating-mode selector
- Tool selector
- Vendor selector

Returning-workspace access appears on the Apply page and may appear as a contextual “Resume your work” action when the system can identify an existing workspace. It is not the first-time user's primary action.

## Home page

### Section 1: Why the product exists

Purpose:

Immediately explain the situation that brings the reader to the product.

Content:

- Leadership pressure to adopt AI.
- Disconnected experimentation and inconsistent practices.
- The need for accountable, governed, evidence-based adoption.
- The complete scope from first decisions through increasingly integrated operation.
- A restrained statement that maximum automation is not the objective.

Actions:

- **See what this helps you decide** goes to the Challenges section on the same page.
- **Explore the adoption journey** opens the Adoption Journey landing page.

No action opens a form, workbook, or workspace.

### Section 2: Challenges this product helps address

Purpose:

Help readers recognize their own problems.

Content:

- What work is appropriate to delegate to AI?
- Who remains accountable for AI-generated output?
- What information, repositories, systems, tools, and authority should AI access?
- How will AI-generated work be validated and approved?
- How will tangible net value be proven across the complete delivery path?
- What happens when downstream work, quality, security, operations, team experience, or total cost becomes worse?
- When should adoption be restricted, paused, or stopped?
- Who decides whether further investment or expansion is justified?

Each challenge links to the relevant Adoption Journey stage, not to a form.

### Section 3: What the organization will produce

Purpose:

Show that the product creates decisions and working outputs rather than a reading checklist.

Content:

- Adoption intent and ownership decision
- Current readiness position
- Risk and remediation register
- Use-case selection decision
- Pilot charter
- Boundary and control definition
- Baseline and evidence plan
- Tangible-value assessment
- Leadership decision memorandum
- Bounded expansion plan
- Integrated-adoption roadmap

### Section 4: How decision quality is protected

Purpose:

Establish trust before introducing the process.

Content:

- Baselines are required before value claims.
- Evidence includes the complete affected delivery path.
- Local speed and output volume are not proof of value.
- Unknown material costs and downstream effects mean value is not demonstrated.
- Material quality, security, control, recoverability, or safety failures govern.
- Human owners remain accountable.
- Expansion applies only to an explicitly approved scope.

Links:

- Evidence and tangible value
- Decision and risk principles

### Section 5: The adoption journey

Purpose:

Show the complete path without forcing the reader through it.

Stages:

1. Understand and align
2. Assess readiness and establish baselines
3. Select opportunities
4. Design the first adoption increment
5. Prepare and run
6. Evaluate and decide
7. Expand incrementally
8. Govern and integrate
9. Operate and improve

Each stage displays:

- the decision being made;
- the output produced;
- the primary reason an organization may need to stop or return to an earlier stage;
- a link to the stage landing page.

### Section 6: AI across the software-delivery lifecycle

Purpose:

Show that the product covers more than coding.

Activities:

- Product discovery and planning
- Requirements and analysis
- Architecture and design
- Implementation
- Testing and quality engineering
- Security and compliance
- Release and change management
- Production operations
- Incident response and organizational learning

Each activity links to one shared activity page.

### Section 7: Who participates

Purpose:

Show cross-functional participation after the problem, outputs, evidence, journey, and lifecycle are understood.

Role groups:

- Executive sponsor
- Enterprise AI adoption owner
- Pilot or program lead
- Engineering and delivery leadership
- Product leadership
- Architecture and platform leadership
- Security, risk, legal, and compliance
- Quality engineering and verification
- Release and operations
- Measurement and finance
- Delivery-team participants
- Consulting teams

Each role links to a secondary role page.

### Section 8: Choose what you need to do next

Purpose:

Offer direct entry based on the reader's current need.

Choices:

- Understand the approach
- Assess current readiness
- Select a use case
- Design the first adoption increment
- Evaluate an active pilot
- Plan a bounded expansion
- Review an SDLC activity
- Resume existing work

The assessment action first opens Apply the Playbook. It does not open a blank form.

### Section 9: Product status and source

Content:

- Current product status
- What is validated and what remains incomplete
- Vendor-neutral commitment
- Link to methodology governance
- Link to repository for maintainers and contributors

## Why this matters

### Landing page

Purpose:

Provide a deeper orientation without requiring knowledge of the adoption process.

Sections:

1. The pressure organizations are facing
2. Why disconnected experimentation creates problems
3. Why tool selection is not an adoption strategy
4. What responsible adoption must decide
5. What tangible value means
6. Why stop conditions protect investment
7. What this product covers
8. What this product does not promise
9. Where to go next

### Supporting pages

- The adoption problem
- Accountability and human decisions
- Tangible value across the SDLC
- Risk, restriction, and stopping
- Adoption modes and authority
- Product scope and limitations

These are directly addressable public pages. They contain no organizational inputs.

## Adoption journey

### Journey landing page

Sections:

1. How to use the journey
2. The nine stages
3. How organizations can enter at different stages
4. Why a later-stage gap may require returning to an earlier stage
5. How stage decisions relate to the adoption workspace
6. How the journey relates to SDLC activities and roles
7. Start exploring or apply the playbook

The landing page must state that the stages are a decision sequence, not a maturity contest and not a mandatory page-completion checklist.

### Stage 1: Understand and align

Stage landing page:

- Purpose and expected decision
- Inputs
- Responsible roles
- What good conditions look like
- Material gaps
- Output
- Related SDLC activities
- Apply this stage

Supporting guidance:

- Define the problem and intended outcome
- Establish enterprise intent
- Name accountable owners and decision rights
- Identify participants and constraints
- Understand adoption modes and authority
- Produce the adoption intent and ownership decision

Stage decision point:

- Is there an accountable reason, owner, and decision structure for proceeding?

### Stage 2: Assess readiness and establish baselines

Supporting guidance:

- Organizational readiness
- Engineering readiness
- Context readiness
- Control readiness
- Measurement readiness
- Team readiness
- Define the complete affected delivery boundary
- Establish baseline evidence
- Establish the total-cost boundary
- Record current posture and remediation

Stage decision point:

- Is the proposed scope ready, restricted, in need of remediation, or not ready?

### Stage 3: Select opportunities

Supporting guidance:

- Explore opportunities across the SDLC
- Define the problem worth solving
- Identify candidate work
- Evaluate suitability and reversibility
- Evaluate context and authority needs
- Evaluate evidence feasibility
- Compare candidates
- Reject unsuitable work
- Select the first use case and operating mode

Stage decision point:

- Is this use case valuable, bounded, controllable, verifiable, and measurable enough to pursue?

### Stage 4: Design the first adoption increment

Supporting guidance:

- Define the hypothesis
- Select the team
- Define included and excluded work
- Establish data, context, tool, and authority boundaries
- Define validation and approval
- Define baseline and tangible-value evidence
- Define support and escalation
- Define pause, stop, recovery, and restart conditions
- Complete and approve the charter

Stage decision point:

- Does the proposed increment have an approved scope, enforceable conditions, usable evidence, and accountable owners?

### Stage 5: Prepare and run

Supporting guidance:

- Configure and test technical boundaries
- Test validation, revocation, and recovery
- Onboard participants
- Operate Assisted Work
- Operate greater authority only when approved
- Capture material outcomes and total cost
- Inspect transferred effort and repeated failure
- Run the weekly decision rhythm
- Handle risk, incident, pause, remediation, and restart

Stage decision points:

- May the increment launch?
- May it continue under current conditions?
- Must it be restricted, paused, or stopped?

### Stage 6: Evaluate and decide

Supporting guidance:

- Review evidence completeness
- Compare the complete delivery path with baseline
- Evaluate flow, quality, security, operations, product, people, and economics
- Determine tangible net value
- State confidence, limitations, and unknowns
- Review evidence for and against continuation
- Decide to continue, restrict, remediate, expand, or stop
- Produce the leadership report and decision memorandum

Stage decision point:

- What decision does the complete evidence support for this exact scope?

### Stage 7: Expand incrementally

Supporting guidance:

- Choose one dimension to change
- Explain why the change is justified
- Reassess readiness
- Determine what evidence remains applicable
- Define new boundaries and controls
- Define the next evidence requirement
- Approve or reject the bounded expansion

Stage decision point:

- Is the next bounded increment independently justified and ready?

### Stage 8: Govern and integrate

Supporting guidance:

- Establish repeatable AI-enabled workflows
- Maintain approved context
- Integrate verification and approval
- Integrate evidence and observability
- Define human decision and recovery points
- Evaluate selective orchestration
- Prevent silent authority expansion
- Manage mixed operating modes across teams and work

Stage decision points:

- Which practices are ready to become repeatable organizational capabilities?
- Where is greater coordination or authority justified?

### Stage 9: Operate and improve

Supporting guidance:

- Monitor tangible value and total cost
- Reassess controls and evidence quality
- Inspect incidents and repeated failure
- Review model, tool, policy, and organizational changes
- Restrict, retire, or replace ineffective practices
- Standardize what remains supported
- Plan further bounded improvement

Stage decision point:

- What should continue, change, be retired, or be reassessed?

## Across the SDLC

### SDLC landing page

Sections:

1. Why AI suitability differs by software-delivery activity
2. The nine activities
3. Common evaluation structure
4. How to compare use cases
5. How to connect an activity to the adoption journey
6. Apply the playbook to an activity

### Activity pages

- Product discovery and planning
- Requirements and analysis
- Architecture and design
- Implementation
- Testing and quality engineering
- Security and compliance
- Release and change management
- Production operations
- Incident response and organizational learning

Every activity page uses this order:

1. Purpose of the activity
2. Where AI may help
3. Good and bad use-case examples
4. Work suitable for Assisted Work
5. Conditions required for greater authority
6. Context, data, tools, and access
7. Credible failure modes
8. Validation and approval
9. Evidence and total-cost considerations
10. Restrictions and hard stops
11. Responsible roles
12. Related adoption stages
13. Apply this guidance to a use case

The page does not duplicate stage requirements. It links to the shared requirement or decision in the journey and workspace.

## Roles and responsibilities

### Role index

Roles are available from Who Participates, relevant journey pages, SDLC pages, outputs, and secondary navigation. They are not a primary global-navigation category.

### Role pages

Each role page uses this order:

1. Why this role participates
2. Decisions owned
3. Decisions supported
4. Evidence provided or reviewed
5. Risks or conditions the role may block
6. Required outputs
7. Relevant journey stages
8. Relevant SDLC activities
9. Good and bad participation examples
10. Apply the playbook

Role pages:

- Executive sponsor
- Enterprise AI adoption owner
- Pilot or program lead
- Engineering and delivery leadership
- Product leadership
- Architecture and platform leadership
- Security, risk, legal, and compliance
- Quality engineering and verification
- Release and operations
- Measurement and finance
- Delivery-team participants
- Consulting teams

Role pages cannot weaken or redefine shared requirements.

## Apply the playbook

### Apply landing page

Sections:

1. What applying the playbook means
2. Decisions and outputs that will be created
3. Participants required
4. Evidence to gather
5. How risks and hard stops work
6. What may be saved or exported
7. Information that must not be entered
8. Begin new work
9. Resume existing work
10. Review an exported result

The exact persistence and collaboration behavior remains a Gate 7 platform decision.

### Entry choices

A user may begin with:

- Enterprise adoption intent
- Readiness and baseline
- Use-case selection
- First adoption increment
- Active-pilot review
- Tangible-value evaluation
- Expansion decision

The system must explain missing prerequisites. It must not allow direct entry to hide a governing earlier-stage gap.

## Adoption workspace

### Workspace overview

The overview answers:

- What exact scope is being assessed?
- What is the current decision posture?
- What may proceed?
- What is restricted or stopped?
- What material evidence is missing?
- What remediation is overdue?
- What leadership decision is next?
- What reports are available?

There is no page-completion percentage.

### Workspace navigation

- Current posture
- Intent and ownership
- Readiness and baseline
- Use cases
- Risks and remediation
- Boundaries and controls
- Evidence and tangible value
- Incidents and pauses
- Decisions and reports
- Next increment

### Current posture

- Current recommendation
- Approved scope
- Permitted activity
- Restricted and prohibited activity
- Material risks
- Evidence gaps
- Required remediation
- Next decision and owner

### Intent and ownership

- Adoption problem
- Intended outcome
- Decision owners
- Required participants
- Decision rights
- Pause, stop, and restart authority

### Readiness and baseline

- Organization
- Engineering
- Context
- Controls
- Measurement
- Team
- Delivery-path boundary
- Baseline
- Total-cost boundary
- Readiness result
- Remediation

### Use cases

- Candidate use cases
- Rejected use cases
- Selected use cases
- SDLC activity
- Operating mode
- Context and authority needs
- Expected outcome
- Evidence feasibility
- Decision and rationale

### Risks and remediation

- Risk or evidence gap
- Triggering response
- Credible consequence
- Affected scope
- Severity or governing condition
- Required restriction
- Remediation owner and due date
- Closure evidence
- Reassessment result

### Boundaries and controls

- Allowed identities
- Repositories and systems
- Data and context
- Tools
- Read, propose, modify, and execute authority
- Validation and approval
- Isolation
- Logging
- Revocation
- Recovery
- Incident response
- Test results

### Evidence and tangible value

- Complete affected delivery boundary
- Baseline
- Flow
- Quality
- Security and control
- Operations
- Product and business outcome
- Team experience and capability
- Token, tool, infrastructure, integration, enablement, support, governance, and incident cost
- Transferred effort
- Confidence and limitations
- Tangible-value result

### Incidents and pauses

- Risk, exception, incident, or near miss
- Immediate containment
- Affected work
- Access revoked
- Recovery
- Remediation
- Closure evidence
- Restart decision

### Decisions and reports

- Readiness brief
- Pilot charter
- Weekly health report
- Incident or pause report
- Tangible-value assessment
- Continue, restrict, remediate, expand, or stop decision
- Leadership briefing
- Decision memorandum
- Expansion proposal

### Next increment

- Capability or use case retained
- Practice to standardize
- Failure or friction to eliminate
- One proposed change dimension
- Readiness work required
- New boundary
- New evidence requirement
- Approval decision
- Reassessment date

## Decision structure inside stages and workspace

Every stage decision point and material workspace question follows this information order:

1. Decision or question
2. Why it matters
3. Accountable owner
4. Required participants
5. Guidance for answering
6. Good response example
7. Bad response example
8. Why the examples differ
9. Structured response
10. Supporting evidence
11. Risk or decision consequence
12. What may continue
13. What must stop
14. Required remediation
15. Evidence required for reassessment
16. Output affected
17. Next relevant decision

Gate 3 will define the specific rules. Gate 4 will define the response, evidence, and reporting schemas.

## Examples and resources

### Examples landing page

Organized by:

- Adoption stage
- SDLC activity
- Operating mode
- Decision outcome
- Role

Examples demonstrate both successful progress and responsible stop decisions.

### Initial examples

- Assisted requirements analysis
- Assisted architecture review
- Assisted implementation
- AI-suggested testing
- Bounded defect correction
- Rejected high-risk use case
- Pilot paused because baseline evidence is missing
- Pilot restricted after review burden increases
- Expansion rejected because total cost is unknown
- Practice standardized after tangible value is demonstrated

### Resources landing page

- Definitions
- Product outputs
- Decision and risk principles
- Evidence and tangible-value principles
- Detailed controls
- Templates
- Facilitation guidance
- Methodology governance
- Sources and traceability
- Maintainer and contributor information

Resources are also linked at the point of use. “Use when needed” is not a standalone dumping-ground section.

## Cross-linking rules

- A challenge links to the relevant journey stage and orientation guidance.
- A journey stage links to relevant SDLC activities, roles, outputs, examples, and workspace entry.
- An SDLC activity links to relevant journey stages, roles, examples, and use-case entry.
- A role page links to shared journey and SDLC guidance rather than duplicate content.
- A public decision explanation links to the corresponding contextual workspace decision.
- A workspace response links back to the public guidance that explains it.
- A risk links to the triggering response, governing decision, remediation, and affected report.
- A report links to the evidence, risks, decisions, and limitations that support it.
- A detailed control or template is linked at the point where it becomes necessary.

## Desktop navigation behavior

### Public guidance

- Compact global header
- No permanent left sidebar on Home
- Breadcrumb on interior pages
- Local stage or section navigation on journey pages
- Table of contents only when the page length requires it
- Previous and next actions limited to the current journey context
- Direct links preserve location
- Browser back and forward work normally

### Adoption workspace

A persistent local workspace navigation may be used because users are working inside a defined organizational scope.

The workspace must keep visible:

- scope;
- current posture;
- blockers;
- next decision.

This navigation is separate from public global navigation.

## Mobile navigation behavior

### Public guidance

- Compact header with collapsed global navigation
- No permanently exposed sidebar
- Home sections follow one-column reading order
- Journey stages appear as a vertical list
- Interior pages show breadcrumb and a compact local index
- Next actions move to the relevant destination and focus its heading
- No wide matrices in the primary reading path

### Adoption workspace

- Workspace identity and current posture appear before local navigation
- Workspace sections use a compact drawer or section index
- A material stop or restriction is visible without opening a separate report
- Decision content follows this one-column order: explanation, examples, response, evidence, consequence, remediation, next action
- Reports reflow as sections rather than wide tables

## Resume and progress behavior

### Public guidance

- No progress meter
- No completed-page count
- No forced sequence
- Direct entry and exploration are allowed

### Adoption workspace

Progress reports:

- decisions completed;
- evidence present or missing;
- material risks;
- active restrictions;
- remediation status;
- required approvals;
- current posture;
- next decision.

If a workspace exists, Resume opens its overview or last incomplete material decision. It does not return to the top of Home.

## Content priority

### Primary

- Why this matters
- Adoption journey
- Across the SDLC
- Apply the playbook
- Current workspace posture and decisions

### Secondary

- Roles
- Product outputs
- Examples
- Evidence principles
- Decision principles

### Contextual

- Response capture
- Evidence capture
- Risk interpretation
- Remediation
- Controls and templates
- Reports

### Reference and maintainer-facing

- Stable identifiers
- Detailed source provenance
- Internal decisions
- Repository structure
- Contribution guidance
- Full traceability

## Explicit exclusions

The architecture excludes:

- a global workbook modal;
- a public 19-step wizard;
- a page-completion score;
- a maturity score;
- an oversized hero that obscures purpose;
- a role selector before the problem is explained;
- an operating model before the product purpose;
- a fixed public sidebar;
- duplicated guidance for each role;
- repository folders as navigation;
- a generic “Use when needed” section;
- tool or vendor selection as a primary path;
- automatic claims of readiness, value, or expansion.

## Gate 2 approval questions

Approval requires agreement that:

1. The Home order is correct.
2. The nine-stage journey is correct.
3. The public page inventory is sufficient and not unnecessarily fragmented.
4. The SDLC activities are complete.
5. Roles are correctly treated as secondary lenses.
6. The Apply transition occurs at the right point.
7. The workspace navigation contains the right decision areas.
8. Cross-linking preserves one source of guidance.
9. Desktop and mobile navigation behavior is appropriate.
10. The exclusions prevent the current experience from being recreated.

After approval, this document becomes the governing information architecture. Gate 3 then defines the adoption, decision, risk, and hard-stop model. Visual wireframes and production implementation remain blocked until their later gates.
