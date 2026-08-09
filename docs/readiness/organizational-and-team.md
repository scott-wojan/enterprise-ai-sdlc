# Organizational and Team Readiness

## Purpose

This chapter defines observable conditions for organizational ownership, policy, skills, support, team willingness and psychological safety before AI-assisted delivery begins or expands.

Readiness produces a bounded decision and remediation backlog. It does not produce a composite maturity score.

## Source basis and playbook decision

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) treats AI benefit as dependent on complementary organizational capabilities and continuous improvement.
- [SRC-010](../sources/source-ledger.md#src-010-github-enterprise-copilot-adoption-guidance) emphasizes explicit goals, small pilots, onboarding, champions, support, feedback and iterative enablement.

The conditions below are the playbook's vendor-neutral decisions. Product access, enthusiasm and training attendance do not by themselves establish readiness.

## Evaluation scope and outcomes

Readiness is evaluated for an exact enterprise boundary, team, repository and proposed work type. Each condition receives one outcome:

- **Ready:** Current evidence demonstrates the condition for the proposed scope.
- **Ready with restriction:** Evidence supports a narrower scope or added condition.
- **Gap:** Evidence is absent, unreliable or shows that the condition is not operational.
- **Not applicable:** An accountable owner records why the condition does not apply.

Do not add outcomes into a score. Each gap changes eligible work, required remediation or the state decision directly.

## Mandatory readiness conditions

### CTRL-READY-ORG-001: Establish accountable organizational ownership

**Purpose:** Ensure AI-assisted delivery has humans able to authorize, stop, fund and answer for it.

**Control type:** Preventive.

**Applicable adoption states and risks:** Foundation exit, Assisted Work, Bounded Change and every organizational expansion.

**Owner:** Technology executive or delegated enterprise AI delivery owner.

**Requirement:** The scope must name authorized humans for executive sponsorship, AI delivery governance, delivery outcomes, product, architecture, security, compliance, release and service decisions as applicable. It must define funding, escalation, conflict resolution, temporary reassignment and authority to stop work. Committees and teams must not substitute for one accountable human per decision.

**Enforcement or evaluation mechanism:** Readiness review resolves identities, role mappings, organizational authority and availability against CTRL-ACC-001 through CTRL-ACC-007.

**Evidence:** Named owners, role and authority sources, decision scope, funding owner, escalation route, reassignment process and availability confirmation.

**Failure response:** Keep the affected scope in Foundation, assign missing authority or reduce the proposed work.

**Review frequency:** At initial readiness, personnel or organizational change, authority dispute and every state expansion.

### CTRL-READY-ORG-002: Approve and communicate the enterprise AI stance

**Purpose:** Give teams a clear and enforceable position on why, where and under what limits AI may be used.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every proposed AI-assisted delivery scope.

**Owner:** AI delivery governance owner with legal, security and policy owners as applicable.

**Requirement:** The organization must approve a current AI stance defining intended outcomes, permitted and prohibited use, data and context restrictions, accountable decisions, adoption states, exception boundaries, monitoring and enforcement. The stance must be accessible and understandable to affected participants, and local guidance must not contradict it.

**Enforcement or evaluation mechanism:** Readiness review checks authenticated approval, effective version, communication channels, participant comprehension and alignment with technical policy.

**Evidence:** Approved stance, source authorities, effective date, audience, communication record, comprehension check and conflicting-guidance review.

**Failure response:** Remain in Foundation, resolve conflicts and prevent tool use with enterprise context until the stance is effective.

**Review frequency:** At initial readiness and after material legal, policy, tool, risk or adoption-state change.

### CTRL-READY-ORG-003: Provide role-based preparation before participation

**Purpose:** Ensure people can perform their actual responsibilities rather than merely operate a product interface.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every participant, accountable owner, reviewer, support role and control owner.

**Owner:** Enablement accountable owner with each role's functional owner.

**Requirement:** Before participating, each person must complete role-based preparation covering permitted work, authority boundaries, context and data handling, uncertainty, human validation, controls, evidence, stop conditions, incident reporting and the person's decision responsibilities. Preparation must include an applied exercise relevant to the target state and work type.

**Enforcement or evaluation mechanism:** Access and state assignment verify role, preparation completion, applied exercise and any required qualification or supervision.

**Evidence:** Role curriculum and version, participant completion, exercise result, gaps, supervision conditions and expiry or refresh trigger.

**Failure response:** Do not assign the person to unsupervised pilot work. Provide preparation, supervision or a narrower role.

**Review frequency:** Before participation and after role, state, work type, policy, tool or material procedure change.

### CTRL-READY-ORG-004: Operate support and escalation capacity

**Purpose:** Prevent pilot participants from resolving uncertainty through unsafe improvisation.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Assisted Work and Bounded Change pilots.

**Owner:** Pilot support accountable owner.

**Requirement:** The scope must provide accessible routes for usage questions, technical failures, context and policy questions, security or privacy concerns, incidents and authority restriction. Each route must have an owner, coverage expectation, escalation destination and evidence method. Participants must know how to stop work while awaiting help.

**Enforcement or evaluation mechanism:** Pre-pilot rehearsal submits representative requests and incidents and verifies routing, ownership, containment and response recording.

**Evidence:** Support map, owners, coverage, rehearsal records, unresolved capacity gaps and participant access confirmation.

**Failure response:** Keep the pilot in Foundation, reduce participant or work scope or establish interim named support before launch.

**Review frequency:** Before pilot launch, after support failure, during pilot review and when scale or scope changes.

### CTRL-READY-TEAM-001: Demonstrate team capability for the target work

**Purpose:** Ensure the team can understand, validate and safely deliver the work without outsourcing judgment to AI.

**Control type:** Preventive.

**Applicable adoption states and risks:** Every team and proposed work type in Assisted Work or Bounded Change.

**Owner:** Team delivery accountable owner.

**Requirement:** The team must demonstrate sufficient product, domain, engineering, security, operational and review capability for the target work and state. It must be able to validate AI output, operate required controls, recognize uncertainty, recover the change and escalate consequential decisions. AI availability must not compensate for missing accountable expertise.

**Enforcement or evaluation mechanism:** Readiness review uses representative scenario execution, existing delivery evidence, role coverage and identified supervision rather than self-rating alone.

**Evidence:** Capability map, representative scenario result, role coverage, control and recovery exercise, known gaps and supervision or scope restrictions.

**Failure response:** Restrict the work type or state, add qualified support, remediate skills or select another pilot team.

**Review frequency:** At team selection, work-type or state change, personnel change and material failure.

### CTRL-READY-TEAM-002: Require informed willingness and psychological safety

**Purpose:** Enable honest reporting of AI limitations, failures and workload without coercing adoption.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every pilot team and participant.

**Owner:** Team delivery accountable owner with the people leader responsible for the team environment.

**Requirement:** Pilot participation must be informed and free from retaliation for declining unsafe use, stopping work, reporting failure, challenging AI output or questioning outcome claims. Participants must have a confidential escalation route and must not be evaluated solely through AI usage, generated output or suggestion acceptance. Material concerns must affect pilot treatment rather than being recorded without action.

**Enforcement or evaluation mechanism:** Readiness and pilot reviews collect direct participant confirmation, inspect performance and communication expectations and track concern dispositions.

**Evidence:** Participation communication, opt-out or reassignment path, escalation route, performance-measure review, anonymized concern themes and accountable dispositions.

**Failure response:** Pause or narrow the pilot, correct incentives and leadership behavior, protect reporters and reassess team eligibility.

**Review frequency:** Before pilot launch, at each feedback interval, after retaliation or safety concern and during state review.

## Recommended conditions

The following practices should support the mandatory conditions but do not replace them:

- Use experienced peer champions as a support channel, not as policy or approval authorities.
- Include paired or facilitated early work so uncertainty and review behavior are observable.
- Maintain role-specific examples and frequently asked questions from approved pilot evidence.
- Give teams protected time to learn, validate outputs and improve context and controls.
- Include nonparticipants and skeptical participants in feedback so selection bias remains visible.
- Share failures and corrections across eligible teams without exposing sensitive evidence.

Variation from a recommendation should record why the mandatory condition remains satisfied.

## Readiness remediation

Every gap must record:

- Affected scope and proposed adoption state.
- Readiness condition and missing or adverse evidence.
- Restriction that applies while the gap remains.
- One accountable remediation owner.
- Required action and observable completion evidence.
- Dependencies and reassessment trigger.
- Risk decision when remediation is intentionally not pursued.

Training completion, document publication or assignment of an owner closes a gap only when the condition's operational evidence is present.

## Completion check

Organizational and team readiness is complete for a proposed scope only when:

- Every mandatory condition has an evidenced outcome.
- Ready-with-restriction outcomes are reflected in state and authority boundaries.
- Every gap has remediation ownership or an explicit risk decision.
- Recommended-practice variations do not undermine mandatory conditions.
- The team has completed representative exercises for its target state and work type.
- The resulting readiness evidence is available to the state-decision process.

Completion is a scoped input to a decision. It is not a certification that remains valid after conditions change.
