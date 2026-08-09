# PROC-AST-003: Draft Delivery Documentation

## Purpose

Use AI to prepare a source-grounded documentation draft while a named human owns correctness, sensitivity review, approval and publication.

## Use when

An approved Assisted Work pilot needs a draft of internal technical, operational, testing, architecture, decision or delivery documentation from authorized sources.

## Do not use when

The document category is prohibited, the destination or audience is unknown, authoritative sources are unavailable, publication requires AI authority, or the content includes data that the approved tool and route may not process.

## Accountable owner

The named human document owner responsible for final accuracy and publication.

## Participants

- Document owner and required technical reviewers.
- Source, data, security, privacy, legal or communications owners as applicable.
- Repository and publication-system owners.
- AI assistant operating with draft-only authority.

## Preconditions

- PROC-PILOT-002 approves the team, use, sources and Assisted Work authority.
- The document type, audience, destination, classification and retention rule are explicit.
- A human document owner and required approvers are assigned.
- Sources and the approved AI processing route pass applicable controls.

## Inputs

- Document objective, audience, type, template and acceptance criteria.
- Versioned authoritative sources and source owners.
- Classification, handling, publication and retention rules.
- Existing document version and change request when revising.
- Applicable terminology, decisions and writing standards.

## Actions

1. **The document owner defines the assignment.** Record purpose, audience, document type, destination, classification, template, scope, exclusions and approval route.
2. **The source owner approves the source set.** List authoritative source versions and remove or mask content the approved AI route may not process.
3. **The AI assistant builds a source map.** Associate each intended section and material claim with an authorized source. Mark uncovered claims as gaps.
4. **The AI assistant drafts in a non-authoritative location.** Apply the approved structure and terminology. Preserve source references and visibly label assumptions, uncertainty, conflicts and placeholders.
5. **The AI assistant performs a bounded consistency pass.** Check names, identifiers, versions, links, requirements and statements against the approved source set. Do not invent missing evidence.
6. **The document owner checks substantive accuracy.** Verify every material claim, example, instruction and limitation against source evidence and correct or reject unsupported content.
7. **Required reviewers check their domains.** Security, privacy, legal, compliance, architecture, operations or communications reviewers approve or return findings according to classification.
8. **The document owner resolves findings.** Record accepted, revised, deferred and rejected suggestions and obtain required approvals on the final candidate.
9. **An authorized human publishes.** Move the approved content to its destination, apply access and retention settings, and record version, approvers and publication time.
10. **The owner verifies the published result.** Confirm content, links, permissions, classification and version match the approved candidate.

## Required human decisions

- The document owner decides scope, accuracy, adequacy and readiness to publish.
- Source and domain owners decide whether sources and claims are valid.
- Required approvers decide sensitivity, legal, compliance and audience suitability.
- An authorized human performs publication and access decisions.

## Outputs

- Source map and authorized source-set record.
- AI-assisted draft with visible uncertainties and placeholders.
- Review findings and human dispositions.
- Approved publication candidate.
- Publication record containing version, destination, audience, permissions and approvers.

## Verification

- Material claims resolve to versioned authoritative sources.
- The human document owner attests to final accuracy.
- Required sensitivity and domain reviews pass.
- AI never publishes, approves or changes audience permissions.
- The published document matches the approved candidate and has correct access controls.
- Unsupported content, hidden instructions and sensitive leakage are absent.

## Stop conditions

Stop when ownership, sources, classification, destination, audience or approval requirements are unclear; when sensitive or prohibited content enters an unapproved route; when sources conflict materially; or when a claim cannot be verified. Contain any exposed content and use the incident route when required.

## Completion criteria

- Sources, draft, review findings, dispositions and approval are retained.
- A named human accepts accuracy and publication responsibility.
- Publication is performed by an authorized human through an approved destination.
- Published content and access settings are independently checked.
- Remaining limitations and review or expiry triggers are visible to readers.

## Measures

Record unsupported claims found in review, sensitive-content stops, correction effort, review cycle time, publication defects and downstream rework attributed to inaccurate documentation. Draft speed alone does not demonstrate value.

## Next procedures

- PROC-AST-001 or PROC-AST-002 when source understanding or requirement intent is inadequate.
- An approved Assisted Work test-suggestion or code-review procedure.
- The incident procedure when prohibited disclosure or publication occurs.
- PROC-READY-001 when repeated source, classification or review failures invalidate readiness.

## Applicable principles and controls

- PRIN-001 through PRIN-005 and PRIN-007 through PRIN-011 as applicable.
- CTRL-ACC, CTRL-AUTH, CTRL-EVID, CTRL-PREC, CTRL-CTX, CTRL-EXC and CTRL-LEARN controls.
- CTRL-STATE-AST-001 through CTRL-STATE-AST-005.
- The applicable CTRL-BASELINE profile and PROC-PILOT-002.

