---
name: save-progress
description: Save current session progress to progress.md in the vault before ending the session. Derives the summary from the conversation history — the user doesn't need to explain anything.
---

# Save Progress — Portfolio Site

## Purpose

Capture the current session state into `progress.md` in the vault so a new session can resume instantly with full context. Claude derives the summary from the conversation — the user doesn't need to explain what was done.

## Vault path

Run `pwd` to confirm the working directory, then resolve the vault progress file at:
`../second-brain/projects/portfolio-site/progress.md`

## Steps

### 1. Read current progress.md

Read the vault progress file (path above) to understand the state before this session.

### 2. Derive session summary from conversation history

Look back at this conversation and extract:
- What was actually completed (files created, features implemented, problems solved)
- What was attempted but not finished
- Any decisions made that deviate from `context/architecture.md`
- Any blockers or open questions that came up

Do NOT ask the user to summarize — derive it yourself from the conversation. Only ask if something is genuinely ambiguous.

### 3. Determine next steps

Based on where the session ended, identify the 2-3 most concrete next actions for the next session. Be specific:
- Bad: "Continue with Phase 2"
- Good: "Create `components/layout/Navbar.tsx` with anchor links and data-testid attributes per testing.md convention"

### 4. Show a preview before writing

Present the proposed update:

```
## Progress snapshot — Portfolio Site
**Session date:** <today>
**What was done:**
- <item>
- <item>

**Implemented (changes):**
- [x] <newly completed item>

**Next session — start here:**
1. <specific next action>
2. <specific next action>

**New decisions logged:**
- <any deviations from architecture.md, or none>
```

Ask: "Does this look right? Anything to add or correct before I save?"

### 5. Update progress.md

Once confirmed, update the vault `progress.md`:
- Set **Last Session** to today's date + the summary
- Check off completed items in **Implemented**
- Replace **Next Session — Start Here** with the new next steps
- Add any new entries to **Decisions Made During Implementation**
- Update the *Updated* timestamp at the bottom

Do not change **Current phase** or **Overall progress** — those are updated by `/phase-done`.

### 6. Confirm

```
Saved to ../second-brain/projects/portfolio-site/progress.md.

To continue in a fresh session, open this folder in Claude Code and say:
  /resume-project
```
