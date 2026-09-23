---
title: "Wireless intrusion detection with Kismet"
summary: "Monitor-mode sensors distributed across the homelab, with watchdog alerting so it runs unattended."
tag: "KISMET"
order: 2
---

## Overview

A wireless intrusion detection setup built on [Kismet](https://www.kismetwireless.net/), with monitor-mode sensors distributed across nodes in the [Proxmox homelab](/lab-notes/proxmox-homelab) cluster.

## Sensor design

Each sensor runs its wireless adapter in monitor mode and watches its local RF environment continuously, rather than polling on a schedule. Distributing sensors across multiple nodes gives overlapping coverage instead of a single point of failure.

## What it watches for

- Rogue access points impersonating known SSIDs
- Deauthentication and disassociation floods
- Unusual probe request patterns consistent with reconnaissance

## Keeping it running unattended

A watchdog process supervises each sensor, restarting it if the capture process dies or the adapter drops out of monitor mode. Alerts are pushed only when something is genuinely worth a closer look, which keeps the signal-to-noise ratio high enough that the system can run unattended day to day.

## Origins

The project grew directly out of coursework in threat hunting and ethical hacking during the Cyber Security & Digital Forensics degree at Kingston University, turned into something that runs continuously rather than a one-off lab exercise.
