---
layout: layouts/post.njk
title: Where AI gets it wrong — and how you find out
description: The failure mode isn't a wrong answer. It's a confident, well-formatted, entirely plausible answer that nobody thinks to check.
date: 2026-08-15
readingTime: 6
tags: posts
draft: true
---

If you only read one thing about using AI in a business, make it this: **the dangerous failure
is not the obvious mistake. It is the plausible one.**

A tool that produces visibly bad work is harmless — you throw it away. A tool that produces
confident, well-structured, professional-looking work that happens to be wrong is a different
proposition entirely, because it passes every check a busy person actually performs.

We have hit this repeatedly in our own work. Not in theory. Here are three real ones, with what
they cost.

## "The tests pass" — and the feature did nothing

We shipped a change to a piece of hardware software. Seven automated tests, all green. By every
signal available on screen, it worked.

The physical light on the device never turned on. For three days.

The tests verified that the code *asked* for the light to turn on. Nothing verified that light
came out of the device, because you cannot check that from a test suite — someone has to look
at the thing.

**The lesson we now work by:** when the actual feature is a physical effect, a green test suite
is not evidence. Someone checks the real device. This sounds obvious written down. It was not
obvious at the time, because everything on the dashboard was green.

## "Deployed successfully" — and nothing shipped

A deployment command reported success and exited cleanly. The success message was accurate
about what it did. It simply had not done what we assumed it did, and the change never reached
the server.

There is a whole family of this: tools that report success for the operation they performed,
which is not the operation you had in mind. A file-writing step that returns a path for a file
it never wrote. A "successful" page deploy that serves a 404.

**The lesson:** an exit code is a claim, not evidence. Verify at the destination — load the
page, query the live system, look at the thing itself.

## The fix that quietly deleted our best page

Most recent, and most instructive, because it happened on this very website.

We tidied up some old pages, adding instructions that told search engines the pages had moved.
The instructions contradicted each other, and the net effect was to tell Google to **delete**
the page rather than transfer its ranking.

That page was the second-best-performing page we had. The change looked correct in every
review. It was live for a day before we caught it in the analytics — not in the code, which
looked perfectly reasonable.

**The lesson:** a change that looks right and produces no error can still be doing damage
silently. Some things are only visible in outcomes, days later, and you have to go looking.

## What these have in common

None of the three was a stupid mistake. In each case the tool did something defensible and
reported honestly on the thing it had actually done. The gap was between **what was verified**
and **what mattered**.

That gap is where the risk lives, and it does not close by trying harder or being more careful
in the moment. It closes with a habit:

> **Decide what would prove this worked — before you start — and then go and check that
> specific thing.**

Not "did it run without errors". Not "does the output look right". What observable fact, in the
real world, would be true if this genuinely worked? Then check that.

## Which brings us to the uncomfortable part

Every rule above came from being burned. That is not a coincidence — it is the actual mechanism.

The most valuable thing an experienced person brings to this is not the ability to review
output. Anyone senior can look at finished work and say "that's wrong." It is the ability to
know, **before starting**, where this particular piece of work is likely to go sideways: which
part will be fragile, which "done" will not be done, which reasonable-looking shortcut will
turn out to be wrong here specifically.

That instinct is not analysis. It is pattern recognition, earned by having been burned by the
same class of problem before. It is why we are cautious about the idea that these tools let
inexperienced people do expert work. They let *experienced* people work much faster. They let
inexperienced people be wrong much faster, in a format that looks entirely convincing.

Which is a good place to explain what we actually did with them, and what it changed — that is
the next post.
