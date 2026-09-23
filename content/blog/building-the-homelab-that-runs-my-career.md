---
title: "Building the homelab that runs my career"
summary: "Why a spare-parts Proxmox cluster turned into the place where every project I can point to actually lives."
date: "2026-08-14"
---

I didn't set out to build a homelab. I set out to stop losing track of the things I was learning.

Five years into IT support — service desk at Wanstor, then IT Specialist at Janus Henderson, now IT Support Analyst on a Lloyd's managing agent contract — the job teaches you a lot of things in fragments. You fix a permissions issue in Active Directory on Tuesday, enrol forty laptops through Autopilot on Wednesday, and by the following month the details of either have mostly evaporated unless you write them down or, better, rebuild them somewhere you control.

That's what the [Proxmox homelab](/case-studies/proxmox-homelab) became: a place to rebuild, deliberately, the pieces of the job worth keeping sharp.

## Starting with infrastructure, not services

The first real decision was to spend time on the cluster itself before anything running on it. Six nodes, shared storage, a dedicated VLAN for cluster traffic — not because a single-node install couldn't have hosted everything, but because a cluster with quorum, migration, and proper network separation is closer to what actually runs in production. If the goal is to keep production skills current, the lab has to behave like production, including the boring parts.

## The projects that came out of it

Once the cluster existed, projects stopped being one-off VMs and started being things that could live indefinitely, side by side:

- **[Active Directory lab](/case-studies/active-directory-lab)** — a full forest and OU hierarchy modelled on a real company structure, because reading about tiered admin is not the same as building it.
- **[Kismet WIDS](/case-studies/kismet-wids)** — wireless intrusion detection sensors that grew directly out of threat hunting and ethical hacking coursework at Kingston University, turned into something that runs continuously instead of a lab exercise that gets torn down after submission.
- **[Intune & Autopilot endpoint lab](/case-studies/intune-endpoint-management)** — reproducing zero-touch deployment and conditional access outside of a corporate tenant, so the muscle memory doesn't depend on still having admin access to one.
- **[Document OCR pipeline](/case-studies/document-ocr-pipeline)** — a genuinely useful side effect: a GPU-equipped node in the cluster now turns scanned paperwork and voice notes into searchable text.

None of these are exotic. That's rather the point — the value isn't novelty, it's that they're rebuilt closely enough to the real thing that the skills transfer directly back into the job.

## What "quiet" means to me

If there's a theme across all of it, it's that a well-run system is one you don't have to think about. The cluster stays up, the sensors keep watching, the backups get tested instead of just scheduled. That's the standard I hold the homelab to, and it's the same standard I try to hold service desk and endpoint work to — systems that stay quiet unless they genuinely need attention.

## What's next

There's more to document than I've written up so far — the AI agent platform running alongside Vaultwarden and Nextcloud on the same cluster is worth its own post, and I'd like to properly diagram the network layout rather than describe it in prose. Both are coming soon.

For now, the [lab notes](/lab-notes) section has the technical write-ups, and the [case studies](/case-studies) page has the project-level summaries if you want the shorter version.
