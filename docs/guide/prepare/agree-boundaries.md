# Agree the Pilot Boundaries and Guardrails

## Why am I here?

Translate policy and readiness decisions into limits the team can understand and the platform can enforce.

**Owner:** Pilot lead and platform owner  
**Participants:** Engineering manager, security or risk, product, verification, release and delivery representatives  
**Time:** 60 to 90 minutes  
**Bring:** Readiness decision, selected use case and proposed tooling  
**Leave with:** An approved, tested and revocable operating boundary

## Define the boundary

Record what is allowed for each dimension:

- people and service identities;
- repositories, branches and environments;
- source files and directories;
- data classes and context sources;
- tools and commands;
- network destinations;
- credentials and secret handling;
- read, propose, modify, execute and approve permissions;
- maximum duration and expiry;
- logging and evidence;
- recovery, cleanup and revocation.

Anything not explicitly allowed is denied.

## Make the boundary real

1. Configure the approved identities and access.
2. Isolate the work from production and unrelated assets.
3. Limit tools and network access to the use case.
4. Prevent the AI executor from approving or releasing its own work.
5. Set expiration and an independent revocation mechanism.
6. Test allowed actions.
7. Test representative denied actions.
8. Test recovery and cleanup.
9. Record who witnessed the tests and the exact configuration tested.

A written rule without technical enforcement is not an operating boundary.

## Make it usable

Give the team a short statement of:

- what they may do;
- what they may not do;
- which conditions require an immediate stop;
- where to get help;
- how access is revoked.

Keep detailed control mappings in the canonical reference, not in the team's daily instructions.

## Stop here if

Access is shared, unrestricted, not time-bound, cannot be revoked independently, or the proposed tool can act outside the tested boundary.

The detailed baseline is in [minimum controls](../../foundation/minimum-controls.md) and the canonical [control procedures](../../controls/identity-and-authorization.md).

**Previous:** [Assess readiness](assess-readiness.md)  
**Next:** [Establish the baseline and success measures](establish-baseline.md)
