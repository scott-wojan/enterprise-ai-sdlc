# Human Approval, Audit and Evidence Controls

## Purpose

Bind accountable approvals to exact work and make actions, tool use, decisions and evidence reconstructable and access-controlled.

## CTRL-GATE-001: Bind approvals to exact context

**Purpose:** Prevent vague, stale or transferable approval.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every human gate.

**Owner:** Accountable decision owner.

**Requirement:** Approval must identify approver, role, decision, scope, artifact or state version, evidence considered, conditions, time and expiry. Material change invalidates approval.

**Enforcement or evaluation mechanism:** Protected gates validate authenticated approval against exact candidate, plan, grant or state.

**Evidence:** Signed or authenticated decision record and gate comparison.

**Failure response:** Keep the gate closed and obtain a new informed decision.

**Review frequency:** Every gate and material context change.

## CTRL-GATE-002: Segregate creation, verification and approval

**Purpose:** Prevent self-validation and self-release.

**Control type:** Preventive.

**Applicable adoption states and risks:** Bounded Change and consequential Assisted Work use.

**Owner:** Delivery governance owner.

**Requirement:** The AI executor cannot satisfy independent verification, authenticated human approval, merge or release roles. Required human reviewers must be qualified and free of prohibited conflicts.

**Enforcement or evaluation mechanism:** Role and branch protections reject actor conflicts and AI principals at human gates.

**Evidence:** Actor-role mapping, reviewer identity, gate events and denied self-approval attempts.

**Failure response:** Invalidate the gate, revoke conflicting authority and repeat with proper segregation.

**Review frequency:** Every approval and workflow or role change.

## CTRL-AUD-001: Record reconstructable audit events

**Purpose:** Explain who or what did what, under which authority, to which exact input and with what result.

**Control type:** Detective.

**Applicable adoption states and risks:** All AI-assisted work and delegated tool use.

**Owner:** Audit and evidence owner.

**Requirement:** Record request, identity and delegation, grant, context versions, tool calls, affected resources, outputs, decisions, control results, exceptions, stops, revocation and release linkage with synchronized time.

**Enforcement or evaluation mechanism:** Independent logging reconciles expected lifecycle events and rejects missing chains.

**Evidence:** Immutable event sequence, integrity metadata and reconciliation result.

**Failure response:** Stop affected progression, preserve available state and treat unreconstructable action as a control failure or incident.

**Review frequency:** Continuous capture, each gate and sampled audit review.

## CTRL-AUD-002: Protect evidence integrity and access

**Purpose:** Keep evidence trustworthy, available only to authorized users and retained appropriately.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** All retained AI-delivery evidence.

**Owner:** Evidence retention owner.

**Requirement:** Store evidence outside executor control with integrity protection, least-access permissions, classification, retention, legal-hold and disposal rules. Access and alteration attempts must be logged.

**Enforcement or evaluation mechanism:** Immutable or tamper-evident storage, access policy, integrity checks and retention jobs.

**Evidence:** Digest or integrity record, access log, retention status, disposal approval and restore test.

**Failure response:** Restrict affected work, investigate, restore from trustworthy source or repeat controls when evidence cannot be trusted.

**Review frequency:** Continuous access monitoring and periodic integrity, restore and retention review.

