---
slug: the-polish-pass
title: "The Polish Pass: A Round of UX Fixes That Make CairnHolm Feel Right"
authors: [earthbound]
tags: [ux, design, quality, improvements]
description: "Correct dates in every timezone, dark mode that stays dark, feedback on every action, and flows that never strand you — a quality pass across the whole app."
---

Big features get announcements. The work that actually determines whether an app feels trustworthy is smaller: does the screen show the right day, can you read the text, did that button press actually do anything?

We just finished a polish pass across CairnHolm focused on exactly that. None of these changes add a feature. All of them make the app behave the way you already assumed it did.

{/* truncate */}

## The right day, in your timezone

The daily loop status in the Basecamp header — the indicators showing whether you've logged your mood, rituals, workout, and journal today — now always uses *your* local date, computed on your device. Previously, if your timezone wasn't stored on the server, the header could fall back to UTC and show you yesterday's (or tomorrow's) status: a journal you wrote marked missing, a streak that looked broken when it wasn't.

We also fixed the root cause behind that missing timezone: some devices report a generic "UTC" fallback at login, and CairnHolm was letting that overwrite your real stored timezone every ten minutes. Now a real timezone, once stored, can't be clobbered by a generic fallback. Evening journalers in any timezone: your day boundary is your day boundary.

## Dark mode that stays dark

CairnHolm's color system intentionally inverts in dark mode — deep forest green becomes light sage. Useful for text; very wrong when that color is used in a gradient laid over a photo. The vacation page hero was the worst offender: in dark mode, the overlay washed out to pale sage, bleaching the photo and making the white text on top nearly unreadable.

Those overlays now stay properly dark in dark mode — on the vacation hero, the desktop split panel, and the treasury card hovers — and we softened the gradient intensity slightly while we were in there, so the photos breathe more in both themes. The new Strava import screen got the same dark-background treatment.

## Every action answers back

When you do something in CairnHolm, the app should tell you it worked. We audited every create and edit form in the app against that standard and fixed the gaps — most visibly, adding a sports team or athlete now confirms with a "Team / Athlete Added" toast instead of silently saving and leaving you wondering whether to tap again.

The flip side matters just as much: when something *fails*, you should know. The relationship setup wizard previously could fail to save your partner and proceed anyway, showing a success screen over an incomplete profile. It now verifies every step, surfaces a clear error message right above the navigation buttons, and never reports success it didn't earn.

## No more getting stranded

Two flows could previously trap you behind an animation or a broken redirect:

- **Onboarding completion** — if anything went wrong during the final "ascent" transition, the overlay stayed on screen forever with no error and no way forward. Now an error dismisses the animation and shows a toast; and if you chose to skip onboarding, you're taken to your dashboard regardless. The door always opens.
- **Connecting Strava** — the original connect flow could swap your signed-in session for a half-formed Strava identity and strand you back at onboarding. The integration flow was rebuilt so connecting an external account never touches your session: you leave, you authorize, you come back as yourself.

## Why we do these passes

A personal dashboard only works if you trust it — trust that the day shown is your day, that the entry you saved was saved, that an error will announce itself instead of hiding. Features earn the download; this kind of correctness earns the daily habit.

More of both coming.

[See what's new at CairnHolm.](https://cairnholm.com)
