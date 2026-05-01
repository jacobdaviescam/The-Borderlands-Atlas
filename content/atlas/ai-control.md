---
title: AI Control
slug: ai-control
region: technical-safety
tagline: Containing models we don't trust to align, using protocols that work even if alignment fails.
status: developing
order: 4
last_reviewed: 2026-05-01
last_substantive_update: 2026-05-01
related: [monitoring, evaluations, scalable-oversight]
---

## Where I currently stand

<Headline view on AI control as a research agenda: what makes it different from alignment, what it can and can't do, and how it should compose with monitoring. The Greenblatt et al. framing is the natural reference point.>

## Current beliefs

- **Control is the right framing for the next 1–3 years of frontier deployment.** ~XX% — <why>.
- **Control protocols are only as strong as their evaluation; the bottleneck is realistic red-teaming, not protocol design.** ~XX% — <why>.
- **<Claim about untrusted-monitor / trusted-edit / etc.>** ~XX% — <why>.

## Uncertainties

- **How does control degrade as models become better at recognising they are in a control protocol?** Why it matters: load-bearing for whether control buys us years or months at the frontier.
- **Are control protocols composable, or does adding more protocols leak more attack surface than they cover?** Why it matters: architectural question for any deployment.

## What would update me

- A successful control-protocol breakdown in a realistic red-team setup would push me to take protocol fragility more seriously.
- Demonstration that simple control protocols robustly survive stress-testing at frontier scale would meaningfully strengthen the deployment story.

## Recent reading

- <date> — [<title>](<url>) — <takeaway>.

## Related writing

## Related regions

<!-- Auto-rendered from the `related:` frontmatter list. -->
