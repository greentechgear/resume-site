# AGENTS.md

Personal resume site for Brian Chappell (resume.brianchappell.com). Hugo, no
theme, no CSS framework.

- All content lives in `config.toml`. Do not rewrite copy beyond typo fixes
  without asking; facts and outcomes there are Brian's claims, never add new ones.
- Design record: `DESIGN.md` and `.impeccable/`. The direction is deal
  tombstones (see `.impeccable/surfaces/`). Keep gold reserved for completed exits.
- Verify changes by building (`hugo --minify`), viewing desktop, phone and dark
  mode, and running `npm run pdf`. Both PDFs should stay at 3 pages.
- Deploys happen only from GitHub Actions on push to `main`.
- Do not commit generated PDFs or `public/`.
