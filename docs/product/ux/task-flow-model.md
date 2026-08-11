# Gate 6.2 Task Flow Model

## Status

Proposed for product-owner approval under [Gate 6.2](https://github.com/scott-wojan/enterprise-ai-sdlc/issues/149).

This model tests the proposed navigation and screen responsibilities against representative work before, during and after a pilot. It defines movement, decision boundaries and results. It does not define screen layout, visual treatment, storage or platform behavior.

Read with the [Navigation Model](navigation-model.md), [Screen Responsibility Map](screen-responsibility-map.md) and proposed [DEC-UX-003](decisions/0003-decision-led-durable-navigation.md).

## Flow rules

Every flow follows these rules:

- A public page explains before the workspace asks.
- The adoption initiative remains the durable workspace context.
- An opportunity, increment, practice or decision never becomes an unexplained global context.
- A person can enter material work directly without completing unrelated pages.
- Missing prerequisites are visible and block only the action that depends on them.
- Saving information does not grant authority.
- A system consequence may restrict immediately but cannot approve.
- Verified remediation permits reassessment but does not restore authority.
- Evidence conclusion and accountable authority decision remain separate.
- Leadership investment cannot override category authority.
- A report is a derived view and cannot change source records.
- Browser history and Resume preserve meaningful context.
- Mobile follows the same sequence in one-column reading order.

## Flow 1: First-time orientation to informed readiness entry

### Entry condition

A person has been asked to help the organization adopt AI in software delivery and arrives without product or workspace context.

### Flow

1. **Home** explains the adoption pressure, the problems the playbook addresses, who must participate, the complete journey and the standard of tangible value across the SDLC and total cost.
2. The person selects **Assess whether we are ready** from the starting choices.
3. **Adoption Journey, Stage 2** explains that readiness is an accountable decision, not a score or questionnaire completion.
4. The person reviews required ownership, baseline, evidence, operating boundaries, stop authority and possible hard stops.
5. The person chooses **Apply this readiness guidance**.
6. **Apply the Playbook** states the proposed decision, expected readiness output, exact kind of scope, required participants, evidence, data-handling limits and consequences of missing prerequisites.
7. The person chooses an existing initiative or begins creation of a named initiative. The platform details remain undecided.
8. The workspace opens the relevant readiness decision area, with initiative identity, exact proposed increment scope, current Foundation posture and missing prerequisites visible.
9. If the person lacks authority or required participants are absent, they may prepare information but cannot submit an accountable decision.

### Decision and authority boundary

Entering the workspace authorizes nothing. Readiness is decided only after the required responses, evidence and accountable review exist.

### Completion result

The person knows why the assessment exists, what it will produce, who must participate and which readiness decision is now being prepared.

### Failure prevented

The product does not surprise a first-time reader with a workbook, form or unexplained list of questions.

## Flow 2: Resume an existing blocked readiness decision

### Entry condition

An initiative already exists. A proposed first pilot is blocked because material readiness conditions are not satisfied.

### Flow

1. The person chooses **Resume existing initiative** from a public destination or returns through a saved workspace link.
2. Resume checks whether the last incomplete material decision is current and accessible.
3. If current, the person lands in that **Material Decision Unit** at the unresolved decision section. If it is stale, completed or superseded, the person lands on **Initiative Overview**.
4. The workspace context identifies the initiative, proposed pilot scope, Foundation posture, Blocked gate decision, active hard stops and accountable next decision.
5. The decision unit states what may continue, what must stop and why the proposed Bounded Change remains unauthorized.
6. The person can move directly to each blocking hard stop, missing evidence item or remediation without moving through earlier favorable responses.
7. After reviewing or updating permitted preparatory information, the person returns to the same decision context through browser history or a source link.
8. The decision remains Blocked until a new accountable decision supersedes it.

### Decision and authority boundary

Resume restores working context, not authority. Draft updates do not change the governing blocked decision.

### Completion result

The person reaches consequential incomplete work quickly and can identify the exact owners and evidence required to proceed.

### Failure prevented

Resume does not send the person to Home, the top of a long page or “step 1 of 19.”

## Flow 3: Inspect a hard stop and required remediation

### Entry condition

A response or evidence review shows that an enforceable stop path has not been demonstrated for the proposed pilot identities.

### Flow

1. The triggering response is interpreted inside the **Material Decision Unit**.
2. The same context immediately shows: **Blocked: stop capability is not demonstrated.**
3. The consequence names the exact identities and proposed pilot action affected.
4. It states that planning and stop-path testing may continue, while pilot access and live AI-assisted delivery must not begin.
5. The person opens the linked **Hard Stop** source record in **Risks and Remediation**.
6. The hard-stop view shows the trigger, affected scope, stopped action, containment, declaration source and current status.
7. The linked remediation specifies the platform owner, corrective action, due date, required exercise evidence, independent verifier and reassessment owner.
8. The person may acknowledge containment, assign permitted work or add completion evidence.
9. The person returns to the readiness decision through the linked source relationship.

### Decision and authority boundary

The deterministic system consequence can block the affected launch action immediately. It cannot declare the condition remediated or approve launch.

### Completion result

The stopped action, allowed work, owner, evidence and reassessment path are unambiguous and traceable.

### Failure prevented

A hard stop is not reduced to a warning, buried in a report or averaged with favorable readiness conditions.

## Flow 4: Reassess after verified remediation

### Entry condition

The stop-path exercise has been completed and independently verified. The prior blocked readiness decision still governs.

### Flow

1. The verifier records completion evidence against the remediation.
2. The remediation becomes **Verified** and the hard stop becomes **Cleared for reassessment**.
3. The affected increment remains in Foundation posture with the prior Blocked decision visible.
4. The person chooses **Begin reassessment** from the remediation or prior decision.
5. A new **Material Decision Unit** opens with the same exact scope, links to the prior decision, new evidence snapshot and any changed conditions.
6. The product explains that verified remediation did not restore authority.
7. Required participants review the new evidence and unresolved risks.
8. The accountable owner records Blocked, Remediation required, Approved with conditions or Approved.
9. The new decision supersedes the prior decision only within its exact effective scope and period.
10. If approval permits increment design or launch preparation, the product routes to that work and keeps any ungranted action blocked.

### Decision and authority boundary

Verification makes reassessment possible. Only the new authenticated human decision can change authority.

### Completion result

The historical blocked decision remains intact, the remediation is traceable and current authority comes from one new decision.

### Failure prevented

A checkmark, uploaded file or closed remediation cannot silently restart work.

## Flow 5: Move to an explicitly later completed-pilot scenario

### Entry condition

A validator is reviewing the Gate 6 vertical slice. The readiness scenario is blocked, but the evaluation experience also needs to be tested.

### Flow

1. From the blocked readiness output, the validator chooses **Inspect later completed-pilot scenario**.
2. The **Explicit Later-Scenario Transition** explains that this is a separate representative state, not an automated continuation of the blocked work.
3. It states the hypothetical intervening chronology:
   - remediations were verified;
   - a new readiness and launch decision was recorded;
   - bounded pilot authority took effect;
   - the pilot ran and ended;
   - an evidence snapshot was frozen.
4. The validator can inspect these assumptions or return to blocked readiness.
5. The validator confirms entry into the later scenario.
6. **Pilot Evaluation** opens for the completed first pilot, with completed work status, ended pilot authority, no expansion authority and decision pending.
7. Moving back restores the blocked readiness scenario without rewriting either state.

### Decision and authority boundary

The transition mutates no real initiative record and grants no authority. It is clearly labeled prototype scenario navigation.

### Completion result

Validators can assess evaluation behavior without the interface falsely claiming that readiness, launch and operation happened automatically.

### Failure prevented

A demo shortcut cannot teach users that remediation or time automatically advances organizational authority.

## Flow 6: Evaluate negative net value and record an accountable restriction

### Entry condition

A first pilot is complete. Implementation was locally faster, but review, correction, elapsed delivery time, defects, churn, support effort, participant experience and total cost became materially worse.

### Flow

1. **Pilot Evaluation** identifies the exact pilot, comparison boundary and frozen evidence snapshot.
2. The person reviews comparability and evidence coverage across planning, implementation, review, testing, security, release, operations, rework, participant experience and total cost.
3. The local implementation improvement remains visible with its scope.
4. Material downstream deterioration and higher total cost receive higher decision priority.
5. Missing or disputed evidence is shown before a conclusion can be recorded.
6. Required reviewers challenge the evidence package and record dissent or limitations.
7. The accountable evidence review records **Negative net value demonstrated**.
8. The product states that the conclusion itself does not change AI authority.
9. The adoption owner and affected category owners open a separate authority decision.
10. They record restriction from the completed Bounded Change to **Assisted Work** for the exact future scope, with prohibited state-changing actions and permitted lower-risk work.
11. The product shows that expansion is not eligible.
12. The initiative Overview, increment detail and relevant risks now derive their current summaries from these source decisions.

### Decision and authority boundary

The evidence conclusion states what can be claimed. The separate accountable decision changes authority. Neither can be replaced by a generated recommendation.

### Completion result

The organization has a defensible negative-value conclusion, an exact restriction, a clear list of permitted and prohibited activity and a traceable next investment decision.

### Failure prevented

Faster coding, more stories closed or high tool usage cannot conceal a worse end-to-end result.

## Flow 7: Present the leadership investment decision

### Entry condition

The pilot evaluation found negative net value and category owners restricted the use case to Assisted Work. Leadership must decide whether to fund remediation or stop further investment.

### Flow

1. The person opens the pending item from **Initiative Overview** or **Decisions**.
2. **Leadership Decision** presents the exact investment choice and recommendation before report detail.
3. It shows the complete-SDLC and total-cost conclusion, current restriction, active risks, evidence limitations and dissent.
4. It distinguishes actions leadership may fund from category authority leadership cannot override.
5. Available choices are:
   - fund bounded remediation;
   - stop further investment;
   - continue only already authorized lower-risk activity within an explicit cost boundary.
6. For each choice, the product explains consequence, owner, cost boundary, evidence needed and next decision.
7. The leader opens source evidence or decisions where needed.
8. The authorized investment owner records the choice, rationale, scope, conditions, review date and dissent.
9. If remediation is funded, a bounded remediation plan is created without restoring Bounded Change authority.
10. A reviewed leadership report is generated from the frozen sources and linked to the decision.

### Decision and authority boundary

The investment decision controls funding within the leader's authority. It cannot waive security, legal, quality, release, service or other restrictions.

### Completion result

Leadership receives a decision-ready record of whether to invest, what remains restricted and what proof is required next.

### Failure prevented

A polished report cannot turn a negative evaluation into an expansion recommendation or silently override category owners.

## Flow 8: Start or inspect another increment after the first pilot

### Entry condition

A first pilot is completed, restricted or stopped. The organization is considering a repeat pilot, remediation test or bounded expansion.

### Flow

1. The person opens the completed pilot under **Adoption Increments**.
2. Its history, evaluation and final decisions remain available.
3. The person returns to the linked **Opportunity** or chooses **Propose another bounded increment**.
4. The product asks which kind of change is proposed and explains that the new increment receives its own scope and decisions.
5. The person defines the new team, repository, work type, data, tool, environment, SDLC activity, authority and evidence boundary.
6. The product compares the new scope with the prior increment and identifies which evidence and approvals may or may not apply.
7. Any active restrictions or unresolved hard stops appear before proposal work.
8. The proposal is stored as a new increment in **Adoption Increments**.
9. Required selection, readiness or expansion decisions open in **Decisions**.
10. The completed pilot remains historical and is never overwritten by the new proposal.

### Decision and authority boundary

Creating another increment authorizes nothing. A material scope change requires new assessment and accountable decisions.

### Completion result

The organization can continue iteratively without inventing a new workspace, treating the first pilot as permanent approval or losing history.

### Failure prevented

Post-pilot navigation does not collapse into “pilot complete,” a dead-end report or one organization-wide maturity state.

## Flow 9: Review an operating governed practice

### Entry condition

One AI-enabled practice has been accepted into normal operation for an exact scope. Its periodic review is due or a material condition has changed.

### Flow

1. The owner opens the practice from **Governed Practices** or a due decision from **Initiative Overview**.
2. The practice view identifies exact current authority, operating boundary, owner, expiry, active conditions and current restrictions.
3. It presents evidence health, complete-SDLC outcomes, total cost, incidents, near misses, exceptions, participant conditions and unresolved risks.
4. A failed condition, expired authority or critical new risk creates the defined restrictive consequence before the review decision.
5. The owner opens the periodic **Material Decision Unit**.
6. Required category owners review their evidence and decisions.
7. The accountable owner records one outcome:
   - continue within current boundary;
   - continue with conditions;
   - restrict or pause;
   - create a bounded improvement increment;
   - retire the practice.
8. A proposed improvement opens as a new adoption increment with its own scope and evidence plan.
9. The governed practice history retains the prior decision and operating period.
10. Reports update as derived views after source decisions are recorded.

### Decision and authority boundary

Normal operation is not permanent approval. Expiry and critical conditions can restrict immediately; continuation or changed authority requires accountable review.

### Completion result

The same initiative structure supports ongoing operation, improvement, restriction and retirement after pilots end.

### Failure prevented

The product does not end at expansion or present a governed practice as an irreversible maturity achievement.

## Cross-flow navigation checks

### Initiative context

Every workspace step keeps the initiative identifiable before local object navigation.

### Exact scope

Every decision, consequence, evidence conclusion and authority statement identifies the scope it affects. A local result never appears global.

### Direct movement

A person can move between a decision, its evidence, hard stop, remediation, object and report through explicit source links. They do not need a Next button.

### Prerequisites

A deep link to later work shows missing prerequisites and lets preparatory work continue where safe. It does not send the person through unrelated pages.

### Post-pilot continuity

Completed and stopped increments remain under Adoption Increments. New increments and governed practices remain inside the same initiative.

### Mobile behavior

On mobile, each flow preserves this reading order:

1. initiative and exact scope;
2. decision or consequence;
3. what may continue and what must stop;
4. required action and owner;
5. response and evidence;
6. supporting explanation and history;
7. next destination.

No step depends on a permanent sidebar, wide table, hover or horizontal navigation.

## Flow validation questions for Gate 6.3 and 6.4

For each later wireframe and prototype flow, validation must ask:

- Can the participant state which initiative and exact scope they are viewing?
- Can they identify the decision required now?
- Can they distinguish current authority from work status and evidence conclusion?
- Can they find active hard stops without opening a report?
- Can they state what may continue and what must stop?
- Can they identify the accountable owner and next decision?
- Can they return to source evidence and decisions?
- Can they explain why saving or remediation verification did not grant authority?
- Can they continue after a pilot without leaving the initiative structure?
- Can they perform the same task on a narrow mobile viewport?
