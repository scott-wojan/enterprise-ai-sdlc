# Platform, Architecture, Security and Product Responsibilities

## Purpose

Separate technical substrate, design integrity, risk control and product intent so every control and consequential decision has one accountable human owner.

## ROLE-OPS-005: AI delivery platform owner

Accountable for the supported AI delivery substrate, identity integration, isolation, approved tools, logging, revocation, reliability and platform support. This role proves platform capabilities through control evidence and must not assert that a configured feature satisfies product, architecture or risk acceptance.

Consumes ART-ENT-001, the control baseline and state decisions. Produces service boundaries, operating evidence, support routes, change notices and retirement plans.

## ROLE-OPS-006: Developer-experience and context owner

Accountable for usable repository onboarding, instruction discovery, context assembly, approved tool interfaces and friction feedback. Repository and domain source owners remain accountable for content correctness.

Consumes repository and participant evidence. Produces context routes, templates, quality checks, training assets and owned remediation of repeated usability failure.

## ROLE-OPS-007: Architecture owner

Accountable for architecture constraints, interface and dependency decisions, fitness checks and dispositions of material design deviation. This role decides architecture, not the AI planner or platform owner.

Consumes ART-SPEC-001, ART-PLAN-001 and relevant decisions. Produces approved constraints, review findings, exceptions and architecture evidence.

## ROLE-OPS-008: Security, risk and compliance owner

Accountable for data handling, threat and misuse treatment, security controls, policy and regulatory decisions, incident obligations and residual-risk acceptance within assigned authority.

Consumes classification, boundary, tool, evidence and incident records. Produces required controls, approvals, restrictions, risk decisions and escalation.

## ROLE-OPS-009: Product manager or product owner

Accountable for intended user and business outcomes, priority, requirements, acceptance and affected-party tradeoffs. AI may propose analysis or wording but cannot decide product intent or acceptance.

Consumes ART-USE-001 and evidence from users and delivery. Produces ART-SPEC-001, acceptance decisions, product guardrails and outcome dispositions.

## Control ownership

- ROLE-OPS-005 owns operational implementation of CTRL-ID, CTRL-ISO, CTRL-TOOL and platform portions of CTRL-AUD and CTRL-INC.
- ROLE-OPS-006 owns context delivery mechanisms and developer-experience evidence, while source owners own source truth.
- ROLE-OPS-007 owns architecture requirements, semantic review and architecture fitness controls.
- ROLE-OPS-008 owns security, risk, compliance, data and incident control decisions.
- ROLE-OPS-009 owns product requirements and acceptance evidence.
- The requirement owner judges whether a control covers the requirement. A platform owner cannot self-certify business or risk sufficiency.

## Handoffs and escalation

Product intent conflict stops at ROLE-OPS-009. Architecture conflict stops at ROLE-OPS-007. Security or regulatory uncertainty stops at ROLE-OPS-008. Platform capability failure stops at ROLE-OPS-005. Context usability and recurring repository friction go to ROLE-OPS-006. Conflicts crossing these domains go to ROLE-ENT-001 with each original owner retaining their decision.

## Verification

Every control register entry names one owner; each decision maps to one domain; conflicting decisions remain separate and apply the more restrictive result; product intent is authenticated by ROLE-OPS-009; role substitutions and delegates are explicit and time-bound.

