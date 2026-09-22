---
title: "Document OCR pipeline"
summary: "A containerised faster-whisper and OCR pipeline running on a GPU-equipped node for transcription and document digitisation."
tags: ["Automation", "AI"]
year: 2026
featured: true
order: 4
---

A containerised pipeline combining [faster-whisper](https://github.com/SYSTRAN/faster-whisper) for audio transcription with an OCR stage for scanned documents, running on a GPU-equipped node in the [Proxmox homelab](/projects/proxmox-homelab).

The pipeline takes in raw audio and scanned documents and produces searchable, structured text — useful for digitising paperwork and turning voice notes into something that can actually be searched and referenced later. Running it as a container on a dedicated GPU node keeps it isolated from the rest of the cluster while still making full use of the hardware when a job comes in.
