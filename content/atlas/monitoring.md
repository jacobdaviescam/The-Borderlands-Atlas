---
title: Monitoring
slug: monitoring
region: technical-safety
tagline: Detecting bad cognition or bad action at deployment time — chain-of-thought monitorability, action monitoring, and what they buy us.
status: developing
order: 3
last_reviewed: 2026-05-01
last_substantive_update: 2026-05-01
related: [mechanistic-interpretability, ai-control, technical-standards]
---

## Where I currently stand

CoT monitorability is one of the strongest near-term levers we have for detecting misaligned reasoning before it becomes misaligned action — but it is fragile to training pressure, and the field's confidence in it has outrun the empirical work supporting it. The interesting question is no longer "does CoT monitorability work" but "under what training regimes does it survive, and how do we know we're in one of those regimes". <Edit to taste; this maps to your ERA-CoT work.>

## Current beliefs

- **CoT monitorability degrades under training pressure that rewards shorter or cleaner CoTs.** ~XX% — direct evidence is starting to accumulate; this is the central concern of the disclosure-standards work.
- **Action monitoring (output-side) is easier to make robust than cognition monitoring (CoT-side), but catches strictly less.** ~XX% — <why>.
- **A monitoring system whose properties are not publicly documented cannot be trusted by third parties.** ~XX% — this is the load-bearing argument for transparency disclosures.

## Uncertainties

- **What training interventions preserve monitorability without sacrificing capability?** Why it matters: the whole field of monitoring rests on this being non-empty.
- **How much of the monitorability we observe is structural to the model versus an artefact of dataset distribution?** Why it matters: changes the policy story about whether labs can credibly commit to maintaining it.

## What would update me

- A clean demonstration that a frontier lab's training run measurably degraded CoT faithfulness would strengthen the case for monitorability disclosure as a regulatory tool.
- A successful intervention that preserves monitorability through long RL training would shift the central concern of the field.

## Recent reading

- <date> — [<paper>](<url>) — <takeaway>.

## Related writing

<!-- Will auto-populate. Likely candidates from your existing notes:
     [[Chain-of-Thought Monitorability Transparency]], [[Action Monitoring]] -->

## Related regions

<!-- Auto-rendered from the `related:` frontmatter list. -->
