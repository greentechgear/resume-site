# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Hugo static site. All resume content lives in one file (`config.toml`). Deployed to Netlify at resume.brianchappell.com via GitHub Actions. Letter and A4 PDFs are rendered in CI with headless Chrome from the site's own print stylesheet (replaces the pdf.co API the earlier fork used). Standalone repository, not a fork of any template.

## Users

Prospective clients and partners sizing up Brian Chappell as a founder and operator they might hire, partner with, or buy from. They arrive from a link (email, LinkedIn, a venture's site), skim for a minute or two, and either reach out or save a PDF to pass along internally.

## Product Purpose

A single-page professional record for Brian Chappell, full stack marketer and product developer based in Raleigh, NC. Success is a visitor quickly understanding what he builds and has built, trusting the track record, and either contacting him or downloading a PDF.

## Positioning

Twenty years of building and selling marketing-led businesses in healthcare, medical equipment, industrial, ecommerce, and SaaS, now running several current ventures (Consultdex, Calenlist, Medvertise, Rival Track, Promote Device, PromoteMed). Operator who both markets and builds the product.

## Operating Context

Read on desktop and phone from a shared link. PDF is forwarded, printed, or attached internally by the visitor. Content is edited by Brian in `config.toml` and published by pushing to `main`.

## Capabilities and Constraints

- One config file drives every section; each section can be enabled or disabled.
- Sections: profile, contact, summary, experience (with bullet items), projects, education, awards, skills, languages, interests, social. Courses, talks, and information are supported but currently disabled.
- Light and dark mode, following the system preference with a manual override that persists.
- Downloadable PDF in US Letter and A4, generated automatically on deploy.
- Print stylesheet must produce a clean, ink-friendly document.
- Search engines are blocked (`robots.txt` disallows all); keep unless Brian says otherwise.

## Brand Commitments

Name: Brian Chappell. Personal voice is plain and a little playful ("Chappellisms", "yes, the Michael Vick era"). Headshot at `static/images/brian-chappell.jpg` (cropped from his original photo). No attribution or links to the original template authors.

## Evidence on Hand

Real outcomes from config.toml only: Providian Medical sold for 6x EBITA, quotes generated on $100M in ultrasound equipment, contributed to consolidation into a $500M entity (Probo Medical); AdaptMarketing ran 10+ years, 50+ clients, team of 12, acquired by CopyPress in 2022; GoTickets reached #3 by 2008; Medvertise claims 8+ hours/week saved and +23% margin. No testimonials, logos, or press exist; do not fabricate them.

## Product Principles

1. Ventures and outcomes first: the visitor should grasp what Brian runs today within one screen.
2. Content stays factual; copy changes beyond typo fixes need Brian's approval.
3. One file to edit, zero manual steps to publish, including PDFs.
4. The web page and the PDF are the same document; neither is an afterthought.

## Accessibility & Inclusion

WCAG AA contrast in both themes, keyboard reachable controls, respects reduced motion.
