# UX and UI Design Governance

## Purpose

This document defines how product-experience guidance, decisions, design directions, prototypes and validation evidence remain usable across people, tools and conversation contexts.

The repository must contain enough approved context for a new contributor to continue the work without relying on private conversation history or model memory.

## Source hierarchy

When sources disagree, use this order:

1. Approved Product Contract and governing product models
2. Accepted UX decision records
3. Product UX Design Principles
4. Approved UX architecture and content-priority specifications
5. Approved wireframes and interaction specifications
6. Approved visual-system specification
7. Approved prototype behavior
8. Recorded validation findings and resulting decisions
9. Active issue scope and acceptance criteria
10. Pull-request discussion
11. Conversation history, unpublished sketches and generated images

A lower source cannot silently override a higher source.

## Required durable artifacts

### Governing entry point

[UX and UI Source of Truth](README.md) names the required reading order and links to current approved artifacts.

### Architecture specifications

Architecture artifacts define:

- product surfaces;
- information objects and relationships;
- lifecycle and alternate paths;
- navigation;
- screen responsibilities;
- state ownership and scope;
- role and SDLC lenses.

Architecture specifications must not contain accidental visual-design decisions.

### Content-priority specifications

For every representative screen or decision unit, record:

- intended user;
- user need;
- decision being supported;
- required information;
- reading order;
- primary, secondary and supporting content;
- response type;
- evidence expectation;
- useful and insufficient examples;
- immediate interpretation;
- hard-stop behavior;
- permitted and prohibited work;
- remediation;
- accountable next action;
- mobile reading order.

### Product design principles and conformance

The [Product UX Design Principles](design-principles.md) define mandatory design rules and the separation between journey management, work and evidence collection, stage-gate decisions and reporting.

Every UX checkpoint must complete a [Product UX Principle Conformance Record](templates/principle-conformance-record.md). The record must cite artifact or validation evidence for every applicable principle. Self-attestation is not sufficient.

A failed, unassessed or unsupported applicable principle makes the checkpoint Revision required. A material exception requires a DEC-UX record.

### Interaction specifications

Record:

- destinations and direct navigation;
- entry and exit conditions;
- state transitions;
- response behavior;
- validation and error behavior;
- focus movement;
- keyboard behavior;
- save, resume and provisional export behavior;
- actions that do not grant authority;
- scenario boundaries that represent elapsed organizational work.

### Wireframes

Approved wireframes must be stored or linked from the repository and identified by:

- screen and state;
- desktop or mobile viewport;
- decision-record reference;
- approval status;
- approval date;
- superseded version when applicable.

Low-fidelity wireframes establish structure. They are not replaceable by prose descriptions of layout.

### Visual-system specification

After structural approval, record:

- typography;
- color roles and contrast requirements;
- spacing;
- layout limits;
- component patterns;
- icon source;
- status and hard-stop treatments;
- responsive behavior;
- accessibility requirements;
- examples of permitted and prohibited use.

A visual-system specification may not change the approved information architecture.

### Prototype manifest

Every prototype checkpoint must record:

- repository path and commit;
- governing UX decisions;
- scenarios and representative data;
- implemented destinations and interactions;
- intentionally nonfunctional controls;
- viewport support;
- accessibility checks performed;
- known limitations;
- whether it is isolated, disposable or production-bound.

### Validation record

Every validation round must record:

- date;
- prototype commit;
- participant role, without unnecessary personal data;
- tasks;
- observed outcomes;
- blocking failures;
- accessibility and device conditions;
- changes required;
- retest result;
- explicit statement of validated, ready for validation, revision required or stopped.

## UX decision records

Use a dedicated decision record for any choice that materially changes:

- product surfaces;
- lifecycle;
- navigation;
- information hierarchy;
- content priority;
- state scope;
- authority or decision behavior;
- interaction pattern;
- responsive behavior;
- accessibility requirement;
- visual system;
- prototype scope;
- validation finish line.

Use the [decision-record template](templates/decision-record.md).

Decision statuses are:

- **Proposed:** under review and not authoritative.
- **Accepted:** approved and authoritative.
- **Rejected:** considered and explicitly not selected.
- **Superseded:** replaced by a later accepted decision.

A decision record must state its affected artifacts and any previous decision it supersedes.

## Decision register

The [UX Decision Register](decisions/README.md) is the index for all UX records.

Every record uses a stable identifier in the form **DEC-UX-###**. Identifiers are never reused.

The register must show:

- identifier and title;
- status;
- decision date;
- affected Gate or product area;
- superseding record when applicable.

## Issue and pull-request traceability

Every UX issue must include:

- outcome;
- required context;
- decision requested;
- included and excluded scope;
- deliverables;
- acceptance criteria;
- validation required;
- downstream work that remains blocked.

Every UX pull request must state:

- issue;
- governing UX records;
- exact decision or artifact changed;
- screenshots or rendered references when visual output changed;
- desktop and mobile review result;
- accessibility checks;
- validation result;
- completed principle conformance record;
- unresolved principle failures or exceptions;
- unresolved questions;
- which downstream checkpoint becomes available after merge.

## Context loading for future work

Before starting UX or UI work, a contributor must:

1. Read the repository working instructions.
2. Read the UX source-of-truth entry point.
3. Read the active issue.
4. Read the governing architecture and content sources named by the issue.
5. Read every accepted UX decision affecting the work.
6. Read the Product UX Design Principles.
7. Confirm which visual and prototype references are approved.
8. Confirm which outputs are rejected, exploratory or superseded.
9. State the current checkpoint before producing work.

The contributor must stop if the repository does not answer a material product question. The missing decision must be recorded and resolved before implementation.

## Visual exploration rules

Visual exploration begins only after the product model, lifecycle, navigation, state scope, content hierarchy, interaction sequence and responsive wireframes are approved for the relevant surface.

When multiple visual directions are explored:

- every direction must use the same approved structure and content priority;
- variations may change visual treatment only;
- each direction must be labeled exploratory;
- no direction becomes authoritative until selected in an accepted decision record;
- rejected options remain clearly marked and must not be reused accidentally.

Generated images stored outside the repository are not durable product decisions.

## Change control

A material UX change follows this sequence:

1. Create or update the governing issue.
2. Draft the architecture, content, interaction or visual artifact.
3. Record the decision as Proposed.
4. Review the defined checkpoint.
5. Record product-owner acceptance or rejection.
6. Change the decision status.
7. Update the source-of-truth links.
8. Implement only from accepted artifacts.
9. Validate against the approved artifact and task outcomes.
10. Record findings and any required new decision.

Do not edit an accepted decision to reverse its meaning. Create a superseding record.

## Human-centered quality rules

All future UX and UI work must:

- comply with the Product UX Design Principles and complete the required conformance record;
- begin with a documented representative user, situation, problem, primary job and successful outcome;
- give every screen one primary responsibility and one dominant action;
- separate journey management, work and evidence collection, stage-gate decisions and reporting;
- keep complete journey state out of focused answer and evidence work except for restrained context and directly relevant consequences;
- label progress by the exact thing counted rather than combining work, evidence, verification, decision and journey progress;
- explain the scope, cause, consequence, permitted work, prohibited work and recommended next action for aggregate state;
- explain the product purpose before requesting organizational information;
- support the complete adoption lifecycle rather than only the pilot;
- distinguish organization, initiative, pilot, decision, evidence and authority state;
- put consequential information in the natural reading order;
- show hard stops immediately;
- state what may continue and what must stop;
- keep remediation separate from approval;
- make accountable human decisions explicit;
- provide useful and insufficient written-response examples with explanations;
- keep detailed identifiers and control references out of the primary reading path;
- support one-column mobile reading;
- avoid essential hover, wide tables and horizontal scrolling;
- support keyboard operation and visible focus;
- use direct language without unexplained jargon;
- avoid em dashes.

## Principle enforcement gate

A UX artifact cannot advance when:

- an applicable UXP principle is not assessed;
- evidence for conformance is missing;
- a mandatory principle fails;
- the screen has no clear primary job;
- journey state competes with focused work or evidence collection;
- a status lacks scope, cause, consequence or recovery;
- a progress indicator conflates different facts;
- task completion implies readiness, approval or authority;
- representative task validation has an unresolved blocking failure.

Gate 6.5 must encode applicable principles into reusable patterns, components, states, content rules, accessibility behavior and design tokens. Production validation must automate deterministic checks where practical and retain human task validation for comprehension and usability.

## Gate 6 context-survival test

Before Gate 6 implementation begins, give the repository to a contributor who did not participate in the conversation.

Without additional explanation, that contributor should be able to identify:

- the product purpose;
- the public and workspace boundaries;
- the complete adoption lifecycle;
- the role of a pilot;
- the approved navigation model;
- the current decision and state model;
- the page-level content hierarchy;
- the current checkpoint;
- approved and rejected visual references;
- the exact next deliverable;
- the Gate 6 validation finish line.

Any missing answer is a documentation defect that must be corrected before implementation.
