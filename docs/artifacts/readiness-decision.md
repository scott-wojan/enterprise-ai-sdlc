# ART-READY-001: Readiness Decision

## Purpose

Preserve the evidence, findings, restrictions, remediation and authenticated state decision produced by PROC-READY-001.

## When required

Required for initial readiness, state entry, continuation, expansion, restriction, rollback, restoration and no-AI-use decisions.

## Owner

The AI delivery governance owner owns the artifact. Condition and remediation owners remain accountable for their contributed evidence and actions.

## Required content

- Artifact identifier, version, status and creation time.
- Exact enterprise, team, repository, work-type, risk, data, environment and AI-identity scope.
- Current state, proposed state and selected state.
- Intended delivery outcomes and why AI participation is relevant.
- One finding for every mandatory CTRL-READY condition.
- For each finding: outcome, owner, evidence references, versions, review date, limitations and rationale.
- Eligible, restricted and prohibited work types and actions.
- Applicable state controls, authority outcome and grant reference.
- Open exceptions, incidents, failures and corrective actions.
- Every gap, its authority effect, remediation owner, required action, completion evidence, dependencies and reassessment trigger.
- Authorized risk decisions for gaps without remediation.
- Alternatives considered, including remaining in the current state and no AI use.
- Authenticated state decision, accountable human, conditions, effective period, stop triggers and next review.
- Notification and technical-enforcement confirmation.

The artifact must not include a composite readiness or maturity score.

## Producer and approver

Condition owners produce their findings and evidence. The delivery accountable owner assembles the draft. The AI delivery governance owner approves the complete artifact. Other consequential-decision owners approve within their categories where applicable.

AI may assist with assembly and consistency checking but must not assign findings, accept gaps or approve the artifact.

## Storage and retention expectations

Store the artifact in the approved system of record under CTRL-EVID-002, with access appropriate to its organizational, security and personnel content. Retain versions, evidence links, approvals, restrictions and supersession history under CTRL-EVID-006 and CTRL-EVID-007.

## Consumers

- State and authority-grant decision systems.
- Delivery teams and repository owners.
- Control, context, support and incident owners.
- Pilot selection, baseline and review procedures.
- Audit, risk, compliance and leadership reviewers within authorized scope.

## Validation

- Scope dimensions are complete and overlaps are resolved.
- Every mandatory readiness condition appears exactly once.
- Evidence links resolve and match the finding scope and version.
- Every gap changes authority or has an authorized risk decision.
- Every remediation item has one owner and observable completion evidence.
- State decision and technical enforcement match.
- Approvals are human, authenticated and tied to the exact version.
- No composite score or usage-based success claim appears.

## Review or expiry conditions

Review at the recorded date and whenever scope, personnel, stance, policy, work type, context, tool, model, control, environment, evidence quality, outcome, failure or incident materially changes. The artifact expires when its state decision or governing authority expires. A superseding version preserves prior history.
