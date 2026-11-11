# mek.dev

## Writing style

- **No em dashes (—)** anywhere on the site: posts, project pages, `src/data/cv.yaml`,
  page titles, UI strings, alt text and code comments. Rewrite the sentence instead
  of swapping the character:
  - comma for an aside that continues the sentence
  - colon before a list or an explanation
  - parentheses for a paired interruption
  - period for a punchline or a new thought
  - semicolon for a contrast between two clauses
- Separators use a middle dot: page titles are `Title · Mustafa Ekrem Kenter`,
  and inline metadata reads `Report · 12 min read`.
- En dashes (–) are fine for ranges (`Aug 2024 – present`, `2005–2009`) and as the
  empty-value placeholder in tables.
- In YAML (frontmatter, `cv.yaml`), an unquoted value can't contain `: `. Quote it,
  or use a comma or parentheses instead of a colon.
- Check before committing: `git grep -n '—' -- src public` should print nothing.

## Visuals

Visuals should be appealing, not only correct. Every essay and note gets them, and
so does every social post about one.

- **What a post gets:**
  - a hero SVG at `src/assets/heroes/<post id>.svg` (shown under the title);
  - inline `<figure>` diagrams wherever a picture explains something: a flow, a
    before and after, a comparison;
  - a 1200×630 link-preview card at `public/og/<post id>.png`, set as `image` and
    `imageAlt` in the frontmatter.
- **What makes them appealing:**
  - one clear idea per image, with big type and strong contrast;
  - real content (the actual code, flows, quotes) rather than generic shapes;
  - the post's hook as the headline on cards.
- **Palette:** teal is the accent. Amber is only for the "old" or "warning" side of
  a contrast, and red only in logos.
- **Theming:** SVGs on the site use the `.fig` classes in `global.css`, so they
  follow light and dark mode. Never hardcode colours in them.
- **Social images:**
  - they are bolder than the site card: square 1200×1200, dark background, the
    post's hook as a huge headline;
  - keep them in `public/social/<post id>-square.png`;
  - the link goes in the first comment, where the wide card shows as its preview.
- **Card templates:** cards are HTML templates in `scripts/cards/`, rendered with
  the site's fonts by `pnpm card <template.html> <out.png> [width height]`. Copy
  an existing template for a new post.
- **Accessibility:**
  - every image has alt text that says what it shows;
  - every SVG has a `<title>` and `<desc>`.

  Narration skips figures, so adding one doesn't make the audio stale.
- **Check before publishing:**
  - light and dark mode;
  - phone width, with no sideways scroll;
  - text that fits its boxes. Measure long labels: SVG text doesn't wrap.
