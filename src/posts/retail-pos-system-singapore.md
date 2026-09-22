---
layout: layouts/post.njk
title: "Retail POS system in Singapore: what changes when you run more than one till"
description: A retail POS system in Singapore behaves differently across several tills and outlets. Test stock sync, permissions, reconciliation and returns before you buy.
date: 2026-09-23
readingTime: 7
tags: posts
draft: false
---

A single till is forgiving. One person opens the shop, one person rings up sales, one
person counts the drawer at close, and the same person notices when the stock figure on
the screen has drifted away from what is on the shelf. Almost any retail POS system will
survive that arrangement, which is why the first purchase usually goes fine.

The second till is where the decision starts to matter. So does the second outlet, the
weekend casual who only works Saturdays, the customer who buys at one branch and returns
at another, and the evening when two drawers are counted by two people who each had a
slightly different idea of what a "no sale" is for. None of that appears in a demo. All
of it appears in the second month.

So the useful question when choosing a retail POS system in Singapore is not which one
has the cleanest checkout screen. It is: what does this system do when the same business
is being run from several places at once, by people with different levels of
responsibility, and the records have to agree at the end of the day?

{% include "infographics/retail-pos-multi-till.njk" %}

## Stock is one number, or it is not a system

On one till, stock is arithmetic. Across several tills it becomes a question of timing,
and timing is where most disappointment lives.

Ask the vendor a very literal question: when a unit sells on till two, at what moment
does till one, the stockroom device and the online listing know about it? Immediately,
at a fixed interval, or when someone remembers to press something? Then ask the harder
version — what happens to that answer when one device is offline, when two tills sell the
last unit within the same few seconds, and when a staff member is halfway through a
transaction that is later voided.

Test it with the item that actually causes you trouble: the fast-moving one you routinely
run down to the last few pieces, or the one that exists in several sizes and colours.
Variants are where the seams show. A system that tracks a product cleanly may still make
a mess of the same product in six sizes across two outlets, because each variant has to
carry its own count, its own reorder point and its own transfer history.

Then push into the parts nobody demos. How is a transfer between outlets recorded, and
does it appear as in-transit stock or simply vanish from one place and reappear in
another? How is a stocktake handled — does the count lock the item, adjust it, or
silently overwrite what the tills have been doing while the count was running? Who
approves a stock adjustment, and can an owner see the list of adjustments made this
month without reconstructing them from memory?

A retail operator does not need perfect stock. They need stock figures whose errors are
findable. That is a property of the system's design, not of its marketing.

## Permissions should describe your shop floor, not the software's defaults

A shared login is fine until the first discrepancy. After that it is the reason the
discrepancy cannot be resolved.

The model worth buying separates what a person does from what a person may approve.
Cashiers sell, take payment and handle the ordinary cases. Someone more senior approves
the exceptions: the price override, the manual discount, the refund without a receipt,
the drawer opened outside a sale, the transaction voided after payment. A manager
maintains settings for their own outlet. Whoever administers the system sits apart from
all of that.

The practical test is granularity in both directions. Can permissions be set per till
rather than only per person — so a temporary staff member on the second till has a
narrower set of rights than the same person would have at the main counter? And can
approval happen at the till, by a supervisor entering their own PIN, without either
sharing a login or dragging someone across the shop for every small exception?

Then ask about the trail. Every exception should leave a record naming the person, the
till, the time and the amount, and that record should be readable as a list, not
excavated from a log. Ask to see the screen where a week's overrides appear. If it does
not exist, the controls are decorative.

This is also how good permissions protect staff rather than police them. When every
override carries a name, nobody has to account for an action they did not take, and the
Saturday casual is not quietly carrying the risk of a drawer that several people could
open.

## End of day is a reconciliation, not a button

Closing one till is counting cash. Closing several tills is comparing several independent
accounts of the same day and explaining the gaps — and that is a genuinely different
piece of software.

Work through it concretely. Does each till close independently, producing its own cash
declaration, card totals and variance, or does the outlet close as a single unit? What
happens when a cashier's shift ends mid-trading and a second person takes over the same
physical till — is that a handover with its own count, or does the drawer simply continue?
Where do payment methods reconcile: card settlement, the various local e-payment
options a Singapore shop is expected to take, vouchers, deposits and store credit each
land differently, and a system that lumps them into "other" has pushed the work back onto
a person with a calculator.

Ask what a variance looks like when it appears. The useful system tells you which till,
which shift and which transactions are implicated. The weak one tells you the outlet is
short and leaves you to find out the rest. Ask, too, what can still be edited after a
till is closed, by whom, and whether that edit is visible afterwards — a day that can be
quietly rewritten is not a record.

Finally, look at what reaches the person doing your books. GST treatment, rounding,
refunds and voids should arrive in a form that reconciles against banking without a
monthly rebuild. Follow one ordinary day all the way through to that export before you
sign anything. The chain from receipt to daily summary to accounts is the part you will
live with.

## Returns and exchanges are the cross-outlet stress test

Returns are where multi-outlet retail quietly breaks, because a return is the one
transaction that deliberately moves value backwards through a system that was designed to
move it forwards.

Start with the plain case: a customer buys at one outlet and returns at another. Can the
receiving outlet find the original sale without the paper receipt, from a card, a phone
number, a loyalty record or an order reference? Where does the returned unit land in
stock — the outlet holding it, or the outlet that sold it? Where does the refund land in
the books, and which outlet's day carries it? These are not accounting pedantry. They
decide whether an outlet manager can trust their own sales figures at month end.

Then the awkward ones, because they are the common ones. An exchange for a different
price, up or down. A partial return from a multi-item sale. A return of a discounted item
where the discount applied to the basket rather than the line. A refund to a payment
method that is no longer available, or to a card the customer does not have with them. A
return of an item bought online and collected in store. Each of these needs a defined
answer, a permission level and a record — and each is a place where staff otherwise
invent a local convention that differs between outlets.

Ask to perform these on a test system rather than accept a description. Then write down
what happened as a one-page procedure a new staff member could follow on a Saturday. If
the vendor's answers cannot be reduced to that page, your outlets will each write their
own version, and the reports will stop meaning the same thing.

## What to ask before the second outlet, not after

Most of the pain described here is cheap to avoid and expensive to fix, because by the
time a business has two outlets running it has also accumulated staff habits, historical
transactions and a stock file nobody wants to touch.

Before committing, get four things in writing. What the system does while a device is
offline and what it does when that device reconnects. What data you can export, in what
format, and how quickly, if you ever move. Who is responsible when an integration to
payments, accounting or an online store stops passing data, and on which screen that
failure becomes visible. And what the recurring work actually is — the device management,
the staff training, the price and promotion updates, the periodic stocktake — because
that work, not the subscription line, is what the operation feels.

We build and run software for operators, and the pattern is consistent across systems far
larger than a shop floor: the deciding factor is rarely the feature list. It is whether
the system makes its own errors findable by an ordinary person on an ordinary day.
Software that assumes everything goes to plan is pleasant in a demo and costly in
practice.

Test a retail POS against a busy Saturday with two tills open, a shift handover, a
cross-outlet return and a close that does not balance on the first attempt. Those four
moments will tell you more than the rest of the evaluation combined.
