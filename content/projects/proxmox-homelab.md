---
title: "Proxmox homelab"
summary: "A 6-node Proxmox VE cluster running dozens of LXC containers — the infrastructure backbone for every other project here."
tags: ["Infrastructure", "Linux", "Virtualisation"]
year: 2026
featured: true
order: 2
---

A 6-node Proxmox VE cluster forms the backbone of the homelab, hosting dozens of LXC containers across the fleet. It's the infrastructure everything else runs on.

Services currently running on the cluster include:

- **Hermes** — a self-hosted AI agent platform
- **Vaultwarden** — self-hosted password management
- **Nextcloud** — private file sync and storage
- **Kismet** — wireless intrusion detection sensors (see the [Kismet WIDS](/projects/kismet-wids) project)
- **Document OCR pipeline** — GPU-accelerated transcription and OCR (see the [Document OCR pipeline](/projects/document-ocr-pipeline) project)

The cluster is managed with an eye toward the same principles that guide the day job: clear documentation, predictable maintenance windows, and infrastructure that stays quiet unless something actually needs attention.
