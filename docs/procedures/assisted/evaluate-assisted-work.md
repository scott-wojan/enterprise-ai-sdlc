# PROC-AST-007: Evaluate Assisted Work

## Purpose

Evaluate whether a bounded Assisted Work use should continue, change, restrict or stop using balanced delivery, quality, risk and participant evidence.

## Use when

The pilot reaches a scheduled review, guardrail trigger, material incident, scope change or evidence threshold.

## Do not use when

Baseline definitions changed without reconciliation, evidence lineage is inadequate, participant feedback cannot be collected safely, or the evaluator is asked to justify a predetermined expansion.

## Accountable owner

The AI delivery governance owner for the reviewed scope.

## Participants

- Pilot, delivery, product, measurement and governance owners.
- Participants and independent human reviewers.
- Security, compliance, service and workforce representatives as applicable.

## Preconditions

- PROC-PILOT-001 baseline and PROC-PILOT-002 charter identify the exact scope.
- Outcome, guardrail and diagnostic measures have fixed definitions.
- Usage, quality, control, incident, support and participant evidence is available.
- Review authority and possible decisions are explicit.

## Inputs

- Baseline and current delivery-flow measures.
- Quality, rework, escaped-defect and review evidence.
- Control failures, incidents, exceptions and near misses.
- Participant experience, workload, trust and support evidence.
- Scope, confounders, adoption level and cost evidence.

## Actions

1. **The measurement owner freezes the review dataset.** Record period, scope, definitions, lineage, exclusions and missing data.
2. **The pilot owner reconciles comparability.** Identify scope drift, process changes, seasonality, team changes and other confounders.
3. **The evaluation group reviews balanced outcomes.** Examine flow, quality, risk and experience together. Do not allow one favorable measure to cancel a failed guardrail.
4. **Control owners review adverse evidence.** Assess failures, overrides, incidents, near misses, unsupported outputs and recovery performance.
5. **Participants review the interpretation.** Validate experience evidence and surface hidden work, pressure, displacement and unsafe incentives.
6. **The group identifies causal limits.** Separate observed association from causal claims and state confidence and alternative explanations.
7. **The governance owner applies decision triggers.** Stop or restrict on failed mandatory controls, serious incidents, repeated unsafe behavior, unacceptable guardrails or invalid evidence. Continue conditionally when remediation is bounded and owned.
8. **The governance owner records the decision.** Choose continue, continue with conditions, restrict, pause or stop for the exact use, team, repository and authority.
9. **Owners implement the decision.** Revoke or change grants, controls, support, measures and procedures, then verify technical state.

## Required human decisions

- The measurement owner decides data fitness and claim limits.
- Control and domain owners decide whether failures are acceptable or remediable.
- The governance owner decides continuation, restriction or stop.
- Participants may raise safety concerns without adverse consequences.

## Outputs

- Versioned Assisted Work evaluation.
- Balanced outcome and guardrail assessment.
- Confounder, limitation and causal-claim record.
- Continue, condition, restrict, pause or stop decision.
- Owned actions and verified authority-state changes.

## Verification

- Results use the approved baseline and measure definitions.
- Flow, quality, risk and experience are all represented.
- Adverse and dissenting evidence is retained.
- Triggered restrictions match technical permissions.
- Claims do not exceed evidence quality or scope.

## Stop conditions

Stop evaluation and restrict the use when evidence is materially incomplete or manipulated, a mandatory control fails, serious harm occurs, authority exceeds approval, participants cannot report safely, or recovery and incident handling are ineffective.

## Completion criteria

- Dataset, comparisons, limitations and dispositions are reviewable.
- The governance owner authenticates an exact-scope decision.
- Actions have owners and dates.
- Permission and control state matches the decision.
- The next review or closure condition is set.

## Measures

Use the pilot's fixed flow, quality, risk and experience measures plus control effectiveness, support demand, exception frequency and decision-action completion. Never report productivity from a single proxy.

## Next procedures

- Continue applicable PROC-AST procedures under unchanged authority.
- PROC-READY-001 for reassessment.
- Pilot failure inspection for repeated system causes.
- A separate Bounded Change readiness and authorization path if expansion is proposed.

## Applicable principles and controls

- PRIN-001 through PRIN-012 as applicable.
- All applicable normative-core, readiness, state, baseline and pilot controls.
- PROC-PILOT-001 and PROC-PILOT-002.

