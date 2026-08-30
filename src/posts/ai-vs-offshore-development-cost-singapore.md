---
layout: layouts/post.njk
title: AI vs offshore development cost — the maths changed
description: Offshore development was rational when senior local engineers were unaffordable. Here's what actually made up that cost, and what changed when AI took over the volume work.
date: 2026-08-31
readingTime: 6
tags: posts
draft: false
---

Every Singapore SME that has ever priced local software talent has heard the same answer:
too expensive, go offshore. That was true. The question worth re-asking is *why* it was true,
because the reason has quietly stopped applying to the work that mattered most.

{% include "infographics/offshore-vs-ai-cost.njk" %}

## What "offshore is cheaper" actually meant

Nobody was wrong about the hourly rate. A senior engineer in Singapore costs what they cost,
and a team of seven offshore developers costs a fraction of that. The maths on the invoice was
real.

What the invoice never showed was the second cost, the one that only shows up in the delivery
calendar: the specification round-trips, the timezone gap between a question and an answer, the
rework when an assumption made on one side of that gap turned out wrong on the other. None of
that is a criticism of the people doing the work — they were doing exactly what they were hired
to do, well. It is a property of the arrangement, not the people in it.

We ran that arrangement ourselves, with seven offshore developers, until October 2024.

## The part AI actually replaced

It did not replace judgment. It replaced the volume work that used to require a whole team's
worth of hands: writing the routine code, running the tests, drafting the deployment, checking
the logs afterwards.

That is precisely the work that made offshore teams necessary in the first place — not because
any of it was hard to specify, but because doing it all took more hours than one senior person
had. Take the hours-problem out and the remaining work — deciding what to build, catching what
will go wrong before it does, verifying that what shipped actually works — fits back into a
small, expert, local team.

By January 2026 we had gone from seven offshore developers to zero, with development driven
entirely in-house.

## What that changed on the cost side

Not "cheaper," which undersells it and invites a study nobody has run. What we can say plainly,
because it is what happened:

- **Response time on fixes and change requests is 5–7× faster** than the offshore-team baseline.
- **Testing before deployment got more extensive, not less** — the tedious part became cheap
  enough to stop skipping.
- **Error rate went down. Customer satisfaction went up.** The usual trade-off — faster means
  sloppier — did not happen, because the constraint that used to force corners to be cut
  (people-hours) is not the constraint anymore.

The new constraint is a different one, and we impose it on ourselves deliberately: our product
lead runs **three concurrent developments**, not more, because three is what one person can
hold in their head properly. Past that you stop directing the work and start rubber-stamping
it. We would rather hit that ceiling on purpose than discover it in a client's production
environment.

## The comparison that actually matters

"AI vs offshore" is the wrong frame if you read it as a bake-off between two ways to write the
same code. The honest comparison is between two different bottlenecks:

An offshore team's bottleneck is **hours** — get enough of them and the throughput problem is
solved, at the cost of coordination overhead that grows with headcount and timezone spread.

An AI-augmented in-house team's bottleneck is **judgment bandwidth** — how many things one
experienced person can genuinely stay across. That bottleneck does not disappear. It is just a
much better one to have, because it caps at quality rather than at throughput.

## Where this doesn't apply

If the honest answer is "we just need more hands and the work is well-specified," offshore
capacity still solves that cleanly — this isn't a claim that offshore development stopped
making sense everywhere. What changed is narrower and, for most SMEs, more relevant: the work
that used to *require* a team to get through the hours can now be run by a small local team that
can also answer the phone same-day.

If you are still routing development offshore because the local maths never worked, that
specific maths — hours-per-feature against a senior local rate — is the part worth
re-checking.
