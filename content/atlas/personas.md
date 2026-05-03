---
title: Personas
slug: personas
region: technical-safety
tagline: The persona frame as a lens on LLM generalisation — what model specs and character training shape, and what falls out for probing and steering.
status: developing
stub: false
order: 7
last_reviewed: 2026-05-02
last_substantive_update: 2026-05-02
related: [mechanistic-interpretability, steering, technical-standards]
---

## Where I currently stand

The persona frame is a useful lens on how generalisation works in language models — the right unit of analysis is "what trait did the model learn *as which persona*", not "what trait did the model learn." I'm 65% confident this is the dominant generalisation mechanism in practice; my own forthcoming work is testing it directly, and I can see it not being the case. The pragmatic safety leverage is *not* in mapping the persona landscape mechanistically — that isn't pragmatic interpretability and won't shift training decisions — but in deliberately shaping the landscape upstream through model specs and character training, and in understanding how that shape changes downstream probing and steering.

## Current beliefs

- **Personas are an inherent feature of frontier LLMs, emerging from training on human-preference data; models are simulators in a substantive sense, not just metaphorically.** ~85% — the simulator frame (Janus's *Simulators*, the *Persona Selection Model*) explains a wide range of generalisation and interpretability findings; the *Assistant Axis* work makes it concretely measurable.
- **Trait generalisation in LLMs is mediated by personas — models don't learn traits abstractly, they learn traits-in-the-context-of-a-persona, and this has downstream consequences for probing, steering, and safety.** ~65% — the *persona vectors* and *assistant axis* lines are suggestive, but I don't yet have evidence that directly proves this is the dominant mechanism rather than one mechanism among several. My own forthcoming paper is built around testing this exact claim, and I can see it not being the case.
- **Mechanistic mapping of the persona manifold for its own sake is not pragmatic interpretability and is not a primary safety lever; the leverage is in deliberately shaping the persona landscape through model specs and character training, and in studying how that shape changes the behaviour of probing and steering interventions.** ~75% — the model-spec / Constitution-style approach is upstream of where mechanistic work could intervene; better persona-manifold maps are scientifically interesting but unlikely to shift training-decision or policy outcomes.

## Uncertainties

- **Does deeply-defined character training (the Assistant as a top-level persona under which sub-personas inherit) make trait-level representations effectively transferable across the personas the Assistant adopts — making the persona-mediated story more theoretical than practical?** Why it matters: if yes, then trait-level abstractions are usable in practice and belief #2 weakens significantly; if no, then persona-context is irreplaceable in any safety intervention, and probes / steering vectors must be persona-conditional to be reliable.
- **Will model specs become precise enough that persona-landscape shaping is genuinely a design lever, or do they remain too high-level to predictably constrain post-training behaviour?** Why it matters: the case for belief #3 is load-bearing on this — if specs don't translate into measurable persona-stability, the mechanistic side might be the only remaining safety angle on personas.

## What would update me

- A direct empirical demonstration that fine-tuning a trait at the Assistant-persona level produces stable trait expression across sub-personas would push me toward "trait-level abstraction is fine in practice" and significantly weaken my 65% on belief #2.
- Evidence that probes or steering vectors generalise robustly across personas without retraining would similarly weaken belief #2 and probably end my interest in this as a load-bearing safety direction.
- Documented cases of model-spec divergence (under-specification, ambiguity, or drift) producing measurable persona instability in deployment would strengthen belief #3 and the model-specs-as-lever framing.

## Recent reading

- 2022 — [Janus, *Simulators* (LessWrong)](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators) — the foundational framing: LLMs as simulators, personas as simulacra. Theoretical scaffolding for everything below.
- 2025 — [nostalgebraist, *the void* (LessWrong)](https://www.lesswrong.com/posts/3EzbtNLdcnZe8og8b/the-void-1) — extends the simulator frame to Assistant-persona underspecification; argues the Assistant starts ill-defined and concretises through deployment, with implications for character training.
- 2026 — [Anthropic, *The Persona Selection Model*](https://alignment.anthropic.com/2026/psm/) — surveys behavioural, generalisation, and interpretability evidence for the simulator / persona-selection frame; the most direct theoretical grounding for belief #1.
- 2026 — [Anthropic, *The Assistant Axis: Situating and Stabilizing the Default Persona of Language Models*](https://arxiv.org/abs/2601.10387) — empirical evidence that the leading component of persona space is "Assistant-likeness"; steering along the axis controls helpful / harmless behaviour. Direct evidence for the "deeply defined Assistant persona" picture that drives the central uncertainty above.
- 2025 — [Chen et al. (Anthropic), *Persona Vectors: Monitoring and Controlling Character Traits in Language Models*](https://arxiv.org/abs/2507.21509) — automated extraction of trait-direction vectors and their use in monitoring and steering. Important methodological piece; also makes belief #2 testable.
- *Forthcoming* — Will MacAskill (Forethought), essay on character of AI (link TBD) — argues character training is the right unit for thinking about long-run AI behaviour; aligns with belief #3.
- *Forthcoming* — my own paper on trait–persona interaction (ICML workshop submission; arXiv link TBD) — directly tests belief #2.

## Related writing

## Related regions

<!-- Auto-rendered from the `related:` frontmatter list. -->
