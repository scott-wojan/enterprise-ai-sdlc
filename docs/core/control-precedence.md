# Deterministic and Inferential Control Precedence

## Purpose

This chapter defines when deterministic controls are mandatory, when inferential controls may add semantic judgment, how conflicting results are resolved and what happens when a required control fails or cannot run.

The objective is not to eliminate human judgment or probabilistic evaluation. It is to prevent prompts, AI review and subjective confidence from displacing enforceable checks.

## Source basis and playbook decision

The required sources provide four relevant patterns:

- [SRC-005](../sources/source-ledger.md#src-005-context-engineering-for-coding-agents) distinguishes probabilistic instruction use from tools and hooks that run at deterministic points and warns that context cannot ensure model behavior.
- [SRC-006](../sources/source-ledger.md#src-006-harness-engineering-for-coding-agent-users) distinguishes computational controls such as tests, linters and structural analysis from inferential semantic review and uses both as feedforward guidance and feedback sensors.
- [SRC-007](../sources/source-ledger.md#src-007-engineering-the-agentic-sdlc) emphasizes executable backpressure, phase-specific verification gates and agent-compatible deterministic tooling.
- [SRC-008](../sources/source-ledger.md#src-008-openssf-security-focused-assistant-instructions) treats assistant instructions as guidance within a broader secure development and software-supply-chain control environment.

The controls below are this playbook's normative decisions. They generalize the source patterns without requiring a specific tool, model or platform.

## Control classes

CTRL-PREC-001 requires each applicable requirement to be assigned one or more control classes before execution.

### Deterministic control

A deterministic control evaluates an explicit condition with a reproducible mechanism. Examples include:

- Identity and permission enforcement.
- Environment and network isolation.
- Schema, policy and configuration validation.
- Compilation, type checking and linting.
- Automated tests with defined assertions.
- Dependency, license, secret and vulnerability checks.
- Structural architecture rules.
- Resource, time and spending limits.
- Required-field, signature and version checks.

A deterministic control can still be incomplete, poorly designed or incorrectly configured. Reproducibility does not prove that the control covers the right requirement.

### Inferential control

An inferential control evaluates meaning, intent, ambiguity or quality through probabilistic judgment. Examples include:

- Review of requirement clarity and internal consistency.
- Semantic comparison of implementation with intended behavior.
- Identification of plausible threats, misuse cases or missing edge cases.
- Review of maintainability, usability or architectural coherence that is not fully encoded as rules.
- Classification and prioritization of findings for human consideration.

An inferential result is a finding or recommendation unless a documented control definition assigns it a blocking outcome. It is never an authenticated human approval.

### Human decision

A human decision applies accountable judgment to evidence, tradeoffs, residual uncertainty and consequential outcomes. Human judgment does not turn a failed deterministic result into a passing result. It may authorize remediation, reduce scope, stop the work or approve a governed exception where the organization permits one.

## Precedence rules

CTRL-PREC-002 through CTRL-PREC-005 enforce these rules.

1. A requirement that can feasibly be enforced or evaluated deterministically must use a deterministic control.
2. Prompt instructions, AI self-restraint and inferential review must not replace a feasible deterministic control.
3. Inferential controls may supplement deterministic controls by evaluating meaning, intent, ambiguity and coverage gaps.
4. An inferential pass must not override, suppress, relabel or compensate for a deterministic failure.
5. A human decision must not silently override a deterministic failure. Any permitted exception follows the organization's exception process and leaves the original failure visible.
6. When deterministic and inferential results address different requirements, each result retains its own disposition. They are not averaged into one confidence score.
7. When a required control is unavailable, stale, misconfigured or unable to evaluate the exact artifact version, its requirement is unverified rather than passed.
8. A more restrictive applicable result governs continuation until the conflict or failure receives an accountable disposition.

## Deterministic feasibility test

A deterministic control is feasible when all of the following are true:

- The requirement can be expressed as an observable condition or bounded set of conditions.
- An approved mechanism can evaluate or enforce the condition with acceptable reliability.
- The mechanism can run at the required lifecycle point and against the exact relevant version.
- Its operating cost and delay are proportionate to the risk and delivery need.
- The organization can own, maintain and review the control.

Cost or inconvenience alone does not make a control infeasible when the control is required by law, policy, risk treatment or the authority grant.

If only part of a requirement is deterministic, that part must use deterministic control. Inferential or human review covers the remaining semantic portion and must not claim coverage of the deterministic portion.

## Acceptable inferential uses

An inferential control may be used when its control definition identifies:

- The semantic question it evaluates.
- Why deterministic evaluation is incomplete or infeasible.
- The approved model, reviewer or evaluation class.
- Required input context and exact artifact version.
- The allowed outcomes and their meaning.
- The threshold or decision rule established before evaluation.
- Required corroboration or sampling where applicable.
- The owner and escalation route.
- The evidence that must be retained.
- Conditions that trigger recalibration, restriction or withdrawal.

Inferential controls may generate findings, request clarification, recommend remediation, identify gaps or block a gate according to their predefined rule. They must not:

- Claim guaranteed correctness or completeness.
- Satisfy an authenticated human gate.
- Accept risk or approve an exception.
- Replace identity, permission, isolation, test, policy or other feasible deterministic enforcement.
- Mark their own missing or malformed input as a pass.
- Change their threshold after seeing a result without recording a new control version and repeating the evaluation.

## Result model

Every required control produces one of these outcomes:

- **Pass:** The defined control evaluated the exact input and satisfied its predeclared criterion.
- **Fail:** The control evaluated the input and did not satisfy its criterion.
- **Unable to evaluate:** The control was unavailable, invalid, missing required context or unable to evaluate the exact input.
- **Not applicable:** An accountable owner determined before the gate that the control does not apply and recorded the reason.

Warnings and findings are retained in addition to the outcome. A control must not convert a failure into a warning merely to permit continuation.

## Disagreement handling

CTRL-PREC-004 makes this handling enforceable.

### Deterministic fail and inferential pass

The gate remains closed. The deterministic failure is remediated and both controls are rerun, or an authorized human applies the governed exception process. The inferential pass remains evidence but has no overriding effect.

### Deterministic pass and inferential fail

The deterministic requirement remains passed. The inferential finding is evaluated under its predefined outcome rule. If the inferential control is blocking, the gate remains closed pending remediation, accountable rejection of the finding or a governed exception. The deterministic pass does not prove semantic acceptability.

### Conflicting inferential results

Do not average or select the preferred result after the fact. Apply the predeclared corroboration and escalation rule. The accountable owner may request additional evidence, use an approved independent evaluation, narrow scope or make the applicable human decision. The disagreement and disposition remain visible.

### Human disagreement with a control

The human records whether the control is defective, misapplied, out of scope or correctly reports an unacceptable result. A defective control is repaired and rerun. A correctly reported failure remains failed unless a governed exception is approved. Editing or rerunning controls until a preferred result appears is prohibited.

## Normative controls

### CTRL-PREC-001: Define the control plan before execution

**Purpose:** Establish which requirements are evaluated deterministically, inferentially or through accountable human decisions before results are known.

**Control type:** Preventive.

**Applicable adoption states and risks:** All adoption states and all AI-assisted work with required controls, acceptance criteria or human gates.

**Owner:** Delivery accountable owner, with each control owner responsible for the assigned mechanism.

**Requirement:** Before execution, the work record must list applicable requirements, control class, mechanism, owner, lifecycle point, exact input, allowed outcomes, passing criterion, blocking behavior, evidence source and failure response. Requirements with both deterministic and semantic parts must identify each part separately.

**Enforcement or evaluation mechanism:** Planning or work-intake validation rejects missing requirements, unowned controls, undefined criteria and control selection made only after results are observed.

**Evidence:** Versioned control plan linked to the work, authority grant, requirements and evidence package.

**Failure response:** Do not begin affected execution. Complete the control plan, reduce scope or deny the work when required controls are unavailable.

**Review frequency:** Before execution and whenever requirements, scope, risk, authority, artifact versions or control mechanisms change.

### CTRL-PREC-002: Use deterministic controls whenever feasible

**Purpose:** Enforce explicit requirements reliably instead of relying on probabilistic compliance.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** All adoption states and every requirement that satisfies the deterministic feasibility test.

**Owner:** Owner of the affected requirement or control.

**Requirement:** Every feasible deterministic portion of a requirement must be enforced or evaluated by an approved deterministic mechanism at the required lifecycle point. Prompts, rules files, AI review, model self-checks and human confidence must not substitute for that mechanism.

**Enforcement or evaluation mechanism:** Control-plan review applies the feasibility test, and gates obtain the result directly from the approved mechanism against the exact artifact or state version.

**Evidence:** Feasibility decision, control definition, configuration version, execution record, exact input reference and result.

**Failure response:** Keep the requirement unverified until the deterministic control runs successfully. If the mechanism cannot be restored, reduce authority or scope, stop the work or obtain an authorized exception where policy permits one.

**Review frequency:** At control selection, every execution, mechanism change and periodic control-effectiveness review.

### CTRL-PREC-003: Bound inferential controls to defined semantic questions

**Purpose:** Use probabilistic evaluation where it adds meaning without overstating its assurance.

**Control type:** Detective.

**Applicable adoption states and risks:** All adoption states where meaning, intent, ambiguity, quality or coverage cannot be fully evaluated deterministically.

**Owner:** Owner of the inferential control.

**Requirement:** An inferential control must define its semantic question, justification, approved evaluator class, required inputs, allowed outcomes, predeclared decision rule, blocking behavior, evidence and escalation. Its result must be labeled inferential and must not be represented as deterministic proof, human approval or complete coverage.

**Enforcement or evaluation mechanism:** Control registration and gate validation check the definition, input completeness, artifact version, result label and permitted downstream use.

**Evidence:** Versioned control definition, evaluator and configuration identity, input references, output, outcome, findings and disposition.

**Failure response:** Treat an undefined, malformed, stale or out-of-scope result as unable to evaluate. Do not use it to pass or override a gate.

**Review frequency:** At registration, each material use, evaluator or prompt change, observed drift, repeated disagreement and periodic effectiveness review.

### CTRL-PREC-004: Resolve disagreements without silent override

**Purpose:** Preserve the meaning of each control result when deterministic, inferential or human judgments conflict.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every gate with conflicting control results or human disagreement with a control.

**Owner:** Delivery accountable owner until the applicable requirement or decision owner accepts escalation.

**Requirement:** A deterministic failure must remain blocking regardless of an inferential pass. An inferential failure must follow its predeclared blocking rule regardless of a deterministic pass on a different requirement. Conflicting inferential results must follow a predeclared corroboration and escalation rule. Any human disposition must identify the conflict, exact results, rationale and whether remediation, control repair, scope reduction, stop or governed exception applies.

**Enforcement or evaluation mechanism:** The gate retains individual results, applies the more restrictive continuation status and requires an explicit accountable disposition before reopening.

**Evidence:** Conflicting control records, gate status, escalation, accountable disposition, remediation or exception reference and repeated results where applicable.

**Failure response:** Keep the gate closed and preserve all original results. Escalate unresolved disagreement and restrict authority when the conflict indicates unreliable controls or unexpected behavior.

**Review frequency:** At every disagreement and during repeated-disagreement and control-effectiveness review.

### CTRL-PREC-005: Fail closed when a required control cannot evaluate

**Purpose:** Prevent missing, stale or broken controls from being interpreted as successful evaluation.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every required control and gate.

**Owner:** Owner of the required control.

**Requirement:** A required control that is unavailable, misconfigured, missing required context, unable to resolve the exact input version or otherwise unable to evaluate must produce an unable-to-evaluate outcome. That outcome must block the gate unless an authorized exception explicitly permits a defined alternative control or reduced scope.

**Enforcement or evaluation mechanism:** Gates require a current result for the exact input from every applicable blocking control and distinguish absence from pass.

**Evidence:** Unable-to-evaluate result, cause, affected requirement and scope, containment, escalation and recovery or exception disposition.

**Failure response:** Stop affected progression, restore and rerun the control, substitute only a preapproved equivalent control, reduce scope or apply the governed exception process.

**Review frequency:** At every control execution, gate and control-health alert.

### CTRL-PREC-006: Preserve complete control outcomes

**Purpose:** Make control and gate decisions reconstructable and prevent selective reporting.

**Control type:** Detective.

**Applicable adoption states and risks:** Every required deterministic and inferential control.

**Owner:** Owner of the required control.

**Requirement:** Every control execution must record the control identifier and version, class, evaluator, event time, exact input, configuration, outcome, material findings and downstream disposition. Failures, warnings, disagreements and unable-to-evaluate outcomes must remain visible in the evidence package.

**Enforcement or evaluation mechanism:** Evidence and gate validation reconcile expected controls with complete results and reject summaries that omit nonpassing outcomes.

**Evidence:** Control execution records linked under CTRL-EVID-002 and independently captured under CTRL-EVID-005.

**Failure response:** Treat the affected requirement as unverified, stop at the gate and reconstruct or rerun the control. Apply CTRL-EVID-008 when trustworthy evidence cannot be restored.

**Review frequency:** At every execution, gate, completion and periodic evidence sample.

### CTRL-PREC-007: Improve or withdraw unreliable controls

**Purpose:** Prevent continued reliance on controls that repeatedly miss defects, create false findings or produce unstable results.

**Control type:** Detective and corrective.

**Applicable adoption states and risks:** All controls with observed escapes, false results, repeated disagreements, drift or material configuration changes.

**Owner:** Owner of the affected control.

**Requirement:** Material control failures and repeated disagreements must be classified and reviewed. The owner must improve the control, change its permitted use, add corroboration, reduce the authority that depends on it or withdraw it. Prior passing results must be reassessed when a discovered defect could have invalidated them.

**Enforcement or evaluation mechanism:** Control-health review uses incidents, escaped defects, disagreement records, configuration changes and observed drift to trigger corrective action.

**Evidence:** Failure classification, affected executions and decisions, corrective action, revised control version, reassessment results and authority impact.

**Failure response:** Restrict the control's permitted use and any authority dependent on it until effectiveness is restored and reviewed.

**Review frequency:** After material failure, repeated disagreement, evaluator or configuration change, detected drift and the organization's scheduled control review.

## Gate completion check

A gate governed by this chapter is complete only when:

- Every applicable requirement has a predeclared control and owner.
- Every feasible deterministic control ran against the exact relevant version.
- Every inferential control stayed within its defined semantic question and use.
- Every control produced a current, complete outcome.
- No deterministic failure was overridden by an inferential result.
- Every disagreement, failure and unable-to-evaluate outcome has an accountable disposition.
- The evidence package preserves the control definitions, results and gate decision.

A passing gate proves only that its defined controls passed. It does not prove that unidentified requirements or unimplemented controls were satisfied.
