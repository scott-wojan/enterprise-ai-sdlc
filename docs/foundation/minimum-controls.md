# Pilot Edition Minimum Control Baseline

## Purpose

This chapter defines the controls that must be operational before Assisted Work and Bounded Change pilots begin. It maps existing normative controls to states and risks and identifies the minimum owner, enforcement and evidence expected from an enterprise implementation.

The baseline is a control profile, not a product checklist. A product feature, prompt or written policy does not satisfy a control until observable evidence demonstrates the required behavior for the target scope.

## Source basis and playbook decision

- [SRC-006](../sources/source-ledger.md#src-006-harness-engineering-for-coding-agent-users) distinguishes deterministic computational controls from probabilistic inferential guidance and combines feedforward and feedback mechanisms.
- [SRC-008](../sources/source-ledger.md#src-008-openssf-security-focused-assistant-instructions) provides security-focused assistant guidance within broader secure-development controls.
- [SRC-009](../sources/source-ledger.md#src-009-finos-mcp-server-security-governance) emphasizes approved tools, identity, authorization, logging, monitoring, integrity, isolation and incident containment.

The baseline below is the playbook's vendor-neutral selection from its normative controls. More controls may apply because of risk, policy or work type.

## Baseline application

Apply the baseline to an exact team, repository, work type, AI identity, context set, tool set and environment. For each baseline area, record:

- Applicable state and risk classes.
- Accountable control owner.
- Technical or procedural implementation.
- Control version and configuration.
- Passing, failing and unable-to-evaluate behavior.
- Evidence source and retention owner.
- Known limitations and compensating controls.
- Failure, restriction and revocation response.
- Last test and next review trigger.

An area is operational only when its mandatory controls pass representative allowed and prohibited scenarios.

## Foundation baseline

Foundation must operate these controls before isolated evaluation:

- **Accountability:** CTRL-ACC-001 through CTRL-ACC-007. Owner: delivery and consequential-decision owners. Evidence: role assignments, decision and escalation records.
- **Evaluation authority:** CTRL-AUTH-001 through CTRL-AUTH-008. Owner: AI delivery governance owner. Evidence: evaluation grant, technical boundary, expiry and revocation test.
- **Evidence:** CTRL-EVID-001 through CTRL-EVID-008. Owner: delivery and retention owners. Evidence: linked evaluation package and integrity and retention results.
- **Context:** CTRL-CTX-001 through CTRL-CTX-004. Owner: context and data owners. Evidence: owned assets, assembly and allowed and prohibited access tests.
- **Evaluation state:** CTRL-STATE-FND-001 through CTRL-STATE-FND-005. Owner: AI delivery governance owner. Evidence: state decision, isolation test, completion and disposal.
- **Enterprise foundation:** CTRL-BASE-OWN-001 through CTRL-BASE-OWN-005 and CTRL-BASE-CLASS-001 through CTRL-BASE-CLASS-005. Owner: enterprise roles and delivery owner. Evidence: stance, comprehension scenarios and classifications.

Foundation evaluation must not use managed delivery outputs or create downstream effects.

## Assisted Work baseline

Assisted Work requires the Foundation baseline plus:

### Identity and authorization

- **Controls:** CTRL-AUTH-001, CTRL-AUTH-002, CTRL-AUTH-005 through CTRL-AUTH-008 and CTRL-STATE-AST-001 through CTRL-STATE-AST-002.
- **Risks addressed:** Unattributed access, excess context, unauthorized tools, stale grants and state-changing drift.
- **Owner:** AI delivery governance owner with identity and access owner.
- **Minimum enforcement:** Resolvable AI identity, read-only advisory or plan-and-draft grant, denied state-changing actions, expiry and immediate revocation.
- **Minimum evidence:** Grant, identity mapping, permitted read, prohibited write, expiry and revocation results.

### Data and context restrictions

- **Controls:** CTRL-CTX-001 through CTRL-CTX-004, CTRL-STATE-AST-003 and CTRL-READY-CTX-001 through CTRL-READY-CTX-002.
- **Risks addressed:** Sensitive disclosure, stale or conflicting guidance, missing domain knowledge and use outside scope.
- **Owner:** Context and data accountable owners.
- **Minimum enforcement:** Approved sources and destinations, least access, versioned assembly, conflict stop and prohibited-context denial.
- **Minimum evidence:** Context inventory, assembly, access logs, conflict result and human validation sources.

### Verification and human approval

- **Controls:** CTRL-PREC-001 through CTRL-PREC-007, CTRL-EVID-004 through CTRL-EVID-006 and CTRL-STATE-AST-003.
- **Risks addressed:** Hallucinated facts, AI self-validation, silent deterministic failure and mechanical acceptance.
- **Owner:** Requirement and control owners plus the accountable human using the output.
- **Minimum enforcement:** Predeclared controls, exact-version results, inferential labels, authenticated human disposition and blocked use on failure.
- **Minimum evidence:** Control plan, results, output version, sources, human findings and disposition.

### Audit, incident and learning

- **Controls:** CTRL-EVID-001 through CTRL-EVID-008, CTRL-STATE-AST-005 and CTRL-LEARN-001 through CTRL-LEARN-003.
- **Risks addressed:** Unreconstructable use, fabricated evidence, repeated error and delayed containment.
- **Owner:** Delivery, retention, incident and system-element owners.
- **Minimum enforcement:** Linked evidence, stop status, access termination, failure classification and corrective-action gate.
- **Minimum evidence:** Complete work package, stop and revocation exercise, failure record and verified improvement.

## Bounded Change baseline

Bounded Change requires the complete Assisted Work baseline plus:

### Execution isolation and least authority

- **Controls:** CTRL-AUTH-002 through CTRL-AUTH-004, CTRL-AUTH-007 through CTRL-AUTH-008, CTRL-BATCH-002 and CTRL-STATE-BND-001 through CTRL-STATE-BND-002.
- **Risks addressed:** Unauthorized paths, tools, network, environment, resources, downstream effects and production reach.
- **Owner:** AI delivery governance owner with repository, environment, network and tool owners.
- **Minimum enforcement:** Designated branch, path restrictions, isolated or nonproduction environment, action allowlist, network boundary, resource limits and no merge or production credentials.
- **Minimum evidence:** Technical policy, permitted and denied scenario results, action and resource logs and revocation test.

### Approved plan and small batch

- **Controls:** CTRL-BATCH-001 through CTRL-BATCH-005 and CTRL-STATE-BND-003.
- **Risks addressed:** Hidden scope, coupled changes, uncontrolled blast radius, irreversibility and stale approval.
- **Owner:** Delivery accountable owner with consequential-decision and recovery owners.
- **Minimum enforcement:** One coherent batch, exact-version plan gate, reversibility classification, protected recovery point and denied irreversible AI execution.
- **Minimum evidence:** Batch, plan approvals, blast radius, recovery rehearsal and grant linkage.

### Deterministic verification and review

- **Controls:** CTRL-PREC-001 through CTRL-PREC-007, CTRL-BATCH-006, CTRL-STATE-BND-004 and CTRL-STATE-BND-005.
- **Risks addressed:** AI completion claims, untested output, overridden failures, stale results and self-approval.
- **Owner:** Engineering control owners and qualified human reviewers.
- **Minimum enforcement:** Authoritative exact-version checks, fail-closed gates, human review, AI approval denial and human-controlled merge.
- **Minimum evidence:** Complete control results, input version, review findings, authenticated human decisions and merge identity.

### Recovery, incident and revocation

- **Controls:** CTRL-BATCH-003 through CTRL-BATCH-007, CTRL-STATE-BND-006 and CTRL-AUTH-008.
- **Risks addressed:** Uncontained action, failed rollback, invalid recovery claims and restoration without reassessment.
- **Owner:** Service, system, data, incident and AI governance owners.
- **Minimum enforcement:** Stop triggers, access termination, protected evidence, recovery action, restored-state checks and new-grant requirement.
- **Minimum evidence:** Stop and rollback exercise, restored-state verification, revoked grant, corrective action and restoration decision.

## Risk overlays

- **RISK-C1:** Assisted Work baseline. Add category-owner review for consequential interpretation or sensitive context.
- **RISK-C2:** Full Bounded Change baseline for AI execution. Assisted Work baseline when AI only advises.
- **RISK-C3:** Full Bounded Change baseline plus category-owner decisions, enhanced scenario coverage, independent review and explicit recovery and unresolved-risk disposition. Restrict to Assisted Work when these are incomplete.
- **RISK-C4:** Assisted Work baseline under exact policy or USE-DENY. AI execution is prohibited in the Pilot Edition.

The higher applicable state or risk requirement governs. A lower-risk label does not remove a control required by policy, context, tool, environment or consequential decision.

## Prompt-only and inferential controls

Prompts, instructions, rules files and AI review are inferential unless a separate deterministic mechanism enforces the requirement. They may:

- Explain requirements and expected behavior.
- Request source attribution and uncertainty reporting.
- Guide planning, review and escalation.
- Identify semantic findings for human disposition.

They must not be credited as technical enforcement of identity, access, isolation, tool permission, resource limit, required test, evidence integrity, human approval, stop, revocation or production prohibition.

The control register must label each implementation as deterministic, inferential, human or combined and identify what portion each mechanism actually covers.

## Normative controls

### CTRL-BASELINE-001: Apply the state and risk control profile

**Purpose:** Establish a consistent minimum control set for each pilot scope.

**Control type:** Preventive.

**Applicable adoption states and risks:** Foundation evaluation, Assisted Work and Bounded Change across RISK-C1 through RISK-C4.

**Owner:** AI delivery governance owner.

**Requirement:** Before a pilot scope activates, the owner must apply the baseline for its state and highest risk class and add controls required by policy or work conditions. Omission requires an eligible, active exception and must not cross the non-exception boundaries.

**Enforcement or evaluation mechanism:** State and readiness gates compare the control register with this profile and the exact classification.

**Evidence:** Scope, state, risk class, required and added controls, owners, implementation references, test status and exceptions.

**Failure response:** Keep the scope in Foundation or a more restrictive state until the baseline is complete.

**Review frequency:** At pilot design, every classification or state change and periodic control review.

### CTRL-BASELINE-002: Demonstrate controls through allowed and denied scenarios

**Purpose:** Prove control operation rather than relying on configuration or vendor claims.

**Control type:** Detective and preventive.

**Applicable adoption states and risks:** Every baseline implementation.

**Owner:** Owner of each control with the AI delivery governance owner accountable for profile completion.

**Requirement:** Each technical or workflow control must demonstrate intended success, intended denial or failure and unable-to-evaluate behavior where applicable. Tests must use the target identity, scope and environment or a faithful controlled equivalent.

**Enforcement or evaluation mechanism:** Pre-pilot control rehearsal runs representative scenarios and records authoritative outcomes.

**Evidence:** Scenario definitions, exact configurations, results, findings, corrections and accountable acceptance.

**Failure response:** Mark the control as a gap, reduce authority and remediate and repeat the scenario.

**Review frequency:** Before activation and after material control, tool, environment or policy change and control failure.

### CTRL-BASELINE-003: Label inferential coverage accurately

**Purpose:** Prevent prompt-only safeguards from being treated as guaranteed enforcement.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every prompt, instruction, AI review or combined control in the baseline.

**Owner:** Engineering policy owner with the affected control owner.

**Requirement:** The control register must label inferential mechanisms and the semantic questions they address. It must identify deterministic or human mechanisms covering mandatory enforcement and decisions. Inferential controls must not silently satisfy a deterministic or authenticated-human requirement.

**Enforcement or evaluation mechanism:** Control-plan review compares each requirement with the claimed mechanism and CTRL-PREC-001 through CTRL-PREC-005.

**Evidence:** Requirement mapping, mechanism class, coverage statement, deterministic and human complements and review disposition.

**Failure response:** Remove unsupported assurance claims, add enforcement, reduce authority or mark the control gap.

**Review frequency:** At registration, prompt or model change and every control-effectiveness review.

### CTRL-BASELINE-004: Convert baseline gaps into authority restrictions

**Purpose:** Ensure missing controls change actual permissions and eligible work.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every missing, failing, unreliable or unowned baseline control.

**Owner:** AI delivery governance owner with the control owner.

**Requirement:** A baseline gap must identify affected work and risk and immediately restrict state, use category, context, tools or actions. Every gap must have remediation ownership or an authorized risk decision that remains within Pilot Edition boundaries.

**Enforcement or evaluation mechanism:** Readiness and authority systems block grants whose required control status is not operational.

**Evidence:** Gap, affected scope, restriction, owner, remediation or risk decision and reassessment trigger.

**Failure response:** Preserve the restriction, revoke active authority where necessary and escalate attempted bypass.

**Review frequency:** At every gap, remediation update and restoration proposal.

### CTRL-BASELINE-005: Reassess the baseline after change or failure

**Purpose:** Keep the control profile aligned with current tools, risks and observed behavior.

**Control type:** Detective and corrective.

**Applicable adoption states and risks:** Every active pilot scope.

**Owner:** AI delivery governance owner.

**Requirement:** The profile must be reassessed after state or risk change, new context or tool, model or integration change, material incident, repeated failure, control drift, policy change or scope expansion. Affected authority must remain restricted until changed controls pass.

**Enforcement or evaluation mechanism:** Control lifecycle and incident records trigger profile review and block restoration without current evidence.

**Evidence:** Trigger, affected controls and scopes, reassessment, repeated tests, revised profile and authority decision.

**Failure response:** Restrict or roll back the affected state and remediate or prohibit the use.

**Review frequency:** At the scheduled control review and every event trigger.

## Completion check

The minimum baseline is complete for a scope only when:

- State and risk profiles are applied without unexplained omission.
- Every control has an owner, implementation, evidence and failure response.
- Allowed, denied and unavailable scenarios behave as defined.
- Prompt-only mechanisms are labeled inferential and do not replace enforcement.
- Gaps restrict authority and have disposition.
- Incident, stop and revocation paths have been exercised.
- The profile is linked to ART-READY-001 and the exact authority grant.
