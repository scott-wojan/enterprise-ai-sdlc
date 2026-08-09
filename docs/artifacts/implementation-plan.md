# ART-PLAN-001: Bounded Implementation Plan

## Purpose

Define the approved, ordered, small-batch method for satisfying ART-SPEC-001 inside a specific boundary.

## When required

Before every Bounded Change execution.

## Owner

The human change owner.

## Required content

- Work, specification, base revision and boundary versions.
- Inspected sources, facts, assumptions, gaps and alternatives.
- Consequential decisions and accountable approvers.
- Ordered batches with paths, operations, dependencies and expected changes.
- Per-batch deterministic checks, review focus, stop and recovery points.
- Overall verification, human review, release and expiry conditions.

## Producer and approver

AI may propose the plan. The change, domain, control, recovery and authority owners approve their decisions and the complete plan.

## Storage and retention expectations

Store immutably with its approvals, execution, verification and release record. Preserve rejected and superseded versions.

## Consumers

PROC-BND-004 through PROC-BND-009 and execution-control systems.

## Validation

Plan traces to specification; batches fit the boundary; checks and recovery are observable; every consequential choice has a human disposition; execution is bound to the exact version.

## Review or expiry conditions

Invalidate on specification, base, boundary, scope, risk or material context change and at recorded expiry.

