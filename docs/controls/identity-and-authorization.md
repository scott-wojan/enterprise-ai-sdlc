# Identity and Authorization Controls

## Purpose

Make every AI-assisted action attributable, task-scoped, short-lived, segregated and independently revocable.

## CTRL-ID-001: Attribute every action to a resolvable identity

**Purpose:** Prevent anonymous or shared execution.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** All states; all AI access and action.

**Owner:** Identity and access owner.

**Requirement:** Every human, AI executor, automation and delegated tool action must carry a unique, resolvable identity linked to the human sponsor, work identifier and session. Shared credentials and unattributed downstream calls are prohibited.

**Enforcement or evaluation mechanism:** Identity-aware access proxies and systems reject missing identity and preserve delegation chains.

**Evidence:** Principal, sponsor, session, work, authentication method, delegated actor and action records.

**Failure response:** Deny or stop access, revoke the session and investigate unattributed actions.

**Review frequency:** Every session and access event; periodic identity reconciliation.

## CTRL-ID-002: Grant least authority for one task

**Purpose:** Limit actions and blast radius to approved work.

**Control type:** Preventive.

**Applicable adoption states and risks:** Assisted Work and Bounded Change; RISK-C1 through RISK-C4 as allowed.

**Owner:** Authority-grant owner.

**Requirement:** A grant must bind exact work, state, use, risk, repository or data scope, operations, tools, environments, destinations and resource limits. Deny everything not listed. The recipient cannot alter the grant.

**Enforcement or evaluation mechanism:** Policy enforcement compares each requested action with the authenticated grant.

**Evidence:** Grant version, approvals, enforced policy, allowed tests and denied tests.

**Failure response:** Deny the action, stop on attempted expansion and reclassify or issue a new human-approved grant.

**Review frequency:** Before use and on every scope, risk, plan or environment change.

## CTRL-ID-003: Expire and segregate authority

**Purpose:** Prevent persistent or self-approving access.

**Control type:** Preventive.

**Applicable adoption states and risks:** All active AI authority.

**Owner:** Identity and access owner with the release owner.

**Requirement:** AI authority must expire automatically at the earliest of task completion, configured time, stop signal or state change. Execution identities must not approve, merge, release, change policy, issue grants or modify their evidence.

**Enforcement or evaluation mechanism:** Time-bound credentials, role separation and protected branch, release, policy and evidence permissions.

**Evidence:** Credential lifetime, role mapping, prohibited-operation tests and expiry result.

**Failure response:** Revoke immediately, contain affected outputs and correct segregation before reuse.

**Review frequency:** Every grant and after identity, workflow or release-policy changes.

## CTRL-ID-004: Revoke without executor cooperation

**Purpose:** Guarantee immediate containment.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** All AI sessions and delegated tools.

**Owner:** Authority and incident owner.

**Requirement:** Authorized humans and automated stop controls must be able to invalidate credentials, sessions, delegated tokens, running jobs and downstream access without cooperation from the AI or its workspace.

**Enforcement or evaluation mechanism:** Central revocation plus representative live-session and delegated-tool tests.

**Evidence:** Trigger, revocation request, affected principals, termination results, residual-access test and elapsed time.

**Failure response:** Escalate as an incident, isolate upstream systems and keep the scope disabled until revocation passes.

**Review frequency:** Before pilot launch, periodically, and after every relevant platform or control change.

