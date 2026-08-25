---
title: One Backend, Every AI Agent
description: Turkish Airlines became the first airline in Anthropic's Claude connector directory — and the same server already powered our ChatGPT app. What that proves about distribution.
date: 2026-06-30
kind: essay
toc: false
---

Turkish Airlines is the first airline in Anthropic's Claude connector
directory. The same MCP server already powers our ChatGPT app. Search
flights, check status, look up bookings, browse city guides, find promotions
— all from inside a conversation with the agent.

This is the part of MCP I find most interesting: **build once, run
everywhere.** One backend, one tool spec, every major AI agent. Distribution
stops being about *which channel* and starts being about *which capabilities
you expose.*

## Why "first" matters less than "same"

Being first in a directory is a press line. Running the *same* backend on
every assistant is a strategy. Every new AI surface that adopts MCP —
and after the Linux Foundation donation, they all have a reason to — is a
distribution channel we're already live on, at zero marginal engineering
cost. When we started, the server exposed fourteen tools. It has grown past
twenty since, and every one of them shipped to both platforms
simultaneously, with zero duplicated UI work.

## Trust is a design decision, not a disclaimer

The most common question I get about putting an airline inside an AI
assistant: *what can it touch?* The honest answer is: exactly what we
designed it to touch, and nothing else.

- **Anonymous by design.** The public tools work without an account.
  Identity, where needed, uses the same boundary as web manage-booking —
  PNR plus surname.
- **The model never sees what it doesn't need.** When a passenger can't find
  their PNR, the lookup sends it to their phone — not into the model's
  context.
- **Read-only by default.** The overwhelming majority of our tools can only
  look, not act. And commerce always completes on turkishairlines.com — the
  assistant hands you a payment link; it never handles a payment.

We didn't give AI the keys to the kingdom — we gave it a well-guarded
window.

## Where this goes

The industry protocols forming around agentic commerce (ACP, UCP) point at
assistants completing transactions with the merchant as the system of
record. Whatever the timeline turns out to be, the airlines that already
own a governed, capability-shaped AI presence will have a very short path.
The ones that don't will be integrating through someone else's.

Forms had a good twenty-year run. The conversation is the counter now.
