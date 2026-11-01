---
name: Brian Chappell, Resume
description: A professional record set as a financial-press page of deal tombstones.
colors:
  newsprint: "#eef0f0"
  newsprint-shade: "#e4e7e8"
  press-ink: "#131516"
  ink-grey: "#474b4e"
  hairline: "#c0c5c7"
  ledger-navy: "#12385e"
  deal-gold: "#b48a1f"
  deal-gold-ink: "#7a5b0c"
  gold-highlight: "#e2cf8f"
  night-sheet: "#121416"
  night-sheet-shade: "#1b1e21"
  night-ink: "#ebeae4"
  night-ink-grey: "#a8a7a0"
  night-hairline: "#393c40"
  night-navy: "#9cc1ea"
  night-gold: "#d2aa45"
  night-gold-ink: "#dcb75a"
  night-highlight: "#5a4813"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.75rem, 7.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "\"opsz\" 20"
  headline:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(1.625rem, 2.6vw, 2.125rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.04em"
    fontFeature: "lnum"
    fontVariation: "\"opsz\" 30"
  title:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.03em"
    fontVariation: "\"opsz\" 14"
  standfirst:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.2rem, 1.9vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  label-small:
    fontFamily: "Libre Franklin, Franklin Gothic, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 3.5vw, 3rem)"
  sheet: "78rem"
  hair-gap: "0.4rem"
  tombstone-gap: "1rem"
  section-gap: "clamp(3rem, 5vw, 4.5rem)"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.press-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.5rem"
  button-outline-hover:
    backgroundColor: "{colors.press-ink}"
    textColor: "{colors.newsprint}"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.press-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.6rem"
  theme-toggle-pressed:
    backgroundColor: "{colors.press-ink}"
    textColor: "{colors.newsprint}"
  tombstone:
    backgroundColor: "{colors.newsprint}"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1rem 1rem"
  tombstone-hover:
    backgroundColor: "{colors.newsprint-shade}"
  tombstone-exit:
    backgroundColor: "{colors.newsprint}"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.none}"
    padding: "2rem 1.5rem 1.25rem"
  section-head:
    textColor: "{colors.press-ink}"
    typography: "{typography.label}"
---

# Design System: Brian Chappell, Resume

## Overview

**Creative North Star: "The Matter of Record"**

The page is a financial-press sheet. Every venture is printed as a deal tombstone, the boxed, centered announcement a bank runs after a transaction closes: company in Bodoni capitals, an italic verb ("has been acquired by"), the counterparty large, the year, then a signature block under a hairline. Completed exits are the larger notices, double-ruled in deal gold; current ventures are smaller ink-ruled notices beside them. The tombstone grid doubles as the table of contents, each notice linking to its full entry below.

Everything else is newspaper furniture. A heavy-over-hairline double rule opens the masthead and the colophon; tracked Franklin capitals carry every label, date, and running head; a calm Source Serif column carries the reading. There is no shadow, no radius, no tint panel. Depth and grouping come only from rules: heavy, hairline, double, dotted. Density is a broadsheet's, not an app's: generous outer margins, tight internal leading in labels, and a 42rem reading measure.

Dark mode is the same sheet inverted under ink, not a second palette: paper goes to near-black, ink to a warm off-white, navy and gold lift in lightness to hold contrast. Print and PDF are first-class renderings of the same stylesheet, forced to white paper and pure black ink, with gold kept for exits.

**Key Characteristics:**
- Cool newsprint ground, ink-black type, one navy for rules and links, gold only for completed deals.
- Bodoni Moda capitals for names of things; Libre Franklin tracked capitals for labels; Source Serif 4 for reading.
- Square corners everywhere (0px); structure drawn entirely with rules.
- Centered tombstone notices with an inset second frame (outline offset inward).
- Tabular and lining figures for every date and year.
- One motion: the masthead's heavy rule draws across on load.

## Colors

A near-monochrome newsprint palette with one cool working accent and one warm ceremonial accent.

### Primary
- **Ledger Navy** (`ledger-navy`): the working accent. Links (1px underline, 2px on hover), the hairline that runs out from every section heading, and the focus ring. Never a fill. In dark mode it lifts to `night-navy`; in print it collapses to black.

### Secondary
- **Deal Gold** (`deal-gold`): ceremonial. The 2px outer frame and 1px inset frame of exit tombstones, the hairline over their signature block, and the 2px rule above an entry's outcome line. It is a rule color, never a text color on paper.
- **Deal Gold Ink** (`deal-gold-ink`): the text-safe darkening of gold, used only for the outcome line under an exited entry ("Acquired by CopyPress, 2022").

### Tertiary
- **Gold Highlight** (`gold-highlight`): text selection background only.

### Neutral
- **Newsprint** (`newsprint`): page ground and tombstone fill.
- **Newsprint Shade** (`newsprint-shade`): tombstone hover fill; the only second surface.
- **Press Ink** (`press-ink`): body text, display type, heavy rules, tombstone frames, button borders and inverted fills.
- **Ink Grey** (`ink-grey`): secondary text: labels, dates, roles, standfirst, metadata.
- **Hairline** (`hairline`): light dividers between contact rows, entries, table rows, the signature rule inside ink tombstones, the dotted leaders in fact tables, and the theme toggle border.
- **Night set** (`night-*`): the same nine roles for dark mode, one-to-one with the light set.

### Named Rules
**The Gold Is Earned Rule.** Deal gold marks a completed transaction and nothing else: exit tombstones, the outcome rule under an exited entry, and the gold underline that marks an entry arrived at from its tombstone. A current venture never gets gold, however proud.

**The One Working Accent Rule.** Navy is the only interactive color. Links, section rules, and focus rings share it; no second link color, no colored buttons.

**The Same Sheet Rule.** Dark mode and print are remappings of the same nine roles, not new designs. Add a role to all three (light, dark, print) or not at all.

## Typography

**Display Font:** Bodoni Moda (with Bodoni 72, Didot, Georgia)
**Body Font:** Source Serif 4, roman and italic (with Georgia, Times New Roman)
**Label Font:** Libre Franklin (with Franklin Gothic, Helvetica Neue, Arial)

**Character:** High-contrast Didone capitals for proper names, the voice of a deal announcement; a gothic label face in tracked capitals for the page's furniture; a sturdy text serif that reads quietly underneath both. Italic Source Serif is the connective voice: standfirst, the tombstone verb, roles.

### Hierarchy
- **Display** (Bodoni 800, `clamp(2.75rem, 7.6vw, 6rem)`, 0.92, uppercase, opsz 20): the name in the masthead only. 38pt in print.
- **Headline** (Bodoni 600, `clamp(1.625rem, 2.6vw, 2.125rem)`, 1.15, uppercase, +0.04em, lining figures): the counterparty on an exit tombstone ("COPYPRESS", "6X EBITA"). Ink tombstones use the same face at 1.375rem.
- **Title** (Bodoni 600, 1.0625 to 1.25rem, 1.15, uppercase, +0.03 to 0.05em): company names in tombstones, entries, and listing rows; the colophon signature.
- **Standfirst** (Source Serif italic 400, `clamp(1.2rem, 1.9vw, 1.5rem)`, 1.35, max 34ch, ink grey): the one-line summary under the name.
- **Body** (Source Serif 400, 1.0625rem desktop, 1rem under 36rem, 1.6, measure 42rem): entry prose and bullets. Print: 9.5pt / 1.38.
- **Label** (Libre Franklin 600, 0.75rem, +0.12em, uppercase): section heads, folio, dateline, entry dates, listing meta, social labels, signature byline. A 0.6875rem step serves contact keys, the PDF label, fact-sheet heads, and the tombstone byline. Buttons use 0.8125rem at +0.08em.

### Named Rules
**The Capitals Have Jobs Rule.** Bodoni capitals name an organization or person; Franklin capitals label a field. Never set sentences in either, and never swap them.

**The Figures Line Up Rule.** Every date, year, and range uses tabular lining figures and an en dash ("2008–2022").

## Layout

One sheet, max 78rem, with a fluid gutter (`clamp(1rem, 3.5vw, 3rem)`) shared by masthead, body, and colophon. The masthead is a three-column grid: identity (name, standfirst, dateline) left, framed portrait center, the "desk" (contact definition list and PDF buttons) right in a 15 to 19rem column, all bottom-aligned between the heavy-over-hairline top rule and a single ink rule below.

The record follows: tombstones flow in a wrapping flex grid with a 1rem gap, ink notices basing at 18.5rem and exit notices at 18rem, so desktop sets three across. A full-width fact sheet band (auto-fit columns, min 12rem, opened by a 5px ink rule) sits between the record and the experience entries. Each entry is a two-column grid, a 15rem meta column (dates, company, role, gold outcome) beside a 42rem reading column, separated from the next by a hairline. Projects and talks set as a ruled table with right-aligned meta.

Vertical rhythm between major blocks is `clamp(3rem, 5vw, 4.5rem)`; inside lists it tightens to 0.3 to 0.4rem. Breakpoints: at 68rem the fact sheet widens its column minimum to 14rem; at 56rem the desk drops below the identity and portrait and entries go single column; at 36rem the folio tagline hides, the portrait shrinks to 5.5rem, exits go full width, ventures go two-up with the byline dropped, and table rows restack. Print sets three notices per row, a fixed five-column fact sheet, a 42mm entry meta column, and keeps notices, entries, and rows unbroken across pages.

## Elevation & Depth

Flat. There are no box shadows anywhere in the system. Depth and grouping are drawn with rules: the heavy-over-hairline double rule (5px ink, a 1px ink line 3px below its top) opens the masthead and the colophon; a 5px ink rule opens the fact sheet; 1px ink rules close the masthead and frame notices; hairlines separate rows; dotted hairlines lead across fact tables. A tombstone's second frame is an outline drawn inward (`outline-offset: -5px`, `-8px` for exits), which reads as engraved border rather than raised card.

### Named Rules
**The Rules Not Shadows Rule.** If two things need separating, draw a rule between them. Weight encodes rank: 5px opens a major region, 2px marks gold or emphasis, 1px frames, hairline divides.

**The Engraved Frame Rule.** State changes move the inner frame, not the surface: on hover a tombstone's inset outline steps 2px further in and the fill shifts one shade. Nothing lifts.

## Shapes

Every corner is square (0px). The recurring silhouette is the double-ruled rectangle: outer border plus inset outline, centered content, a short hairline above the signature block. The portrait is a grayscale (`grayscale(1) contrast(1.08)`) photo in a 1px ink frame with 4px of paper matting, like a halftone in a column. Bullets are short 0.45rem horizontal rules, not glyphs.

## Components

### Buttons
Plain, ruled, and quiet: a printed box that inverts.
- **Shape:** square (0px), 1px press-ink border.
- **Outline (PDF download):** transparent fill, press-ink Franklin capitals 600 at 0.8125rem, +0.08em, padding 0.65rem 0.5rem, set two-up under a small label.
- **Hover / Focus:** fills with press ink and inverts the text over 0.2s on the expo-out ease; focus is the global 2px navy ring offset 3px.
- **Theme toggle:** smaller label-voice box, 1px hairline border going to ink on hover, a half-filled circle SVG beside the text; when pressed it inverts to ink fill. Hidden until the script runs.

### Tombstone (signature component)
The deal notice, and the page's table of contents.
- **Ink notice:** newsprint fill, 1px ink border plus 1px ink outline inset 5px, centered column with 0.35rem gaps: company (title), then a signature block under a hairline (name byline in small label, role in serif, dates in tabular label).
- **Exit notice:** 2px gold border plus 1px gold outline inset 8px, larger padding (2rem 1.5rem 1.25rem); adds the italic verb, the counterparty in headline size, and the year; its signature hairline turns gold.
- **States:** hover shifts fill to newsprint shade and pulls the inset frame 2px inward over 0.25s; focus replaces the inset frame with the navy ring outside.

### Section Head
A label-voice h2 in press ink followed by a navy hairline running to the right edge. Used for every section; 1.5rem below it.

### Experience Entry
Meta column (tabular dates, Bodoni company, italic role, and for exits a gold-ink outcome line over a 2px gold rule) beside the reading column (prose, then rule-bulleted list). Arriving via a tombstone underlines the company name in 2px gold.

### Contact Desk
A definition list of rows: small label key in a 4.5rem column, serif value, hairline under each row. Links follow the navy underline rule.

### Listing Table
Ruled table: 1px ink top, hairline rows, Bodoni capitals in a 13rem name column, serif description, right-aligned label-voice meta.

### Colophon
Social links centered between the heavy double rule and an ink hairline, the italic disclaimer line ("This announcement appears as a matter of record only."), and a centered Bodoni signature with a dated label byline.

## Do's and Don'ts

### Do:
- **Do** keep every corner square and every separation a rule, ranked by weight (5px, 2px, 1px, hairline).
- **Do** reserve deal gold for completed transactions; use `deal-gold-ink` when gold must be read as text.
- **Do** set organization and person names in Bodoni capitals and field labels in tracked Franklin capitals (600, +0.12em).
- **Do** use tabular lining figures and en dashes for every date range.
- **Do** define every new color role for light, dark, and print together.
- **Do** keep motion to state transitions on the expo-out ease (`cubic-bezier(0.16, 1, 0.3, 1)`, 0.2 to 0.25s) and the single masthead rule draw, all gated by reduced-motion.

### Don't:
- **Don't** add box shadows, rounded corners, gradients, or tinted card panels; the world has none.
- **Don't** use gold on current ventures, generic emphasis, or buttons.
- **Don't** introduce a second link or accent color beside navy.
- **Don't** set body sentences in Bodoni or Franklin, or run the reading column past 42rem.
- **Don't** colorize the portrait; it is a grayscale halftone in a matted ink frame.
