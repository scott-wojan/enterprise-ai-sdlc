# DEC-UX-002: Use an Adoption Initiative as the Durable Workspace Model

## Status

Proposed

## Decision date

Pending product-owner approval.

## Decider

Product owner.

## Scope

Gate 6.1 product model, lifecycle and state scope. This decision governs later navigation, content hierarchy, wireframes and prototype behavior.

## Context

The failed Gate 6 visual exploration organized the workspace around one pilot. That structure could not explain what happens before the pilot, after evaluation, across multiple pilots or when a practice becomes part of normal operation.

The approved product contract and information architecture state that:

- the product covers the complete adoption journey;
- a pilot is one adoption increment, not the whole product;
- the workspace applies guidance to a specific organization and scope;
- posture, stage, work status, gate decision and evidence conclusion are different facts;
- decisions apply only to an exact scope;
- role and SDLC views are secondary lenses over shared guidance and records.

Gate 6.1 must convert those principles into a durable product model before navigation or visual design begins.

## Proposed decision

### Workspace container

Use the **adoption initiative** as the durable workspace container.

An organization may have one or more initiatives when their purpose, accountable ownership or investment boundary is materially different.

Gate 6 represents one organization and one initiative. Future organization separation, tenancy and identity remain Gate 7 decisions.

### Increment model

Use **adoption increment** as the durable concept for one bounded change in AI participation.

Use **pilot** as the plain-language label for the first controlled increment.

Later increments may include repeat pilots, bounded expansions, governed-workflow introductions, selective-orchestration trials, restrictions or improvements.

### Scope model

Bind every posture authorization, decision, evidence conclusion, risk, hard stop and remediation to an exact versioned scope.

Do not treat the organization or initiative as having one universal posture, stage or decision when contained scopes differ.

### Lifecycle model

Allow one initiative to contain several scopes in different journey stages.

The product may summarize current initiative priorities, but it must preserve each increment's stage, status, authority and decision history.

### Decision model

Keep these concepts separate:

1. proposal;
2. response and evidence;
3. immediate system consequence;
4. provisional interpretation;
5. accountable human decision;
6. evidence conclusion;
7. leadership investment decision.

Only the accountable human decision grants or expands authority.

### Remediation model

Verified remediation makes the affected scope eligible for reassessment.

It does not clear prior decision history, restart work or restore authority.

### Report model

Treat every report as a versioned audience-specific view of source evidence, risks and decisions.

A report does not own state and does not grant authority.

## Reasons

- The workspace must survive beyond one pilot.
- Multiple pilots or practices may exist at different stages.
- Enterprise-level summaries must not create accidental global authority.
- The exact-scope rule is necessary for bounded expansion.
- Separating evidence from authority prevents automated or misleading approval.
- Treating reports as views preserves one decision source.
- The model supports Gate 6 without deciding the Gate 7 platform or data architecture.

## Alternatives considered

### Pilot as the workspace container

**Benefit:** Simple for the first vertical slice.

**Cost or risk:** Makes the complete product look like a pilot tool, fragments leadership and initiative history, and requires a new shell after evaluation.

**Disposition:** Reject.

### One linear initiative stage

**Benefit:** Easy progress display.

**Cost or risk:** Misrepresents parallel increments, encourages page-completion behavior and hides returns to earlier decisions.

**Disposition:** Reject.

### One organization-wide AI posture

**Benefit:** Easy executive summary.

**Cost or risk:** The highest authorized posture could be mistaken for authority across teams, repositories, data and work types.

**Disposition:** Reject.

### Journey stage as the permanent workspace navigation

**Benefit:** Matches the public learning structure.

**Cost or risk:** Organizational work is decision-led, stages repeat, and several increments may be in different stages.

**Disposition:** Reject as the durable workspace model. Journey remains an important orientation and filtering lens.

### Reports as editable source records

**Benefit:** Familiar document-based workflow.

**Cost or risk:** Captured evidence, decisions and reports can diverge, and editing a report may appear to change authority.

**Disposition:** Reject.

## Consequences

### Work enabled after acceptance

- Gate 6.2 may define durable navigation and screen responsibilities.
- Navigation can distinguish initiative-level and increment-level work.
- Content hierarchy can place state according to its scope and authority.
- Structural wireframes can represent pre-pilot, pilot and post-pilot work coherently.

### Work still blocked

- Final navigation pattern
- Screen layout
- High-fidelity visual design
- Prototype implementation
- Platform, storage, identity and tenancy decisions
- Production changes

### Responsive consequences

Mobile and desktop experiences must preserve explicit scope and state separation. A single detached status panel cannot substitute for the decision sequence.

### Accessibility consequences

State cannot depend on color, position or badges alone. Each material state requires a textual label, scope and consequence.

## Affected sources

- [Gate 6.1 Product Model](../product-model.md)
- [Gate 6.1 Adoption Lifecycle](../adoption-lifecycle.md)
- [Gate 6.1 State and Scope Model](../state-scope-model.md)
- [UX and UI Source of Truth](../README.md)
- [Gate 6.1 issue](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/147)

## Validation required

Before Gate 6.2 begins, the product owner must confirm that the proposed model can answer:

- What is the durable workspace?
- What happens after the first pilot?
- Can one initiative contain multiple increments?
- What scope owns each displayed state?
- What changes authority?
- What does not change authority?
- What happens after remediation is verified?
- Can a report change a decision?

A later repository context-survival review must confirm that a contributor can answer these questions without conversation history.

## Supersedes

None.

This record applies DEC-UX-001 to the Gate 6.1 architecture.

## Superseded by

None.

## Unresolved questions

None identified that prevent product-owner review.
