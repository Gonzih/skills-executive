---
name: board-memo
description: Drafts executive-quality board memos, investor updates, and leadership communications
triggers:
  - board memo
  - board update
  - board communication
  - executive memo
  - board deck narrative
  - board letter
  - stakeholder memo
---

# board-memo

Drafts executive-quality board memos, investor updates, and leadership communications. Converts bullet points and raw thinking into structured, clear, decisive executive writing. Board members read hundreds of memos — this one gets read.

## How to invoke

```
/board-memo
```

Or describe what you need: "draft a board memo recommending we acquire Acme Corp" or "write an investor update on our Q2 results."

## Workflow

### Step 1 — Communication type

Identify which format this is:

- **Board memo** — formal decision document for the board
- **Investor update** — periodic update to investors/shareholders
- **All-hands message** — company-wide communication from leadership
- **Executive team brief** — internal leadership alignment document
- **M&A announcement** — acquisition or merger communication
- **Crisis communication** — urgent situation requiring immediate clarity

### Step 2 — Core message

Identify the ONE thing readers must understand, remember, or decide after reading. Every structural choice serves this single message. If you can't state it in one sentence, the memo isn't ready.

### Step 3 — Context dump

Gather from the executive:

- What is happening (situation)
- Key data points (numbers, metrics, evidence)
- Decisions needed from the board (or FYI only)
- Options that were considered
- Your recommendation
- Key risks

### Step 4 — Structure (board memo standard)

Build the memo in this order:

1. **Situation** (2–3 sentences): What is happening and why it matters now
2. **Options considered** (brief): 2–3 alternatives evaluated, one line each
3. **Recommendation** (bold, clear): What you're recommending and the primary reason
4. **Supporting rationale** (3–5 bullets): Evidence and logic backing the recommendation
5. **Risks and mitigations**: What could go wrong; the specific plan to address each
6. **Decision needed / FYI**: Explicit ask of the board, or label as informational
7. **Timeline**: 3–5 key milestones with dates

### Step 5 — Executive voice calibration

Apply these rules without exception:

- Direct over diplomatic: "We recommend X" not "It may be worth considering X"
- Active voice: "The team delivered" not "Results were delivered by the team"
- No hedging: Remove "perhaps," "might," "could potentially," "it seems"
- No corporate filler: Remove "leverage," "synergies," "best-in-class," "robust"
- Numbers over adjectives: "Revenue grew 34%" not "Revenue grew significantly"
- Confident under uncertainty: "We don't yet know X; we'll have clarity by [date]" not "There are various unknowns"

### Step 6 — Length discipline

- Target: 1 page, 600 words maximum
- If longer: add a 3-sentence executive summary at the top
- Cut ruthlessly: if a sentence doesn't serve the core message, delete it

## Example output

**Situation**

Meridian Analytics, our largest direct competitor in the SMB segment, has entered a strategic review process and is available for acquisition. Their trailing 12-month revenue is $28M at 71% gross margin. An acquisition would accelerate our path to segment leadership by 18 months and eliminate our most effective sales competitor.

**Options considered**

1. Acquire Meridian at $15M — immediate capability and customer consolidation
2. Accelerate organic growth — maintain current trajectory, 18-month lag
3. Strategic partnership — limited upside, competitor remains independent

**Recommendation**

**Acquire Meridian Analytics for $15M.** The price represents 6.4x revenue at a 40% discount to comparable SaaS acquisitions. Customer overlap is under 12%, meaning near-total net-new revenue from day one.

**Supporting rationale**

- 847 SMB customers with average ACV of $33K — immediately addable to our existing motion
- Meridian's ML-based forecasting module fills our most-requested product gap (cited in 34% of lost deals)
- Acquisition eliminates competitor that beat us in 19% of competitive deals last year
- Combined entity reaches 22% SMB market share, the threshold for category leadership perception
- Founding team open to retention; key engineers have indicated interest in staying

**Risks and mitigations**

- Integration complexity: Dedicated 6-person integration team appointed; 90-day playbook ready
- Customer churn during transition: White-glove onboarding program for top 100 accounts; account manager continuity guaranteed for 12 months
- Culture clash: Meridian leadership has reviewed our values; two joint offsites planned pre-close

**Decision needed**

Board approval to proceed with LOI at $15M valuation. Term sheet requires board authorization under our charter.

**Timeline**

- March 28: LOI signed
- April 15: Due diligence complete
- May 10: Definitive agreement signed
- June 1: Close and Day 1 integration begins

## Live Data Sources

Use these sources to ground board memos in real, current data:

**SEC EDGAR DEF 14A Proxy Statements**
- Search recent proxy filings: `https://efts.sec.gov/LATEST/search-index?q=&dateRange=custom&startdt=2024-01-01&forms=DEF+14A`
- DEF 14A filings contain executive compensation benchmarks, board composition data, governance disclosures, and shareholder vote outcomes — useful for competitive positioning and compensation context in board memos
- Filter by company name or SIC code to find peer proxies
- EDGAR full-text search: `https://efts.sec.gov/LATEST/search-index?q="board+of+directors"&forms=DEF+14A` for thematic research

**SEC EDGAR 8-K Material Events**
- Recent 8-K filings reveal peer company announcements, M&A transactions, leadership changes, and material events — useful for competitive context sections of acquisition or strategic memos
- Search: `https://efts.sec.gov/LATEST/search-index?q=&forms=8-K&dateRange=custom&startdt=2024-01-01`

**SEC EDGAR 10-K / 10-Q Financials**
- Pull audited financials for comparable companies when building valuation rationale or competitive benchmarks
- Search: `https://efts.sec.gov/LATEST/search-index?q=&forms=10-K`
