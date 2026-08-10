# Enterprise AI SDLC Product Contract

## Status

Draft for explicit approval under [Gate 1](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/132) of the [product-recovery epic](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/131).

This contract defines what the product must accomplish before information architecture, visual design, platform selection, or production implementation continues. It does not change the current production site.

## Product purpose

The Enterprise AI SDLC Playbook is a public, vendor-neutral adoption system for consulting teams and enterprises.

It helps an organization decide where and how to introduce AI into software delivery, establish the conditions required for responsible use, evaluate evidence from real work, and expand adoption only when tangible value and acceptable risk have been demonstrated.

The product covers the journey from leadership pressure and disconnected experimentation through controlled pilots, bounded expansion, governed workflows, selective orchestration, operation, and continuous improvement.

The product does not assume that maximum automation is the goal. The appropriate level of AI authority may differ by organization, team, repository, work type, data class, and software-delivery activity.

## Problem being solved

Organizations are being asked to adopt AI before they have shared answers to fundamental operating questions:

- What problems are worth solving with AI?
- What types of work are appropriate to delegate to AI?
- Who remains accountable for AI-generated output and consequential decisions?
- What information, repositories, systems, tools, credentials, and execution authority should AI be allowed to access?
- How will AI-generated analysis, documentation, code, tests, and changes be validated and approved?
- What existing delivery, quality, security, release, and operational controls must remain in force?
- What evidence will demonstrate tangible value across the complete software-delivery system?
- What happens when local speed increases but review, testing, rework, defects, security exposure, operations, or cost become worse?
- What conditions should restrict, pause, or stop adoption?
- What must leadership decide before adoption continues or expands?
- How does the organization progress from individual assistance to increasingly integrated AI-enabled delivery without introducing uncontrolled authority?

Without a shared system for answering these questions, adoption becomes a collection of tool purchases, individual experiments, activity measures, and unsupported productivity claims.

## Product promise

A person using this product should be able to:

1. Understand why responsible AI adoption requires more than selecting a tool.
2. Identify the people who own adoption, delivery, control, evidence, and investment decisions.
3. Assess whether a specific organization, team, use case, and operating mode are ready.
4. Identify missing conditions, material risks, restrictions, and hard stops.
5. Select appropriate AI use cases across the software-delivery lifecycle.
6. Design and run a controlled pilot with explicit boundaries, evidence, and stop conditions.
7. Determine whether observed changes represent tangible saved value across the complete delivery system.
8. Produce a defensible recommendation to continue, restrict, remediate, expand, or stop.
9. Expand one bounded dimension at a time when evidence supports it.
10. Establish and continuously improve governed, increasingly integrated AI-enabled delivery.

## Primary audiences and their jobs

### Executive sponsor

- Own the enterprise intent and investment decision.
- Ensure accountable decision owners are available.
- Decide whether evidence supports continued investment, restriction, expansion, or termination.
- Remove organizational barriers without overriding material risk or control failures.

### Enterprise AI adoption owner

- Coordinate the adoption journey across organizational boundaries.
- Maintain the approved operating model, decision rules, evidence expectations, and expansion boundaries.
- Present current posture and unresolved decisions to leadership.

### Pilot or program lead

- Coordinate readiness, pilot design, operation, remediation, evidence, and decision activities.
- Ensure that work stops when approved conditions no longer hold.
- Keep the exact scope and current decision visible.

### Engineering and delivery leadership

- Determine whether teams, repositories, build processes, tests, review practices, and release paths can support the proposed use.
- Identify transferred effort, rework, code churn, quality changes, and delivery constraints.

### Product leadership

- Define the user or business outcome.
- Ensure that delivery activity is connected to an outcome worth improving.
- Reject activity measures that do not translate into product or business value.

### Architecture and platform leadership

- Define approved context sources, tooling, integration patterns, isolation, observability, and technical boundaries.
- Ensure that the delivery environment can enforce the approved level of AI authority.

### Security, risk, legal, and compliance partners

- Identify material exposure, policy constraints, approval needs, data restrictions, and stop conditions.
- Verify that restrictions can be enforced and incidents can be contained.

### Quality engineering and verification owners

- Define how AI-generated outputs will be independently checked.
- Determine whether quality, defect, rework, maintainability, and testing outcomes remain acceptable.

### Release and operations owners

- Preserve accountable release decisions.
- Evaluate reliability, change failure, recovery, support, and incident effects.

### Measurement and finance owners

- Establish trustworthy baselines and comparison methods.
- Account for total cost and total saved value, including hidden and transferred effort.
- Prevent unsupported productivity or economic claims.

### Delivery-team participants

- Use AI only within the approved scope.
- Check outputs using the normal professional and engineering process.
- Report uncertainty, failures, rework, friction, control weaknesses, and unexpected cost without pressure to manufacture a success story.

### Consulting teams

- Adapt the vendor-neutral method to a client's organization without weakening its decision, evidence, risk, or accountability requirements.
- Preserve traceability between client-specific guidance and the core product.

## Adoption scope

The product covers these stages:

1. **Understand and align:** Clarify the mandate, problem, intended outcomes, decision rights, participants, and constraints.
2. **Assess readiness and establish baselines:** Determine whether organizational, engineering, context, control, measurement, and team conditions support the proposed work.
3. **Select use cases:** Identify work where AI may create value and reject work whose risk, ambiguity, authority, or evidence conditions are unsuitable.
4. **Design the pilot:** Establish scope, operating mode, boundaries, controls, baseline, evidence, support, stop conditions, and decision date.
5. **Prepare governance and technical boundaries:** Configure and test access, isolation, verification, approval, logging, revocation, recovery, and incident paths.
6. **Run and learn:** Apply the approved mode to real work, capture material evidence, inspect failures, and adjust within the approved boundary.
7. **Evaluate and report:** Compare the result with the baseline, account for total effects and costs, and produce an accountable decision.
8. **Expand incrementally:** Add one bounded use case, team, repository, data class, tool, software-delivery activity, or authority dimension.
9. **Establish governed workflows:** Integrate repeatable AI-enabled practices into approved delivery workflows with explicit control and evidence.
10. **Introduce selective orchestration:** Permit carefully bounded coordination or execution only where stronger readiness, containment, verification, recovery, and evidence support it.
11. **Operate and improve:** Reassess outcomes, controls, economics, participant experience, incidents, changing tools, and changing organizational conditions.

A pilot is the first executable adoption module. It is not the entire product.

## Software-delivery scope

The product must address AI use in:

- product discovery and planning;
- requirements and analysis;
- architecture and design;
- implementation;
- testing and quality engineering;
- security and compliance;
- release and change management;
- production operations;
- incident response and organizational learning.

Guidance must explain how suitability, authority, evidence, verification, and risk differ across these activities. Success in one activity does not authorize another.

## Required outputs

The product must help users produce:

- an adoption intent and ownership decision;
- a current-state and readiness assessment;
- a risk, evidence-gap, and remediation register;
- a use-case selection and rejection record;
- an approved pilot charter;
- a context, access, authority, and control boundary;
- a baseline and evidence plan;
- a team onboarding and support record;
- a weekly pilot health report;
- an incident, pause, remediation, and restart record;
- a tangible-value assessment;
- a continue, restrict, expand, or stop decision memorandum;
- a leadership briefing;
- a bounded next-increment plan;
- an integrated-adoption roadmap.

The product must assemble these outputs from contextual decisions and evidence. It must not require users to interpret a blank workbook before they understand the guidance.

## Tangible net-value and evidence model

### Governing principle

The product must help the organization prove tangible saved value across the complete software-delivery system.

Faster output in one activity is not a benefit when equal or greater effort, risk, delay, or cost is created elsewhere. AI usage, generated volume, acceptance rates, completed prompts, lines of code, story counts, and isolated cycle-time changes are activity measures. They are not sufficient proof of value.

The product must not describe an outcome as increased productivity unless the organization can demonstrate that the complete system produced more valuable results with lower total effort or cost, without unacceptable deterioration elsewhere.

### Evidence boundaries

Value evidence must examine the complete affected path, including:

- discovery and requirements effort;
- architecture and design effort;
- implementation effort;
- review and approval effort;
- testing and quality-engineering effort;
- security review and remediation;
- release and change effort;
- production support and operational effects;
- defect correction and rework;
- code churn and maintainability effects;
- team cognitive load, confidence, and hidden coordination;
- token consumption;
- model and tool licenses;
- infrastructure and integration cost;
- enablement and training;
- governance, logging, review, and audit;
- support, incident, recovery, and remediation cost.

The exact boundary must be declared before a value claim is made.

### Required value dimensions

#### Delivery flow

Measure the total elapsed time and human effort required to move comparable work through the affected delivery path. Do not report only the activity where AI was used.

#### Quality

Examine acceptance quality, review findings, rework, defects, escaped defects, test effectiveness, maintainability, code churn, and recurring corrections.

#### Security and control

Examine security findings, policy exceptions, access violations, evidence gaps, approval failures, boundary failures, and remediation work.

#### Operations

Examine change failure, incidents, reliability, recovery, support load, and operational toil.

#### Product and business outcomes

Determine whether the work produced a useful customer, user, service, risk-reduction, or business outcome. More software output is not automatically more value.

#### Team experience and capability

Examine cognitive load, confidence, learning, frustration, review burden, dependence on a small number of experts, and whether people can understand and support the result.

#### Economics

Account for token, license, infrastructure, integration, enablement, review, rework, support, governance, incident, and opportunity costs. Savings cannot be claimed from labor time alone when the total cost boundary is incomplete.

### Rules for making a value claim

A tangible-value claim requires:

1. A trustworthy baseline for comparable work.
2. A declared start and end boundary for the comparison.
3. Evidence from the activities affected upstream and downstream.
4. Quality, security, operational, and team constraints.
5. Total material cost, including AI-specific and transferred costs.
6. An explanation of important differences or outside factors affecting the comparison.
7. A statement of confidence, limitations, and missing evidence.
8. Independent participation from someone other than the person or team that performed the AI-assisted work.

If material downstream effects or costs are unknown, the result is **value not demonstrated**, not success.

### Examples

- If AI reduces implementation time but adds equal or greater review and correction time, tangible saved value has not been demonstrated.
- If more stories are closed while defects, security findings, code churn, rework, change failure, or support burden increase, the result is negative even when delivery activity increased.
- If time appears to be saved but token, platform, integration, enablement, review, and operational costs are unknown, an economic benefit cannot be claimed.
- If the complete delivery path becomes slower and more expensive, the outcome is a failure even if AI usage, generated output, or local completion speed increased.
- If total effort and elapsed time decrease while quality, security, operations, maintainability, team experience, and total cost remain acceptable or improve, tangible saved value may be supported, subject to evidence quality and attribution.

## Decision and hard-stop principles

- Material conditions govern the result. They cannot be averaged into a favorable score.
- An unknown material condition is an evidence gap, not a neutral answer.
- Positive speed or cost evidence cannot override material deterioration in quality, security, control integrity, recoverability, participant safety, or product outcomes.
- The most restrictive applicable policy, readiness condition, risk, or control result governs.
- A decision applies only to the exact approved team, use case, repository, data, tool, delivery activity, operating mode, and authority.
- Expansion must change one bounded dimension at a time.
- A person who generated or executed the work cannot be the only person determining its success.
- AI may support analysis but cannot own a consequential adoption, approval, release, expansion, or stop decision.
- The product must state what may continue, what must stop, who must act, and what evidence permits reassessment.

## Product experience

The product has two connected layers.

### Public guidance

Public guidance must:

- explain why the product exists before introducing assessments, roles, stages, or tools;
- be usable without creating a workspace;
- provide stable, directly addressable pages;
- explain concepts, decisions, evidence, risks, examples, and adoption stages;
- allow readers to explore without being forced through a wizard;
- expose detail when it becomes relevant without hiding essential reasoning.

### Adoption workspace

The adoption workspace must:

- introduce itself only after the user understands its purpose;
- capture responses beside the guidance that explains them;
- use response types appropriate to the decision;
- capture evidence, ownership, uncertainty, restrictions, and remediation;
- interpret responses through explicit, testable decision rules;
- show current posture, material risk, missing evidence, and permitted actions;
- generate usable outputs for teams and leadership;
- allow work to be resumed, reviewed, exported, and, when platform requirements justify it, shared.

Page completion is not readiness. Progress must represent completed decisions, supporting evidence, resolved remediation, and remaining blockers.

## Guidance and interaction standard

Every material decision unit must include:

1. The question or decision.
2. Why it matters.
3. The accountable owner.
4. Required participants.
5. Guidance for answering.
6. Good, weak, and unacceptable conditions.
7. The appropriate response control.
8. Supporting evidence.
9. The risk or decision rule.
10. Required remediation or restriction.
11. What may continue.
12. What must stop.
13. What evidence permits reassessment.
14. The output affected by the response.

The product must not use a free-form textarea when a structured response is required.

## Clear-language standard

Content must use clear, direct language.

It must not rely on:

- unexplained jargon;
- slogans;
- buzzwords;
- vague claims;
- unnecessary abbreviations;
- methodology labels that readers must already know;
- abstract nouns when a direct verb would be clearer;
- generic instructions such as “ensure alignment,” “drive productivity,” or “establish governance” without explaining what a person must do.

When a technical, legal, financial, security, or governance term is necessary:

1. Define it at first use.
2. Explain why it matters in this decision.
3. Give a concrete example.
4. Use the same term consistently.

A reader should not need to translate the product's language before acting.

## Written-response example standard

Every question that requires a typed response must provide:

- a bad or insufficient example;
- why that example is insufficient;
- a good example;
- why that example is useful;
- the minimum evidence or specificity required.

Example question:

**What outcome should this AI use case improve?**

Bad response:

> Improve developer productivity and deliver faster.

Why it is insufficient:

- It does not identify the affected work.
- It does not define the complete delivery boundary.
- It does not describe how improvement will be observed.
- It does not protect quality, security, operations, team experience, or cost.
- It cannot support a defensible success or failure decision.

Good response:

> For authentication defect corrections in Service A, determine whether AI assistance reduces the total elapsed time and human effort from accepted defect through production release. Include analysis, implementation, review, security checking, testing, release, and early production support. Do not treat the result as successful if defects, security findings, code churn, review burden, change failure, or total delivery cost increase.

Why it is useful:

- It identifies the affected work and system.
- It defines the start and end of the comparison.
- It includes upstream and downstream effort.
- It names material constraints.
- It supports baseline selection and evidence collection.
- It can result in a clear continue, restrict, remediate, or stop decision.

“Unknown” or “not yet established” must remain available when honest. The product must then explain the evidence gap and what is required to resolve it.

## Initial validated release

The first validated experience will cover one vertical slice:

1. A reader arrives under pressure to establish an AI adoption approach.
2. The product explains why it exists and what decisions it supports.
3. The reader begins a readiness assessment.
4. The reader evaluates executive sponsorship, pilot ownership, baseline evidence, engineering capability, and control readiness.
5. A response triggers a material risk or hard stop.
6. The product explains the consequence and permitted activity.
7. The product provides remediation and reassessment requirements.
8. The product generates leadership-ready guidance.
9. The reader can save or export the result.

This vertical slice must use realistic content and functioning interactions before the wider product is implemented.

## Explicit non-goals for the initial validated release

The initial vertical slice will not provide:

- the complete adoption journey;
- every canonical control or procedure;
- platform-specific implementation instructions;
- AI model or tool selection;
- automated maturity scoring;
- a final collaboration or authentication architecture;
- a polished final visual design;
- a complete enterprise system of record;
- unsupported predictions of savings or return on investment.

## Validation standard

The initial experience is valid only when representative users can:

- explain why the product exists;
- determine whether it applies to their situation;
- identify the decision they are being asked to make;
- understand why each material question matters;
- provide a response with appropriate evidence;
- distinguish a good response from a weak one;
- identify a material risk or evidence gap;
- understand a restriction or stop recommendation;
- explain what may continue and what must stop;
- state what is required before reassessment;
- communicate the result to leadership.

Build success, responsive rendering, link validation, and content completeness are necessary engineering checks. They are not evidence that the product is useful.

## Platform decision boundary

No framework, hosting platform, database, identity system, storage model, or deployment approach is approved by this contract.

The platform decision follows approval and validation of the vertical slice. It must account for:

- public access to guidance;
- response persistence;
- evidence sensitivity;
- multiple participants;
- permissions;
- approval history;
- auditability;
- report generation;
- portability;
- self-hosting or client adaptation;
- maintenance cost.

## Product governance

This contract is the controlling product document after explicit approval.

Every material feature, content module, decision rule, response, report, and validation scenario must trace to:

- a defined audience;
- a user job;
- a supported decision;
- a required output;
- a product-experience requirement;
- or a validation requirement.

Material changes to product purpose, scope, evidence rules, decision principles, or experience requirements require a recorded decision.

Implementation must not silently redefine the product. The repository structure and canonical methodology remain source material, but they do not automatically determine the end-user information architecture.
