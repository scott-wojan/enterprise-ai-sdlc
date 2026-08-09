# Balanced Pilot Outcome Measures

## Measurement rules

Use these dimensions with MEAS-FLOW and MEAS-QUAL. Usage is diagnostic, not value. Costs include human review, support, controls, remediation and platform operation. Missing participant or adverse evidence reduces confidence and can stop a decision.

## MEAS-OPS-001: Operational disruption

- **Purpose:** Measure service impact associated with pilot work.
- **Calculation:** Count and duration of linked incidents, degradations, rollbacks and emergency actions, reported by severity and per eligible release.
- **Inputs:** ART-RELEASE-001, ART-FEEDBACK-001 and incident records.
- **Frequency and cohort:** Per event and review period for the exact pilot scope.
- **Decision use:** Serious events or adverse trend trigger restriction or stop.
- **Cautions:** Association is not causation; preserve unrelated and uncertain attribution.

## MEAS-SEC-001: Control and security failure rate

- **Purpose:** Test whether required controls operate safely under real use.
- **Calculation:** Failed or unable-to-evaluate required controls plus boundary, disclosure and revocation events divided by required control executions, with raw severity counts.
- **Inputs:** CTRL-VER, CTRL-AUD and CTRL-INC evidence.
- **Frequency and cohort:** Continuous event capture and each review period.
- **Decision use:** Mandatory control failure blocks expansion regardless of speed or usage.
- **Cautions:** Do not average high-severity events into a benign percentage; report coverage changes.

## MEAS-PROD-001: Intended outcome attainment

- **Purpose:** Assess whether work produces the human-defined user or business outcome.
- **Calculation:** Apply the product owner's predeclared observable criterion to the eligible cohort and report result, numerator, denominator and confidence limits where applicable.
- **Inputs:** ART-SPEC-001, baseline and authorized product evidence.
- **Frequency and cohort:** At the outcome's meaningful observation interval.
- **Decision use:** Determines usefulness, not merely production of output.
- **Cautions:** The exact formula is use-case specific and must be fixed before the pilot. Proxy usage cannot substitute.

## MEAS-EXP-001: Participant experience and sustainable effort

- **Purpose:** Detect cognitive load, trust, review burden, enablement gaps and pressure to use AI unsafely.
- **Calculation:** Report response distribution for predeclared survey items plus themes and participation rate; separately report support demand and review effort.
- **Inputs:** Confidential pulse survey, interviews, support events and sampled effort.
- **Frequency and cohort:** Baseline, midpoint and review for all eligible participants.
- **Decision use:** Restrict when burden, pressure or unsafe incentives are material.
- **Cautions:** Protect confidentiality, avoid individual scoring and disclose nonresponse bias.

## MEAS-ECON-001: Total pilot cost per eligible completion

- **Purpose:** Compare economic effort without ignoring control and correction cost.
- **Calculation:** Platform, model, integration, support, enablement, review, verification, remediation and incident cost divided by eligible completions, with fixed and variable costs shown separately.
- **Inputs:** Cost records, usage billing, effort samples and eligible-work counts.
- **Frequency and cohort:** Review period and cumulative pilot.
- **Decision use:** Assess sustainability after quality and risk guardrails pass.
- **Cautions:** Allocation assumptions and learning investment must be explicit; a low cost cannot offset harm.

## MEAS-USE-001: Eligible-use adoption

- **Purpose:** Diagnose whether intended participants and work can use the approved workflows.
- **Calculation:** Eligible work items using an approved AI procedure divided by all eligible work items, segmented by procedure and state.
- **Inputs:** Procedure and work records, not raw model telemetry alone.
- **Frequency and cohort:** Weekly and by review period.
- **Decision use:** Investigate discoverability, fitness and support needs.
- **Cautions:** Usage is neither success nor productivity and must not drive advancement by itself.

