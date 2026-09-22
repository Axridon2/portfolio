---
title: "M365 & Azure AD Administration Toolkit"
summary: "A PowerShell toolkit for the repeatable M365 and Azure AD service-desk work — licensing, mailbox provisioning, permission audits, and offboarding."
tags: ["Automation", "PowerShell", "Cloud"]
year: 2026
featured: false
order: 7
---

A PowerShell toolkit built to automate the repeatable service-desk administration handled on the Microsoft 365 and Azure AD stack while on the Wanstor service desk — the kind of task that's simple once but expensive to do by hand a hundred times.

The toolkit handles:

- **Bulk licence assignment** — group-based and scripted licence assignment across M365 SKUs, instead of applying licences one user at a time in the admin centre.
- **Mailbox provisioning on Exchange Online** — new mailbox creation, distribution list and shared mailbox membership, and mailbox permission grants scripted against Exchange Online PowerShell.
- **Permission and role audits on Azure AD** — scripts that enumerate directory role membership and app permissions, flagging accounts with more access than their job actually needs.
- **Offboarding checklist automation** — account disable, licence removal, mailbox conversion, and group membership cleanup run as a single scripted checklist rather than a manual runbook.
- **Reporting** — scheduled exports covering licence usage, mailbox size, and role assignments, so the state of the tenant is visible without logging into every console by hand.

None of it is exotic — it's the same Exchange Online and Azure AD administration done on the service desk daily, packaged into scripts so it can be verified, reused, and demonstrated outside of that environment.
