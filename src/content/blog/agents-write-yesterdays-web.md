---
title: Agents Write Yesterday's Web
description: Coding agents default to the web of old tutorials. Browser makers now hand them current guidance while they work, and every platform owner should do the same.
date: 2026-11-11
kind: note
---

*Researched and drafted with Claude; views are my own.*

A coding agent writes the web it was trained on, and that web is mostly
old tutorials: dark mode hung on a class or attribute that JavaScript sets,
a modal built from divs, a tooltip positioned by a script. Browsers now
ship native answers to most of these. The agent has usually seen the modern
answer too; it's just outvoted by ten years of tutorials.

That's not a quality problem in one project. It's a distribution problem,
and it needs a distribution fix. Teams that write code with agents now ship
yesterday's patterns at scale, and the review that might catch them is
increasingly done by another agent with the same habits. Newer models don't
solve it, because volume beats recency, and neither does web search: an
agent searches when it's unsure, and an old pattern doesn't feel unsure.

## Docs have a new reader

Chrome previewed
[Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance)
at Google I/O in May, and on 10 November it reached
[version 1.0](https://developer.chrome.com/blog/modern-web-guidance-v1),
with Firefox and Edge joining Chrome to make it a cross-browser effort. It's
a set of skills a coding agent loads while it works. Each covers a common
task, such as a dialog, a form, a tooltip or dark mode, with the modern
approach, its pitfalls and its fallbacks, tied to
[Baseline](https://web.dev/baseline) so the agent knows what is safe for
the browsers you support.

Much of the knowledge is on MDN and web.dev already. What's new is that
it's curated and tested for agents, and delivered to them. Documentation
used to wait for a developer to go and read it; now the people who build
browsers put their expertise into the agent's context at the moment the
code is written. By Chrome's own checks, agents equipped with it improved
their adherence to modern best practices by
[37 percentage points on average](https://developer.chrome.com/docs/modern-web-guidance/get-started)
in early results, with the caveat that results vary by project, model and
prompt. One outside team, note inc., reports pass rates rising from 61% to
94% on its production codebase.

## The same move as MCP

This is the argument I've been making about airlines, pointed at the web
itself. An agent that has to guess its way through a website screenshots
it and fumbles the date picker; one that is given
[tools](/blog/tools-not-pages-webmcp/) through
[MCP](/blog/one-backend-every-ai-agent/) or WebMCP books the flight. Tools
and knowledge are different things, but the move is the same: the owner
hands the agent what it would otherwise have to guess.

That suggests a rule for anyone who owns a platform, an API or a design
system: the most frequent reader of your docs is becoming an agent. Ship
them in a form an agent loads, not only as a page a person might visit.
Concretely, that's a skill or an MCP server an agent can search and pull
from, plus an eval that runs the same task with and without it, the way
Chrome tests each guide. For an airline, it's an MCP server describing what
the airline can do. For browsers, it's a skill describing what the web can
do now.

## Tried on this site

I ran it on this site this week. The theme toggle, written by a coding
agent during the August rebuild, had four quiet bugs: it pinned your choice
forever, had no dark mode without JavaScript, never declared both schemes
before the stylesheet loaded, and ignored other tabs. One scan flagged the
pattern, and the guide behind it showed all four. The fix was written by an
agent too, this time with the guide loaded.

Nothing dramatic: these are the bugs that ship for years. An agent will look
for them now, as long as the people who own the platform tell it what to
look for.
