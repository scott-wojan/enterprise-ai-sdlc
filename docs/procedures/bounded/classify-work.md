# PROC-BND-001: Classify Proposed Work

## Purpose

Decide whether proposed work is eligible for Bounded Change and assign the approved-use category, change-risk class and required treatment before an AI executor receives authority.

## Use when

A human proposes that AI create a change in a Pilot Edition repository or delivery artifact.

## Do not use when

The work is only advisory, the scope or owner is unknown, the requested use is denied, or emergency handling requires a separate process.

## Accountable owner

The human change owner.

## Participants

- Change, product and delivery owners.
- Classification owner and required security, compliance, architecture, service or data owners.
- AI may organize evidence but may not decide or lower classification.

## Preconditions

- Current AI stance, USE categories and RISK classes exist.
- The repository and team have an approved state decision.
- Proposed outcome, affected assets and requested authority are stated.

## Inputs

- Work request, intended outcome, acceptance evidence and affected scope.
- Data, dependency, environment and release impact.
- Current state, authority grant, exclusions and control profile.
- Known incidents, exceptions and repository readiness evidence.

## Actions

1. **The change owner defines the work.** State outcome, files and systems, data, users, environments, side effects, acceptance, rollback and exclusions.
2. **The classification owner assigns a USE category.** Apply USE-ADV, USE-BND, USE-EVAL or USE-DENY using the approved AI stance.
3. **Required owners assign a RISK class.** Evaluate blast radius, reversibility, sensitivity, privilege, regulatory impact, novelty, criticality and detectability.
4. **The state owner checks eligibility.** Confirm Bounded Change permits the exact work and that no higher-risk characteristic exceeds the Pilot Edition ceiling.
5. **Control owners derive treatment.** Identify required approvals, isolation, context, tools, checks, reviewers, evidence, rollback and release restrictions.
6. **The change owner records unresolved uncertainty.** Treat unknown impact or dependency as risk, never as evidence for a lower class.
7. **The classification owner issues a decision.** Approve for repository preparation, reroute to Assisted Work or human-only work, require remediation, or deny.

## Required human decisions

- Human classification and domain owners assign and approve USE and RISK.
- The change owner accepts the scope and required treatment.
- The governance owner decides exceptions or work near the authority ceiling.
- An executing AI cannot downgrade, waive or reinterpret the decision.

## Outputs

- Versioned work-classification decision.
- Exact scope, USE category, RISK class and state eligibility.
- Required control, approval, verification, recovery and release treatment.
- Reroute, remediation or denial record when ineligible.

## Verification

- Classification covers data, privilege, environment, blast radius and reversibility.
- Required domain owners approve applicable dimensions.
- Technical authority cannot exceed the classified scope.
- Any uncertainty increases treatment or stops the work.
- The executing identity cannot alter the decision record.

## Stop conditions

Stop or reroute when scope, ownership, impact, data or recovery is unclear; USE-DENY applies; RISK-C4 exceeds the pilot ceiling; required controls cannot pass; or the requested state is not approved.

## Completion criteria

- The classification and treatment are authenticated and current.
- Eligibility or reroute is explicit.
- Owners accept required gates and stop conditions.
- PROC-BND-002 receives the exact decision version.

## Measures

Record class distribution, reroutes, later reclassifications, underestimated risks, classification time and agent attempts to exceed the decision.

## Next procedures

- PROC-BND-002 for eligible work.
- An Assisted Work procedure for USE-ADV.
- Human-only or governance handling for denied or excessive-risk work.

## Applicable principles and controls

- PRIN-001 through PRIN-006, PRIN-008 and PRIN-010 through PRIN-011.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-BATCH, CTRL-EXC and CTRL-LEARN controls.
- CTRL-STATE-BND controls, CTRL-BASE-CLASS controls and applicable CTRL-BASELINE profile.

