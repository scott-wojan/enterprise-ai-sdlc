# Product Architecture

## Product model

The playbook is organized as one normative core with supporting operational components. Platform-specific adapters may be added later as separate products. They must not alter the core requirements.

## Component 1: Orientation

Explains the purpose, audience, limits, adoption philosophy and how to use the playbook.

## Component 2: Normative core

Defines principles, accountability, autonomy boundaries, evidence requirements, risk treatment, control precedence, reversibility and exception rules.

## Component 3: Adoption system

Defines five operating states:

1. Foundation
2. Assisted work
3. Bounded change
4. Governed workflow
5. Selective orchestration

These are permitted operating conditions, not a maturity contest. Progression is optional and can differ by team, repository and work type.

## Component 4: Readiness system

Evaluates organizational, engineering, context, control, measurement and team readiness. Its output is a decision about eligible use cases, missing capabilities and required remediation, not a vanity score.

## Component 5: Delivery procedures

Provides executable, role-based procedures for common work. Every procedure follows the schema in `docs/governance/writing-standard.md`.

## Component 6: Control system

Defines minimum controls for identity, authorization, context, isolation, tools, deterministic verification, inferential review, human approval, evidence, audit, incidents and revocation.

## Component 7: Artifact system

Defines the smallest durable set of specifications, plans, decisions, approvals, verification evidence, release evidence and production feedback required at each operating state.

## Component 8: Measurement system

Defines balanced measures for flow, quality, operations, security, governance, product outcomes, developer experience and economics.

## Component 9: Adoption and facilitation

Provides pilot selection, baseline, training, working-session, review and advancement procedures.

## Component 10: Worked examples

Demonstrates how procedures, controls and artifacts work together across representative enterprise scenarios.

## Component 11: Publication system

Publishes canonical Markdown as a responsive documentation site and, later, generated PDF and editable template formats. Presentation formats are outputs, not independent sources.

## Traceability model

Normative content uses stable identifiers. Relationships must be explicit:

- Principles govern controls and procedures.
- Procedures consume and produce artifacts.
- Controls apply to adoption states and procedures.
- Roles own decisions and outputs.
- Measures support continuation, expansion, restriction and revocation decisions.
- Worked examples validate that the system can be executed coherently.

## Completion standard

The product is complete only when its defined scenarios can be executed from repository content alone and every mandatory requirement has an owner, verification method and traceable purpose.
