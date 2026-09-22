---
title: "Kismet WIDS"
summary: "A wireless intrusion detection system with monitor-mode sensors distributed across the homelab and watchdog-based alerting."
tags: ["Security", "Networking", "Automation"]
year: 2026
featured: true
order: 3
---

A wireless intrusion detection setup built on [Kismet](https://www.kismetwireless.net/), with monitor-mode sensors distributed across nodes in the [Proxmox homelab](/projects/proxmox-homelab) cluster.

Each sensor watches its local RF environment for rogue access points, deauthentication floods, and other signs of wireless interference or attack. A watchdog process keeps the sensors alive and pushes alerts when something needs a closer look, so the system runs unattended day to day while still surfacing anything genuinely worth investigating.

The project grew directly out of coursework in threat hunting and ethical hacking, turned into something that actually runs continuously rather than a one-off lab exercise.
