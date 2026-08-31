---
layout: layouts/post.njk
title: When AI-written code passes every test and still doesn't work
description: A feature shipped with a green test suite and did not work on real hardware for 19 days. What that taught us about which claims from an AI agent count as evidence, and which are just confident output.
date: 2026-09-01
readingTime: 7
tags: posts
draft: false
---

The most expensive habit in AI-assisted development is not bad code. It is believing a green
test suite.

We ship software built largely by AI agents, and the tests they write are genuinely good —
thorough, well-named, fast. That is exactly what makes this failure mode dangerous. A suite
that fails is a problem you already know about. A suite that passes on something broken is a
problem you have been told does not exist.

{% include "infographics/green-tests-no-evidence.njk" %}

## The specific case

In August we shipped a feature on a handheld barcode-scanning terminal: turn on the camera's
LED torch so the scanner works in a dim stockroom. The code was written, the tests were
written, everything passed, it went out on 8 August.

The torch had never once lit.

Not "worked and then regressed." Never worked, on any device, from the first build. The tests
had been passing for three days on a feature that did not exist in the physical world.

Nothing in that test suite was wrong, either. Every assertion it made was true. It confirmed
that when the torch was requested, the request reached the camera component with the right
value. That is a real thing to check, and it was correctly checked.

It just was not the feature. The feature was a photon.

## Why the emulator can't save you

The reason nobody caught it is mundane and worth stating plainly: the tests ran on an emulator,
and an emulator has no flash hardware. There is no LED for a test to observe. So the suite
tested the only thing it could reach — the code path — and reported success on it.

The root cause, when we finally looked at a real device on 11 August, was upstream and not ours
at all: the camera library dropped the torch-enable flag when that flag was already set at the
moment the component first rendered. A published, known bug in a dependency. No amount of
testing our own code would ever have surfaced it, because our own code was correct.

That is the shape of the trap. The test suite covered our code completely, and the defect lived
exactly one layer below where the coverage stopped.

## The second failure was worse, and more instructive

We fixed it. Then on 14 August the torch started dying after exactly one scan.

The first diagnosis — mine — was wrong. I read an upstream issue that looked like a match and
started building a fix around re-initialising the camera after every decode: a toggle plus a
timer, on the hot path of the busiest screen in the app. It would have "worked," in the sense
that the light would have stayed on, while quietly adding a delay to every single scan a cashier
made all day.

What corrected it was not more analysis. It was a person holding the device, watching the
behaviour, and saying: that will slow things down, and I don't think that's what's happening.
The real cause was that we were rebuilding the camera on every decode. The fix was to stop doing
that — smaller, faster, and in the opposite direction from where the reasoning was heading.

**Nineteen days** passed between "tests green, shipped" and a confirmed LED lighting up on a
real device on 27 August. Every one of those days, the automated evidence said the feature was
fine.

## The rule we run on now

The general principle is short: **an assertion about a deferred or physical effect is not
evidence that the effect happened.**

In practice we grade evidence in tiers, and agents are held to the tier the claim requires:

- **A green test** proves a code path executes as written. That is the weakest tier, and for
  most business logic it is genuinely enough.
- **A live check against the running system** — the actual database row, the actual API
  response, the deployed URL returning 200 — is the minimum for anything that crosses a process
  boundary.
- **A physical observation** — a photo of the lit LED, a printed receipt in hand, the scanner
  beeping in a room — is the only acceptable evidence for anything that ends in the physical
  world. Nothing below that tier counts, no matter how green.

The same rule catches a whole family of siblings we have logged: a deploy tool reporting success
on a page that returns 404, a `git push` exiting 0 having pushed nothing, a screenshot utility
returning a file path for a file it never wrote. **Exit codes and success messages are claims,
not evidence.** An AI agent will relay those claims to you with total confidence, because from
inside the process they look identical to the truth.

## What this means if you're deploying AI-built software

None of this is an argument against building with AI. We build almost everything this way, and
the delivery speed is not a marketing line — [it is why the offshore maths
changed](/blog/ai-vs-offshore-development-cost-singapore/), and why we can afford to spend
nineteen days chasing one LED instead of shipping and hoping.

But it does change where a competent reviewer spends attention. The question worth asking your
team, or your vendor, is not "is it tested?" It is: **what is the last thing in this feature
that happens outside the code, and who physically watched it happen?**

If the honest answer is "the test suite passes," you have not verified the feature. You have
verified the paragraph the code wrote about itself.
