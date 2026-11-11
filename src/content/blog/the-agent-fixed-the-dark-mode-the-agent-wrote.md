---
title: The Agent Fixed the Dark Mode the Agent Wrote
description: A coding agent wrote this site's theme toggle with four bugs I never noticed. Another, given Chrome's Modern Web Guidance, found them in one scan. Why that's the same lesson as MCP.
date: 2026-11-11
kind: note
---

*Researched and drafted with Claude; views are my own.*

When I rebuilt this site in August with a coding agent, it wrote the little
sun and moon button in the corner that switches between light and dark. It
worked, and it had four bugs I never noticed, because they're the bugs
almost every dark mode has.

This week I ran Chrome's
[Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance)
on the site. Announced as an early preview at Google I/O in May, it's a set
of expert-vetted skills that give coding agents current web platform
guidance, tied to [Baseline](https://web.dev/baseline) so the agent knows
which features are safe to use and which need a fallback. One command
installs it into the agent you already use.

## What it found

Its scan flagged one pattern in two files, and following the guide behind
it turned up four problems:

- **The toggle saved a choice every time.** Switch to dark and back again,
  and the site was pinned to light, ignoring your system setting from then on.
- **Without JavaScript, there was no dark mode.** Colours depended on an
  attribute a script set, so a visitor on a dark system with JavaScript off
  got the light theme.
- **The browser was never told.** There was no `<meta name="color-scheme">`,
  so it couldn't theme anything before the stylesheet arrived.
- **Other tabs didn't follow** a toggle.

None of this is exotic. It's the pattern from years of tutorials, which is
exactly why an agent writes it: that's what its training data is full of.

## What changed

The fix is mostly the platform doing the work:

```html
<meta name="color-scheme" content="light dark">
```

```css
:root {
  --bg: light-dark(#f6f8f7, #0e1514);
  color-scheme: light dark;
  &:has(> head > meta[name="color-scheme"][content="dark"]) {
    color-scheme: dark;
  }
  &:has(> head > meta[name="color-scheme"][content="light"]) {
    color-scheme: light;
  }
}
```

"light dark" means follow the system. The toggle pins a scheme only when you
pick the opposite of your system's, and picking your system's own scheme
again clears the pin instead of saving it. Colours follow the meta tag in
CSS alone, so they work without JavaScript; a tiny script applies a saved
pin before the first paint. Because `light-dark()` is fairly new, browsers
without it fall back to the system setting, a fallback the guide insisted on
and I wouldn't have thought to add.

## The same lesson as MCP

I've spent this year arguing that agents do better with tools than with
pages: give an agent an [MCP server](/blog/one-backend-every-ai-agent/) or
[WebMCP tools](/blog/tools-not-pages-webmcp/) and it stops guessing at
screenshots. This is the same idea, pointed at coding agents. A model writes
the web it was trained on, which is mostly yesterday's web. A skill written
by the people who build the browsers gives it today's, with the
compatibility data attached.

Chrome reports that in early results, agents equipped with it improved
their adherence to modern best practices by
[37 percentage points on average](https://developer.chrome.com/docs/modern-web-guidance/get-started),
and adds that results vary by project, model and prompt. On this site it
was one scan and four bugs I would have shipped for years.

The first agent wasn't careless. It wrote what it knew. Knowledge, like
tools, is better handed to an agent than left for it to guess.
