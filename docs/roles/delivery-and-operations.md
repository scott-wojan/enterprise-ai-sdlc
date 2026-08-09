# Delivery-Team and Operations Decision Rights

## Purpose

Define who may request, plan, execute, verify, approve, release, operate, stop and learn from Pilot Edition work.

## ROLE-OPS-010: Human change owner

Accountable for the work request, scope, classification inputs, candidate outcome and lifecycle completion. May authorize planning and execution only after required upstream decisions. Cannot waive another domain owner's requirement.

Procedure rights: owns PROC-BND-001 inputs, ART-RISK-001, ART-PLAN-001 assembly and handoff across PROC-BND-002 through PROC-BND-009.

## ROLE-OPS-011: Delivery practitioner

Responsible for repository work, context verification, evidence review, correction and escalation within granted human authority. May apply Assisted Work output or author controlled changes. Remains accountable for personal actions even when AI advised them.

Procedure rights: uses PROC-AST procedures, participates in PROC-BND-002 and responds to findings through approved change control.

## ROLE-OPS-012: Verification owner

Accountable for independent deterministic gate completeness, trusted environments, exact candidate binding and fail-closed outcomes. Must not be the AI executor and must meet enterprise segregation rules.

Procedure rights: owns PROC-BND-006 and ART-VERIFY-001 deterministic evidence.

## ROLE-OPS-013: Human reviewer and approver

Accountable for independent judgment of assigned intent, design, risk, maintainability or release concerns. Approvals bind one exact version and expire on drift. AI cannot occupy or satisfy this role.

Procedure rights: owns the assigned portion of PROC-AST-003, PROC-AST-005, PROC-BND-004, PROC-BND-007 and ART-APPROVAL-001.

## ROLE-OPS-014: Service and operations owner

Accountable for service reliability, operational readiness, release acceptance, monitoring, incident response, rollback and restored-state acceptance.

Procedure rights: owns operational portions of PROC-BND-008 and PROC-BND-009, ART-RELEASE-001 and ART-FEEDBACK-001.

## ROLE-OPS-015: Pilot support and learning owner

Accountable for participant support routing, friction evidence, failure classification, remediation follow-through and safe feedback. Does not evaluate individual worker productivity from AI telemetry.

Procedure rights: supports PROC-PILOT-002, PROC-AST-007 and later pilot inspection and decision procedures.

## AI-SYS-001: AI assistant or executor

The AI system is a non-accountable actor. It may read, analyze, draft, propose, call approved tools or create bounded changes only within a current technical grant and procedure. It may never:

- Define or approve product intent, risk, exceptions, state or authority.
- Count as a human reviewer, approve, merge, release or accept recovery.
- Expand or renew its scope, alter controls or erase evidence.
- Convert inference into fact or self-claims into verification.
- Continue after a stop, failed control, ambiguity or revoked grant.

## Segregation rules

- AI-SYS-001 must be distinct from every accountable human role.
- Execution, deterministic verification and human review are distinct gates and actors.
- Release uses existing authorized operators and identities, not the execution grant.
- Evidence storage and approval records remain outside executor control.
- A person may hold multiple human roles only when policy permits it and the risk treatment does not require independence.

## Procedure decision sequence

The change owner requests and routes. Domain owners decide intent and risk. The authority owner grants. AI-SYS-001 may plan and execute inside the grant. The verification owner evaluates deterministic evidence. Human reviewers decide semantic acceptability. The release and service owner decides release and operational acceptance. Incident or governance owners may stop and revoke at any time.

## Verification

Every procedure instance resolves its roles to named humans and an AI identity; prohibited role combinations are rejected technically; approvals and release actions identify human actors; grants map only permitted AI-SYS-001 actions; delegation and absence routes are tested.

