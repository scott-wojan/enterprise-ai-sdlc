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

## Product structure that must survive implementation

The product has two connected surfaces:

### Public playbook

The public playbook explains why the product exists, who it serves, the full adoption journey, the decisions organizations must make, the people who must participate, and the evidence required before asking for organizational information.

Its primary organization is the nine-stage adoption journey. Role and SDLC views are secondary ways to reach the same guidance.

### Adoption workspace

The workspace applies the playbook to one adoption initiative. It is not a pilot-only workbook or questionnaire.

A pilot is one controlled adoption increment inside the initiative. The workspace must continue to make sense before a pilot, during a pilot, after evaluation, during remediation, while deciding whether to expand or restrict adoption, and during ongoing operation.

Durable workspace concepts include:

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

## Current governing UX decision

[DEC-UX-001](decisions/0001-architecture-before-visual-design.md) resets Gate 6 to architecture-first design.

The three visual mockups generated on 10 August 2026 are rejected exploratory outputs. No visual direction was selected. They must not be used as implementation targets or evidence of approval.

High-fidelity visual design remains blocked until product structure, lifecycle, navigation, state scope, content priority, interaction sequence, responsive reading order and low-fidelity wireframes are explicitly approved.

## Artifact structure

- [Gate 6 UX Recovery and Design Plan](gate-6-ux-recovery-plan.md) defines the corrected design process and Gate 6 finish line.
- [UX and UI Design Governance](design-governance.md) defines how guidance, decisions, references, prototypes and validation survive across contributors and contexts.
- [UX Decision Register](decisions/README.md) lists accepted, proposed, rejected and superseded UX decisions.
- [Decision Record Template](templates/decision-record.md) is required for material product-experience choices.
- Future architecture, content-priority, wireframe, visual-system and validation artifacts will be linked from this file after approval.

## Working rule

A future contributor must be able to reconstruct the approved product experience from repository sources without access to the conversation that produced them. If that is not possible, the design context is incomplete and implementation must stop.
