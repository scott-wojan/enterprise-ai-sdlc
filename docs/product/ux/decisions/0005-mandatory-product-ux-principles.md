# DEC-UX-005: Make Product UX Principles Mandatory Design Constraints

## Status

Accepted

## Decision date

2026-08-11

Approved by the product owner through PR #154.

## Decider

Product owner

## Scope

Gate 6.4 and all later product-experience, wireframe, visual-system, prototype, usability-validation and production-interface work.

## Context

Accepted UX decisions established architecture, product state, navigation, content priority, interaction sequence and responsive reading order before visual design.

The first Gate 6.4 explorations still exposed a repeatable design failure. They combined adoption-journey state, work progress, evidence collection, decision consequence and remediation in the same composition. As a result, the user could not determine:

- where the represented scope was in the adoption journey;
- whether the current response or an earlier response caused the blocked state;
- which work could continue;
- which work had to stop;
- whether resolving the current item would remove the overall block;
- what action should happen next;
- whether the person could proceed safely.

The repository needs explicit product-design principles and an enforcement method so a future contributor cannot repeat this failure from conversation memory, visual preference or a plausible-looking generated layout.

## Decision

Adopt [Product UX Design Principles](../design-principles.md) as mandatory design constraints.

The standard adapts sixteen principles from the UXPin article recorded as SRC-016 and adds a product-specific separation contract for:

1. journey management;
2. work and evidence collection;
3. stage-gate decisions;
4. reporting.

Every UX checkpoint must complete a [Product UX Principle Conformance Record](../templates/principle-conformance-record.md).

An artifact cannot advance when:

- an applicable principle is unassessed;
- conformance is supported only by author opinion;
- a mandatory principle fails;
- journey, work, evidence, decision or report state is intermingled in a way that obscures the primary task;
- aggregate state lacks scope, cause, consequence or recovery;
- representative task validation exposes an unresolved blocking failure.

Gate 6.5 must translate applicable principles into reusable patterns, components, state treatments, content rules, accessibility behavior and design tokens. Later implementation must automate deterministic checks where practical while preserving human comprehension and usability validation.

## Reasons

### Principles must affect decisions

A reference link does not prevent design drift. The project needs mandatory rules, evidence and approval consequences.

### Screen responsibilities must remain separate

Journey status is useful on an overview. A complete journey dashboard is harmful when it competes with one answer or evidence task. The interface needs controlled context rather than universal context.

### Progress must retain meaning

Work completion, evidence completeness, evidence verification, decision readiness, journey position and authority are different facts. Combining them creates false progress and incorrect expectations.

### Generated design needs durable constraints

Future humans and AI contributors must reconstruct the design standard from GitHub and demonstrate conformance before presenting work.

### Validation must involve representative humans

Rendering successfully or satisfying the designer does not establish usability. Important task outcomes require observed evidence and retesting after failure.

## Alternatives considered

### Keep the UXPin article as a reference only

Rejected. A link can inform a contributor but does not define project-specific behavior, evidence or blocking conditions.

### Add a short checklist to pull requests

Rejected as insufficient. A short checklist encourages self-attestation without explaining how the principles apply to this product or requiring supporting evidence.

### Defer principles until the visual design system

Rejected. Information hierarchy, cognitive load, state separation, feedback, error recovery and accessibility already govern structural wireframes.

### Treat principles as recommendations

Rejected. Optional principles would not prevent recurrence across contributors and sessions.

## Consequences

### Work enabled

- revised Gate 6.4 anchor wireframes grounded in explicit principles;
- consistent product-owner review questions;
- traceable design rationale;
- later design-system enforcement;
- repeatable cross-session UX review.

### Additional required work

- complete a conformance record for Gate 6.4 anchor views;
- update Gate 6.4 blocking conditions and acceptance criteria;
- carry principle enforcement into Gate 6.5 and implementation validation;
- record representative-user task results before claiming validation.

### Work still blocked

- replacement Gate 6.4 visuals until the separation contract is applied;
- Gate 6.5 until Gate 6.4 is approved;
- production implementation until the governing design gates are complete.

## Affected sources

- [UX and UI Source of Truth](../README.md)
- [UX and UI Design Governance](../design-governance.md)
- [Product UX Design Principles](../design-principles.md)
- [Product UX Principle Conformance Record](../templates/principle-conformance-record.md)
- [Gate 6.4 issue](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/153)
- [Source Ledger](../../../sources/source-ledger.md)
- Repository working instructions

## Validation required

Before this decision is accepted, the product owner must confirm that:

1. the sixteen principles are adapted into product-specific requirements rather than copied as generic advice;
2. journey management, work and evidence collection, stage-gate decisions and reporting are separate experiences;
3. the conformance record requires evidence rather than self-attestation;
4. unresolved failures block advancement;
5. Gate 6.4 includes the new review and validation requirements;
6. later design-system and implementation work must encode deterministic rules where practical;
7. representative-human validation remains required for comprehension and usability.

## Supersedes

None

## Superseded by

None

## Unresolved questions

No unresolved question prevents product-owner review.
