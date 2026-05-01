---
title: Steering, Persona, and Behavioural Representations
slug: steering-and-personas
region: technical-safety
tagline: How models internally represent persona-conditional behaviour, and what that buys us for safety and alignment.
status: developing
order: 7
last_reviewed: 2026-05-01
last_substantive_update: 2026-05-01
related: [mechanistic-interpretability, monitoring, ai-control]
---

## Where I currently stand

<Headline view, drawing on your ERA-Persona work: behavioural representations are context-dependent in ways that make naive single-vector steering interventions unreliable; a richer model of persona-conditioning is necessary if steering is going to be operationally useful for safety.>

## Current beliefs

- **Behavioural representations are context-dependent — the "honesty direction" in one prompt distribution is not the "honesty direction" in another.** ~XX% — direct evidence from the ERA-Persona work.
- **Persona-conditional steering is more interpretable and safer than mood-conditional or task-conditional steering.** ~XX% — <why>.
- **Steering as a deployment-time safety intervention is over-claimed; steering as a research probe into internal structure is under-claimed.** ~XX% — <why>.

## Uncertainties

- **Do persona representations generalise across model families and scales, or are they idiosyncratic?** Why it matters: determines whether persona-vector work transfers between releases.
- **What is the right unit of behaviour to steer — token-level, span-level, role-level?** Why it matters: changes which interventions are tractable.

## What would update me

- Replication of persona-vector results across multiple frontier model families would strengthen the case that we're tracking real structure.
- A failure to find persona-conditional structure in a sufficiently rigorous study would force a reframing of the agenda.

## Recent reading

- <date> — [<title>](<url>) — <takeaway>.

## Related writing

<!-- Likely candidates from your existing notes:
     [[After reading Persona Vectors]] -->

## Related regions

<!-- Auto-rendered from the `related:` frontmatter list. -->
