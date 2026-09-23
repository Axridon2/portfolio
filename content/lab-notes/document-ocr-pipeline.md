---
title: "A containerised OCR and transcription pipeline"
summary: "faster-whisper and OCR combined on a GPU node to turn paperwork and voice notes into searchable text."
tag: "OCR"
order: 5
---

## Overview

A containerised pipeline combining [faster-whisper](https://github.com/SYSTRAN/faster-whisper) for audio transcription with an OCR stage for scanned documents, running on a GPU-equipped node in the [Proxmox homelab](/lab-notes/proxmox-homelab).

## What it does

The pipeline takes in raw audio and scanned documents and produces searchable, structured text — useful for digitising paperwork and turning voice notes into something that can actually be searched and referenced later.

## Why containerised

Running the pipeline as a container on a dedicated GPU node keeps it isolated from the rest of the cluster while still making full use of the hardware when a job comes in. Jobs queue in, the container spins up the model, and results land back on shared storage — no GPU sitting idle the rest of the time affecting other services.
