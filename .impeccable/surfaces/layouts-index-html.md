---
version: 1
slug: "layouts-index-html"
primary_target: "layouts/index.html"
related_targets: ["layouts/_default/baseof.html"]
---

# Resume home page

Scope: the single resume page (`layouts/index.html` and partials) plus its print/PDF rendering. Visitor mode: Read.

Audience and job: prospective clients and partners skimming for one or two minutes to judge Brian as a founder/operator, then contacting him or saving a PDF. Proof is the real record in config.toml (exits, outcomes); nothing invented.

Constraints: everything renders from `config.toml`; each section toggles; light and dark; Letter and A4 PDFs from the print stylesheet; robots disallowed.

## Direction contract

THESIS: The record set as financial-press deal tombstones: every venture is a boxed notice of who, what, when, outcome, and exits carry the weight. Refuses the photo-header, skills-sidebar, two-column resume template.

OWN-WORLD: Cool newsprint ground, ink black, one deep navy for rules and links, deal-gold reserved for completed exits. Bodoni display caps, tracked Franklin labels, a calm serif reading column. Hairline and heavy double rules, centered tombstone composition, tabular figures. Dark mode is the same sheet inverted under ink.

STORY: Visitor sees who Brian is and what he runs now, sees three completed exits stand out, scans current ventures, reads detail on any one, contacts or downloads a PDF.

FIRST VIEWPORT: Heavy double-rule masthead: name in large Bodoni caps left, one-line summary and dateline under it, grayscale headshot plus contact, Letter/A4 PDF and theme control right. Below, the tombstone grid begins: exits large with gold rule, current ventures smaller, each linking to its full entry.

FORM: Deal tombstones (financial press deal announcements), position 1 on the ordered list, chosen by the user as the pick card. seed:c8b3a55b133bde82

Signature: the tombstone grid doubles as the table of contents; footer closes with "This announcement appears as a matter of record only" and the dated signature.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
