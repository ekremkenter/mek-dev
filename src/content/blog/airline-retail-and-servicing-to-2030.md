---
title: Airline Retail and Servicing to 2030
description: Where offers and orders really stand, why servicing capability and interface ownership will decide the winners, how AI is reshaping support and distribution, and lessons for transfer-hub carriers.
date: 2026-10-08
kind: report
toc: true
companion: the-order-is-not-the-prize
---

*Researched and drafted with Claude; views are my own. Based on public sources as of October 8, 2026.*

## Executive summary

Around 2030, airline retail and servicing will run on a hybrid of offers and orders, not IATA's 2022 vision of “100% Offers and Orders”. Prices will increasingly be computed at request time, and NDC will carry a growing share of indirect sales. ONE Order, which replaces the PNR, e-ticket and EMD, will be the master record only at a first wave of carriers, while legacy translators keep producing tickets for GDSs, interline partners and settlement.

As of October 2026, NDC is mainstream but uneven: it carries 21.5% of US agency transactions and about half of Lufthansa Group's indirect bookings. Native orders run at only a handful of airlines, mostly on vendor confirmation, and order-based settlement exists only in ARC's cash-only US release. In a 2024 survey, only 49% of airline representatives expected their own airline to be legacy-free by 2030.

The decisive factor is not the record format. Two things matter more: servicing capability, meaning the APIs and automation that change, refund, re-accommodate and notify, and who owns the customer interface.

Today's best disruption recovery and AI automation run on PNR-based systems, at United, American, Air India and Ryanair. ONE Order is the cleanest long-run foundation for that servicing layer: a migration path, not a prerequisite.

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 424" role="img" aria-labelledby="r-servicing-title r-servicing-desc" font-size="13">
<title id="r-servicing-title">All three forces act on the servicing layer, not the record format</title>
<desc id="r-servicing-desc">Regulators, airline AI agents and customers' AI agents all act on a servicing layer of APIs and automation for change, refund, re-accommodation and notification. That layer runs on PNR, ticket and EMD systems today and migrates to ONE Order over time.</desc>
<defs><marker id="r-servicing-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fig-muted-fill"/></marker></defs>
<text class="fig-title" x="24" y="34" font-size="15">All three forces act on the servicing layer, not the record format</text>
<g class="fig-line" stroke-width="1.25">
<path d="M134 136V168H290V200" marker-end="url(#r-servicing-arrow)"/>
<path d="M380 136V200" marker-end="url(#r-servicing-arrow)"/>
<path d="M626 136V168H470V200" marker-end="url(#r-servicing-arrow)"/>
<path d="M300 272V296H205V320" marker-end="url(#r-servicing-arrow)"/>
<path d="M460 272V296H555V320" marker-end="url(#r-servicing-arrow)"/>
<path d="M340 362H420" stroke-dasharray="4 4" marker-end="url(#r-servicing-arrow)"/>
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
<figcaption>Figure 1. The servicing layer as the control point: a framework drawn from the evidence in this report.</figcaption>
</figure>

Regulators, airline AI and customers' AI all act on the servicing layer. The best current results run on PNR-based systems; orders become the cleaner foundation as partners and standards arrive.

Regulators are turning passenger rights into deadlines. The revised EU 261, adopted in July 2026, will require a rerouting offer within three hours and claim instructions within four days. It applies about a year after publication, so probably from 2027, and for non-EU carriers only to departures from EU airports.

AI already resolves most routine chatbot queries at leaders such as Air India (97% without a human) and Ryanair (80% containment), on self-reported figures with differing definitions. Liability rulings, the EU AI Act, customer trust and, for US carriers, a live-agent mandate will keep a skilled human tier in place.

In the West, AI assistants are a fast-growing discovery and servicing layer, not yet a sales channel. None of the assistants reviewed from OpenAI, Google, Microsoft, Anthropic, Perplexity or Amazon sells flights with payment inside the chat. The two Western agents that do book flights, Meta's Muse and Mindtrip, run on intermediaries such as Duffel and Sabre.

China is further ahead. Since April 2026, Alibaba's Qwen App has let users search, buy tickets and check in for China Eastern flights in one chat, with the airline as a direct partner. Who owns the interface where intent forms, whether a platform, an OTA or the airline, will matter as much as the order behind it.

Transfer-hub carriers feel all of this first. The final section draws lessons for hubs where most international passengers connect, using Turkish Airlines' public disclosures as a worked example: 59% of its international passengers were international-to-international transfers in 1H'26.

For such carriers, the largest near-term levers are pricing, ancillaries and loyalty, where 1% of revenue for a US$24bn airline is about US$240m, and automated disruption recovery on today's systems. Agent channels should move from lookups to governed transactions on the airline's own channels first, then open to outside agents once usage data, fraud controls and data-protection safeguards exist.

## NDC is mainstream, but native orders remain a single-digit club

IATA defines MAR as a move to **“100% Offers and Orders”**. It rests on four components: NDC for offers, Dynamic Offers (continuous pricing plus dynamic bundling), ONE Order, and Settlement with Orders. IATA's programme page sets no percentage targets or hard deadlines ([IATA](https://www.iata.org/en/programs/airline-distribution/retailing/)).

ONE Order is the structural break. It merges reservation, ticketing and delivery into one retail-style order, and it phases out the **PNR, e-ticket and EMD** ([IATA](https://www.iata.org/en/programs/airline-distribution/retailing/one-order/)).

The 2030 date attached to the vision has quietly softened. In 2022 IATA aimed to have standards and capabilities **ready by 2030** for airlines that adopt them ([PhocusWire](https://www.phocuswire.com/iata-ndc-one-order-airline-retailing)). At the November 2025 World Passenger Symposium in Istanbul, IATA's CFO said the first standards, the reference architecture and the first implementations were ready.

The priority, she said, was now moving from pilots to full-scale adoption ([IATA](https://www.iata.org/en/pressroom/2025-speeches/2025-11-05-01/)). IATA's August 2026 Vision to Implementation article names no 2030 milestone at all ([IATA](https://www.iata.org/en/publications/newsletters/airline-retailing-hub/vision-implementation-modern-airline-retailing/)). “100% by 2030” now survives mainly as vendor shorthand; read closely, IATA promised readiness by 2030, not universal adoption.

The offer side is mainstream but uneven. In ARC's US agency data, NDC's share roughly doubled during 2023 and has since flattened just above 20%, with 1,221 agencies using NDC by August 2026 ([ARC](https://www2.arccorp.com/articles-trends/the-latest/unlocking-modern-airline-distribution/); [ARC](https://www2.arccorp.com/about-us/newsroom/2026-news-releases/march-2026-ticket-sales/); [Travel Extra](https://www.travelextra.ie/us-travel-agency-air-ticket-sales-hit-august-record/)).

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 290" role="img" aria-labelledby="r-ndc-title r-ndc-desc" font-size="12">
<title id="r-ndc-title">US agency NDC share rose fast in 2023, then flattened near 21%</title>
<desc id="r-ndc-desc">NDC share of US travel agency transactions settled through ARC: 8% in January 2023, about 17% in January 2024, 20.3% in March 2025, 20.8% in March 2026 and 21.5% in August 2026.</desc>
<text class="fig-title" x="24" y="30" font-size="15">US agency NDC share rose fast in 2023, then flattened near 21%</text>
<text class="fig-soft" x="24" y="52" font-size="12">NDC share of US travel agency transactions settled through ARC, scale 0 to 25%</text>
<line class="fig-line" x1="70" x2="690" y1="250" y2="250" stroke-width="1"/>
<text class="fig-soft" x="70" y="270" font-size="11.5" text-anchor="middle">Jan 2023</text>
<text class="fig-soft" x="243" y="270" font-size="11.5" text-anchor="middle">Jan 2024</text>
<text class="fig-soft" x="444.9" y="270" font-size="11.5" text-anchor="middle">Mar 2025</text>
<text class="fig-soft" x="617.9" y="270" font-size="11.5" text-anchor="middle">Mar 2026</text>
<text class="fig-soft" x="690" y="270" font-size="11.5" text-anchor="middle">Aug 2026</text>
<path class="fig-accent-line" d="M70.0 195.6 L243.0 134.4 L444.9 112.0 L617.9 108.6 L690.0 103.8" stroke-width="2"/>
<circle class="fig-accent-fill" cx="70.0" cy="195.6" r="4"><title>Jan 2023: 8% of transactions</title></circle>
<text class="fig-ink" x="70" y="183.6" font-size="12.5" text-anchor="middle" font-weight="600">8%</text>
<circle class="fig-accent-fill" cx="243.0" cy="134.4" r="4"><title>Jan 2024: about 17% of transactions</title></circle>
<text class="fig-ink" x="243" y="122.4" font-size="12.5" text-anchor="middle" font-weight="600">~17%</text>
<circle class="fig-accent-fill" cx="444.9" cy="112.0" r="4"><title>Mar 2025: 20.3% of transactions</title></circle>
<text class="fig-ink" x="444.9" y="100" font-size="12.5" text-anchor="middle" font-weight="600">20.3%</text>
<circle class="fig-accent-fill" cx="617.9" cy="108.6" r="4"><title>Mar 2026: 20.8% of transactions</title></circle>
<text class="fig-ink" x="617.9" y="96.6" font-size="12.5" text-anchor="middle" font-weight="600">20.8%</text>
<circle class="fig-accent-fill" cx="690.0" cy="103.8" r="4"><title>Aug 2026: 21.5% of transactions</title></circle>
<text class="fig-ink" x="690" y="91.8" font-size="12.5" text-anchor="middle" font-weight="600">21.5%</text>
</svg>
</div>
<figcaption>Figure 2. Sources: <a href="https://www2.arccorp.com/articles-trends/the-latest/unlocking-modern-airline-distribution/">ARC</a>; <a href="https://www2.arccorp.com/about-us/newsroom/2026-news-releases/march-2026-ticket-sales/">ARC</a>; <a href="https://www.travelextra.ie/us-travel-agency-air-ticket-sales-hit-august-record/">Travel Extra</a>. The January 2024 value is approximate.</figcaption>
</figure>

The US is the laggard market, so this chart understates adoption elsewhere. The most aggressive carriers sit far higher. **Lufthansa Group routes about 50% of indirect bookings through NDC**, and 77.5% of all its bookings now sit outside EDIFACT ([Travel Weekly AU](https://travelweekly.com.au/lufthansa-closes-in-on-all-ndc-future-as-corporate-adoption-accelerates/)). NDC is only about **5% of Sabre's volumes** ([Motley Fool](https://www.fool.com/earnings/call-transcripts/2026/08/13/sabre-sabr-q2-2026-earnings-call-transcript/)).

These measures use different denominators and cannot be blended into one global share, and IATA does not publish one. The next US step-change depends on Delta. It plans an NDC launch with ARC settlement by the end of 2026, but defers its unused-ticket solution to Q2 2027 ([PhocusWire](https://www.phocuswire.com/news/distribution/delta-plans-ndc-solution-launch-by-year-end); [BTN](https://www.businesstravelnews.com/Distribution/Delta-Details-Initial-NDC-Capabilities-Enhanced-Features-for-Agencies)).

The order side is far earlier. IATA's survey of IT providers counted **48 proofs of concept or pilots in 2025, 20 of them production pilots**, up from 39 and 10 in 2024, against only seven signed offer-and-order airline contracts ([IATA](https://www.iata.org/contentassets/06c4cf2ba09649008de86be7898af8fa/presentations-2025/beyond-the-slide-deck_sebastien-touraine.pdf)). Those counts are self-reported airline–vendor pairs, not airlines running on orders.

A 2024 BCG/IATA survey of more than 150 airline representatives found that **none of the airlines surveyed had fully implemented an order management system**. Forty percent had a defined orders strategy, and fewer than 10% were testing order-based interline ([BCG](https://www.bcg.com/publications/2024/can-airlines-accelerate-transition-to-modern-retailing); [IATA/BCG](https://www.iata.org/contentassets/06c4cf2ba09649008de86be7898af8fa/14.45-14.55_alberto-guerrini_exclusive-insights-from-a-survey-of-over-150-airline-representatives-on-the-roadmap-to-100-offers-and-orders_approved.pdf)).

Figures also drift as they travel. FLYR's May 2026 release attributes to IATA the claim that 25% of *airlines* expect full offer-and-order implementation by 2027–28 ([GlobeNewswire](https://www.globenewswire.com/news-release/2026/05/20/3298155/0/en/FLYR-Powers-Riyadh-Air-s-Debut-as-World-s-First-Full-Service-Airline-Built-for-Modern-Retailing.html)). IATA's own deck uses the 25% figure for IT providers. The public record of airlines actually running orders is short.

| Carrier | Order platform | Status in October 2026 | Source |
| --- | --- | --- | --- |
| Riyadh Air | FLYR native Offer & Order, with a “Legacy Translator” to GDSs and partners | Live airline-wide; public sales from 19 May 2026 | [GlobeNewswire](https://www.globenewswire.com/news-release/2026/05/20/3298155/0/en/FLYR-Powers-Riyadh-Air-s-Debut-as-World-s-First-Full-Service-Airline-Built-for-Modern-Retailing.html); [CAPA](https://centreforaviation.com/news/riyadh-air-opens-public-ticket-sales-for-riyadh-london-heathrow-service-1359867) |
| Finnair | Amadeus Nevio | Native orders on finnair.com since May 2025; agency pilot since September 2026; order accounting selected July 2026 | [BTE](https://www.businesstravelexecutive.com/news/finnair-goes-live-with-first-native-order/); [BTN](https://www.businesstravelnews.com/Distribution/Finnair-Expands-Offers-and-Orders-to-Pilot-Agency-Platform); [Lufthansa Systems](https://cdn.lhsystems.com/2026-07/Press_release_Finnair_SIRAX_ONE_Order.pdf) |
| Pegasus | Hitit Oxygen | Live, per vendor confirmation (June 2025) | [T2RL](https://t2rl.net/insight/firstview) |
| Saudia | Amadeus Nevio, bridged to Altéa | Orders “operationalised” per Amadeus (July 2025); scope undisclosed | [Amadeus](https://amadeus.com/en/newsroom/press-releases/saudia-orders-nevio-accelerate-guest-centric-travel) |
| Lufthansa Group (nine airlines) | Amadeus Nevio, including Delivery Management | Selected January 2026; customer-facing Order ID planned; no go-live dates | [Skift](https://skift.com/2026/01/07/amadeus-nevio-lufthansa-deal-airline-retail/) |
| Air France-KLM; British Airways | Amadeus Nevio | Announced February 2025 and April 2024; no go-live dates | [Air France-KLM](https://www.airfranceklm.com/en/newsroom/air-france-klm-partners-amadeus-accelerate-modern-airline-retailing-transformation); [Amadeus](https://amadeus.com/en/newsroom/press-releases/amadeus-partners-british-airways-journey-towards-enhanced-retailing-capabilities) |
| American, United, Emirates, Qatar, Etihad, Singapore Airlines; Delta | NDC programmes | NDC live (Delta's launches by end-2026); no public order-system go-live | [IATA ARM registry](https://retailing.iata.org/armi/registry/); [PhocusWire](https://www.phocuswire.com/news/distribution/delta-plans-ndc-solution-launch-by-year-end) |

The back office lags furthest. **Settlement with Orders was approved in October 2019, yet IATA still invites airlines to join its pilots** ([IATA](https://www.iata.org/en/programs/airline-distribution/retailing/settlement-orders-swo/)). ARC launched orders-based reporting and settlement on 27 January 2026, but its first release handles only orders paid in cash ([ARC](https://www2.arccorp.com/about-us/newsroom/2026-news-releases/arc-launches-orders-based-reporting-and-settlement-system-to-advance-airline-retailing/)).

Order accounting had fewer than three production implementations in 2024 ([IATA](https://www.iata.org/contentassets/06c4cf2ba09649008de86be7898af8fa/09.09.10_sebastien-touraine_what-is-the-state-of-it-provider-readiness_approved.pdf)), and at the 2025 symposium it was still presented mostly as proofs of concept ([IATA](https://www.iata.org/contentassets/458793104bcc4f73b1433d53b07eb9e1/wfswps2025_program.pdf)). IATA's documentation for delivery with orders is due only at the end of 2026 ([IATA](https://www.iata.org/contentassets/06c4cf2ba09649008de86be7898af8fa/presentations-2025/bringing-it-to-life_0_iata_delivery-intro-for-youn.pdf)).

Even Riyadh Air, the cleanest native case, has to translate its orders for GDSs and third parties. The end state therefore depends on partners migrating, not on any single airline's ambition.

The vendor market favours gradual migration over rip-and-replace. Amadeus is carrying its PSS incumbency into the order era: Lufthansa Group, Air France-KLM, British Airways, Finnair and Saudia have all chosen Nevio, and a quarter of Altéa business is now involved in the programme. Amadeus management expects industry change to “take years” ([roic.ai](https://www.roic.ai/quote/AMADF/transcripts)).

In May 2026, Sabre's chief executive accused Amadeus of using a dominant position in passenger service systems to make it hard for airlines to choose other offer and order providers ([Skift](https://skift.com/2026/05/07/sabre-claims-amadeus-blocks-competition-in-airline-technology/)). Challengers win where there is no legacy to bridge, as with FLYR at Riyadh Air, or where a regional vendor is strong, as with Hitit at Pegasus.

Airline confidence has slipped in parallel. In 2024, **49% expected their own airline to be legacy-free by 2030, down from 63% in 2022**, and 40% expected it only after 2030. The two survey waves are not shown to use matching samples, so the drop is indicative rather than precise. Views of support are siloed: 93% of commercial respondents named commercial functions among the most supportive, but only 46% named IT and 44% distribution, and each function rated itself highest ([IATA/BCG](https://www.iata.org/contentassets/06c4cf2ba09649008de86be7898af8fa/14.45-14.55_alberto-guerrini_exclusive-insights-from-a-survey-of-over-150-airline-representatives-on-the-roadmap-to-100-offers-and-orders_approved.pdf)).

Roland Berger calls 2026–2028 the test of whether pilots scale, and expects full implementation to take “the next decade” ([Roland Berger](https://www.rolandberger.com/en/Insights/Publications/Airline-order-and-offer-management.html)).

## Retail value arrives through pricing, bundles and loyalty before orders

Airlines do not have to wait for orders to start earning retail money. Most of the value realised so far comes from three levers that work on today's systems: computing prices at request time, unbundling the product into a richer catalogue, and turning loyalty into a financial-services business. Each lever has also hit limits, some political and some about channels, and those limits will shape the 2030 shopping experience as much as the standards do.

### Continuous pricing pays low single digits, and personal fares are off the table

Pricing is moving from choosing among pre-filed fares tied to booking classes to computing a price for each request. ATPCO describes three steps along that path: *optimized* pricing selects a pre-distributed price, *adjusted* pricing moves it up or down, and *continuous* pricing determines it automatically ([ATPCO](https://blog.atpco.net/sites/atpco-public/files/all_pdfs/simplified-model-dynamic-pricing.pdf)).

ATPCO still positions filed fares as the global foundation with dynamic offers layered on top. Its stated goal was for **80% of airline offers to be dynamically created by 2026**, and no source shows whether that happened ([AltexSoft](https://www.altexsoft.com/blog/atpco/)).

OAG counts **about 260 carriers using some form of dynamic pricing**, around 20% more than two years earlier, and reports **1–3% revenue gains** in production deployments at Lufthansa Group and Air Canada ([OAG](https://www.oag.com/blog/competitive-fare-intelligence)). Sabre claims up to 3.5% for its classless Continuous Revenue Optimiser, which Riyadh Air adopted first ([TravelDailyNews](https://www.traveldailynews.com/technology/sabre-launches-ai-powered-classless-revenue-engine-to-boost-airline-pricing-efficiency/)).

Fetcherr's claim of up to 9% comes from testing and has not been independently verified ([One Mile at a Time](https://onemileatatime.com/?p=344931)). The credible production range is therefore **low single digits**, small as a percentage but large in money: 1% of a US$24bn airline's revenue is about US$240m.

Delta's experience shows where the political boundary sits. In July 2025, President Glen Hauenstein told investors that about **3% of domestic fares** were priced with Fetcherr's AI, with a target of 20% by year-end ([Constellation Research](https://www.constellationr.com/insights/news/delta-starting-scale-its-ai-driven-dynamic-pricing-system)). The Atlanta Journal-Constitution described the same test as covering about **1% of Delta's domestic schedule** ([AJC](https://ajc-ajc-prod.cdn.arcpublishing.com/business/2025/08/delta-counters-ai-pricing-backlash-insists-it-hasnt-ever-used-personal-data)).

The two figures probably measure different bases, and public data cannot reconcile them. Hauenstein also described a price available “on that flight, on that time, to you, the individual” ([TravelPulse](https://www.travelpulse.com/news/airlines-airports/delta-air-lines-to-expand-use-of-ai-in-pricing-airfare)).

Senators wrote to Delta in July 2025, and 22 House Democrats followed in November 2025, asking what data fed the prices ([Sen. Warner](https://www.warner.senate.gov/public/index.cfm/2025/7/warner-colleagues-demand-answers-from-delta-on-use-of-ai-to-set-individualized-ticket-prices); [House letter](https://chuygarcia.house.gov/sites/evo-subsites/chuygarcia.house.gov/files/evo-media-document/letter-to-delta-re-ai-pricing-11.5.25.pdf)). In December 2025 a bipartisan group, Republican Josh Hawley among them, asked the FTC to pursue surveillance pricing ([Senators' letter](https://www.warner.senate.gov/public/_cache/files/f/2/f2a2d4c9-fcd8-4657-a975-bbb44f355352/247826215C0FDEB472CAD25C116BE9F9C7FA4EB79AE462CDD70D6225A30442F0.251217.ferguson-warner-hawley-blumenthal-gallego-re-surveilliance-pricing.final.sign.pdf)). In August 2026, House Energy & Commerce Ranking Member Pallone questioned 25 companies, including on how loyalty data feeds prices ([Pallone letter](https://democrats-energycommerce.house.gov/sites/evo-subsites/democrats-energycommerce.house.gov/files/evo-media-document/2026.8.11-letter-re-surveillance-pricing.pdf)).

Delta now describes the tool as a pilot in “test markets” that uses route-level data and no personal data, and it gives no coverage share ([Delta](https://news.delta.com/delta-responds-rep-pallone-misinformation-consumer-surveillance-pricing)).

The regulatory map points the same way. New York has enforced an algorithmic-pricing disclosure law since 10 November 2025 ([Jones Day](https://www.jonesday.com/en/insights/2025/11/new-yorks-novel-algorithmic-pricing-disclosure-law-takes-effect)), although the Airline Deregulation Act may preempt state laws for airlines ([49 U.S.C. §41713](https://www.law.cornell.edu/uscode/text/49/41713)). That preemption point is a legal inference, since no court has ruled on it.

In the EU, the Consumer Rights Directive's duty to disclose personalised prices appears not to reach air passenger contracts, which the Directive largely excludes ([Consumer Rights Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02011L0083-20220528)). That reading still needs confirmation from EU counsel. The binding limits today are therefore the fare-display and non-discrimination rules of [Regulation 1008/2008](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008R1008) and GDPR's restriction on solely automated decisions ([GDPR Art. 22](https://gdpr-info.eu/art-22-gdpr/)).

The main unknown is the Digital Fairness Act, whose proposal is expected in late 2026. In its consultation, at least 77% of respondents who supported action backed a general restriction on personalised pricing based on personal data ([Slaughter and May](https://thelens.slaughterandmay.com/post/102m222/digital-fairness-act-european-commission-publishes-responses-to-consultation)).

The position airlines can now defend is clear. Prices are dynamic at route and market level, and analysts review them. Base fares do not use personal data, and personalisation happens through *what* is offered (bundles, ancillaries, member benefits), not through an individual base fare.

Even that line is not settled. The concern regulators have raised is pricing on personal data, whichever price element it feeds, so offer-level personalisation needs the same record of which data feeds which price.

### Ancillaries and loyalty now carry the retail P&L

Unbundling has been the most reliable revenue lever. IdeaWorks puts global ancillary revenue at a record **US$148.4bn in 2024** ([IdeaWorks/CarTrawler](https://ideaworkscompany.com/airline-ancillary-revenue-skyrockets-to-148-4-billion-worldwide-for-2024-press-release/)). It projects **US$157bn in 2025, or 15.7% of airline revenue**, up from 9.1% in 2016 ([IdeaWorks](https://ideaworkscompany.com/mission-possible-airlines-earn-record-ancillary-revenue-while-consumers-enjoy-lower-fares-press-release/)).

In IdeaWorks' 2026 yearbook of 63 airlines, 30 carriers each earned at least US$1bn in 2025. For carriers comparable year on year, ancillaries grew **13.4%, against 7.2% for total revenue** ([IdeaWorks](https://ideaworkscompany.com/2026-seatmaps-com-yearbook-of-ancillary-revenue-by-ideaworkscompany-report/)). Even Southwest has now unbundled, charging for checked bags from May 2025 and assigning seats from January 2026 ([Wikipedia](https://en.wikipedia.org/wiki/Southwest_Airlines)).

NDC adds attach rate: on Accelya's platform, **up to 31% of NDC bookings carried paid ancillaries**, worth about US$12 per ticket ([Accelya](https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/)).

The largest retail line, though, is financial. The four big US carriers earned **US$27.9bn from frequent-flyer programmes in 2025** ([IdeaWorks](https://ideaworkscompany.com/2026-seatmaps-com-yearbook-of-ancillary-revenue-by-ideaworkscompany-report/)). Delta alone received about US$8bn from American Express in 2025, around 10% of its revenue ([Fortune](https://dc.fortune.com/2026/04/03/how-did-delta-ceo-ed-bastian-build-partnership-with-american-express-10-percent-airlines-revenue)).

Delta expects **about US$9bn in 2026** ([Payments Dive](https://www.paymentsdive.com/news/amex-delta-card-spending-soars/825180/)), which makes the co-brand card arguably the most successful airline-as-retailer product so far. Loyalty membership is also the most defensible key for personalisation because members opt in. Even so, the Pallone letter shows that loyalty-linked pricing is now under scrutiny as well.

Consultancies put the full retailing prize at **about US$45bn a year by 2030**, or 2–3% of revenue and roughly 15% of EBITDA for a typical carrier ([McKinsey](https://www.mckinsey.com/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity)). Accenture estimates 3–6% of revenue for a full offer-order-settle-deliver stack, with early adopters seeing 1.5–2% ([Accenture](https://www.accenture.com/en/insights/travel/retail-led-future-airlines-sky-limit)).

The headline estimate has barely moved since McKinsey's 2019 figure of US$40bn ([McKinsey](https://www.mckinsey.com/industries/travel/our-insights/airline-retailing-the-value-at-stake)), while confidence in adoption has fallen. Value capture is running behind the roadmap, and what has been captured comes mainly from pricing and ancillaries rather than from order-based transformation. No independently audited results have been published from any order go-live.

### Distribution has settled on NDC through the GDS, enforced by price gaps

The fight between NDC and GDSs has largely ended in a truce: airline-built NDC offers flowing *through* GDSs. Lufthansa Group's distribution cost charge, effective 5 May 2026, makes the economics explicit:

| Booking route | Lufthansa Group charge per ticket |
| --- | --- |
| EDIFACT via Amadeus | €19 |
| EDIFACT via Sabre | €22.50 |
| EDIFACT via Travelport | €23 |
| NDC via a GDS | €8 |
| Own channels and bilateral NDC aggregators | Exempt |

Source: [Lufthansa Group DCC Guideline](https://business.lufthansagroup.com/content/dam/b2b/experts/files/LHG_DCC_Guideline_05MAY26.pdf).

Air France-KLM scheduled a rise in its GDS surcharge for business-travel agencies to **€24 per direction on 1 July 2026**. Half of its tickets at French agencies were already issued on NDC by October 2025, ranging from 20–30% at leisure agencies to 95% at online agencies, with business agencies at 26% ([L'Echo touristique](https://www.lechotouristique.com/article/exclusif-air-france-modifie-son-calendrier-2026-des-surcharges-gds)).

Corporate travel, the laggard, is now the fastest-growing NDC segment. On Accelya's platform, corporate NDC bookings rose 168% and NDC through GDSs 162% in Q4 2025 ([Accelya](https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/)).

The cautionary case remains American Airlines. In 2023–24 it pulled about 40% of fares from EDIFACT and tied mileage earning to channel, then reversed course after its CEO conceded the approach “has driven customers away from American”. By management's account the episode cost roughly US$200m in a single quarter, and its chief commercial officer departed ([Travolution](https://www.travolution.com/news/travel-sectors/air/american-airlines-to-revamp-ndc-booking-strategy/); [Travel Weekly UK](https://www.travelweekly.co.uk/news/air/analysis-american-airlines-backtracks-on-speed-of-shift-to-ndc)).

The lesson that has stuck across the industry is to use NDC-only content and cheaper fares as the carrot and surcharges as the stick, and never to move faster than agencies can service. Singapore Airlines' NDC fares, for example, average about 7% below EDIFACT ([BTN](https://www.businesstravelnews.com/BTN-Next/The-Conversation/2026-NDC-Updates)).

A new cost line is emerging underneath all of this: shopping volume. Sabre estimates look-to-book ratios rose from about 10:1 in the 1990s to 1,000:1 or more by the end of 2025 ([Sabre via Nasdaq](https://www.nasdaq.com/press-release/content-complexity-connected-retailing-7-transformations-redefining-travel-2026-led)). OAG projects **200,000:1 once agents shop on travellers' behalf** ([OAG](https://www.oag.com/blog/competitive-fare-intelligence)).

IATA's Look-to-Book white paper already proposes new Offer-to-Order and CPU-to-Order metrics, because generative and agentic AI inflate search ([IATA](https://www.iata.org/en/publications/newsletters/airline-retailing-hub/look-to-book-white-paper/)). Continuous pricing makes every offer computed rather than looked up, and AI agents could multiply the number of requests. Together, these could make cost per offer a first-order retail KPI by 2030, although the 200,000:1 figure is a projection from a vendor that sells fare intelligence.

## Servicing capability, not the record format, decides outcomes

The strongest case for orders sits after the sale. Under IATA Resolution 797, the Offer Responsible Airline owns a single order, and suppliers bill only once a service has been delivered ([IATA Res. 797](https://www.iata.org/contentassets/72cbd60393ff42b5975d90ce9e049a7d/oneorder-resolution-797.pdf)). Servicing then becomes a small set of standard transactions: retrieve, reshop, change, and an order-change notification when the airline itself alters something.

A refund becomes an item-level price difference, recorded as a **negative payment on the order** ([IATA ARM PAYREF](https://retailing.iata.org/armi/docs/PAYREF/)). Partial obligations, such as refunding an unprovided seat, wi-fi session or bag fee, or one unflown leg, become native operations instead of coupon and EMD reconciliations. That fits closely with where regulators are heading.

Orders are not the only route there. The industry's best current servicing results, described below, run on PNR and ticket systems with mature APIs, which is why servicing capability matters more than the record beneath it.

### Servicing was NDC's weakest link

The NDC rollout showed how far servicing can trail shopping. In 2022 an NDC file at Amex GBT took **about 67% more processing time**, the equivalent of 83 full-time staff, mostly because changes required calling the airline ([L'Echo touristique](https://www.lechotouristique.com/article/un-dossier-ndc-requiert-67-de-temps-de-traitement-supplementaire-yorick-charveriat-amex-gbt)). In 2023 ASTA told the US DOT that tickets could not be exchanged between legacy and NDC channels and that credits did not carry across ([ASTA](https://www.asta.org/docs/default-source/testimony-filings/2023/asta-to-u.s.-department-of-transportation-re-american-airlines-ndc-implementation.pdf)).

In GBTA's 2024 poll, 60% of respondents had not budgeted for NDC servicing costs ([GBTA](https://gbta.org/jlnt)). As late as August 2025, Singapore Airlines' technology bulletin still listed involuntary exchanges and partially flown tickets as “in development” at Amadeus, Sabre and Travelport ([SIA TB070/25](https://agent360.singaporeair.com/content/dam/agent360/web-assets/pdf/local/nz/ndc-support/TB070-25_NDC_Technology_Partner_Updates_AUG25.pdf)).

Most of the fixes have come from airlines. In 2023, Accelya and American Airlines enabled exchanges of EDIFACT tickets into NDC, and Spotnana offered cross-exchange in both directions ([Accelya](https://w3.accelya.com/resources/press-releases/accelya-and-american-airlines-look-to-boost-ndc-adoption-with-breakthrough-ticket-exchange-solution); [BTN Europe](https://www.businesstravelnewseurope.com/TMC-Distribution/Spotnana-enables-crossexchange-of-EDIFACT-and-NDC-tickets)). Qantas began applying schedule-change waivers automatically in July 2025 ([Qantas](https://agencyconnect.qantas.com/en-ca/news/jul-2025/update-to-schedule-change-process)).

Lufthansa's NDC Hybrid Servicing, launched in November 2025, automated rebooking and refunds and cut complex cases **from up to 15 minutes of processing to almost zero** ([touristik aktuell](https://www.touristik-aktuell.de/nachrichten/verkehr/news/datum/2025/11/06/lufthansa-fuehrt-ndc-hybrid-servicing-ein/)). As a result, an agency's servicing experience now depends on each airline's API maturity rather than on the GDS.

### What orders simplify, and what stays hard

Orders move complexity rather than remove it. IATA's ONE Order transition study expected simpler self-service, automated recovery from involuntary changes and the end of proration. It also warned of a long hybrid period, with orders mirrored into PNRs, tickets and EMDs until departure control and revenue accounting can read orders.

Rollout would go channel by channel: web and mobile first, then airport and contact centre, NDC next, and GDS last ([IATA transition study](https://www.iata.org/contentassets/72cbd60393ff42b5975d90ce9e049a7d/one-order-transition-study.pdf)). Until then, servicing may get harder before it gets easier, because every change has to stay consistent across two record types.

Interline is the hardest case. In IATA's retailer/supplier model (SRSIA), the settlement value is agreed at the time of sale, so there is no proration. Disruption responsibilities, meaning who re-accommodates and who pays, are left to bilateral annexes ([IATA](https://www.iata.org/contentassets/23426d4b09a0446dbe831601869098a1/future-of-interline-overview_website_mar20.pdf)).

In June 2026 IATA's Interline & Partnerships Working Group, its Codeshare Task Force and its Order Accounting Working Group were all still developing standards, and none had set implementation dates ([IATA PSC](https://www.iata.org/contentassets/c33c192da39a42fcac34cb5ac81fd2ea/psc-boards-and-groups.pdf)). Roland Berger expects the first multi-carrier interline orders in 2026–2028 ([Roland Berger](https://www.rolandberger.com/en/Insights/Publications/Airline-order-and-offer-management.html)). Lufthansa is expanding NDC interline bookings with United, Air Canada, Singapore Airlines and Qantas, but at the offer level only ([Travel Weekly AU](https://travelweekly.com.au/lufthansa-closes-in-on-all-ndc-future-as-corporate-adoption-accelerates/)).

The quickest wins have come inside airline groups: in a 2020 pilot, Vueling staff could rebook disrupted passengers onto British Airways **in under three minutes** ([IATA pilots](https://www.iata.org/contentassets/72cbd60393ff42b5975d90ce9e049a7d/fulfilment-with-orders-one-order-pilots_final.pdf)). Multi-carrier journeys will be the weakest part of order-based servicing through 2030, and they are also the journeys most exposed when operations break down.

### Regulators turn passenger rights into countdown clocks

Regulation is turning servicing into time-boxed obligations that work like service-level agreements. The largest change is in the EU. The revised Regulation 261/2004 was adopted on 13 July 2026, after Parliament approved it by 646 votes to 12 ([Council](https://www.consilium.europa.eu/en/policies/consumer-protection/timeline-consumer-protection/); [European Parliament](https://data.europarl.europa.eu/distribution/doc/TA-10-2026-0238_en.pdf)).

Sources disagree on the lowest compensation band, and the conflict is unresolved. Most, including Clyde & Co and the Spanish consumer ministry, report bands of **€250 / €400 / €600** ([Clyde & Co](https://www.clydeco.com/en/insights/2026/06/the-eu-makes-progress-on-reforming-air-passenger-r); [Spanish CEC](https://portal-cec.consumo.gob.es/sites/default/files/documentos/NI_PASAJEROS_AEREOS_18_06_2026_EN.pdf)). CAPA describes the approved range as **€300–€600**, which the European Parliament's research service gives as Parliament's second-reading position ([EPRS](https://eprs.europarl.europa.eu/contents/publications/EPRS/2026/06/EPRS_ATA%282026%29789371.html); [CAPA](https://centreforaviation.com/news/eu-parliament-approves-upgraded-air-passenger-rights-1365276)).

Only the Official Journal text will settle whether the floor is €250 or €300. The application date is also open: the rules apply about a year after publication in the Official Journal ([LexisNexis](https://www.lexisnexis.co.uk/legal/news/council-adopts-regulation-strengthening-eu-air-passenger-rights)), and no publication date had been found, which points to roughly mid-to-late 2027.

Its reach also depends on the carrier. The regulation covers departures from EU airports, and flights into the EU only when an EU carrier operates them ([EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32004R0261)). For a non-EU airline such as Turkish Airlines, it therefore applies mainly to journeys that start in the EU.

| Jurisdiction | Instrument and status | Obligations that act as servicing SLAs |
| --- | --- | --- |
| EU | Revised 261/2004, adopted July 2026; applies about one year after publication | 3-hour delay trigger kept. Rerouting must be offered within **3 hours**, otherwise passengers may self-reroute and claim up to 400% of the fare. Automatic reimbursement if rerouting is declined. Claim instructions within **4 days**, payment within **30 days**, and no account or app may be required ([Eunews](https://www.eunews.it/en/?p=456800); [Clyde & Co](https://www.clydeco.com/en/insights/2026/06/the-eu-makes-progress-on-reforming-air-passenger-r)) |
| United States | 2024 DOT refund rule, core codified by Congress; compensation rulemaking withdrawn November 2025 | Automatic refunds within **7 business days** (card) or 20 days. Automatic refunds of bag fees and unprovided ancillaries ([Federal Register](https://www.federalregister.gov/documents/2024/04/26/2024-07177/refunds-and-other-consumer-protections); [Eckert Seamans](https://www.eckertseamans.com/?p=25980)) |
| India | DGCA refund rules, effective 26 March 2026 | Card refunds in 7 days, agency refunds in 14 working days, and a 48-hour free change window ([SCC Online](https://www.scconline.com/blog/post/2026/02/27/dgca-new-airline-ticket-refund-rules-2026/)) |
| Canada | APPR in force; 2024 amendments still pending | Refunds within 30 days. Rebooking on the next own- or partner-carrier flight within 48 hours; otherwise, for large airlines, on any carrier ([APPR, s. 18](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2019-150/page-3.html)) |
| United Kingdom | Civil Aviation Bill before the Commons | Would give the CAA direct fines up to the greater of £300,000 or 10% of global turnover, and allow mandatory ADR ([Burges Salmon](https://www.burges-salmon.com/articles/102nhoo/headwinds-ahead-for-airlines-the-uk-civil-aviation-bill-explained)) |
| Türkiye | SHY-YOLCU, last amended in Resmî Gazete No. 32748, 10 December 2024 ([Lexpera](https://www.lexpera.com.tr/mevzuat/yonetmelikler/havayolu-ile-seyahat-eden-yolcularin-haklarina-dair-yonetmelik-shy-yolcu/3)) | €100 domestic and **€250 / €400 / €600** international compensation, with obligations triggered at once for technical or operational delays of 3 hours or more ([Alomaliye](https://www.alomaliye.com/2024/12/10/havayolu-ile-seyahat-eden-yolcularin-haklari-shy-yolcu/)) |

The US is moving the other way at the margins. DOT has extended its non-enforcement of refund rules for renumbered flights to July 2027, and it has signalled a further refund rulemaking to reduce burdens ([Federal Register](https://www.federalregister.gov/documents/2026/07/07/2026-13675/airline-refunds-and-other-consumer-protections); [Cozen O'Connor](https://www.cozen.com/news-resources/publications/2026/dot-signals-deregulatory-shift-for-aviation-consumer-protection)).

Global carriers will design to the strictest regime in each market, so servicing rules engines need to work by jurisdiction. Meeting a three-hour rerouting clock at scale requires event-driven automation tied to one authoritative record of what was sold and what was delivered. That argues for one servicing record, which orders provide natively and well-integrated PNR systems can approximate. It is also a compliance risk wherever an intermediary or interline partner holds the customer contact.

Since 28 June 2025, the European Accessibility Act has also required airline websites, apps, e-tickets and EU kiosks to meet accessibility standards ([EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882)). Combined with the EU ban on requiring an app or account for claims, this means self-service has to stay open and channel-neutral. It cannot become a walled garden inside a logged-in app.

### Disruption recovery is where loyalty is won or lost

Best practice in 2026 is app-centred protect-and-choose recovery. United's automated standby, launched in September 2026, keeps a disrupted customer's confirmed seat and lists them on up to three earlier flights. More than **85% of United customers use its app on their travel day** ([Future Travel Experience](https://www.futuretravelexperience.com/2026/09/united-airlines-launches-automated-earlier-flight-standby-feature-for-disrupted-customers/); [Travel Agent Central](https://www.travelagentcentral.com/transportation/united-adds-flexibility-rebook-options-mobile-app)).

American's January 2026 disruption hub combines self-rebooking, instant digital vouchers and bag tracking ([Business Traveller](https://www.businesstraveller.com/news/american-airlines-app-upgrades-rebooking/)). Like United's standby feature, it runs on the airline's existing PNR-based systems.

Getting this wrong is very costly. Southwest's December 2022 meltdown, a crew-scheduling collapse, brought more than 15,000 cancellations, phone holds of over five hours and losses of US$1.1–1.2bn ([Wikipedia](https://en.wikipedia.org/wiki/2022_Southwest_Airlines_scheduling_crisis)). It also drew a **US$140m DOT penalty** ([US DOT](https://www.transportation.gov/blog/Destinations-by-DOT/icymi-usdot-announces-historic-penalty-against-southwest-airlines-140)).

Recovery is also where loyalty is decided. In J.D. Power's 2025 study, **81% of passengers with a *perfect* trip would definitely fly the airline again, against 4% after a *poor* one** ([J.D. Power](https://www.jdpower.com/business/press-releases/2025-north-america-airline-satisfaction-study)). Information about rights is still lacking: only 25% of disrupted travellers in AirHelp's 2026 survey were told their rights by the airline ([AirHelp](https://www.airhelp.com/en/blog/real-cost-of-flight-disruptions/)). The new EU four-day claim-instruction rule targets exactly that gap.

Customers want digital control, but they have not given up on people. Among business travellers in 2025, 33% preferred a human on the phone to rebook, 30% online self-service and only 11% chat, SMS or AI combined ([Perk](https://www.perk.com/uk/blog/business-travel-chaos-survey/)). The design target for 2030 is therefore digital first, fast human escalation, with the agent and the customer seeing the same record and able to take the same actions on it.

## AI resolves routine contacts, but autonomy stops where servicing APIs end

Airline AI customer service has moved past experiments, but the published evidence is thin and nearly all of it is self-reported or vendor-reported. No airline AI metric has been independently audited, and the headline figures use different definitions, so they cannot be compared directly.

| Airline | Platform | Published result (as reported) | Source |
| --- | --- | --- | --- |
| Air India (AI.g) | Azure OpenAI, custom build | More than 8M queries by March 2025, **97% answered without a human**; one query costs “one-hundredth” of a call-centre contact | [Air India](https://airindia.com/content/dam/air-india/newsroom/press-releases/pdf/Press-Release-Air-India-CODi.pdf); [exchange4media](https://www.exchange4media.com/digital-news/for-air-india-2025-is-about-perfection-performance-and-optimization-satya-ramaswamy-141890.html) |
| Ryanair | AWS Bedrock AgentCore, Amazon Connect voice | 120,000 chats a day, **80% containment**, 94% accuracy, 70% fewer customer-service contacts per passenger | [AWS](https://aws.amazon.com/solutions/case-studies/innovators/ryanair-agentic-ai/); [PYMNTS](https://www.pymnts.com/?p=4194598) |
| Lufthansa Group | Cognigy (NICE) | About 16M conversations a year, including rebooking and refunds during strikes | [Cognigy](https://cognigy.com/en/case-study/lufthansa) |
| Southwest | Salesforce Agentforce | More than 2M interactions, **45% case resolution**, with secure hand-offs for flight changes | [Salesforce](https://www.salesforce.com/customer-stories/southwest-airlines/agentic-self-service/) |
| Frontier | Cognigy | About 800,000 automated conversations a month | [Cognigy](https://www.cognigy.com/en/case-study/frontier-airlines) |
| Singapore Airlines | LLM-based Kris; Salesforce; OpenAI | CSAT on Kris “nearly doubled” after its July 2025 relaunch | [Aviation A2Z](https://aviationa2z.com/index.php/2026/08/18/singapore-airlines-expands-ai-push-with-over-160-applications/) |

The spread between Air India's 97% and Southwest's 45% says more about scope than about quality. FAQ-heavy chat inflates containment, while transactional scope, such as changing a flight with guardrails, produces lower and more meaningful resolution rates.

The carriers with the strongest numbers share one motive: breaking the link between passenger growth and contact-centre headcount. Ryanair's customer-service director aims for costs to “remain largely fixed as passenger volumes grow” ([PYMNTS](https://www.pymnts.com/?p=4194598)). Air India held contact-centre volume at about 9,000 a day while passenger numbers doubled ([Microsoft](https://www.microsoft.com/customers/story/19768-air-india-azure-open-ai-service)).

Network carriers disclose less and frame AI around agent productivity and disruption. At United, a human-reviewed email copilot halved time to resolution ([Slalom](https://slalom.com/mx/en/customer-stories/united-airlines-gen-ai)). Delta opened its Concierge to all SkyMiles members in August 2026, with cancellations and refund or eCredit requests, but has disclosed only “thousands” of interactions ([Let's Data Science](https://letsdatascience.com/news/delta-expands-concierge-ai-to-skymiles-members-eab95b0a)).

The two most automated deployments, Air India and Ryanair, are custom builds on hyperscaler models in which the airline owns the agent logic. That matters given Gartner's prediction that **70% of enterprises will abandon agentic AI built for them by vendor forward-deployed engineering teams by 2028** ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-09-29-gartner-predicts-70-percent-of-enterprises-will-abandon-agentic-ai-built-by-vendor-forward-deployed-engineering-by-2028)).

### Why AI autonomy depends on servicing APIs

How far an AI service agent can go depends on the servicing actions it can call through APIs: look up, reshop, change, cancel, refund, pay, or open a bag case. In a world of PNRs, tickets and EMDs, an agent that changes a booking has to coordinate reissue, revalidation and EMD handling across separate records. Where those APIs are thin, complex changes end in a human handoff.

That is one plausible reason FAQ-heavy containment of 80–97% outruns transactional resolution of around 45%. The comparison is loose, though: the figures come from different airlines, channels and definitions.

Vendors are responding by building AI into the order layer itself. Amadeus and TCS are developing a Nevio Service Center whose AI workflows target first-contact resolution, shorter handle times and upsell ([TCS/Amadeus](https://www.tcs.com/content/dam/global-tcs/ja/pdfs/notice/press-release/2026/0407-amadeus-tcs-announce-global-strategic-partnership-accelerate-modern-airline-retailing.pdf)). Amadeus also has a voice-rebooking agent that finds the booking, proposes options, explains the fare difference and starts payment; it calls the agent production-ready but has named no live airline ([Amadeus](https://amadeus.com/en/newsroom/press-releases/agentic-ai-airlines-amadeus)).

The link between orders and AI is architectural and so far asserted by vendors. **No airline has published evidence that native orders raised AI containment**, and the highest automation rates come from airlines without native orders. Mature servicing APIs over PNRs can therefore deliver much of the benefit now.

Later, one machine-readable order with item-level prices and standard reshop and change messages makes the same tools cleaner and atomic. Orders improve the servicing layer; they are not a precondition for it.

### The human tier shrinks in share, not in importance

The workforce evidence points to flat headcount amid growth, and to changing roles, not mass layoffs. In a Gartner survey of service leaders, only **20% had cut agent staffing because of AI**, while 55% held staffing stable and handled more volume ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-12-02-gartner-survey-finds-only-20-percent-of-customer-service-leaders-report-ai-driven-headcount-reduction)). Gartner also predicts that by 2027 half of the organisations that planned major service workforce cuts will abandon them ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-10-gartner-predicts-50-percent-of-organizations-will-abandon-plans-to-reduce-customer-service-workforce-due-to-ai)).

It further expects generative-AI cost per resolution to exceed US$3 by 2030, above many offshore human-agent costs, and AI-related regulation to raise human-assisted service volume by 30% by 2028 ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-01-26-gartner-predicts-genai-cost-per-resolution-for-customer-service-will-exceed-offshore-human-agent-costs-by-2030)). Klarna is the warning case: in May 2025 its CEO admitted that cost-cutting had pushed automation too far, and the company began reinvesting in human support ([Maginative](https://www.maginative.com/article/klarna-dials-back-its-ai-customer-service-strategy-now-its-hiring-humans-again/)).

The cost case also depends on wages. Where human agents cost less, as in Türkiye and other lower-wage markets, AI's cost edge is narrower. There its case rests more on languages, round-the-clock cover and peak handling than on labour savings.

On the human side, AI assistance raises productivity more than it replaces people. In a study of 5,179 support agents, a generative-AI assistant raised issues resolved per hour by **14% on average and 34% for novices** ([NBER](https://www.nber.org/papers/w31161)).

Law sets a floor under the human tier. *Moffatt v. Air Canada* (February 2024) held an airline liable for its chatbot's wrong advice ([ABA](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/)). The tribunal called Air Canada's argument that the chatbot was a separate legal entity a “remarkable submission” ([Lerners](https://www.lerners.ca/lernx/it-was-my-chatbot-not-me)).

The EU AI Act's duty to tell people they are talking to an AI has applied since **2 August 2026**. The Digital Omnibus (Regulation 2026/1744) did not delay it, and fines reach €15M or 3% of global turnover ([EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202601744); [AI Act Art. 99](https://artificialintelligenceact.eu/article/99/)).

Section 505 of the US FAA Reauthorization Act requires US airlines to offer a live human agent at all times by phone, chat or monitored text ([GovInfo](https://www.govinfo.gov/content/pkg/PLAW-118publ63/html/PLAW-118publ63.htm)). Its covered carrier is an “air carrier”, which US law defines as a US citizen, so the mandate does not bind foreign airlines such as Turkish Airlines ([49 USC 42307](https://www.law.cornell.edu/uscode/text/49/42307); [49 USC 40102](https://www.law.cornell.edu/uscode/text/49/40102)).

GDPR Article 22 means fully automated refusals of refunds or compensation in the EU are likely to need human-review safeguards ([GDPR Art. 22](https://gdpr-info.eu/art-22-gdpr/)). Customers set the same floor: only 27% would try a chatbot again after a bad experience, and **87% say access to a human is essential** when generative AI is used in service ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-09-02-gartner-finds-only-27-percent-of-customers-would-try-a-chatbot-again-after-a-negative-experience)).

Once agents execute changes and refunds, a mistake stops being bad information and becomes a wrong transaction. Machine-readable policy as a single source of truth, audit trails and hard limits on agent actions are therefore design requirements, not refinements. The Qantas call-centre breach of July 2025, which exposed service records for 6M customers through a third-party platform, shows that servicing channels are already prime attack surfaces ([Qantas](https://announcements.asx.com.au/asxpdf/20250702/pdf/06lcfkpts06gj3.pdf)).

### By 2030: AI first, agentic in disruption, human by exception

The forecasts and deployments point to a three-tier model:

1. **AI first** for most routine contacts, across web, app, WhatsApp, voice and third-party assistants. Gartner predicts agentic AI will resolve **80% of common service issues autonomously by 2029** and cut operating costs by 30% ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290)).
2. **Agentic disruption handling** at carriers with mature servicing APIs and real-time operational data.
3. **A smaller, more skilled human tier** for exceptions, high-value and vulnerable customers, regulated escalations and multi-carrier problems.

Voice is the next frontier. Ryanair is the only airline found running AI voice at scale, and Amadeus and Microsoft rank multilingual voice rebooking first among airline agentic uses ([TravelDailyNews](https://www.traveldailynews.com/statistics-trends/amadeus-outlines-agentic-ai-opportunities-for-airlines/)). Messaging platforms are becoming agent hosts in their own right: Meta launched its own Business Agent for WhatsApp in June 2026 ([WhatsApp Business](https://whatsappbusiness.com/blog/introducing-meta-business-agent-ai/)).

Customers are also **three times more likely to use third-party generative-AI tools than a company's own chatbot** ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-09-02-gartner-finds-only-27-percent-of-customers-would-try-a-chatbot-again-after-a-negative-experience)). That turns the customer's own AI into the next servicing channel.

## In the West, AI assistants discover and service flights but rarely sell them

AI agents are the newest channel, and the gap between hype and evidence is widest here. As of early October 2026, **none of the large Western general-purpose assistants reviewed sells a flight natively with payment taken in the chat**. Flight search is available almost everywhere; the purchase is handed off to the airline's or online travel agency's site, or an intermediary carries it.

China is the exception. Since April 2026, Alibaba's Qwen App has let users search, buy tickets, choose seats and check in for China Eastern flights in one chat, the app's first external partnership ([Alibaba](https://www.alibabagroup.com/en-US/document-1985779771614691328)). Fliggy, Alibaba's travel platform, also takes bookings through Qwen and reports AI orders up 800% in its Spring Festival campaign ([Travolution](https://www.travolution.com/news/fliggy-goes-live-with-bookings-via-ai-interface/)).

| Surface | What it can do with flights (October 2026) | Who carries the transaction | Source |
| --- | --- | --- | --- |
| ChatGPT apps (Virgin Atlantic, Virgin Australia, Iberia, Skyscanner, Expedia, Booking.com) | Search and inspiration, then handoff; OpenAI withdrew in-chat Instant Checkout in March 2026 | Airline or OTA site | [OpenAI](https://openai.com/index/introducing-apps-in-chatgpt/); [Forkast](https://forkast.news/openai-built-in-chat-checkout-for-ai-commerce-five-months-later-it-walked-away/) |
| Claude connectors (Turkish Airlines, Kiwi.com, Expedia) | Search, status and booking lookup, then handoff for payment | Airline or OTA site | [Claude](https://claude.com/connectors/turkish-airlines); [Alpic](https://alpic.ai/case-studies/kiwi) |
| Google AI Mode | Flight results, price tracking (outside the EU) and points pricing; hotels bookable in the US since August 2026, flights not | Partner as merchant of record (hotels) | [PhocusWire](https://www.phocuswire.com/news/technology/google-ai-mode-hotel-booking-agentic-flights-loyalty) |
| Meta Muse (US, September 2026) | Searches, books and manages flights | Duffel's agency rail, or browser automation on airline sites | [PhocusWire](https://www.phocuswire.com/news/technology/meta-launches-ai-agent-travel-booking) |
| Mindtrip (US, May 2026) | Search, compare and book, with PayPal checkout in the chat | Sabre content and PayPal | [Stellagent](https://stellagent.ai/insights/mindtrip-sabre-paypal-agentic-flight-booking) |
| Alibaba Qwen App (China, April 2026) | Search, ticketing, seat selection and check-in for China Eastern flights in one chat | China Eastern, as direct partner | [Alibaba](https://www.alibabagroup.com/en-US/document-1985779771614691328) |

Three patterns stand out. First, **hotels ship before flights** on the Western platforms reviewed that add travel categories one at a time; Google still describes flight booking as something it is “actively thinking about” ([PhocusWire](https://www.phocuswire.com/news/technology/google-ai-mode-hotel-booking-agentic-flights-loyalty)). The likely reasons are fare complexity, servicing obligations and fraud exposure, although no platform has stated them.

Second, platforms avoid becoming merchant of record; Google, for example, says it has no plan to become an OTA ([Hospitality.Today](https://www.hospitality.today/article/google-clarifies-its-agentic-ai-booking-strategy)). Third, where a Western agent does close a flight sale, **an intermediary carries it**. Duffel, which powers Muse's bookings, now holds agency status in several countries and reports a transaction run rate above US$1bn ([Duffel](https://duffel.com/blog/millions-of-users-can-now-use-duffel-to-search-book-and-manage-holidays-on-muse-the-new-personal-ai-agent-from-meta)).

In the West, agentic flight commerce is bringing intermediaries back into airline sales rather than steering bookings to airlines' own channels. Qwen's China Eastern deal shows the other path: a platform buying directly from an airline while still owning the customer interface.

### Usage is in research and servicing, not booking

The demand evidence points to research and servicing rather than booking. Adobe measured AI-referred traffic to US travel sites up **194% year on year in May 2026**, but that traffic converted **28% worse** than other traffic, whereas in retail it converts better ([Adobe](https://business.adobe.com/blog/adobe-report-ai-traffic-travel-sites-surges-200-percent)). Booking Holdings says LLMs drive **under 1% of room nights**, with “no material change” recently ([PhocusWire](https://www.phocuswire.com/news/finance/booking-holdings-q2-2026-earnings)).

Bain's tests found that LLM answers sent users to airline websites only **about 5% of the time**, while OTAs received far more referrals. No tool reliably reached an airline payment page: browser agents stalled on date pickers, CAPTCHAs and two-factor checks ([Bain](https://www.bain.com/ko/insights/is-the-airline-industry-ready-for-agent-led-bookings/)).

Skift Research finds AI present at **6% of booking-stage touchpoints but 29% of post-booking ones** ([Skift Research](https://research.skift.com/reports/the-mystery-of-the-disappearing-destination-how-ai-is-transforming-travel-discovery/)). Only 2% of travellers would let AI change bookings fully on its own ([McKinsey](https://www.mckinsey.com/industries/travel/our-insights/remapping-travel-with-agentic-ai)). No airline has published sessions or bookings from AI assistants.

The disintermediation risk therefore runs less through platforms taking the sale than through **answer ranking and agent-readability**: how assistants rank answers, and how easily agents can read an airline's content. Bain's advice is to optimise “infrastructure rather than interfaces” ([Bain](https://www.bain.com/ko/insights/is-the-airline-industry-ready-for-agent-led-bookings/)). Kasada describes AI discovery in travel as running from traveller to assistant to OTA or metasearch, and only then to the airline ([Kasada](https://www.kasada.io/in-travel-ai-amplifies-the-intermediary/)).

SimpliFlying's Shashank Nigam puts it more sharply: offers and orders were “just preparation for the age of AI”, because agents will favour offers they can compare by machine ([Future Travel Experience](https://www.futuretravelexperience.com/2026/06/simpliflying-founder-ceo-discusses-how-agentic-ai-will-reshape-airline-retailing-and-determine-which-offers-reach-travellers/)). That remains a hypothesis: the only measurement so far, Bain's, shows assistants favouring OTAs and metasearch.

### Agent commerce standards have no airline semantics

The plumbing for agent commerce is being built outside aviation, in layers. MCP connects agents to tools and added OAuth 2.1 authorisation in March 2025 ([MCP](https://modelcontextprotocol.io/specification/2025-03-26/changelog)). Two checkout protocols compete: ACP from OpenAI and Stripe, and Google's UCP, which has a lodging draft co-developed with Amadeus, Booking.com and Expedia but **no air vertical** ([ucp.dev](https://ucp.dev/)).

Google's AP2 adds signed user mandates; its own example has an agent booking a flight and hotel within a US$700 budget ([Google Cloud](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)). The card networks add agent identity: Visa's Trusted Agent Protocol and Mastercard Agent Pay sign agent requests and register agents ([Visa](https://github.com/visa/trusted-agent-protocol); [Mastercard](https://www.mastercard.com/news/press/2025/april/mastercard-unveils-agent-pay-pioneering-agentic-payments-technology-to-power-commerce-in-the-age-of-ai/)).

None of these covers fare rules, exchanges, involuntary refunds or multi-carrier settlement, and none links to NDC, ONE Order, BSP or Settlement with Orders. NDC itself remains an XML standard. No public IATA work on offers that agents can consume was found, though non-public pilots may exist; IATA's visible response so far is its Look-to-Book white paper ([IATA](https://www.iata.org/en/publications/newsletters/airline-retailing-hub/look-to-book-white-paper/)). Without an industry schema, airlines face implementing several platform-specific ones.

Pace favours the platforms. They shipped MCP authorisation, ACP, UCP, AP2 and the card networks' agent protocols in about two years, while Settlement with Orders, approved in 2019, is still in pilots. Airline semantics are therefore likely to reach agents through platform protocols first, with IATA ratifying them later.

The order is the natural record to tie an agent's mandate to, because it is the one record that survives post-sale changes. Nobody has standardised that link. No airline publicly exposes NDC-style shop, price, order-create and pay transactions to consumer agents; every airline integration found returns deep links.

Price-display rules apply wherever fares appear. US rules require the full price in airline advertising ([eCFR](https://www.ecfr.gov/current/title-14/chapter-II/subchapter-F/part-399/subpart-G/section-399.84)), and EU rules require the final price, with optional extras offered on an opt-in basis ([EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008R1008)). An airline's own agent tools are, in effect, its advertising, so their outputs should carry all-in prices. That last point is an inference: no regulator has issued guidance on assistants.

### Agents will reach airlines through servicing first

Servicing is where agents will reach airlines first. Gartner tells service teams to prepare for **“machine customers”**, AI agents acting for consumers ([CMSWire](https://www.cmswire.com/the-wire/gartner-predicts-agentic-ai-will-autonomously-resolve-80-of-common-customer-service-issues-without-human-intervention-by-2029)), and Forrester expects consumer agents to cause call spikes of 100 times normal volume at some brands ([Forrester](https://www.forrester.com/blogs/2026-the-year-ai-gets-real-for-customer-service-but-its-not-glamorous-work/)).

The building blocks for agent-to-agent servicing exist only on roadmaps. Sabre has announced an IROPS call-centre proxy agent ([TravelDailyNews](https://www.traveldailynews.com/technology/sabre-introduces-agentic-apis-to-revolutionize-travel-with-ai-driven-shopping-booking-and-servicing/)). Travelport, Cognizant and Anthropic plan MCP-based exchanges, refunds and servicing, with first capabilities expected in 2026 ([Business Travel Magazine](https://thebusinesstravelmag.com/travelport-cognizant-and-anthropic-build-ai-powered-travel-system/)). No public pilot shows a traveller's agent negotiating a change or refund end to end with an airline's agent.

A plausible path has three stages:

1. **Today: read-only lookups** that hand off through deep links.
2. **Next: scope-limited write tools**, such as rebooking within policy, accepting a re-accommodation offer, or paying for an ancillary under a tokenised mandate. These require consent, strong authentication and mature servicing APIs, ideally order-based.
3. **Later: negotiation between agents**, bounded by policy.

Disruption is the most likely first use case, because the rules are explicit and volumes spike.

### Forecast credibility

Forecasts deserve caution. McKinsey's estimate of US$3–5tn in agent-orchestrated global retail by 2030 explicitly excludes services such as travel ([McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants)). The only travel-specific share forecast found, IDC's estimate that agents will power nearly a third of international reservations by 2030, is secondhand from Duffel, a company that benefits from it ([Duffel](https://duffel.com/blog/millions-of-users-can-now-use-duffel-to-search-book-and-manage-holidays-on-muse-the-new-personal-ai-agent-from-meta)). Gartner expects more than **40% of agentic AI projects to be cancelled by the end of 2027** ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027)).

The same caution applies to forecasts pointing the other way. Gartner's and Forrester's predictions about machine customers and the human tier come from firms that sell advice on the trend, and OAG's 200,000:1 look-to-book projection comes from a fare-intelligence vendor.

In the West, the defensible 2030 view is that AI assistants will be a major interface for discovery and servicing. Agent-completed purchases will stay a minority channel there unless platforms take on flight checkout, airlines accept agent payment credentials at scale, and airlines expose offers agents can transact on. China shows how quickly that can change once a platform and an airline integrate directly.

### Four futures, not one

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 474" role="img" aria-labelledby="r-futures-title r-futures-desc" font-size="12">
<title id="r-futures-title">Four futures to 2030; the 2026 evidence leans toward platforms</title>
<desc id="r-futures-desc">A two-by-two of how fast airlines become order-native (slow to fast) against who owns the customer interface (airline to platforms). Re-intermediation: agents buy through aggregators and GDS rails, where the 2026 evidence leans. Supplier to agents: standard orders let platform agents buy straight from airlines. Airline-led hybrid: most Western airlines today. Airline as retailer: IATA's vision of order-native servicing.</desc>
<defs><marker id="r-futures-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fig-muted-fill"/></marker></defs>
<text class="fig-title" x="24" y="30" font-size="15">Four futures to 2030; the 2026 evidence leans toward platforms</text>
<text class="fig-soft" x="24" y="50" font-size="11.5">By speed of order adoption and by who owns the customer interface</text>
<g class="fig-line" stroke-width="1.25"><path d="M96 412V80" marker-end="url(#r-futures-arrow)"/><path d="M112 428H732" marker-end="url(#r-futures-arrow)"/></g>
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
<figcaption>Figure 3. Evidence: <a href="https://www.bain.com/ko/insights/is-the-airline-industry-ready-for-agent-led-bookings/">Bain</a> (airline referrals from AI answers), <a href="https://www.phocuswire.com/news/technology/meta-launches-ai-agent-travel-booking">PhocusWire</a> (Meta’s Muse booking through Duffel), <a href="https://www.alibabagroup.com/en-US/document-1985779771614691328">Alibaba</a> (Qwen App selling China Eastern flights).</figcaption>
</figure>

Where airline retail lands depends on two uncertainties: how fast airlines become order-native, and who owns the customer interface. Most Western airlines sit bottom-left today. The 2026 evidence leans toward the top row: Bain's 5% airline referrals, Muse booking through Duffel, and Qwen selling China Eastern flights.

An airline's own connectors pay off most in the top-right, where platforms buy straight from airlines. If orders stay slow, platforms will reach airlines through aggregators instead, so carriers need strength in both.

## Lessons for transfer-hub carriers

Transfer hubs feel every theme in this report first. When most international passengers connect, each disruption cascades across banks of flights, partner airlines and regulatory regimes, and every AI or agent channel has to handle multi-segment journeys. Turkish Airlines, using its public disclosures only, is the worked example here.

In 1H'26, **59% of Turkish Airlines' international passengers were international-to-international transfers**. The airline cites 62,000 connection options and, from OAG data as of August 2025, about 18,700 Europe-to-world city pairs, against about 7,800 for Air France and 7,200 for Lufthansa ([TK IR 2Q26](https://investor.turkishairlines.com/documents/ir-presentation-2q26.pdf)). Its 2025 annual report restates a 2033 plan of more than 800 aircraft and 170m passengers, and names Modern Airline Retailing and an agentic AI approach as levers for digitalisation ([TK 2025 Integrated Annual Report](https://investor.turkishairlines.com/documents/thy_frae_2025_uyg_uyg38_yuksek-1.pdf)).

### Bank the near-term levers: pricing, loyalty and payments

Pricing and loyalty are where this report's evidence puts the money. For a carrier the size of Turkish Airlines, which reported more than US$24.1bn of consolidated revenue in 2025 ([TK 2025 Integrated Annual Report](https://investor.turkishairlines.com/documents/thy_frae_2025_uyg_uyg38_yuksek-1.pdf)), each 1% of pricing uplift is worth about US$240m a year, and production deployments of continuous pricing report 1–3%.

The levers are already visible in public disclosures. Turkish Airlines prices Business Class upgrades dynamically and is extending the approach to other ancillaries ([FTE](https://www.futuretravelexperience.com/2026/09/iag-dfw-all-nippon-airways-muc-turkish-airlines-and-japan-airport-terminal-among-winners-in-fte-global-pioneer-awards-2026/)). On its 2Q26 call, management said ancillary price changes in 10–15 segments were worth about US$150m, with a new product-segmentation model rolling out from 2H26, and its low-cost subsidiary AJet earned 15% of revenue from ancillaries in the quarter ([2Q26 call](https://investor.turkishairlines.com/documents/presentations/thyao-2q26-earnings-call-transcript_vf.pdf)).

The ingredients of a single travel-retailer order are in place too: 24.2m Miles&Smiles members, a wallet and the licensed TKPAY payments subsidiary ([TK 2025 Integrated Annual Report](https://investor.turkishairlines.com/documents/thy_frae_2025_uyg_uyg38_yuksek-1.pdf)), a first US co-brand card ([TK 2024 Annual Report](https://investor.turkishairlines.com/documents/yillik-raporlar/2024_annual-report_en.pdf)) and a global holidays platform ([4Q25 call](https://investor.turkishairlines.com/documents/thyao-4q25-earnings-call-transcript.pdf)).

Two decisions follow for any hub carrier. On agent payments, platforms assume card-network agent tokens, but an airline with its own wallet and payment licence can keep payment data and fees in-house. On personalisation, the defensible position is market-level dynamic pricing, personalisation through offers and member benefits, and a record of which data feeds each price element, ahead of the EU's Digital Fairness Act proposal.

### Measure distribution savings net, and keep agencies whole

Channel shifts can save real money. Turkish Airlines credits its TKConnect NDC channel, live since 1 October 2024, with savings of about US$60m in 2025, rising to about US$100m a year ([4Q25 call](https://investor.turkishairlines.com/documents/thyao-4q25-earnings-call-transcript.pdf); [2Q26 call](https://investor.turkishairlines.com/documents/presentations/thyao-2q26-earnings-call-transcript_vf.pdf)), and reports 82% direct sales in 1H'26 ([TK IR 2Q26](https://investor.turkishairlines.com/documents/ir-presentation-2q26.pdf)). Since 1 May 2026 it charges US$30 on the first issue of EDIFACT tickets through GDSs, with TKConnect and direct channels exempt ([TK DCRC Guideline](https://cdn.turkishairlines.com/asset/286b728f-79a1-4a10-bbd7-a245aa2fe97d/DCRC-GUIDELINE_en-rev4.pdf)).

The durable pattern is NDC through the GDS rather than around it. Turkish Airlines returned to Sabre in June 2025 with NDC to follow ([travelBulletin](https://travelbulletin.com.au/newsroom/sabre-kisses-and-makes-up-with-turkish-airlines/)) and signed with Travelport in July 2026 with a reduced surcharge for NDC ([Travelport](https://www.travelport.com/press-releases/turkish-airlines-sign-multi-year-distribution-agreement-including-ndc)), the same end state Lufthansa formalised with its €8 tier.

For any carrier, the useful measure is savings net of channel costs, aggregator fees and agency sales lost during transitions; American's 2023–24 reversal shows the cost of moving faster than agencies can service. Distribution charges now reach agent channels too. Agents that book through GDS content can surface them, and Duffel-powered agents such as Meta's Muse can sell an airline only if its content is in Duffel's feed.

### Automate recovery now; let orders follow

Most transfers at a hub are on the carrier's own flights, which can be protected and rebooked automatically on today's systems, as United and American already do. The multi-carrier share, where order-based servicing is weakest, is the number to measure before treating order migration as the gate to better recovery. The practical sequence is a servicing API layer for change, refund, re-accommodation and notification that works over PNRs now, with ONE Order slotted beneath it as it matures.

Network shocks test that layer at scale. During the 2026 Middle East conflict, Turkish Airlines' regional network shrank from 26 destinations in 12 countries to 8 in 3, it redeployed 58 weekly frequencies, and its net customer base grew by about 5% as traffic moved away from Gulf carriers ([2Q26 call](https://investor.turkishairlines.com/documents/presentations/thyao-2q26-earnings-call-transcript_vf.pdf)).

The clock also differs by journey. EU 261 applies to non-EU carriers mainly on journeys that start at EU airports ([EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32004R0261)). Türkiye's SHY-YOLCU, last amended in Resmî Gazete No. 32748 on 10 December 2024 ([Lexpera](https://www.lexpera.com.tr/mevzuat/yonetmelikler/havayolu-ile-seyahat-eden-yolcularin-haklarina-dair-yonetmelik-shy-yolcu/3)), uses €250/€400/€600 international bands and requires obligations to be met immediately after delays of three hours or more ([Alomaliye](https://www.alomaliye.com/2024/12/10/havayolu-ile-seyahat-eden-yolcularin-haklari-shy-yolcu/)).

Every carrier live on native orders today runs a vendor platform: FLYR at Riyadh Air, Amadeus Nevio at Finnair and Saudia, and Hitit at Pegasus ([T2RL](https://t2rl.net/insight/firstview)). Turkish Airlines is building its order platform in-house with Turkish Technology, keeping offer creation, pricing logic and order management in-house and partners at the periphery ([FTE](https://www.futuretravelexperience.com/2026/05/inside-turkish-airlines-vision-for-contextual-ai-ready-retailing-rethinking-how-offers-are-created-priced-and-managed-end-to-end/)). Building trades vendor dependence for the upkeep of standards and GDS interoperability; buying trades control for a vendor's roadmap.

Partner breadth adds to the bridging burden. Miles&Smiles has 31 airline partners ([TK 2025 Integrated Annual Report](https://investor.turkishairlines.com/documents/thy_frae_2025_uyg_uyg38_yuksek-1.pdf)), and order-native Riyadh Air signed a codeshare and interline memorandum with Turkish Airlines in 2023 ([AeroTime](https://www.aerotime.aero/articles/turkish-airlines-riyadh-air-cooperation-agreement/amp)). Most partners will stay ticket-based for years, which is why delivery and interline standards, due from late 2026, matter most to transfer carriers. Turkish Airlines sits in IATA's Airline Retailing Consortium and Settlement with Orders Group and hosted WPS 2025 ([IATA](https://www.iata.org/retailing-consortium); [WPS 2025 programme](https://www.iata.org/contentassets/458793104bcc4f73b1433d53b07eb9e1/wfswps2025_program.pdf)).

### AI service and the agent channel: measure, govern, then open up

Turkish Airlines' TK Assistant runs on WhatsApp and the web, handles flight search, status and FAQs around the clock, and is positioned "as both a support and a sales channel". The airline reports a 38-point satisfaction gain after AI integration, with AI in call-centre operations on its 2026+ roadmap ([TK 2025 Integrated Annual Report](https://investor.turkishairlines.com/documents/thy_frae_2025_uyg_uyg38_yuksek-1.pdf)). The assistant has completed more than 2M conversations since the start of 2026, in over 100 languages, according to its CEO ([LinkedIn](https://www.linkedin.com/feed/update/urn:li:ugcPost:7497886480246136832/)).

On agent channels, Turkish Airlines put an MCP server live in 2025, described publicly with OAuth and Claude support ([Turkish Technology](https://turkishtechnology.com/en/blog/revolutionizing-travel-ai-how-we-built-turkish-airlines)). It is listed in Claude's connector directory ([Claude](https://claude.com/connectors/turkish-airlines)) and available from the ChatGPT app directory ([ChatGPT](https://chatgpt.com/apps/turkish-airlines/asdk_app_69450d740e508191bdb697e0ac33717d); [Turkish Airlines MCP](https://mcp.turkishtechlab.com/)), and since September 2026 turkishairlines.com and ajet.com have exposed in-page agent tools through WebMCP.

For hub carriers, four benchmarks matter for AI service by 2030:

1. **Transactional resolution** of change, refund and re-accommodation requests, measured separately from FAQs on industry-comparable definitions.
2. **Voice**, where most of the remaining contact-centre cost sits.
3. **Compliance by design**: EU AI Act disclosure, liability for every answer, guaranteed human access, and human review of automated refusals.
4. **The right cost case.** Gartner expects AI cost per resolution above US$3 by 2030. In lower-wage markets such as Türkiye, AI's case rests more on languages, round-the-clock cover and disruption peaks than on labour savings.

For agent channels, the evidence points to six steps:

1. **Governed writes on your own channels first.** Start write actions, such as accepting a re-accommodation offer, requesting a disruption refund or buying an upgrade, on authenticated app, WhatsApp and voice channels. Open them to outside agents once usage data, a fraud threat model and consent controls exist; disruption rebooking is the highest-value case.
2. **Presence where agents already shop.** In Bain's tests, LLM answers sent users to airline sites only about 5% of the time, and Western agents that book flights do so through Duffel or Sabre. Connecting offers need to be complete, competitively priced and well placed in the aggregator, metasearch and OTA feeds agents draw on, not only in an airline's own connectors.
3. **Agent-readable connecting offers, tested.** Turkish Technology's Yılmaz Goralı argues that structured, contextual offers make AI "a multiplier rather than a threat" ([FTE](https://www.futuretravelexperience.com/2026/05/inside-turkish-airlines-vision-for-contextual-ai-ready-retailing-rethinking-how-offers-are-created-priced-and-managed-end-to-end/)). Whether assistants reward structured offers is still a hypothesis worth testing on real queries.
4. **Measure before targeting.** OAG projects look-to-book ratios of 200,000:1 once agents shop for travellers, but that is a vendor projection. Measure actual look-to-book and cost per offer, and use agent-identity schemes such as Visa's Trusted Agent Protocol to serve verified agents while throttling scrapers.
5. **Internal metrics first, publication when they lead.** No airline has disclosed sessions or bookings from AI assistants. Measure usage, conversion and resolution on industry definitions, and publish once the numbers make the case.
6. **Standards through platforms as well as IATA.** Platforms are setting agent standards faster than IATA, so airline semantics are best co-developed with protocols such as UCP, ACP and Meta's agent stack, then ratified through IATA. WPS 2026 in Macao on 28–29 October is the next test ([IATA](https://www.iata.org/en/pressroom/2026-releases/09-23-iata-brings-world-passenger-financial-symposium-to-macao/)).

### Organisation, data protection and group carriers

Three constraints sit outside any single system. The first is organisation: the steps above cut across the order platform, distribution, contact centre, digital assistant, payments and security. The industry survey that found each function rating itself most supportive suggests end-to-end ownership of the order, across commercial, IT and operations, may be the binding constraint.

The second is data protection and security. For carriers in Türkiye, sending passenger data to US-hosted assistants and models is a transfer abroad under KVKK, which usually relies on standard contracts notified to the Authority within five business days ([Köksal](https://koksal.av.tr/en/faq/can-we-amend-the-standard-contract/); [Digital Policy Alert](https://digitalpolicyalert.org/event/24042-adopted-kvkk-standard-contract-notification-module-for-cross-border-data-transfer)). Write access for outside agents also opens refund abuse, account takeover, miles theft and prompt injection, so threat models must come before write tools.

The third is group carriers. A low-cost subsidiary such as AJet, with its own website, a 15% ancillary share and a different customer, needs its own implications rather than a footnote to the mainline.

## Conclusion

The offers-and-orders transition is usually told as a distribution story about NDC against the GDS. By 2026, that dispute has settled into NDC flowing through the GDS. The question that will separate airlines by 2030 is different: **who can service the customer fastest, and who owns the interface where the customer starts**.

Three forces press on the servicing layer. Regulators set deadlines measured in hours and days, airlines' own AI agents can resolve only what servicing APIs let them change, and customers' AI agents will increasingly arrive at servicing endpoints instead of homepages. Meanwhile platforms, from Meta's Muse to Alibaba's Qwen App, are deciding whether airlines sell to them through intermediaries or directly.

Orders are the cleanest long-run foundation for that servicing layer, but today's best results run on PNR-based systems with mature APIs. Value capture lags the roadmap because pricing, ancillaries and loyalty pay now, while the order's main payoff depends on partners, settlement and delivery standards that will not be complete before 2027–2028.

<figure>
<div class="figure-frame">
<svg class="fig" viewBox="0 0 760 372" role="img" aria-labelledby="r-milestones-title r-milestones-desc" font-size="12">
<title id="r-milestones-title">EU 261 deadlines start before partner order standards are complete</title>
<desc id="r-milestones-desc">Timeline of milestones from 2026 to 2030. Multi-carrier interline orders are expected in 2026 to 2028, while the revised EU 261 is estimated to apply from mid-to-late 2027; IATA aims to have standards ready by 2030.</desc>
<text class="fig-title" x="24" y="28" font-size="15">EU 261 deadlines start before partner order standards are complete</text>
<text class="fig-soft" x="24" y="48" font-size="11.5">Dated milestones from this report; bars are windows, diamonds are dates</text>
<g class="fig-grid">
<line x1="270.0" x2="270.0" y1="92" y2="336"/>
<line x1="346.0" x2="346.0" y1="92" y2="336"/>
<line x1="422.0" x2="422.0" y1="92" y2="336"/>
<line x1="498.2" x2="498.2" y1="92" y2="336"/>
<line x1="574.2" x2="574.2" y1="92" y2="336"/>
<line x1="650.2" x2="650.2" y1="92" y2="336"/>
</g>
<text class="fig-soft" x="307.7" y="82" font-size="11.5" text-anchor="middle">2026</text>
<text class="fig-soft" x="383.7" y="82" font-size="11.5" text-anchor="middle">2027</text>
<text class="fig-soft" x="459.9" y="82" font-size="11.5" text-anchor="middle">2028</text>
<text class="fig-soft" x="535.9" y="82" font-size="11.5" text-anchor="middle">2029</text>
<text class="fig-soft" x="611.9" y="82" font-size="11.5" text-anchor="middle">2030</text>
<line class="fig-line" x1="270" x2="650" y1="92" y2="92" stroke-width="1.25"/>
<line class="fig-line" x1="328.3" x2="328.3" y1="92" y2="336" stroke-width="1.25" stroke-dasharray="4 4"/>
<text class="fig-soft" x="328.3" y="354" font-size="11.5" text-anchor="middle">as of Oct 8, 2026</text>
<line class="fig-grid" x1="270" x2="270.0" y1="112" y2="112"/>
<rect class="fig-muted-soft" x="270.0" y="105" width="228.0" height="14" rx="7" stroke-width="1.25"><title>2026–2028 (Roland Berger)</title></rect>
<text class="fig-soft" x="512" y="116" font-size="11.5">2026–2028 (Roland Berger)</text>
<text class="fig-ink" x="24" y="116">Multi-carrier interline orders</text>
<line class="fig-grid" x1="270" x2="326.8" y1="142" y2="142"/>
<rect class="fig-muted-soft" x="326.8" y="135" width="18.9" height="14" rx="7" stroke-width="1.25"><title>late 2026, expected</title></rect>
<text class="fig-soft" x="359.8" y="146" font-size="11.5">late 2026, expected</text>
<text class="fig-ink" x="24" y="146">EU Digital Fairness Act proposal</text>
<line class="fig-grid" x1="270" x2="345.8" y1="172" y2="172"/>
<path class="fig-muted-fill" d="M345.8 165l7 7l-7 7l-7 -7z"><title>end-2026</title></path>
<text class="fig-soft" x="359.8" y="176" font-size="11.5">end-2026</text>
<text class="fig-ink" x="24" y="176">IATA delivery-with-orders docs</text>
<line class="fig-grid" x1="270" x2="345.8" y1="202" y2="202"/>
<path class="fig-muted-fill" d="M345.8 195l7 7l-7 7l-7 -7z"><title>by end-2026</title></path>
<text class="fig-soft" x="359.8" y="206" font-size="11.5">by end-2026</text>
<text class="fig-ink" x="24" y="206">Delta NDC with ARC settlement</text>
<line class="fig-grid" x1="270" x2="364.7" y1="232" y2="232"/>
<rect class="fig-muted-soft" x="364.7" y="225" width="18.7" height="14" rx="7" stroke-width="1.25"><title>Q2 2027</title></rect>
<text class="fig-soft" x="397.5" y="236" font-size="11.5">Q2 2027</text>
<text class="fig-ink" x="24" y="236">Delta unused-ticket solution</text>
<line class="fig-grid" x1="270" x2="383.7" y1="262" y2="262"/>
<path class="fig-muted-fill" d="M383.7 255l7 7l-7 7l-7 -7z"><title>July 2027</title></path>
<text class="fig-soft" x="397.7" y="266" font-size="11.5">July 2027</text>
<text class="fig-ink" x="24" y="266">US DOT refund non-enforcement ends</text>
<line class="fig-grid" x1="270" x2="383.7" y1="292" y2="292"/>
<rect class="fig-accent-soft" x="383.7" y="285" width="38.1" height="14" rx="7" stroke-width="1.25"><title>mid-to-late 2027, estimated</title></rect>
<text class="fig-ink" x="435.8" y="296" font-size="11.5" font-weight="600">mid-to-late 2027, estimated</text>
<text class="fig-ink" x="24" y="296" font-weight="600">Revised EU 261 applies (est.)</text>
<line class="fig-grid" x1="270" x2="650.0" y1="322" y2="322"/>
<path class="fig-muted-fill" d="M650.0 315l7 7l-7 7l-7 -7z"><title>by 2030</title></path>
<text class="fig-soft" x="664" y="326" font-size="11.5">by 2030</text>
<text class="fig-ink" x="24" y="326">IATA standards ready (aim)</text>
</svg>
</div>
<figcaption>Figure 4. Dated milestones cited in this report. The EU 261 window is an estimate: the rules apply about a year after publication in the Official Journal.</figcaption>
</figure>

The revised EU 261's rerouting clock is expected to start while multi-carrier order servicing is still emerging, so carriers will meet it largely through hybrid, ticket-bridged processes.

For transfer-hub carriers, the strongest near-term returns are in pricing, loyalty and automated recovery on today's systems, where the money and the customer's verdict lie. Early presence in AI-assistant channels is valuable but rarely measured in public, and direct connectors pay off most if platforms buy from airlines directly.

Carriers that turn that presence into governed, measured transactions, starting on their own channels, can build a lead that is hard to copy. Those that do not will repeat an old pattern: shopping running years ahead of servicing.

## About this report

This report draws only on public sources available in early October 2026: IATA and regulator documents, airline investor materials, vendor releases, trade press and analyst research. The most consequential figures were checked against their cited pages; where sources still conflict, as on the EU 261 compensation floor, the conflict is shown rather than resolved. Airline and vendor AI metrics are self-reported and unaudited, and their definitions differ.

It was revised after an independent red-team review, which reframed the central thesis around servicing capability and interface ownership, added the China evidence and corrected the legal reach of several passenger-rights rules. Turkish Airlines appears as a worked example, using its public disclosures only.

Researched and drafted with Claude; views are my own.
