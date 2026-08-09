# Validation Approach

Validation occurs at the issue, pull-request, milestone and release levels.

## Issue validation

Before work begins, confirm that the issue satisfies the definition of ready in `CONTRIBUTING.md`.

## Pull-request validation

Every pull request must be checked for:

- Scope fidelity
- Acceptance-criteria coverage
- Terminology consistency
- Normative language correctness
- Required identifiers
- Internal link integrity
- Source and decision updates
- Traceability impact
- Mobile-readable formatting
- Unresolved contradictions

## Procedure validation

Every procedure must pass the complete procedure schema and be executable without hidden author context.

## Scenario validation

The method will be pressure-tested against representative scenarios including:

- Advisory analysis
- Unit-test creation
- Bounded defect correction
- Dependency upgrade
- Material application feature
- Database-schema change
- Authentication change
- Legacy modernization
- Production incident
- Regulated business-rule change

For each scenario, the playbook must answer:

- Which adoption state permits the work?
- What may AI do?
- Which human role is accountable?
- Which artifacts are required?
- Which controls apply?
- Which stop conditions apply?
- What evidence proves completion?
- How is expansion, restriction or rollback decided?

## Release validation

A release must not be published until:

- All milestone acceptance criteria are satisfied.
- Required procedures and artifacts are complete.
- Worked examples conform to normative content.
- Known gaps and limitations are documented.
- Distribution formats are generated from canonical source.
- The release decision is recorded.

## Automation roadmap

Repository automation should eventually validate headings, required procedure sections, stable identifiers, internal links, prohibited terminology, orphaned artifacts and basic traceability coverage.
