# Isolation, Context and Tool-Access Controls

## Purpose

Bound the execution substrate, authorize context by provenance and govern tools and external effects explicitly.

## CTRL-ISO-001: Isolate execution from protected environments

**Purpose:** Contain untrusted execution and output.

**Control type:** Preventive.

**Applicable adoption states and risks:** Foundation evaluation and Bounded Change; any active tool use.

**Owner:** Execution-environment owner.

**Requirement:** AI execution must use an isolated workspace with explicit filesystem, process, secret, network, compute, time and persistence limits. Production and protected data-plane access are denied in the Pilot Edition.

**Enforcement or evaluation mechanism:** Sandbox or equivalent enforcement with allowed and denied scenario tests.

**Evidence:** Environment configuration, identity, base image or state, limit tests, resource logs and cleanup proof.

**Failure response:** Stop, revoke, contain outputs and disable the environment until isolation is restored.

**Review frequency:** Before launch, each material configuration change and every isolation failure.

## CTRL-ISO-002: Treat inputs and outputs according to trust

**Purpose:** Prevent instructions or content from crossing trust boundaries silently.

**Control type:** Preventive and detective.

**Applicable adoption states and risks:** All states; untrusted repositories, issues, documents, web content and generated output.

**Owner:** Security and data owner.

**Requirement:** Classify input provenance and trust, treat embedded instructions as data unless explicitly authorized, prevent untrusted content from changing policy or grants, and quarantine output until required checks and human review pass.

**Enforcement or evaluation mechanism:** Source labeling, instruction precedence, content handling, destination restrictions and adversarial scenario tests.

**Evidence:** Source classification, applied precedence, denied influence, output disposition and reviewer decision.

**Failure response:** Stop, isolate affected content, rotate exposed secrets where necessary and investigate policy manipulation.

**Review frequency:** Every new source class, context assembly change and injection or leakage event.

## CTRL-TOOL-001: Allowlist tools and external destinations

**Purpose:** Prevent implicit capability expansion through tools, plugins or protocols.

**Control type:** Preventive.

**Applicable adoption states and risks:** Any tool, API, MCP server, plugin, shell, network or external service use.

**Owner:** Tool and integration owner.

**Requirement:** Each tool and destination must have an owner, approved purpose, operations, authentication, data classes, side effects, trust level, limits and expiry. Unknown tools, dynamic installation and unlisted destinations are denied.

**Enforcement or evaluation mechanism:** Registry-backed allowlisting, operation-level policy and egress controls.

**Evidence:** Tool version, registration, grant mapping, calls, destinations, results and denied attempts.

**Failure response:** Deny, revoke the integration, contain outputs and reassess affected work and evidence.

**Review frequency:** At registration, version or permission change, renewal and incident.

## CTRL-ISO-003: Bound blast radius and prove cleanup

**Purpose:** Limit damage and remove residual capability after work.

**Control type:** Preventive and corrective.

**Applicable adoption states and risks:** Bounded Change and any stateful evaluation.

**Owner:** Environment and recovery owner.

**Requirement:** Set explicit path, data, environment, side-effect, resource, concurrency and time ceilings; checkpoint recoverable state; and remove workspaces, credentials, processes, caches and temporary artifacts after stop or completion.

**Enforcement or evaluation mechanism:** Quotas, path and environment policies, kill controls, recovery tests and residual-state scans.

**Evidence:** Limits, usage, checkpoints, stop result, cleanup inventory and residual-access test.

**Failure response:** Keep the scope isolated, revoke upstream access and treat failed cleanup as an incident.

**Review frequency:** Each execution and after limit, cleanup or recovery failure.

