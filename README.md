# mek.dev

Personal site of Mustafa Ekrem KENTER. Astro 5 + Tailwind 4, deployed to
Cloudflare Workers as static assets.

## Commands

```bash
pnpm dev      # dev server at localhost:4321
pnpm build    # static build to dist/
pnpm preview  # preview the production build
pnpm deploy   # build + wrangler deploy
```

## Structure

- `src/data/cv.yaml` — single source of truth for the CV; renders `/about`'s
  timeline and the print-friendly `/cv` page. Edit it, and both stay in sync.
- `src/content/blog/` — posts (markdown, typed via content collections).
- `src/content/projects/` — project case studies. Entries with an `href`
  frontmatter field link there instead of a generated detail page.
- `content/` — working drafts and notes, not published.
- `public/palestine/` — prebuilt embeddable widget (`widget.js` + `widget.css`),
  kept as static assets so existing embeds keep working. Source lived in the
  Next.js era (`git log main -- src/palestine-widget`).

## Analytics

Cloudflare Web Analytics (cookieless). Paste the beacon snippet into
`src/layouts/Base.astro` after creating the site token in the Cloudflare
dashboard.
