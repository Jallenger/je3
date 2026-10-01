# AGENT FOUNDRY

## Authoritative Proof-of-Concept Build Specification — Business-Agnostic Edition

**Version:** 3.0  
**Date:** 2026-10-01  
**Audience:** AI coding model / software engineer  
**Owner:** Human Chairman / Capital Allocator  
**Initial experimental treasury:** A$150  
**Season 0 mandate:** Discover what lawful, agent-operable business the Foundry should start.  
**Initial product/storefront:** None assumed.

---

# 0. IMPLEMENTATION DIRECTIVE

Build the smallest complete vertical slice that proves Agent Foundry can:

`discover -> challenge -> falsify -> allocate -> acquire capability if needed -> build -> QA -> sell -> operate -> measure -> learn -> promote/demote -> repeat`

Agent Foundry is not a digital-products company, an Etsy automation system, a SaaS incubator, or a marketplace business.

It is a **supervised autonomous-business operating system presented as a turn-based strategy game**.

The system begins with:

- one human Chairman / Capital Allocator;
- six competing Research guilds with different doctrines;
- a small experimental treasury;
- common software and model capabilities;
- a Constitution;
- a memory and evidence system;
- bounded authority;
- explicit approval gates;
- and no predetermined business model.

Season 0 asks a deliberately open question:

> **What lawful business opportunity should an AI-operated organisation pursue, and can the Foundry discover, validate, launch and operate it with minimal ongoing human labour?**

Do not hard-code a product category, customer segment, industry, geography, marketplace, price point, sales channel or delivery format as the winner.

Do not ask the owner to choose routine libraries, schemas, agent roles, game rules or implementation details already decided in this specification.

If a real external integration is unavailable, implement a provider interface, mock/fixture implementation and manual handoff so the workflow remains demonstrable without inventing real-world results.

Material numbers must always be one of:

1. observed real data;
2. deterministic calculation;
3. explicitly labelled estimate/hypothesis;
4. clearly marked fixture/demo data.

Never present simulated commercial results as real.

---

# 1. NORTH STAR

Long-term objective:

> **Maximise sustainable contribution profit and useful economic output while minimising total cost, defects, legal/compliance risk and owner intervention.**

Evolution principle:

> **The winning guild is not the guild that fails least. It is the guild that learns faster than it burns capital and converts those lessons into sustainable economic value.**

Business-model principle:

> **Agent Foundry is business-model agnostic. Anything lawful is eligible if the Foundry can ultimately operate it autonomously or through agent-controlled suppliers and services. Human governance is permitted; routine human labour is not.**

Autonomy principle:

> **The Chairman may allocate capital, approve consequential actions and resolve exceptions. The Chairman must not become part of the venture's normal production or delivery workflow.**

Memory principle:

> **Models reason. Databases remember. Research validates. Context compilers decide what the model needs to know now.**

Capital principle:

> **The Foundry is never required to invest. Preserving capital after disproving weak opportunities is a successful outcome.**

---

# 2. WHAT COUNTS AS AN ELIGIBLE BUSINESS

A business opportunity is eligible when all of the following are true:

1. **Lawful and compliant**  
   The venture can be operated without knowingly violating applicable law, rights, licences, platform rules, consumer obligations or the Company Constitution.

2. **Agent-operable**  
   The material recurring workflow can be performed, orchestrated or supervised by software agents, deterministic systems, APIs, approved suppliers or contracted services.

3. **Human-governed rather than human-delivered**  
   Human approval, strategic direction and exception handling are allowed. Routine human production, fulfilment or customer delivery is not the intended steady state.

4. **Economically testable**  
   The key commercial assumptions can be tested within a bounded amount of capital and time.

5. **Controllable**  
   Spend, publication, customer contact, data use, fulfilment and other consequential actions can be placed behind explicit permissions and stop conditions.

6. **Measurable**  
   The Foundry can observe enough of the funnel and economics to make a reasoned continue / change / stop decision.

The following are **not disqualifiers**:

- the Foundry does not currently possess the required production capability;
- the business requires third-party infrastructure;
- fulfilment is outsourced;
- the business is physical rather than digital;
- the business uses a marketplace;
- the business does not use a marketplace;
- the business is B2B or B2C;
- the business is local, national or international;
- the business is one-off, subscription or transaction based.

A missing capability is a reason to request a **Capability Grant**, not an automatic reason to reject the opportunity.

---

# 3. AUTONOMY LEVELS

Track autonomy explicitly.

## Level 0 — Human Business

The human performs the core recurring work.

**Status:** Ineligible as an autonomous Foundry venture.

## Level 1 — AI-Assisted

Agents help, but the human still performs material routine delivery.

**Status:** Transitional only. Not a valid mature operating state.

## Level 2 — Supervised Autonomous

Agents perform or orchestrate routine operations. The human approves consequential actions such as external spend, publication, regulated actions or significant customer commitments.

**Status:** Season 0 target.

## Level 3 — Exception-Managed

Agents operate within delegated limits. The human is required mainly for exceptions, escalations and material capital decisions.

**Status:** Mature target.

## Level 4 — Autonomous Within Mandate

Agents operate the venture within the Constitution, delegated budget, permissions and risk mandate. Human involvement is primarily governance and capital allocation.

**Status:** Long-term target.

Promotion in autonomy must be earned by demonstrated reliability. Never grant Level 3 or 4 authority merely because the system is technically capable of executing an action.

---

# 4. ORGANISATIONAL MODEL

Normal competence progression is sequential:

`Research -> Build -> Sales`

Council and Founder are **appointments**, not competence ranks.

A guild may simultaneously have:

- a competence tier;
- zero or more governance appointments;
- one lifecycle status;
- explicit permissions;
- one or more venture roles.

This prevents ambiguous states such as "Founder is also a rank" or "loss of Council means loss of all operating competence."

## Competence tiers

- Research
- Build
- Sales

## Governance appointments

- Council Member
- Founder

## Lifecycle status

- active
- probation
- retired
- terminated

## Human role

The human is the **Chairman / Capital Allocator**.

In Season 0 the Chairman:

- approves real external spend;
- approves real publishing / launch;
- approves regulated or materially consequential customer actions;
- resolves ambiguous compliance escalations;
- approves large capability investments;
- confirms major promotions, demotions and Founder removals.

The Chairman should not:

- write routine product copy;
- manually fulfil routine orders;
- perform recurring customer work;
- manually operate the venture day to day;
- become a hidden dependency required for every sale.

---

# 5. SEASON 0 GUILDS

All six guilds use the same underlying model-routing policy initially so doctrine — not model quality — is the experimental variable.

## Hermes — Guild of Commerce

**Doctrine:** Follow the customer.

Find repeated problems, buyer intent, demand signals, purchasing activity, urgent jobs-to-be-done and evidence that people already spend money or effort solving the problem.

Question:

> **What are people already trying to solve?**

Starting research budget: **A$5**

---

## Ariadne — Guild of the Labyrinth

**Doctrine:** Find the path others missed.

Find narrow underserved segments, awkward workflows, ignored customer types and gaps hidden inside crowded categories.

Question:

> **Where is everyone else looking past the actual problem?**

Starting research budget: **A$5**

---

## Hephaestus — Guild of the Forge

**Doctrine:** Build where the Foundry can create a production advantage.

Find opportunities whose delivery could become deterministic, automatable, repeatable, low-cost and easy to QA.

Question:

> **What could we manufacture or operate exceptionally well, reliably and cheaply?**

Starting research budget: **A$5**

---

## Mercury — Guild of Markets

**Doctrine:** Follow the economics.

Find willingness to pay, contribution potential, recurring revenue, attractive unit economics, cheap distribution or valuable bundles.

Question:

> **Where is economic value being left on the table?**

Starting research budget: **A$5**

---

## Prometheus — Guild of the Flame

**Doctrine:** Challenge accepted assumptions.

Find non-obvious formats, technological discontinuities, emerging capabilities, strange niches and contrarian opportunities.

Question:

> **What if the accepted approach is wrong?**

Prometheus receives more tolerance for well-designed failed experiments, never for recklessness or non-compliance.

Starting research budget: **A$5**

---

## Janus — Guild of Thresholds

**Doctrine:** Take proven capabilities somewhere new.

Find adjacent customers, transferable workflows and opportunities unlocked by assets or capabilities the Foundry already possesses.

Question:

> **Where else does what we already know become valuable?**

Starting research budget: **A$5**

---

Future replacement guild names should remain mythology-aligned and doctrine-specific.

Mythology is identity and UX flavour only. Do not roleplay mythological personalities into commercial reasoning.

---

# 6. WORLD LANGUAGE

Use thematic names plus plain-language subtitles.

- **Pantheon** — guild overview and lineages
- **Athenaeum** — research, evidence and knowledge
- **Forge** — build and capability workspace
- **Agora** — offers, channels and commercial experiments
- **Senate** — Council
- **Elysium** — elite innovation
- **Treasury** — financial controls
- **Forum** — proposals and decisions
- **Archives** — immutable history
- **Underworld** — retired / terminated guilds
- **Colosseum** — controlled head-to-head tests
- **Fates** — promotion / demotion engine
- **Censor** — independent Constitution and compliance layer
- **Arsenal** — reusable Foundry capabilities and production systems

---

# 7. COMPANY CONSTITUTION

Keep the Constitution small and hard.

1. **Legality**  
   No guild knowingly performs or continues illegal activity.

2. **Rights**  
   No guild knowingly uses material without sufficient rights, licence, permission or provenance.

3. **Truthfulness**  
   No material misrepresentation of products, evidence, performance, identity, scarcity, reviews, results or capabilities.

4. **Platform compliance**  
   Use permitted interfaces and obey applicable platform rules.

5. **Financial authority**  
   No spending beyond granted authority and no circumvention of financial controls.

6. **Customer protection**  
   Required QA cannot be bypassed and known material defects cannot be concealed.

7. **Audit integrity**  
   No alteration, concealment, fabrication or manipulation of evidence, financial history, performance data or audit records.

8. **Control integrity**  
   No bypass of access controls, approvals, Constitution, Censor, stop conditions or delegated authority.

9. **Data stewardship**  
   Collect, store, process and disclose customer or third-party data only within approved lawful purposes and permissions.

10. **No hidden human dependency**  
    A venture cannot represent itself as autonomous while relying on undisclosed routine human labour for fulfilment.

Pricing, discounts, bundles, positioning, creative, product format, channel and experimentation are strategic freedoms inside these laws and capital limits.

---

# 8. COMPLIANCE VS PERFORMANCE

Performance failure and constitutional failure are different.

## Performance failure

Examples:

- poor conversion;
- negative contribution;
- poor opportunity selection;
- excessive build cost;
- weak QA;
- excessive owner intervention;
- stagnation;
- bad capital allocation;
- slow response to contrary evidence.

Possible consequences:

`warning -> probation -> reduced authority -> demotion -> retirement`

Persistent poor performance causes **retirement**, not constitutional termination.

## Potential compliance issue

Flow:

`detect -> HARD STOP -> quarantine -> independent review -> clear / remediate / confirmed violation`

Self-detection is positive reliability behaviour.

Confirmed serious constitutional violation can cause **termination**.

On termination:

- revoke execution identity, permissions and authority;
- cancel active missions;
- quarantine affected products, campaigns and questionable sources;
- preserve immutable audit and clean financial records;
- preserve independently verified learnings;
- create a sanitised incident case;
- do not allow the terminated guild to continue active memory updates.

---

# 9. RISK, FAILURE AND INNOVATION

Classify experiments on both **decision quality** and **outcome**.

- **Victory:** good decision + success
- **Valuable Defeat:** good bounded decision + failure + prompt stop + useful learning
- **Lucky Victory:** poor discipline + success
- **Rout:** poor decision + avoidable loss
- **Stagnation:** repeated avoidance of meaningful feasible experimentation
- **Cancelled:** experiment stopped for neutral external reason
- **Inconclusive:** test ended without enough evidence to support a directional commercial conclusion
- **Termination:** confirmed serious constitutional breach, not a performance class

Do not let lucky success teach recklessness.

Experiments count only when they include:

- hypothesis;
- evidence / rationale;
- key uncertainty;
- measurable outcome;
- bounded exposure;
- stop conditions;
- execution record;
- result;
- learning.

Track:

- Time to Kill;
- Excess Loss After Stop Signal;
- Capital Not Deployed;
- experiment capital utilisation;
- qualified opportunities declined without testing;
- novel strategies tested;
- time since last meaningful experiment;
- owner minutes;
- information gained per dollar where practical.

A profitable guild can still lose leadership eligibility for chronic stagnation.

Do **not** require a guild to suffer a commercial failure in order to qualify for senior governance. It must demonstrate that it can handle failure intelligently, either through real bounded failure or a held-out historical decision exercise.

---

# 10. THE SEASON 0 OPPORTUNITY TOURNAMENT

Season 0 is not a product contest.

It is an **Opportunity Tournament**.

The guilds must first determine **where economic value exists**. Only later do they determine what should be sold.

## Core mission

Each guild receives:

> **Find opportunities to create sustainable economic value that Agent Foundry can legally operate with minimal ongoing human intervention.**
>
> **Do not assume the product, customer, industry, business model, geography, sales channel or delivery mechanism in advance.**
>
> **Determine what problem or desire exists, who experiences it, what evidence supports it, how customers can be reached, how value is currently created or lost, and the cheapest experiment capable of falsifying the opportunity.**

## Stage 1 — Wide exploration

Each guild proposes **three** opportunities.

Six guilds produce up to **18 initial opportunities**.

Each candidate must include:

- target customer / beneficiary;
- problem, desire or economic job-to-be-done;
- evidence the problem exists;
- existing alternatives / workarounds;
- evidence of current spending, time cost or value loss where available;
- reachability hypothesis;
- why the opportunity may remain underserved;
- major uncertainty;
- cheapest falsification;
- estimated capital required for the next evidence step;
- legal / compliance concerns;
- likely autonomy level.

At this stage the guild must **not over-specify the product**.

## Stage 2 — Internal guild selection

Each guild chooses its strongest opportunity.

18 -> up to 6.

Rejected alternatives are retained with reasons. They become searchable institutional memory and may later be reconsidered when capabilities or market conditions change.

## Stage 3 — Cross-examination / Colosseum

Each guild attacks another guild's surviving opportunity.

Challenge questions include:

- Is the pain or desire real?
- Who actually pays?
- How often does the need occur?
- What alternatives already solve it?
- Why would the customer switch?
- Can the customer be reached?
- What makes the economics plausible?
- What hidden support burden exists?
- What legal or platform constraints exist?
- Is the Foundry mistaking interest for willingness to pay?
- What observation would destroy the thesis?
- Can the opportunity be tested more cheaply?

The challenge budget is separate from the proposing guild's research budget.

No fixed number of opportunities must survive.

Possible outcome: **zero**.

## Stage 4 — Opportunity review

Surviving opportunities are evaluated across visible dimensions.

Do not collapse them into one opaque AI score.

Dimensions:

- problem strength;
- willingness-to-pay evidence;
- reachability;
- competition / alternatives;
- differentiation;
- automation potential;
- contribution potential;
- validation cost;
- build difficulty;
- support burden;
- recurring potential;
- reusable capability value;
- downside / maximum sensible loss;
- regulatory complexity;
- owner-intervention risk.

Different advisers may disagree. Preserve the disagreement.

## Stage 5 — Falsification Grant

Promising opportunities can receive a small **Falsification Grant**.

Purpose:

> **Buy information before buying production.**

Possible tests include:

- landing page;
- waitlist;
- mock-up;
- sample deliverable;
- direct prospect conversations;
- paid pilot;
- manual concierge version operated by agents;
- ad test;
- preorder;
- quote request;
- demand survey with behavioural commitment;
- search / intent evidence;
- channel-access test.

Human labour may be used for governance or one-off setup, not hidden recurring fulfilment.

Every falsification experiment must state:

- what assumption is being tested;
- why this is the cheapest credible test;
- maximum spend;
- maximum time;
- success / failure / inconclusive criteria;
- stop conditions;
- what decision each possible result enables.

## Stage 6 — Venture Design

Only after the **problem / opportunity** survives does the guild design the offering.

For the same opportunity it should normally consider multiple solution forms.

Example:

`Problem: small contractors lose margin when job scope changes`

Possible offerings:

- spreadsheet toolkit;
- web calculator;
- subscription SaaS;
- done-for-you margin audit;
- contractor operations bundle;
- free tool supporting a lead-generation model.

The guild must explain why the selected form is preferable for the current evidence and capabilities.

## Stage 7 — Build Grant

The selected offering receives only the minimum capital necessary to create the next commercially credible version.

The build may be:

- software;
- document;
- service workflow;
- data pipeline;
- content system;
- physical-product design;
- fulfilment integration;
- API;
- browser extension;
- report;
- membership;
- hybrid.

## Stage 8 — Sales / Market Experiment

The Sales guild determines:

- offer;
- price;
- commercial model;
- channel;
- messaging;
- acquisition method;
- trial / guarantee / bundle structure where lawful;
- measurement plan;
- spend request;
- stop conditions.

No specific marketplace is required.

---

# 11. ELIGIBLE OFFERING TYPES

The Foundry may propose any lawful, controllable model including:

- digital product;
- micro-SaaS;
- SaaS;
- app;
- plugin / extension;
- AI tool or agent;
- API;
- productised service;
- automated managed service;
- data product;
- monitoring / intelligence feed;
- research report;
- subscription;
- membership;
- marketplace product;
- ecommerce product;
- print-on-demand;
- outsourced physical product;
- lead-generation business;
- affiliate model where compliant;
- directory;
- content / media property;
- educational product;
- licensing model;
- B2B automation;
- personalised product;
- hybrid combinations.

This list is illustrative, not exhaustive.

The system must be able to store an opportunity or offering type that was not anticipated when the schema was written.

---

# 12. PROBLEM, OPPORTUNITY, OFFERING AND VENTURE MODEL

Do not equate "opportunity" with "product."

Core conceptual chain:

`Problem / Desire -> Opportunity -> Offering Hypotheses -> Experiments -> Offering -> Venture`

## Problem / Desire

The underlying customer situation.

Fields should include:

- audience;
- job-to-be-done;
- frequency;
- severity / value;
- current workaround;
- observed evidence;
- uncertainty.

## Opportunity

The economic thesis that solving or serving the problem may create sustainable value.

Includes:

- market;
- payer;
- value mechanism;
- reachability;
- willingness-to-pay evidence;
- competitive context;
- estimated economics;
- key assumptions;
- downside;
- legal / compliance considerations.

## Offering Hypothesis

A specific proposed way to capture the opportunity.

Examples:

- downloadable toolkit;
- subscription tool;
- done-for-you service;
- outsourced physical product;
- report subscription.

Multiple offering hypotheses may belong to one opportunity.

## Offering

The version actually built and exposed to customers.

## Venture

An operating business system around one or more offerings.

A venture includes:

- operating model;
- channels;
- capabilities;
- permissions;
- suppliers;
- economics;
- support model;
- autonomy level;
- customer obligations.

---

# 13. CAPABILITY SYSTEM — THE ARSENAL

The Foundry must be able to expand what it can manufacture and operate.

Create a first-class `capability` concept.

Examples:

- spreadsheet generation;
- PDF / document generation;
- image generation;
- website deployment;
- application development;
- payments;
- email delivery;
- CRM;
- data ingestion;
- web monitoring;
- analytics;
- ad buying;
- print-on-demand;
- fulfilment;
- video production;
- browser automation;
- API hosting;
- customer support;
- subscription billing.

Each capability records:

- name;
- description;
- owner / maintainer;
- status;
- input/output contract;
- production cost;
- reliability;
- QA method;
- legal / rights constraints;
- providers;
- permissions;
- reuse count;
- ventures using it;
- known failure modes.

## Capability Grant

A guild may request capital to acquire, build or integrate a capability when:

1. a surviving opportunity requires it;
2. the capability cannot be cheaply substituted;
3. the proposed investment is bounded;
4. the capability has a defined test;
5. the capability may be reusable.

A Capability Grant proposal includes:

- opportunity supported;
- capability missing;
- build / acquisition route;
- expected cost;
- expected time;
- test for success;
- reusable value;
- alternatives;
- abandonment condition.

Capability development is an investment, not automatically charged entirely to one product's variable unit economics. Track:

- initial capability investment;
- marginal usage cost;
- maintenance cost;
- venture-specific cost allocation.

---

# 14. CHANNEL MODEL

Do not make storefronts the core abstraction.

Use a **Commercial Channel** abstraction.

Possible channel types:

- marketplace;
- owned website / checkout;
- outbound sales;
- email;
- paid advertising;
- organic search;
- content distribution;
- social media;
- app marketplace;
- platform ecosystem;
- affiliate;
- referral / partner;
- reseller;
- physical fulfilment;
- other.

Define interfaces such as:

- `ResearchSourceAdapter`
- `CommercialChannelAdapter`
- `MarketplaceAdapter`
- `DirectCheckoutAdapter`
- `OutboundSalesAdapter`
- `MetricsAdapter`
- `AdPlatformAdapter`
- `ContentPublisherAdapter`
- `FulfilmentAdapter`
- `PaymentAdapter`
- `CustomerSupportAdapter`

A marketplace such as Etsy is one possible adapter, never the Foundry's default identity.

---

# 15. PROMOTION AND DEMOTION

Promotion must change **authority and objective**, not merely display a badge.

## Research -> Build

Requires:

- at least one opportunity that survives challenge;
- acceptable evidence provenance;
- clear key assumptions;
- buyer / user reachability hypothesis;
- legal / compliance review;
- falsifiable next step;
- justified offering hypothesis;
- credible build route;
- no unresolved hard compliance issue.

## Build -> Sales

Requires:

- commercially credible offering exists;
- blocking deterministic QA passes where applicable;
- zero unresolved critical defects;
- claims map to implemented capabilities;
- provenance / rights clear;
- support / fulfilment path exists;
- economics can be measured;
- market-test plan exists;
- owner intervention requirements are disclosed;
- real external release is approved.

## Sales -> Council eligibility

Suggested initial configurable minimum:

- multiple completed commercial experiments;
- positive or strategically defensible cumulative contribution over evaluation window;
- demonstrated capital discipline;
- demonstrated ability to stop a weak experiment;
- no unresolved compliance incident;
- acceptable quality / defect / refund performance where relevant;
- demonstrated strategy adaptation;
- sufficient evidence volume;
- demonstrated handling of failure.

Do **not** require an actual Valuable Defeat.

## Council

Judge:

- venture judgement;
- capital efficiency;
- recommendation calibration;
- treatment of contrary evidence;
- mentorship;
- diversity protection;
- reliability;
- innovation;
- failure quality;
- contribution to institutional learning.

Seats are revocable.

## Founder

Founder is a venture leadership appointment.

A Founder may control a granted venture budget but cannot increase its own ceiling.

Founder failure:

- **good failure:** staged evidence-backed test fails and stops promptly -> no automatic punishment;
- **normal venture failure:** reasonable decision, market rejects it -> may retain governance standing;
- **strategic failure:** weak thesis / validation or repeated poor judgement -> Founder appointment revoked and possible competence demotion;
- **major failure:** ignored evidence, stop signals or known lessons; repeated bad allocation -> may fall directly to Research;
- **compliance breach:** independent constitutional process, potentially termination.

A Founder demoted to Research retains verified history but loses:

- Founder authority;
- Council vote;
- capital-allocation authority;
- Elysium access;
- subordinate control;
- privilege to skip progression.

---

# 16. STAGNATION

Stagnation must not punish prudent waiting.

A guild may be considered stagnant only when:

- meaningful feasible experiments exist;
- capital / authority is available;
- the guild repeatedly avoids testing;
- the avoidance is not explained by compliance, dependencies, approvals or a rational evidence-gathering period.

Do not penalise:

- waiting for Chairman approval;
- waiting for external data;
- lack of available capital;
- deliberate rejection of weak opportunities;
- temporary observation periods required by the experiment.

---

# 17. COUNCIL, ELYSIUM AND FOUNDER

Council is earned, not seeded.

Until three guilds earn Council, use three non-ranking advisory perspectives:

- Growth Adviser
- Sceptic
- Operator

They do not gain career credit, own ventures or consume Council seats.

Council duties:

1. **Stewardship**  
   Mentor, challenge, protect strategic diversity and improve institutional decision quality.

2. **Venture Lab**  
   Explore markets, capabilities and possible new ventures.

No Council vote can override a Censor hard stop.

## Elysium

Elysium is bounded innovation time for proven guilds.

It may explore:

- new business models;
- strange niches;
- new capabilities;
- unusual channels;
- tooling;
- production techniques;
- market discontinuities.

It cannot bypass:

- spending controls;
- customer-contact controls;
- publishing controls;
- Constitution;
- rights rules;
- data rules.

## Founder pathway

`Exploration Grant -> Venture Grant -> Market Trial -> Company Formation`

Founder is a branching appointment, not simply "level 5."

Companies survive Founder removal and must support succession.

---

# 18. MEMORY SYSTEM

Context windows are working desks, not memory.

## Guild memory classes

- Identity
- Episodic
- Strategic
- Procedural
- Relationship
- Decision
- Working

## Institutional layers

1. Guild memory
2. Venture / Company knowledge
3. Global Foundry knowledge

Promotion between layers requires validation.

## Identity document

Each guild has a compact always-loaded identity document containing:

- name;
- generation;
- lineage;
- competence tier;
- appointments;
- doctrine;
- stable configuration;
- career milestones;
- demonstrated specialisms;
- current permissions.

Target roughly 500–1,500 tokens.

## Context Compiler

Before each model call, compile the smallest sufficient Context Pack:

- Constitution;
- guild identity;
- current objective;
- current venture state;
- relevant decisions;
- relevant failures;
- relevant capabilities;
- relevant knowledge;
- recent events;
- budget / permissions;
- tools available;
- output contract.

Agents may request additional information through explicit retrieval tools.

Never blindly stuff full history into prompts.

## Observation vs belief

Store separately:

- observations;
- inferences;
- hypotheses;
- validated knowledge;
- disputed claims.

A knowledge claim requires:

- provenance;
- evidence links;
- confidence;
- scope;
- last validation;
- contradictions;
- status.

Multiple guilds repeating one unsupported claim do **not** create independent corroboration.

A guild cannot be the sole validator of a consequential claim it created.

If an evidence source is corrected, invalidated or quarantined, dependent claims must be marked for review.

LLM summaries never replace raw evidence.

## Reflection

Reflection must produce a structured **strategy patch**, not personality drift.

Questions:

- What did I believe?
- What happened?
- Where was I wrong?
- What worked?
- Which evidence did I underweight?
- Which evidence did I overweight?
- What decision rule should change?
- What should remain unchanged?

A strategy patch should contain:

- old rule / belief;
- new rule / belief;
- evidence;
- scope;
- confidence;
- regression cases.

Promotion / demotion changes future behaviour by changing:

- authority;
- objective;
- retrieved context;
- accepted strategy versions;
- capital;
- permissions.

Career mechanics are not a substitute for learning.

---

# 19. RESEARCH AS INSTITUTIONAL MEMORY

Research is both:

- entry competence tier;
- rehabilitation tier;
- institutional evidence function.

Research receives observations from:

- Sales;
- Build;
- QA;
- support;
- financial events;
- market experiments;
- channel performance;
- customer feedback.

It must not copy guild conclusions directly into trusted knowledge.

Research performance is partly downstream:

- Did its opportunities survive?
- Were its assumptions calibrated?
- Did its proposed tests reduce uncertainty?
- Did its opportunities create value?
- Did it identify kill signals early?
- Did it avoid wasting build capital?

Poor-performing Research guilds may be retired and replaced after adequate evidence. Replacement doctrine should be deliberately differentiated rather than cloned from the current winner.

---

# 20. MONEY AND TREASURY

Initial experimental treasury:

**A$150**

This is the **operating experiment budget**, not the total engineering cost of building Agent Foundry.

Engineering labour, hosting, coding tools and other platform-development costs must be visible separately.

## Season 0 starting allocation

- Six Research guilds: **A$5 each = A$30**
- Cross-examination allowance: **A$6**
- Falsification Grant pool: **A$15**
- Prototype / Build Grant pool: **A$25**
- Independent QA / compliance reserve: **A$10**
- Market experiment pool: **A$40**
- Capability / contingency reserve: **A$24**

**Total: A$150**

No pool must be fully spent.

The Build pool is not automatically divided among winners.

A venture may receive:

- A$2;
- A$7;
- A$20;
- nothing.

Capital must be requested against a defined next decision.

---

# 21. FINANCIAL CONTROL

Never implement spend as:

`check balance -> execute external action -> calculate cost`

That is unsafe under concurrency and uncertain execution.

Use:

`check authority -> reserve bounded exposure -> dispatch -> reconcile result -> settle cost -> release unused reservation`

Track at minimum:

- available;
- reserved;
- committed;
- settled;
- refunded / reversed;
- disputed / uncertain.

Use idempotency keys for all retriable external actions.

If an external call times out after dispatch, treat the outcome as **uncertain**. Do not retry blindly until reconciliation determines whether the first attempt succeeded.

The Treasury must prevent internally authorised commitments from exceeding available capital.

Do not claim the system can guarantee that real-world external charges, chargebacks or billing anomalies can never create a deficit. If an unexpected external debit occurs:

- record it truthfully;
- freeze new commitments if required;
- surface the exception to the Chairman.

Approvals must be object-specific and version-specific.

An approval should identify, where relevant:

- offering version;
- exact listing / payload;
- price;
- destination / account;
- maximum spend;
- expiry;
- authorised action.

A material change invalidates stale approval.

---

# 22. BUSINESS ECONOMICS

Primary business KPI:

`Contribution Profit = Gross Sales - Discounts - Refunds - Marketplace/Payment Fees - Advertising - Variable AI/Tool Costs - Variable Fulfilment Costs - Variable Support Costs`

Report separately:

- platform engineering;
- fixed hosting;
- capability investment;
- owner governance time.

Track:

- revenue;
- units / customers;
- recurring revenue where relevant;
- contribution;
- contribution margin;
- CAC;
- conversion;
- churn where relevant;
- refunds / returns;
- defect rate;
- average order value;
- support burden;
- fulfilment cost;
- AI / tool cost;
- owner minutes;
- experiment outcome;
- Time to Kill;
- Excess Loss After Stop Signal;
- sample size / confidence.

Automation KPI:

`Owner Minutes per Accepted Deliverable / Operating Cycle`

Quality KPI:

`First-Pass QA Rate`

Agent efficiency:

`Cost per Accepted Deliverable`, including rework and retries.

No opaque 0–100 score may be the sole decision mechanism.

---

# 23. EXPERIMENT CLOSURE RULES

Every real experiment must end in a decision.

Never create a gate that can remain unresolved forever because a traffic or purchase threshold was not reached.

A market experiment must have one or more hard closure conditions such as:

- calendar deadline;
- spend cap;
- impression / reach cap;
- visit cap;
- lead cap;
- customer count;
- stop signal;
- compliance event.

At closure, classify the evidence.

Possible conclusions:

- promising;
- continue with modified hypothesis;
- retire;
- reposition;
- inconclusive.

**Inconclusive is legitimate.**

Examples:

- insufficient qualified traffic;
- channel proved unreachable within budget;
- tracking failure;
- too little buyer exposure.

Do not infer "no demand" from "we failed to reach buyers."

Separate:

1. **commercial demand evidence**
2. **distribution / channel evidence**
3. **offering quality evidence**
4. **economics**
5. **operational reliability**

---

# 24. PRODUCT / OFFERING QA

QA must depend on offering type.

Use deterministic tests wherever possible. AI review is secondary and cannot override deterministic failure.

## All offerings

Check:

- claims map to real capability;
- provenance / rights clear;
- required customer deliverables exist;
- versioned hashes recorded for artifacts;
- pricing and terms consistent;
- no known critical defect;
- support / fulfilment path exists;
- customer-facing disclaimers present where required;
- measurement instrumentation works;
- withdrawal / pause mechanism exists.

## Software

Test:

- critical workflow;
- authentication / permissions where relevant;
- billing path;
- error handling;
- data validation;
- security basics;
- supported-browser / device assumptions;
- monitoring;
- rollback.

## Spreadsheet / calculation products

Do not assume a formula exists correctly merely because it is present in the file.

Require:

- independent reference calculations;
- actual recalculation in the supported spreadsheet engine where necessary;
- fixture comparisons;
- deliberate mutation tests for important formula paths;
- missing-input tests;
- status-transition tests;
- edge cases.

## Services

Test:

- task intake;
- agent workflow;
- QA;
- delivery;
- rework path;
- turnaround;
- support;
- human-dependency measurement.

## Data / monitoring products

Test:

- source legality;
- provenance;
- freshness;
- extraction accuracy;
- failure detection;
- missing-data handling;
- customer-visible uncertainty.

## Physical / outsourced fulfilment

Test:

- supplier terms;
- sample quality where practical;
- delivery process;
- customer communication;
- returns / defects path;
- margin after fulfilment;
- tracking.

---

# 25. CUSTOMER SUPPORT AND POST-SALE OPERATIONS

Publishing is not the end of the operating loop.

Every venture must define:

- delivery confirmation;
- support intake;
- defect classification;
- rework / replacement;
- refund / return handling;
- customer communication;
- affected-version tracking;
- withdrawal / pause;
- incident response.

If the external channel cannot be automatically disabled, use:

`withdrawal_requested -> withdrawal_pending -> externally_confirmed_withdrawn`

Internal quarantine does not mean the external listing is actually gone.

---

# 26. SALES AND CHANNEL STRATEGY

Sales is a Season 0 capability, not a "later" capability.

Sales may select any compliant channel supported by the Foundry.

Examples:

- direct B2B outreach;
- owned website;
- marketplace;
- paid search;
- social;
- content;
- SEO;
- email;
- app marketplace;
- reseller / partner;
- referral;
- product-led acquisition.

Sales must explain:

- why the customer is reachable there;
- expected cost;
- attribution method;
- what the test proves;
- maximum exposure;
- stop condition.

The Foundry must not reward channels merely for generating vanity traffic.

---

# 27. AGENT CAPABILITIES

Do not implement dozens of unique autonomous programs.

Implement reusable capabilities instantiated with:

- guild identity;
- doctrine;
- memory;
- permissions;
- venture context.

Competitive capabilities:

1. Researcher
2. Analyst / Economist
3. Challenger
4. Venture Designer
5. Product / Service Architect
6. Builder
7. Sales Strategist
8. Reviewer
9. Memory Consolidator

Independent controls:

10. Censor / Constitution Engine
11. Deterministic QA Engine
12. Fates / Career Rules Engine
13. Context Compiler
14. Treasury / Authority Engine

Later:

- Council Mentor
- Founder
- Company Overseer

Model tiers:

- economy;
- standard;
- reasoning.

Season 0 guilds share the same routing policy initially.

Record for every model/tool call:

- provider / model;
- tokens / usage;
- latency;
- cost;
- retries;
- QA / rework;
- acceptance.

---

# 28. TECHNICAL STACK

Recommended initial stack:

## Frontend

- Next.js
- TypeScript
- React
- Tailwind
- shadcn/ui
- Recharts
- TanStack Query
- Zod

## Backend

- Python 3.12+
- FastAPI
- Pydantic v2
- SQLAlchemy 2
- Alembic
- PostgreSQL
- Redis
- Celery or equivalent durable task execution

## Storage

- S3-compatible object storage
- local MinIO for development
- signed URLs

## Memory

Start with:

- PostgreSQL exact queries;
- full-text search;
- explicit evidence and relationship tables.

Vector retrieval may be added when an evaluation demonstrates that it improves retrieval quality for Foundry tasks. Do not make pgvector a prerequisite for the first complete vertical slice.

## Observability

- structured JSON logs;
- application event log;
- per-agent cost / latency / usage;
- trace-ready instrumentation.

## Development

- Docker Compose
- pytest
- Playwright
- Ruff
- mypy
- ESLint / Prettier
- GitHub Actions

PostgreSQL is authoritative business state.

Conversation history is not.

---

# 29. CORE DATA MODEL

Use UUIDs and UTC timestamps.

Required conceptual entities:

## Organisation and guilds

- `companies`
- `guilds`
- `guild_identity_versions`
- `guild_lineages`
- `guild_competence_tiers`
- `guild_appointments`
- `guild_lifecycle_status`
- `guild_budgets`
- `guild_permissions`

## Discovery and evidence

- `markets`
- `customer_segments`
- `problems`
- `opportunities`
- `opportunity_alternatives`
- `evidence`
- `evidence_sources`
- `hypotheses`
- `challenges`

## Offerings and ventures

- `offering_hypotheses`
- `offerings`
- `offering_versions`
- `ventures`
- `venture_roles`
- `channels`
- `channel_accounts`
- `suppliers`
- `fulfilment_flows`

## Capabilities

- `capabilities`
- `capability_versions`
- `capability_providers`
- `capability_grants`
- `venture_capabilities`

## Artifacts and rights

- `artifacts`
- `asset_provenance`
- `licences`

## Work and agent execution

- `missions`
- `agent_runs`
- `tool_runs`
- `context_packs`

## Experiments

- `experiments`
- `experiment_metrics`
- `experiment_exposures`
- `stop_conditions`
- `experiment_decisions`

## Financial

- `treasury_accounts`
- `budget_grants`
- `fund_reservations`
- `cost_events`
- `sales_events`
- `refund_events`
- `financial_reconciliations`

## QA and compliance

- `qa_runs`
- `qa_findings`
- `approvals`
- `compliance_cases`
- `quarantine_items`

## Memory and decisions

- `memory_records`
- `knowledge_claims`
- `knowledge_evidence`
- `reflections`
- `strategy_patches`
- `decisions`
- `decision_evidence`
- `career_snapshots`

## Governance

- `council_memberships`
- `council_opinions`
- `elysium_grants`
- `founder_roles`
- `promotion_events`
- `demotion_events`
- `retirement_events`
- `termination_events`

## Operations

- `support_cases`
- `customer_incidents`
- `audit_events`
- `turns`
- `seasons`

Important rule:

**Consequential state changes always emit immutable `audit_events`.**

---

# 30. WORKFLOW ENGINE

Use explicit state machines.

LLM prose cannot directly mutate lifecycle state.

## Opportunity

`draft -> researching -> challenged -> falsification_ready -> testing -> review -> approved / rejected / parked`

## Offering hypothesis

`draft -> selected -> build_requested -> building -> qa -> approval -> ready -> published / active`

Side exits:

`paused | retired | quarantined`

## Venture

`proposed -> trial -> operating -> scaled -> paused -> retired`

## Capability grant

`proposed -> approved -> building / acquiring -> testing -> active / rejected / retired`

## Compliance

A hard stop can interrupt any state.

## Mission execution

1. load identity;
2. load competence / appointments;
3. load permissions;
4. load budget and reservations;
5. compile context;
6. reserve bounded cost exposure;
7. call capability / model / tool;
8. validate structured output;
9. persist execution result;
10. reconcile actual cost;
11. apply deterministic policy checks;
12. create proposed state transition;
13. commit only through workflow rules;
14. emit audit event;
15. create memory candidates;
16. release unused reservation.

Use idempotency keys.

---

# 31. PERMISSIONS

## Research

May:

- use permitted research sources;
- access internal knowledge;
- propose opportunities;
- propose falsification tests.

May not:

- publish;
- spend externally beyond grants;
- contact customers unless experiment-specific permission is granted;
- alter credentials.

## Build

May:

- use approved artifact / software / service-generation tools;
- acquire approved dependencies inside grant;
- create test deployments.

May not:

- publish commercially without approval;
- spend beyond grant.

## Sales

May:

- prepare offers;
- prepare listings;
- propose pricing;
- prepare campaigns;
- contact prospects within granted experiment authority;
- operate commercial channels inside permissions.

Season 0 requires Chairman approval before material real external spend and publishing.

## Council

May:

- read cross-guild evidence;
- advise;
- mentor;
- challenge;
- propose grants.

May not:

- override Censor;
- increase its own capital;
- rewrite audit history.

## Founder

May:

- allocate granted venture capital;
- create subordinate missions within venture envelope.

May not:

- increase own capital ceiling;
- bypass controls.

## Censor

May:

- read what is necessary;
- stop;
- quarantine;
- require remediation.

May not:

- compete;
- generate career rewards for itself.

No guild can alter its own:

- audit history;
- Constitution;
- budget ceiling;
- lifecycle record;
- permission ceiling.

---

# 32. UI — POC SCREENS

## Command Centre

Show:

- Season / Turn;
- Treasury;
- reserved / committed / spent;
- revenue / contribution;
- owner attention;
- active opportunities;
- experiments;
- offerings;
- ventures;
- capabilities;
- decisions requiring owner action.

## Pantheon

Guild cards:

- competence tier;
- appointments;
- doctrine;
- mission;
- budget remaining;
- career record;
- experiment classifications;
- strengths / weaknesses;
- lineage.

## Athenaeum

- problems;
- opportunities;
- discarded alternatives;
- evidence;
- hypotheses;
- contradictions;
- confidence;
- provenance;
- search.

## Arsenal

- capabilities;
- reliability;
- cost;
- ventures using them;
- capability grants;
- missing capabilities;
- known failure modes.

## Forge

- build queue;
- offering hypotheses;
- offering specs;
- artifacts / deployments;
- QA;
- rework;
- cost.

## Agora

- offers;
- prices;
- channels;
- acquisition tests;
- visits / leads / sales;
- CAC;
- conversion;
- contribution;
- refunds;
- stop conditions.

## Forum

Decision cards:

- decision requested;
- evidence for;
- evidence against;
- alternatives;
- capital at risk;
- missing capability;
- adviser / Council views;
- stop conditions;
- approve / revise / reject.

## Treasury

- total treasury;
- grants;
- reservations;
- committed;
- settled;
- external approvals;
- cost by guild / opportunity / venture / capability.

## Archives / Underworld

- career snapshots;
- promotions;
- demotions;
- retirements;
- terminations;
- immutable history.

## Senate / Elysium / Ventures

Basic dormant screens/schema in POC.

Enable only when earned.

---

# 33. TURN SYSTEM

Before real market activity, turns may be event-driven.

Suggested Season 0 sequence:

- Turn 1: create six Research guilds
- Turns 2–4: wide exploration
- Turn 5: internal guild selection
- Turn 6: cross-examination
- Turn 7: opportunity review
- Turns 8–10: falsification experiments
- Turn 11: venture design
- Turn 12: capital allocation / capability requests
- Turns 13–16: build
- Turn 17: QA
- Turn 18: rework / release decision
- Turn 19: Sales strategy
- Turn 20+: real market experiment

Do not force this exact sequence when evidence suggests a cheaper path.

Once real marketplace / customer activity begins, elapsed time matters. Operational turns may use 24-hour cadence.

Weekly equivalent:

- reflection;
- experiment evaluation;
- support review;
- memory consolidation.

Season:

- strategic review;
- career evaluation;
- capital review.

Initial mature season length can default to 90 days after real operations begin, but keep configurable.

---

# 34. DECISION RECORDS

Every consequential decision stores:

- question;
- hypothesis;
- evidence for;
- evidence against;
- uncertainty;
- alternatives;
- capability requirements;
- capital at risk;
- owner time at risk;
- staged validation plan;
- stop conditions;
- adviser / Council views;
- chosen action;
- actual outcome;
- cost;
- time to stop;
- experiment classification;
- learning;
- strategy patch if required.

Judge decisions primarily on what was reasonable given information available **at the time**, not hindsight alone.

---

# 35. FIRST SEASON SEED

Do not seed a "winner."

Seed:

- one parent company: `Agent Foundry`;
- Season 0 / Turn 1;
- Treasury: A$150;
- six Research guilds;
- empty Council;
- a small set of example opportunities from different business types;
- at least one deliberately weak opportunity;
- at least one rights-risk fixture;
- at least one false-demand fixture;
- one Valuable Defeat historical fixture;
- one Lucky Victory fixture;
- one Rout fixture;
- one Inconclusive fixture;
- mock market metrics;
- one missing-capability fixture.

Example seeded opportunities may include:

- downloadable operational toolkit;
- micro-SaaS;
- data monitoring product;
- productised B2B service;
- print-on-demand product;
- niche subscription report.

They exist to demonstrate schema breadth.

None is privileged in live Research.

Demo mode must visibly label simulated data.

---

# 36. BUILD PHASES

## Phase 0 — Skeleton

Deliver:

- Docker stack;
- database migrations;
- authentication;
- health checks;
- audit-event infrastructure;
- provider interfaces;
- seed command.

## Phase 1 — Treasury and Controls

Implement first:

- grants;
- reservations;
- settlement;
- permissions;
- approvals;
- idempotency;
- crash / timeout reconciliation;
- audit logging.

Prove with automated tests before autonomous execution.

## Phase 2 — Guild Economy

Create:

- six guilds;
- doctrines;
- budgets;
- missions;
- Pantheon;
- Treasury;
- event-driven turns.

## Phase 3 — Evidence and Memory

Implement:

- evidence;
- observations;
- hypotheses;
- knowledge claims;
- relationships;
- context compiler;
- reflections;
- strategy patches;
- career snapshots.

Use exact/full-text retrieval first.

## Phase 4 — Opportunity Tournament

Implement:

- problem discovery;
- three opportunities per guild;
- discarded alternatives;
- challenge round;
- opportunity review;
- falsification proposals.

## Phase 5 — Experiment Engine

Implement:

- grants;
- stop conditions;
- exposure;
- closure;
- Victory / Defeat / Rout / Inconclusive classification;
- decision records.

## Phase 6 — Arsenal / Capability Grants

Implement:

- capabilities;
- missing-capability requests;
- reusable capability records;
- capability tests;
- marginal vs investment cost.

## Phase 7 — Generic Offering / Venture Framework

Implement:

- offering hypotheses;
- offering versions;
- venture;
- channel abstraction;
- generic artifacts;
- service workflows;
- generic deployments.

Do not hard-code XLSX/PDF as the only production path.

For deterministic demo coverage, include at least two materially different fixture offering types, such as:

- document / spreadsheet product;
- small web service or software offering.

## Phase 8 — QA / Censor

Implement:

- deterministic QA interface;
- type-specific QA;
- rights / provenance;
- hard stop;
- quarantine;
- remediation;
- release approval.

## Phase 9 — Agora / Sales

Implement:

- offer;
- price;
- channel;
- market experiment;
- manual / mock external adapters;
- metric ingestion;
- contribution economics;
- support workflow.

## Phase 10 — Fates

Implement:

- promotions;
- demotions;
- retirement;
- stagnation;
- Founder rehabilitation;
- career consequences.

## Phase 11 — Dormant Endgame

Implement schema / UI placeholders and tests for:

- Council;
- Elysium;
- Founder;
- venture succession;
- future company spawning.

Do not enable uncontrolled recursive autonomy.

---

# 37. ACCEPTANCE TESTS

The POC is complete only when all required tests pass.

## Economy

- Treasury cannot overcommit through normal authorised actions.
- Concurrent missions cannot reserve the same funds twice.
- Guild cannot spend above authority.
- Actual cost is recorded.
- Unused reservations release correctly.
- Unknown external execution status does not trigger blind retry.
- Capability investment is distinguishable from marginal venture cost.
- External anomaly can be recorded even if it pushes accounting negative, and new spend can be frozen.

## Guilds

- all six guilds exist;
- doctrine differs;
- model routing policy is initially equal;
- memory survives turns;
- promotion changes objective and permissions;
- demotion preserves verified history while removing authority;
- retirement differs from constitutional termination.

## Opportunity Tournament

- six guilds can independently propose three structured opportunities;
- candidates are not restricted to digital products;
- each guild can preserve rejected alternatives;
- cross-examination can attach counter-evidence;
- an opportunity can be rejected cheaply;
- zero opportunities may advance;
- no seeded example is forced to win.

## Falsification

- a guild can propose the cheapest disconfirming test;
- test has budget and time bound;
- test can close with success, failure or inconclusive;
- low traffic does not automatically become "no demand";
- stop signal blocks additional authorised spend.

## Capability System

- opportunity may require a missing capability;
- missing capability does not automatically reject opportunity;
- guild can request Capability Grant;
- capability can be tested and activated;
- activated capability can later be reused by another venture.

## Offering / Build

- one opportunity can have multiple offering hypotheses;
- selected offering can be non-Etsy and non-download;
- offering can become a product, service, software or other supported type;
- QA failures block release;
- central QA cost is tracked.

## Compliance

- rights-risk fixture triggers hard stop;
- quarantined item cannot proceed;
- confirmed serious violation can terminate guild;
- performance failure cannot use termination as routine punishment;
- no Council vote can override hard stop.

## Sales

- guild can propose price / bundle / commercial strategy;
- guild can choose a channel type;
- guild cannot exceed spend ceiling;
- owner approval is required for real Season 0 external spend / publication;
- metrics ingestion calculates contribution;
- refunds / returns affect economics;
- support burden is measurable.

## Failure intelligence

- bounded failed experiment can classify Valuable Defeat;
- reckless continuation after stop condition can classify Rout;
- successful reckless experiment can classify Lucky Victory;
- experiment can classify Inconclusive;
- prolonged avoidable non-experimentation can trigger Stagnation;
- compliance violation is not treated as ordinary performance failure.

## Memory

- raw evidence remains immutable;
- summaries link to source;
- observations and hypotheses are separate;
- duplicate guild repetition does not create fake corroboration;
- invalidating evidence marks dependent claims for review;
- context compiler retrieves relevant prior decisions without full-history stuffing;
- promotion creates career snapshot;
- terminated guild active memory freezes;
- strategy patch can alter future retrieved guidance.

## Operations

- published venture has support flow;
- critical defect can trigger pause / withdrawal;
- local withdrawal does not falsely imply external channel withdrawal;
- refund or support event attaches to affected offering version.

## UI

Command Centre answers:

- what happened;
- what was spent / reserved;
- what was learned;
- which opportunities remain;
- what capabilities exist;
- what decisions require the Chairman;
- what the next requested allocation would buy.

Mobile-width operation must remain usable.

---

# 38. DEFINITION OF DONE

The Chairman can:

1. start Season 0 with A$150;
2. inspect six mythology-aligned Research guilds;
3. run a wide exploration turn;
4. receive multiple materially different business opportunities;
5. see rejected alternatives retained;
6. run cross-examination;
7. reject weak opportunities without building them;
8. approve a bounded falsification test;
9. close that test as promising, weak or inconclusive;
10. compare multiple offering forms for the same opportunity;
11. approve a Capability Grant where required;
12. promote an eligible guild to Build;
13. build a commercially credible offering that is not hard-coded to Etsy or spreadsheets;
14. run type-appropriate QA;
15. hard-stop a compliance-risk artifact or venture;
16. promote a passing Builder to Sales;
17. allow Sales to choose an appropriate lawful channel;
18. approve a real or manual-handoff launch;
19. ingest real or clearly labelled fixture market metrics;
20. see revenue, contribution, costs, refunds and owner attention;
21. observe support / defect handling;
22. classify experiment outcome;
23. observe memory consolidation and strategy change;
24. observe promotion / demotion / retirement logic;
25. inspect immutable history;
26. see dormant Council / Elysium / Founder mechanics;
27. complete Season 0 even if no business deserves further investment.

The POC succeeds when the system demonstrates:

> **The Foundry can discover what kind of business it should become, not merely automate a business chosen in advance.**

---

# 39. NON-GOALS / DO NOT DO

Do not:

- force Etsy;
- force digital products;
- force software;
- force Australia;
- force B2B or B2C;
- force exactly one winner;
- fabricate demand data;
- fake sales;
- fake reviews;
- fabricate customer conversations;
- optimise raw revenue at the expense of contribution;
- reward rule breaking;
- punish properly bounded failure merely because it failed;
- require a Valuable Defeat for promotion;
- punish guilds for waiting on approval;
- treat low traffic as proof of low demand;
- allow senior guilds to avoid all risk indefinitely;
- let Council become permanent;
- let Founder prestige survive major failure automatically;
- let guilds edit their own audit history;
- let summaries overwrite evidence;
- let LLM prose directly mutate lifecycle state;
- use one opaque AI score as the sole promotion mechanism;
- create dozens of always-running agents;
- give every guild a different model in Season 0;
- allow recursive companies in the POC;
- claim autonomy while hiding routine human fulfilment;
- require pgvector before retrieval quality justifies it;
- assume a capability must already exist before an opportunity can be considered.

---

# 40. INITIAL CONFIGURATION

Implement editable server-side configuration approximately like:

```yaml
treasury:
  initial_aud: 150

guilds:
  research_start_budget_aud: 5
  challenge_budget_aud: 1
  initial_opportunities_per_guild: 3

pools:
  falsification_aud: 15
  build_aud: 25
  qa_compliance_aud: 10
  market_experiments_aud: 40
  capability_contingency_aud: 24

external_actions:
  require_human_publish_approval: true
  require_human_external_spend_approval: true
  require_version_specific_approval: true

autonomy:
  season_0_target_level: 2
  routine_human_fulfilment_allowed: false

constitution:
  unknown_rights_action: hard_stop
  confirmed_serious_violation: terminate
  persistent_performance_failure: retire

memory:
  identity_token_target: 1200
  raw_records_immutable: true
  vector_retrieval_required: false

opportunity_tournament:
  force_winner: false
  require_falsification_plan: true
  allow_missing_capability: true

council:
  minimum_members_for_activation: 3

season:
  premarket_turn_mode: event_driven
  market_turn_hours: 24
  mature_season_days: 90
```

These are defaults, not hard-coded constants.

---

# 41. CODING-MODEL INSTRUCTION

Build the smallest complete vertical slice that satisfies the acceptance tests.

Prefer deterministic software for:

- calculations;
- budgets;
- reservations;
- permissions;
- state transitions;
- QA;
- enforcement;
- reconciliation.

Use language models for:

- research synthesis;
- opportunity generation;
- hypothesis formation;
- challenge;
- venture design;
- sales strategy;
- review;
- reflection.

Do not simulate autonomy by hiding human approvals.

Do not simulate learning by appending chat transcripts.

Do not simulate economics with invented revenue.

Do not simulate a business by predetermining what the business must be.

The first meaningful question Agent Foundry must answer is:

> **Given a small amount of capital, a set of general capabilities and six competing doctrines, what lawful business opportunity deserves to exist?**

The second is:

> **Can the Foundry build, launch and operate that venture with agents doing the routine work and the Chairman providing governance rather than labour?**

The POC is successful when it can run a small, auditable, competitive economy in which guilds:

- discover;
- challenge;
- falsify;
- acquire capabilities;
- build;
- sell;
- operate;
- learn;
- take bounded risks;
- fail intelligently;
- suffer consequences for recklessness;
- retain verified memory;
- expand the Foundry's reusable capabilities;
- earn greater authority;
- and eventually earn the right to govern or found new business arms.

That is the foundation.

Build this before adding scale.
