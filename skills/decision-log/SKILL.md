---
name: decision-log
description: Documents important decisions in a structured, durable format that explains WHY a decision was made
triggers:
  - decision log
  - document decision
  - ADR
  - architectural decision
  - decision record
  - strategic decision
  - decision documentation
---

# decision-log

Documents important decisions in a structured, durable format. Creates an artifact that explains WHY a decision was made — not just what was decided. Invaluable for onboarding, retrospectives, and avoiding re-litigating past decisions.

## How to invoke

```
/decision-log
```

Or describe what you need: "document our decision to build vs. buy the CRM" or "create a decision record for choosing to sunset the legacy API."

## Workflow

### Step 1 — Decision type

Classify the decision to set the right framing:

- **Strategic**: Business direction, market positioning, major investments
- **Operational**: Process changes, policies, team structures, vendor selections
- **Technical**: Architecture choices, tooling, infrastructure, platform decisions
- **People**: Hiring, org design, compensation structures, leadership changes

### Step 2 — Decision summary

Write the decision in one clear, unambiguous sentence. This is the headline. Anyone who reads only this sentence should know exactly what was decided.

Examples of good decision summaries:
- "We will build a proprietary CRM rather than adopt Salesforce."
- "We will sunset v1 of the public API on December 31, 2026."
- "We will move our infrastructure from AWS to GCP over Q3–Q4 2026."

### Step 3 — Context

Document the situation that forced this decision:

- What problem or opportunity triggered the need for a decision?
- What constraints existed (time, budget, technical, regulatory, team capacity)?
- What was the timeline pressure, if any?
- What would have happened if no decision was made?

### Step 4 — Options considered

List 2–4 alternatives that were seriously evaluated. For each option:

- **Brief description**: What this option actually entailed
- **Pros**: Genuine strengths, not strawmen
- **Cons**: Genuine weaknesses
- **Why not chosen**: The specific reason this option was rejected

Do not include options that were never seriously considered — that creates the false impression of thorough evaluation.

### Step 5 — Decision and rationale

State clearly which option was chosen and WHY with specificity:

- "We chose X because A, B, and C" — not "X seemed best"
- Reference specific data, constraints, or principles that drove the choice
- If the decision was a close call, say so and explain what tipped it

### Step 6 — Trade-offs acknowledged

Be honest about what was sacrificed:

- What did we give up by making this choice?
- What risk are we now accepting?
- What will we need to monitor or address as a result?

A decision log that acknowledges no trade-offs is either a trivial decision or an incomplete record.

### Step 7 — Success criteria

Define how the team will know this was the right decision:

- What outcomes would validate the choice?
- What specific metrics or milestones will be tracked?
- What would trigger a revisitation of this decision?
- When is the next scheduled review?

### Step 8 — Deciders and date

Record:

- Who made this decision
- What forum or process it went through (exec meeting, RFC, engineering review, etc.)
- The date decided
- Whether it is reversible (and if so, what the reversal process would be)

## Example output

---

# Decision Record: Build vs. Buy CRM System

**Type**: Strategic / Operational
**Date**: March 21, 2026
**Status**: Decided

---

## Decision

We will build a proprietary CRM system rather than adopt an off-the-shelf solution.

---

## Context

Our sales team of 34 reps has been operating on a patchwork of spreadsheets and a legacy system built in 2018 that can no longer support our current deal complexity. We evaluated this decision under a hard constraint: the new system must be operational before our Q3 sales push (July 1, 2026). Budget allocated: $800K for Year 1.

The primary driver is that our sales motion is highly non-standard — we sell bundles of products on variable-length contracts with complex commission structures that no off-the-shelf CRM handles without significant customization. Three vendors told us their custom implementation would take 9–14 months.

---

## Options Considered

**Option 1: Adopt Salesforce (Sales Cloud)**
- Pros: Industry standard, deep integrations, strong admin ecosystem, rapid onboarding
- Cons: $340K/year licensing, 9–14 month implementation for our customizations, vendor lock-in, our commission logic requires a $150K custom module
- Why not chosen: Timeline infeasible for Q3. Total Year 1 cost $640K with less control than building.

**Option 2: Adopt HubSpot CRM**
- Pros: Lower cost ($90K/year), modern UI, faster standard implementation
- Cons: Cannot support our bundled product pricing model natively; API rate limits would block our real-time inventory sync
- Why not chosen: Technical blockers are not addressable without rebuilding core HubSpot modules — equivalent effort to building from scratch with the constraints of their platform.

**Option 3: Build proprietary CRM (chosen)**
- Pros: Full control over data model and integrations, built for our exact use case, no per-seat licensing at scale, Q3 timeline achievable
- Cons: Ongoing engineering maintenance burden, no ecosystem, single point of failure if team turns over
- Why chosen: See rationale below.

---

## Decision and Rationale

We chose to build because:

1. **Timeline**: Our engineers estimate a focused build at 4 months (March–June). No vendor solution could be operational by July 1.
2. **Cost over 3 years**: Build + maintain = ~$950K over 3 years. Salesforce = ~$1.4M. HubSpot with workarounds = ~$800K but with persistent technical limitations.
3. **Data control**: Our deal data is a competitive asset. Keeping it in infrastructure we control reduces risk as we evaluate an eventual enterprise transition.
4. **Fit**: Our commission model (tiered, retroactive, bundle-weighted) would require customization in every vendor solution we evaluated.

---

## Trade-offs Acknowledged

- We are accepting an ongoing engineering maintenance burden (estimated 0.5 FTE equivalent annually).
- We will not benefit from the vendor's product roadmap — every new feature requires our engineering resources.
- Risk: If the build slips past June 15, we cannot meet the Q3 deadline. Mitigation: weekly build reviews with Go/No-Go at April 30 checkpoint.

---

## Success Criteria

- All 34 reps fully migrated from legacy system by July 1, 2026
- Commission calculation error rate below 0.5% in first 90 days
- Rep adoption (daily logins) above 85% by August 1
- Zero revenue-impacting data loss events in first 6 months

**Revisitation trigger**: If engineering maintenance exceeds 1.0 FTE equivalent, or if the team size grows above 100 reps, re-evaluate vendor solutions.

**Next scheduled review**: Q4 2026 retrospective.

---

## Deciders

- **Decision made by**: Sarah Chen (CRO), Marcus Webb (CTO)
- **Forum**: Executive leadership offsite, March 19, 2026
- **Reversibility**: Reversible in 12–18 months at cost of migration; not trivially reversible

## Live Data Sources

Use these integrations and patterns to store and surface decision records in your existing tooling:

**Notion API Integration**
- Notion API docs: `https://developers.notion.com/`
- Create a Decision Log database in Notion with properties matching this skill's schema: Decision, Type, Date, Status, Deciders, Reversibility, Next Review
- POST a new database entry via API: `POST https://api.notion.com/v1/pages` with `parent.database_id` pointing to your decision log database
- Useful Notion database properties for decision records: `Title` (decision summary), `Select` (type: Strategic/Operational/Technical/People), `Date` (decided), `People` (deciders), `Checkbox` (reversible), `Date` (next review)
- Notion integration pattern: use a Claude-generated markdown decision record → paste into Notion page body, populate structured properties via API for filtering/reporting

**Confluence Webhook Pattern**
- Confluence REST API for creating pages: `POST https://your-domain.atlassian.net/wiki/rest/api/content`
- Create a dedicated Confluence space or page tree for decision records (e.g., `Engineering Decisions`, `Strategic Decisions`)
- Set up a Confluence webhook to notify Slack or Teams when a new decision record page is created: Confluence Space → Space Settings → Webhooks
- Page body format: use Confluence storage format (XHTML) or post via the `body.wiki` format for simpler markdown-like input
- Recommended Confluence structure: top-level page per quarter → child pages per decision, with labels `decision-record`, `strategic`, `technical` etc. for cross-space search
- Atlassian automation rule pattern: when a page with label `decision-record` is created → notify a Slack channel via webhook → assign a review date reminder
