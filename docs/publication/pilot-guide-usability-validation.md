# Pilot Guide Usability Validation

## Scope

This is a structured walkthrough of the version 0.1.1 reading path. It is not a claim of external user research.

## Sponsor walkthrough

### Questions

- Can the sponsor understand what the product is and what decision a pilot informs?
- Is it clear that the pilot is gradual and vendor-neutral?
- Can the sponsor identify the required accountable people?
- Can the sponsor see that stopping is a valid outcome?

### Result

The Start Here and Understand pages answer each question directly. The first action is to name the pilot lead. Tool selection is explicitly deferred. The final decision is evidence-backed and includes continue, restrict, expand or stop.

## Pilot-lead walkthrough

### Questions

- Can the pilot lead identify the complete preparation sequence?
- Is there one working surface?
- Are inputs, outputs, owners and stop conditions visible?
- Can the lead operate weekly and respond to problems?
- Is the final decision connected to a bounded next step?

### Result

The navigation exposes six ordered Prepare pages, six Run pages and three Decide pages. Each action page provides owner, participants, expected time, inputs, outputs, stop conditions and the next action. The Pilot Workbook consolidates the active operational records.

## Delivery-team walkthrough

### Questions

- Can a team member understand what AI may and may not do?
- Is Assisted Work usable without reading the repository?
- Are the additional Bounded Change gates visible?
- Can anyone stop unsafe or uncertain work?
- Is evidence capture proportionate?

### Result

The Run section provides separate Assisted Work and Bounded Change paths, keeps human acceptance and the normal release process explicit, allows anyone to stop affected work and uses exception-based evidence capture.

## Mobile and cognitive-load checks

- Primary pages use short sections and lists.
- No primary page uses a Markdown table.
- No page uses an ASCII diagram.
- Detailed identifiers and control mappings are kept outside the primary flow.
- The Start Here page exposes five sections and 22 numbered pages.
- Reference links appear at the point of need.

## Automated checks

The guide-specific validator checks page count, navigation completeness, required action-page content, internal identifiers, em dashes and Markdown tables. Existing repository validation checks relative links and the broader canonical content.

## Remaining validation

Run the guide with an independent sponsor, pilot lead and delivery team during a real adoption. Observe where readers pause, leave the guide, request interpretation, duplicate information or fail to produce an expected output. Record those observations in the workbook and revise the consumption layer without weakening the canonical source.
