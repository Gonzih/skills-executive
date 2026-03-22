# skills-executive

Claude Code skill suite for executives, directors, and senior leaders. Four skills for the work that matters most at the top.

## Install

```bash
npm install @gonzih/skills-executive
```

Skills are copied to `~/.claude/skills/` automatically on install. Restart Claude Code to activate.

## Skills

### `/board-memo`
**Draft executive-quality board memos and leadership communications**

Converts bullet points and raw thinking into structured, clear, decisive executive writing. Produces board memo standard format (Situation → Options → Recommendation → Rationale → Risks → Decision needed → Timeline) with executive voice calibration: direct, confident, no hedging, no corporate filler.

**Invoke with:** `/board-memo` or describe the memo: *"draft a board memo recommending we acquire Acme Corp for $15M"*

**Triggers:** board memo, board update, investor update, executive memo, board letter, stakeholder memo

---

### `/okr-builder`
**Build well-structured OKRs from strategic priorities**

Takes raw priorities (bullet points, brain dumps, strategy docs) and produces properly structured OKRs for company, department, or team level. Objectives are inspiring and qualitative; Key Results follow the Verb + metric + from/to + date format. Flags anti-patterns (tasks as KRs, vanity metrics, missing baselines) and provides a 0.0–1.0 grading rubric.

**Invoke with:** `/okr-builder` or describe the need: *"build OKRs for our growth team for Q2 2026"*

**Triggers:** OKR, objectives key results, quarterly goals, team OKRs, goal setting, strategic goals

---

### `/decision-log`
**Document decisions with context, options, and rationale**

Creates durable decision records that capture WHY a decision was made, not just what was decided. Covers context, alternatives evaluated (pros/cons/why not chosen), chosen option with specific rationale, trade-offs acknowledged, success criteria, and deciders. Output is markdown suitable for Notion, Confluence, or GitHub.

**Invoke with:** `/decision-log` or describe the decision: *"document our decision to build vs. buy the CRM"*

**Triggers:** decision log, document decision, ADR, decision record, strategic decision

---

### `/stakeholder-update`
**Generate stakeholder updates for any audience**

Produces clear, concise status updates calibrated to the audience: exec (crisp, numbers-forward), team (warm, inclusive), board (formal, strategic), cross-functional (dependency-clear). Structure: Headline → Status (🟢🟡🔴) → Wins → Challenges → Next period → Decisions needed. Includes 3 email subject line options.

**Invoke with:** `/stakeholder-update` or describe the update: *"write a weekly exec update on the platform migration, we're at risk"*

**Triggers:** stakeholder update, weekly update, status update, project update, leadership update

---

## License

MIT
