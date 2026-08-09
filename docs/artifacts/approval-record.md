# ART-APPROVAL-001: Approval Record

## Purpose

Prove exactly who approved or rejected what, using which evidence and under which conditions.

## When required

At every authenticated human gate or consequential decision.

## Owner

The accountable decision owner.

## Required content

- Decision identifier, type and accountable role.
- Exact scope, artifact, state or candidate identifier and version.
- Evidence and alternatives considered.
- Approve, reject, restrict, defer or exception disposition with rationale.
- Conditions, unresolved risks, required actions and expiry.
- Authenticated actor, time and downstream gate reference.

## Producer and approver

The decision system produces the record from the human decision. Only the accountable human can approve its content.

## Storage and retention expectations

Store outside AI control with integrity, access and retention protections and link it to all consuming gates.

## Consumers

Authority, execution, verification, review, release, audit and advancement processes.

## Validation

Identity and role are valid; approved version is exact; required evidence was accessible; conditions are enforceable; expired or stale approval cannot pass a gate.

## Review or expiry conditions

Expire at the stated time and on any material change to approved context. Preserve permanently for the applicable evidence period.

