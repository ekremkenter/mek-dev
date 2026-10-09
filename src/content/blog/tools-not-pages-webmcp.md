---
title: "Tools, Not Pages: WebMCP on Three Websites"
description: How turkishairlines.com, ajet.com and this site hand AI agents structured tools instead of pages to scrape, what WebMCP is today, and what I learned wiring it up.
date: 2026-10-09
kind: essay
toc: true
---

*Researched and drafted with Claude; views are my own.*

Watch an AI agent use a website today and it looks like a tourist with a
phrasebook. It takes a screenshot, guesses which box is the departure city,
types into it, waits, takes another screenshot, and hopes the date picker
behaves. It works often enough to be impressive and fails often enough to be
useless for anything that matters.

WebMCP is the fix the browser vendors are converging on: **the page tells the
agent what it can do, as tools.** No screenshots, no guessing, no scraping.
It has been live on turkishairlines.com and ajet.com since the summer, and
as of this week it's on this site too. Here is what it is, what those three
sites expose, and what I learned along the way.

## What WebMCP is

A page registers tools with the browser: a name, a description written for a
model, a JSON schema for the input, and a function that runs when an agent
calls it. An agent working in that tab (the browser's own assistant, or an
extension) discovers the tools and calls them instead of driving the UI.

It is the same idea as MCP, moved into the page. An MCP server lives on the
backend and serves agents outside the browser, like Claude and ChatGPT, with
its own sign-in. A WebMCP tool lives in the page, runs in the visitor's own
session, and needs no server of its own. Turkish Airlines runs both: an MCP
server since 2025 for the assistants, and WebMCP on the websites for agents
that are already in the tab.

As of October 2026 it is still early. WebMCP went from a flag in Chrome 146
to an origin trial for versions 149 to 156, the specification is a W3C
Community Group draft rather than a standard, and the API keeps moving: in
about a year it went from `navigator.modelContext` to `document.modelContext`,
lost `unregisterTool()` in favour of an `AbortSignal`, and became async. If
you build on it now, feature-detect and expect change.

## What turkishairlines.com and ajet.com expose

Open either site in a Chrome with WebMCP and you can list what it registers.
Tools are registered page by page, so what an agent sees depends on where it
is.

**turkishairlines.com**, built by Turkish Technology's Digital Channels team,
offers four tools on the homepage: a flight search, a flight and hotel
package search, a multi-city search of two to six legs, and an Istanbul
stopover itinerary with a number of nights. Each fills in the search and
shows the results. The team's [write-up](https://www.linkedin.com/pulse/how-turkishairlinescom-talks-ai-agents-webmcp-production-9sddf/) describes the rest of the
rollout: results-page tools to select, sort and filter flights, flight
status, award search for Miles&Smiles members, and servicing steps such as
finding a booking or starting check-in. Payment is deliberately not exposed;
the passenger still pays on the site.

**ajet.com** goes wider, with fourteen tools in three groups:

- **Data, read-only.** Search flights, cheapest fare per day across a month,
  the cheapest fares around a date, which dates a route actually flies,
  airports, passenger types such as student or teacher with their age limits,
  and currencies.
- **The page the visitor is looking at.** Read the results on screen, read
  what the visitor has already selected, sort them, filter them by stops or
  time of day.
- **Actions in the page.** Run a search exactly as pressing Search would, or
  open the cheapest day of a month in one step. Plus a help tool that answers
  from AJet's own published help content.

Two design choices stand out, and they're worth copying. First, **read and act
are separate tools**, marked as such, so an agent knows which calls are safe
to make freely. Second, **the descriptions state the side effects in plain
words**: "Makes no request." "Only changes what is displayed." A model
reads those sentences and behaves accordingly. A tool description is the closest thing an agent has to a label on a button.

The Digital Channels write-up adds two principles I'd put first. Every tool
wraps the same code path the human interface uses: "We didn't build a
separate site for agents." And errors come back as sentences an agent can act
on, not status codes; in their tests agents corrected a call on the first
retry when told what was wrong, and stalled on a bare 400.

## A small version on mek.dev

A personal site has nothing to sell, but it has the same problem in
miniature. An agent asked "what has Ekrem written about airline servicing,
and can I book a call?" would otherwise crawl pages and guess. So mek.dev now
registers five tools:

- **`list_posts`**: the essays, the research report and the notes, with
  reading time and the narrated audio and video where they exist.
- **`get_post`**: a full post as clean Markdown, with figures described in
  text.
- **`search_site`**: full-text search across posts, projects and talks,
  returning the passage that matched.
- **`get_profile`**: role, experience, talks and links.
- **`book_a_call`**: the booking link, and nothing more. Booking happens on
  that page, by a person.

The core of it is short:

```js
const modelContext = document.modelContext ?? navigator.modelContext;

await modelContext?.registerTool({
  name: "get_post",
  description: "Get the full text of one post as Markdown, by its id.",
  inputSchema: {
    type: "object",
    properties: { id: { type: "string" } },
    required: ["id"],
  },
  annotations: { readOnlyHint: true },
  async execute({ id }, { signal }) {
    const res = await fetch(`/agent/${id}.md`, { signal });
    return res.ok ? res.text() : `No post with id "${id}".`;
  },
});
```

Every tool is read-only. The data behind them (an index of the site and a
Markdown file per post) is generated at build time and only fetched when an
agent actually calls a tool, so a human reading the page downloads nothing
extra. Browsers without WebMCP skip the whole thing.

## What I learned wiring it up

**Tools are only as good as their data.** My first `search_site` matched
titles and headings only. The first real question I tried, about WebMCP
itself, returned nothing, because the word lived in the body of an essay.
An agent can't tell a bad index from an empty site.

**The origin-trial token is per origin.** Mine covers `mek.dev`, not
`www.mek.dev`, and the site answered on both. Agents arriving on www would
have found no tools, so www now redirects to the bare domain. The token
itself is public by design; it ships in every page.

**Test without the browser, then with it.** Most browsers don't have WebMCP
yet, so I tested the tool logic against a stand-in `modelContext` first, then
in Chrome itself, where `getTools()` lists what a page registered and
`executeTool()` runs one. One detail the docs don't make obvious:
`executeTool` takes the tool object `getTools` returns, not its name.

**Keep consequential steps with people.** The same rule I've argued for on
airline channels applies here in miniature. The agent can find the booking
link; it doesn't book. On turkishairlines.com the rule is stricter and fails
closed: any consequential step needs explicit confirmation in the page, and a
tool without that confirmation simply doesn't run.

## Why this matters beyond one site

The web already has conventions for crawlers: robots.txt says where they may
go, sitemaps say what exists. WebMCP is the first serious attempt at the
same courtesy for agents that act. The sites that offer good tools will be
the ones agents use well, and the ones that don't will be screenshotted,
guessed at and occasionally broken.

If your site has a search box, it should probably have a search tool. Open
this page in a Chrome with WebMCP and ask your assistant what I've written
about airline servicing. It should find the answer without reading a single
pixel.
