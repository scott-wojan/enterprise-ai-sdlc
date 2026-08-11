# Product UX Design Principles

## Status

Proposed under DEC-UX-005 for Gate 6.4 and all later product-design work.

## Purpose

These principles turn human-centered design expectations into mandatory product rules, review evidence and blocking conditions.

They apply to public guidance, the adoption workspace, decision experiences, evidence collection, reports, responsive layouts, prototypes and production interfaces.

They are not visual-style preferences. They govern what problem a screen solves, what information it prioritizes, how it behaves, how it communicates state and how its usefulness is validated.

## Source and project authority

The sixteen principles are adapted from [UXPin, UX Design Principles: The 16 Rules Every Product Team Must Follow in 2026](https://www.uxpin.com/studio/blog/ux-design-principles/).

The source informs this project but does not govern it. This product does not adopt UXPin tooling, vendor claims or marketing assertions. Product-specific decisions, accepted UX records, evidence from representative users and applicable accessibility standards govern implementation.

## How these principles are enforced

Every UX issue, wireframe checkpoint, visual direction, prototype and production experience must:

1. identify the user, situation, problem, primary task and successful outcome before design begins;
2. identify which screen responsibility owns the experience;
3. preserve the separation between journey management, work and evidence collection, stage-gate decisions and reporting;
4. complete a [Product UX Principle Conformance Record](templates/principle-conformance-record.md);
5. record evidence for every applicable principle;
6. treat a failed mandatory principle or unassessed applicable principle as revision required;
7. validate important flows with representative humans before claiming that the product is usable or validated;
8. record material exceptions or changes through a DEC-UX decision.

Reviewing a checklist is not evidence that the design works. The conformance record must point to the artifact, interaction, test or observed result that supports each conclusion.

## Product-specific separation contract

The interface must preserve four different experiences.

### Journey management

Journey management explains where an exact adoption scope is, what is currently permitted, what is blocked, what decision is next and who owns it.

It belongs primarily in initiative and adoption-increment overviews.

### Work and evidence collection

Work and evidence collection helps a person answer one question, complete one assessment, perform one corrective action or supply one piece of evidence.

It must remain focused on that work. Journey context may appear at low visual emphasis, but the complete journey state must not compete with the task.

### Stage-gate decisions

A stage-gate decision combines relevant responses, verified evidence, unresolved conditions and consequences for an accountable human decision.

It must not be represented as form completion or automatic progression.

### Reporting

Reporting presents derived decisions, evidence, limitations, outcomes and recommendations to a named audience.

It must not become another source of decision, evidence or authority state.

### Mandatory boundaries

- Answering a question does not advance the journey.
- Saving a response does not interpret it.
- Supplying evidence does not verify it.
- Verifying evidence does not make the accountable decision.
- Completing assigned work does not grant authority.
- Remediation does not restore authority until a new accountable decision is recorded.
- A report does not own or change source state.
- A progress indicator must name the exact thing being counted.
- Aggregate state must explain its causes, affected scope, permitted work, prohibited work and recommended next action.

## UXP-001: Start with the human and the job they need to complete

### Rule

Design decisions must begin with a validated user situation, need and task rather than an internal data model, governance structure or preferred layout.

### Application to this product

- Public Home begins with the adoption pressure and organizational problem the reader is facing.
- A contributor sees assigned work and sufficient guidance to complete it.
- A pilot lead sees current adoption scope, blockers, ownership and next action.
- A reviewer sees evidence requiring verification and the declared use it supports.
- An accountable decision-maker sees a decision package and consequences.
- Leadership sees complete-system outcomes, cost, restrictions and investment choices.

### Required proof

- Named user and situation
- Primary job and successful outcome
- Evidence that the design was reviewed or tested with a representative role
- Evidence that edge cases did not displace the primary job

## UXP-002: Keep meaning and behavior consistent

### Rule

The same concept, status, component and action must retain the same meaning and behavior across public guidance, workspace views, screen sizes and roles.

### Application to this product

- Save draft always saves without interpretation or approval.
- Verify evidence always records verification for a declared use without making the gate decision.
- Blocked always identifies the exact blocked action and scope.
- Evidence, authority, risk and investment states never share one ambiguous status.
- Mobile and desktop preserve the same semantic order and consequences.

### Required proof

- Terminology check
- Action-effect comparison across representative views
- Desktop and mobile comparison
- Documented exception for any intentional difference

## UXP-003: Design for scanning before detailed reading

### Rule

A person must be able to scan a screen and identify its purpose, current task, important consequence and next action before reading supporting detail.

### Application to this product

- Headings state the content that follows.
- Short summaries precede detailed evidence or method.
- Important consequences use direct labels rather than clever language.
- Long guidance is divided into meaningful sections.
- Leadership outputs expose the decision, recommendation, scope and result before source detail.

### Required proof

- Five-second scan review
- Heading-outline review
- Mobile scan review
- Confirmation that primary meaning remains without opening disclosures

## UXP-004: Remove unnecessary interpretation and choice

### Rule

The interface must not make people infer what a control does, which state a status describes, why work is blocked or what they should do next.

### Application to this product

- Every screen has one primary job and one dominant action.
- Labels describe actual effects, such as Save draft, Submit for verification or Request readiness review.
- Generic Next and Continue actions are prohibited for material decision work.
- A blocked status explains whether the current response caused it, whether earlier blockers remain and what can proceed safely.
- The interface does not ask the user to decode identifiers, control names or methodology language.

### Required proof

- Comprehension test for purpose, status and next action
- Control-label review
- Causality review for every blocked or restricted state
- Count and justification of competing primary actions

## UXP-005: Use visual structure to communicate relationships

### Rule

Proximity, alignment, contrast and repetition must make related content appear related and separate content with different meaning or ownership.

### Application to this product

- A response and its immediate interpretation remain connected.
- Journey state is visually separated from task input.
- What may continue and what must stop are related to the governing consequence.
- Supporting trace, methodology and identifiers have lower emphasis than current work.
- Repeated decision, evidence, remediation and report patterns use consistent structure.

### Required proof

- Grouping and relationship annotations
- Canonical reading order
- Low-resolution hierarchy review
- Evidence that meaning does not depend on decorative styling

## UXP-006: Define the problem before designing a solution

### Rule

No wireframe, visual direction or implementation begins until the repository states what problem is being solved, for whom, in what situation and how success will be judged.

### Application to this product

- Every representative view has one screen responsibility.
- A new layout cannot be used to avoid an unresolved product-model or state question.
- Visual polish cannot precede structural approval.
- A design proposal states which user misunderstanding, failure or task it addresses.

### Required proof

- Completed problem definition in the governing issue or design brief
- Named success and blocking-failure criteria
- Traceability to approved architecture and content sources
- Confirmation that no material product question remains unanswered

## UXP-007: Use direct language without jargon

### Rule

People must be able to understand labels, guidance, feedback, errors and decisions without translating internal terminology or unexplained jargon.

### Application to this product

- Necessary technical or governance terms are defined at first use.
- Buttons use specific verbs.
- Questions explain why the answer matters.
- Typed responses include good and insufficient examples with explanations.
- Error and stop messages say what happened, why and how to proceed.

### Required proof

- Jargon and abbreviation review
- Representative-user comprehension review
- Good and insufficient response examples for typed input
- Direct-language review of actions, errors and consequences

## UXP-008: Give immediate and meaningful feedback

### Rule

Every consequential action must produce timely feedback that states what changed, what did not change and what happens next.

### Application to this product

- Save confirms that a draft was saved and not interpreted.
- Submission confirms the review destination and current status.
- Interpretation explains the rule applied and resulting consequence.
- Verification states the declared use for which evidence was verified.
- Decision recording states the new authority, effective scope and remaining restrictions.
- Failures preserve the user's work and provide a recovery path.

### Required proof

- Initial, loading, success, failure and empty states
- Action-result copy
- Dynamic announcement and focus destination
- Retry or recovery behavior

## UXP-009: Make the information hierarchy match the user’s priority

### Rule

The most important information for the screen’s primary job must receive the strongest structural and visual emphasis.

### Application to this product

- Public orientation prioritizes the reader’s problem and the product’s purpose.
- Work collection prioritizes the current task, why it matters, answer guidance, examples and input.
- Initiative Overview prioritizes current journey position, permission, blockers and next action.
- Gate review prioritizes the decision, scope, evidence sufficiency and consequences.
- Reporting prioritizes the decision, recommendation, complete-system result and limitations.
- Journey state, task completion and evidence status are not presented as equal competing panels.

### Required proof

- Written content-priority order
- Blur or low-resolution hierarchy review
- One-primary-action check
- Confirmation that visual order matches semantic and keyboard order

## UXP-010: Treat accessibility as a design requirement

### Rule

Accessibility must shape structure, content, interaction and component decisions from the first wireframe through production validation.

### Application to this product

- Semantic landmarks and heading order are defined.
- All meaningful interaction is keyboard operable.
- Focus movement is defined after navigation, error, interpretation, hard stop and decision.
- Status never depends on color alone.
- Primary mobile controls target at least 44 by 44 CSS pixels unless a documented equivalent treatment provides sufficient access.
- Content reflows without horizontal scrolling for primary tasks.
- Reduced-motion preferences are honored in later visual and implementation work.

### Required proof

- Keyboard and focus annotations
- Screen-reader reading order
- Contrast evidence when color is introduced
- Desktop zoom and mobile reflow review
- Automated and human accessibility testing at prototype and implementation checkpoints

## UXP-011: Preserve user control and reversibility

### Rule

People must be able to pause, leave, resume, correct and recover without losing work or accidentally granting authority.

### Application to this product

- Draft work can be saved and resumed.
- Significant or destructive actions require clear confirmation.
- Unsupported choices are unavailable with reasons.
- Users can return from a later representative scenario without changing the real blocked state.
- Corrections preserve history and do not silently rewrite prior decisions.
- Only an accountable human action grants, restricts or restores authority.

### Required proof

- Cancel, back, resume and recovery behavior
- Destructive-action review
- History and supersession behavior
- Confirmation that automated interpretation cannot grant authority

## UXP-012: Use whitespace to reduce cognitive load

### Rule

Spacing must clarify topic changes, grouping and priority rather than compressing all available state into one viewport.

### Application to this product

- Journey context does not become a dense permanent sidebar on work screens.
- Major decisions, action boundaries, evidence collection and supporting trace have clear separation.
- Card density is limited when cards would make unequal information appear equally important.
- Mobile layouts provide sufficient space around controls and reading groups.

### Required proof

- Density review at desktop and mobile widths
- Grouping rationale
- Spacing-system conformance after Gate 6.5 defines tokens
- Confirmation that whitespace supports rather than fragments reading order

## UXP-013: Prevent errors and make recovery explicit

### Rule

The product should prevent avoidable mistakes and explain recoverable failures in direct, local and actionable language.

### Application to this product

- Structured controls replace free text when a bounded response is required.
- Evidence requirements are explained before submission.
- Validation appears close to the affected input and preserves all entered work.
- The interface prevents decisions that exceed current authority.
- A hard stop explains containment, corrective action, evidence and reassessment.
- Resolving one blocker states whether other blockers remain.

### Required proof

- Input-constraint rationale
- Inline validation and error-summary behavior
- Data-preservation behavior
- Recovery path for each blocking failure

## UXP-014: Reveal complexity when it becomes relevant

### Rule

The interface must expose enough information to act safely while deferring supporting detail that is not needed for the current task.

### Application to this product

- Work screens show limited journey context and provide a path to the full overview.
- Extended methodology, history, provenance and detailed control references may use disclosure.
- Decisions, exact scope, material gaps, hard stops, current authority and next accountable action remain in the primary path.
- Guidance is available before input, while advanced detail can be opened intentionally.
- Progressive disclosure cannot hide information that changes a decision.

### Required proof

- Primary-path versus disclosed-content inventory
- Confirmation that critical meaning survives with disclosures closed
- Mobile disclosure and keyboard behavior
- Representative-user ability to find supporting detail when needed

## UXP-015: Use familiar mental models and explain necessary novelty

### Rule

The product should use recognizable navigation, form, review, status and reporting patterns unless a different interaction is demonstrably necessary.

### Application to this product

- The public playbook behaves like understandable guidance, not an unexplained application shell.
- The workspace uses recognizable Overview, Work, Evidence, Decisions and Results concepts where they match user expectations.
- A pilot is represented as a bounded increment, not as the permanent product structure.
- The experience does not resemble a linear wizard when work can be parallel, revisited or blocked.
- Novel authority or evidence states include direct explanation.

### Required proof

- Mental-model rationale
- Navigation comprehension or tree testing when hierarchy changes
- Explanation for novel interactions
- Evidence that familiar patterns do not create false implications

## UXP-016: Iterate from observed evidence

### Rule

Every design checkpoint is a hypothesis that must be tested, revised and retested against defined user outcomes.

### Application to this product

- The validated vertical slice is reviewed before extending the system.
- Representative people must be able to explain purpose, state, causality, permitted work, next action and decision boundaries.
- Failures are recorded as product evidence rather than corrected only in conversation.
- Rejected designs remain marked as rejected.
- A design is not called validated because it was generated, reviewed by its author or rendered successfully.

### Required proof

- Test tasks and participant roles
- Observed outcomes and blocking failures
- Revision record
- Retest result
- Explicit validated, revision required or stopped conclusion

## Mandatory screen-definition questions

Before designing any screen, answer:

1. Who is using this screen and in what situation?
2. What single job does the screen primarily help them complete?
3. What must they understand before acting?
4. What is the one primary action?
5. What changes when that action succeeds?
6. What does not change?
7. Which state belongs on this screen?
8. Which state belongs somewhere else?
9. What evidence or guidance is required before input?
10. What can go wrong and how does the person recover?
11. What is the correct semantic and keyboard order?
12. How will a representative human prove that the screen is understandable and usable?

If these questions cannot be answered from approved repository sources, design must stop until the missing product decision is resolved.

## Blocking design failures

A design cannot advance when any of the following is true:

- The screen does not have one clear primary job.
- The user must infer why the product or screen exists.
- Journey state, task progress, evidence status and decision state are visually intermingled without clear ownership.
- Answer or evidence collection is crowded by a full journey dashboard.
- One progress indicator conflates different types of progress.
- A status does not identify its scope, cause or consequence.
- A blocked or restricted state does not explain whether the current work caused it, what else remains unresolved and how to proceed.
- The user cannot tell what may continue and what must stop.
- A completed form implies readiness, verification, approval or authority.
- Supporting detail displaces the current task or governing consequence.
- The design depends on a permanent sidebar, detached rail, hover or horizontal scrolling for essential meaning.
- Mobile, keyboard or screen-reader order changes the meaning.
- An applicable principle is unassessed or supported only by author opinion.
- Representative task validation has a blocking failure that has not been corrected and retested.

## Relationship to later design-system work

Gate 6.5 must translate these principles into reusable layout rules, components, states, content patterns, accessibility behavior and design tokens.

Later implementation should automate what can be checked deterministically, including semantic structure, contrast, keyboard behavior, target sizing, responsive overflow and required state variants. Human review remains necessary for comprehension, hierarchy, causality and task usefulness.

## Review cadence

Review these principles after:

- a major usability finding;
- an accepted change to product architecture or interaction behavior;
- a major product release;
- a material accessibility finding;
- a recurring design failure;
- a change in representative user needs.

Changes require a new or superseding DEC-UX record.
