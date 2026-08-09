# Repository Working Instructions

These instructions apply to every human or AI contributor.

## Required context

Before changing normative content, read:

1. `docs/charter.md`
2. `docs/principles.md`
3. `docs/terminology.md`
4. `docs/decisions/README.md`
5. The issue governing the work
6. Any files named in the issue's Required Context section

Do not use conversation memory as an authoritative source when repository content exists.

## Scope discipline

- Work only within the active issue's stated scope.
- Treat exclusions as requirements.
- Capture newly discovered work as a proposed issue. Do not silently expand the active change.
- Do not introduce platform-specific product instructions into the normative core.
- Do not assume increased autonomy is the goal for every organization or workflow.

## Content requirements

- Use plain, direct language.
- Do not use em dashes.
- Distinguish mandatory requirements from recommendations.
- Do not claim that prompts or probabilistic controls guarantee behavior.
- Every mandatory requirement must be verifiable.
- Every procedure must define ownership, inputs, actions, outputs, verification, stop conditions and completion criteria.
- Usage, generated code volume and suggestion acceptance are diagnostic measures, not business outcomes.

## Evidence requirements

- Cite primary or authoritative sources for externally derived claims.
- Record reusable sources in `docs/sources/source-ledger.md`.
- Record material methodology decisions in `docs/decisions/README.md` or a dedicated decision record.
- Do not convert vendor claims into normative requirements without independent reasoning and explicit attribution.

## Change workflow

1. Confirm the issue is ready and its dependencies are resolved.
2. Load only the governing and issue-specific context required.
3. Make the smallest coherent change that satisfies the acceptance criteria.
4. Run the validation defined in `docs/governance/validation.md`.
5. Check terminology, identifiers, links and traceability.
6. Describe decisions, evidence and unresolved questions in the pull request.

## Stable identifiers

Use these prefixes:

- `PRIN` for principles
- `CTRL` for controls
- `PROC` for procedures
- `ART` for artifacts
- `ROLE` for roles
- `MEAS` for measures
- `DEC` for decisions
- `EX` for worked examples

Identifiers are permanent after a released version references them. Retired identifiers must not be reused.
