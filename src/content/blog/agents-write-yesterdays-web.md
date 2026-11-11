---
title: Agents Write Yesterday's Web
description: Coding agents write the web they were trained on. Chrome now puts its expertise into the agent while it works, and that change in delivery matters more than any single fix.
date: 2026-11-11
kind: note
---

*Researched and drafted with Claude; views are my own.*

A coding agent writes the web it was trained on. That web is a few years
old, and it's full of patterns that were the best anyone could do at the
time: dark mode hung on a class that JavaScript sets, a modal built from
divs, a date picker from a library. The platform has moved on, and browsers
now ship native answers to most of these. The agent, frozen at its training
cutoff, mostly doesn't know.

That's not a quality problem in one project. It's a distribution problem.
Every team that writes code with agents now ships yesterday's patterns,
quickly and at scale, and the review that might catch them is increasingly
done by another agent with the same blind spots.

## Docs have a new reader

Chrome's answer, announced as an early preview at Google I/O in May, is
[Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance):
skills that a coding agent loads while it works. Each covers a common task,
such as a dialog, a form, dark mode or image loading, with the modern
approach, its pitfalls and its fallbacks, tied to
[Baseline](https://web.dev/baseline) so the agent knows what is safe for the
browsers you support.

The interesting part isn't the content; much of it is on MDN and web.dev
already. It's the delivery. Documentation used to wait for a developer to
go and read it. Now the people who build the browser put their expertise
into the agent's context at the moment the code is written. Chrome reports
that in early results, agents equipped with it improved their adherence to
modern best practices by
[37 percentage points on average](https://developer.chrome.com/docs/modern-web-guidance/get-started),
and says results vary by project, model and prompt.

## The same move as MCP

This is the argument I've been making about airlines, pointed at the web
itself. An agent that has to guess its way through a website screenshots it
and fumbles the date picker; one that is given
[tools](/blog/tools-not-pages-webmcp/) through
[MCP](/blog/one-backend-every-ai-agent/) or WebMCP does the job properly.
Coding agents are no different. Left to guess, they write what they
remember. Given knowledge from the people who own the platform, they write
what is right today.

That suggests a rule for anyone who owns a platform, an API or a design
system: the most frequent reader of your docs is about to be an agent. Ship
them in a form an agent loads, not only as a page a person might visit. For
an airline, that's an MCP server describing what the airline can do. For a
browser, it's a skill describing what the web can do now.

## A small proof

I ran it on this site this week. The theme toggle, written by a coding agent
during the August rebuild, had four quiet bugs: it pinned your choice
forever, had no dark mode without JavaScript, never told the browser which
schemes it supports, and ignored other tabs. One scan found them, and the
fix was mostly letting the platform do the work. Nothing dramatic, and that
is the point: these are the bugs that ship for years because nobody looks.
