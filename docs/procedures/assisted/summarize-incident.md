# PROC-AST-006: Summarize an Incident

## Purpose

Create a source-grounded incident summary for human responders without taking operational action, assigning blame or replacing the incident record.

## Use when

An approved Assisted Work scope permits read-only synthesis of authorized incident evidence.

## Do not use when

The AI would operate production, communicate externally, declare severity or resolution, assign cause or accountability, or process evidence through an unapproved route.

## Accountable owner

The human incident commander or incident owner.

## Participants

- Incident commander, responders and service owner.
- Security, privacy, legal, compliance and communications owners as applicable.
- Evidence and system owners.
- AI assistant operating with read-only summarization authority.

## Preconditions

- The incident owner authorizes the scope, audience, sources and current phase.
- Evidence preservation and access controls are active.
- The AI route is approved for the incident classification.
- Summarization will not interfere with response.

## Inputs

- Versioned event, alert, change, communication and decision records.
- Service ownership, architecture and operating context.
- Known evidence gaps, time zones and source reliability.
- Intended audience, cut-off time and publication restrictions.

## Actions

1. **The incident owner bounds the summary.** Record incident identifier, audience, time window, source set, cut-off and prohibited content.
2. **The evidence owner preserves sources.** Retain originals before AI processing and identify mutable or incomplete evidence.
3. **The AI assistant builds a timestamped source index.** Normalize time zones while retaining original timestamps and source references.
4. **The AI assistant drafts a factual timeline.** Separate observed events, human decisions, actions and outcomes from inferred relationships.
5. **The AI assistant records uncertainty.** Identify gaps, conflicts, clock issues, unavailable evidence and alternative interpretations.
6. **The AI assistant drafts the bounded summary.** Include impact known at cut-off, response status, verified timeline, open questions and decisions needed. Do not declare cause or resolution.
7. **Responders validate their evidence.** Correct events and explicitly accept or reject inferences.
8. **The incident owner approves the summary.** Decide severity, operational status, audience and any communication through normal incident authority.
9. **The record owner retains provenance.** Link the approved summary to source versions, corrections and approvers.

## Required human decisions

- The incident commander owns severity, action, status, resolution and communication.
- Service and domain owners validate evidence and causal claims.
- Authorized humans decide containment, recovery and disclosure.
- AI does not assign blame or determine root cause.

## Outputs

- Cut-off-bound incident summary.
- Timestamped evidence index and verified timeline.
- Separate facts, inferences, conflicts and unknowns.
- Human corrections, approval and audience decision.

## Verification

- Timeline entries resolve to preserved source evidence.
- Inferences and unverified causal links are explicit.
- Responders validate material events.
- No operational, notification or publication action occurred under AI authority.
- The approved summary states its cut-off and limitations.

## Stop conditions

Stop when summarization impedes response, evidence preservation is uncertain, classification or audience is unclear, sensitive content exceeds the route, sources are compromised, or the incident owner revokes permission.

## Completion criteria

- Sources, cut-off, audience and limitations are recorded.
- Material facts are human validated.
- Corrections and uncertainty remain visible.
- The incident owner approves or rejects the summary.
- Original evidence remains authoritative and preserved.

## Measures

Record corrections, unsupported inferences, evidence gaps, time to validated summary and responder effort. Do not use summary speed as a proxy for incident response quality.

## Next procedures

- The enterprise incident process for all operational decisions.
- PROC-AST-007 for pilot outcome evaluation after the incident is stable.
- The repeated-failure procedure when patterns recur.

## Applicable principles and controls

- PRIN-001 through PRIN-005 and PRIN-007 through PRIN-011 as applicable.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-CTX, CTRL-EXC and CTRL-LEARN controls.
- CTRL-STATE-AST controls, applicable CTRL-BASELINE profile and PROC-PILOT-002.

