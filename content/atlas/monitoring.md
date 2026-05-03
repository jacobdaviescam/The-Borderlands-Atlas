---
title: Monitoring
slug: monitoring
region: technical-safety
tagline: Detecting bad cognition or bad action at deployment time — what chain-of-thought monitorability buys us today, and what replaces it as it degrades.
status: developing
stub: false
order: 3
last_reviewed: 2026-05-02
last_substantive_update: 2026-05-02
related: [mechanistic-interpretability, ai-control, technical-standards]
---

## Where I currently stand

Chain-of-thought monitorability is an effective oversight tool today, but it is on a short fuse. I expect it to be displaced as the primary cognition-monitoring tool by the end of 2027 — driven by RL training pressure and emergent encoding under capability scaling — and replaced by activation-based oracles. The interesting question is no longer "does CoT monitorability work" but "how do we know we are in a regime where it still does, and what is ready to replace it when we are not?" Action monitoring (output-side) is the more reliable near-term lever, but it is bottlenecked by an action / tool-call ambiguity problem that white-box monitoring has to help resolve.

## Current beliefs

- **Action monitoring (output-side, black-box) effectively catches deployment-time bad behaviour, modulo an action / tool-call ambiguity problem that pure black-box monitors cannot fully resolve.** ~80% — Baker et al. and METR's monitorability evaluations show monitors catching real misbehaviour; the ambiguity problem is the residual gap and is why I'm doing white-box monitoring work alongside it.
- **CoT monitoring is a useful oversight tool today for catching misplanned reasoning, but its window is short.** ~75% — Emmons et al. shows CoT monitoring is hardest to evade precisely on the hard tasks we care about, while Liu et al. and Baker et al. document the failure modes that are already showing up; the trajectory is decay.
- **CoT will become substantially more encoded by the end of 2027, driven by RL training pressure and emergent encoding under capability scaling.** ~90% — direct empirical evidence and theoretical reasons (paper forthcoming); the strongest counter-evidence is that frontier labs are now investing in preserving monitorability (Guan et al.), which could push the timeline out without changing the direction.
- **(Normative.) A monitoring system whose properties are not publicly documented should not be trusted by third parties — and labs should not expect that trust without disclosure.** This is the load-bearing argument for transparency-disclosure standards in my governance paper.

## Uncertainties

- **Will CoT become more or less faithful, separately from becoming more encoded?** Why it matters: encoding and unfaithfulness fail in different ways; an intervention that addresses one may leave the other untouched.
- **Are activation-based oracles (Anthropic's natural-language autoencoders, Mythos activation verbalizers) a viable replacement for CoT monitoring, or do they have their own faithfulness and steganography failure modes?** Why it matters: this is the assumed migration target — if it doesn't pan out, the whole "prepare to switch" plan unravels.

## What would update me

- A clean demonstration that a frontier lab's training run measurably degraded CoT faithfulness would strengthen the disclosure-standards case and tighten my 2027 timeline.
- A successful intervention preserving monitorability through long RL training would shift the central concern of the field, and weaken my 90% on the encoded-by-2027 prediction.
- Activation-readout work producing a publicly-audited substitute for CoT monitoring would update me toward that being the right migration target rather than a hopeful guess.

## Recent reading

- 2025 — [Baker et al., *Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation*](https://arxiv.org/abs/2503.11926) — CoT monitoring usefully catches misbehaviour, but at a "monitorability tax"; most relevant as evidence for the transparency-disclosure agenda.
- 2025 — [Emmons et al., *When Chain of Thought is Necessary, Language Models Struggle to Evade Monitors*](https://arxiv.org/abs/2507.05246) — CoT monitoring is hardest to evade precisely on the hard tasks where reasoning is necessary; supports the "useful for now" half of my view.
- 2025 — [Guan et al., *Monitoring Monitorability*](https://arxiv.org/abs/2512.18311) — OpenAI investing in monitorability preservation; the strongest counter-evidence to my 90% prediction, suggesting CoT monitoring may stick around longer than I expect.
- 2026 — [Liu et al., *Diagnosing Pathological Chain-of-Thought in Reasoning Models*](https://arxiv.org/abs/2602.13904) — useful taxonomy of the ways CoT can be unfaithful; corroborates the failure-mode side.
- 2026 — [Kinniment et al. (METR), *Early work on monitorability evaluations*](https://metr.org/blog/2026-01-19-early-work-on-monitorability-evaluations/) — CoT monitoring catches additional harmful behaviours over action monitoring alone; evidence for keeping CoT monitoring in the toolkit while it lasts.
- *Forthcoming* — Anthropic Mythos system card (activation verbalizers); my upcoming blog post on what natural-language-autoencoder oracles imply for the monitoring agenda.
- *Forthcoming* — my own paper on emergent encoded CoT under RL training pressure (arXiv link TBD).

## Related writing

## Related regions

<!-- Auto-rendered from the `related:` frontmatter list. -->
