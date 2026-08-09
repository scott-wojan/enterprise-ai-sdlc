# Pilot Edition Information Architecture

## Purpose

Provide mobile-readable entry points and a dependency-safe path through version 0.1. This is the primary navigation page for people consuming the playbook.

## Choose your entry point

### Executive sponsor or enterprise governance owner

Start with:

1. [Project charter](../charter.md)
2. [Governing principles](../principles.md)
3. [Enterprise ownership and AI stance](../foundation/ownership-and-ai-stance.md)
4. [Enterprise and value-stream accountability](../roles/enterprise-and-value-stream.md)
5. [Leadership alignment session](../facilitation/leadership-alignment.md)
6. [Enterprise charter artifact](../artifacts/enterprise-charter.md) and [template](../../templates/enterprise-charter.md)

Your first output is an approved ART-ENT-001, not a tool purchase or a broad AI mandate.

### Readiness or risk owner

Start with:

1. [Adoption-state decisions](../adoption/state-decisions.md)
2. [Organizational and team readiness](../readiness/organizational-and-team.md)
3. [Engineering and context readiness](../readiness/engineering-and-context.md)
4. [Control and measurement readiness](../readiness/control-and-measurement.md)
5. [Assess and decide readiness](../procedures/readiness/assess-and-decide.md)
6. [Readiness workshop](../facilitation/readiness-workshop.md)

Your output is ART-READY-001 with exact restrictions and remediation, not a maturity score.

### Pilot owner

Use this sequence:

1. [Establish the baseline](../procedures/pilot/establish-baseline.md)
2. [Select and prepare a pilot](../procedures/pilot/select-and-prepare.md)
3. [Start a pilot](../procedures/pilot/start-pilot.md)
4. [Onboard the team](../procedures/pilot/onboard-team.md)
5. [Operate the pilot](../procedures/pilot/operate-pilot.md)
6. [Inspect failure and friction](../procedures/pilot/inspect-and-improve.md)
7. [Evaluate and decide](../procedures/pilot/evaluate-and-decide.md)
8. [Decide and standardize](../procedures/pilot/decide-and-standardize.md)

Use the [pilot charter template](../../templates/pilot-charter.md) and [pilot decision scorecard](../../templates/pilot-decision-scorecard.md).

### Delivery team using Assisted Work

Confirm an active charter, onboarding and read-only grant, then select one procedure:

- [Explain a codebase](../procedures/assisted/explain-codebase.md)
- [Analyze requirements](../procedures/assisted/analyze-requirements.md)
- [Draft delivery documentation](../procedures/assisted/draft-documentation.md)
- [Suggest tests](../procedures/assisted/suggest-tests.md)
- [Assist code review](../procedures/assisted/assist-code-review.md)
- [Summarize an incident](../procedures/assisted/summarize-incident.md)
- [Evaluate Assisted Work](../procedures/assisted/evaluate-assisted-work.md)

See the [complete Assisted Work example](../examples/assisted-work.md).

### Delivery team using Bounded Change

Follow every gate in order:

1. [Classify work](../procedures/bounded/classify-work.md)
2. [Prepare the repository](../procedures/bounded/prepare-repository.md)
3. [Define the execution boundary](../procedures/bounded/define-execution-boundary.md)
4. [Plan and approve](../procedures/bounded/plan-and-approve.md)
5. [Execute the change](../procedures/bounded/execute-change.md)
6. [Verify the change](../procedures/bounded/verify-change.md)
7. [Review the change](../procedures/bounded/review-change.md)
8. [Complete and release](../procedures/bounded/complete-and-release.md)

At any failure, use [Respond to failed or abandoned execution](../procedures/bounded/respond-to-failure.md). See the [complete Bounded Defect Correction example](../examples/bounded-defect-correction.md).

### Platform, security or control owner

Read the [minimum control baseline](../foundation/minimum-controls.md), then implement and test:

- [Identity and authorization](../controls/identity-and-authorization.md)
- [Isolation, context and tool access](../controls/isolation-context-and-tools.md)
- [Verification](../controls/verification.md)
- [Human approval, audit and evidence](../controls/approval-audit-and-evidence.md)
- [Incidents and revocation](../controls/incidents-and-revocation.md)

The normative core defines the requirements behind those controls:

- [Human accountability](../core/accountability.md)
- [Authority and risk](../core/authority-and-risk.md)
- [Durable evidence](../core/evidence.md)
- [Control precedence](../core/control-precedence.md)
- [Small batches and reversibility](../core/small-batch-and-reversibility.md)
- [Context, exceptions and learning](../core/context-exceptions-and-learning.md)

### Measurement, audit or assurance owner

Start with:

- [Baseline, flow and quality measures](../measures/baseline-flow-quality.md)
- [Balanced outcomes](../measures/balanced-outcomes.md)
- [Pilot evaluation procedure](../procedures/pilot/evaluate-and-decide.md)
- [Traceability model](../governance/traceability.md)
- [Validation approach](../governance/validation.md)
- [Source ledger](../sources/source-ledger.md)

Use the artifact definitions under [artifacts](../artifacts/) and matching fill-in files under [templates](../../templates/).

## Canonical content layers

### Why and boundaries

[Charter](../charter.md), [principles](../principles.md), [terminology](../terminology.md), [product architecture](../product-architecture.md) and [roadmap](../roadmap.md).

### Allowed operating state

[Foundation](../adoption/foundation.md), [Assisted Work](../adoption/assisted-work.md), [Bounded Change](../adoption/bounded-change.md) and [state decisions](../adoption/state-decisions.md).

### Enterprise foundation

[Ownership and stance](../foundation/ownership-and-ai-stance.md), [use and risk classification](../foundation/use-and-risk-classification.md) and [minimum controls](../foundation/minimum-controls.md).

### People and decisions

[Enterprise and value-stream roles](../roles/enterprise-and-value-stream.md), [platform and domain roles](../roles/platform-architecture-security-product.md) and [delivery and operations rights](../roles/delivery-and-operations.md).

### Execution

Procedures are grouped under [readiness](../procedures/readiness/), [pilot](../procedures/pilot/), [Assisted Work](../procedures/assisted/) and [Bounded Change](../procedures/bounded/).

### Durable records

Artifact definitions are under [artifacts](../artifacts/); fill-in templates are under [templates](../../templates/); worked executions are under [examples](../examples/).

### Adoption support

Facilitation guides are under [facilitation](../facilitation/). Measures are under [measures](../measures/). Controls are under [controls](../controls/).

## Rules for use

- Do not skip upstream readiness, classification or authority because a downstream procedure is available.
- The more restrictive applicable state, risk, policy or control result governs.
- AI output is not human approval, deterministic proof or evidence of value.
- Every procedure's stop conditions remain mandatory.
- Platform adapters may implement these requirements later but cannot weaken them.
- Use the [v0.1 release manifest](v0.1-release-manifest.md) to verify release coverage and limitations.

