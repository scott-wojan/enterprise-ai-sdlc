# Gate 6.2 Navigation Model

## Status

Proposed for product-owner approval under [Gate 6.2](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/149).

This document defines destinations, hierarchy and movement. It does not choose a sidebar, top navigation, drawer, visual treatment or route technology.

[DEC-UX-003](decisions/0003-decision-led-durable-navigation.md) records the proposed navigation decision.

## Navigation objective

A person must be able to understand the adoption method publicly, enter organizational work knowingly, remain oriented to one adoption initiative, move directly to consequential work, and continue using the same structure after a pilot ends.

The structure must answer:

- Am I reading guidance or changing an organizational record?
- Which adoption initiative am I in?
- Which opportunity, increment, practice or decision am I viewing?
- What is blocked?
- What decision is next?
- Where do I go after the current pilot?
- Where is the authoritative evidence or decision record?

## Two separate navigation systems

The product has separate public and workspace navigation because reading guidance and conducting organizational work are different jobs.

### Public navigation

Public navigation is journey-led and open.

### Workspace navigation

Workspace navigation is decision-led inside a durable adoption initiative.

Moving between them is explicit. A public page does not quietly become a form, and a workspace destination does not masquerade as general guidance.

## Proposed hierarchy

```text
Enterprise AI SDLC
├── Public playbook
│   ├── Home
│   ├── Why this matters
│   ├── Adoption journey
│   ├── Across the SDLC
│   ├── Apply the playbook
│   └── Examples and resources
│
└── Adoption workspace
    └── Adoption initiative
        ├── Overview
        ├── Decisions
        ├── Opportunities
        ├── Adoption increments
        ├── Governed practices
        ├── Evidence
        ├── Risks and remediation
        └── Reports
```

An opportunity, increment or governed practice opens inside the initiative context. It does not replace the initiative navigation.

## Public playbook navigation

### Home

The product name returns to Home from public destinations.

Home immediately explains:

- why the product exists;
- who it is for;
- the enterprise problems it addresses;
- what organizations will produce;
- the complete journey;
- full-SDLC coverage;
- who participates;
- how to choose a starting point.

No public Home action opens a blank workspace or workbook.

### Why this matters

Contains orientation about:

- adoption pressure;
- disconnected experimentation;
- accountability;
- tangible value;
- risk, restriction and stopping;
- adoption modes and authority;
- product scope and limitations.

Supporting pages have stable destinations and breadcrumbs.

### Adoption journey

Contains:

- one journey overview;
- nine stage destinations;
- stage decisions;
- expected outputs;
- responsible roles;
- reasons to stop or return;
- links to relevant SDLC guidance;
- informed workspace entry.

The journey is not a public progress tracker.

### Across the SDLC

Contains:

- one SDLC overview;
- nine shared activity destinations;
- relevant opportunities;
- authority and context considerations;
- validation and evidence requirements;
- related journey stages and roles;
- contextual Apply links.

### Apply the playbook

Owns the transition from public guidance to organizational work.

It explains:

- the decision about to be made;
- expected output;
- required participants;
- evidence to gather;
- information that will be recorded;
- how hard stops and remediation work;
- what may be saved or exported;
- information that should not be entered;
- that screen completion does not grant authority.

It offers:

- Begin new initiative work
- Resume existing initiative
- Review a provisional export

The platform behavior for identity, storage and collaboration remains undecided.

### Examples and resources

Contains:

- examples organized by stage, SDLC activity, posture, outcome and role;
- definitions;
- evidence and decision principles;
- product outputs;
- detailed controls and templates;
- facilitation guidance;
- methodology governance;
- sources and maintainer material.

Role pages are secondary destinations reached from relevant public guidance. They are not global primary navigation.

Search may be added later when content volume justifies it. Search does not replace the hierarchy.

## Apply transition behavior

### Starting new organizational work

The person chooses a starting need:

- establish adoption intent;
- assess readiness;
- select an opportunity;
- design an adoption increment;
- review an active increment;
- evaluate a completed increment;
- consider bounded expansion.

The product then shows:

- proposed scope;
- prerequisites;
- people required;
- expected decision and output;
- evidence needed;
- missing earlier decisions.

Only after this explanation does the person enter or create the adoption initiative context.

### Direct entry to later work

Direct entry is allowed for organizations that already have prior records.

It must not hide prerequisites.

When a prerequisite is missing, the destination:

- explains the missing condition;
- links to the required decision or evidence;
- shows what preparatory work may continue;
- blocks any action that requires the missing authority;
- does not force the person through unrelated pages.

### Resume

Resume opens:

1. the last incomplete material decision when that decision remains current; or
2. the initiative overview when the last destination is stale, completed, superseded or inaccessible.

Resume never returns a person to public Home or the top of a long page.

## Adoption workspace context

Every workspace destination belongs to one adoption initiative.

Before destination-specific content, the product must make these facts available:

- initiative name;
- viewed scope and scope type;
- journey stage for that scope;
- current AI participation for that scope;
- work status;
- active gate decision;
- evidence conclusion when applicable;
- active hard stops or restrictions;
- next accountable decision and owner.

This context is not one global status. Each fact retains its scope.

How these facts are visually placed remains a later decision.

## Durable initiative navigation

### Overview

Answers:

- Why does this initiative exist?
- Who owns it?
- What is currently allowed?
- Which opportunities, increments and practices exist?
- What is blocked or overdue?
- What leadership decision is next?
- What changed recently?

Overview summarizes source records and links to them. It does not own or edit their state.

### Decisions

Owns the authoritative decision workflow and history.

It provides:

- decisions requiring action;
- decisions waiting for evidence or review;
- blocked and expired decisions;
- current approvals and conditions;
- decisions grouped by journey stage and scope;
- superseded decision history.

Decision categories include:

- intent and ownership;
- readiness and baseline;
- opportunity selection;
- increment design;
- launch and continuation;
- pause, restriction, restart and stop;
- evaluation and evidence conclusion;
- expansion;
- governed-practice acceptance;
- investment and retirement.

A material decision opens as a focused decision unit.

### Opportunities

Owns candidate problems and use-case selection context.

It provides:

- candidate opportunities;
- selected, deferred and rejected opportunities;
- intended outcomes;
- SDLC activity;
- alternatives to AI;
- suitability and evidence feasibility;
- linked selection decision;
- linked adoption increments.

The authoritative selection decision remains in Decisions. Opportunities displays and links to it.

### Adoption increments

Owns bounded attempts to change AI participation.

It provides:

- proposed, preparing, active, paused, stopped and completed increments;
- first pilots;
- repeat pilots;
- remediation tests;
- bounded expansions;
- exact scope;
- current and proposed posture;
- linked opportunity;
- operating boundary;
- lifecycle position;
- next decision.

Opening an increment activates local increment navigation without replacing the initiative shell.

### Governed practices

Owns AI-enabled practices accepted into normal operation.

It provides:

- current practices;
- exact operating scope;
- current posture and authority;
- owners;
- review dates;
- evidence health;
- incidents and restrictions;
- next operating decision;
- retired practices.

A practice remains part of the same initiative history.

### Evidence

Owns evidence records and frozen snapshots.

It provides:

- evidence expected, missing, under review, verified, rejected, stale and superseded;
- source, owner, scope and period;
- quality and limitations;
- decisions and reports using the evidence;
- complete-SDLC and total-cost coverage;
- evidence snapshots.

Other destinations link to filtered evidence. They do not create duplicate evidence records.

### Risks and remediation

Owns:

- risks;
- evidence gaps;
- hard stops;
- restrictions;
- remediation;
- incidents and near misses;
- pauses and containment;
- clearance evidence;
- reassessment and restart links.

The destination makes active hard stops and exact affected scope directly findable.

Verified remediation remains visible as eligible for reassessment until a new decision exists.

### Reports

Owns generated, audience-specific views.

It provides:

- current posture summaries;
- readiness reports;
- increment charters;
- operating health reports;
- incident and pause reports;
- tangible-value assessments;
- decision memoranda;
- leadership briefings;
- next-increment plans;
- governed-practice records;
- integrated-adoption roadmaps.

Reports link to source decisions, evidence, risks and limitations. Editing a report cannot change those sources.

## Local opportunity navigation

Opening an opportunity provides local destinations:

- Summary
- Selection decision
- Linked increments
- Related evidence
- Related risks

Related evidence and risks are filtered views of the canonical Evidence and Risks and Remediation destinations.

## Local increment navigation

Opening an increment provides:

- Summary
- Scope and operating boundary
- Readiness and launch
- Operating record
- Evaluation
- Decisions
- Related evidence
- Related risks and remediation

Readiness, launch and evaluation decisions remain authoritative in Decisions. The increment view provides the task context and filtered access.

When the increment completes, is stopped or is restricted, the same local destinations remain available as history. The initiative navigation continues unchanged.

## Local governed-practice navigation

Opening a governed practice provides:

- Summary
- Operating boundary
- Current health and evidence
- Incidents and remediation
- Reviews and decisions
- History and retirement

Operating reviews may create a new bounded increment or return the practice to an earlier journey stage.

## Navigation after the first pilot

A completed pilot does not create a new application area.

From the completed increment, the person can:

- inspect evaluation;
- review the accountable decision;
- open the leadership report;
- fund remediation;
- stop the opportunity;
- create a repeat increment;
- propose one bounded expansion;
- return to the opportunity;
- view the initiative portfolio.

If the opportunity becomes a governed practice, the new practice appears under Governed Practices while the pilot remains under Adoption Increments as historical evidence.

## Direct navigation and cross-linking

- A public challenge links to the relevant journey stage.
- A journey stage links to SDLC activities, roles, outputs and Apply.
- A workspace response links back to relevant public guidance.
- A risk links to its triggering response, scope, remediation and decision.
- A remediation links to its finding, evidence requirement and reassessment decision.
- An increment links to its opportunity, decisions, evidence, risks and reports.
- A report links to every source record supporting it.
- A role or SDLC view links to shared records rather than duplicating them.

Browser back and forward must preserve the normal destination history.

## Mobile information structure

Mobile uses the same destinations and hierarchy as desktop.

It does not require:

- a permanently open sidebar;
- horizontal navigation scrolling;
- a wide matrix;
- hover;
- a separate mobile-only information architecture.

Mobile navigation must:

- identify the current initiative before local destinations;
- identify the viewed scope;
- provide access to all durable initiative destinations;
- distinguish initiative navigation from local opportunity, increment or practice navigation;
- expose active hard stops without requiring a report;
- return focus to the destination heading after navigation;
- preserve one-column decision reading order.

The visual mechanism remains a wireframe decision.

## What this model deliberately does not decide

- Sidebar, top navigation, drawer or tab presentation
- Exact route paths
- Authentication or initiative switching behavior
- Permissions
- Search implementation
- Visual status treatment
- Screen layout
- Component design
- Framework or platform
