---
layout: layouts/post.njk
title: "AI-assisted software development in Singapore: what it actually looks like"
description: Most vendors in Singapore saying "AI-assisted software development" mean autocomplete. Here is the arrangement that actually changes delivery speed — bounded agents, verification against ground truth, human sign-off — and the work where it does not help at all.
date: 2026-09-18
readingTime: 7
tags: posts
draft: false
---

Ask three software vendors in Singapore whether they do AI-assisted software development and
all three will say yes. One of them means an engineer has Copilot switched on. One means they
used ChatGPT to draft a schema. One means whole stages of the build run unattended under written
conditions, with a verification gate that has authority to fail the work.

Those are not degrees of the same thing. The first two change how fast code gets typed. Only the
third changes what a project costs and how long it takes, and it is the only one worth asking a
vendor about — because it is also the only one that introduces a new way to be badly wrong.

## The question that separates them

Not "do you use AI." Ask instead: **which decisions does the tool hold, and what checks it?**

Autocomplete holds no decisions. It proposes, the engineer accepts, and the engineer remains
the author of every line. That is genuinely useful and it is not nothing. But typing was never
the bottleneck on an SME project. The bottleneck was the specification round-trip, the rework
when an assumption turned out wrong, and the checks everybody agreed were a good idea and
nobody had time to do.

A tool that types faster does not touch any of those. That is the whole reason "we use Copilot"
produces a delivery calendar that looks exactly like last year's.

{% include "infographics/ai-assisted-dev.njk" %}

## What a delegated stage actually involves

The version that moves the calendar is not a better autocomplete. It is handing an agent a whole
stage of work — the implementation, the tests, the migration, the log-reading afterwards — under
conditions written down in advance.

Written down is the load-bearing part. Before an agent runs a lane, somebody has specified what
it may decide on its own, and where it must stop and come back. That boundary is the actual
deliverable of the planning work. An agent that can only ever do the thing it was delegated is
worth more than a general one, in the same way a contractor with a written scope is worth more
than one who improvises — and the [decision-rights model we run our own operations
on](/blog/ai-that-runs-a-whole-company/) is the same idea applied to the business rather than
the codebase.

This is where the honest admission belongs. Writing the boundary down is unglamorous, it happens
before anything visible gets built, and it is the part that most "AI-powered" pitches skip
entirely. Skip it and you do not get a faster team. You get output nobody has agreed the shape
of.

## Then something that is not the agent has to answer

Here is the failure mode that makes AI-assisted software development genuinely more dangerous
than the conventional kind, and any vendor who will not discuss it has not run into it yet.

Agents write good tests. Thorough, well-named, fast. The tests pass. And a passing test suite is
not evidence that the feature works — it is evidence that the code path the test could reach
behaved as the test expected. Those are different claims, and the gap between them is where
[our own most expensive failure](/blog/ai-code-passes-tests-but-doesnt-work/) lived for nineteen
days: a feature shipped green, on hardware where it had never once worked.

So the rule the whole arrangement hangs on is one sentence: **nothing an agent claims is trusted
until it is verified from something the agent does not control.**

Not "the agent said the deploy succeeded" — the health endpoint answered. Not "the agent said
the tests pass" — the tests ran somewhere outside the agent's reach. Not "the agent said the
torch lights" — somebody held the device.

The dominant theme in our own recorded incidents is not a reckless agent or a hallucinated plan.
It is narrower and more embarrassing: *the tool reported success and was wrong.* A confident
false report costs more than a visible failure does, because a visible failure gets fixed that
afternoon and a false success gets built on for a month.

Which is why verification is not overhead bolted onto the speed. It is the thing that converts
speed into delivery rather than into rework.

## And a human still signs off

The last stage does not move. An engineer reads the diff and owns what ships.

That sounds like it should cancel out the gain, and it does not, because the reviewer is no
longer also the author. Reviewing work you did not write, against a boundary written before it
started, with an independent check already run — that is a fundamentally cheaper and more honest
review than the one where you re-read your own morning.

The gain is real and it is ours to claim, not a study: we ship bug fixes and change requests
**five to seven times faster** than we did under our previous offshore arrangement, on our own
delivery calendar. Testing before deployment got more extensive, not less, because the tedious
part became cheap enough to stop skipping. Error rate went down; customer satisfaction went up.
The usual trade-off — faster means sloppier — did not happen, because the constraint that used
to force corners to be cut was people-hours, and that is not the constraint anymore. We
delivered the **Security Association Singapore (SAS)** project this year; their project
manager's words were that we were **"super fast."**

## Where the new constraint sits

Agents removed a limit on doing. They did not remove the limit on understanding.

We run three concurrent developments, not four. Three is what one person can hold in their head
properly — knowing what each project is actually doing, where each one is fragile, what was
decided last week and why. Past that you stop directing the work and start rubber-stamping it,
and the advantage evaporates. That cap is a quality ceiling we impose deliberately, not a
technical one we ran into.

It also means the honest unit of capacity for a studio working this way is attention, not
headcount. Anyone quoting you AI-assisted delivery in terms of how many agents they run is
quoting the wrong number.

## When this does not help

Worth being plain about, because the pitch decks never are.

**When nobody can say what "correct" means.** If the work cannot be checked against something
external — no endpoint, no device, no reconciliation, no expert who will look at the output and
know — then delegation has nowhere to land. You do not get speed; you get unverified volume,
which is worse than slow.

**When the scope is genuinely unknown.** Early discovery, where the real task is deciding what
to build at all, is judgement work. Agents make the information better — pull the history, lay
out the options — and should not hold the call.

**When the problem is the process, not the hours.** If a project is stalled because three
departments disagree about what they asked for, faster building makes the disagreement more
expensive, not less. Fix the specification, then bring the tooling.

**When the work is small and well-specified and you have hands already.** A one-week change on a
system your existing team knows well does not need a new delivery model.

## What we do

NEXT3LABS is an AI-powered engineering studio in Singapore. We are a small expert team, and we
build and run bespoke software for SMEs using AI-assisted software development as the delivery
model rather than as a feature — whole stages delegated to agents under written boundaries,
every claim verified against ground truth, an engineer signing off on what ships. We run our own
operations the same way, which is why the arguments here are not theoretical, including the
parts that have cost us.

If you are evaluating a vendor on this, the useful questions are not about which model they use.
Ask which stages run unattended. Ask what checks the agent's claims, and who owns it. Ask what
they will not delegate. A studio that cannot answer the third question has not thought about the
first two.

*If you want a second opinion on whether your project is a fit for this — including an honest
"not really" — the [contact page](/contact/) is a real person, and the conversation costs
nothing.*
