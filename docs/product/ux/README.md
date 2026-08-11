# UX and UI Source of Truth

## Status

This directory is the mandatory entry point for product experience, interaction design, information hierarchy, visual design, prototyping and usability-validation work.

It governs Gate 6 and later product-design work together with the approved Product Contract, information architecture, decision and evidence models, and end-user content experiences.

GitHub is authoritative. Conversation history, generated images, unpublished sketches and model memory are not authoritative.

## Required reading order

Before changing the public experience, adoption workspace, navigation, screen structure, interaction behavior, visual system or prototype, read:

1. [Product Contract](../product-contract.md)
2. [Approved Information Architecture](../information-architecture.md)
3. [Gate 5 Cross-Experience Review](../gate-5-cross-experience-review.md)
4. This file
5. [Gate 6 UX Recovery and Design Plan](gate-6-ux-recovery-plan.md)
6. [UX and UI Design Governance](design-governance.md)
7. [UX Decision Register](decisions/README.md)
8. The issue governing the current work

The active issue may name additional required sources. If conversation instructions conflict with approved repository content, stop and resolve the conflict in GitHub before implementation.

## Current checkpoint

Gate 6.3 was approved by the product owner on 11 August 2026.

Accepted Gate 6.3 artifacts:

- [Content Priority Model](content-priority-model.md)
- [Interaction Sequence Model](interaction-sequence-model.md)
- [Responsive Reading Order](responsive-reading-order.md)
- [Vertical-Slice Content Blueprints](vertical-slice-content-blueprints.md)
- [DEC-UX-004](decisions/0004-decision-consequence-content-hierarchy.md)

Gate 6.4 responsive structural wireframes may begin. Visual direction, implementation and production changes remain blocked.

Gate 6.2 was approved by the product owner on 11 August 2026.

Accepted Gate 6.2 artifacts:

- [Navigation Model](navigation-model.md)
- [Screen Responsibility Map](screen-responsibility-map.md)
- [Task Flow Model](task-flow-model.md)
- [DEC-UX-003](decisions/0003-decision-led-durable-navigation.md)

Gate 6.1 was approved by the product owner on 11 August 2026.

Accepted Gate 6.1 artifacts:

- [Product Model](product-model.md)
- [Adoption Lifecycle](adoption-lifecycle.md)
- [State and Scope Model](state-scope-model.md)
- [DEC-UX-002](decisions/0002-adoption-initiative-product-model.md)

## Product structure that must survive implementation

The product has two connected surfaces:

### Public playbook

The public playbook explains why the product exists, who it serves, the full adoption journey, the decisions organizations must make, the people who must participate, and the evidence required before asking for organizational information.

Its primary organization is the nine-stage adoption journey. Role and SDLC views are secondary ways to reach the same guidance.

Accepted durable public destinations are:

- Home
- Why this matters
- Adoption journey
- Across the SDLC
- Apply the playbook
- Examples and resources

### Adoption workspace

The workspace applies the playbook to one adoption initiative. It is not a pilot-only workbook or questionnaire.

A pilot is one controlled adoption increment inside the initiative. The workspace must continue to make sense before a pilot, during a pilot, after evaluation, during remediation, while deciding whether to expand or restrict adoption, and during ongoing operation.

Accepted durable workspace concepts include:

- adoption initiative;
- current AI participation posture;
- journey stage;
- pilot or adoption increment;
- material decision;
- evidence;
- risk and hard stop;
- remediation;
- approval;
- evaluation;
- leadership decision and report.

Every displayed state must identify which concept and scope it applies to.

Accepted durable initiative destinations are:

- Overview
- Decisions
- Opportunities
- Adoption increments
- Governed practices
- Evidence
- Risks and remediation
- Reports

An opportunity, increment or practice opens inside the initiative shell. It never replaces the initiative context.

## Governing and proposed UX decisions

[DEC-UX-001](decisions/0001-architecture-before-visual-design.md) is Accepted and resets Gate 6 to architecture-first design.

[DEC-UX-002](decisions/0002-adoption-initiative-product-model.md) is Accepted and defines the adoption initiative, adoption increment, exact scope, lifecycle, decision and state model.

[DEC-UX-003](decisions/0003-decision-led-durable-navigation.md) is Accepted. It defines separate public and workspace navigation, a decision-led initiative structure, local object navigation, canonical screen ownership, direct entry, Resume and post-pilot continuity.

[DEC-UX-004](decisions/0004-decision-consequence-content-hierarchy.md) is Accepted. It places the decision or governing consequence first, keeps current action boundaries in the primary path, separates Save, Interpret, Verify and Decide, and defines one responsive semantic order.

The three visual mockups generated on 10 August 2026 are rejected exploratory outputs. No visual direction was selected. They must not be used as implementation targets or evidence of approval.

High-fidelity visual design remains blocked until product structure, lifecycle, navigation, state scope, content hierarchy, interaction sequence, responsive order and low-fidelity wireframes are explicitly approved.

## Artifact structure

- [Gate 6 UX Recovery and Design Plan](gate-6-ux-recovery-plan.md) defines the corrected design process and Gate 6 finish line.
- [UX and UI Design Governance](design-governance.md) defines how guidance, decisions, references, prototypes and validation survive across contributors and contexts.
- [Product Model](product-model.md) defines the durable concepts.
- [Adoption Lifecycle](adoption-lifecycle.md) defines how those concepts change over time.
- [State and Scope Model](state-scope-model.md) defines the facts and authority boundaries that must remain separate.
- [Navigation Model](navigation-model.md) defines stable destinations and movement.
- [Screen Responsibility Map](screen-responsibility-map.md) defines what each destination owns, uses and produces.
- [Task Flow Model](task-flow-model.md) tests the architecture against representative work.
- [Content Priority Model](content-priority-model.md) defines what people must understand first and what may remain supporting detail.
- [Interaction Sequence Model](interaction-sequence-model.md) defines the behavior and authority boundary of each consequential action.
- [Responsive Reading Order](responsive-reading-order.md) defines one semantic order for desktop, mobile, keyboard and screen-reader use.
- [Vertical-Slice Content Blueprints](vertical-slice-content-blueprints.md) applies the hierarchy to the sixteen representative views.
- [UX Decision Register](decisions/README.md) lists accepted, proposed, rejected and superseded UX decisions.
- [Decision Record Template](templates/decision-record.md) is required for material product-experience choices.
- Approved wireframe, visual-system and validation artifacts will remain linked from this file.

## Canonical ownership rule

Future UX and implementation work must preserve these source responsibilities:

- Decisions owns authoritative decision state and history.
- Evidence owns evidence records and frozen snapshots.
- Risks and remediation owns risk, hard-stop, restriction and corrective-work records.
- Opportunities, increments and practices own their durable context.
- Reports owns derived audience views and never authority.

A summary or filtered view links to the source. It does not create another source of truth.

## Working rule

A future contributor must be able to reconstruct the approved product experience from repository sources without access to the conversation that produced them. If that is not possible, the design context is incomplete and implementation must stop.
