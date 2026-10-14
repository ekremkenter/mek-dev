---
title: "Who Sent This Agent? The Personal Agent Protocol on the Turkish Airlines MCP Server"
description: Personal agents are about to act for people at companies. What the new Personal Agent Protocol asks of a company, what we built on the Turkish Airlines MCP server in a test environment, and the decisions that mattered.
date: 2026-10-14
kind: essay
toc: true
---

*Researched and drafted with Claude; views are my own.*

Today, when ChatGPT or Claude talks to the Turkish Airlines MCP server, it
arrives as an ordinary client. A passenger connects the app, signs in to
Miles&Smiles if they want their bookings, and the assistant calls tools on
their behalf. That works because the person is right there, in the
conversation, every time.

Personal agents change the shape of that. An assistant that knows you,
remembers your trips and acts for you while you're doing something else
needs to answer three questions a normal client never has to: **which agent
is this, who sent it, and what is it allowed to do?** Without good answers,
a company has two bad options: refuse agents, or trust a name the agent
reports about itself.

On 6 October, Sierra and Meta announced the
[Personal Agent Protocol](https://sierra.ai/blog/introducing-personal-agent-protocol),
known as Poppy, and the first draft of the
[specification](https://personalagentprotocol.org/docs/spec) followed that
week. The [design partners](https://personalagentprotocol.org/docs/path-to-1)
include OpenAI and Meta on the agent side; Visa, Mastercard, Stripe, Shopify
and Okta among the technology providers; and, among the companies, PayPal
and United, the only airline.

On 13 October we built everything in Draft 0.1 that applies to an MCP
server, except Mediated Sign-In, into the Turkish Airlines MCP server. It
runs only in a test environment, behind a switch that is off everywhere
else. None of it is in production.

## What the protocol asks of a company

Four ideas carry most of the weight, and discovery ties them together: a
company publishes what it supports at `/.well-known/poppy.json`, and an
agent reads that before anything else.

**The agent proves who it is with keys.** An agent's identity is a URL that
publishes its name, logo and public keys. It signs its token requests with
those keys, and the tokens it gets back are bound to a second key of its own
(DPoP), so a token copied out of a log is useless without that key. A
company decides which agents it accepts by that URL, not by a string in a
header.

There is one exception, and for us it's the main case: MCP authorization
only knows Bearer tokens, so for an MCP server the agent gets a plain Bearer
token instead, valid at that one server only. When your API *is* an MCP
server, most of an agent's calls carry a token anyone holding it could use.
What stays tied to the agent's keys is what matters most: every token
request, which the agent signs, and every confirmation of an operation,
which needs a key-bound token.

**The person signs in on the company's page.** With Direct Sign-In, the
agent opens the company's own sign-in page and the person approves access
there, as with any OAuth app. With Device Sign-In, for agents without a
browser, the agent shows a short code and the person enters it on the
company's page from any device. Either way, the agent never sees a password.

**Access comes as scoped, revocable tokens.** A short-lived session token
carries what the person granted: read, write or both. A long-lived account
token keeps the connection, and signing out revokes it.

**Anything with consequences is a proposal.** In the Operations extension, a
company proposes an action (a change, a cancellation, a purchase) with a
plain-language summary. The agent shows that summary to the person in its
own interface, and only after they approve, or under a standing permission
they gave earlier where the company allows one, does it confirm that exact
version of the proposal. The company may not start before confirmation, and
performs each operation at most once.

## What we built

On the MCP server behind Turkish Airlines' apps in ChatGPT and Claude
(flight search, flight status, booking lookup, baggage cases, paid upgrades
and Miles&Smiles sign-in), we added, behind a switch that is on only in our
test environment:

- **Discovery** at `/.well-known/poppy.json`.
- **Sessions for key-authenticated agents**, with signed assertions and
  DPoP-bound tokens.
- **Direct Sign-In and Device Sign-In.**
- **Sign-out** by revoking the account token.
- **The Operations extension**, version 1.
- **A "Connected apps" page** where a member sees every app and agent
  connected to their account and can disconnect any of them.
- **A developer guide** whose endpoints, limits and durations come from the
  live configuration, so they can't drift from what the server does.

The first version took a day with Claude Code. An adversarial review and its
fixes followed the same night, before anyone outside the team used it. The
speed says less about us than about the spec: Draft 0.1 is mostly
well-understood standards (OAuth, signed JWTs, DPoP) put together carefully,
and an MCP server that already does OAuth is most of the way there.

## Five decisions that mattered

### Telling an agent apart from an ordinary client

The first problem was the least expected. ChatGPT's client metadata already
names key-based authentication as its preferred method, so "supports keys"
doesn't mean "is a personal agent". We treat a client as a personal agent
only when its metadata doesn't also offer the ordinary public-client method,
and only if it is on our list. A personal agent we don't list is refused;
everything else keeps working as an ordinary client.

### No Mediated Sign-In

The spec has a third sign-in method, Mediated Sign-In, in which the agent
collects the person's username and password and sends them to the company.
We left it out on purpose. Miles&Smiles accounts hold miles that members
spend like money, and an agent holding those credentials would also skip the
bot check and the consent screen that protect them. Members sign in on our
page, directly or with a device code. Nothing an agent does should require
it to know a member's password.

That choice moves the risk rather than removing it. Device Sign-In has a
well-known weakness: anyone can start a sign-in and send the code to someone
else with a convincing story, and the page they land on is genuine. So the
approval page has to do real work. Approving any personal agent, by either
sign-in type, needs the password typed in the last five minutes, even in a
browser that's already signed in. The page also says how long the agent will
have access, when a device code was requested, and that Turkish Airlines
never sends codes or links to approve. Telling the member when a new agent
connects is on the list before production.

### An approval is for exact terms

Only one action became an operation: the paid upgrade checkout. Confirming
it registers the upgrade with Turkish Airlines and prepares the checkout;
nothing is charged until the member pays on turkishairlines.com. Before
anything is registered, the server checks that the price, the flights and
the number of passengers are still what the member approved. If any of them
changed, the operation refuses instead of going ahead: the approval was for
those terms, and different terms need a new approval. Asking again for the
same upgrade in the same session returns the proposal already waiting, so a
retry can't leave two that could both be confirmed.

That means the member approves twice: once in their agent, for the exact
upgrade and price, and again when they pay on our site. It sounds redundant,
but the two approvals do different jobs. The first stops an agent from
committing the member to something they didn't see; the second is where the
money actually moves. Until the protocol has payments, which it lists as an
open topic, I'd rather keep that second step on our page.

### An outcome has to be true

The spec is strict about outcomes: a company may not report that something
failed while it doesn't know whether it happened, and the result has to
describe every change it made. The review found that our first version
could break the second rule in an unglamorous way. If the server restarted,
or a database write failed, after Turkish Airlines had registered the
upgrade but before we recorded it, the operation would later read "nothing
was prepared".

Now the write is retried, and a restart gives running actions time to
finish. If an outcome still can't be recorded, we report the operation as
failed, deliberately: the action the member approved is a checkout link
reaching them, and that is known not to have happened. The summary says
only what is true in every case: no link reached the member, nothing was
charged, and the option may be held for a short while.

### A place to revoke, on day one

If agents can connect to a member's account, members need one place to see
them and cut them off. "Connected apps" was built with the protocol, not
after it. Revocation that only exists in an API isn't revocation a person
can use. It also has to be complete: every sign-in creates a new grant, so
an agent that signed in twice holds two, and the page lists it once and
disconnects all of it.

## Testing is the gap

There's no official reference agent or conformance suite yet (Sierra says a
reference implementation is coming), and a server can pass its own tests
and still disagree with every agent it meets. The community has started to
fill the gap:

- [PAP Checker](https://papchecker.com) checks a domain's public discovery
  documents.
- [pi-poppy](https://github.com/richardanaya/pi-poppy) is an agent-side
  implementation with its own conformance tests.
- [datalayer/personal-agent-protocol](https://github.com/datalayer/personal-agent-protocol)
  is an SDK for Python and TypeScript.

We ran pi-poppy against our test environment, and it found a real
disagreement within minutes. The spec doesn't say what audience a client
assertion should name; RFC 7523 allows anything that identifies the
authorization server and suggests the token endpoint. pi-poppy names
whichever endpoint it's calling, while we accepted only the token endpoint
or our issuer, so Device Sign-In and sign-out failed.

The protocol also makes testing hard on purpose. A company has to fetch an
agent's identity over public HTTPS, so an agent on localhost won't do, and a
company that lists the agents it accepts, as it should, shuts out a
throwaway test agent too. So we built an inspector, something like MCP
Inspector for the company side: a hosted agent built on pi-poppy, so the
agent side is still someone else's reading of the spec, with one fixed
identity a company can list. It shows every request and answer, with
assertions and proofs decoded and credentials hidden. Because it holds a
listed identity and signs in a real member, it stays private to the team.
The [discovery check](https://poppy-inspector.app.turkishtechlab.com/), which needs no identity, is public.

## What's still open

Among what stands between this test build and production:

- **Discovery on turkishairlines.com itself.** An agent looks for
  `/.well-known/poppy.json` on the company's domain, so the main website has
  to serve or redirect it, not just the MCP server.
- **Which agents to allow, and on what terms.** The protocol deliberately
  leaves this to each company.
- **Telling members when an agent connects.**
- **A spec that can still change** in ways that aren't backward compatible
  before 1.0.

And what I'd ask of the spec, from building against it:

1. **An explicit marker for personal agents** in client metadata, so a
   company doesn't have to infer one from authentication methods.
2. **One defined audience for client assertions** at every endpoint. The
   issuer is the natural choice.
3. **A shared test agent that companies can list,** or a test mode, so
   allowlists and testing stop pulling against each other.

## Why it matters

The question for companies is shifting from "can an agent use our site?" to
"who sent this agent, and what did the person actually agree to?". The
protocol's answers are the right ones: identity by keys, sign-in on the
company's own page, and a person's explicit approval before anything with
consequences. It's the same rule I've argued for
[on websites with WebMCP](/blog/tools-not-pages-webmcp/) and
[in chat apps](/blog/one-backend-every-ai-agent/): agents can find, compare
and prepare, and the consequential step stays with the person.
