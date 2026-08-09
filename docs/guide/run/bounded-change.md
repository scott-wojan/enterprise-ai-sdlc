# Use AI for a Bounded Change

## Why am I here?

Allow AI to modify an isolated working copy for one eligible change without transferring approval or release authority.

**Owner:** Engineering manager for eligibility; named human change owner for the work  
**Participants:** Implementer, platform owner, verifier, independent reviewer and release owner  
**Time:** The normal change cadence plus boundary and evidence checks  
**Bring:** Approved Bounded Change use case, prepared repository, tested boundary, specification and acceptance criteria  
**Leave with:** A verified, independently reviewed change, or a contained and documented failure

## Confirm eligibility

Use Bounded Change only when it is explicitly approved in the charter. The change must be small, understandable, reversible, testable and isolated from production. The AI executor cannot lower the risk classification or broaden its own authority.

## Follow every gate

1. **Classify:** a human confirms the work is eligible and assigns its risk.
2. **Prepare:** fix the source revision, instructions, baseline checks, isolation and recovery method.
3. **Bound:** enforce identities, repositories, files, tools, data, network, commands, duration and denied actions.
4. **Specify:** state the intended behavior, constraints, acceptance criteria and exclusions.
5. **Plan:** have AI propose small batches, alternatives and risks.
6. **Approve:** accountable people approve the exact plan and boundary.
7. **Execute:** allow only approved batches; check after each batch.
8. **Verify:** run trusted deterministic checks against the exact candidate.
9. **Review:** a qualified human independently reviews intent, design, risk, evidence and maintainability.
10. **Complete:** revoke access, preserve evidence and hand the accepted candidate to the ordinary release process.

Any material change to the plan, boundary, source revision or candidate invalidates downstream approval and requires reassessment.

## Stop immediately if

The executor attempts a denied action, the plan drifts, context becomes uncertain, a checkpoint fails, evidence is missing, the candidate changes after verification, or recovery cannot be demonstrated.

Do not ask the same executor to decide that its own output is safe or successful.

Start with the canonical [classify work](../../procedures/bounded/classify-work.md) procedure and follow the linked sequence through completion. Use [respond to failure](../../procedures/bounded/respond-to-failure.md) for any failed or abandoned execution.

See the [complete Bounded Defect Correction example](../../examples/bounded-defect-correction.md).

**Previous:** [Use AI for Assisted Work](assisted-work.md)  
**Next:** [Run the weekly operating rhythm](weekly-rhythm.md)
