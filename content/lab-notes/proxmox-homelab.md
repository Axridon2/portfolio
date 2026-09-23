---
title: "Homelab architecture: a 6-node Proxmox cluster"
summary: "How the cluster is laid out, what runs where, and the maintenance principles that keep it quiet."
tag: "PROXMOX"
order: 1
---

## Overview

A 6-node Proxmox VE cluster is the infrastructure backbone behind every other project in this lab. It hosts dozens of LXC containers across the fleet, split by function rather than piled onto a single host.

## Cluster layout

- **Quorum** — an odd node count keeps quorum straightforward; no single node loss takes the cluster down.
- **Shared storage** — VM and container disks live on shared storage so workloads can migrate between nodes for maintenance without downtime.
- **Networking** — a dedicated VLAN separates cluster/corosync traffic from general LXC traffic, keeping heartbeat latency predictable.

## What runs on it

- **Hermes** — a self-hosted AI agent platform
- **Vaultwarden** — self-hosted password management
- **Nextcloud** — private file sync and storage
- **Kismet** — wireless intrusion detection sensors, see [Kismet WIDS](/lab-notes/kismet-wids)
- **Document OCR pipeline** — GPU-accelerated transcription and OCR, see [Document OCR pipeline](/lab-notes/document-ocr-pipeline)
- **Active Directory lab** — a full AD DS forest, see [Active Directory lab](/lab-notes/active-directory-lab)

## Maintenance principles

The cluster is run with the same discipline applied to production infrastructure at work: clear documentation, predictable maintenance windows, and infrastructure that stays quiet unless something actually needs attention. Each container is provisioned with a specific job, and changes are made deliberately rather than experimentally on live services.
