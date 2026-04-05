# Portfolio Site

Personal portfolio and resume site for a QA Engineer / SDET. Single-page static site (v1.0) with bilingual support (ES/EN), deployed to GitHub Pages.

## Start here

1. Run `pwd` to confirm your working directory, then resolve the vault at `../second-brain/projects/portfolio-site/` relative to it
2. Read `progress.md` from the vault — current phase and next tasks
3. Read `context/architecture.md` from the vault — tech stack and all design decisions
4. Read `work-plan.md` from the vault only if asked about phases, timeline, or task lists

## Tech stack

- **Framework:** Next.js 14 (App Router, static export)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **i18n:** next-intl (ES default, EN)
- **Content:** Markdown files + gray-matter (project data)
- **Contact:** Formspree (no backend needed)
- **Testing:** Jest + React Testing Library (unit) / Playwright (e2e)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## IMPORTANT

- NEVER install any package that includes `axios` as a dependency (direct or transitive). Use the native `fetch` API instead.

## Rules

- Follow `architecture.md` decisions. Propose changes before implementing.
- All interactive elements must have `data-testid` attributes — no exceptions.
- All section root elements must have matching `id` attributes (e.g., `id="about"`).
- Update `progress.md` at the end of each session: mark completed tasks, set next steps.
- Unit tests required for all logic in `lib/`. Component tests required for all `ui/` components.
- No hardcoded user-visible strings in components — all strings go through `next-intl`.
- Never commit `.env.local` — Formspree ID goes there, not in source code.

## Planning docs (vault)

Full planning documents are at: `../second-brain/projects/portfolio-site/`
- `progress.md` — session memory (read first, update last)
- `work-plan.md` — 7 phases with tasks, hours, and definitions of done
- `context/architecture.md` — system design, folder structure, all tech decisions
- `context/setup.md` — environment setup instructions
- `context/testing.md` — testing strategy, data-testid convention, examples
- `context/ci-cd.md` — GitHub Actions workflow, secrets, DNS, v2.0 pipeline

## Do not load

- `node_modules/`, `.next/`, `out/`, `dist/`
- `.env.local` or any file containing secrets
- Any file not explicitly requested
