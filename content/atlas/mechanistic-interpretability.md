---
title: Mechanistic Interpretability
slug: mechanistic-interpretability
region: technical-safety
tagline: How well we can read what models are doing internally, and how much that buys us in deployment.
status: exploring
order: 2
last_reviewed: 2026-05-01
last_substantive_update: 2026-05-01
related: [monitoring, ai-control, steering-and-personas]
---

## Where I currently stand

<Likely something on: mech interp is a high-variance bet; the safety case it underwrites is "we can detect bad cognition before it becomes bad action"; current results are exciting but not yet robust enough to lean on operationally. Edit freely.>

## Current beliefs

- **Mech interp is necessary but not sufficient for a deployment-time safety case.** ~XX% — interpretability findings are too brittle and too narrow to be the load-bearing element of a safety case yet.
- **The most useful near-term mech interp is the kind that supports monitoring, not the kind that aims for full mechanistic understanding.** ~XX% — <why>.
- **<Your view on SAEs / circuits / probes.>** ~XX% — <why>.

## Uncertainties

- **Does mech interp scale to frontier-size models in a deployment-relevant way, or stay a research toy?** Why it matters: determines whether interp is part of the operational safety story or only the science one.
- **Are the abstractions we extract real features of the model's computation or artefacts of our methods?** Why it matters: if the latter, interp findings don't generalise out of the lab.

## What would update me

- A demonstrated interpretability-based detector that catches real misalignment before behavioural symptoms would meaningfully strengthen the case.
- Repeated failures to robustly localise simple behaviours in frontier-scale models would push me to treat mech interp as primarily a science project.

## Recent reading

- <date> — [<title>](<url>) — <takeaway>.

## Related writing

## Related regions

<!-- Auto-rendered from the `related:` frontmatter list. -->
