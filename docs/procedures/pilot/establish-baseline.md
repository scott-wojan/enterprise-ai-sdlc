# PROC-PILOT-001: Establish the Pre-Pilot Delivery Baseline

## Purpose

Create a reproducible description of delivery performance, quality, operations, security, experience and cost before Pilot Edition work begins.

## Use when

Designing an Assisted Work or Bounded Change pilot that will make outcome, guardrail or advancement decisions.

## Do not use when

The value stream, cohort, work types or intended outcomes are unknown, or source access and privacy authority are unresolved.

## Accountable owner

The pilot measurement accountable owner.

## Participants

Delivery, product, engineering, service, security, finance and people-data owners; pilot team representatives; qualified data analysts.

## Preconditions

- ART-READY-001 identifies the proposed scope and state.
- Intended outcomes, risks and guardrails are named.
- Source owners authorize access and use.
- CTRL-READY-MEAS-001 through CTRL-READY-MEAS-003 are operational.

## Inputs

- Value-stream and cohort definitions.
- Proposed work types and classification.
- Delivery, quality, operational, security, product, experience and cost sources.
- Existing measure definitions and known incidents or organizational changes.
- Privacy, retention and access requirements.

## Actions

1. **The measurement owner fixes the comparison scope.** Record value stream, team or cohort, repositories, work types, systems, time boundary and exclusions.
2. **Outcome owners define decisions first.** Name intended outcomes, guardrails and the decisions each measure can support. Label usage measures diagnostic.
3. **Source owners register data.** Record source, owner, population, unit, calculation, update behavior, access, retention and known limitations.
4. **The analyst checks comparability.** Identify seasonality, work-mix change, incidents, staffing change, simultaneous initiatives, missingness and selection effects.
5. **The analyst calculates the baseline reproducibly.** Preserve source and query or calculation versions, raw or governed references and results. Use a period sufficient to represent relevant normal variation and record the rationale rather than applying a universal duration.
6. **Qualified reviewers reproduce a sample.** Independently trace at least one decision-relevant measure from source through calculation to report.
7. **Participants review experience and cost.** Capture participant experience through an approved confidential method and include tool, review, remediation, enablement and operating cost.
8. **The measurement owner approves the baseline.** Record usable measures, unreliable measures, limitations, confounders, interpretation rules and restrictions on later claims.
9. **The artifact owner links the baseline to the pilot record.** Notify decision owners of unavailable guardrails or evidence gaps before launch.

## Required human decisions

- Source owners authorize data use.
- Outcome owners approve definitions and guardrails in their authority.
- The measurement owner approves scope, sufficiency, limitations and permitted interpretation.
- Privacy, security or compliance owners decide applicable sensitive-data handling.

AI may assist analysis but must not invent missing data, remove inconvenient results or approve baseline sufficiency.

## Outputs

- Versioned baseline definition and results.
- Measure register with owners, calculations and decision mappings.
- Data lineage and reproduction evidence.
- Limitations, confounders and missing-data record.
- Experience and economic baseline.
- Restrictions on claims and owned remediation.

## Verification

- Scope matches the proposed pilot and ART-READY-001.
- Every measure has an owner, unit, population, source, calculation and decision use.
- Baseline results can be reproduced from authorized sources.
- Normal variation and known confounders are visible.
- Guardrails cover applicable quality, operational and security risk.
- Usage, generated volume and suggestion acceptance are diagnostic only.
- Missing data changes claims, pilot scope or remediation.

## Stop conditions

Stop when source authority, privacy, scope, measure definition, lineage or reproducibility is unresolved; when a required guardrail cannot be observed; or when participants are pressured to disclose confidential individual data outside approved use.

## Completion criteria

- The measurement owner approves an exact baseline version.
- Required guardrails and outcome measures are reproducible or explicitly unavailable.
- Limitations and confounders have decision rules.
- The pilot record links the baseline and current restrictions.
- Baseline collection precedes pilot outcome claims.

## Measures

Track baseline-source coverage, reproduction failures, unresolved measure gaps, data correction frequency and time to produce a review-ready result. These measure procedure health, not AI value.

## Next procedures

- PROC-PILOT-002 pilot selection and preparation.
- Pilot execution procedures for the approved state.
- Pilot outcome and advancement review procedures.
- Repeat PROC-PILOT-001 when scope or calculation comparability materially changes.

## Applicable principles and controls

- PRIN-001, PRIN-004, PRIN-007, PRIN-010 and PRIN-012.
- CTRL-EVID-001 through CTRL-EVID-008.
- CTRL-READY-MEAS-001 through CTRL-READY-MEAS-003.
- CTRL-STATE-DEC-001 through CTRL-STATE-DEC-005.
- CTRL-STATE-AST-004 and applicable state controls.
- CTRL-BASELINE-001 through CTRL-BASELINE-005.
