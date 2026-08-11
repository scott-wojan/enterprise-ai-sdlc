# Gate 6.1 State and Scope Model

## Status

Approved by the product owner under [Gate 6.1](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/147) on 11 August 2026.

[DEC-UX-002](decisions/0002-adoption-initiative-product-model.md) is the accepted architecture decision.

This document defines the facts the experience must keep separate, the scope each fact applies to and the authority each fact does or does not carry.

It does not prescribe database fields, navigation, layout or visual treatment.

## Governing rule

The product must not use one label such as status, readiness, maturity or progress to combine different facts.

Every displayed state must answer:

- What kind of state is this?
- What exact scope does it apply to?
- Who or what produced it?
- Does it restrict work?
- Does it grant authority?
- When does it expire or require reassessment?

## Scope levels

### Organization scope

Applies to shared enterprise policy, sponsorship, common platforms, investment and organization-wide conditions.

An organization-level restriction may affect every contained initiative only when its exact decision scope says so.

### Adoption-initiative scope

Applies to the enterprise effort's intent, ownership, shared readiness, common evidence capability, initiative-wide risk, investment and portfolio of increments.

An initiative-level decision does not automatically authorize each increment.

### Opportunity scope

Applies to a candidate problem, use case and selection decision.

Selection permits increment design. It does not authorize real AI-assisted work.

### Adoption-increment scope

Applies to one pilot, repeat pilot, expansion or other bounded change.

Most readiness, launch, operation, evaluation and restriction decisions bind here.

### Governed-practice scope

Applies to one repeatable AI-enabled practice accepted into normal operation.

It remains subject to monitoring, expiry, restriction and retirement.

### Material-decision scope

Applies to one exact proposal, evidence snapshot and effective period.

A decision's scope may include narrower team, repository, work type, data, tool, environment, SDLC activity and authority boundaries.

## State families

### Adoption posture

**Question answered:** What kind of AI participation is currently authorized for this exact scope?

**Allowed values:**

- No AI use
- Foundation
- Assisted Work
- Bounded Change
- Governed Workflow
- Selective Orchestration

**Typical scope:** Increment, governed practice or another exact authority boundary.

**Produced by:** Accountable human decision.

**Authority:** Yes, but only within the exact decision and operating boundary.

**Important rule:** Do not present the most permissive posture in an initiative as organization-wide authority.

### Journey stage

**Question answered:** What adoption decision work is this scope doing now?

**Allowed values:**

1. Understand and align
2. Assess readiness and establish baselines
3. Select opportunities
4. Design the first adoption increment
5. Prepare and run
6. Evaluate and decide
7. Expand incrementally
8. Govern and integrate
9. Operate and improve

**Typical scope:** Initiative, opportunity, increment or governed practice.

**Produced by:** Lifecycle context and accountable transition.

**Authority:** No.

**Important rule:** One initiative may contain scopes in different stages. Journey stage is not a completion score.

### Work status

**Question answered:** What is happening operationally for this scope?

**Allowed values:**

- Not assessed
- Preparing evidence
- In progress
- Paused
- Stopped
- Completed

**Typical scope:** Initiative work item, increment or governed practice.

**Produced by:** Operational record or accountable decision.

**Authority:** No. It describes work under authority recorded elsewhere.

**Important rule:** “Completed” means the approved increment ended and required records exist. It does not mean value was demonstrated.

### Response status

**Question answered:** What is the state of this information record?

**Allowed values:**

- Unanswered
- Draft
- Evidence missing
- Ready for review
- Interpreted
- Decided
- Superseded
- Withdrawn

**Typical scope:** One response within a material decision unit.

**Produced by:** User action, evidence state, interpretation and decision trace.

**Authority:** No.

**Important rule:** Every field containing a value does not make the decision complete or approved.

### Evidence status

**Question answered:** Is this evidence available and fit for its declared use?

**Typical meanings include:**

- Expected
- Missing
- Provided
- Under review
- Verified for declared use
- Rejected
- Stale
- Superseded
- Not applicable with accepted rationale

**Typical scope:** One evidence record and its declared use.

**Produced by:** Source owner, reviewer and verification record.

**Authority:** No.

**Important rule:** Verified evidence supports a decision. It does not make the decision.

### System consequence

**Question answered:** What immediate rule-based restriction or requirement applies?

**Typical outcomes:**

- Required information missing
- More restrictive interim condition applied
- Proposed action blocked
- Current action paused or restricted
- Draft remediation created
- Approval invalidated by change or expiry

**Typical scope:** The action and exact scope named by the governing rule.

**Produced by:** Versioned deterministic rule.

**Authority:** Restrictive only. It may prevent an invalid action but cannot grant approval.

**Important rule:** Show the consequence immediately after the triggering response or evidence review.

### Provisional interpretation

**Question answered:** What draft finding should accountable people review?

**Typical scope:** One material decision and evidence snapshot.

**Produced by:** Qualified human review, AI-supported analysis or both.

**Authority:** No.

**Important rule:** It cannot clear a hard stop, accept risk, choose a final evidence conclusion or approve continuation.

### Gate decision

**Question answered:** What have accountable humans authorized now?

**Allowed values:**

- Insufficient evidence
- Blocked
- Remediation required
- Approved with conditions
- Approved

**Typical scope:** One stage gate or material proposal.

**Produced by:** Authenticated accountable human decision.

**Authority:** Yes, within the exact scope, conditions and effective period.

**Important rule:** A gate decision must identify what may continue, what must stop and the next decision.

### Evidence conclusion

**Question answered:** What can the organization defensibly claim from this evidence?

**Allowed values:**

- Value not evaluated
- Value not demonstrated
- Negative net value demonstrated
- No material net improvement demonstrated
- Positive net value demonstrated
- Mixed result

**Typical scope:** One evaluation boundary and frozen evidence snapshot.

**Produced by:** Evidence review with accountable human disposition.

**Authority:** No. It informs the decision but does not change AI authority.

**Important rule:** Value not demonstrated cannot justify expansion. A local speed gain does not become a positive conclusion when the complete system is worse.

### Risk status and severity

**Question answered:** What credible condition affects this scope and how consequential is it?

**Severity:**

- Limited
- Material
- Critical
- Unknown materiality

**Typical status meanings:**

- Open
- Monitoring
- Treatment in progress
- Accepted within authority
- Escalated
- Closed
- Superseded

**Typical scope:** Exact people, systems, data, SDLC activities, outcomes and obligations affected.

**Produced by:** Risk review and accountable treatment.

**Authority:** A critical risk creates a hard stop for its affected scope. Other risk dispositions depend on accountable authority.

**Important rule:** Risks are not averaged into one readiness or maturity score.

### Hard-stop status

**Question answered:** Does a named condition prohibit or halt a named action?

**Typical values:**

- Suspected
- Active
- Under investigation
- Contained
- Pending clearance verification
- Cleared for reassessment
- Closed without proceeding
- Superseded

**Typical scope:** Named action and affected scope, from local increment to initiative-wide.

**Produced by:** Report, declaration, investigation and clearance verification.

**Authority:** Active hard stops prohibit the affected action. “Cleared for reassessment” does not restore authority.

**Important rule:** A hard stop cannot be averaged away or shown as an optional warning.

### Remediation status

**Question answered:** What is the state of required corrective work?

**Allowed values:**

- Open
- In progress
- Pending verification
- Verified
- Rejected
- Deferred by authorized decision
- Closed without proceeding

**Typical scope:** Finding, risk or hard stop and its affected action.

**Produced by:** Remediation owner and verifier.

**Authority:** No.

**Important rule:** Verified makes the scope eligible for reassessment. It does not grant restart or expansion authority.

### Approval condition status

**Question answered:** Are the conditions attached to an approval operating and current?

**Typical values:**

- Not active
- Pending implementation
- Active
- Failed
- Expired
- Superseded

**Typical scope:** Exact approved decision and condition.

**Produced by:** Condition evidence and monitoring.

**Authority:** A failed or expired mandatory condition pauses or restricts the affected work as defined by the decision.

### Leadership investment decision

**Question answered:** What will leadership fund or continue supporting?

**Typical outcomes:**

- Fund remediation
- Stop further investment
- Continue current bounded investment
- Fund one approved next increment
- Fund integration
- Retire the practice

**Typical scope:** Initiative, opportunity, increment or governed practice investment boundary.

**Produced by:** Executive sponsor or other authorized investment owner.

**Authority:** Controls investment within the leader's authority. It cannot override security, legal, release, service or other category decisions outside that authority.

### Report status

**Question answered:** What is the publication state of this generated view?

**Typical values:**

- Draft
- Under review
- Approved for stated audience
- Superseded
- Withdrawn

**Typical scope:** One audience, purpose, evidence snapshot and reporting date.

**Produced by:** Report generation and human review.

**Authority:** No. A report communicates source decisions and evidence.

## State combinations that must remain possible

### Blocked readiness

- Scope: proposed first pilot
- Journey stage: Assess readiness and establish baselines
- Adoption posture: Foundation
- Work status: Preparing evidence
- Gate decision: Blocked
- Evidence conclusion: Value not evaluated
- Proposed Bounded Change: Not approved
- Hard stops: Active
- Remediation: Open

This combination means planning and remediation may continue while real AI-assisted work may not begin.

### Remediation verified but no new decision

- Scope: proposed first pilot
- Journey stage: Assess readiness and establish baselines
- Adoption posture: Foundation
- Work status: Preparing evidence
- Gate decision: Prior blocked decision remains governing
- Hard stop: Cleared for reassessment
- Remediation: Verified
- New approval: Not recorded

This combination prevents the interface from implying that remediation restored authority.

### Completed pilot awaiting evaluation

- Scope: completed first pilot
- Journey stage: Evaluate and decide
- Adoption posture during completed period: Bounded Change
- Work status: Completed
- Gate decision: Prior operating authority expired or ended with the pilot
- Evidence conclusion: Decision pending
- Expansion authority: None

This combination prevents “completed” from being presented as successful.

### Negative evaluation and restriction

- Scope: evaluated first pilot and future use of the same opportunity
- Journey stage: Evaluate and decide
- Current adoption posture: Assisted Work
- Work status: Bounded Change stopped; investment decision pending
- Gate decision: Remediation required
- Evidence conclusion: Negative net value demonstrated
- Operating consequence: Restricted to Assisted Work
- Expansion eligibility: Not eligible
- Leadership decision: Pending

This combination preserves the distinction between evidence, category-owner restriction and leadership investment choice.

### Governed practice under review

- Scope: one governed practice
- Journey stage: Operate and improve
- Adoption posture: Governed Workflow
- Work status: In progress
- Gate decision: Prior approval active with review due
- Evidence conclusion: Current period not yet evaluated
- Risks: Open and monitored
- Expansion authority: None until a new decision

This combination demonstrates that normal operation still requires evidence and periodic decision.

## Scope propagation rules

### More restrictive rule governs overlap

When two current decisions overlap, the more restrictive applicable rule governs until an accountable human resolves the conflict.

### Local does not become global

A local risk, hard stop, posture, evaluation result or approval must remain local unless its declared affected scope includes broader work.

### Shared can affect local

An organization-wide prohibited-data decision, invalid identity control or unavailable stop authority may block every increment whose scope depends on it.

### Expansion creates a new scope

Changing team, repository, work type, data, tool, environment, SDLC activity or authority creates a new proposal and scope version. Prior evidence and approval must be reviewed for applicability.

### History is not rewritten

Reassessment, scope change and new evidence create new records. Historical decisions remain bound to the proposal and evidence snapshot that produced them.

## Presentation requirements carried into later checkpoints

Every workspace posture summary must show, with explicit scope:

- journey stage;
- current AI participation;
- work status;
- gate decision;
- evidence conclusion;
- permitted activity;
- restricted and prohibited activity;
- hard stops;
- material evidence gaps;
- remediation;
- approval conditions and expiry;
- next decision and owner.

Later visual design must not give all states equal visual weight.

For a material decision task, priority is:

1. current decision and scope;
2. immediate consequence;
3. what may continue and what must stop;
4. evidence and response;
5. remediation and next accountable decision;
6. supporting state and history.

## State decisions requiring product-owner approval

1. The named state families remain separate and visible when relevant.
2. Every state names its exact scope.
3. System consequences can restrict immediately but cannot grant authority.
4. Only accountable human decisions grant or expand authority.
5. Evidence conclusions never change authority by themselves.
6. Verified remediation means eligible for reassessment, not approved.
7. Reports communicate state but do not own it.
8. The more restrictive applicable rule governs overlapping scope.
