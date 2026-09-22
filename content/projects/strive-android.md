---
title: "Strive (Android)"
summary: "A flagship personal Android app — offline-first prayer, Qur'an, and habit tracking built native in Kotlin and Compose."
tags: ["Mobile", "Kotlin"]
year: 2026
featured: true
order: 1
---

Strive (`com.axridon.strive`) is a flagship personal Android app, currently at v1.0.5 as a signed release build. It's written natively in Kotlin with Jetpack Compose, targets minSdk 26, and lives in a single module designed to run offline-first: Room for local storage, WorkManager for scheduled reminders, DataStore for preferences, and Retrofit/OkHttp reserved for the one thing that actually needs the network — pulling prayer times from the [Aladhan](https://aladhan.com/prayer-times-api) API.

The app is built around a handful of focused features:

- **Prayer times** — the five daily prayers, with exact-alarm notifications and simple done-tracking as each one is completed.
- **Qur'an reader** — a bundled 604-page dataset with Arabic, transliteration, and English tabs, plus a 30-day reading plan that ties progress to completed prayers.
- **Istighfar counter** — a daily counter toward a target of 1000, with haptic feedback and scheduled sessions.
- **Calisthenics plan** — a structured bodyweight workout plan.
- **Water and step trackers** — a 5-litre daily water target alongside step tracking.
- **Habit streaks** — daily streak tracking across the app's habits.

Strive also doubles as an experiment in AI-assisted development: a Kimi-generated design spec, a first-pass implementation from GLM, and iterative review/fix loops with Claude Code to bring it to a shippable state. It's built and signed from a monorepo kept in sync across two homelab nodes, so development can move between machines without losing state.
