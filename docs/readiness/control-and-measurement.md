# Control and Measurement Readiness

## Purpose

This chapter defines observable readiness conditions for identity, authorization, context and tool boundaries, isolation, verification, evidence, incident response, baselines and balanced outcome measurement.

A control claim requires operational evidence. A pilot outcome claim requires a pre-pilot baseline and interpretable data.

## Source basis and playbook decision

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) emphasizes complementary delivery capabilities and measurement of outcomes rather than AI adoption alone.
- [SRC-008](../sources/source-ledger.md#src-008-openssf-security-focused-assistant-instructions) places secure assistant guidance within software-security and supply-chain practices.
- [SRC-009](../sources/source-ledger.md#src-009-finos-mcp-server-security-governance) emphasizes tool approval, identity propagation, least access, logging, monitoring, integrity, isolation and incident handling.

The conditions below are the playbook's vendor-neutral decisions. Readiness is evaluated for the exact team, repository, work type, AI identity, context, tools and environment.

## Evaluation outcomes

Each condition produces Ready, Ready with restriction, Gap or Not applicable as defined in [organizational and team readiness](organizational-and-team.md#evaluation-scope-and-outcomes). Findings are not combined into a score.

Missing controls reduce permitted authority. Missing measurement capability prevents outcome claims and advancement based on those claims.

## Mandatory readiness conditions

### CTRL-READY-CTL-001: Resolve AI and human identities and authority

**Purpose:** Ensure every action and decision is attributable to an authorized identity.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Assisted Work, Bounded Change and every human gate.

**Owner:** Identity and access accountable owner with the AI delivery governance owner.

**Requirement:** The scope must demonstrate unique or otherwise reliably resolvable AI, human and automated-control identities; authenticated human decisions; least-authority grants; separation of AI from approval and authority administration; expiry; restriction and revocation. Shared credentials and product names alone must not satisfy identity.

**Enforcement or evaluation mechanism:** A readiness rehearsal activates, uses, expires and revokes a representative grant and verifies attribution across context, tool, action and decision records.

**Evidence:** Identity mappings, authority and access policy, grant, action records, human decision, expiry and revocation results and unresolved attribution gaps.

**Failure response:** Keep the scope in Foundation or restrict it to activity that requires no governed enterprise access.

**Review frequency:** At initial readiness, identity or access change, attribution failure and every state expansion.

### CTRL-READY-CTL-002: Enforce context, tool and execution boundaries

**Purpose:** Prevent narrative instructions from substituting for technical limits on access and action.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every proposed Assisted Work and Bounded Change grant.

**Owner:** AI delivery governance owner with data, tool, network, repository and environment owners.

**Requirement:** The scope must enforce approved context and data, individual tool actions, state-change permissions, environment, network destinations, downstream effects, resources and duration. Bounded Change must use isolated or approved nonproduction execution. Prohibited actions must be denied even when AI requests them or a prompt permits them.

**Enforcement or evaluation mechanism:** Readiness tests permitted and prohibited context access, tool calls, repository paths, network destinations, resource limits and environment effects for each proposed state.

**Evidence:** Boundary policy, test scenarios, allowed and denied results, monitoring events, owner dispositions and known enforcement limits.

**Failure response:** Reduce context, tools or state; establish isolation and enforcement; or deny the use case.

**Review frequency:** At initial readiness, policy or tool change, new context or environment and every boundary violation.

### CTRL-READY-CTL-003: Operate verification, evidence and approval gates

**Purpose:** Demonstrate that required controls produce trustworthy results and block unsafe progression.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every Assisted Work and Bounded Change workflow.

**Owner:** Engineering control accountable owner with evidence and approval-system owners.

**Requirement:** The scope must implement the applicable CTRL-PREC and CTRL-EVID controls, bind results and human decisions to exact versions and fail closed when required controls or evidence are unavailable. Prompt-only instructions must be labeled inferential and must not replace feasible deterministic enforcement or authenticated human approval.

**Enforcement or evaluation mechanism:** A rehearsal exercises pass, deterministic fail, inferential disagreement, missing evidence, stale approval and unable-to-evaluate outcomes and verifies the required gate status.

**Evidence:** Control plan, control definitions, scenario results, evidence package, human decisions, blocked-gate records and corrective actions.

**Failure response:** Keep affected work in Foundation or a narrower state until gates reliably block and preserve complete evidence.

**Review frequency:** At initial readiness, control or evidence-system change, gate bypass and material control failure.

### CTRL-READY-CTL-004: Operate incident containment and authority revocation

**Purpose:** Ensure unexpected AI behavior can be contained before pilot work begins.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every AI-assisted pilot scope.

**Owner:** AI incident accountable owner with the AI delivery governance owner.

**Requirement:** The scope must define detection, stop, evidence preservation, containment, notification, investigation, recovery, authority restriction and revocation for AI-related incidents. Participants and technical operators must be able to invoke the path without the AI identity's cooperation.

**Enforcement or evaluation mechanism:** A pre-pilot exercise simulates a boundary breach or fabricated evidence event and verifies access termination, containment, escalation, evidence and restoration gating.

**Evidence:** Incident plan, owners, exercise record, detection and revocation times, preserved evidence, gaps and corrective actions.

**Failure response:** Do not launch or expand the pilot. Establish effective containment and repeat the exercise.

**Review frequency:** Before pilot launch, after incident or exercise, and after identity, tool, environment or escalation change.

### CTRL-READY-MEAS-001: Establish a scoped pre-pilot baseline

**Purpose:** Make later outcome comparisons interpretable rather than anecdotal.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every Assisted Work or Bounded Change pilot making delivery outcome claims.

**Owner:** Pilot measurement accountable owner with owners of source systems.

**Requirement:** Before pilot work begins, the scope must define the value stream, team or cohort, work types, observation boundary, outcome measures, guardrails, source systems, calculation rules, data limitations and known confounders. Baseline data must cover normal variation relevant to the decision; the owner must justify sufficiency rather than apply an invented universal period.

**Enforcement or evaluation mechanism:** Measurement review reproduces each baseline from authoritative sources and checks scope alignment with the proposed pilot.

**Evidence:** Baseline definition, source and query versions, results, coverage, variation, limitations, confounders and owner approval.

**Failure response:** Collect or repair the baseline, narrow claims or run the pilot explicitly as learning without outcome or advancement claims.

**Review frequency:** Before pilot launch and after material value-stream, cohort, source or calculation change.

### CTRL-READY-MEAS-002: Define balanced outcomes and interpretation rules

**Purpose:** Prevent local speed or usage measures from concealing quality, risk, experience or cost tradeoffs.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every pilot review and state transition based on observed results.

**Owner:** Pilot measurement accountable owner with delivery, product, security, service, finance and people owners as applicable.

**Requirement:** The pilot must define intended delivery and product outcomes plus applicable quality, operational, security, experience and economic guardrails before results are observed. Measures must identify unit, population, source, calculation, direction, review rule and limitations. Usage, generated volume, active users and suggestion acceptance must be labeled diagnostic and must not establish success.

**Enforcement or evaluation mechanism:** Review validates measure definitions, source lineage, decision relevance, guardrail treatment and consistent baseline and pilot calculations.

**Evidence:** Measure register, owners, definitions, baseline linkage, guardrails, diagnostic labels, interpretation rules and decision mapping.

**Failure response:** Do not claim outcome, continue only as bounded learning, repair measurement or restrict the pilot when guardrails cannot be observed.

**Review frequency:** At pilot design, before analysis and after source, definition, scope or decision change.

### CTRL-READY-MEAS-003: Demonstrate measurement reliability and access

**Purpose:** Ensure decision-makers can obtain, understand and challenge the data used for pilot claims.

**Control type:** Detective.

**Applicable adoption states and risks:** Every baseline, pilot review and transition decision.

**Owner:** Pilot measurement accountable owner.

**Requirement:** Required data must be available at the scoped level, attributable to stable sources, reproducible, access-controlled and timely for the decision. Missingness, selection effects, privacy limits, concurrent changes and other confounders must remain visible. AI-generated analysis must be independently reproducible or reviewed against source data.

**Enforcement or evaluation mechanism:** A second qualified reviewer reproduces a representative measure and traces it from source through calculation to reported result.

**Evidence:** Source lineage, access control, reproduction result, data-quality findings, confounders, corrections and reviewer disposition.

**Failure response:** Mark the measure unreliable, narrow claims, repair the data path or make the more restrictive state decision.

**Review frequency:** At baseline approval, each formal pilot review, material data change and disputed result.

## Recommended conditions

The organization should automate recurring boundary, revocation, evidence and measurement checks where practical. It should also maintain separate operational dashboards for control health and outcome analysis so high usage does not obscure failed controls.

Recommended automation does not replace accountable review of control coverage, data limitations or consequential decisions.

## Readiness remediation

Every gap records the affected state and work type, current authority restriction, owner, corrective action, observable completion evidence and reassessment trigger. A purchased product feature or written policy closes a gap only after the required operational test passes.

## Completion check

Control and measurement readiness is complete for a proposed scope only when:

- Every mandatory condition has an evidenced outcome.
- Technical tests demonstrate both permitted and prohibited behavior.
- Verification, evidence and human gates fail closed.
- Incident containment and revocation have been exercised.
- A reproducible scoped baseline exists before outcome claims.
- Balanced measures and interpretation rules precede pilot results.
- Gaps directly restrict authority or have owned remediation.

Completion supplies evidence to the readiness decision. It does not itself authorize a pilot or state transition.
