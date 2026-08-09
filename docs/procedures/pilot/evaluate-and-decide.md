# PROC-PILOT-003: Evaluate and Decide a Pilot

## Purpose

Compare a pilot with its baseline across flow, quality, operational, security, product, experience and economic evidence and make an explicit human decision without a composite score.

## Use when

A scheduled review, charter trigger, material incident, proposed expansion or closure occurs.

## Do not use when

Scope, baseline, measure definitions or evidence lineage are not comparable, guardrail data is missing, or the result is predetermined.

## Accountable owner

The AI delivery governance owner.

## Participants

- Pilot, measurement, product, delivery and value-stream owners.
- Control, security, platform, service and workforce representatives.
- Pilot participants and independent reviewers.

## Preconditions

- ART-PILOT-001 and PROC-PILOT-001 fix scope, baseline, measures and decision cadence.
- Required artifacts and control evidence cover the review period.
- Participants can provide evidence safely.

## Inputs

- Baseline and MEAS-FLOW, MEAS-QUAL, MEAS-OPS, MEAS-SEC, MEAS-PROD, MEAS-EXP, MEAS-ECON and MEAS-USE results.
- ART-VERIFY-001, ART-RELEASE-001 and ART-FEEDBACK-001 evidence.
- Incidents, exceptions, failures, support and remediation records.
- Scope drift, missing data, confounders and dissenting evidence.

## Actions

1. **The measurement owner freezes the dataset.** Record cohort, period, definitions, lineage, exclusions and missingness.
2. **The group checks comparability.** Identify work-mix, staffing, process, reporting, seasonality and tool changes.
3. **Dimension owners interpret each result.** State baseline comparison, practical significance, confidence, limitations and decision implication without collapsing dimensions.
4. **The group applies guardrails first.** Mandatory control, serious quality, security, operational or participant-safety failures block expansion and may require restriction or stop.
5. **The product owner evaluates outcome.** Determine whether intended human-defined value is evidenced independently of usage.
6. **The economic owner evaluates total cost.** Include review, control, support, remediation and incident effort.
7. **Participants challenge the interpretation.** Preserve adverse, minority and hidden-work evidence.
8. **The governance owner considers alternatives.** Continue unchanged, continue with conditions, expand exact scope, restrict, pause or stop.
9. **The governance owner records ART-ADV-001.** Bind rationale, conditions, actions, owners, authority changes, expiry and next review.
10. **Technical owners implement and verify the decision.** Grants, controls, support and eligible work must match the record.

## Required human decisions

- Measure owners accept data fitness and interpretation limits.
- Product, control, service and workforce owners decide their consequential dimensions.
- Governance makes the final scoped continuation decision.
- AI cannot compute a dispositive score or decide advancement.

## Outputs

- Completed pilot decision scorecard.
- Dimension-level interpretations and guardrail results.
- Confounder, missing-data and claim-limitation record.
- ART-ADV-001 and verified authority state.
- Owned remediation and next review.

## Verification

- Every required dimension appears with calculation and lineage.
- No composite number determines the result.
- Usage remains diagnostic.
- Quality or control deterioration is not offset by flow or cost.
- Adverse evidence and limitations remain visible.
- Technical state matches ART-ADV-001.

## Stop conditions

Stop evaluation or default to restriction when evidence is unreliable, a mandatory guardrail fails, serious harm occurs, participants cannot report safely, scope drift prevents comparison or authority already exceeds approval.

## Completion criteria

- Evidence and interpretation are reproducible.
- Every dimension has an accountable disposition.
- Decision, conditions and rationale are durable.
- Authority changes are implemented and verified.
- Follow-up owners and dates are set.

## Measures

Track decision-action completion, evidence gaps, guardrail triggers, time to restriction, later reversals and unsupported claims corrected during review.

## Next procedures

- Approved operating procedures under continued authority.
- Failure inspection and readiness reassessment.
- Pilot standardization only after the applicable evidence and decision.

## Applicable principles and controls

- PRIN-001 through PRIN-012.
- All applicable state, baseline, control, evidence and measurement requirements.
- ART-PILOT-001, ART-FEEDBACK-001 and ART-ADV-001.

