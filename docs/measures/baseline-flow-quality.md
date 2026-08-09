# Baseline, Flow and Quality Measures

## Measurement rules

Use the exact cohort, work definition, data source and calculation fixed by PROC-PILOT-001. Report distributions where possible, preserve missing and excluded records, compare like work and never combine these measures into a productivity score for individuals. A favorable flow result cannot offset a failed quality or control guardrail.

## MEAS-FLOW-001: Work lead time

- **Purpose:** Detect whether accepted work reaches its defined completion point sooner.
- **Calculation:** For each eligible work item, completion timestamp minus intake timestamp. Report count, median and 85th percentile for baseline and pilot cohorts and the absolute difference.
- **Inputs:** Versioned work-item lifecycle events and cohort rules.
- **Frequency and cohort:** Weekly or per review period for comparable work types and teams.
- **Decision use:** Diagnose flow change and where waiting moved.
- **Cautions:** Scope, work mix, queue policy, incomplete work, calendar changes and selection effects can dominate. Do not treat coding-session duration as end-to-end lead time.

## MEAS-FLOW-002: Completed eligible work

- **Purpose:** Observe delivery volume without hiding work mix or quality.
- **Calculation:** Count eligible items reaching the predeclared completion state per active team-week. Report work-type and risk-class distribution, not only a total.
- **Inputs:** Work system events, active-team calendar, USE and RISK classification.
- **Frequency and cohort:** Review-period total and weekly series for the same bounded cohort.
- **Decision use:** Detect throughput shifts for investigation with lead time and quality.
- **Cautions:** Splitting, batching, staffing, demand and classification changes alter counts. Never compare individuals or unlike work.

## MEAS-QUAL-001: Change failure proportion

- **Purpose:** Detect delivered changes requiring incident, rollback, hotfix or urgent remediation.
- **Calculation:** Eligible released changes with a defined failure event divided by all eligible released changes in the period.
- **Inputs:** Release, incident, rollback and remediation records linked by candidate.
- **Frequency and cohort:** Each release and review period, segmented by risk and work type.
- **Decision use:** A material increase is a guardrail trigger and can block expansion.
- **Cautions:** Low counts require raw numerator and denominator; detection and reporting changes affect trends.

## MEAS-QUAL-002: Rework effort share

- **Purpose:** Reveal effort displaced into correcting, re-verifying or reviewing AI-assisted work.
- **Calculation:** Human and system effort on corrections, repeated checks and reopened work divided by total measured delivery effort for eligible items.
- **Inputs:** Work events, review cycles, check runs and sampled effort records.
- **Frequency and cohort:** Review period for matched work categories.
- **Decision use:** Identify hidden work and plan, context or control defects.
- **Cautions:** Effort collection is approximate and must not become worker surveillance. Publish method and missing coverage.

## MEAS-QUAL-003: Escaped defect incidence

- **Purpose:** Detect defects discovered after the defined verification or release gate.
- **Calculation:** Count eligible defects first detected after the gate per 100 eligible completions or releases, also reporting severity and raw counts.
- **Inputs:** Defect, incident, review and release lineage.
- **Frequency and cohort:** Review period and rolling trend by risk class.
- **Decision use:** Blocks expansion on serious or materially increasing escape patterns.
- **Cautions:** Reporting latency, detection investment and small denominators affect comparison. Preserve late-arriving updates.

## MEAS-QUAL-004: Verification and review correction rate

- **Purpose:** Understand whether gates are finding material problems before release.
- **Calculation:** Candidates requiring material correction after deterministic verification or human review divided by candidates entering that gate, reported separately for each gate.
- **Inputs:** ART-VERIFY-001 findings, candidate versions and dispositions.
- **Frequency and cohort:** Each candidate and review period.
- **Decision use:** Diagnose plan, execution, test and context effectiveness.
- **Cautions:** A lower rate can mean improvement or weaker detection. Interpret with escaped defects and control coverage.

