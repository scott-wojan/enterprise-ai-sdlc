# Engineering and Context Readiness

## Purpose

This chapter defines observable conditions for version control, small-batch delivery, build and test reliability, recovery, repository knowledge and context quality before AI-assisted work is authorized.

Engineering weaknesses constrain eligible AI use. AI does not compensate for an unbuildable repository, unreliable tests, unknown production path or unowned context.

## Source basis and playbook decision

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) identifies small batches, version control, internal platforms and healthy delivery capabilities as foundations that amplify AI benefit.
- [SRC-005](../sources/source-ledger.md#src-005-context-engineering-for-coding-agents) treats repository files, instructions, tools and selectively loaded resources as context whose relevance and lifecycle require deliberate management.
- [SRC-006](../sources/source-ledger.md#src-006-harness-engineering-for-coding-agent-users) combines deterministic computational controls with inferential guidance and feedback throughout the change lifecycle.
- [SRC-007](../sources/source-ledger.md#src-007-engineering-the-agentic-sdlc) emphasizes system, domain and approach context, noninteractive tooling, verification gates and nonproduction scenario testing.

The conditions below are the playbook's normative decisions. Readiness is evaluated for the exact team, repository, component and proposed work type.

## Evaluation outcomes

Each condition produces Ready, Ready with restriction, Gap or Not applicable as defined in [organizational and team readiness](organizational-and-team.md#evaluation-scope-and-outcomes). Findings are not added into a score.

A missing engineering foundation must reduce eligible work or authority. It must not be documented as a concern while the proposed state remains unchanged.

## Mandatory readiness conditions

### CTRL-READY-ENG-001: Establish authoritative version control and change identity

**Purpose:** Make every material input and output attributable, reviewable and recoverable by version.

**Control type:** Preventive.

**Applicable adoption states and risks:** Assisted Work and Bounded Change for every managed repository and related delivery artifact.

**Owner:** Repository accountable owner.

**Requirement:** Source, configuration, tests, delivery instructions and other material artifacts must be held in approved version control or linked systems with attributable history. The repository must identify protected branches, review rules, change ownership, approved integration paths and exact versions used by builds and controls. Shared state outside version control must have an equivalent authoritative record.

**Enforcement or evaluation mechanism:** Readiness review traces a representative change from work identifier through artifact versions, review, controls and resulting state.

**Evidence:** Repository and artifact inventory, ownership, branch and review policy, representative change trace and unresolved unmanaged state.

**Failure response:** Restrict the repository to Foundation or read-only Assisted Work until material state and change identity are controlled.

**Review frequency:** At initial readiness, repository or integration change and every untraceable-change finding.

### CTRL-READY-ENG-002: Demonstrate small-batch delivery discipline

**Purpose:** Ensure proposed AI-assisted work can be isolated, understood, verified and recovered.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Assisted Work that drafts changes and every proposed Bounded Change work type.

**Owner:** Team delivery accountable owner.

**Requirement:** The team must demonstrate that representative work can be decomposed into batches satisfying CTRL-BATCH-001 through CTRL-BATCH-006. Work intake, review and delivery practices must identify unrelated scope, hidden dependencies, blast radius and recovery treatment before integration.

**Enforcement or evaluation mechanism:** Readiness review applies the batch standard to recent representative work and a target AI-assisted scenario.

**Evidence:** Sample batches, scope and dependency records, review findings, verification, recovery treatment and remediation for oversized or coupled work.

**Failure response:** Limit AI use to analysis and drafting, improve decomposition and delivery practice or exclude the work type.

**Review frequency:** At work-type readiness, repeated oversized changes, review failure and material architecture change.

### CTRL-READY-ENG-003: Operate reproducible build and verification controls

**Purpose:** Give humans and AI authoritative feedback about the exact change instead of relying on completion claims.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every repository proposed for Bounded Change and Assisted Work whose outputs influence implementation.

**Owner:** Engineering control accountable owner.

**Requirement:** The repository must provide documented, noninteractive and reproducible mechanisms for applicable build, test, type, lint, policy, security and structural checks. Required controls must identify owners, input versions, expected results, failure behavior and known coverage limits. Flaky, inaccessible or routinely bypassed controls must be treated as gaps.

**Enforcement or evaluation mechanism:** A clean approved environment executes the required control set twice against a known version and demonstrates both pass and seeded or known failure behavior where safe.

**Evidence:** Control inventory, commands or interfaces, environment definition, repeated results, failure test, coverage limitations, flaky-control records and owners.

**Failure response:** Restrict authority to Assisted Work or isolated experimentation until required controls reliably evaluate the target work.

**Review frequency:** At initial readiness, control or environment change, reliability degradation and escaped defect.

### CTRL-READY-ENG-004: Demonstrate integration and recovery reliability

**Purpose:** Ensure accepted changes can enter existing delivery safely and affected state can be restored.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every proposed Bounded Change repository and work type.

**Owner:** Release accountable owner with applicable service and data owners.

**Requirement:** The team must know and exercise the human-controlled path from reviewed change through integration and applicable nonproduction validation. Recovery plans, protected recovery points, authority and verification must satisfy CTRL-BATCH-003 through CTRL-BATCH-007 for representative target work. Unreliable release or recovery capability prohibits AI execution for the affected change class.

**Enforcement or evaluation mechanism:** Readiness uses a representative nonproduction change and recovery rehearsal, including stop, rollback or alternate recovery and resulting-state verification.

**Evidence:** Integration path, accountable gates, rehearsal records, recovery time and limitations, state verification and corrective actions.

**Failure response:** Keep work in Assisted Work, narrow eligible batches or remediate integration and recovery before Bounded Change.

**Review frequency:** At initial readiness, release or recovery change, failed delivery and failed recovery rehearsal.

### CTRL-READY-CTX-001: Own essential system, domain and approach context

**Purpose:** Provide sufficient authoritative knowledge for the target work without relying on participant memory.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every proposed Assisted Work and Bounded Change work type.

**Owner:** Context owners for the product, domain, architecture, repository and procedure assets.

**Requirement:** The scope must identify and own the system context, domain context and approach context required for representative work. Assets must satisfy CTRL-CTX-001, cover intended behavior, boundaries, constraints, terminology, examples, delivery approach, verification and recovery, and expose known gaps. Conversation history and undocumented expert knowledge must not be the only source.

**Enforcement or evaluation mechanism:** A qualified person unfamiliar with the work uses the registered context to explain and plan a representative scenario, with gaps and conflicts recorded.

**Evidence:** Context inventory, owners, versions, provenance, scope, scenario result, missing knowledge and remediation.

**Failure response:** Restrict work to what current context supports, capture expert knowledge, resolve conflicts or remain in Foundation.

**Review frequency:** At initial readiness, context review triggers, target-work change and repeated clarification or context failure.

### CTRL-READY-CTX-002: Control context access, assembly and lifecycle

**Purpose:** Ensure the right current context reaches the approved identity without uncontrolled disclosure or stale guidance.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every context source and assembly used in AI-assisted work.

**Owner:** AI delivery governance owner with context and data owners.

**Requirement:** The scope must enforce context classification, approved sources and destinations, least access, version selection, applicability, conflict handling, review triggers and retirement under CTRL-CTX-001 through CTRL-CTX-004. It must demonstrate that required context can be supplied and prohibited context withheld for a representative grant.

**Enforcement or evaluation mechanism:** Readiness rehearsal assembles context for an allowed scenario and a prohibited scenario, verifies access decisions and tests stale or conflicting asset handling.

**Evidence:** Context policy, assembly records, access results, prohibited-access result, conflict and expiry test, owners and findings.

**Failure response:** Reduce accessible context, restrict the work type or state and remediate ownership, classification or technical enforcement.

**Review frequency:** At initial readiness, data or access change, context-system change and every context boundary event.

## Recommended conditions

The team should also:

- Provide one documented command or interface for each common verification activity.
- Remove interactive prompts and silent defaults from controls used in Bounded Change.
- Maintain representative nonproduction scenarios for material behavior.
- Make architecture boundaries and ownership discoverable from the repository.
- Track flaky controls, dead documentation and context review debt as delivery-system work.
- Improve error output so humans and AI can locate the failed requirement and corrective action.

These recommendations strengthen operation but do not replace any mandatory condition.

## Readiness remediation

Every gap records affected repositories and work types, current restriction, accountable owner, corrective action, observable verification and reassessment trigger. Common remediation includes versioning unmanaged artifacts, decomposing coupled changes, stabilizing controls, scripting noninteractive verification, rehearsing recovery and creating or correcting owned context assets.

## Completion check

Engineering and context readiness is complete for a proposed scope only when:

- Every mandatory condition has an evidenced outcome.
- Restrictions match missing or unreliable capabilities.
- Representative work can be traced, batched, built, verified and recovered.
- Essential context is owned, sufficient, current and access-controlled.
- Every gap has remediation ownership or an explicit risk decision.
- Evidence is available to the readiness and state-decision procedures.

The finding remains valid only for the evaluated repository, work type, environment and evidence period.
