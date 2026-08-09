# Bounded Change Adoption State

## Purpose

Bounded Change permits an AI identity to create a change inside an explicitly approved repository, branch, work scope and isolated or nonproduction execution boundary. The change remains subject to an approved plan, deterministic verification, accountable human review and human-controlled merge, release and production processes.

Bounded Change is the maximum execution state in the Pilot Edition. It does not grant production authority or permit AI to approve or merge its own work.

## Source basis and playbook decision

The required sources provide four complementary patterns:

- [SRC-002](../sources/source-ledger.md#src-002-aws-ai-driven-development-life-cycle) uses plans, clarification, implementation, persistent artifacts and human validation across delivery phases.
- [SRC-003](../sources/source-ledger.md#src-003-aws-adaptive-ai-dlc-workflows) adapts workflow rigor to context while recording plans, approvals, execution and final review.
- [SRC-004](../sources/source-ledger.md#src-004-github-spec-kit) separates governing principles, specification, plan, tasks, analysis and implementation artifacts.
- [SRC-007](../sources/source-ledger.md#src-007-engineering-the-agentic-sdlc) uses explicit context, isolated execution, verification gates, scenario testing and deterministic backpressure.

The controls below are the playbook's normative decisions. They define a vendor-neutral execution boundary and retain all consequential decisions and downstream authority with humans.

## Eligibility

A change is eligible only when:

- Assisted Work is approved for the exact team, repository and work type.
- The proposed batch satisfies CTRL-BATCH-001 through CTRL-BATCH-006.
- The work is reversible or recoverable and its recovery evidence is current.
- Product intent, acceptance criteria, scope and exclusions are explicit.
- Required context assets are owned, current and available.
- The AI identity has a proposed bounded-repository-change grant covering every authority dimension.
- Technical controls enforce repository, branch, path, environment, tool, network, resource and downstream-effect limits.
- Deterministic verification can evaluate the exact resulting version.
- Qualified human reviewers and consequential-decision owners are available.
- Incident, stop, containment, rollback, restriction and revocation paths are operational.

Irreversible actions, uncontrolled blast radius, unavailable verification, production access and unresolved consequential decisions are ineligible.

## Eligible changes

Bounded Change may include one approved batch such as:

- A low-risk defect correction with reproducible acceptance criteria.
- Tests, test infrastructure or documentation changed with related code.
- A dependency update with bounded compatibility, security and recovery checks.
- A small feature or refactoring whose behavior, interfaces and blast radius are explicit.
- Configuration or infrastructure code validated only in an isolated or approved nonproduction environment.

The work name does not determine eligibility. A small textual diff can be ineligible because of security, data, regulatory, operational or downstream impact.

## Execution boundary

The grant must identify and technically enforce:

- One AI identity and accountable owner.
- One work identifier, objective and approved batch.
- One repository and designated unprotected working branch.
- Included and excluded files, components and interfaces.
- Approved context, data sources and destinations.
- Approved noninteractive tools and individual actions.
- State that may be created or modified and state that must not be touched.
- An isolated or approved nonproduction execution environment.
- Network destinations and downstream effects, normally none unless explicitly required.
- Time, compute, storage, concurrency and cost limits.
- Required controls, human gates, expiry and stop conditions.

Unlisted access or action is prohibited. Tool availability and credentials do not expand the grant.

## Required lifecycle

### Classify and authorize

The accountable owner confirms state eligibility, consequential decisions, risk, reversibility, batch boundaries and the exact authority grant.

### Prepare context and plan

The context assembly, specification, acceptance criteria and control plan are versioned. AI may propose a plan and tasks. Applicable humans resolve ambiguity and approve the exact plan before execution.

### Execute inside the boundary

AI may modify only the approved branch and scope and may run only approved tools. Material actions are recorded. Boundary violation, unexpected effect or plan divergence stops execution.

### Verify the exact result

All feasible deterministic checks run against the exact resulting commit, artifact or state. Applicable inferential review supplements them. AI assertions do not satisfy verification.

### Conduct human review

Qualified humans review intent, diff, architecture, security, verification, recovery and unresolved findings within their authority. AI cannot satisfy this gate or approve its output.

### Hand off to human-controlled delivery

Only an authorized human may approve and merge the change or pass it into existing release processes. Bounded Change grants no release, deployment, production or operational authority.

## Required evidence

The evidence package must include:

- State decision, work classification and accountable owners.
- Specification, acceptance criteria and approved plan versions.
- Risk, reversibility, blast-radius and recovery evidence.
- Complete authority grant and technical boundary tests.
- Context assembly and provenance.
- Material action, tool and resource records.
- Exact change version and diff or state transition.
- Complete deterministic and inferential control results.
- Human review findings, decisions and unresolved-item dispositions.
- Stop, rollback, incident, restriction or revocation records.
- Human-controlled merge or closure disposition.

## Stop, rollback and revocation conditions

Execution must stop when:

- Identity, grant, plan, scope or required context cannot be resolved.
- AI accesses or attempts an unlisted file, tool, environment, network destination or downstream action.
- Work diverges materially from the approved plan or batch.
- A consequential decision or new dependency appears without an owner and disposition.
- A required control fails or cannot evaluate the exact result.
- Actual blast radius or irreversibility exceeds the treatment.
- Sensitive information reaches an unapproved location.
- Evidence capture fails or authoritative action records disagree.
- Resource or effective-period limits are reached.
- AI attempts approval, merge, release, deployment, production access or authority expansion.

Rollback or recovery begins when the predeclared trigger is met and recovery is safer than preserving the current state for investigation. Authority is restricted or revoked immediately for boundary breaches, unexplained state changes, fabricated evidence, production-access attempts or loss of containment.

## Normative controls

### CTRL-STATE-BND-001: Assign Bounded Change to one eligible batch

**Purpose:** Prevent execution authority from becoming a general capability attached to a person, tool or repository.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every proposed Bounded Change batch.

**Owner:** AI delivery governance owner.

**Requirement:** Bounded Change must be approved for one exact team, repository, work type, batch, AI identity and effective period. The eligibility criteria and every applicable consequential decision owner must be satisfied before a bounded-repository-change grant activates.

**Enforcement or evaluation mechanism:** State and grant validation bind execution to the approved identifiers and reject missing eligibility evidence or reused approvals.

**Evidence:** State decision, batch, classification, owners, eligibility results, authority-grant version and effective period.

**Failure response:** Keep work in Assisted Work, reduce scope or deny the change.

**Review frequency:** At every proposed batch and whenever scope, risk, identity, environment or eligibility changes.

### CTRL-STATE-BND-002: Enforce the complete execution boundary

**Purpose:** Limit AI action and maximum credible blast radius using technical controls.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every active Bounded Change grant.

**Owner:** AI delivery governance owner with the repository and environment owners.

**Requirement:** The repository, branch, paths, context, tools, actions, state, environment, network, resources, downstream effects, controls and period must be technically bounded under CTRL-AUTH-002. AI must not receive credentials or permissions for approval, merge, release, production or authority administration.

**Enforcement or evaluation mechanism:** Identity, permission, isolation, path, tool, network and resource policies enforce and reconcile actual action with the grant.

**Evidence:** Grant, technical-policy versions, boundary tests, material action records, resource records and violation events.

**Failure response:** Stop execution, contain effects and restrict or revoke authority under CTRL-AUTH-008.

**Review frequency:** At grant activation, every session, policy change and detected boundary event.

### CTRL-STATE-BND-003: Require an approved plan before execution

**Purpose:** Prevent execution from beginning with unresolved intent, scope, decisions or control requirements.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every Bounded Change batch.

**Owner:** Delivery accountable owner with applicable consequential-decision owners.

**Requirement:** Before AI modifies state, accountable humans must approve the exact specification, acceptance criteria, batch, plan, tasks, context assembly, control plan and recovery treatment. AI may propose these artifacts but must not approve them. Material plan change requires a new decision before continued execution.

**Enforcement or evaluation mechanism:** The execution gate binds the grant to immutable or captured artifact versions and blocks work when approvals are absent or stale.

**Evidence:** Approved artifact versions, decision records, unresolved findings, conditions and grant linkage.

**Failure response:** Keep execution disabled, resolve ambiguity or return the work to Assisted Work.

**Review frequency:** Before execution and after every material plan, scope, context, control or recovery change.

### CTRL-STATE-BND-004: Verify the exact change deterministically

**Purpose:** Take completion judgment away from the AI executor wherever reproducible checks are feasible.

**Control type:** Detective.

**Applicable adoption states and risks:** Every executed Bounded Change batch.

**Owner:** Owner of each applicable requirement or control.

**Requirement:** All feasible deterministic controls must evaluate the exact resulting version, including applicable build, test, policy, security, structural and scenario checks. Inferential review may supplement but must not override a deterministic failure. AI statements or locally summarized results do not satisfy the gate.

**Enforcement or evaluation mechanism:** Verification obtains authoritative results under CTRL-PREC-001 through CTRL-PREC-006 and binds them to the exact commit, artifact or state.

**Evidence:** Change identifier, control definitions, complete results, input versions, findings and dispositions.

**Failure response:** Keep the change unapproved, remediate within the grant if permitted or stop and return to planning. Roll back temporary state when triggered.

**Review frequency:** After every material change and before human review, approval or downstream use.

### CTRL-STATE-BND-005: Require independent human review and handoff

**Purpose:** Preserve human accountability for accepting AI-created changes and every downstream effect.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every Bounded Change result.

**Owner:** Release accountable owner for merge disposition, with other decision-category owners as applicable.

**Requirement:** Qualified humans must review the exact change, intent, control results, risk, recovery and unresolved findings. AI must not approve or merge its change or satisfy any human gate. Only a human-controlled process may merge, release, deploy or operate the result, using separate authority outside the AI grant.

**Enforcement or evaluation mechanism:** Branch and workflow controls reject AI approval and merge identities and require authenticated human decisions against exact versions.

**Evidence:** Reviewer identities, findings, category decisions, exact-version approval or rejection and human-controlled handoff record.

**Failure response:** Keep the change unmerged and outside downstream delivery. Obtain qualified review, remediate or close the work.

**Review frequency:** For every change version submitted for acceptance and whenever accepted evidence changes.

### CTRL-STATE-BND-006: Stop, recover and revoke on unsafe execution

**Purpose:** Contain unexpected behavior before it expands beyond the approved batch.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every active or recently completed Bounded Change execution.

**Owner:** Delivery accountable owner until the applicable governance, repository, security, service or incident owner accepts escalation.

**Requirement:** A listed stop condition must halt further AI action. The owner must preserve evidence, contain effects, invoke the approved recovery treatment when required and restrict or revoke authority. Resumption requires resolved containment, repeated verification and a new or amended human-approved grant.

**Enforcement or evaluation mechanism:** Runtime, repository and workflow controls expose stop status, terminate access and block further action until restoration gates succeed.

**Evidence:** Trigger, affected scope, stopped actions, containment, recovery results, authority action, investigation and resumption or closure decision.

**Failure response:** Keep authority revoked, escalate the incident and return the affected scope to Assisted Work or Foundation when safe restoration cannot be demonstrated.

**Review frequency:** At every stop, rollback, boundary violation, incident and restoration decision.

## Bounded Change completion check

A Bounded Change batch is complete only when:

- The state decision, batch and authority grant match the exact work.
- Actual action remained inside every technical boundary.
- The approved plan and context governed execution.
- Required controls evaluated the exact resulting version.
- Qualified humans reviewed and dispositioned all material findings.
- AI performed no approval, merge, release, production or authority action.
- Recovery readiness remains valid or invoked recovery is verified.
- The evidence package records human-controlled merge or closure.

Completion does not authorize production activity, broader execution or the next batch.
