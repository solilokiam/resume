# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build          # clean, copy public/ + src/index.html into dist/, compile CSS
npm run dev            # build once, then watch CSS (re-run build after editing HTML)
npm run lint           # biome check
npm run format         # biome format --write
npm run generate-pdf   # build, render dist/ to public/resume.pdf, re-copy into dist/
```

There are no tests. Verify changes by building and opening `dist/index.html`.

## Architecture

A one-page static resume: hand-written HTML plus Tailwind CSS v4, compiled by the
Tailwind CLI. There is no framework and no client-side JavaScript — the only JS in
the repo is the Puppeteer PDF script, which never ships to the browser.

- `src/index.html` — the entire page. All resume content lives here as plain markup.
- `src/input.css` — Tailwind entry point: `@source` declaration, theme tokens,
  and the handful of custom rules (`.section-headline`, `progress`).
- `public/` — images, icons, favicon, and the generated `resume.pdf`.
- `dist/` — build output, gitignored. Netlify publishes it (`netlify.toml`).

Asset paths in the HTML are **relative** (`icons/gh.svg`, not `/icons/gh.svg`) so
the page renders correctly over `file://`. Both the local preview and the PDF
script depend on this — don't switch them to absolute paths.

### Screen vs print

The same markup serves screen and print via Tailwind `print:` variants. Sidebar
blocks (Personal, On the Web, Skills & Tools) are `print:hidden`, and several
headings exist **twice** — a screen version marked `print:hidden` and a print
version marked `hidden print:block` using `.section-headline`. When adding or
renaming a section, update both variants and the surrounding
`hidden print:block` `<hr>` separators.

### Inline-block columns and whitespace

Experience rows lay out a date/label column and a content column as two
`lg:inline-block` siblings. Whitespace between inline-blocks **renders as a
space**, which pushes the second column right by ~5px. The pairs are therefore
joined with an HTML comment:

```html
</div><!--
--><div class="lg:inline-block lg:w-8/12 w-full">
```

Preserve that when editing those rows. It does not apply to the `Tools:` rows,
whose second child is a block element, nor inside flex/grid containers, which
ignore whitespace-only nodes.

### PDF generation

`scripts/generatePdf.js` renders the local `dist/index.html` over `file://` as a
single continuous page 1400px wide. The height is **measured** from the rendered
document under print emulation rather than hardcoded, so adding a section grows
the page instead of clipping it. The result is committed as `public/resume.pdf`
and linked from the footer.

## Notes

- Tailwind scans only what `@source "./index.html"` in `src/input.css` declares.
  Adding another HTML file means adding another `@source`.
- `--color-background` in the `@theme inline` block backs the `dark:to-background`
  gradient stop in the sidebar; keep it in sync with `--background`.
- The `prose` classes in the markup are inert — the Tailwind typography plugin is
  not installed. They are harmless, but don't assume they style anything.
