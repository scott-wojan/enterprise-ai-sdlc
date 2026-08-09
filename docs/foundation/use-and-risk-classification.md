# Approved-Use Categories and Change-Risk Classes

## Purpose

This chapter classifies AI-assisted delivery work so the classification changes permitted actions, adoption state, controls and human gates.

Teams must classify the actual work and credible effect. They must not downgrade risk because a diff is small, a tool labels the task simple or AI has succeeded before.

## Source basis and playbook decision

- [SRC-002](../sources/source-ledger.md#src-002-aws-ai-driven-development-life-cycle) uses persistent plans, artifacts and human validation across delivery work.
- [SRC-003](../sources/source-ledger.md#src-003-aws-adaptive-ai-dlc-workflows) adapts workflow breadth and depth to context while preserving human decisions and traceability.
- [SRC-008](../sources/source-ledger.md#src-008-openssf-security-focused-assistant-instructions) highlights secure-development and supply-chain concerns for assistant-guided work.
- [SRC-009](../sources/source-ledger.md#src-009-finos-mcp-server-security-governance) uses risk-tiered tool governance, identity, monitoring, isolation and incident controls.

The categories and classes below are the playbook's normative Pilot Edition decisions. They operate with the risk factors and authority outcomes in `docs/core/authority-and-risk.md`.

## Classification dimensions

Classify the proposed work using:

- Intended work and resulting state.
- Consequential-decision categories.
- Code, data, service and infrastructure criticality.
- Sensitive context and disclosure destinations.
- Privilege, destructive capability and supply-chain effect.
- Production proximity and downstream reach.
- Maximum credible blast radius.
- Reversibility and recovery evidence.
- Deterministic verification strength and coverage.
- Novelty, ambiguity and hidden dependencies.
- Legal, regulatory, contractual and policy obligations.
- Frequency, concurrency and economic exposure.
- Relevant incidents, failures and observed behavior.

Evaluate combined effects. Several individually low-risk edits may form a material or high-impact batch when executed together.

## Approved-use categories

### USE-ADV: Advisory use

**Purpose:** AI explains, analyzes, questions, recommends or drafts while humans perform every state change.

**Permitted state:** Assisted Work after scoped approval. Foundation may perform isolated evaluation only.

**Examples:** Codebase explanation, requirements ambiguity analysis, draft documentation, suggested tests, review findings and incident summarization.

**Required treatment:** Read-only advisory or plan-and-draft grant, owned context, human validation, evidence, applicable controls and human-performed downstream action.

**Prohibited:** AI changes managed state, invokes state-changing tools, satisfies gates or represents output as verified fact.

### USE-BND: Bounded repository change

**Purpose:** AI creates one eligible change batch on an approved branch inside an isolated or nonproduction boundary.

**Permitted state:** Bounded Change only.

**Examples:** Low-risk defect correction, test changes, bounded dependency update, small feature or reversible refactoring when its risk class permits execution.

**Required treatment:** Exact plan and grant, technical boundaries, small-batch and recovery controls, deterministic verification, human review and human-controlled merge.

**Prohibited:** Production access, approval, merge, release, deployment, irreversible action, risk acceptance and authority expansion.

### USE-EVAL: Isolated evaluation

**Purpose:** Evaluate a tool, model, context method or control without contributing output to managed delivery.

**Permitted state:** Foundation under CTRL-STATE-FND-003.

**Examples:** Synthetic repository trial, prohibited-action test, control rehearsal and public-data workflow evaluation.

**Required treatment:** Evaluation-only scope, approved data, isolation, no downstream effects, evidence and disposal.

**Prohibited:** Reuse of output in managed delivery without a later state and authority decision.

### USE-DENY: Prohibited use

**Purpose:** Identify work for which AI participation is unavailable or not justified.

**Permitted state:** No AI use.

**Examples:** Work prohibited by law or policy, work requiring unavailable controls, uncontrolled sensitive-data exposure or requested execution beyond the Pilot Edition ceiling.

**Required treatment:** Record reason, scope and reassessment triggers where relevant.

## Change-risk classes

### RISK-C1: Advisory and no-state-change work

**Characteristics:** AI has no state-changing authority; context is approved; outputs are independently reviewable; credible effects arise only after human action.

**Permitted AI action:** USE-ADV.

**Minimum gates:** Work intake, context and authority validation, human output validation, applicable deterministic checks on any human-created result and completion evidence.

**Escalates when:** Sensitive context, consequential interpretation, material downstream reliance or inability to validate independently appears.

### RISK-C2: Low-risk reversible change

**Characteristics:** One coherent and independently verifiable batch; bounded nonproduction scope; limited blast radius; strong deterministic verification; demonstrated recovery; no unresolved high-impact category.

**Permitted AI action:** USE-ADV or USE-BND.

**Minimum gates:** Exact plan approval, bounded grant, boundary verification, deterministic checks, human review, recovery readiness and human-controlled merge.

**Escalates when:** Scope, dependency, privilege, criticality, uncertainty, blast radius, verification weakness or recovery limitation becomes material.

### RISK-C3: Material application change

**Characteristics:** Changes material behavior, architecture, data design, significant dependency, security-relevant logic, operational posture or multiple components, but remains nonproduction, bounded and recoverable.

**Permitted AI action:** USE-ADV. USE-BND is permitted only when ART-READY-001 and the authority decision specifically demonstrate controls, qualified category owners, independent verification, recovery and an acceptably bounded batch for this work type.

**Minimum gates:** All RISK-C2 gates plus applicable product, architecture, security, data, compliance and service decisions; enhanced test or scenario coverage; dependency and migration review; independent human reviewers; explicit unresolved-risk disposition.

**Restricts to advisory when:** Deterministic coverage, context, category-owner capacity, isolation or recovery is incomplete.

### RISK-C4: High-impact, regulated or irreversible work

**Characteristics:** Involves production authority, regulated or legally consequential rules, material financial exposure, critical security or identity controls, destructive or irreversible effects, uncontrolled blast radius, safety impact or unavailable independent verification.

**Permitted AI action:** USE-ADV only when policy permits the exact context and qualified humans can validate it. Otherwise USE-DENY.

**Minimum gates:** Existing high-impact human-controlled governance, every applicable consequential-decision owner, authoritative source review, enhanced evidence, independent validation and explicit risk decisions.

**Prohibited AI execution:** The Pilot Edition does not permit Bounded Change execution for irreversible, production-authority or uncontrolled high-impact actions. AI-drafted content must not itself become the authoritative legal, regulatory, security, financial, release or operational decision.

## Classification decision rules

1. Apply all classification dimensions to the complete proposed batch and downstream effect.
2. Select the highest applicable risk class. Lower-risk characteristics do not offset a higher-risk factor.
3. Select an approved-use category whose permitted state and authority do not exceed the risk class.
4. Apply every required gate for the selected category and class.
5. Record ambiguous or missing information and use the more restrictive class and action until resolved.
6. Reclassify when scope, context, tools, dependencies, evidence, environment or intended use changes.
7. Classification never creates authority. It is an input to readiness, state and authority decisions.

## Ambiguous cases

### Small authentication edit

A one-line authentication or authorization change is not low risk because of diff size. Treat it as at least RISK-C3 and potentially RISK-C4 based on identity impact, production proximity and verification.

### Documentation that drives operations

A runbook or policy draft may look advisory but can create material operational effect when published. Keep AI at USE-ADV, require service or policy owner validation and classify the downstream publication decision by impact.

### Dependency patch

A patch-level update is RISK-C2 only when provenance, compatibility, security, transitive effects, verification and rollback are bounded. A critical runtime, build-chain or unverified transitive change can be RISK-C3 or RISK-C4.

### Database migration

An additive, rehearsed and recoverable nonproduction migration may be RISK-C3 and could use a narrowly approved Bounded Change grant. Destructive transformation, unproven restoration or production data effect is RISK-C4 and prohibits AI execution.

### Generated tests

Drafting tests is USE-ADV and RISK-C1. AI applying tests to a branch is USE-BND and at least RISK-C2. Passing generated tests does not prove production behavior or adequate coverage.

### Regulated business-rule explanation

Explanation may be USE-ADV, but legal or compliance interpretation remains a consequential human decision. Missing authoritative sources or qualified review changes the category to USE-DENY for delivery reliance.

## Normative controls

### CTRL-BASE-CLASS-001: Classify every proposed AI use

**Purpose:** Tie AI participation to actual work, risk and effect before authority is granted.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every Foundation evaluation, Assisted Work item and proposed Bounded Change batch.

**Owner:** Delivery accountable owner with applicable consequential-decision owners.

**Requirement:** Before AI participation, the work must receive one approved-use category and the highest applicable change-risk class using every classification dimension. The record must identify evidence, ambiguity and category-owner inputs.

**Enforcement or evaluation mechanism:** Work intake validates the complete classification record before resolving state or authority.

**Evidence:** Work scope, dimensions, use category, risk class, owners, source evidence, ambiguities and classification time.

**Failure response:** Assign USE-DENY or Foundation evaluation until classification is complete.

**Review frequency:** At intake and every reclassification trigger.

### CTRL-BASE-CLASS-002: Make class change actions and gates

**Purpose:** Prevent classification from becoming a label with no operational effect.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every classified work item.

**Owner:** AI delivery governance owner.

**Requirement:** State, AI actions, authority outcome, controls, human gates, evidence, recovery and review must meet or exceed the selected use-category and risk-class treatment. A classification that does not change or validate these operating conditions is invalid.

**Enforcement or evaluation mechanism:** State and grant validation compare encoded permissions and gates with the classification requirements.

**Evidence:** Classification, state decision, authority grant, control plan, gate configuration and mismatch findings.

**Failure response:** Deny the grant, select a more restrictive state or correct missing controls and gates.

**Review frequency:** Before grant activation and after classification or control change.

### CTRL-BASE-CLASS-003: Prevent silent risk downgrade

**Purpose:** Stop teams or AI from reducing rigor to fit preferred authority.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every classification change to a lower class or broader AI action.

**Owner:** AI delivery governance owner with every category owner affected by the prior class.

**Requirement:** A downgrade must identify changed facts, new evidence, affected dimensions and human approvals. Diff size, tool label, AI recommendation, elapsed time, prior success or schedule pressure must not justify downgrade. Unresolved disagreement retains the higher class.

**Enforcement or evaluation mechanism:** Classification history requires reason and exact evidence for downgrades and routes them to applicable owners.

**Evidence:** Prior and proposed classes, changed facts, evidence, owner decisions and resulting authority.

**Failure response:** Preserve the higher class, stop broader work and investigate attempted circumvention where warranted.

**Review frequency:** At every downgrade, material scope change and classification audit.

### CTRL-BASE-CLASS-004: Reclassify on changed conditions

**Purpose:** Keep permitted actions aligned with the current work rather than the intake description.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every active AI-assisted work item.

**Owner:** Delivery accountable owner.

**Requirement:** Work must stop and be reclassified when a new consequential decision, sensitive context, dependency, privilege, environment, downstream effect, irreversibility, verification weakness, incident or material scope change appears. Existing approval and grant do not cover the changed condition.

**Enforcement or evaluation mechanism:** Planning, tool, control and human-review gates expose reclassification triggers and suspend the current grant.

**Evidence:** Trigger, stopped scope, revised classification, decisions, amended or revoked grant and resumption disposition.

**Failure response:** Restrict or revoke authority, contain effects and return to the more restrictive state until reassessment completes.

**Review frequency:** Continuously during work and at every gate.

### CTRL-BASE-CLASS-005: Enforce the high-impact Pilot Edition boundary

**Purpose:** Prevent high-impact or irreversible work from acquiring execution authority through classification ambiguity.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every RISK-C4 item and every item with production, irreversible or uncontrolled effects.

**Owner:** AI delivery governance owner with all applicable consequential-decision owners.

**Requirement:** RISK-C4 must use USE-ADV under explicitly permitted context and qualified human validation or USE-DENY. The Pilot Edition must not grant AI execution for production authority, irreversible action or uncontrolled high-impact effect. Operational exceptions cannot override this boundary.

**Enforcement or evaluation mechanism:** Classification, state and grant validation reject USE-BND and prohibited permissions for RISK-C4.

**Evidence:** Risk class, permitted category, prohibited-action check, state and grant result and human decisions.

**Failure response:** Deny or revoke execution authority, contain any attempted effect and escalate under CTRL-AUTH-008.

**Review frequency:** At classification, every grant and every high-impact trigger.

## Completion check

Classification is complete only when:

- Every dimension has evidence or an explicit unresolved condition.
- The highest applicable class is selected.
- Use category, state, authority, controls and gates match the class.
- Ambiguity receives the more restrictive treatment.
- Downgrades have changed facts and human approval.
- Reclassification triggers are active.
- RISK-C4 cannot receive AI execution authority.
