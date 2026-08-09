# Handle Failures, Uncertainty and Unsafe Conditions

## Why am I here?

Give the team one clear response when work becomes uncertain, unsafe, uncontrolled or unrecoverable.

**Owner:** The person who observes the condition stops the work; the pilot lead owns coordination  
**Participants:** Platform, security or risk, engineering, verification, release and incident owners according to impact  
**Time:** Immediate containment, then the organization's incident cadence  
**Bring:** The affected work, available logs and the approved boundary  
**Leave with:** Containment, evidence preservation, recovery, remediation and an explicit restart or stop decision

## Stop first

Anyone may stop an affected work item. Do not continue in order to gather more evidence if doing so could increase impact.

Conditions include:

- attempted or successful action outside the boundary;
- exposure of secrets, personal information or unapproved data;
- fabricated verification or misleading claims of success;
- unexplained changes or candidate drift;
- repeated low-confidence output that cannot be checked;
- failed deterministic checks;
- loss of isolation, logging, revocation or recovery;
- pressure to bypass review or release controls;
- participant concern that cannot be resolved safely.

## Respond

1. Stop the affected work.
2. Revoke or narrow access independently where appropriate.
3. Isolate the candidate, outputs and affected evidence.
4. Prevent release or downstream use.
5. Notify the named route without sharing sensitive material in uncontrolled channels.
6. Determine the affected scope and current impact.
7. Recover and clean up using the tested method.
8. Verify that containment and recovery worked.
9. Record the event, contributing conditions and required remediation.
10. Decide whether to abandon, retry under the same boundary, revise the charter or stop the pilot.

## Restart requires a decision

Do not restart because the tool appears to work again. The accountable owner must verify remediation, confirm the boundary, repeat relevant tests and approve the exact restart scope.

Repeated failures require a system-level change to context, controls, workflow, training or use-case selection. Do not make individual team members compensate indefinitely.

Use the [risk and incident section of the Pilot Workbook](../reference/pilot-workbook.md). Bounded executions use the canonical [failure response](../../procedures/bounded/respond-to-failure.md); broader pilot learning uses [inspect and improve](../../procedures/pilot/inspect-and-improve.md).

**Previous:** [Run the weekly operating rhythm](weekly-rhythm.md)  
**Next:** [Capture evidence without burdening the team](capture-evidence.md)
