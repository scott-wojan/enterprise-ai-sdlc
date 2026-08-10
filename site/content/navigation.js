export const phases = [
  {
    id: "understand",
    label: "1. Understand",
    promise: "Confirm a pilot solves a real problem.",
    pages: [
      ["what-this-helps-you-do", "What this helps you do"],
      ["consider-a-pilot", "Check whether a pilot makes sense"],
      ["default-pilot", "See the default pilot"],
      ["who-participates", "Know who must participate"]
    ]
  },
  {
    id: "prepare",
    label: "2. Prepare",
    promise: "Choose the work, owners, boundaries and evidence.",
    pages: [
      ["name-owners", "Name the owners"],
      ["choose-team-and-use-case", "Choose the team and use case"],
      ["assess-readiness", "Assess readiness"],
      ["agree-boundaries", "Agree the boundaries"],
      ["establish-baseline", "Establish a baseline"],
      ["complete-charter", "Complete the charter"]
    ]
  },
  {
    id: "run",
    label: "3. Run",
    promise: "Operate the pilot safely and learn each week.",
    pages: [
      ["launch-and-onboard", "Launch and onboard"],
      ["assisted-work", "Use AI for assisted work"],
      ["bounded-change", "Use bounded change when approved"],
      ["weekly-rhythm", "Run the weekly rhythm"],
      ["handle-problems", "Handle problems"],
      ["capture-evidence", "Capture evidence"]
    ]
  },
  {
    id: "decide",
    label: "4. Decide",
    promise: "Turn evidence into a continue, change or stop decision.",
    pages: [
      ["review-evidence", "Review the evidence"],
      ["make-decision", "Make the decision"],
      ["plan-next-increment", "Plan the next increment"]
    ]
  }
];

export const references = [
  ["pilot-workbook", "Pilot workbook"],
  ["examples-and-reference", "Examples and deeper reference"]
];

export const roleStarts = [
  ["Executive sponsor", "Confirm the purpose, name accountable owners and protect the decision."],
  ["Pilot lead", "Start at Understand, then coordinate every Prepare step."],
  ["Delivery team", "Read the charter, then follow the Run procedures for each work item."],
  ["Platform, security and risk", "Help define enforceable boundaries and validate that stop controls work."],
  ["Measurement or verification owner", "Establish the baseline before launch and independently review evidence."]
];
