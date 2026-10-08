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
