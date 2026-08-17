---
layout: layouts/post.njk
title: Seven offshore developers to zero — and we got faster
description: In October 2024 we had seven offshore developers. Today we have none, and we ship faster. The dates, the numbers, and the one thing that makes it work.
date: 2026-08-17
readingTime: 7
tags: posts
draft: false
---


In October 2024 we had seven offshore developers building our software.

Today we have none. And we ship faster than we ever did with them.

I want to be careful about how I say this, because "AI made us faster" is currently the most
over-claimed sentence in software. Most versions of it are a feeling, or a demo, or a
productivity study with a vested interest attached. So here is ours with dates on it, including
the parts that are less flattering.

## The sequence

**October 2024 — we started using AI for coding.** Not on a toy project or a hackathon
weekend. On the real codebase, on client work, where being wrong has consequences.

**Through 2025 — the offshore team went from seven people to one.** I want to be precise about
why, because there is a version of this story that is unfair to them. Nobody underperformed.
They were good developers doing exactly what we hired them to do. What changed is that the work
stopped needing that many hands. The bottleneck in software has never really been typing; it is
everything around it — the specification, the review, the back-and-forth across a timezone gap,
the rework when an assumption turns out wrong. That surrounding cost is what collapsed.

**January 2026 — we ended offshore development entirely.** All development is now driven
in-house by our product lead, working with AI.

**February 2026 — we handed technical operations across as well.** Service deployments,
infrastructure, the unglamorous half of running software that nobody puts in a portfolio.
Productivity moved again, noticeably.

## What actually changed

We respond to bug fixes and change requests **five to seven times faster than before**.

That is the number people expect. Here is the one they don't: we do it while running **more**
testing before deployment than we used to, not less. Our error rate has gone down. Customer
satisfaction has gone up.

That combination is the entire point, and it is the opposite of what usually happens. Faster
normally means sloppier — you ship more, so you break more. Ours went the other way, and the
reason is unglamorous: the tedious part got cheap. Writing the tests, running them, checking
the deploy, reading the logs afterwards. When those stop costing a day of somebody's attention,
you stop skipping them. Most software defects I have seen were not caused by
someone being incapable. They were caused by a check that everyone agreed was a good idea and
nobody had time to do.

We delivered the **Security Association Singapore (SAS)** project this year. Their project
manager's words were that we were **"super fast."**

## Three at a time, and not four

Here is the shape of it in practice: our product lead now runs **three concurrent developments**
with AI.

Not seven, not ten, not "as many as we can take on." Three — and we stop there deliberately.

That number is not a technical ceiling. We could accept more work and the tooling would keep
up. It is a quality ceiling. Three is the most anyone can hold in their head properly
— knowing what each project is actually doing, where each one is fragile, what was decided last
week and why. Past that you stop directing the work and start rubber-stamping it, and the whole
advantage evaporates. The speed only means anything if someone is genuinely across the detail.

This is the discipline that makes the rest of it real. AI removes the constraint on *doing* the
work; it does not remove the constraint on *understanding* it. That second constraint is a
human one, and we would rather run into it on purpose than discover it in production.

## The commit history tells it better than I can

You do not have to take my word for the timeline.

It is visible in the contributor graph of one of our repositories — one that predates all of
this, so it spans the whole arc. The outgoing developer's commits by month run **36 in October
2025, then 1 in November, then stop.** My own first commit on that repository lands on
**10 January 2026.**

One developer stops. The product lead takes over. The product does not stall — it speeds up.
That is what the handover actually looked like, recorded by a tool nobody was trying to impress
at the time.

## The part that decides whether this works for you

Everything above is the easy half of the story. Here is the half that matters.

**This works because of expertise, and not the kind of expertise people usually mean.**

The standard advice is "keep a human in the loop to review the output." That is true and
almost useless. Reviewing output is the easy half — anyone senior can look at finished work and
say "that's wrong."

The half that actually matters is the intuition to know, **before you start**, where this
particular piece of work is likely to go wrong. Which part of the system will bite. Which
"done" will turn out not to be done. Which reasonable-looking shortcut the tool will take
because it has seen a thousand codebases where that shortcut was fine, and this is not one of
them. That instinct is not analysis. It is pattern recognition earned by having been burned by
the same class of problem before, and it lets you steer around the hole instead of reviewing
your way out of it afterwards.

Point these tools at someone who has never done the work themselves and you do not get a junior
developer who is now productive. You get confident, plausible, well-formatted wrongness — at
volume, and at speed. The output looks like the real thing. That is precisely the problem.

I have the scar tissue to prove it, and I am going to write about it. There is a list of
specific, expensive things that went wrong here: a fix that quietly deleted our best-ranking
page, a feature that passed seven tests while doing nothing at all on the actual device, a
command that reported success and had shipped nothing. Each one taught us a rule we now work
by. Those posts are coming, because the failures are more useful to you than the wins.

## One thing I am not saying

I am not saying offshore development was a mistake.

For years it was the only way a small Singapore software business could afford to build
anything serious. The local maths simply did not work: senior engineers here cost what they
cost, and an SME budget is what it is. Offshore was a rational answer to a real constraint, and
the people who did that work for us were good at it.

What changed is not that offshore development got worse. It is that the work came back
in-house — where I can see it, verify it, and fix it the same day.

If you run a small software business here and you are still sending development offshore
because the local maths never worked, that is the thing worth re-checking. The maths has
changed.
