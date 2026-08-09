# ART-RELEASE-001: Release Record

## Purpose

Link an exact verified candidate to normal enterprise release authorization, execution, monitoring and rollback.

## When required

For every released Bounded Change candidate.

## Owner

The human release owner.

## Required content

- Candidate and artifact identities and complete evidence-package reference.
- Verification and review gate versions.
- Release controls, authorized operator, route, window and conditions.
- Rollout, monitoring, guardrails, rollback trigger and owner.
- Actual release events, operational checks, incidents and rollback.
- Final outcome and closure decision.

## Producer and approver

Release systems produce events. The release and service owners approve eligibility and operational acceptance.

## Storage and retention expectations

Store with enterprise release records and link to AI-delivery evidence under the longer applicable retention rule.

## Consumers

Operations, incident, audit, measurement, pilot review and failure inspection.

## Validation

Released artifact matches the candidate; normal controls were not bypassed; operator is authorized; monitoring and rollback were active; outcome is recorded.

## Review or expiry conditions

Review after release, rollback, incident or material feedback. Retain per release and regulatory policy.

