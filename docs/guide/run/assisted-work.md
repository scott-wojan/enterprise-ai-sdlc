# Use AI for Assisted Work

## Why am I here?

Use AI to explain, analyze, draft, suggest or review while a person remains responsible for applying every change.

**Owner:** Person performing the work  
**Participants:** Product or requirements owner, reviewer and pilot support as needed  
**Time:** The normal work-item cadence  
**Bring:** An eligible work item, approved context, acceptance criteria and active pilot boundary  
**Leave with:** Human-accepted work and evidence about usefulness, errors, rework and controls

## Use this mode first

Assisted Work is the default operating mode. The AI may produce advice or a draft, but it does not modify the authoritative source, approve the result or release anything.

## For each work item

1. Confirm that the work type is in the charter.
2. Confirm that the context and data are allowed.
3. State the task, expected output, constraints and acceptance criteria.
4. Ask the AI to identify uncertainty, missing context and assumptions.
5. Inspect cited sources and material claims.
6. Check the output using the normal professional and engineering process.
7. Revise, reject or apply the output yourself.
8. Preserve the ordinary review and release path.
9. Record only material evidence: usefulness, significant errors, rework, control events and unexpected effort.

## Select the appropriate procedure

- [Explain a codebase](../../procedures/assisted/explain-codebase.md)
- [Analyze requirements](../../procedures/assisted/analyze-requirements.md)
- [Draft delivery documentation](../../procedures/assisted/draft-documentation.md)
- [Suggest tests](../../procedures/assisted/suggest-tests.md)
- [Assist code review](../../procedures/assisted/assist-code-review.md)
- [Summarize an incident](../../procedures/assisted/summarize-incident.md)

Use the procedure for the work being done. Do not treat generic prompting advice as a substitute for acceptance criteria or verification.

## Stop the work item if

- required context is unavailable or contradictory;
- sensitive or unapproved information would be exposed;
- the AI claims access, execution or verification it does not have;
- the output cannot be checked by a qualified person;
- the person is tempted to apply a change they do not understand;
- the task has drifted outside the charter.

Escalate recurring problems through the weekly review. A single person repeatedly repairing the same failure is evidence of a system problem.

See the [complete Assisted Work example](../../examples/assisted-work.md).

**Previous:** [Launch and onboard the team](launch-and-onboard.md)  
**Next:** [Use AI for a Bounded Change](bounded-change.md), only if that mode is approved; otherwise continue to the [weekly operating rhythm](weekly-rhythm.md).
