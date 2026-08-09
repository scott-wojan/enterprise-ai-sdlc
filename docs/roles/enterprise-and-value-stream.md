# Enterprise and Value-Stream Accountability

## Purpose

Assign one accountable human role to each enterprise and value-stream decision needed to fund, govern and evaluate the Pilot Edition.

## ROLE-OPS-001: Enterprise sponsor

Accountable for why the enterprise is investing, the approved enterprise outcome boundary, funding, executive risk appetite and termination of the initiative. The sponsor does not administer tools, approve individual changes or declare technical control effectiveness.

Required decisions:

- Approve ART-ENT-001 and material changes to program scope.
- Fund or stop the program based on evidence and organizational priorities.
- Resolve cross-enterprise ownership conflicts escalated by ROLE-ENT-001.

Required evidence includes the charter, investment decision, enterprise outcomes, conditions and review date.

## ROLE-OPS-002: AI engineering policy owner

Accountable for engineering policy, approved adoption-state ceiling, normative control interpretation and policy exceptions within non-exception boundaries. This role is distinct from product administration and commercial vendor ownership.

Required decisions:

- Approve engineering-policy requirements and control classifications.
- Decide whether a proposed exception is eligible and sufficiently controlled.
- Restrict or withdraw methods that repeatedly fail or conflict with policy.

Required evidence includes policy versions, decisions, exceptions, restrictions and control-effectiveness reviews.

## ROLE-OPS-003: Value-stream owner

Accountable for selecting the delivery area, providing capacity, protecting participant reporting and accepting the effect on the broader value stream. This owner does not define product acceptance or waive engineering controls.

Required decisions:

- Nominate willing teams and representative work.
- Commit time for onboarding, review, support and measurement.
- Accept or reject value-stream operating changes after pilot evidence.

Required evidence includes candidate rationale, capacity, participant protections, operating constraints and dispositions.

## ROLE-OPS-004: Product outcome owner

Accountable for human product intent, affected-party outcomes, requirements, acceptance and whether observed results solve the intended problem. AI cannot occupy this role.

Required decisions:

- Approve ART-SPEC-001 and consequential product tradeoffs.
- Define intended outcomes and guardrails with the measurement owner.
- Accept, restrict or reject downstream product use of AI-assisted outputs.

Required evidence includes specification versions, acceptance decisions, outcome interpretation and unresolved product risks.

## Decision boundaries

- ROLE-OPS-001 owns enterprise investment, not tool operation.
- ROLE-OPS-002 owns policy interpretation, not business value or product intent.
- ROLE-OPS-003 owns value-stream participation and capacity, not technical approval.
- ROLE-OPS-004 owns product intent and acceptance, not identity, security or release control.
- ROLE-ENT-001 remains accountable for state and authority decisions and integrates these distinct inputs.

## Escalation

Unresolved product intent goes to ROLE-OPS-004. Capacity and cross-team impact go to ROLE-OPS-003. Policy and exception eligibility go to ROLE-OPS-002. Enterprise outcome or funding conflicts go to ROLE-OPS-001. Authority stays restricted while accountability is unresolved.

## Verification

Each role resolves to one named human and delegate rule; no consequential decision is shared ambiguously; role acceptance is recorded; every procedure and artifact references the applicable role; unavailable owners cause a stop or escalation.

