# DEC-UX-001: Establish Architecture Before Visual Design

## Status

Accepted

## Decision date

11 August 2026

## Decider

Product owner

## Scope

Gate 6 and all later product-experience, interaction and visual-design work.

## Context

Gate 6 began with three high-fidelity visual directions for a representative readiness decision.

Those explorations were created before the product's complete lifecycle, durable workspace model, navigation, state scope, page-level content priority, interaction sequence and responsive reading order were defined.

The visual outputs exposed structural failures:

- one navigation model treated the pilot as the whole product;
- it did not explain how navigation works after a pilot;
- a right-side decision panel appeared to represent a permanent evaluation state;
- current posture, evidence sufficiency, decision result and work authority were not clearly scoped;
- decision consequences were visually separated from the response that caused them;
- polished styling made unresolved product questions harder to see.

No visual option was selected.

## Decision

Gate 6 returns to architecture-first design.

Before new high-fidelity visual directions or implementation, the product owner must approve:

1. connected public and workspace surfaces;
2. durable product objects and relationships;
3. the complete adoption lifecycle and alternate paths;
4. global and local navigation responsibilities;
5. state ownership and scope;
6. page-level content priority;
7. decision, evidence, hard-stop, remediation and authority interaction behavior;
8. desktop and mobile reading order;
9. low-fidelity structural wireframes.

Future visual options must share the same approved structure and content. They may vary visual treatment but may not introduce different information architectures.

## Rejected direction

The three visual mockups generated on 10 August 2026 are rejected exploratory outputs.

They are not:

- implementation targets;
- approved visual directions;
- approved navigation;
- approved content hierarchy;
- evidence that Gate 6 responsive layouts were approved.

They must not be reused unless a future decision explicitly reintroduces a specific element after structural approval.

## Reasons

- The product must support adoption from initial understanding through piloting, evaluation, remediation, expansion, restriction and ongoing operation.
- A pilot is one adoption increment, not the product's permanent organizing structure.
- Core consequences must follow the decision and evidence that produced them.
- Mobile reading order must determine whether secondary rails are appropriate.
- Visual polish cannot resolve missing information architecture.
- Repository artifacts must let future contributors reconstruct the approved design without conversation context.

## Consequences

- Gate 6 Checkpoints 1 and 2 must be revised to include the architecture-first sequence.
- Prototype implementation remains blocked.
- Visual direction selection remains blocked.
- Gate 6 may continue through architecture, hierarchy and wireframe work.
- Approved design artifacts and decisions will be stored under `docs/product/ux`.
- Every material future UX decision will use a DEC-UX record.

## Affected sources

- [UX and UI Source of Truth](../README.md)
- [Gate 6 UX Recovery and Design Plan](../gate-6-ux-recovery-plan.md)
- [UX and UI Design Governance](../design-governance.md)
- [Gate 6 issue](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/145)

## Validation required

Before high-fidelity visual exploration, review the structural wireframes at desktop and mobile widths and confirm that representative users can identify:

- where they are;
- the current scope;
- the current decision;
- the accountable owner;
- what may continue;
- what must stop;
- what happens after the pilot.

## Supersedes

No prior UX decision record. This decision rejects the unrecorded visual-first Gate 6 direction.
