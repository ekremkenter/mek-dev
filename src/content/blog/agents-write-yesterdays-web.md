---
title: Agents Write Yesterday's Web
description: Coding agents default to the web of old tutorials. Browser makers now hand them current guidance while they work, and every platform owner should do the same.
date: 2026-11-11
kind: note
image: /og/agents-write-yesterdays-web.png
imageAlt: "Title card for the note Agents Write Yesterday's Web. A panel contrasts yesterday's patterns with today's: a modal built from divs becomes dialog, a script-positioned tooltip becomes popover and anchor positioning, and dark mode set by JavaScript becomes color-scheme and light-dark()."
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

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 300" role="img" aria-labelledby="awy-deliver-title awy-deliver-desc" font-size="13">
<title id="awy-deliver-title">Same knowledge, new delivery</title>
<desc id="awy-deliver-desc">Before: browser teams write documentation on MDN and web.dev, which helps only if a developer goes and reads it before writing code. Now: browser teams write skills that are tested and tied to Baseline, and the agent loads them into its context while it writes the code.</desc>
<defs><marker id="awy-deliver-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fig-muted-fill"/></marker></defs>
<text class="fig-title" x="24" y="34" font-size="15">Same knowledge, new delivery</text>
<text class="mono fig-faint" x="24" y="119" font-size="12" letter-spacing="1.5">BEFORE</text>
<rect class="fig-box" x="92" y="84" width="150" height="62" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="167" y="111" text-anchor="middle" font-weight="600">Browser teams</text>
<text class="fig-soft" x="167" y="128" font-size="11.5" text-anchor="middle">know what is current</text>
<path class="fig-line" d="M245 115H259" stroke-width="1.25" marker-end="url(#awy-deliver-arrow)"/>
<rect class="fig-box" x="262" y="84" width="150" height="62" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="337" y="111" text-anchor="middle" font-weight="600">Docs pages</text>
<text class="fig-soft" x="337" y="128" font-size="11.5" text-anchor="middle">MDN, web.dev</text>
<path class="fig-line" d="M415 115H429" stroke-width="1.25" marker-end="url(#awy-deliver-arrow)"/>
<rect class="fig-tint" x="432" y="84" width="150" height="62" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="507" y="111" text-anchor="middle" font-weight="600">A developer</text>
<text class="fig-soft" x="507" y="128" font-size="11.5" text-anchor="middle">if they go and read it</text>
<path class="fig-line" d="M585 115H599" stroke-width="1.25" marker-end="url(#awy-deliver-arrow)"/>
<rect class="fig-box" x="602" y="84" width="150" height="62" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="677" y="111" text-anchor="middle" font-weight="600">Code</text>
<text class="fig-soft" x="677" y="128" font-size="11.5" text-anchor="middle">often yesterday’s pattern</text>
<text class="mono fig-faint" x="24" y="219" font-size="12" letter-spacing="1.5">NOW</text>
<rect class="fig-box" x="92" y="184" width="150" height="62" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="167" y="211" text-anchor="middle" font-weight="600">Browser teams</text>
<text class="fig-soft" x="167" y="228" font-size="11.5" text-anchor="middle">know what is current</text>
<path class="fig-line" d="M245 215H259" stroke-width="1.25" marker-end="url(#awy-deliver-arrow)"/>
<rect class="fig-accent-box" x="262" y="184" width="150" height="62" rx="8" stroke-width="2"/>
<text class="fig-ink" x="337" y="211" text-anchor="middle" font-weight="600">Skills</text>
<text class="fig-soft" x="337" y="228" font-size="11.5" text-anchor="middle">tested, tied to Baseline</text>
<path class="fig-line" d="M415 215H429" stroke-width="1.25" marker-end="url(#awy-deliver-arrow)"/>
<rect class="fig-accent-box" x="432" y="184" width="150" height="62" rx="8" stroke-width="2"/>
<text class="fig-ink" x="507" y="211" text-anchor="middle" font-weight="600">The agent’s context</text>
<text class="fig-soft" x="507" y="228" font-size="11.5" text-anchor="middle">while it writes</text>
<path class="fig-line" d="M585 215H599" stroke-width="1.25" marker-end="url(#awy-deliver-arrow)"/>
<rect class="fig-box" x="602" y="184" width="150" height="62" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="677" y="211" text-anchor="middle" font-weight="600">Code</text>
<text class="fig-soft" x="677" y="228" font-size="11.5" text-anchor="middle">today’s pattern</text>
</svg>
</div>
<figcaption>The knowledge was always published. What changed is where it lands: in the agent’s context at the moment it writes, instead of on a page a developer might read.</figcaption>
</figure>

## The same move as MCP

This is the argument I've been making about airlines, pointed at the web
itself. An agent that has to guess its way through a website screenshots
it and fumbles the date picker; one that is given
[tools](/blog/tools-not-pages-webmcp/) through
[MCP](/blog/one-backend-every-ai-agent/) or WebMCP books the flight. Tools
and knowledge are different things, but the move is the same: the owner
hands the agent what it would otherwise have to guess.

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 330" role="img" aria-labelledby="awy-move-title awy-move-desc" font-size="13">
<title id="awy-move-title">The owner hands the agent what it would otherwise guess</title>
<desc id="awy-move-desc">Two columns. An airline publishes an MCP server whose tools act on its live systems, so the agent books the flight instead of guessing at the website. Browser makers publish skills with knowledge of today's platform, so the agent writes today's web instead of guessing from old tutorials.</desc>
<defs><marker id="awy-move-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fig-muted-fill"/></marker></defs>
<text class="fig-title" x="24" y="34" font-size="15">The owner hands the agent what it would otherwise guess</text>
<text class="mono fig-faint" x="205" y="66" font-size="11" text-anchor="middle" letter-spacing="1.5">AN AIRLINE</text>
<rect class="fig-box" x="70" y="78" width="270" height="58" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="205" y="103" text-anchor="middle" font-weight="600">The airline</text>
<text class="fig-soft" x="205" y="120" font-size="11.5" text-anchor="middle">owns the booking systems</text>
<path class="fig-line" d="M205 139V163" stroke-width="1.25" marker-end="url(#awy-move-arrow)"/>
<rect class="fig-accent-box" x="70" y="166" width="270" height="58" rx="8" stroke-width="2"/>
<text class="fig-ink" x="205" y="191" text-anchor="middle" font-weight="600">MCP server</text>
<text class="fig-soft" x="205" y="208" font-size="11.5" text-anchor="middle">tools: search, change, book</text>
<path class="fig-line" d="M205 227V251" stroke-width="1.25" marker-end="url(#awy-move-arrow)"/>
<rect class="fig-box" x="70" y="254" width="270" height="58" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="205" y="279" text-anchor="middle" font-weight="600">The agent books the flight</text>
<text class="fig-soft" x="205" y="296" font-size="11.5" text-anchor="middle">instead of screenshotting the site</text>
<text class="mono fig-faint" x="555" y="66" font-size="11" text-anchor="middle" letter-spacing="1.5">BROWSER MAKERS</text>
<rect class="fig-box" x="420" y="78" width="270" height="58" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="555" y="103" text-anchor="middle" font-weight="600">Browser makers</text>
<text class="fig-soft" x="555" y="120" font-size="11.5" text-anchor="middle">own the web platform</text>
<path class="fig-line" d="M555 139V163" stroke-width="1.25" marker-end="url(#awy-move-arrow)"/>
<rect class="fig-accent-box" x="420" y="166" width="270" height="58" rx="8" stroke-width="2"/>
<text class="fig-ink" x="555" y="191" text-anchor="middle" font-weight="600">Skills</text>
<text class="fig-soft" x="555" y="208" font-size="11.5" text-anchor="middle">knowledge: dialog, popover, color-scheme</text>
<path class="fig-line" d="M555 227V251" stroke-width="1.25" marker-end="url(#awy-move-arrow)"/>
<rect class="fig-box" x="420" y="254" width="270" height="58" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="555" y="279" text-anchor="middle" font-weight="600">The agent writes today’s web</text>
<text class="fig-soft" x="555" y="296" font-size="11.5" text-anchor="middle">instead of old tutorials</text>
<text class="fig-soft" x="380" y="200" font-size="11.5" text-anchor="middle">tools</text>
<text class="fig-soft" x="380" y="214" font-size="11.5" text-anchor="middle">and</text>
<text class="fig-soft" x="380" y="228" font-size="11.5" text-anchor="middle">knowledge</text>
</svg>
</div>
<figcaption>MCP hands an agent tools and a skill hands it knowledge, but the move is the same: whoever owns the platform publishes what the agent would otherwise have to guess.</figcaption>
</figure>

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

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 270" role="img" aria-labelledby="awy-bugs-title awy-bugs-desc" font-size="13">
<title id="awy-bugs-title">Four quiet bugs in this site’s theme toggle</title>
<desc id="awy-bugs-desc">Four situations, before and after the guide. Toggling back to your system’s scheme pinned it forever; now it clears the pin and follows the system again. With JavaScript off on a dark system, the site was light; now it is dark from CSS alone. Before the stylesheet loaded, no scheme was declared; now the meta color-scheme tag says light dark. A second open tab kept the old theme; now it follows the toggle.</desc>
<text class="fig-title" x="24" y="34" font-size="15">Four quiet bugs in this site’s theme toggle</text>
<g class="mono fig-faint" font-size="11" letter-spacing="1.5"><text x="24" y="66">WHEN</text><text x="300" y="66">BEFORE</text><text x="480" y="66">AFTER THE GUIDE</text></g>
<line class="fig-grid" x1="24" y1="76" x2="736" y2="76"/>
<text class="fig-ink" x="24" y="104">Toggle back to your system’s scheme</text>
<circle cx="290" cy="100" r="6" class="fig-muted-soft" stroke-width="1"/><path class="fig-line" d="M287 97l6 6M293 97l-6 6" stroke-width="1.4"/>
<text class="fig-soft" x="304" y="104">pinned it forever</text>
<circle cx="470" cy="100" r="7" class="fig-accent-fill"/><path class="fig-on-accent" d="M466.5 100l2.5 2.5 4.5-5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<text class="fig-ink" x="484" y="104">clears the pin; follows the system again</text>
<line class="fig-grid" x1="24" y1="121" x2="736" y2="121"/>
<text class="fig-ink" x="24" y="146">JavaScript off, dark system</text>
<circle cx="290" cy="142" r="6" class="fig-muted-soft" stroke-width="1"/><path class="fig-line" d="M287 139l6 6M293 139l-6 6" stroke-width="1.4"/>
<text class="fig-soft" x="304" y="146">light theme</text>
<circle cx="470" cy="142" r="7" class="fig-accent-fill"/><path class="fig-on-accent" d="M466.5 142l2.5 2.5 4.5-5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<text class="fig-ink" x="484" y="146">dark theme, from CSS alone</text>
<line class="fig-grid" x1="24" y1="163" x2="736" y2="163"/>
<text class="fig-ink" x="24" y="188">Before the stylesheet loads</text>
<circle cx="290" cy="184" r="6" class="fig-muted-soft" stroke-width="1"/><path class="fig-line" d="M287 181l6 6M293 181l-6 6" stroke-width="1.4"/>
<text class="fig-soft" x="304" y="188">no scheme declared</text>
<circle cx="470" cy="184" r="7" class="fig-accent-fill"/><path class="fig-on-accent" d="M466.5 184l2.5 2.5 4.5-5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<text class="fig-ink" x="484" y="188">meta color-scheme: light dark</text>
<line class="fig-grid" x1="24" y1="205" x2="736" y2="205"/>
<text class="fig-ink" x="24" y="230">A second tab open</text>
<circle cx="290" cy="226" r="6" class="fig-muted-soft" stroke-width="1"/><path class="fig-line" d="M287 223l6 6M293 223l-6 6" stroke-width="1.4"/>
<text class="fig-soft" x="304" y="230">kept the old theme</text>
<circle cx="470" cy="226" r="7" class="fig-accent-fill"/><path class="fig-on-accent" d="M466.5 226l2.5 2.5 4.5-5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<text class="fig-ink" x="484" y="230">follows the toggle</text>
</svg>
</div>
<figcaption>Each was the common tutorial pattern. One scan flagged it; the guide behind it showed all four.</figcaption>
</figure>

Nothing dramatic: these are the bugs that ship for years. An agent will look
for them now, as long as the people who own the platform tell it what to
look for.
