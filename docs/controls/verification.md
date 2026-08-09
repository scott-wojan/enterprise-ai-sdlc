# Verification Controls

## Purpose

Place fast deterministic feedback near execution, run broader authoritative gates before release and use inferential review only for defined semantic questions.

## CTRL-VER-001: Run fast deterministic checks at batch boundaries

**Purpose:** Detect defects and scope violations while batches remain small and recoverable.

**Control type:** Detective and preventive.

**Applicable adoption states and risks:** Bounded Change; every executable batch.

**Owner:** Engineering control owner.

**Requirement:** The approved plan must name reproducible local checks for each batch, run them against the exact checkpoint and block continuation on fail or unable-to-evaluate.

**Enforcement or evaluation mechanism:** Execution controller invokes versioned commands and obtains results directly.

**Evidence:** Check, version, input revision, environment, raw output, outcome and checkpoint.

**Failure response:** Stop, preserve evidence and recover or obtain a new approved correction plan.

**Review frequency:** Every batch and when checks or risk change.

## CTRL-VER-002: Run authoritative broad checks before review and release

**Purpose:** Evaluate integration, policy and supply-chain conditions outside the executor workspace.

**Control type:** Detective and preventive.

**Applicable adoption states and risks:** Bounded Change candidates.

**Owner:** CI and verification owner.

**Requirement:** Required builds, tests, scans, policy checks and artifact checks must run in a trusted environment against the exact candidate. Missing, stale, cancelled or failed results block progression.

**Enforcement or evaluation mechanism:** Protected gates consume authoritative results and candidate identity.

**Evidence:** Candidate digest, control versions, raw results, gate state and retention reference.

**Failure response:** Keep gates closed and route failure through controlled response or correction.

**Review frequency:** Every candidate and control configuration change.

## CTRL-VER-003: Bound inferential verification

**Purpose:** Add semantic review without displacing deterministic proof or human approval.

**Control type:** Detective.

**Applicable adoption states and risks:** Assisted Work and Bounded Change semantic evaluation.

**Owner:** Inferential-control owner.

**Requirement:** Define question, inputs, evaluator, threshold, outcomes, confidence limits, blocking rule and escalation before use. Label results inferential and preserve facts, assumptions and disagreements.

**Enforcement or evaluation mechanism:** Control registration and gate validation apply CTRL-PREC requirements.

**Evidence:** Definition, exact inputs, evaluator version, output, findings and human disposition.

**Failure response:** Treat malformed or stale results as unable to evaluate; never use them to override a deterministic failure.

**Review frequency:** At each material use, evaluator change, drift or repeated disagreement.

## CTRL-VER-004: Resolve failures without silent waiver

**Purpose:** Preserve control meaning and fail closed.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Every required verification gate.

**Owner:** Verification owner with the accountable requirement owner.

**Requirement:** Retain each pass, fail, unable-to-evaluate and not-applicable result. A deterministic failure remains blocking. Any eligible exception must preserve the failure, name approver, scope, compensating control and expiry.

**Enforcement or evaluation mechanism:** Gate logic applies the most restrictive result and rejects incomplete control sets.

**Evidence:** Individual results, conflict, disposition, exception and rerun evidence.

**Failure response:** Remediate and rerun, reduce scope or stop. Do not relabel failure as warning.

**Review frequency:** Every failure or disagreement and periodic effectiveness review.

