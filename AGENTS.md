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

## Product experience and UX context

Before changing public guidance, adoption-workspace structure, navigation, information hierarchy, content priority, interaction behavior, visual design, responsive behavior or a product prototype, also read:

1. `docs/product/product-contract.md`
2. `docs/product/information-architecture.md`
3. `docs/product/gate-5-cross-experience-review.md`
4. `docs/product/ux/README.md`
5. `docs/product/ux/design-principles.md`
6. The accepted UX decision records named by that entry point
7. The active UX issue and its Required Context

For UX and UI work:

- Treat GitHub as authoritative. Conversation history, generated images and model memory are not product decisions.
- Begin every screen from a documented representative user, situation, problem, primary job and successful outcome.
- Give every screen one primary responsibility and one dominant action.
- Keep journey management, work and evidence collection, stage-gate decisions and reporting as separate experiences.
- Do not place a complete journey dashboard around focused answer or evidence collection.
- Label progress by the exact fact counted. Never combine task, evidence, verification, decision, journey or authority progress.
- Explain the scope, cause, consequence, permitted work, prohibited work and recommended next action for blocked or aggregate state.
- Complete `docs/product/ux/templates/principle-conformance-record.md` for every UX checkpoint. A failed, unsupported or unassessed applicable UXP principle blocks advancement.
- Stop when a material product question is not answered by repository sources.
- Record material product-experience decisions using a `DEC-UX-###` record.
- Do not begin high-fidelity visual design before the governing product model, lifecycle, navigation, state scope, content hierarchy, interaction sequence, responsive reading order and structural wireframes are approved.
- Design for the complete adoption lifecycle. A pilot is one increment, not the product's permanent organizing structure.
- Mark exploratory, rejected and superseded visual references clearly.
- Validate representative desktop and mobile behavior, keyboard operation, visible focus and task comprehension.
- Do not claim that a prototype is validated without recorded task-based validation by representative humans.

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
- `UXP` for product UX principles

`DEC-UX-###` is the decision form for material UX and UI choices.

Identifiers are permanent after a released version references them. Retired identifiers must not be reused.
