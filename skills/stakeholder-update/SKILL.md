---
name: stakeholder-update
description: Generates clear, concise stakeholder updates — weekly team updates, project status reports, leadership briefings, and progress emails
triggers:
  - stakeholder update
  - weekly update
  - status update
  - project update
  - leadership update
  - progress update
  - team newsletter
---

# stakeholder-update

Generates clear, concise stakeholder updates — weekly team updates, project status reports, leadership briefings, and cross-functional progress emails. Gets complex status communicated in 3 minutes or less.

## How to invoke

```
/stakeholder-update
```

Or describe what you need: "write a weekly status update for my exec team on the platform migration" or "draft a leadership update on our beta launch."

## Workflow

### Step 1 — Audience

Identify who is receiving this update — it changes everything about tone, level of detail, and framing:

- **Internal team**: The people doing the work
- **Leadership / exec**: Managers and VPs above the team
- **Board**: Board of directors or advisors
- **Investors**: Shareholders or funding partners
- **Cross-functional partners**: Other teams depending on your work
- **All-company**: Entire organization
- **External** (customers / partners): Outside the organization

### Step 2 — Update type

Choose the type that matches the situation:

- **Weekly status**: Recurring cadence update
- **Milestone reached**: Celebrating or marking a specific achievement
- **Risk escalation**: Something is at risk and action is needed
- **Project kickoff**: Starting something new
- **Retrospective / lessons learned**: End-of-project or end-of-period reflection

### Step 3 — Raw input

Gather the facts in any form. Ask for:

- What happened this period (wins, progress, completions)
- What is blocked or at risk
- What is happening next period
- Any decisions needed from this audience
- Any notable numbers (metrics, revenue, users, velocity)

Accept bullet points, stream of consciousness, Slack messages — the structure comes in the next step.

### Step 4 — Structure

Build every update in this order:

1. **Headline** (1 sentence): The single most important thing. If they read nothing else, they read this.
2. **Status** (traffic light):
   - 🟢 On track — brief explanation of what "on track" means here
   - 🟡 At risk — what the risk is and the plan to address it
   - 🔴 Off track — what happened and what immediate action is being taken
3. **Wins this period** (2–3 bullets): Concrete, specific progress. "Launched X" > "Made progress on X"
4. **Challenges / blockers** (1–2 bullets): Honest, with owner and resolution plan. No vague "we're working through some challenges."
5. **Next period focus** (2–3 bullets): What will happen between now and the next update
6. **Decisions needed** (if any): Specific, actionable asks with deadline and decision-maker named

### Step 5 — Tone calibration per audience

Apply different registers for different audiences:

**Executive / leadership:**
- Lead with impact, not activity
- Numbers first: "Revenue impact: +$280K" before explaining how
- No progress theater — if it's not done, don't say "we're on track to be on track"
- One paragraph max per section

**Internal team:**
- Warmer, more inclusive
- Acknowledge individual contributions
- Connect work to purpose ("this unblocks the enterprise launch")
- Celebrate wins, not just milestones

**Board / investors:**
- Formal, strategic framing
- Connect to company-level goals and metrics
- Risk-forward — don't bury problems
- Include context for decisions, not just conclusions

**Cross-functional partners:**
- Clear on dependencies: "We need X from you by Y"
- Flag downstream impact of your status on their work
- Collaborative, not transactional

### Step 6 — Email subject line

Write 3 subject line options. The subject line IS the headline — it should tell the reader the most important thing before they open the email.

Format: `[Project/Team Name] [Status] — [Key Fact or Hook]`

Examples:
- "Platform Migration 🟢 — Beta live, 2,400 users onboarded"
- "Q2 Growth Update: Pipeline at $4.1M, on track for quota"
- "⚠️ API Deprecation Timeline at Risk — Decision needed by Friday"

## Example output

**Beta Launch — Product Team Weekly Update (Week of March 17)**

---

### For Exec / Leadership

**Subject line options:**
1. "Beta Launch 🟡 — Live with 1,280 users, 15% below user target"
2. "Product Weekly: Beta live, onboarding gap identified, fix in next sprint"
3. "⚠️ Beta User Target Miss — Onboarding fix ships Friday"

---

**Beta is live. We're 15% below our user activation target due to a friction point in onboarding we've now identified and are fixing this sprint.**

🟡 **At risk** — User activation rate is 41% vs. 48% target. Root cause identified (step 3 of onboarding flow has 34% drop-off). Fix ships Friday.

**Wins**
- Beta launched on schedule March 17 — zero critical bugs in first 72 hours
- 1,280 users onboarded across 47 companies; 3 Fortune 500 accounts active
- NPS from first cohort: 67 (target was 55)

**Challenges**
- Onboarding step 3 drop-off: 34% of users abandon at workspace setup. Owner: Jamie (design). Fix: simplified flow ships Friday March 22. Projected recovery to 52% activation rate.

**Next sprint focus**
- Ship onboarding fix; validate activation rate recovers to ≥48% by March 28
- Activate remaining 12 waitlisted enterprise accounts
- Instrument funnel analytics to catch future drop-offs in real time

**Decision needed**
- Do we extend the beta period by 1 week (to April 7) to compensate for the activation shortfall? Needs exec call by Wednesday March 23.

---

### For Internal Team

**Subject line options:**
1. "We're live 🎉 — and we've already found what to fix next"
2. "Beta Week 1: 1,280 users in, NPS of 67, one thing to fix"
3. "Team update: great launch, one onboarding snag, here's the plan"

---

**We shipped. Beta is live, 1,280 users are in, and Fortune 500 companies are using what we built. We also found a friction point in onboarding — and we already know how to fix it.**

🟡 **One thing to watch** — Activation rate is at 41% vs. our 48% target. Jamie dug in and found that step 3 (workspace setup) is where people drop off. The fix is designed and ships Friday.

**Wins this week**
- Beta launched on time, March 17 — the result of 6 weeks of hard work from every person on this team
- 1,280 users across 47 companies, including 3 Fortune 500 accounts who are already active
- NPS of 67 from early users — significantly above our target of 55. People love what we built.

**One challenge (and the plan)**
- Onboarding step 3 has a 34% drop-off. Jamie redesigned the flow based on session recordings. Fix ships Friday; we expect to see activation improve within 48 hours of release.

**This week**
- Jamie ships the onboarding fix by Friday EOD
- Alex activates the 12 remaining waitlisted enterprise accounts
- Priya instruments the funnel so we catch issues like this faster next time

Big thank you to everyone who stayed late during launch week. This team delivered.

---

### For Cross-Functional Partners

**Subject line options:**
1. "Product Beta Update — Live, onboarding fix incoming, what we need from you"
2. "Beta launched 🟡 — 1,280 users live, one dependency on your team"
3. "Weekly sync: Beta status + 1 ask for Data team by Friday"

---

**Beta is live with 1,280 users. We've identified an onboarding issue and are shipping a fix Friday. One ask for the Data team.**

🟡 **At risk** — Activation rate 41% vs. 48% target; fix in progress.

**Status**
- Beta live March 17, on schedule. 1,280 users across 47 companies.
- Onboarding drop-off identified at step 3; fix ships Friday March 22.
- No API changes or downstream impacts to your systems this sprint.

**Ask for Data team**
- We need the funnel analytics dashboard updated to include the new onboarding step 3 event by **Friday March 22 EOD**. Without this, we can't validate the fix. Owner: Priya will send you the event schema by tomorrow noon.
