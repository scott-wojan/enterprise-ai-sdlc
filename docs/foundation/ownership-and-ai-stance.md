# Enterprise Ownership and AI Stance

## Purpose

This chapter defines the minimum enterprise ownership and communicated policy position required before AI-assisted software-delivery pilots begin.

The enterprise AI stance converts leadership intent into delivery rules. It must tell a team what is allowed, prohibited, conditional and escalated for a specific work type.

## Source basis and playbook decision

- [SRC-001](../sources/source-ledger.md#src-001-dora-ai-capabilities-model) treats a clear and communicated AI stance as an organizational capability supporting effective adoption.
- [SRC-010](../sources/source-ledger.md#src-010-github-enterprise-copilot-adoption-guidance) emphasizes specific engineering goals, internal guidance, onboarding, support, feedback and iterative rollout.

The roles and controls below are the playbook's vendor-neutral enterprise foundation. Product licensing, acceptable-use boilerplate or a general AI policy does not satisfy this chapter unless delivery teams can apply it to real work.

## Required enterprise roles

### ROLE-ENT-001: Executive sponsor

**Accountability:** Owns the business and engineering outcomes sought from the Pilot Edition, provides organizational authority and resources, resolves cross-functional barriers and decides whether the enterprise continues funding the initiative.

**Must be able to:** Stop the program, require remediation, resolve ownership disputes and answer for the enterprise-level outcome.

**Must not:** Delegate accountability to a steering committee, vendor or AI system.

### ROLE-ENT-002: AI delivery governance owner

**Accountability:** Owns the enterprise delivery stance, adoption-state decisions, AI authority framework, state restrictions, exception boundary and cross-team consistency.

**Must be able to:** Approve, restrict and revoke scoped AI delivery authority and require evidence from teams and control owners.

**Must not:** Approve decisions outside the person's delegated product, security, legal, financial, release or operational authority.

### ROLE-ENT-003: Engineering policy owner

**Accountability:** Owns the software-delivery requirements that apply to AI-assisted work, including engineering standards, required controls, repository and review expectations and policy interpretation.

**Must be able to:** Identify mandatory standards, resolve conflicts, approve eligible engineering exceptions within delegated authority and require corrective changes.

**Must not:** treat prompts or product settings as substitutes for enforceable policy.

### ROLE-ENT-004: Pilot enablement and support owner

**Accountability:** Owns role-based preparation, support routing, participant communications, feedback collection and coordination of pilot operational readiness.

**Must be able to:** Escalate policy, control, security and incident concerns to their accountable owners and pause onboarding when support capacity is inadequate.

**Must not:** approve risk, policy exceptions or state expansion unless separately assigned that authority.

One person may hold multiple roles when authorized and capable. Each enterprise decision still has one accountable human, and conflicts of interest must be handled through explicit reassignment or additional category-owner decisions.

## Minimum AI stance

The approved stance must define:

- Intended enterprise and engineering outcomes.
- Scope, audience, effective version and policy authority.
- Foundation, Assisted Work and Bounded Change meanings.
- Approved-use categories and explicitly prohibited uses.
- Data, code, context, intellectual-property and destination restrictions.
- Human accountability and consequential-decision requirements.
- AI identity, authority-grant, tool and environment requirements.
- Mandatory controls, evidence, review and human gates by state.
- Production, approval, merge, release and orchestration prohibitions for the Pilot Edition.
- Exception eligibility, prohibited exceptions, expiry and approval authority.
- Stop, incident, containment, restriction and revocation routes.
- Outcome measurement, guardrails and diagnostic-use metrics.
- Support, feedback and psychological-safety expectations.
- Review frequency and event-based review triggers.

The stance must separate mandatory requirements from recommendations and examples. It must identify where teams obtain the current authoritative version and how local instructions are checked for conflict.

## Delivery-team decision rule

For a proposed work item, a team must be able to answer from the stance and its scoped readiness decision:

- Is this work type approved?
- Which adoption state applies?
- What may AI read, draft or execute?
- Which actions remain human-only?
- Which context and tools are approved?
- Which controls and evidence are required?
- Who owns consequential decisions?
- What requires stop or escalation?

If any answer is missing, contradictory or not enforceable, the work receives the more restrictive state until the accountable owner resolves it.

## Escalation ownership

- AI-use scope, state and authority questions route to ROLE-ENT-002.
- Engineering-standard and control-interpretation questions route to ROLE-ENT-003.
- Product, architecture, security, compliance, financial, release and service questions route to the applicable CTRL-ACC-003 category owner.
- Support and onboarding problems route to ROLE-ENT-004.
- Enterprise outcome, resource and unresolved cross-functional disputes route to ROLE-ENT-001.
- Suspected incidents use the incident route immediately and do not wait for ordinary policy clarification.

No response is not approval. Work remains stopped at the affected gate.

## Normative controls

### CTRL-BASE-OWN-001: Assign and verify enterprise owners

**Purpose:** Ensure the Pilot Edition has humans with authority to govern, resource, stop and support it.

**Control type:** Preventive.

**Applicable adoption states and risks:** Enterprise Foundation and every pilot scope.

**Owner:** ROLE-ENT-001.

**Requirement:** The enterprise must assign ROLE-ENT-001 through ROLE-ENT-004 to identifiable humans and record role scope, authority source, effective period, availability, delegation and conflict handling. Vacant, disputed or ineffective ownership must restrict affected work to Foundation.

**Enforcement or evaluation mechanism:** Foundation and readiness review resolves each identity and verifies authority through representative decisions and escalation exercises.

**Evidence:** Role assignments, authority sources, effective periods, exercised decisions, escalation results and reassignment history.

**Failure response:** Do not launch or expand affected pilots. Assign effective ownership or reduce scope.

**Review frequency:** At assignment, personnel or authority change, absence, conflict and every pilot expansion.

### CTRL-BASE-OWN-002: Approve one authoritative AI delivery stance

**Purpose:** Replace fragmented guidance with one enforceable enterprise position for software delivery.

**Control type:** Preventive.

**Applicable adoption states and risks:** All Pilot Edition scopes.

**Owner:** ROLE-ENT-002 with ROLE-ENT-003 and applicable consequential-decision owners.

**Requirement:** The enterprise must approve a versioned AI delivery stance containing every minimum element in this chapter. The stance must identify its authority and relationship to legal, security, data, engineering and personnel policy. Conflicting local guidance must be corrected, restricted or explicitly subordinated within its valid scope.

**Enforcement or evaluation mechanism:** Policy review validates completeness, approvals, precedence, versioning and consistency with the normative core and Pilot Edition ceiling.

**Evidence:** Approved stance version, category-owner decisions, policy relationships, conflict review and effective date.

**Failure response:** Remain in Foundation, resolve missing authority or conflict and prevent enterprise delivery use until effective.

**Review frequency:** At initial approval and every review trigger.

### CTRL-BASE-OWN-003: Make the stance actionable at work intake

**Purpose:** Ensure delivery teams can convert enterprise policy into a state, authority and control decision.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every proposed AI-assisted work item.

**Owner:** ROLE-ENT-003 with the delivery accountable owner.

**Requirement:** Work intake must resolve every delivery-team decision-rule question from authoritative policy and the scoped readiness and state decision. Missing, ambiguous or contradictory answers must block work or select the more restrictive state. A link to policy without a resolved work decision is insufficient.

**Enforcement or evaluation mechanism:** Representative scenarios test advisory, reversible, material and prohibited work and compare team decisions with the stance.

**Evidence:** Work classification, resolved state and permissions, required controls, owners, stop conditions, scenario results and ambiguity dispositions.

**Failure response:** Stop intake, clarify or amend policy, prepare supporting guidance or restrict the work type.

**Review frequency:** At every work intake and after stance, classification or state change.

### CTRL-BASE-OWN-004: Communicate and confirm understanding

**Purpose:** Prevent approved policy from remaining inaccessible or misunderstood by participants.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** Every participant, owner and support role.

**Owner:** ROLE-ENT-004.

**Requirement:** The current stance, changes, escalation routes and role-specific implications must be communicated through approved accessible channels. Before participation, people must demonstrate understanding through scenario-based application relevant to their role. Publication or attendance alone does not demonstrate comprehension.

**Enforcement or evaluation mechanism:** Onboarding and refresh exercises require participants to classify work, identify permitted actions and invoke stop or escalation routes.

**Evidence:** Communication record, audience, stance version, scenario results, gaps, corrective preparation and participant acknowledgement.

**Failure response:** Withhold participation or supervision-free work, correct guidance and repeat the exercise.

**Review frequency:** Before participation and after material stance, role or escalation change.

### CTRL-BASE-OWN-005: Review the stance on schedule and trigger

**Purpose:** Keep enterprise policy aligned with evidence, operating conditions and failures.

**Control type:** Detective and corrective.

**Applicable adoption states and risks:** The enterprise stance and all active pilot scopes.

**Owner:** ROLE-ENT-002.

**Requirement:** The stance must have a scheduled review and event triggers including legal or policy change, new work or data class, new tool or model capability, state expansion, material incident, repeated failure, ineffective control, unexpected cost or outcome evidence. The review must retain, revise, restrict or retire affected policy and identify active work requiring reassessment.

**Enforcement or evaluation mechanism:** Policy lifecycle tracking opens reviews, prevents use of expired versions and links changes to affected ART-READY-001 and authority grants.

**Evidence:** Trigger, review participants, evidence, decision, new version, affected-scope analysis, notifications and reassessment records.

**Failure response:** Restrict affected work to the last verified scope or Foundation until review completes.

**Review frequency:** At the approved interval and every event trigger.

## Completion check

The ownership and stance foundation is complete only when:

- ROLE-ENT-001 through ROLE-ENT-004 are assigned and exercised.
- One current authoritative stance contains every minimum element.
- Delivery teams can apply it correctly to representative work.
- Escalation and no-response behavior are explicit and rehearsed.
- Communication reaches all affected roles and comprehension is evidenced.
- Scheduled and event-based review can identify and restrict affected scopes.
