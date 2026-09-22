---
title: "Active Directory Lab"
summary: "A full AD DS environment on the homelab — forest design, OU hierarchy, GPOs, and delegated admin tiers built to mirror 5 years of production directory administration."
tags: ["Infrastructure", "Windows", "Active Directory"]
year: 2026
featured: true
order: 5
---

A self-built Active Directory Domain Services lab on the [Proxmox homelab](/projects/proxmox-homelab), standing up a forest and domain from scratch rather than clicking through a tutorial VM. The goal was to reproduce the shape of a real corporate directory — the kind administered day to day for 5 years as an IT Specialist at Janus Henderson — closely enough that the same muscle memory applies.

The lab includes:

- **Forest and domain design** — a single forest with a domain structure planned around realistic growth rather than a flat default install.
- **OU hierarchy** — organisational units modelled on a real company structure, split by department and by admin tier, so delegation and GPO scope both map cleanly onto the business.
- **User and group provisioning in PowerShell** — bulk account creation, group membership, and attribute population scripted end to end instead of done by hand through the GUI.
- **Security groups and access permissions** — role-based groups controlling file share and resource access, following least-privilege rather than ad hoc grants.
- **Group Policy objects** — drive mapping, password and account lockout policy, software restriction, and audit policy, each scoped to the OUs it's meant to govern.
- **DNS and DHCP** — running alongside AD DS as they would in production, with scopes and zones kept in sync with the OU/department layout.
- **Delegated administration tiers** — tiered admin accounts and delegated OU control, mirroring a tiered-admin model rather than handing out Domain Admin by default.
- **Backup and restore** — system state backups and tested authoritative/non-authoritative restore of AD, because a directory nobody can recover from is a liability.

It's a lab, not production — but every piece of it exists because it was a real, recurring part of the job, rebuilt here to keep the skills sharp and demonstrable.
