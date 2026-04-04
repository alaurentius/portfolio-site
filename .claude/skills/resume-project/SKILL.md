---
name: resume-project
description: Load portfolio-site context and orient the session for implementation. Reads progress.md and architecture.md from the vault, summarizes current state, and asks what to work on next.
---

# Resume Project — Portfolio Site

## Vault path

Run `pwd` to confirm the working directory, then resolve the vault at:
`../second-brain/projects/portfolio-site/`

## Steps

### 1. Load context (in this order)

1. Read `../second-brain/projects/portfolio-site/progress.md` — current state, last session, next steps
2. Read `../second-brain/projects/portfolio-site/context/architecture.md` — tech stack and key decisions

Do NOT read `work-plan.md`, `context/setup.md`, or `context/testing.md` unless explicitly requested.

### 2. Present a session brief

```
## Resuming: Portfolio Site

**Phase:** <current phase from progress.md>
**Last worked on:** <date from progress.md>
**Last session:** <1-2 line summary of what was done>

**Next up:**
1. <item 1 from "Next Session" in progress.md>
2. <item 2>

**Stack:** Next.js 14 · TypeScript · Tailwind · next-intl · GitHub Pages
**Open blockers:** <from progress.md, or "none">
```

### 3. Ask one question

> "Want to pick up from the next steps above, or is there something specific you want to tackle?"

Then wait for the user's answer and proceed accordingly.
