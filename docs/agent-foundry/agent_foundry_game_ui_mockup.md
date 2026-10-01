# Agent Foundry: Game UI Mockup (Season −1)

**Companion to:** `agent_foundry_build_spec_v3.1_lean.md` (§23 Game layer, §14A Funding operations)
**Interactive mockup:** https://claude.ai/artifact/Pe8aU2HaKUDAEPUSUhEpuj (private until shared)
**Status:** Design reference. Every number is **demo data**. No real money has been spent and no real evidence collected.

---

## 1. What this is

Agent Foundry is played like a turn-based strategy game: a world map, challenges fought as duels, decisions played as cards, and an end-of-round results screen. Underneath it is a real control system that spends real money and acts in the real world.

The mockup shows Season −1, **Turn 4 of 6**, part-way through the challenge round. Five guilds have each picked their best business idea, and an independent AI is challenging each one.

### The two rules the design follows

1. **Every game element is a real record.** Coins are real A$. A figure on the map is a real AI task. A territory's colour is its real standing at Gate A. Nothing is decorative, and nothing is made up.
2. **Plain words first.** Themed names (Colosseum, Council, Athenaeum) are titles only, always with a plain label underneath. Money, evidence, risks and approvals use their real names. Any action with a real-world effect says so before you press it.

---

## 2. Visual language

| Element | Choice |
|---|---|
| Mood | Dark-fantasy strategy game: deep navy ground, gold trim, glowing hexagonal guild crests |
| Type | **Cinzel** (titles, guild names) · **Barlow Condensed** (numbers, labels) · **Barlow** (body text) |
| Colours | Gold `#F2C14E` (money, primary actions) · teal `#49C6B4` (passed / OK) · red `#E0525A` (challenge, risk, stop) · blue `#7FB8FF` (your time, "In the real world" boxes) · pink banner (demo data) |
| Guild colours | Hermes teal · Ariadne violet · Hephaestus orange · Mercury gold · Prometheus red · Janus grey (asleep) |
| Motion | Pulsing End Turn button, stamp animations on decisions, bobbing and walking figures, flowing pipelines. All motion stops under `prefers-reduced-motion`. |
| Accessibility | Real buttons and links, 44 px minimum touch targets, a text label next to every icon, colour never the only signal |

---

## 3. Global header (every screen)

- **Demo banner:** "Demo data · no real money has been spent and no real evidence collected yet". Shown whenever fixture data is visible.
- **Crest:** "AGENT FOUNDRY · SEASON −1 · TURN 4 / 6".
- **Resource bar:**

  | Shows | Value in mockup | Real object |
  |---|---|---|
  | Budget left | A$5.48 of 20 | Available balance of tranche T0 |
  | Reserved for running tasks | A$3.10 | Open reservations |
  | Your time left this turn | 8 min | Chairman attention budget |
  | Evidence collected | 63 items | `evidence` rows |
  | Ideas ready for Gate A | 2 of 5 | Opportunities passing all Gate A checks |

- **STOP ALL** button: "Stops every AI task and all spending immediately".
- **Tabs:** Map · Challenges · Decisions (badge: 2) · Guilds · Evidence · Budget · Gate A.

---

## 4. Screens

### 4.1 Map (home)

**Layout:** guild standings on the left · the world map in the centre · selected idea, round goal, decisions and achievements on the right · activity log and End Turn underneath.

**"Who controls the map" bar** (above the map): each guild's share of the evidence that has passed checks. Mercury 8 · Hermes 7 · Ariadne 6 · Hephaestus 5 · Prometheus 4 (of 30).

**The world:**

| Map feature | Meaning |
|---|---|
| **Capital island** with four buildings | **Challenges** (ideas get challenged) · **Evidence** (checked and stored) · **Budget** (real money) · **Your Decisions** (approvals happen here) |
| **Guild territories** around the capital | Each guild's best idea. Fill strength = Gate A checks passed (stronger colour = stronger position). |
| **Banners with rank** (#1–#5) | Click to select. Shows the idea, its 4 Gate A checks, and an "In the real world" note. |
| **Pipelines** from each territory to a capital building | Dashed light line flowing = evidence moving. Red flowing line = a challenge happening now. Grey dashed = inactive (Janus) or locked (route to Gate A, with a padlock). |
| **Paper carriers** walking toward the capital | Evidence coming in to be checked |
| **Coin carriers** walking out | Budget going out to a task |
| **Small figures in territories** | AI tasks this turn. Bobbing = running. Still = finished. "?" bubble = result unknown. "waiting on you" = blocked on your decision. |
| **Red figure** walking between Challenges and Mercury | The challenger AI, mid-challenge |
| **Guard at Gate A** | Gate A checks run automatically at Turn 6 |
| **Hatched locked area** | "Real-world tests (Stage 2) · open only if Gate A passes" |
| **Janus islet**, sleeping figure | "Asleep until needed" |
| Houses and trees | Scenery only |

**Territory statuses (demo):**

| Rank | Territory | Guild | Idea | Status line |
|---|---|---|---|---|
| 1 | Reseller Marches | Mercury | Small online resellers lose fees by listing items in the wrong category | Ready for Gate A · being challenged now |
| 2 | Clinic Vale | Ariadne | Small health clinics don't charge for no-show appointments | Ready for Gate A |
| 3 | Ledger Isles | Hermes | Small bookkeeping firms re-type receipts by hand | Hasn't answered its challenge · 1 task stuck |
| 4 | Vendor Steppe | Hephaestus | Food-truck owners struggle with council permit paperwork | Waiting for your decision (A$0.70) |
| 5 | Tender Reach | Prometheus | Tiny contractors miss changes to government tenders | Not enough evidence · 1 source quarantined |
| – | (islet) | Janus | — | Asleep until needed |

**Selected-idea card** (right column) shows the 4 Gate A checks as boxes: evidence items (need 5) · separate sources (need 3) · signs people pay (need 2) · survived challenge. Each is teal if met and red if not. Below them is an **"In the real world"** line, e.g. *"An independent AI is questioning this idea now. Nothing has been spent on customers. If it passes Gate A, the test would be a A$19 pre-order page."*

**Goal panel:** "Reach Gate A: find at least one business idea with enough real evidence to justify spending money on a test." Five objectives with ticks. "If you pass: you can release the next A$25 for small real-world tests. You can also stop here and keep it. Both are good outcomes."

**End Turn:** a pulsing button. It first shows a confirmation: *"Ending the turn starts 3 AI tasks and reserves up to A$1.20 of real money for them. 2 decisions are still open and will wait for you."*

**Achievements (from real events only):** Light Touch (every turn within your time budget) · Caught It (a web page tried to instruct our AI and was blocked) · Different Minds (guilds' ideas are genuinely different).

### 4.2 Challenges (Colosseum)

A three-round duel between a guild's best idea and the **challenger AI**, a different model from the guilds, so it doesn't share their blind spots.

| Round | Challenge (red card) | Response (teal card) | Evidence | Result |
|---|---|---|---|---|
| 1 | **Interest Is Not Payment**: where is money actually changing hands? | **The Paid Audit**: "Paid $45 for someone to … move about 60 items into the right categories." | ev_0211 · quote checked | ANSWERED |
| 2 | **Free Alternatives**: category guides are free; why pay? | **A Rival Already Charges**: a paid audit service sells at $39 one-off | ev_0202 · quote checked | ANSWERED |
| 3 | **Small Stakes**: leakage per seller may be too small for A$19 | **Let A Real Test Decide**: the test demands 3 paid pre-orders | No evidence yet · kept as a known risk | STILL OPEN |

The result screen reads **"THE IDEA SURVIVES"**, with chips: Advances to Gate A · 1 known risk: small stakes · Cost A$0.46 · A$0.32 returned.

The challenger panel shows its model, the money reserved for this challenge (A$0.78), its own research (3 sources found), and the note: *"The challenger doesn't compete and can't win anything. Its objections stay on the record even when the idea survives."*

### 4.3 Decisions (Council)

Your pending decisions as a hand of cards. Pick one to enlarge it. Each card shows:

- the type, who's asking, and a plain-English question;
- context;
- **"IN THE REAL WORLD"** box: the exact real effect;
- money at risk · time to decide · expiry · approval ID (payload hash);
- for and against;
- the challenger AI's view;
- three buttons: approve / send back / decline. Each plays a stamp animation and writes to the activity log.

| Card | Question | In the real world | Money at risk |
|---|---|---|---|
| Compliance | Keep a suspicious web page blocked? | No money moves. Keeping it blocked means Prometheus can't use this source as evidence. | A$0.00 |
| Spending | Let Hephaestus search again? | Up to A$0.70 of real money is reserved for AI usage. Only what's actually used is charged; the rest comes back. | A$0.70 |
| Gate A (locked until Turn 6) | Release A$25 for real-world tests? | Releases A$25 of real money. Tests may contact real people and take real pre-orders. | A$25.00 |

Footer: *"Each approval covers exactly what's on the card. If anything changes (price, amount, wording), your approval no longer applies and you'll get a new card."*

### 4.4 Guilds (Pantheon)

A character-select screen: large glowing portrait with light rays, name, title, strategy and guiding question, and a status chip. Six roster tiles along the bottom. Janus is greyed out as "Asleep".

**Measured stats** (segmented bars; real measurements, never summed):

| Stat | Meaning | Mercury (demo) |
|---|---|---|
| Quote accuracy | % of the guild's quotes confirmed on the saved page | 95% |
| Proof people pay | Share of its evidence showing real spending | 4 of 8 items |
| Budget left | Remaining research budget | A$0.62 of A$2.50 |
| Originality | 1 − similarity to its closest rival | 61% like its closest rival |

Strengths and weaknesses shown, each from a real event (e.g. Mercury: *All Checks Passed*, *Accurate Quoting*; weakness *Small Stakes*). **Setup:** strategy v1.0 · claude-sonnet-5-5 medium effort · 3 research tasks, max A$0.45 each · can read the web, can't send or buy anything.

Note on screen: *"The AI guilds never see their own rank, so it can't skew their work."*

### 4.5 Evidence (Athenaeum)

- Counters: 63 evidence items · 22 conclusions drawn · 17 unproven claims · 3 disputed · 1 blocked source.
- **List** (left): Mercury's 8 items from 5 websites, each tagged *People pay · Price list · Complaint · Opinion · Search trends*. Items from the same website are marked "same website, counts once".
- **Selected item** (centre) on a parchment page: the saved text with the quote highlighted, a "Saved by tool" wax seal, "Quote confirmed on the saved page", source URL, time saved (UTC), fingerprint (SHA-256), and the research task that saved it.
- **Problems caught** (right): *Blocked source* (hidden text addressed to AI agents, shown as inert text; nothing was sent) · *Quote not found* (claim now counts as unproven) · **How evidence works**: *"Evidence is only ever saved by the system's own web tools, never written by the AI…"*

Demo sources use `.example` domains so nothing can be mistaken for a real site.

### 4.6 Budget

- **Stage 1 · Research · open:** treasure chest, "A$5.48 left of A$20", with bars per pool (guild research, challenges, quote checking, spare) showing spent vs reserved.
- **Stage 2 · Real-world tests · locked** (A$25) and **Stage 3 · Build and launch · locked** (A$30): chained chests, each with "Unlocks if…" and how the money would be split.
- **Spending record (can't be edited):** time, what, task ID, amount, and a state chip (RESERVED · CHARGED · RETURNED · UNKNOWN). The UNKNOWN row explains: *"Task m_0446 timed out, so we don't know if the provider charged for it. It won't be retried until that's confirmed, so it can't be paid for twice."*
- **AI model costs:** per model: calls, tokens in/out (cached), searches, A$ and US$.
- **Not part of this budget:** building the Foundry software, hosting (A$0 · runs locally), your time (31 min), money you kept out of the experiment (A$75 of A$150).
- **Stop everything:** a big red button with an explanation of exactly what it does.

### 4.7 Gate A results

An end-of-round screen with a glowing gate and the title **"GATE A RESULTS"**: *"Is any idea strong enough to spend real money testing?"*

| Idea | Checks | Stamp | Why |
|---|---|---|---|
| Mercury · resellers | 4/4 | PASSES | 8 evidence items · 5 sources · 4 signs people pay. 1 known risk. |
| Ariadne · clinics | 4/4 | PASSES | 6 · 3 · 2. Only just. |
| Hermes · bookkeeping | 3/4 | HELD BACK | Enough evidence, but never responded to its challenge. |
| Hephaestus · food trucks | 3/4 | FELL SHORT | Only 1 sign people pay. Rejected, but kept on file. |
| Prometheus · tenders | 2/4 | FELL SHORT | A blocked source left it 1 short on sources and evidence. |

Season tally: A$17.80 spent of A$20 · A$2.20 coming back · 71 evidence items · 10 ideas rejected cheaply · 5 challenges · 46 min of your time.

**What the guilds learned:** proposed rule changes, each needing 2 separate results or your approval to take effect.

**Your decision:**
- **RELEASE A$25 FOR TESTS**: *"Real money. Locks 2 test plans, each max A$15 and 21 days. Tests may contact real people."*
- **END THE SEASON**: *"Spend nothing more. A$2.20 comes back and A$55 stays locked. This still counts as a success."*

### 4.8 Phone

The decision card at phone width with a compact header (A$ left, minutes left), the "In the real world" box, large buttons, and a bottom tab bar. The map collapses to a list of ideas on phones.

---

## 5. Funding screens still to design (from spec §14A)

The mockup doesn't yet show these. They're needed before real money is used:

1. **Funding checklist** (Budget screen, when a stage is released): per-rail steps, e.g. *"Buy A$5 of AI credits and set the provider spend limit to A$5 · Set experiment-card limit to A$15"*, each ticked, verified or backed by an uploaded screenshot. Spending stays locked until every item is confirmed.
2. **Top-up card** (Decisions): *"AI credits will run out next turn. Buy US$2 (≈ A$3.10) and raise the limit to match?"*
3. **Purchase handoff card** (Decisions → Budget): what to buy, from whom, exact price, a receipt upload, and the reservation it settles.
4. **Reconciliation status** (Budget): last daily check against the provider's usage report, last monthly statement match, and any differences waiting for you.
5. **Revenue and refund reserve** (Season 0 onward): sales in, refund reserve held back, and the "propose a new stage from revenue?" decision.

---

## 6. Copy rules for anyone writing UI text

- Say what's real: "A$0.70", "evidence item", "known risk", "approve", "blocked source".
- Themed names are titles with a plain label: "THE COLOSSEUM · challenges".
- Every button with a real effect has an "In the real world" line nearby.
- Stopping early is framed as success, never as failure or loss.
- No timers, streaks, "almost there" nudges or rewards for spending.
- Guild prompts never contain ranks, achievements or stats. Those are for the Chairman only.
