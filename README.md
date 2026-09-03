# Welcome to my resume

My personal resume — a single static HTML page styled with Tailwind CSS.
No framework, no client-side JavaScript.

## Getting Started

```bash
npm install
npm run build      # writes dist/
open dist/index.html
```

`npm run dev` builds once and then watches the CSS. Re-run `npm run build`
after editing `src/index.html`.

## Editing

- Content and markup: `src/index.html`
- Styles and Tailwind theme: `src/input.css`
- Images and icons: `public/`

## PDF

`npm run generate-pdf` builds the site and renders `public/resume.pdf` from the
local `dist/` output with Puppeteer.

## Deploying

Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).
