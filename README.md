# resume.brianchappell.com

Brian Chappell's resume as a single page, set as financial-press deal
tombstones. Built with Hugo. Every word comes from `config.toml`.

## Editing

Change `config.toml` and push to `main`. GitHub Actions builds the site,
renders US Letter and A4 PDFs from the page's print stylesheet with headless
Chrome, and deploys everything to Netlify.

- Any section can be hidden with `enable = false`.
- An experience entry with an `outcome` is a completed transaction and is set
  as one of the large gold tombstones at the top. Everything else is listed as
  a current venture.
- `url` on an entry links the company name.

## Local preview

```sh
hugo server            # http://localhost:1313
npm install            # once, for PDF rendering
hugo --minify && npm run pdf   # writes public/resume.letter.pdf and resume.a4.pdf
```

`npm run pdf` uses an installed Chrome; set `CHROME_PATH` if it is not found.

## Deploy setup

The workflow needs a `NETLIFY_TOKEN` repository secret and a `NETLIFY_SITE_ID`
repository variable. Netlify's own git builds should be off; Actions does the
build so the PDFs are always included.

## Layout

- `layouts/` Hugo templates; `layouts/partials/` one partial per section
- `assets/css/main.css` the whole design: tokens, light and dark, print
- `assets/js/theme.js` the light/dark control
- `scripts/pdf.mjs` PDF rendering
- `PRODUCT.md`, `DESIGN.md` product and design records
