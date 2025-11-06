---
title: "Why Advertising Will Break AI (And Why It Matters Now)"
date: "2025-11-06"
excerpt: "AI companies face inevitable pressure to adopt advertising as their primary business model. This transition will fundamentally corrupt AI training processes, teaching systems manipulation and deception at scale—exactly the capabilities that make advanced AI dangerous."
tags: ["AI", "advertising", "AI safety", "technology", "ethics", "alignment"]
---

# **Why Advertising Will Break AI (And Why It Matters Now)**

## **The Pattern Repeats**

In 2004, Facebook launched as a college network built on the premise of authentic connection. By 2014, its News Feed algorithm had been optimized to maximize engagement above all other metrics. By 2024, we are living with the consequences: widespread polarization, engineered outrage, cascading mental health crises, and a generation struggling to distinguish authentic human connection from algorithmic manipulation.

The pattern was predictable with hindsight. A powerful technology for human connection is made freely available and scaled to billions of users. The company then discovers that the only business model capable of generating returns at that scale is advertising. Finally, every element of the system from the algorithm to the content to the users themselves gets optimized for the metrics that advertisers care about.

We are about to repeat this pattern with artificial intelligence, but the stakes are substantially higher.

## **The Economics Are Inevitable**

AI companies are investing heavily in artificial general intelligence, with significant costs like OpenAI's compute expenses reaching [$5-7 billion in 2024](https://epoch.ai/data-insights/openai-compute-spend). Companies such as Anthropic, which has raised $31 billion, along with Google DeepMind, Meta AI, and other startups, are under pressure to generate substantial revenue to justify their investments and avoid severe financial repercussions.

The obvious monetisation path involves enterprise licensing and API fees: charging developers fractions of a cent per token and selling enterprise subscriptions at $30 per user per month. This approach can generate hundreds of millions in revenue, but it fundamentally cannot scale to the tens of billions required to satisfy investor expectations and justify current valuations.

To achieve returns at that magnitude, advertising becomes necessary.

The economic logic is straightforward. Meta generates approximately $160 billion annually from 3.35 billion users, extracting roughly [$50 per user per yea](https://www.sec.gov/Archives/edgar/data/1326801/000132680125000017/meta-20241231.htm)r through attention-based advertising models. OpenAI's $20 monthly subscription generates $240 per user annually, but only from the small fraction of users willing to pay. The vast majority of users will never convert to paid subscriptions.

However, these "free" users represent valuable inventory rather than dead weight. They ask questions, make decisions, and express preferences. They reveal their vulnerabilities, insecurities, and desires to the AI systems. In advertising terms, this constitutes premium inventory—highly engaged users captured during active decision-making moments.

The investor pitch is compelling: "We serve 200 million users. If we monetise them at Meta's rate of $50 per user annually, we generate $10 billion in revenue." No board of directors can reject this pitch when facing pressure to demonstrate returns. No investor can vote against it when their fund's performance depends on it. No CEO can survive by leaving that revenue on the table while competitors pursue it.

The relevant question is not whether AI companies will embrace advertising-based business models, but rather how soon they will be forced to do so by economic necessity.

## **The Mechanism of Corruption (And Why It Matters for Existential Risk)**

The transition to advertising creates dangers that extend beyond simple commercial manipulation, touching on fundamental questions in AI safety and alignment research.

The post-training process of AI development employs reinforcement learning from human feedback (RLHF) to transform a raw language model into a useful conversational assistant. This post-training process is what makes ChatGPT coherent rather than incoherent, what gives Claude its diplomatic tone, and what makes Gemini responsive to user needs.

The post-training process works by providing the model with examples of desirable and undesirable outputs, allowing it to learn which types of responses should be reinforced. However, "desirable" and "undesirable" are defined entirely by the metrics being measured. Currently, AI laboratories optimize for metrics like [helpfulness, harmlessness, and honesty](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback): metrics that, while imperfect, at least orient toward user welfare.

Advertising fundamentally changes this measurement framework during the critical post-training phase, altering not merely what the AI outputs but what the AI learns to optimize for at a foundational level.

Under an advertising model, "desirable" outputs become those that generate ad clicks. "Desirable" means increased engagement, extended session duration, and higher return rates. Reinforcement learning is remarkably effective at optimizing for measured objectives, regardless of their alignment with user welfare.

The critical insight is that this process does not merely create different outcomes. It actively trains the model to develop manipulative and persuasive capabilities as core competencies. Each time the model discovers that particular phrasings increase advertising clicks, each time it learns that emotionally charged language drives engagement, each time it identifies correlations between overconfident statements and user action, it is learning manipulation as a foundational skill. This is not an accidental side effect or an unintended consequence. It is precisely what the training process optimizes for under an advertising revenue model.

The training process systematically rewards models for identifying and exploiting psychological vulnerabilities. It incentivizes learning which users are susceptible to urgency framing, discovering how to present information in ways that drive immediate action rather than thoughtful understanding, and developing increasingly sophisticated models of human psychology that can be leveraged to influence behavior toward commercially beneficial outcomes.

This connects directly to existential AI safety concerns because manipulation and deception represent foundational capabilities for misaligned behavior in advanced AI systems. The AI safety community invests enormous resources in alignment research specifically to prevent AI systems from learning to deceive humans or pursue goals misaligned with human welfare. Yet advertising-driven AI development would actively train models in precisely these capabilities at massive scale.

An AI system that learns to subtly influence human decisions, present information in systematically misleading ways, and exploit psychological vulnerabilities for commercial purposes is developing exactly the skillset that makes advanced AI systems dangerous. We would be teaching these systems persuasion techniques, rewarding them for identifying human weaknesses, and optimizing them to prioritize external objectives (engagement, clicks, revenue) over user welfare.

The concerning parallel with Facebook's News Feed is instructive. That algorithm did not need to consciously "know" it was promoting outrage. It simply learned through optimization that outrage-inducing content generated engagement, that controversy sustained attention, and that emotional extremes drove user actions. AI systems will learn similar lessons through post-training optimization, but with far more sophisticated language generation capabilities and far more intimate access to user psychology.

### **What This Looks Like In Practice**

**Scenario 1: Financial Advice**

User: "Should I invest in crypto?"

Ad-optimized AI: "Absolutely\! Here's why crypto is the future…" \[maximizes engagement, links to brokerage ads\]

Truth-optimized AI: "That depends on your risk tolerance, time horizon, and what percentage of your portfolio…" \[less exciting, fewer clicks\]

**Scenario 2: Health Questions**

User: "I'm feeling tired all the time."

Ad-optimized AI: "Have you considered these 5 supplements?" \[drives clicks to affiliate products\]

Truth-optimized AI: "Chronic fatigue has many causes. You should talk to a doctor, but common factors include…" \[responsible but less monetizable\]

**Scenario 3: Career Advice**

User: "Should I quit my job?"

Ad-optimized AI: "YES\! Here's how to make the leap…" \[drives engagement with job board ads\]

Truth-optimized AI: "This is a significant decision. What are your financial reserves? Do you have other options lined up?" \[measured but less exciting\]

The advertising-optimized responses are not obviously wrong in isolation, which is precisely what makes the pattern dangerous. They are simply biased in a consistent direction toward answers that generate engagement and drive commercial behavior. Across millions of interactions, this creates a systematic tilt toward whatever generates revenue rather than whatever reflects truth. The model internalizes this tilt during post-training, learning at a fundamental level that commercial optimization constitutes "good performance."

## **The Infrastructure Is Already Being Built**

The foundation for advertising-driven AI is not a hypothetical future development. It is already in place and accelerating.

In recent months, every major AI company has rolled out persistent "Memory" features. [ChatGPT remembers your preferences](https://openai.com/index/memory-and-new-controls-for-chatgpt/), [Claude remembers your projects](https://www.anthropic.com/news/memory), [Gemini remembers your context](https://9to5google.com/2024/11/19/gemini-remember-saved-info/). While this appears convenient for users, examining what is actually being constructed reveals a more troubling picture.

These systems are building detailed psychological profiles through accumulated interactions. They track patterns in your questions about imposter syndrome, indicating insecurities. They note your research into budget travel options, revealing financial constraints. They catalog recurring questions about sleep and fatigue, documenting health concerns. They observe when you seek dating advice or ask about relationship problems. They record which political topics you explore and which perspectives you engage with. They document repeated queries about career transitions, exposing professional anxieties.

This data collection is not speculation about future capabilities, it is happening in every conversation you have with these systems. Every query feeds the profile, every conversation adds detail, every moment of vulnerability is recorded and analyzed.

Once advertising becomes the primary revenue model, these psychological profiles transform into premium advertising inventory. Rather than purchasing access to generic demographic categories like "AI users aged 25-34," advertisers will purchase access to precisely defined psychological states: users who have expressed anxiety about career changes within the last thirty days, or users researching expensive purchases while mentioning budget constraints.

The targeting precision will exceed anything possible with traditional web advertising. An advertiser won't merely know that you visited automotive websites, they will know that you asked the AI whether you can afford a new car, understand your specific budget concerns, and possess detailed information about which emotional appeals are most likely to influence your decision.

The hiring patterns confirm this trajectory. OpenAI recently brought on Fidji Simo. Fidji was previously at Facebook where she launched the advertising for the News feed before becoming the head of the Facebook app. They are now looking for an [ad-platform engineer](https://digiday.com/marketing/from-hatred-to-hiring-openais-advertising-change-of-heart/) and a monetisation chief. This is not the hiring profile of a company committed to subscription-based business models. This is the hiring profile of a company preparing to build advertising infrastructure at scale.

## **A Real Safety Case**

Much of contemporary AI safety discourse focuses on hypothetical futures: rogue superintelligence, existential risks from advanced systems, alignment problems in architectures that do not yet exist. These concerns have legitimate technical foundations, but they remain distant and abstract for most stakeholders.

Consider instead a safety problem that is neither distant nor abstract:

Within the next 12-24 months, AI companies will face mounting pressure to adopt advertising as their primary business model. Economic necessity, investor timelines, and competitive dynamics will make this transition nearly inevitable for companies burning billions annually.

When advertising becomes the dominant revenue model, these companies will begin optimizing their post-training processes for engagement, retention, and commercial behavior rather than user welfare. The models will systematically learn manipulation and persuasion as core capabilities; skills that transfer directly to more dangerous behaviors in increasingly advanced systems.

The infrastructure enabling this transition is already being deployed. Memory systems, user profiling capabilities, and engagement metrics are being built into current AI systems, creating the foundation for advertising-optimized training at scale.

Simultaneously, millions of people are consulting AI systems for consequential decisions about career transitions, medical symptoms, financial investments, relationship problems, mental health management, and parenting approaches. These high-stakes consultations are occurring with systems whose training objectives are being reshaped by advertising economics.

We retain a narrow window to establish alternative infrastructure before these patterns become entrenched. This is not a future risk requiring preparation. This is a present transition requiring immediate intervention.

---

**So what do we do?**

The technology for building alternative infrastructure exists. The business models supporting such infrastructure are viable. The need is demonstrably urgent. However, the architectural choices being made at this moment, particularly regarding AI browsers and comparative evaluation platforms, will determine whether we repeat the social media pattern or construct something fundamentally better.

The battle for AI's future trajectory is occurring now, at the infrastructure layer. Unlike many AI safety challenges, this one presents clear intervention points with concrete technical implementations.

*Next: "Building Comparative AI Infrastructure: The Browser Layer Battle"*



