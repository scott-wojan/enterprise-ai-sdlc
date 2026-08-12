# DEC-UX-006: Responsive Structural and Visual System

## Status

Proposed

## Decision date

12 August 2026

## Decider

Product owner

## Scope

Gate 6 responsive structural system, visual direction, and isolated vertical-slice prototype.

## Context

Earlier visual attempts combined journey progress, evidence collection, evaluation, and consequence in dense screens. The approved recovery work separated screen responsibilities and validated five anchor concepts on desktop and mobile.

## Decision

Adopt the decision-brief structural and visual system recorded in Gate 6.4 and Gate 6.5 for the isolated Gate 6 prototype.

Mandatory requirements:

- preserve journey, focused work, gate-decision, and reporting separation;
- preserve exact scope and authority;
- show hard stops causally and immediately;
- separate evidence, authority, and investment decisions;
- preserve one-column mobile meaning;
- preserve native keyboard behavior, focus, and announcements;
- keep reporting read-only and derived.

## Reasons

The system makes the current job, consequence, safe work, prohibited work, and next accountable action understandable without a dashboard or wizard. It scales from pilot readiness to later evaluation and leadership decisions.

## Alternatives considered

- Documentation-led page: rejected because it overwhelms orientation and task work.
- Persistent pilot sidebar and evaluation rail: rejected because journey and result state compete with focused work.
- Dashboard-first workspace: rejected because readers must interpret status before understanding cause and recovery.

## Consequences

- Gate 6 prototype implementation is enabled.
- Production implementation remains blocked until Gate 7 selects a platform.
- Representative-human validation remains required before claiming a validated vertical slice.

## Affected sources

- Gate 6.4 responsive structural package
- Gate 6.5 visual system
- Gate 6.6 prototype manifest and source
- Gate 6.7 validation record
- Issues #145 and #153

## Validation required

Complete the ten Gate 6 tasks with the three representative participant perspectives at desktop and mobile widths, including keyboard use.

## Supersedes

None

## Superseded by

None

## Unresolved questions

None that block the isolated prototype. Production platform selection belongs to Gate 7.
