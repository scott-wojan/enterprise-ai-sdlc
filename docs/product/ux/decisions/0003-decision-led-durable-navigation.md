# DEC-UX-003: Use decision-led durable navigation and single-owner screen responsibilities

## Status

Accepted

## Decision date

2026-08-11

Approved by the product owner after review of PR #150.

## Decider

Product owner

## Scope

Gate 6.2 public playbook navigation, adoption workspace navigation, local object navigation, direct entry, Resume behavior, screen responsibilities and representative task flows.

This decision does not select routes, layout, visual hierarchy, components, technology, storage, identity or tenancy.

## Context

The rejected product experience combined orientation, operating-model detail, navigation and workbook behavior in one long pilot-only surface. The result was difficult to understand, difficult to navigate and unable to explain what happened after the first pilot.

DEC-UX-001 requires architecture before visual design. DEC-UX-002 established the adoption initiative as the durable workspace, an adoption increment as the bounded change, and exact scope as the boundary for every consequential state.

Gate 6.2 must now define stable destinations and screen ownership that:

- explain the product before asking for organizational information;
- work before, during and after a pilot;
- keep initiative, opportunity, increment and practice context distinct;
- make decisions, hard stops, evidence and next actions findable;
- avoid wizard behavior;
- preserve one authoritative source for each decision, evidence record, risk and report;
- retain the same information structure on desktop and mobile.

## Decision

### Mandatory public navigation

The public playbook uses journey-led navigation with these stable destinations:

- Home
- Why this matters
- Adoption journey
- Across the SDLC
- Apply the playbook
- Examples and resources

Home establishes relevance and starting choices. Adoption Journey is the primary explanation of the method. SDLC and role views are secondary lenses that link to the same guidance and records.

Apply the Playbook is the explicit boundary between public guidance and organizational work. It explains the proposed decision, expected output, participants, evidence, scope, data-handling limits and prerequisite gaps before requesting organizational information.

### Mandatory workspace navigation

Every organizational record belongs to a named adoption initiative.

The initiative workspace uses these durable destinations:

- Overview
- Decisions
- Opportunities
- Adoption increments
- Governed practices
- Evidence
- Risks and remediation
- Reports

The structure is decision-led because Overview and Decisions prioritize the current accountable decision, blockers and authority. It is durable because opportunities, increments, practices, evidence, risks and reports remain findable across the complete lifecycle.

Decision categories such as intent, readiness, selection, launch, evaluation, restriction, expansion, investment and retirement live inside Decisions. They are not permanent global navigation items.

### Mandatory local navigation

Opening an opportunity, adoption increment or governed practice activates local navigation inside the initiative shell. It does not replace initiative navigation.

Local views show filtered related decisions, evidence and risks. The authoritative source remains the initiative-level destination.

### Mandatory context

Before destination content, every workspace view makes these scope-bound facts available when relevant:

- initiative name;
- viewed scope and scope type;
- journey stage;
- current AI participation;
- work status;
- active gate decision;
- evidence conclusion;
- active hard stops and restrictions;
- next accountable decision and owner.

These facts are not collapsed into one global status or maturity score.

### Mandatory screen ownership

Each durable destination and focused task view has one primary responsibility defined in the [Screen Responsibility Map](../screen-responsibility-map.md).

Authoritative ownership is:

- Decisions owns decision state and history.
- Evidence owns evidence records and snapshots.
- Risks and remediation owns risks, hard stops, restrictions and corrective work.
- Opportunities owns candidate use-case context.
- Adoption increments owns bounded-change context.
- Governed practices owns accepted operating-practice context.
- Reports owns derived audience views.

A summary, local view or report links to its source and cannot create a duplicate source record.

### Mandatory direct entry and Resume behavior

Direct entry to later work is allowed. It exposes missing prerequisites, links to the required decision or evidence, permits safe preparation and blocks actions requiring missing authority. It does not force the person through unrelated pages.

Resume opens the last incomplete material decision when it remains current and accessible. Otherwise, it opens Initiative Overview. It never returns the person to public Home or the top of a long page.

### Mandatory post-pilot behavior

A completed, stopped or restricted pilot remains under Adoption Increments as history.

A repeat pilot, remediation test or bounded expansion is a new increment under the same opportunity and initiative. A practice accepted into normal operation appears under Governed Practices while the originating increments remain historical.

The first pilot never becomes a separate permanent application area.

### Mandatory responsive behavior

Desktop and mobile use the same destinations, hierarchy and source ownership.

No essential task may depend on:

- a permanently open sidebar;
- horizontal navigation scrolling;
- a wide matrix;
- hover;
- a different mobile-only information architecture.

The visual mechanism for navigation is deferred to wireframing.

### Mandatory task behavior

The nine flows in the [Task Flow Model](../task-flow-model.md) govern representative movement and authority boundaries.

There is no page-completion progress model and no sequential Next interaction that implies organizational approval. Users move directly among material decisions and source records.

## Reasons

### It matches the work people are doing

Public visitors are learning and choosing a starting point. Workspace participants are making accountable decisions inside an initiative. Separate navigation respects those different jobs.

### It survives beyond the first pilot

Opportunities, increments and governed practices remain stable concepts as adoption is repeated, restricted, expanded, integrated, operated or retired.

### It makes consequential work findable

Overview and Decisions prioritize current blockers, authority and next accountable action. Risks and remediation makes prohibitions and corrective work directly reachable.

### It prevents duplicated truth

Object views provide context while canonical destinations own decisions, evidence, risks and reports. A favorable summary cannot diverge from an adverse source record.

### It supports direct expert use

Experienced organizations can enter later decision work directly while the product exposes prerequisites and preserves authority boundaries.

### It reduces cognitive load

Permanent navigation contains durable concepts, not every stage, control, status or possible next action. Focused decision units show only the information required for the current consequential choice.

### It works responsively

The hierarchy does not depend on a large desktop sidebar. Initiative context, local context and destination content can be ordered for one-column reading without changing the model.

## Alternatives considered

### Stage-led workspace navigation

**Description**

Use the nine journey stages as the permanent workspace navigation.

**Benefit**

Directly mirrors the public method and appears easy to teach.

**Cost or risk**

One initiative can contain opportunities, increments and practices in different stages at the same time. A stage-led workspace implies one linear organizational position, makes post-pilot history harder to find and encourages wizard behavior.

**Decision**

Rejected as the durable workspace structure. Journey stage remains a scoped fact and a decision filter.

### Pilot-led workspace navigation

**Description**

Organize the workspace around one pilot path, workbook or ordered pilot steps.

**Benefit**

Simple for the first demonstration.

**Cost or risk**

It fails after pilot completion, cannot represent multiple increments or practices, and teaches organizations to confuse completing a pilot with completing adoption.

**Decision**

Rejected.

### Role-led workspace navigation

**Description**

Provide separate primary areas for leaders, engineers, security, finance and other roles.

**Benefit**

May make each audience feel directly addressed.

**Cost or risk**

It duplicates decisions and evidence, hides cross-functional accountability and creates conflicting versions of the same record.

**Decision**

Rejected as primary navigation. Role views remain secondary lenses over shared records.

### Object-only workspace navigation

**Description**

Use opportunities, increments, practices, evidence and reports without dedicated Overview and Decisions destinations.

**Benefit**

Closely follows durable domain objects.

**Cost or risk**

The next accountable decision, blocked authority and decision history become harder to find. Participants must inspect objects to discover consequential work.

**Decision**

Rejected in pure form. The selected model combines decision-first orientation with durable object destinations.

### One dashboard or search-led workspace

**Description**

Use a single dashboard, global feed or search interface instead of durable destinations.

**Benefit**

Flexible when users already know exact record names.

**Cost or risk**

Poor for orientation, hard to browse, dependent on remembered terminology and likely to mix statuses from different scopes. It also provides no stable home for post-pilot work.

**Decision**

Rejected as the primary architecture. Search may supplement the hierarchy later.

### Reports as the primary workspace

**Description**

Use readiness, evaluation and leadership reports as the main way to access work.

**Benefit**

Matches common enterprise deliverables.

**Cost or risk**

Reports are snapshots and audience views. Making them primary would hide live source state, encourage manual inconsistency and risk turning report edits into authority.

**Decision**

Rejected. Reports remain durable but derived.

## Consequences

### Work enabled

- Gate 6.3 content priority, interaction sequence and responsive reading order
- low-fidelity wireframes after Gate 6.3 approval
- prototype routing and state planning
- navigation and task usability scenarios
- clear public-to-workspace transitions
- post-pilot and governed-practice scenarios

### Work still blocked

- sidebar, top navigation, drawer, tab or other visual navigation choice
- exact screen layouts
- visual hierarchy
- component design
- high-fidelity mockups
- framework, platform, identity, storage and tenancy
- production-site replacement

### Affected content and behavior

Public content must map to the six public destinations. Workspace content must map to one canonical destination or focused task view. Existing source packages remain content sources, not pages.

### Responsive consequences

Wireframes must prove that initiative identity, exact scope, hard stops, current decision and next action remain understandable on narrow viewports without a permanent sidebar.

### Accessibility consequences

- Navigation landmarks must distinguish public, initiative and local navigation.
- Current destination must be programmatically identifiable.
- Scope and consequence cannot rely on color or position alone.
- Focus must move to the destination heading after navigation.
- Source links and browser history must behave normally.
- One-column reading order must match decision priority.

### Implementation consequences

Future routes and components must preserve canonical ownership and scope. A technical model that requires copying decision or evidence state into object pages violates this decision.

### Validation required

Gate 6.3 and later work must validate the nine representative flows on desktop and narrow mobile viewports with sponsor, adoption-lead, delivery, evidence and control-role perspectives.

## Affected sources

- [Gate 6.2 issue](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/149)
- [UX and UI Source of Truth](../README.md)
- [Navigation Model](../navigation-model.md)
- [Screen Responsibility Map](../screen-responsibility-map.md)
- [Task Flow Model](../task-flow-model.md)
- [Product Model](../product-model.md)
- [Adoption Lifecycle](../adoption-lifecycle.md)
- [State and Scope Model](../state-scope-model.md)
- [DEC-UX-001](0001-architecture-before-visual-design.md)
- [DEC-UX-002](0002-adoption-initiative-product-model.md)

## Validation required

Before wireframing begins, the product owner must confirm:

1. the six public destinations;
2. the eight durable initiative destinations;
3. the hybrid decision-led and durable-object structure;
4. local navigation inside the initiative shell;
5. canonical source ownership;
6. direct-entry and Resume behavior;
7. post-pilot continuity;
8. identical desktop and mobile information structure;
9. the nine representative flows.

Later usability validation must confirm that participants can:

- identify initiative and exact scope;
- find the current accountable decision;
- identify hard stops and restrictions;
- distinguish evidence conclusion from authority;
- state what may continue and what must stop;
- reach another increment or governed practice after a pilot;
- complete the same tasks at narrow mobile width.

## Supersedes

None

## Superseded by

None

## Unresolved questions

The following are intentionally deferred and do not prevent this architecture decision:

- exact route names;
- initiative switching behavior;
- navigation control presentation;
- search inclusion and placement;
- visual treatment of scope and state;
- authentication, permissions, storage and collaboration.
