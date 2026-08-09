# Durable Evidence Requirements

## Purpose

This chapter defines the minimum evidence required to reconstruct material AI-assisted software-delivery work. It establishes what must be recorded, how records remain attributable and reviewable, who owns retention and when an incomplete evidence chain must stop work.

Evidence supports accountability, control and learning. It does not make an unsafe action acceptable or replace an accountable human decision.

## Source basis and playbook decision

The required sources provide four complementary patterns:

- [SRC-002](../sources/source-ledger.md#src-002-aws-ai-driven-development-life-cycle) preserves plans, requirements and design artifacts as persistent lifecycle context.
- [SRC-003](../sources/source-ledger.md#src-003-aws-adaptive-ai-dlc-workflows) records plans, artifacts, human actions, approvals and interactions across adaptive workflows.
- [SRC-004](../sources/source-ledger.md#src-004-github-spec-kit) uses governing principles, specifications, plans, tasks, analysis and implementation artifacts to maintain alignment between intent and execution.
- [SRC-009](../sources/source-ledger.md#src-009-finos-mcp-server-security-governance) emphasizes identity propagation, audit logs, data versioning, integrity checks, retention requirements and preservation for incident analysis.

The controls below are this playbook's normative decisions. The playbook generalizes the source patterns beyond any vendor, protocol or implementation.

## Evidence standard

Evidence is sufficient only when a reviewer who did not participate in the work can determine:

- What work was intended and which version of the intent governed execution.
- Which human and AI identities participated.
- Which authority grant and controls applied.
- Which context, artifacts, tools and external sources influenced the work.
- Which material actions occurred and what state they affected.
- Which checks ran, against which version and with what result.
- Which human decisions were made, by whom and against which evidence.
- Which exceptions, failures, restrictions, revocations or incidents occurred.
- What final state was accepted, rejected, reversed or left unresolved.

The evidence chain must be durable, attributable, linked, time-ordered, version-specific, access-controlled and reviewable for the retention period assigned by organizational policy.

## Material action and gate test

CTRL-EVID-001 makes this test enforceable.

An action or gate is material when it does one or more of the following:

- Uses nonpublic enterprise context or a governed external source.
- Invokes a tool under an authority grant.
- Creates, changes or deletes durable state.
- Produces an artifact used to direct or verify later work.
- Evaluates a control or completion criterion.
- Presents a consequential decision to an accountable human.
- Grants, changes, restricts, revokes or restores authority.
- Crosses a repository, environment, trust or organizational boundary.
- Creates a downstream effect, resource commitment or external communication.
- Handles a control failure, exception, stop condition, rollback or incident.

Routine internal model operations that neither affect state nor influence a material output do not require separate event records. Their material outputs and the evidence used to evaluate those outputs remain in scope.

When the work owner cannot determine whether an action is material, it is treated as material until classified otherwise by the applicable accountable human.

## Required evidence categories

CTRL-EVID-002 and CTRL-EVID-003 require the applicable categories below to form one linked evidence package.

### Intent and scope

Record the work identifier, objective, acceptance criteria, approved scope, exclusions, risk classification and governing artifact versions.

### Identity, accountability and authority

Record participating human and AI identities, accountable owners, role mappings, authority-grant identifier and version, effective period and applicable control set.

### Context and provenance

Record material context sources, source owner or publisher, retrieval or supplied time, version or revision where available, sensitivity classification and any transformation that affects interpretation.

### Plans and tasks

Record the approved plan, material clarifications, task breakdown, dependencies, constraints, assumptions and the exact version authorized for execution.

### Actions and tool execution

Record each material action's actor, time, tool or mechanism, approved purpose, relevant parameters or bounded summary, target, result, state change and link to the authority grant.

Secrets, credentials and unnecessary sensitive payloads must not be copied into evidence. Their use is represented by a protected reference, credential class or redacted record that still permits authorization and action reconstruction.

### Changes and resulting state

Record created, modified or deleted artifacts and state, including stable versions, revisions, diffs, checksums or equivalent identifiers appropriate to the system.

### Verification and control outcomes

Record the requirement or control evaluated, evaluation mechanism, evaluator identity, input version, time, complete outcome, material findings and disposition. A summary may link to larger retained output, but must not conceal a failure or unresolved finding.

### Human decisions and gates

Record the decision identifier, accountable human, authenticated action, exact proposal and evidence versions reviewed, alternatives, unresolved findings, decision, conditions and effective period.

### Exceptions, stops and incidents

Record the trigger, affected work, containment, escalation, decision owner, disposition, recovery evidence, authority impact and follow-up obligation.

### Completion and disposition

Record the final accepted scope and version, completion decision, unresolved items, retained evidence location and whether the work proceeded, stopped, was reversed or was abandoned.

## Evidence linkage

Every evidence package starts with one stable work identifier. Records must link through stable identifiers or immutable references rather than filenames or conversational descriptions alone.

As applicable, the package links:

- Work identifier.
- Governing specification, plan and task versions.
- Authority-grant identifier and version.
- Action and tool-execution records.
- Changed artifact or state versions.
- Verification and control-result identifiers.
- Consequential-decision and human-approval identifiers.
- Exception, stop, incident, restriction and revocation identifiers.
- Completion disposition.

A later correction creates a new version and preserves the relationship to the superseded record. It must not silently replace history.

## Evidence at lifecycle gates

The following minimum linkage applies whenever the gate exists:

- **Before AI participation:** Link intent, scope, accountable humans, risk treatment and the current authority grant.
- **Before execution:** Link the approved plan and task version, permitted tools and actions, required controls and stop conditions.
- **After each material action:** Link the actor, authority, action, target, result and resulting state.
- **Before a human decision:** Link the exact proposal, applicable verification, unresolved findings and required category owners.
- **Before accepting completion:** Link accepted change versions, all required control results, human decisions, exceptions and unresolved-item dispositions.
- **After failure or incident:** Link containment, preserved evidence, authority restriction or revocation, recovery verification and the decision to resume or close.

## Prompt and transcript limitations

Prompts, chat transcripts, model reasoning summaries and AI-generated narratives may provide supporting context. They are not sufficient evidence by themselves because they may be incomplete, mutable, difficult to authenticate, disconnected from actual tool execution or unable to prove resulting state.

A transcript must not substitute for:

- An authenticated human decision.
- An authority grant.
- A tool or system action record.
- A versioned change or state identifier.
- An independently captured control or verification result.
- An exception, stop, incident or recovery record.

Organizations should retain transcript content only when it has a defined evidentiary purpose and its data handling is permitted. Required facts should be extracted into structured, versioned records rather than left discoverable only through transcript review.

## Provenance and integrity expectations

Evidence mechanisms must preserve, as applicable:

- Producer identity and whether the producer was human, AI or an automated control.
- Creation time and relevant event time.
- Source system, repository, tool or authoritative origin.
- Version, revision, digest or other stable reference.
- Relationship to the work, grant, action, decision or control it supports.
- Sensitivity and access classification.
- Original outcome, including failures and unresolved findings.
- Corrections, redactions and retention actions without loss of required history.

Cryptographic protection is required only where organizational policy or risk treatment calls for it. The underlying requirement is to detect unauthorized change and preserve trustworthy attribution using a mechanism proportionate to the evidence risk.

## Retention ownership

The delivery accountable owner ensures that an evidence package has a named retention owner before material AI-assisted work begins. The retention owner may be a records, system, repository or control owner authorized by organizational policy.

The retention assignment must define:

- Approved storage location and system of record.
- Evidence classification and permitted access.
- Retention rule and the policy, legal, contractual or operational basis for it.
- Preservation requirements for investigations, disputes, audits or legal holds.
- Export, migration and readability requirements where systems may change.
- Approved disposition method and accountable disposition authority.

This playbook does not impose one universal retention period. The selected period must cover the time in which the work, decision, control, incident or resulting obligation may need to be reconstructed.

## Normative controls

### CTRL-EVID-001: Identify material actions and gates

**Purpose:** Determine which parts of AI-assisted work require durable evidence before evidence can be lost.

**Control type:** Preventive.

**Applicable adoption states and risks:** All adoption states and all AI-assisted work, with increased attention to state-changing, consequential, privileged, sensitive or difficult-to-reverse work.

**Owner:** Delivery accountable owner.

**Requirement:** Before AI assistance begins, the work owner must apply the material action and gate test, identify the expected material events and specify how each will produce evidence. Uncertain actions must be treated as material until an accountable human classifies them otherwise.

**Enforcement or evaluation mechanism:** Work intake or planning validates an evidence plan against the proposed context, authority, tools, actions, gates and completion criteria.

**Evidence:** Work identifier, expected material actions and gates, required evidence categories, capture mechanisms and accountable owner.

**Failure response:** Do not begin the affected AI-assisted work. Define the missing evidence capture or reduce the work to a scope whose evidence can be preserved.

**Review frequency:** At work intake and whenever scope, authority, tools, risk, controls or expected effects change.

### CTRL-EVID-002: Maintain one linked evidence package

**Purpose:** Make the work reconstructable without searching disconnected systems or relying on participant memory.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** All adoption states and all material AI-assisted work.

**Owner:** Delivery accountable owner.

**Requirement:** Every material AI-assisted work item must have one evidence package anchored by a stable work identifier. The package must link every applicable required evidence category and lifecycle gate to stable, version-specific records. Links must resolve for authorized reviewers throughout the assigned retention period.

**Enforcement or evaluation mechanism:** Entry, human-gate and completion checks validate required category coverage, stable references and link resolution.

**Evidence:** Evidence-package index containing the work identifier, required categories, linked record identifiers, versions, locations, owners and coverage status.

**Failure response:** Stop at the next affected gate, repair the linkage or recapture evidence from authoritative sources. If reconstruction is no longer reliable, apply CTRL-EVID-008.

**Review frequency:** At package creation, every human gate, completion and retention-system change.

### CTRL-EVID-003: Record material AI actions and provenance

**Purpose:** Distinguish what AI proposed from what it actually accessed, invoked or changed.

**Control type:** Detective.

**Applicable adoption states and risks:** All adoption states where AI accesses governed context, invokes tools, creates material artifacts or changes state.

**Owner:** AI delivery governance owner.

**Requirement:** Each material AI action must record the AI identity, event time, authority-grant version, approved purpose, context or source references, tool and permitted action, target, outcome and resulting state. Records must distinguish proposals from executed actions and must not expose secrets or unnecessary sensitive payloads.

**Enforcement or evaluation mechanism:** The execution boundary emits or requires action records and reconciles them with tool, repository or target-system records where available.

**Evidence:** Linked AI action records and authoritative tool, repository or system events sufficient to reconstruct the action and its result.

**Failure response:** Stop further state-changing AI action, preserve available system records and investigate the gap. Restrict or revoke authority when unrecorded action may have occurred.

**Review frequency:** Continuously during tool use and at work completion, control sampling, anomaly detection and incident review.

### CTRL-EVID-004: Bind human decisions to exact evidence

**Purpose:** Prove what an accountable human actually reviewed and authorized.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every human gate, consequential decision and authority decision.

**Owner:** Accountable human for the decision.

**Requirement:** A human decision record must identify the authenticated decision owner, decision category, exact proposal and artifact versions, applicable verification results, unresolved findings, explicit disposition, conditions and effective period. Later changes to the proposal or evidence invalidate the decision for the changed scope unless the decision conditions explicitly permit them.

**Enforcement or evaluation mechanism:** The gate binds approval to immutable references or captured versions and rejects AI identities, ambiguous decisions, silence and stale approvals.

**Evidence:** Human decision record and resolvable references to the complete decision package defined by CTRL-ACC-004 and CTRL-ACC-005.

**Failure response:** Treat the gate as not approved. Stop downstream work and repeat the decision against the current evidence package.

**Review frequency:** At every human gate and whenever approved scope, evidence, conditions or artifact versions change.

### CTRL-EVID-005: Capture verification independently of AI claims

**Purpose:** Prevent AI assertions or transcript summaries from being mistaken for proof that a requirement passed.

**Control type:** Detective.

**Applicable adoption states and risks:** Every required control, acceptance criterion and completion check.

**Owner:** Owner of the evaluated control or requirement.

**Requirement:** Verification evidence must come from the evaluating control, tool, system or accountable human and must identify the evaluated requirement, input version, mechanism, evaluator, time and complete result. An AI statement that a check ran or passed must not satisfy the requirement without the corresponding independent record.

**Enforcement or evaluation mechanism:** Gates obtain results from approved evidence sources and reject unsupported summaries, missing output, stale input versions and concealed failures.

**Evidence:** Control or verification record, input reference, complete result, material findings and disposition.

**Failure response:** Mark the requirement unverified, rerun the approved check or obtain accountable human evaluation where deterministic verification is not feasible. Do not proceed on the AI assertion alone.

**Review frequency:** At every required verification and whenever the evaluated input changes.

### CTRL-EVID-006: Preserve evidence integrity and correction history

**Purpose:** Keep evidence trustworthy when records are stored, corrected, redacted, migrated or reviewed later.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** All retained evidence, especially evidence supporting consequential decisions, security controls, incidents or disputed outcomes.

**Owner:** Retention owner.

**Requirement:** Evidence must use access controls, versioning and change detection proportionate to its risk. Corrections and permitted redactions must create an attributable new version, preserve the original record or required history, state the reason and identify the authorizing human. Required failures and unresolved findings must not be overwritten or omitted.

**Enforcement or evaluation mechanism:** The system of record enforces authorized change, preserves version history and detects or reports integrity failures.

**Evidence:** Access policy, version history, integrity result and correction, redaction or migration records.

**Failure response:** Isolate affected evidence, preserve available originals, assess decisions that relied on it and repeat affected gates when trust cannot be restored.

**Review frequency:** At creation, correction, redaction, migration, access review, integrity alert and before consequential reliance.

### CTRL-EVID-007: Assign retention, access and disposition ownership

**Purpose:** Keep required evidence available, protected and readable for as long as the enterprise needs it.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every evidence package.

**Owner:** Retention owner.

**Requirement:** Before material AI-assisted work begins, the evidence package must name a retention owner and define the approved storage location, classification, access rules, retention basis, preservation triggers, readability requirements and disposition authority. Retention must follow applicable organizational, legal, regulatory, contractual and operational policy. Evidence must not be deleted while subject to an active preservation obligation.

**Enforcement or evaluation mechanism:** Work intake validates the retention assignment, and the system of record applies access, retention, preservation and disposition policy.

**Evidence:** Retention assignment, policy reference, storage record, access review, preservation status and authorized disposition record when applicable.

**Failure response:** Do not begin or complete affected work until ownership and policy are assigned. Suspend disposition when policy, investigation or preservation status is uncertain.

**Review frequency:** At package creation, policy change, owner or system change, preservation event and before disposition.

### CTRL-EVID-008: Stop when the evidence chain is unreliable

**Purpose:** Prevent work from proceeding when material actions, controls or decisions cannot be reconstructed or trusted.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** All adoption states and every material action, gate and completion decision.

**Owner:** Delivery accountable owner until the applicable control, retention, security or incident owner accepts escalation.

**Requirement:** Work must stop at the affected gate when required evidence is missing, inaccessible, stale, internally inconsistent, linked to the wrong version, altered without authorization or insufficient to reconstruct a material action or decision. The owner must preserve available records, identify affected actions and decisions, contain further effects and obtain an accountable disposition before work resumes or closes.

**Enforcement or evaluation mechanism:** Gate and completion checks validate evidence coverage, freshness, integrity and version linkage and expose an explicit stop status.

**Evidence:** Gap or integrity finding, affected scope, containment, escalation, reconstruction attempt, accountable disposition and any repeated verification or decision.

**Failure response:** Keep the gate closed. Restrict or revoke AI authority when unrecorded or unauthorized action may have occurred, invoke incident handling when warranted and repeat every decision whose evidence cannot be trusted.

**Review frequency:** At every gate, completion, evidence-integrity alert, incident and periodic evidence sample.

## Completion check

Material AI-assisted work is evidence-complete only when:

- Every expected and discovered material action and gate has a linked record.
- All applicable evidence categories are present or explicitly marked not applicable with accountable reasoning.
- AI actions reconcile with authoritative tool, repository or system state where available.
- Verification records match the exact accepted artifact or state versions.
- Human decisions satisfy CTRL-EVID-004 and the accountability controls.
- Exceptions, failures and unresolved findings have accountable dispositions.
- Integrity, access and retention requirements are active.
- The final disposition identifies what was accepted, rejected, reversed or left incomplete.

An evidence-complete status does not mean the work succeeded. It means the enterprise can reconstruct the work and make a defensible decision about its outcome.
