# AI-Assisted Delivery Incident and Revocation Controls

## Purpose

Define triggers, immediate containment, evidence-preserving investigation and controlled re-entry after unsafe AI-assisted delivery behavior.

## CTRL-INC-001: Define observable incident and stop triggers

**Purpose:** Detect conditions requiring containment consistently.

**Control type:** Detective and preventive.

**Applicable adoption states and risks:** All pilots and AI sessions.

**Owner:** Incident owner with control owners.

**Requirement:** Define triggers for authority violation, denied-operation attempts, sensitive disclosure, evidence loss, unexplained change, control bypass, unsafe output use, resource breach, anomalous tool behavior and failed containment or recovery, with severity and routing.

**Enforcement or evaluation mechanism:** Monitoring, gate events and human reporting invoke predeclared stop routes.

**Evidence:** Trigger catalog, detection event, severity decision and routing result.

**Failure response:** Stop and contain at the most protective applicable level.

**Review frequency:** Before launch, after incidents and when systems or threats change.

## CTRL-INC-002: Stop and revoke immediately

**Purpose:** End unsafe capability without AI cooperation.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every active authority grant and delegated tool.

**Owner:** Incident and authority owner.

**Requirement:** A trigger must suspend work, revoke primary and delegated identities, terminate jobs and network routes, quarantine outputs and prevent merge, release or reuse pending disposition.

**Enforcement or evaluation mechanism:** Central kill and revocation controls with periodic live tests.

**Evidence:** Trigger, stop, principals, jobs, quarantined artifacts, residual-access tests and elapsed time.

**Failure response:** Escalate severity, isolate upstream infrastructure and keep affected capabilities disabled.

**Review frequency:** Every trigger, scheduled exercise and control change.

## CTRL-INC-003: Preserve and investigate reconstructable evidence

**Purpose:** Determine impact and causes without destroying or contaminating evidence.

**Control type:** Detective and corrective.

**Applicable adoption states and risks:** Every suspected AI-delivery incident.

**Owner:** Incident commander and evidence owner.

**Requirement:** Freeze relevant grants, context, prompts, model and tool versions, actions, outputs, changes, control results, communications and environment state under governed access. Separate facts, inference and unknowns.

**Enforcement or evaluation mechanism:** Incident evidence collection, chain-of-custody and timeline reconciliation.

**Evidence:** Preserved source set, integrity, access, timeline, findings and accountable dispositions.

**Failure response:** Expand containment and treat evidence gaps as unresolved impact.

**Review frequency:** Every incident and post-incident evidence-quality review.

## CTRL-INC-004: Require remediation and explicit re-entry

**Purpose:** Prevent automatic restoration after a stop.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Any scope whose authority was reduced or revoked.

**Owner:** AI delivery governance owner.

**Requirement:** Re-entry requires verified containment and recovery, completed incident obligations, owned corrective action, repeated allowed and denied control tests, readiness reassessment and an authenticated state and authority decision. Issue a new grant rather than restoring the old one.

**Enforcement or evaluation mechanism:** Grant systems reject revoked identifiers and require linked re-entry evidence.

**Evidence:** Incident disposition, remediation, recovery, retest, readiness decision and new grant.

**Failure response:** Maintain restriction or stop the use permanently.

**Review frequency:** Every restoration proposal and after repeated patterns.

