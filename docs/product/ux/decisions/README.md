# UX Decision Register

## Purpose

This register is the authoritative index of material product-experience, interaction and visual-design decisions.

Read every Accepted record that affects the active issue before producing UX or UI work.

## Records

### DEC-UX-001: Establish architecture before visual design

- Status: Accepted
- Decision date: 11 August 2026
- Scope: Gate 6 and later UX or UI work
- Record: [0001-architecture-before-visual-design.md](0001-architecture-before-visual-design.md)
- Result: The initial visual-first attempt is rejected. Product model, lifecycle, navigation, state scope, content hierarchy, interaction sequence, responsive order and structural wireframes must be approved before new high-fidelity visual exploration.

### DEC-UX-002: Use an adoption initiative as the durable workspace model

- Status: Accepted
- Decision date: 11 August 2026
- Scope: Gate 6.1 product model, lifecycle and state scope
- Record: [0002-adoption-initiative-product-model.md](0002-adoption-initiative-product-model.md)
- Result: Use the adoption initiative as the durable workspace, use adoption increments for bounded changes, bind state and authority to exact scope, support parallel lifecycle stages and keep evidence conclusions separate from authority.

### DEC-UX-003: Use decision-led durable navigation and single-owner screen responsibilities

- Status: Accepted
- Decision date: 11 August 2026
- Scope: Gate 6.2 navigation, screen responsibilities and task flows
- Record: [0003-decision-led-durable-navigation.md](0003-decision-led-durable-navigation.md)
- Result: Separate journey-led public guidance from a decision-led initiative workspace. Use durable destinations for Decisions, Opportunities, Adoption Increments, Governed Practices, Evidence, Risks and Remediation, and Reports. Preserve exact scope, canonical source ownership, direct entry, post-pilot continuity and the same desktop and mobile information structure.

### DEC-UX-004: Put the decision and governing consequence before task detail

- Status: Proposed
- Decision date: 11 August 2026
- Scope: Gate 6.3 content priority, interaction sequence and responsive reading order
- Record: [0004-decision-consequence-content-hierarchy.md](0004-decision-consequence-content-hierarchy.md)
- Proposed result: Use a five-level content hierarchy led by the decision or governing consequence. Keep action boundaries, material evidence and authority in the primary path, separate Save, Interpret, Verify and Decide, and use one canonical semantic order across desktop and mobile.

## Adding a decision

1. Copy the [UX decision-record template](../templates/decision-record.md).
2. Assign the next unused DEC-UX identifier.
3. Add the Proposed record here.
4. Link it from the governing issue and pull request.
5. After review, record Accepted, Rejected or Superseded status.
6. Never reuse an identifier.
