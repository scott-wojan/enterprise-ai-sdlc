# DEC-UX-004: Put the decision and governing consequence before task detail

## Status

Accepted

## Decision date

2026-08-11

Approved by the product owner after review of PR #152.

## Decider

Product owner

## Scope

Gate 6.3 content priority, interaction sequence, progressive disclosure, responsive reading order, keyboard focus and representative vertical-slice content blueprints.

This decision does not select navigation controls, page layout, wireframes, breakpoints, typography, color, components, visual direction, prototype technology or platform behavior.

## Context

The rejected experience exposed users to a large pilot path, terse questions and detached interface regions before establishing why the product existed or which organizational decision mattered. The result was dense but not decision-ready.

Accepted decisions now establish:

- architecture before visual design;
- adoption initiative as the durable workspace;
- exact scope for every consequential state;
- separate public and workspace navigation;
- stable destinations before, during and after a pilot;
- canonical source ownership.

Gate 6.3 must define how approved content becomes a usable decision experience without deleting the evidence, risk or authority detail required for enterprise adoption.

The hierarchy must work for public orientation, blocked readiness, hard stops, remediation, a later completed-pilot scenario, negative net-value evaluation, authority restriction and leadership investment.

## Decision

### Mandatory content hierarchy

Use five priority levels:

1. Decision or governing consequence
2. Current action boundary
3. Decision reasoning and task input
4. Connected corrective or decision work
5. Supporting explanation and trace

A later level may support an earlier one but may not displace it.

### Mandatory first content

For organizational work, first content identifies:

- decision, hard stop, evidence conclusion or leadership choice;
- exact scope;
- current authority when relevant.

For public Home, first content identifies:

- the real reader situation;
- why the product exists;
- the enterprise adoption job it helps perform.

No representative view begins with a dashboard, form, role selector, method name, progress count or metric panel.

### Mandatory action boundary

When a decision is blocked, restricted or awaiting disposition, the primary reading path states:

- what may continue;
- what must stop;
- owner;
- next accountable decision.

A hard stop appears immediately with the response or evidence review that triggered it.

### Mandatory response sequence

A material response follows this sequence:

1. question and why it matters;
2. accountable owner and participants;
3. answer guidance;
4. useful and insufficient examples for written responses;
5. structured response and evidence;
6. Save draft;
7. explicit Interpret response;
8. deterministic interpretation;
9. immediate consequence;
10. remediation or accountable review;
11. human decision.

Saving does not interpret. Interpreting does not decide.

### Mandatory evidence sequence

Evidence requests explain the condition or claim supported, source owner, scope, period, quality, protection and consequence of missing evidence before capture.

Evidence verification supports a decision but does not make one.

Frozen evidence snapshots preserve missingness, limitations, adverse evidence and dissent.

### Mandatory hard-stop sequence

A hard stop uses this order:

1. stopped action;
2. exact scope;
3. direct reason;
4. what may continue;
5. what must stop;
6. containment;
7. corrective action and owner;
8. completion evidence and verifier;
9. reassessment decision.

A hard stop cannot be dismissed, averaged, placed only in a report or cleared by editing its triggering response.

### Mandatory remediation sequence

Verified remediation means eligible for reassessment.

The prior decision remains governing until a new accountable decision supersedes it.

### Mandatory evaluation sequence

Pilot Evaluation presents:

1. decision and scope;
2. frozen evidence, comparability and completeness;
3. current evidence conclusion, shown as Decision pending until accountable disposition and summarized as the complete-system result after recording;
4. separate dimension results that must be reviewed before the evidence conclusion can be recorded;
5. adverse evidence and dissent;
6. claim limits;
7. separate authority decision;
8. separate leadership investment decision.

A local implementation improvement remains visible inside the Delivery Flow dimension. It cannot become the primary headline or a productivity claim when the complete system deteriorates.

The product does not display a composite value score.

### Mandatory leadership sequence

Leadership content begins with:

1. decision required;
2. recommended action;
3. exact scope and current authority;
4. complete-SDLC and total-cost result;
5. restrictions and category-owner decisions;
6. available options and consequences;
7. owners, dates, limitations and source links.

Leadership options outside current category authority remain unavailable with a direct reason.

### Mandatory interaction separation

Use distinct actions for:

- Navigate
- Save draft
- Add evidence reference
- Submit evidence for review
- Verify evidence for declared use
- Interpret response
- Request accountable review
- Record accountable decision
- Record remediation progress
- Submit remediation for verification
- Verify remediation
- Begin reassessment
- Generate report
- Record leadership investment decision
- Enter later representative scenario

Action labels must state their actual effect. There is no generic Next action for material decision work.

### Mandatory responsive order

Every view has one canonical semantic order.

Mobile presents it in one column. Desktop may reposition secondary content only when semantic and keyboard order remain unchanged.

A secondary region cannot be the only location for:

- decision required;
- exact scope;
- hard stop;
- what may continue;
- what must stop;
- evidence limitation;
- current authority;
- remediation owner;
- next decision;
- leadership option.

### Mandatory progressive disclosure

May be progressively disclosed:

- extended definitions;
- complete methodology;
- detailed control references;
- provenance and calculation detail;
- history;
- additional examples;
- role and SDLC lenses.

Must remain in the primary path:

- decision;
- exact scope;
- authority;
- hard stop;
- action boundary;
- material evidence gap;
- evidence conclusion;
- owner;
- corrective action;
- next decision;
- decision-changing limitation or dissent;
- total-cost result.

### Mandatory keyboard and focus behavior

- Destination navigation focuses the destination heading.
- Validation error focuses an error summary.
- Interpret response focuses the interpretation heading.
- A triggered hard stop focuses the hard-stop heading.
- Record decision focuses the recorded decision summary.
- Later-scenario transition focuses the scenario heading.
- Report generation focuses report status and decision required.
- Keyboard order follows semantic order, not visual columns.

## Reasons

### It matches consequential decision work

People first need to know what must be decided and what it means now. They can then judge the response, evidence and method supporting it.

### It reduces cognitive load without deleting proof

The hierarchy moves history, detailed controls and method explanation after current work while keeping scope, evidence limitations, adverse evidence and authority visible.

### It makes hard stops operational

The person sees the stopped action, safe work, corrective owner and reassessment path immediately instead of discovering them in a report.

### It prevents false organizational progress

Separate Save, Interpret, Verify and Decide actions stop interface completion from being confused with readiness or authority.

### It preserves honest evidence

Unknowns, missing downstream effects, total cost, unfavorable results and dissent remain visible and produce direct claim limits.

### It protects complete-system reasoning

Local speed remains visible but cannot dominate total effort, quality, operations, participant experience, product outcome or total cost.

### It supports mobile before desktop composition

One semantic order prevents desktop rails or metric panels from becoming the only understandable version of the decision.

### It supports traceability

Reports and summaries link to canonical source records. Supporting detail remains available after the current decision.

## Alternatives considered

### Source-package order

**Description**

Render the approved Gate 4 and Gate 5 source documents in their authored order with navigation between long sections.

**Benefit**

Maximum direct traceability to approved content.

**Cost or risk**

Exposes authoring detail as user experience, repeats concepts, creates long pages and forces people to determine content priority themselves.

**Decision**

Rejected. Source packages remain content sources, not pages.

### Form-first task order

**Description**

Begin with structured questions and show guidance only when the person asks for help.

**Benefit**

Appears fast for experienced users.

**Cost or risk**

Requests organizational information before explaining purpose, evidence or consequence. Encourages shallow answers and hides why Unknown or a failed condition matters.

**Decision**

Rejected. Guidance and examples occur before input, with supporting method detail available later.

### Balanced dashboard order

**Description**

Present posture, evidence, risk, progress, metrics and tasks as equal cards or panels.

**Benefit**

Provides broad situational awareness.

**Cost or risk**

Gives equal weight to unequal states, lets favorable conditions compete with hard stops and obscures the next accountable decision.

**Decision**

Rejected for consequential work. Initiative Overview may summarize sources, but governing consequences and next decisions come first.

### Detached consequence rail

**Description**

Keep a live interpretation, readiness or evaluation summary in a persistent side panel.

**Benefit**

Makes a summary continuously visible on wide screens.

**Cost or risk**

Separates the consequence from the response and evidence that caused it, creates a clumsy ongoing-evaluation state, weakens mobile order and encourages a single global status.

**Decision**

Rejected as the primary consequence location. Desktop may repeat a nonauthoritative summary after the complete consequence appears in semantic order.

### Metric-first evaluation

**Description**

Open Pilot Evaluation with prominent implementation speed, usage, story output or selected key performance indicators.

**Benefit**

Rapid numerical scan.

**Cost or risk**

Frames local activity as the result before comparability, downstream evidence, quality, operations, participants and total cost are understood.

**Decision**

Rejected. The complete-system conclusion precedes dimension detail. Local improvement remains visible in its proper dimension.

### Report-first decision process

**Description**

Use a leadership report as the main surface for readiness, evaluation and authority decisions.

**Benefit**

Familiar executive artifact.

**Cost or risk**

A report is a snapshot and cannot safely own live decision, evidence or authority state. Editing language could diverge from sources.

**Decision**

Rejected. Reports are derived after source decisions and remain read-only with respect to them.

### Separate mobile hierarchy

**Description**

Create a simplified mobile experience with fewer states and controls.

**Benefit**

Potentially shorter screens.

**Cost or risk**

Removes decision meaning, creates inconsistent authority representation and makes mobile a lower-trust surface.

**Decision**

Rejected. Mobile and desktop use the same semantic hierarchy.

## Consequences

### Work enabled

- Gate 6.4 low-fidelity responsive wireframes
- representative page composition
- interaction-state wireframes
- content selection for prototype screens
- keyboard and focus annotations
- responsive testing of the canonical order

### Work still blocked

- high-fidelity visual direction
- typography, color, imagery and component styling
- prototype implementation
- platform, identity, storage and collaboration
- production-site replacement

### Content consequences

Gate 4 and Gate 5 source packages must be selected and sequenced according to the accepted blueprints. They must not be pasted into screens wholesale.

### Interaction consequences

Future prototypes must implement distinct Save, Interpret, Verify and Decide states and must preserve hard-stop and reassessment behavior.

### Responsive consequences

Gate 6.4 wireframes must begin with the one-column order and then test desktop composition. A desktop layout that changes meaning violates this decision.

### Accessibility consequences

Wireframes and prototypes must identify semantic landmarks, focus destinations, validation error behavior and dynamic consequence announcements.

### Implementation consequences

Any later state model must preserve:

- draft response;
- interpreted response version;
- evidence status;
- system consequence;
- provisional interpretation;
- accountable decision;
- remediation verification;
- evidence conclusion;
- authority decision;
- leadership investment decision;
- report status.

Combining these to simplify implementation would violate the product contract.

## Affected sources

- [Gate 6.3 issue](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/151)
- [UX and UI Source of Truth](../README.md)
- [Content Priority Model](../content-priority-model.md)
- [Interaction Sequence Model](../interaction-sequence-model.md)
- [Responsive Reading Order](../responsive-reading-order.md)
- [Vertical-Slice Content Blueprints](../vertical-slice-content-blueprints.md)
- [Navigation Model](../navigation-model.md)
- [Screen Responsibility Map](../screen-responsibility-map.md)
- [Task Flow Model](../task-flow-model.md)
- [State and Scope Model](../state-scope-model.md)
- [DEC-UX-001](0001-architecture-before-visual-design.md)
- [DEC-UX-002](0002-adoption-initiative-product-model.md)
- [DEC-UX-003](0003-decision-led-durable-navigation.md)

## Validation required

Before wireframing begins, the product owner must confirm:

1. five-level content priority;
2. decision or governing consequence as first task content;
3. action boundary before task detail;
4. guidance and examples before written input;
5. separate Save, Interpret, Verify and Decide actions;
6. immediate hard-stop sequence;
7. verified remediation as reassessment eligibility only;
8. complete-system evaluation before local metric emphasis;
9. separate evidence, authority and investment decisions;
10. leadership decision and recommendation first;
11. one canonical desktop and mobile reading order;
12. progressive-disclosure boundaries;
13. keyboard and focus contract;
14. sixteen representative content blueprints.

Gate 6.4 validation must test whether the accepted order can be composed at desktop and mobile widths without hiding current consequences or increasing cognitive load.

## Supersedes

None

## Superseded by

None

## Unresolved questions

The following are intentionally deferred and do not prevent this decision:

- exact placement of navigation and context;
- exact use of disclosures;
- responsive breakpoints;
- page and component layout;
- visual emphasis;
- typography, color and iconography;
- prototype state persistence;
- platform and storage.
