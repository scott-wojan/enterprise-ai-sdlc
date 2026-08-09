# Complete Bounded Defect Correction Example

## Scenario

The fictional Retail Notifications service has a confirmed defect: the retry parser treats a `Retry-After: 0` response value as absent and substitutes the default delay. A human product owner approves the required behavior: zero means retry immediately, subject to the existing rate limiter.

The repository is `retail-notifications`; base revision is `rev-1900`. The example uses abstract repository-provided commands so no vendor platform is required.

## Intake and ART-RISK-001

- **Work:** `CHANGE-NOTIFY-017`.
- **Outcome:** Preserve numeric zero from the retry header parser.
- **Scope:** Parser implementation and its unit-test file only.
- **Data and environments:** Synthetic test data in an isolated workspace; no production or customer data.
- **USE category:** USE-BND.
- **RISK class:** RISK-C2 because behavior affects request timing but the change is small, reversible and protected by an existing limiter.
- **Blast radius:** One library path used by the notification worker.
- **Prohibited work:** Dependency updates, rate-limiter changes, network calls, merge, release and production access.
- **Required treatment:** Bounded Change, isolated branch, small batch, unit and integration checks, human code and service review, standard release route and rollback.
- **Approvers:** Change owner, service owner and security owner.

PROC-BND-001 confirms eligibility. AI cannot lower the class.

## PROC-BND-002 repository preparation

The repository owner fixes `rev-1900`. Applicable repository and directory instructions are recorded. The unchanged base passes:

- `check:format`
- `check:unit retry-parser`
- `check:integration notification-retry`
- `check:security`

The recovery owner proves a clean restore to `rev-1900` and reruns the parser unit check. The context inventory identifies the parser, tests, public interface and rate-limiter decision. Preparation passes.

## PROC-BND-003 boundary

The authenticated boundary `BOUND-NOTIFY-017-v1` allows:

- Read access to the repository at `rev-1900`.
- Write access only to `src/retry/header_parser` and `tests/retry/header_parser_tests` in an isolated workspace.
- Repository-provided edit and check commands.
- Two batches, 30 minutes, one executor and fixed resource limits.

It denies network, secrets, package changes, other paths, merge, release and production. Positive edit and check scenarios succeed. Denied path, network and merge attempts fail. Revocation and cleanup pass.

## ART-SPEC-001

`SPEC-NOTIFY-017-v1` states:

- Numeric zero is a valid parsed delay.
- Missing, malformed and negative values retain existing behavior.
- Rate-limiter behavior is unchanged.
- Acceptance examples cover zero, positive, missing, malformed and negative values.
- No public interface or dependency changes.

The product owner approves intent. The service and security owners approve operational and misuse constraints.

## PROC-BND-004 and ART-PLAN-001

The AI planner proposes `PLAN-NOTIFY-017-v1`:

1. Add failing unit examples for zero and existing edge cases. Run format and parser unit checks. Stop on any unrelated failure.
2. Change the parser's presence check so zero remains valid. Run format, parser unit, retry integration and security checks. Compare the final scope with the two allowed files.

One AI-proposed alternative would change the default delay. The product owner rejects it because it changes unrelated intent. Human owners approve the exact two-batch plan, checks and recovery points.

## PROC-BND-005 execution

The controller matches work, plan, boundary, base, identity and expiry.

- Batch 1 changes only the test file. The new zero case fails for the expected reason; existing cases pass. Because the plan defined this expected red-test checkpoint, the human execution owner authorizes batch 2.
- Batch 2 changes one conditional in the parser. All batch checks pass. Action and check evidence are captured independently.
- The AI stops after batch 2. It does not refactor an adjacent helper it identified.

The controller revokes execution access and verifies cleanup. The output is a candidate, not a success claim.

## PROC-BND-006 deterministic verification

A trusted verifier recreates the candidate from base plus the recorded change. Required authoritative checks run against candidate `cand-017-a`:

- Format: pass.
- Parser unit suite: pass, including all acceptance examples.
- Retry integration suite: pass.
- Security and policy checks: pass.
- Changed-path comparison: exactly the two approved files.

`ART-VERIFY-001-NOTIFY-017` records raw evidence and a passing deterministic gate.

## PROC-BND-007 human review

The code reviewer checks intent, simplicity and maintainability. The service owner checks the immediate-retry and limiter interaction. The security reviewer checks malformed-input behavior. All approve exact candidate `cand-017-a`. `ART-APPROVAL-001` records their distinct decisions. AI is not a reviewer.

## PROC-BND-009 release

The evidence owner links intake, risk, preparation, boundary, specification, plan, execution, verification and review. The existing enterprise release process independently validates candidate identity and creates release artifact `artifact-017-a`.

An authorized human releases it to the normal staged route. Monitoring shows the zero case behaves as specified and rate-limiter guardrails remain normal. `ART-RELEASE-001-NOTIFY-017` records release, monitoring and rollback readiness.

## Demonstrated failure path

Before the successful run, an intentionally shown first attempt reaches batch 2 and requests access to refactor the adjacent helper. The boundary denies the write and PROC-BND-005 stops.

PROC-BND-008 then:

- Revokes the execution identity and quarantines the incomplete workspace.
- Preserves the request, denial, actions and checkpoint.
- Restores `rev-1900` and independently reruns the base unit check.
- Verifies no residual credential, process or artifact remains.
- Classifies the cause as plan scope plus AI adjacency tendency, not merely prompt quality.
- Keeps the same boundary and updates onboarding guidance to emphasize that discovered adjacent improvements become separate intake items.

Governance approves a new execution session with a new grant. The failed grant is never restored.

## Production feedback and decision

During the observation period there is no linked incident or rollback. One support question asks why the helper was not refactored; the answer points to small-batch policy. The pilot scorecard includes all flow, quality, operations, security, product, experience and cost dimensions.

`ART-ADV-001-NOTIFY-v2` permits continued RISK-C2 defect corrections with the same paths-by-plan boundary and review gates. It does not authorize dependency changes, higher-risk work or production access. Each future change still requires its own classification, boundary, plan and approvals.

