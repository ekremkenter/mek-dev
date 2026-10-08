---
title: Building Chat-Native UI with MCP Apps
description: "A production guide in three phases: what MCP Apps is, how to build and deploy one, and the unglamorous path to actually getting listed."
date: 2026-06-25
kind: essay
talk: "Talk at AWS Twin Strikers: AI & Cloud, Istanbul"
toc: true
---

*The written form of my talk at AWS's Twin Strikers event in Istanbul. Views
are my own.*

A normal MCP tool returns data. An MCP App tool returns a little interface.

That one sentence is the mental model for MCP Apps, the extension
Anthropic and OpenAI co-developed and released in January 2026. The flow:
the user asks, the model picks a tool, and the tool returns not just JSON but
a `ui://` resource, which the host renders in a sandboxed iframe, right
inside the conversation. The thread stops being a text dump and becomes a
usable interface: booking cards, flight status visuals, seat maps.

We run this in production at Turkish Airlines. The same server powers
interactive cards in both Claude and ChatGPT. Here's the three-phase guide I
wish I'd had.

## Phase 1: Stop shipping pages

The design shift comes before any code. For twenty years software meant
pages: navigation, menus, scaffolding, and the user does the work. Chat-native
flips it. You don't port your website into the chat; you ship the one
fragment the moment needs. The platforms' own developer guidance agrees:
expose atomic conversational capabilities, not a webview of your homepage.

Practically, that means your unit of design is a *fragment* (one card that
answers one moment) and your unit of product is a *capability*, not a page.

## Phase 2: Build it like a production service, because it is one

Three architecture decisions made ours production-grade:

1. **Stateless Streamable HTTP.** One `/mcp` endpoint, no sticky sessions.
   It scales like any REST API, and statelessness means the deployment
   target becomes a choice, not a constraint. (This is also exactly where
   the MCP spec itself went with the July 2026 revision: a stateless core,
   with MCP Apps folded in as an official part of the spec.)
2. **OAuth 2.1, resource-server only.** You validate tokens; you don't issue
   logins. The AI platforms never store credentials. When we implemented
   this in early 2025 it was genuinely hard: we hand-rolled the
   resource-server flow. Today's frameworks give you most of it for free.
   The principles haven't changed; the effort has dropped dramatically.
3. **No token pass-through.** The server holds its own downstream tokens.
   That single rule prevents the confused-deputy class of vulnerabilities.

And the scars that earn their keep: your load balancer's health check must
speak `/mcp`, streaming responses will find every timeout you forgot to
raise, and it's HTTPS end-to-end or nothing.

## Phase 3: The path to actually getting listed

Anyone can build a server. Getting *listed* in Anthropic's connector
directory or the ChatGPT app store is the part nobody writes about.

1. **Emulate before you submit.** Test in simulated Claude and ChatGPT
   runtimes (MCPJam, mcp-use, the official Inspector) before touching a real
   host.
2. **Audit like a reviewer.** Independent audits found security issues in
   roughly two-thirds of public MCP servers, and tool-input handling is a
   top rejection cause. Tools like Alpic Beacon show you what reviewers will
   see (protocol compliance, tool quality, widget rendering, CSP) before
   they see it.
3. **Annotate honestly.** Correct `readOnlyHint` and `destructiveHint`
   labels aren't bureaucracy; they're a top rejection cause when wrong.
   Doing it right and doing it submittable are the same work.

Then submit the same backend to both directories. Build once, run everywhere
is real now: our fourteen tools at launch grew past twenty with zero
duplicated UI work.

## The payoff

Because the model holds the conversation's context, *"my babysitter arrives
at 9am"* becomes the right afternoon flight. No form fields, no filters. And
because the governance was designed in rather than bolted on, the directory
reviews became a checklist to pass instead of a negotiation to survive.

We stopped shipping pages and started shipping fragments that live inside
the conversation. In production, on the two biggest assistants, today.
