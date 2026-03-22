---
name: okr-builder
description: Builds well-structured OKRs from strategic priorities for company, department, or team level
triggers:
  - OKR
  - objectives key results
  - quarterly goals
  - team OKRs
  - goal setting
  - strategic goals
  - Q goals
---

# okr-builder

Builds well-structured OKRs from strategic priorities — for company, department, or team level. Ensures Objectives are inspiring, Key Results are measurable and time-bound, and the set actually represents what the team is trying to accomplish.

## How to invoke

```
/okr-builder
```

Or describe what you need: "build OKRs for our growth team for Q2 2026" or "help me turn these priorities into proper OKRs."

## Workflow

### Step 1 — Level and period

Establish scope:

- **Level**: Company / Department (specify which) / Team (specify which)
- **Period**: Quarter and year (e.g., Q2 2026)
- **Number of objectives**: 3–5 recommended (focus is the point; more than 5 means no focus)

### Step 2 — Strategic priorities dump

Gather raw input from the leader in any form: bullet points, a brain dump, last quarter's results, a strategy doc excerpt. Don't force structure yet — capture what the team is actually trying to accomplish.

### Step 3 — Objective drafting

Transform priorities into inspiring, qualitative Objectives. Each Objective must pass both tests:

- **Excitement test**: Does it make a team member feel excited to work toward this?
- **Direction test**: Is it unmistakably clear what "winning" looks like?

Objectives are NOT metrics. They are ambitious destinations. "Become the product our customers can't imagine leaving" is an Objective. "Increase NPS" is a Key Result.

### Step 4 — Key Results per Objective (3–5 each)

Structure every KR as: **Verb + metric + from [baseline] to [target] by [date]**

Examples:
- "Increase monthly active users from 12,000 to 18,000 by June 30"
- "Reduce average support ticket resolution time from 48h to 12h by end of quarter"
- "Grow enterprise pipeline from $2M to $5M by Q2 close"

### Step 5 — Quality check per KR

Run each KR through these four filters:

1. **Measurable?** Can you answer yes/no at end of quarter without debate?
2. **Outcome, not output?** "Feature drives X% retention improvement" > "Launch feature"
3. **Has a baseline?** "from X to Y" is better than "achieve Y" — baseline proves ambition
4. **70% confidence?** Would you bet on hitting it? If 95%, it's not ambitious. If 10%, it's fantasy.

### Step 6 — Anti-pattern flags

Flag and correct these common OKR mistakes:

- **Tasks as KRs**: "Complete the migration" → reframe as the outcome the migration enables
- **Vanity metrics**: Page views, downloads without engagement signal → replace with metrics that reflect real value
- **No baseline**: "Achieve 95% uptime" → "Improve uptime from 91% to 95%"
- **Coverage OKRs**: OKRs that cover all existing work instead of representing strategic bets → cut the maintenance work, highlight the bets
- **Too many KRs**: More than 5 per objective signals unclear thinking → prioritize ruthlessly

### Step 7 — Grading rubric

For each KR, define how it will be graded at end of period on a 0.0–1.0 scale:

- **1.0**: Fully achieved or exceeded
- **0.7**: Target hit — this is success (0.7 is the OKR "green")
- **0.5**: Meaningful progress but missed target
- **0.0**: No meaningful progress

Scores of 0.7 across a cycle = outstanding quarter. Consistent 1.0s means targets were too conservative.

## Example output

**Growth Team — Q2 2026 OKRs**

---

**Objective 1: Make Acme the obvious choice for mid-market revenue teams**

| # | Key Result | Baseline | Target | Grade at 1.0 |
|---|-----------|---------|--------|--------------|
| KR1 | Increase mid-market MRR from $480K to $720K by June 30 | $480K | $720K | ≥$720K |
| KR2 | Grow qualified mid-market pipeline from $1.8M to $4.2M by June 30 | $1.8M | $4.2M | ≥$4.2M |
| KR3 | Improve mid-market win rate from 22% to 31% by June 30 | 22% | 31% | ≥31% |
| KR4 | Close 3 marquee logos (Fortune 1000) with public case studies | 0 | 3 | 3 signed |

⚠️ **Anti-pattern flag**: KR3 must be tracked against a consistent competitor set — define "qualified opportunity" before Q2 starts or this metric is gameable.

---

**Objective 2: Turn onboarding into our strongest retention lever**

| # | Key Result | Baseline | Target | Grade at 1.0 |
|---|-----------|---------|--------|--------------|
| KR1 | Increase 30-day activation rate from 41% to 65% by June 30 | 41% | 65% | ≥65% |
| KR2 | Reduce time-to-first-value from 14 days to 5 days by June 30 | 14 days | 5 days | ≤5 days |
| KR3 | Improve 90-day retention from 68% to 78% for Q1 cohorts by June 30 | 68% | 78% | ≥78% |

⚠️ **Anti-pattern flag**: "Launch new onboarding flow" was removed — it's a task, not a result. These KRs measure what the launch needs to accomplish.

---

**Objective 3: Expand into the EMEA market with proof it can scale**

| # | Key Result | Baseline | Target | Grade at 1.0 |
|---|-----------|---------|--------|--------------|
| KR1 | Sign first 10 paying EMEA customers by June 30 | 0 | 10 | 10 signed |
| KR2 | Generate €500K in EMEA pipeline by June 30 | €0 | €500K | ≥€500K |
| KR3 | Achieve EMEA CAC payback ≤18 months for Q2 closed deals | undefined | ≤18 mo | ≤18 mo |

**Grading note**: These are stretch targets — 0.7 grade means 7 customers / €350K pipeline / 24-month payback. That still represents a successful market entry.
