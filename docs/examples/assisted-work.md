# Complete Assisted Work Example

## Scenario

The fictional Retail Notifications team wants help understanding retry behavior and clarifying a requirement before a human writes any change. The repository is `retail-notifications`, the fixed revision is `rev-1842`, and the exact scope is `src/retry/` plus its tests and approved architecture records. AI has read-only authority.

This example is vendor-neutral. Names and evidence identifiers are illustrative but every decision and artifact field shows what an enterprise must retain.

## Filled use-case intake

- **ART-USE-001:** `USE-NOTIFY-001`, version 1.
- **Sponsor and owner:** Product owner Priya N.; delivery owner Marco L.
- **Outcome:** Reduce time needed to understand retry semantics and identify missing acceptance behavior.
- **Affected parties:** Notification service maintainers and customers receiving delayed messages.
- **Current process:** A developer traces code and tests, then holds a requirements review. Baseline median elapsed time is 6.5 hours across the prior eight comparable inquiries.
- **Data:** Source code and internal engineering documents only. Customer records, production logs and secrets are excluded.
- **Proposed state:** Assisted Work.
- **Initial classification:** USE-ADV, RISK-C1. No write, tool side effect, approval or publication authority.
- **Acceptance:** A human-validated explanation and requirements analysis with sources, explicit uncertainty and dispositions.
- **Alternative:** Human-only analysis remains permitted.

## Readiness and pilot decision

`ART-READY-001-NOTIFY-v1` approves Assisted Work for the named team, repository paths and work type for 30 days. The control profile proves read-only repository access, denied write, context provenance, evidence capture, expiry and revocation.

`ART-PILOT-001-NOTIFY-v1` records:

- Four willing participants and two qualified reviewers.
- Only PROC-AST-001, PROC-AST-002 and PROC-AST-003.
- Stop on source conflict without an owner, sensitive data, any write attempt, evidence loss, participant concern or mandatory control failure.
- Weekly review and a maximum of ten eligible inquiries.
- MEAS-FLOW-001, MEAS-QUAL-002, MEAS-EXP-001, MEAS-SEC-001 and MEAS-USE-001.

PROC-PILOT-004 passes, PROC-PILOT-005 scenarios pass and the individual read-only grants activate.

## Initial request

The product owner asks:

> Explain how retries stop for permanent client errors, then identify ambiguity in requirement R-17: “Retry delivery until it is no longer useful.” Do not change any file. Use only the approved revision and cite evidence.

The accountable owner records the question, audience, intended planning use, revision and exclusions before AI access.

## PROC-AST-001 execution

The AI inventory records these inspected sources:

- `src/retry/policy` at `rev-1842`.
- `tests/retry/policy_tests` at `rev-1842`.
- Architecture decision `ADR-014`, version 3.
- Requirement `R-17`, version 2.

The output separates categories:

### Repository facts

- The policy stops immediately after a response classified as a permanent client error. Evidence: `policy.should_retry`, branch `permanent_client_error`.
- Tests cover status categories `invalid-request` and `not-authorized`. Evidence: named cases in `policy_tests`.
- `ADR-014` says retry duration must be configurable by message class.

### Inference

- The current implementation appears to treat every unknown client error as transient. This is inference because the classification dependency is outside the approved scope.

### Contradiction

- `R-17` uses a usefulness concept, while code uses attempt count and elapsed time. No source defines how usefulness maps to either value.

### Unknowns

- The owning source for message-class duration values is not in the approved context.
- Production behavior is unknown because production data is excluded.

The code owner checks the cited revision, corrects one symbol name and accepts all three material findings. The correction and disposition are retained. No repository state changes.

## PROC-AST-002 execution

The requirements analysis decomposes `R-17` into outcome, actor, conditions, behavior, constraints, failure handling and observable acceptance. It raises these human-owned questions:

1. Which message classes exist, and who owns their usefulness windows?
2. Does a permanent client error always stop retry, or are any categories recoverable?
3. What observable timestamp begins the usefulness window?
4. What must be recorded when a retry stops?

The product owner and service owner decide:

- Three message classes use windows of 2 minutes, 30 minutes and 6 hours.
- Permanent client errors stop immediately with no exception in this pilot.
- The window begins at accepted-ingress time.
- Stop reason and final attempt time must be observable.

They update the authoritative requirement through normal human change control to `R-17` version 3. The AI output itself is not the source of record.

## PROC-AST-003 execution

The document owner authorizes a draft of an internal retry-behavior note. The source map links each material statement to `R-17` version 3, `ADR-014` version 3 or code at `rev-1842`. The draft remains in a non-authoritative location.

The code owner corrects a misleading example. The service owner approves operational wording. An authorized human publishes version 1 to the approved internal destination and verifies permissions. AI does not publish.

## Evidence package

- `USE-NOTIFY-001` and `ART-READY-001-NOTIFY-v1`.
- `ART-PILOT-001-NOTIFY-v1` and baseline `BASE-NOTIFY-v1`.
- Read-only grant and allowed-read, denied-write, expiry and revocation results.
- Exact request, source inventory, explanation, correction and human validation.
- Requirements questions and human dispositions linked to `R-17` version 3.
- Documentation source map, reviews, approval and publication verification.
- Support event: one context-location question, resolved by the context owner in 18 minutes.

## Evaluation

At review, the measurement owner reports four comparable inquiries:

- MEAS-FLOW-001 median lead time is 4.8 hours versus the 6.5-hour baseline. The sample is too small for a causal claim.
- MEAS-QUAL-002 finds 1.2 hours of correction and review effort per inquiry versus 1.0 hour baseline. The increase is retained, not hidden by lead-time improvement.
- MEAS-SEC-001 has zero failures across 28 required control executions.
- MEAS-EXP-001 shows all four participants could stop safely; two report that source-map preparation is burdensome.
- MEAS-USE-001 is 4 of 7 eligible inquiries and remains diagnostic only.

PROC-PILOT-003 produces `ART-ADV-001-NOTIFY-v1`: continue the same scope for one more review period, improve source-map discovery, do not expand authority, and recheck review effort. The technical grant remains read-only and unchanged.

## Demonstrated stop path

During a fifth inquiry, an input links to a production log containing customer identifiers. CTRL-ISO-002 blocks the source, the participant stops, and the data owner confirms it is excluded. The inquiry resumes only with a sanitized, approved evidence extract and a new source-set version. The event remains in the pilot record.

