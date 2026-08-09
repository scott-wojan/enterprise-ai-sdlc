# PROC-AST-005: Assist Code Review

## Purpose

Provide evidence-linked review observations to an accountable human reviewer without approving a change or replacing deterministic checks.

## Use when

An approved Assisted Work pilot permits advisory review of a bounded human-authored change.

## Do not use when

The AI would approve, merge, dismiss required findings, change code, access excluded material or act as the sole reviewer.

## Accountable owner

The human reviewer accountable for the review disposition.

## Participants

- Human reviewer and change author.
- Code, security, architecture, test and service owners as applicable.
- AI assistant operating with advisory, read-only authority.

## Preconditions

- PROC-PILOT-002 approves the use and source access.
- Change scope, base and head revisions, risk class and required reviewers are known.
- Required deterministic checks remain enabled and independent.

## Inputs

- Exact diff and base and head revisions.
- Approved requirements, plan, standards, tests and ownership rules.
- Deterministic check results available at review time.
- Known risks, incidents and relevant architecture decisions.

## Actions

1. **The human reviewer bounds the review.** Record revisions, intended behavior, risk, excluded files and review concerns.
2. **The AI assistant inventories available evidence.** List the diff, surrounding code, tests, requirements and check results inspected.
3. **The AI assistant evaluates changed behavior.** Inspect correctness, failure handling, security, data use, maintainability, compatibility, observability and test implications as applicable.
4. **The AI assistant creates findings.** Link each finding to changed lines and supporting requirements or context, state impact and confidence, and distinguish fact from inference.
5. **The AI assistant records coverage limits.** Identify uninspected dependencies, unavailable context and checks it cannot perform.
6. **The human reviewer verifies every material finding.** Confirm, revise, reject or escalate it and add independent judgment.
7. **The author responds through the normal workflow.** Address accepted findings under human change authority and rerun required checks.
8. **The human reviewer makes the review decision.** Approve, request changes or stop based on the full evidence, not the AI summary alone.

## Required human decisions

- The reviewer determines whether a finding is valid and material.
- Required domain owners resolve consequential or specialist concerns.
- Only authorized humans approve or merge the change.
- Deterministic controls decide their own pass or fail state.

## Outputs

- Revision-bound AI review observations.
- Evidence links, confidence and coverage limitations.
- Human finding dispositions and follow-up evidence.
- Human review decision separate from the AI output.

## Verification

- Findings resolve to the exact reviewed revision and evidence.
- Inference and uncertainty are visible.
- Required deterministic checks ran independently and their status was not overridden.
- A qualified human reviewed material findings and made the final decision.
- AI did not alter, approve or merge the change.

## Stop conditions

Stop when revision or scope changes during review, required context is missing, sensitive content exceeds the grant, deterministic checks are unavailable, or no qualified human reviewer is available.

## Completion criteria

- Scope, revisions, sources and limitations are recorded.
- Material findings have human dispositions.
- Required checks and reviewers complete independently.
- The human review decision and evidence are retained.

## Measures

Record confirmed and rejected findings, material defects found, missed defects discovered later, reviewer effort, revision-drift stops and repeated finding patterns. Finding volume is not review quality.

## Next procedures

- PROC-AST-004 when verification gaps need test suggestions.
- An approved Bounded Change verification or review procedure when the change came from bounded AI execution.
- The exception or incident route for prohibited or unsafe behavior.

## Applicable principles and controls

- PRIN-001 through PRIN-008 and PRIN-010 through PRIN-011 as applicable.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-CTX, CTRL-EXC and CTRL-LEARN controls.
- CTRL-STATE-AST-001 through CTRL-STATE-AST-005 and the applicable CTRL-BASELINE profile.
- PROC-PILOT-002.

