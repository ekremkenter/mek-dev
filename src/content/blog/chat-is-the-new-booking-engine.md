---
title: Chat Is the New Booking Engine
description: "Why airlines must own their AI presence: the thesis behind Turkish Airlines' journey into agentic travel."
date: 2026-04-17
kind: essay
talk: "Keynote at Future of Aviation 2026, Helsinki"
toc: true
---

*This essay is the written form of my keynote at Future of Aviation 2026 in
Helsinki. Views are my own.*

"I need a flight to Konya for my mother-in-law on Saturday, after 9am."

For twenty years, turning that sentence into a booking was the passenger's
job. Open the website. Select origin and destination. Pick dates from a
calendar. Filter through dozens of options. Compare, then book. Six steps,
all performed by the human, on an interface we built to make the work
bearable.

Now it's one sentence, and the AI does the rest.

## The behavior already shifted

This isn't a prediction. AI-referred traffic to e-commerce grew roughly
**seven-fold** between January 2025 and early 2026 (Adobe Digital Insights /
Shopify). People aren't learning to use our search boxes better; they're
skipping them and asking an assistant instead.

Here's the uncomfortable part for my industry: of the AI referral links in
travel, **online travel agencies get about 74%. Airlines get 26%.** The last
time airlines let an intermediary own the customer interface, it took decades
and billions in distribution fees to claw it back. Airlines must own their AI
presence, or aggregators will intermediate it again, this time at the speed
of a model update.

## One protocol changed the calculus

The Model Context Protocol is USB-C for AI agents: one server, any AI
platform. Build once, run everywhere. Anthropic open-sourced it in late 2024;
OpenAI adopted it in early 2025; by the end of 2025 it was donated to the
Linux Foundation. In May 2025, Turkish Airlines launched the first airline
MCP server.

That ordering matters. When a standard is forming, the early mover doesn't
just get press; it gets to make its lessons the industry's defaults. Today
our one MCP backend powers Turkish Airlines inside both Claude and ChatGPT:
flight search, live status, booking lookups, Miles&Smiles services. The
model holds the conversation's context, so the Konya sentence this essay
opened with simply works. No form fields, no filters.

## From pages to fragments

The deeper shift is in what "user interface" means. For two decades, software
meant pages: navigation, menus, scaffolding, and the user doing the work of
extracting what they need. Chat-native design inverts that. You don't ship
your whole website into the conversation; you ship the one fragment the
moment needs (an interactive flight card, a seat map, a price calendar),
rendered right in the thread.

This is now platform doctrine, not just my opinion: the assistant platforms'
own developer guidance tells builders the same thing: don't port your
website into the chat; offer it the capabilities, one moment at a time.

## What this means if you run distribution

Three things I'd tell any airline, or any company whose product is bookable:

1. **Your AI presence is a channel you either own or lease.** The 74/26 split
   is what leasing looks like.
2. **The unit of product is no longer the page; it's the capability.**
   Inventory your APIs and ask which ones deserve to be conversational.
3. **Standards moments reward the early and the careful.** Move now, but
   treat governance as part of the product: our AI integrations authenticate
   with OAuth 2.1, touch only vetted APIs, and are read-only wherever
   possible.

Quietly, the booking engine is moving from forms to conversations. The
airlines that notice early get to decide what that feels like for their
passengers. The rest will find out what it feels like when someone else
decides.
