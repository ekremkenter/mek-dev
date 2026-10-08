---
title: The Prize Comes After the Order
description: A decade of offers and orders gave airlines a new foundation. By 2030 the winners will be decided after the sale, by who can service a customer fastest and who owns the interface where that customer starts.
date: 2026-10-08
kind: essay
toc: true
companion: airline-retail-and-servicing-to-2030
---

*Researched and drafted with Claude; views are my own.*

It's 23:40 at a connecting hub. A passenger from Lagos watches her Toronto
connection disappear from the departures board. She doesn't open the
airline's app. She doesn't join the queue at the transfer desk. She tells her
phone: "Get me to Toronto by tomorrow night."

Whoever answers that sentence first (fast, correctly and within the rules)
wins her next booking. My industry has spent a decade rebuilding how airlines
sell, with offers and orders. Whether that work pays off will be decided
here, after the sale.

## Where offers and orders stand

Modern Airline Retailing, IATA's offers-and-orders programme, is usually told
as a story about selling. NDC replaces fares filed through the GDSs. Dynamic
offers replace fare buckets. ONE Order replaces the PNR, the e-ticket and the
EMD with one retail-style record.

Here is where it stands in October 2026. NDC is mainstream but
uneven: it carries about **21.5% of US agency transactions**, roughly flat
since early 2025 (ARC), while Lufthansa Group routes about half of its
indirect bookings through it. Native orders are live at a handful of
airlines: Riyadh Air was built on them, Finnair sells them on finnair.com,
and Pegasus runs them on Hitit's platform. Settlement with Orders, approved
in 2019, has no production programme beyond a cash-only release in the US.
In IATA and BCG's 2024 survey, only **49%** of airline representatives
expected their own airline to be legacy-free by 2030.

So 2030 will be a hybrid. That part isn't controversial. The interesting
question is what decides who wins inside the hybrid.

## The best servicing today runs on PNRs

Look at who is good at the moment of truth. United's automated standby
protects a disrupted customer's seat and lists them on up to three earlier
flights; more than 85% of its customers use the app on their travel day.
American's disruption hub lets people rebook themselves and get digital
vouchers on the spot. Air India reports that its assistant answers 97% of
queries without a human; Ryanair reports 80% containment across 120,000 chats
a day.

None of them runs on native orders.

That's the finding that matters. The control point is the servicing layer:
the APIs and automation that change, refund, re-accommodate and notify, fast.
Orders are the cleanest long-run foundation for that layer, because one
machine-readable record with item-level prices makes every change atomic. My
colleague Yılmaz Goralı, who leads airline retailing product development at
Turkish Technology, put it simply [to Future Travel Experience](https://www.futuretravelexperience.com/2026/05/inside-turkish-airlines-vision-for-contextual-ai-ready-retailing-rethinking-how-offers-are-created-priced-and-managed-end-to-end/) in
May: "The interaction does not end at purchase".

So the question is sequencing, not direction. The servicing layer doesn't
have to wait for the migration to finish. Build it now over PNRs, and move it
onto orders as they arrive.

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 424" role="img" aria-labelledby="e-servicing-title e-servicing-desc" font-size="13">
<title id="e-servicing-title">All three forces act on the servicing layer, not the record format</title>
<desc id="e-servicing-desc">Regulators, airline AI agents and customers' AI agents all act on a servicing layer of APIs and automation for change, refund, re-accommodation and notification. That layer runs on PNR, ticket and EMD systems today and migrates to ONE Order over time.</desc>
<defs><marker id="e-servicing-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fig-muted-fill"/></marker></defs>
<text class="fig-title" x="24" y="34" font-size="15">All three forces act on the servicing layer, not the record format</text>
<g class="fig-line" stroke-width="1.25">
<path d="M134 136V168H290V200" marker-end="url(#e-servicing-arrow)"/>
<path d="M380 136V200" marker-end="url(#e-servicing-arrow)"/>
<path d="M626 136V168H470V200" marker-end="url(#e-servicing-arrow)"/>
<path d="M300 272V296H205V320" marker-end="url(#e-servicing-arrow)"/>
<path d="M460 272V296H555V320" marker-end="url(#e-servicing-arrow)"/>
<path d="M340 362H420" stroke-dasharray="4 4" marker-end="url(#e-servicing-arrow)"/>
</g>
<rect class="fig-box" x="24" y="64" width="220" height="72" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="134" y="88" text-anchor="middle" font-weight="600">Regulators</text>
<text class="fig-soft" x="134" y="104" font-size="11.5" text-anchor="middle">Turn rights into deadlines:</text>
<text class="fig-soft" x="134" y="120" font-size="11.5" text-anchor="middle">EU reroute offer within 3 h</text>
<rect class="fig-box" x="270" y="64" width="220" height="72" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="380" y="88" text-anchor="middle" font-weight="600">Airline AI agents</text>
<text class="fig-soft" x="380" y="104" font-size="11.5" text-anchor="middle">Can resolve only what</text>
<text class="fig-soft" x="380" y="120" font-size="11.5" text-anchor="middle">servicing APIs allow</text>
<rect class="fig-box" x="516" y="64" width="220" height="72" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="626" y="88" text-anchor="middle" font-weight="600">Customers’ AI agents</text>
<text class="fig-soft" x="626" y="104" font-size="11.5" text-anchor="middle">Arrive at servicing endpoints,</text>
<text class="fig-soft" x="626" y="120" font-size="11.5" text-anchor="middle">not the airline homepage</text>
<rect class="fig-accent-box" x="210" y="200" width="340" height="72" rx="8" stroke-width="2"/>
<text class="fig-ink" x="380" y="224" text-anchor="middle" font-weight="600">Servicing layer (APIs and automation)</text>
<text class="fig-ink" x="380" y="240" font-size="11.5" text-anchor="middle">Change, refund, re-accommodate, notify:</text>
<text class="fig-ink" x="380" y="256" font-size="11.5" text-anchor="middle">the control point that decides outcomes</text>
<text class="fig-soft" x="380" y="300" font-size="11.5" text-anchor="middle">runs on</text>
<text class="fig-soft" x="380" y="352" font-size="11.5" text-anchor="middle">migrates to</text>
<rect class="fig-box" x="70" y="320" width="270" height="80" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="205" y="344" text-anchor="middle" font-weight="600">PNR, ticket and EMD</text>
<text class="fig-soft" x="205" y="362" font-size="11.5" text-anchor="middle">Today’s base; the best current results</text>
<text class="fig-soft" x="205" y="378" font-size="11.5" text-anchor="middle">run here: United, Air India, Ryanair</text>
<rect class="fig-box" x="420" y="320" width="270" height="80" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="555" y="344" text-anchor="middle" font-weight="600">ONE Order</text>
<text class="fig-soft" x="555" y="362" font-size="11.5" text-anchor="middle">Cleanest long-run foundation;</text>
<text class="fig-soft" x="555" y="378" font-size="11.5" text-anchor="middle">live at a handful of carriers</text>
</svg>
</div>
<figcaption>Regulators, airline AI and customers’ AI all meet at the servicing layer. The best results today run on PNR-based systems; orders are where that layer migrates.</figcaption>
</figure>

## Regulators are writing the SLA

The EU's revised passenger-rights regulation, adopted in July 2026, turns
servicing into a stopwatch. Airlines must offer rerouting within three hours,
or passengers can arrange their own and claim up to four times the fare.
Claim instructions are due within four days, and no app or account may be
required. The rules apply about a year after publication, so probably from
2027. The US already requires automatic card refunds within seven business
days, and India's new rules require card refunds within seven days.

These aren't customer-experience aspirations any more. They're service-level
agreements with fines attached. And a three-hour clock can only be met at
scale with event-driven automation over one authoritative record of what was
sold and what was delivered.

## Agents will arrive through servicing first

In the West, AI assistants are a discovery and servicing layer, not yet a
sales channel. None of the big general-purpose assistants sells a flight with
payment inside the chat. The two agents that do book flights end to end,
Meta's Muse and Mindtrip, run on intermediaries such as Duffel and Sabre. AI
shows up at 6% of booking-stage touchpoints but 29% of post-booking ones
(Skift Research), and Gartner is telling service teams to prepare for
"machine customers".

China is already somewhere else. Since April, Alibaba's Qwen App has let
users search, buy tickets, choose seats and check in for China Eastern
flights in a single conversation, with the airline as a direct partner.

So the passenger at 23:40 is the realistic first use case: an agent arriving
at your servicing endpoint, not your homepage, with a deadline and a customer
who is already annoyed. At Turkish Airlines we're working on it from both
ends. Turkish Technology is building the offer and order platform in-house,
keeping offer creation, pricing and order management under the airline's
control. And agents get structured tools rather than pages to scrape: an MCP
server since 2025 and, since September, WebMCP tools on turkishairlines.com
and ajet.com.

## Who owns the interface?

Two uncertainties decide where this lands: how fast airlines become
order-native, and who owns the customer interface.

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 474" role="img" aria-labelledby="e-futures-title e-futures-desc" font-size="12">
<title id="e-futures-title">Four futures to 2030; the 2026 evidence leans toward platforms</title>
<desc id="e-futures-desc">A two-by-two of how fast airlines become order-native (slow to fast) against who owns the customer interface (airline to platforms). Re-intermediation: agents buy through aggregators and GDS rails, where the 2026 evidence leans. Supplier to agents: standard orders let platform agents buy straight from airlines. Airline-led hybrid: most Western airlines today. Airline as retailer: IATA's vision of order-native servicing.</desc>
<defs><marker id="e-futures-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fig-muted-fill"/></marker></defs>
<text class="fig-title" x="24" y="30" font-size="15">Four futures to 2030; the 2026 evidence leans toward platforms</text>
<text class="fig-soft" x="24" y="50" font-size="11.5">By speed of order adoption and by who owns the customer interface</text>
<g class="fig-line" stroke-width="1.25"><path d="M96 412V80" marker-end="url(#e-futures-arrow)"/><path d="M112 428H732" marker-end="url(#e-futures-arrow)"/></g>
<text class="fig-ink" x="52" y="244" text-anchor="middle" font-weight="600" transform="rotate(-90 52 244)">Who owns the customer interface</text>
<text class="fig-soft" x="88" y="92" font-size="11.5" text-anchor="end">Platforms</text>
<text class="fig-soft" x="88" y="410" font-size="11.5" text-anchor="end">Airline</text>
<text class="fig-ink" x="420" y="452" text-anchor="middle" font-weight="600">How fast airlines become order-native</text>
<text class="fig-soft" x="112" y="452" font-size="11.5">Slow</text>
<text class="fig-soft" x="728" y="452" font-size="11.5" text-anchor="end">Fast</text>
<rect class="fig-accent-box" x="112" y="76" width="300" height="160" rx="8" stroke-width="2"/>
<text class="fig-ink" x="128" y="104" font-size="14" font-weight="600">Re-intermediation</text>
<text class="fig-ink" x="128" y="130">Agents buy through aggregators and GDS</text>
<text class="fig-ink" x="128" y="148">rails; airlines compete inside someone</text>
<text class="fig-ink" x="128" y="166">else’s ranking</text>
<text class="fig-soft" x="128" y="192" font-size="11.5">Signs: Muse books via Duffel; Bain’s 5%</text>
<text class="fig-ink" x="128" y="214" font-size="11.5" font-weight="600">Where the 2026 evidence leans</text>
<rect class="fig-box" x="428" y="76" width="300" height="160" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="444" y="104" font-size="14" font-weight="600">Supplier to agents</text>
<text class="fig-ink" x="444" y="130">Standard orders let platform agents buy</text>
<text class="fig-ink" x="444" y="148">straight from airlines; the platform</text>
<text class="fig-ink" x="444" y="166">keeps the customer</text>
<text class="fig-soft" x="444" y="192" font-size="11.5">Early sign: Qwen sells China Eastern</text>
<rect class="fig-tint" x="112" y="252" width="300" height="160" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="128" y="280" font-size="14" font-weight="600">Airline-led hybrid</text>
<text class="fig-ink" x="128" y="306">NDC through the GDS, AI as a service</text>
<text class="fig-ink" x="128" y="324">layer; airlines keep checkout and the</text>
<text class="fig-ink" x="128" y="342">customer relationship</text>
<text class="fig-ink" x="128" y="390" font-size="11.5" font-weight="600">Most Western airlines today</text>
<rect class="fig-box" x="428" y="252" width="300" height="160" rx="8" stroke-width="1.25"/>
<text class="fig-ink" x="444" y="280" font-size="14" font-weight="600">Airline as retailer</text>
<text class="fig-ink" x="444" y="306">IATA’s vision: order-native servicing;</text>
<text class="fig-ink" x="444" y="324">airline agents transact end to end with</text>
<text class="fig-ink" x="444" y="342">customers and their agents</text>
<text class="fig-soft" x="444" y="368" font-size="11.5">Needs: interline and settlement standards</text>
</svg>
</div>
<figcaption>Evidence: Bain’s tests of airline referrals from AI answers, Meta’s Muse booking through Duffel, and Alibaba’s Qwen App selling China Eastern flights.</figcaption>
</figure>

Most Western airlines sit bottom-left today: NDC through the GDS, AI as a
service layer, checkout still on our own sites. The 2026 evidence leans up.
In Bain's tests, LLM answers sent users to airline websites only about 5% of
the time. Muse books through Duffel. Qwen sells China Eastern inside its own
app.

Top-left is the future to fear: agents buying through aggregators and GDS
rails, airlines competing inside someone else's ranking. Top-right is the one
to build for: standard orders that let platform agents buy straight from
airlines. The platform still owns the moment, but the airline owns the
transaction and the servicing behind it.

## What I'd tell a transfer-hub airline

Hubs feel all of this first. When most of your international passengers
connect, every disruption cascades across banks of flights, partner airlines
and regulatory regimes. Five things I'd do:

1. **Automate recovery on today's stack.** Build a servicing API layer for
   change, refund, re-accommodation and notification that works over PNRs now
   and moves onto orders as they mature. Most hub transfers are on your own
   flights, so you can rebook them automatically before interline orders
   arrive.
2. **Bank the money that's already on the table.** Continuous pricing pays
   low single digits in production. That sounds small until you remember that
   1% of a US$24bn airline's revenue is about US$240m. Ancillaries, loyalty
   and payments carry the retail P&L while orders mature.
3. **Open write actions on your own channels first.** Rebooking, refunds and
   upgrades should work in your app, on WhatsApp and by voice before outside
   agents can trigger them, with consent, fraud controls and data-protection
   rules designed in.
4. **Be where agents already shop.** Your connecting offers need to be
   complete, competitively priced and well placed in the aggregator,
   metasearch and OTA feeds that assistants draw on, not only in your own
   connectors.
5. **Bring airline semantics to both standards tables.** Platforms shipped
   agent authorisation, checkout protocols and payment mandates in about two
   years, and none of them yet covers fare rules or links to NDC or ONE
   Order. Airlines that already sit in IATA's retailing groups are best
   placed to carry offers and orders into those protocols, so agents and
   orders end up speaking the same language.

Modern Airline Retailing started as a distribution project. Its payoff is in
servicing. By 2030, the airlines that win will be the ones that turn their
offers and orders into a servicing layer that can answer that passenger at
23:40, or her assistant, in seconds, within the rules, before someone else
does.
