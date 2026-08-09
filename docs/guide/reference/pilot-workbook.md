# Pilot Workbook

Use this as the pilot team's single working surface. Complete sections in order. Link to existing enterprise records instead of copying them when the linked record is durable, accessible and versioned.

This workbook does not replace the canonical artifact requirements. The linked definitions govern when more detail is required.

## Workbook status

- **Organization:**
- **Pilot name:**
- **Current phase:** Understand / Prepare / Run / Decide
- **Pilot lead:**
- **Current charter version:**
- **Last updated:**
- **Next decision and date:**

## 1. Enterprise intent and ownership

### Intent

We are considering a controlled pilot to learn whether AI-assisted delivery can:

For:

Without degrading:

### Accountable people

For each accountability, record the person's name, backup, decision rights, time commitment and escalation path:

- Executive sponsor
- Pilot lead
- Engineering manager
- Product or service owner
- Delivery-team representatives
- Platform or enablement owner
- Security, risk and compliance partner
- Verification owner
- Release owner
- Measurement owner

### Decision group

- Decisions this group owns:
- Decisions requiring independent approval:
- Who may pause the pilot:
- Who may authorize restart:
- Normal escalation path:
- Urgent incident path:

Canonical detail: [enterprise charter](../../artifacts/enterprise-charter.md) and [role definitions](../../roles/enterprise-and-value-stream.md).

## 2. Candidate team and use case

- Team and product or service:
- User or business need:
- Proposed work:
- Expected frequency:
- Why AI assistance may help:
- Selected operating mode:
- Systems and repositories affected:
- Data and context involved:
- Worst credible failure:
- How that failure would be detected:
- Explicit exclusions:
- Rejected alternatives and reasons:
- Selection decision, owner and date:

Canonical detail: [use-case intake](../../artifacts/use-case-intake.md).

## 3. Readiness decision

For each area, record ready, restricted, remediate or not ready, followed by the evidence and material gaps.

### Organization

- Result:
- Evidence:
- Restrictions or remediation:

### Engineering

- Result:
- Evidence:
- Restrictions or remediation:

### Context

- Result:
- Evidence:
- Restrictions or remediation:

### Controls

- Result:
- Evidence:
- Restrictions or remediation:

### Measurement

- Result:
- Evidence:
- Restrictions or remediation:

### Team

- Result:
- Evidence:
- Restrictions or remediation:

### Overall decision

- Proceed / proceed with restrictions / remediate and reassess / do not proceed:
- Decision owner and date:
- Restrictions that govern:
- Remediation owner, due date and closure evidence:
- Reassessment date:

Canonical detail: [readiness procedure](../../procedures/readiness/assess-and-decide.md) and [readiness decision template](../../../templates/readiness-decision.md).

## 4. Pilot boundary and guardrails

### Allowed

- Identities:
- Repositories and branches:
- Files or directories:
- Environments:
- Data classes and context sources:
- Tools and commands:
- Network destinations:
- Credentials:
- Read, propose, modify and execute permissions:
- Start, expiry and maximum duration:

### Denied

- Production access:
- Release or approval authority:
- Sensitive data or secrets:
- Unrelated repositories, services and destinations:
- Other explicit denials:

### Enforcement and recovery

- Isolation method:
- Logging and evidence:
- Independent revocation owner and method:
- Recovery method:
- Cleanup method:
- Allowed-action test and result:
- Denied-action test and result:
- Revocation and recovery test result:
- Witness and date:

Canonical detail: [minimum controls](../../foundation/minimum-controls.md).

## 5. Baseline and measures

For each measure, record its question, definition, source, owner, frequency, comparison, limitations and investigation threshold.

### Flow

- Measures and baseline:

### Quality

- Measures and baseline:

### Operations

- Measures and baseline:

### Security and control

- Measures and baseline:

### Product

- Measures and baseline:

### Team experience

- Measures and baseline:

### Economics

- Measures and baseline:

Canonical detail: [baseline, flow and quality](../../measures/baseline-flow-quality.md) and [balanced outcomes](../../measures/balanced-outcomes.md).

## 6. Approved pilot charter

- Intent:
- Selected team and use cases:
- Operating mode by use case:
- Exclusions:
- Start condition:
- End condition:
- Approved boundary:
- Required controls:
- Weekly rhythm:
- Stop conditions:
- Final decision date:
- Exact charter version:
- Approvers and dates:

Canonical detail: [pilot charter](../../artifacts/pilot-charter.md) and [full template](../../../templates/pilot-charter.md).

## 7. Team roster and onboarding

For each participant:

- Name and role:
- Required training or briefing completed:
- Boundary understood:
- Stop and escalation path understood:
- Access tested:
- Support route confirmed:
- Date:

Onboarding gaps:

## 8. Weekly pilot record

Create one copy of this subsection per week.

### Week and scope

- Dates:
- Work attempted:
- Work completed:
- Operating mode:

### What happened

- Observable improvement:
- Quality or acceptance finding:
- Rework or transferred effort:
- Operational or support effect:
- Security, control or evidence event:
- Team confidence, friction or learning:
- Tool and enablement cost:

### Decisions and actions

- Continue unchanged / restrict / pause / remediate:
- Decision owner:
- Action, owner and due date:
- Charter or boundary change required:
- Evidence links:

## 9. Risks, exceptions and incidents

Create one record per event.

- Date and reporter:
- Type: risk / exception / incident / near miss
- What happened:
- Affected work and evidence:
- Immediate containment:
- Access revoked:
- Recovery and cleanup:
- Impact:
- Root or contributing conditions:
- Required remediation:
- Owner and due date:
- Verification of closure:
- Restart decision, owner and date:

Do not paste secrets, sensitive prompts or uncontrolled personal data into this workbook. Link to protected incident evidence where necessary.

## 10. Evidence review

### What changed from baseline?

- Flow:
- Quality:
- Operations:
- Security and control:
- Product:
- Team experience:
- Economics:

### What explains the result?

- Confidence in the comparison:
- Important confounding factors:
- Recurring failure or friction:
- Benefits that depended on hidden effort:
- Controls that worked:
- Controls that did not work:
- Evidence gaps:

### Decision constraints

- Any quality deterioration:
- Any safety, security or control deterioration:
- Any participant harm or unsustainable burden:
- Any unresolved material incident:

## 11. Continue, restrict, expand or stop

- Decision:
- Scope to which it applies:
- Evidence supporting it:
- Evidence against it:
- Restrictions that remain:
- Required remediation:
- Decision owner:
- Independent participants:
- Date:

Expansion is permitted only for the next bounded increment justified by evidence. It does not transfer authority to other teams, repositories, data or work types.

Canonical detail: [pilot evaluation](../../procedures/pilot/evaluate-and-decide.md) and [advancement decision](../../artifacts/advancement-decision.md).

## 12. Next-increment plan

- Capability or use case to retain:
- Practice to standardize:
- Failure or friction to eliminate:
- Small next increment proposed:
- Why it is justified:
- Readiness or control work required:
- Owner and due date:
- Evidence needed before the next decision:
- Items explicitly deferred:
- Date for reassessment:

## Final confirmation

- Every required decision has a named human owner.
- The exact scope and operating mode are stated.
- Material gaps and incidents are visible.
- Evidence includes quality, control, product, people and cost, not only speed.
- The decision applies only to the stated scope.
- The next increment is bounded and reversible.
