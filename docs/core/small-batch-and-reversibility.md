# Small-Batch and Reversibility Requirements

## Purpose

This chapter defines how AI-assisted changes are divided into independently understandable and verifiable units, how blast radius is bounded, how recovery is prepared and when irreversible work requires additional treatment or must not receive AI execution authority.

Small batches are a risk and feedback mechanism. They are not a fixed limit on files, lines of code or elapsed time.

## Source basis and playbook decision

The required sources provide three complementary patterns:

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) identifies small batches and fast feedback as capabilities that help organizations realize benefits from AI-assisted delivery.
- [SRC-003](../sources/source-ledger.md#src-003-aws-adaptive-ai-dlc-workflows) adapts workflow breadth and depth to the work while retaining plans, approvals and verification checkpoints.
- [SRC-007](../sources/source-ledger.md#src-007-engineering-the-agentic-sdlc) uses phase boundaries, automated backpressure, nonproduction scenario testing and code-based verification to prevent errors from compounding.

The controls below are this playbook's normative decisions. They define small-batch and reversibility behavior without imposing vendor-specific tooling or invented numeric limits.

## Change-batch standard

CTRL-BATCH-001 and CTRL-BATCH-002 make this standard enforceable.

An acceptable change batch has:

- One coherent objective and one accountable work owner.
- Explicit included and excluded scope.
- Known dependencies, assumptions and affected systems.
- A defined starting state and intended resulting state.
- Acceptance criteria that can be evaluated for this batch alone.
- Verification that can run against this batch's exact version.
- A bounded maximum credible blast radius.
- A recovery method and accountable recovery decision.
- No unrelated cleanup, refactoring or opportunistic change.
- A diff, artifact set or state transition that a qualified reviewer can understand without reconstructing hidden conversational context.

A batch is too large when a reviewer or control cannot isolate why it changed, what it affects, whether it satisfies its objective or how to recover it. The work must then be split, reduced or returned to planning.

Batch boundaries must follow technical and operational dependencies. Artificially separating changes that cannot be safely verified or recovered independently does not satisfy this chapter.

## Batch decomposition

When a proposed change is not independently understandable, testable and recoverable, decompose it by one or more of these boundaries:

- User-visible behavior or acceptance criterion.
- Component, service, interface or data boundary.
- Additive preparation before dependent migration or removal.
- Context or specification clarification before implementation.
- Structural change before behavior change when each can be verified independently.
- Test or observability preparation before risky implementation.
- Environment, tenant, cohort or rollout boundary.
- Reversible preparation before an irreversible human-controlled action.

Each resulting batch must still deliver a coherent verifiable state. A partial batch that leaves the managed system invalid, insecure or unrecoverable is not acceptable merely because it is small.

## Reversibility classification

CTRL-BATCH-003 requires every proposed change to be classified before execution.

### Reversible

The affected state can be returned to the verified starting state using a defined, permitted and tested or otherwise evidenced rollback method within the applicable recovery tolerance.

### Recoverable

Direct rollback is not reliable or appropriate, but the organization can restore an acceptable safe state through forward correction, restore, rebuild, failover, replay or another defined recovery method within the applicable tolerance.

### Irreversible

The prior state, data, obligation or external effect cannot be reliably restored within the applicable tolerance. Examples can include permanent external communications, destructive changes without restorable state, disclosed secrets, consumed one-time resources or obligations already created.

Labeling a change reversible is a claim that requires evidence. The existence of a rollback command, backup, version-control history or prior successful recovery is not sufficient unless it covers the actual affected state and current change conditions.

## Recovery plan requirements

Before execution, the recovery plan must define:

- Starting-state reference and protected recovery point.
- Maximum credible blast radius.
- Failure and degradation signals.
- Stop and recovery decision owner.
- Rollback or recovery actions and required authority.
- Dependencies, order of operations and expected duration.
- Data reconciliation and integrity checks where applicable.
- Verification that proves an acceptable state was restored.
- Communications and escalation obligations.
- Conditions under which recovery itself must stop.

The applicable service, product, data, security or business owner defines acceptable recovery tolerance. This playbook does not invent one universal duration.

## Treatment of irreversible work

CTRL-BATCH-005 makes this treatment enforceable.

The Pilot Edition does not permit AI execution authority for an irreversible action. AI may assist with analysis, planning, simulation, test preparation and evidence assembly inside its approved authority.

Before an accountable human authorizes an irreversible action through an existing controlled process, the work must have:

- A documented reason that a reversible or recoverable design is infeasible.
- Explicit identification of the irreversible effect and affected parties or obligations.
- The smallest feasible scope and blast radius.
- Independent verification of prerequisites and current state.
- A rehearsal, simulation or nonproduction validation where meaningful.
- Named consequential-decision owners for every affected category.
- Explicit human approval of the exact action and evidence version.
- Containment, compensation and incident actions for plausible failure.

An irreversible effect that is not understood, bounded or explicitly approved must not proceed.

## Normative controls

### CTRL-BATCH-001: Define one coherent change batch

**Purpose:** Keep AI-assisted work understandable, reviewable and independently verifiable.

**Control type:** Preventive.

**Applicable adoption states and risks:** All adoption states where AI drafts or executes a change.

**Owner:** Delivery accountable owner.

**Requirement:** Before implementation or execution, the work owner must define one objective, included and excluded scope, dependencies, starting and intended states, acceptance criteria, verification, blast radius and recovery method for the batch. Unrelated changes must be removed or assigned to another work item.

**Enforcement or evaluation mechanism:** The planning gate validates the change-batch standard and rejects work that cannot be understood, verified or recovered independently.

**Evidence:** Batch identifier, objective, scope, exclusions, dependencies, state references, acceptance criteria, verification plan, blast radius and recovery reference.

**Failure response:** Return to planning and split, reduce or clarify the batch. Do not grant state-changing AI authority for an invalid batch.

**Review frequency:** At batch creation and whenever intent, scope, dependencies, risk or affected state changes.

### CTRL-BATCH-002: Bound scope and blast radius technically

**Purpose:** Prevent a nominally small work item from producing uncontrolled effects.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every state-changing AI-assisted batch and every batch with external, data, security or operational effects.

**Owner:** AI delivery governance owner for AI authority and the applicable system or service owner for the affected boundary.

**Requirement:** The batch's repository, files, components, data, environment, tools, permissions, downstream effects and resource use must be bounded by the authority grant and technical controls. The maximum credible blast radius must fit the approved risk treatment. Narrative scope alone must not authorize broader technical access.

**Enforcement or evaluation mechanism:** Permission, isolation, path, environment, resource and downstream-effect controls enforce CTRL-AUTH-002 and compare actual actions with the batch boundary.

**Evidence:** Authority-grant version, enforced boundaries, blast-radius assessment, action records and detected boundary violations.

**Failure response:** Stop execution, contain effects and restrict or revoke authority under CTRL-AUTH-008. Reclassify or reduce the batch before any restart.

**Review frequency:** At grant approval, before execution and whenever scope, access, environment or downstream effects change.

### CTRL-BATCH-003: Classify reversibility before execution

**Purpose:** Make recovery characteristics change permitted authority and required treatment.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every proposed state change.

**Owner:** Delivery accountable owner with the applicable service, data, security and product decision owners.

**Requirement:** Before execution, the change must be classified as reversible, recoverable or irreversible using the actual affected state and applicable recovery tolerance. The classification must identify assumptions, dependencies, recovery authority and evidence. Uncertain classification receives the more restrictive treatment.

**Enforcement or evaluation mechanism:** Risk and planning gates require the classification and verify that the selected authority outcome and recovery treatment are consistent with it.

**Evidence:** Reversibility classification, affected-state inventory, tolerance source, rationale, dependencies, evidence and accountable owner decisions.

**Failure response:** Keep the change in plan, draft or isolated-experiment authority until classification is reliable. Deny AI execution for irreversible or uncontrolled work.

**Review frequency:** Before execution and whenever the change, affected state, recovery capability or tolerance changes.

### CTRL-BATCH-004: Prepare and verify recovery before execution

**Purpose:** Ensure recovery is an executable capability rather than an untested assertion.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every reversible or recoverable state-changing batch.

**Owner:** Applicable service, system or data accountable owner.

**Requirement:** Before execution, the work must have a current recovery plan, protected recovery point where applicable, required human and technical authority, failure triggers and restoration verification. The recovery mechanism must be tested, rehearsed or supported by evidence proportionate to the change risk and recency of the affected system state.

**Enforcement or evaluation mechanism:** The execution gate verifies each recovery-plan field, required access, protected state and rehearsal or supporting evidence against the exact batch.

**Evidence:** Recovery plan and version, recovery-point reference, access validation, test or rehearsal result, known limitations and accountable readiness decision.

**Failure response:** Do not execute the change. Establish adequate recovery, reduce scope and blast radius or treat the work as irreversible under CTRL-BATCH-005.

**Review frequency:** Before every state-changing batch and after recovery mechanism, system, data, dependency or authority changes.

### CTRL-BATCH-005: Apply additional treatment to irreversible work

**Purpose:** Prevent AI execution and casual approval of effects that cannot be reliably undone.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every irreversible action or change whose recoverability is unproven.

**Owner:** Delivery accountable owner with every applicable consequential-decision owner.

**Requirement:** AI must not execute an irreversible action in the Pilot Edition. Any human-controlled irreversible action assisted by AI must document why safer design is infeasible, minimize scope and blast radius, verify prerequisites independently, validate through rehearsal or simulation where meaningful, obtain exact-version human decisions and define containment and compensation. Missing or unresolved treatment prohibits the action.

**Enforcement or evaluation mechanism:** Authority validation rejects irreversible AI actions, and the human-controlled gate validates all additional-treatment evidence and category-owner decisions.

**Evidence:** Irreversibility rationale, alternatives, minimized scope, prerequisite results, rehearsal or simulation, decision records, containment and compensation plan.

**Failure response:** Deny AI execution and keep the human-controlled action closed. Redesign for reversibility, reduce scope or stop the work.

**Review frequency:** At classification, every material change to the action or evidence and immediately before human authorization.

### CTRL-BATCH-006: Verify the exact batch independently

**Purpose:** Prevent verification of a different version, combined change set or AI assertion from being accepted as proof.

**Control type:** Detective.

**Applicable adoption states and risks:** Every implemented or executed change batch.

**Owner:** Owner of each applicable acceptance criterion and control.

**Requirement:** Required deterministic and inferential controls must evaluate the exact batch version and its defined starting and resulting states. Verification must cover batch acceptance criteria, boundary compliance, material dependencies and recovery readiness. AI claims of completion must not substitute for independently captured results.

**Enforcement or evaluation mechanism:** The completion gate binds control results under CTRL-PREC-001 through CTRL-PREC-006 to the exact diff, artifact set or state transition.

**Evidence:** Exact batch version, control results, acceptance-criteria coverage, dependency status, boundary reconciliation and unresolved findings.

**Failure response:** Mark the batch unverified, stop progression and remediate or reduce it. Split combined or ambiguous changes and repeat verification.

**Review frequency:** After every material change and before human acceptance, merge, release or downstream use.

### CTRL-BATCH-007: Prove recovery and learn from its use

**Purpose:** Confirm that recovery restored an acceptable state and improve weak recovery claims.

**Control type:** Detective and corrective.

**Applicable adoption states and risks:** Every invoked rollback, restore, forward correction, failover or other recovery action.

**Owner:** Applicable service, system or data accountable owner.

**Requirement:** Recovery must not be declared complete until independent verification confirms the defined acceptable state, including data integrity and downstream consistency where applicable. The evidence package must preserve the trigger, decision, actions, duration, results, residual effects and any authority restriction. A recovery failure or material deviation must produce corrective action before the same recovery claim is reused.

**Enforcement or evaluation mechanism:** The recovery gate runs the predeclared restoration checks against the resulting state and requires an authenticated human completion decision.

**Evidence:** Failure trigger, recovery decision, action records, restored-state verification, residual findings, communications, completion decision and corrective actions.

**Failure response:** Keep the incident or change open, contain further effects, escalate to the applicable owner and restrict related AI authority until safe state and recovery capability are established.

**Review frequency:** After every recovery invocation, failed rehearsal, material deviation and recovery-system change.

## Batch completion check

A change batch is complete under this chapter only when:

- Its objective, scope, exclusions and versions remain coherent.
- Actual actions stayed within the enforced boundary.
- The reversibility classification still matches the resulting state.
- Required controls evaluated the exact batch and passed or received an authorized disposition.
- Recovery readiness remains valid for the accepted state.
- Human decisions reference the exact batch and evidence versions.
- Failures, recovery actions and residual findings are preserved.

Completion of one batch does not authorize the next batch. Each batch receives its own scope, authority, verification and decision.
