# Assess Readiness

## Why am I here?

Decide whether this specific team and use case may start, what restrictions apply and what must be fixed first.

**Owner:** Readiness decision owner named by the sponsor  
**Participants:** Pilot lead, engineering manager, team representatives, platform, security or risk, verification and measurement owners  
**Time:** 90 minutes plus remediation  
**Bring:** Selected team and use case, current delivery evidence, repository instructions, access design and baseline data  
**Leave with:** Proceed, proceed with restrictions, remediate and reassess, or do not proceed

## Examine six areas

### Organization

Are ownership, policy, funding, support, escalation and final decision rights real and available?

### Engineering

Can the team reproduce builds and tests, review changes, recover safely and use the ordinary release path?

### Context

Are instructions, architecture, requirements, constraints and sources accurate enough for the proposed work?

### Controls

Can identity, least access, isolation, tool restrictions, verification, approval, logging, revocation and incident response be enforced?

### Measurement

Is there a trustworthy baseline and a practical way to observe flow, quality, operations, security, product outcomes, team experience and cost?

### Team

Does the team understand the pilot, have capacity, know how to challenge output and feel safe reporting failure or stopping?

## Decide

For every material gap, record:

- the affected use case or boundary;
- the required restriction or remediation;
- the owner and due date;
- the evidence needed to close it;
- who will reassess it.

Do not average gaps into a score. The most restrictive material result governs. Readiness for Assisted Work does not imply readiness for Bounded Change.

## Stop here if

A material gap has no owner, no enforceable restriction or no way to verify remediation. Do not use pilot operation to discover whether a missing critical control works.

Record the decision in the [Pilot Workbook](../reference/pilot-workbook.md). Use the canonical [readiness procedure](../../procedures/readiness/assess-and-decide.md) when completing the evidence.

**Previous:** [Choose the team and use case](choose-team-and-use-case.md)  
**Next:** [Agree the boundaries and guardrails](agree-boundaries.md)
