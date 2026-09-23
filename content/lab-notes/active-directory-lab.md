---
title: "Active Directory: forest, OUs, and tiered admin"
summary: "A full AD DS environment built to mirror five years of production directory administration."
tag: "AD"
order: 4
---

## Overview

A self-built Active Directory Domain Services lab on the [Proxmox homelab](/lab-notes/proxmox-homelab), standing up a forest and domain from scratch rather than clicking through a tutorial VM. The goal was to reproduce the shape of a real corporate directory — the kind administered day to day across five years of service desk and IT specialist roles — closely enough that the same muscle memory applies.

## Forest and OU design

A single forest with a domain structure planned around realistic growth rather than a flat default install. Organisational units are modelled on a real company structure, split by department and by admin tier, so delegation and GPO scope both map cleanly onto the business.

## Provisioning and access

- **User and group provisioning in PowerShell** — bulk account creation, group membership, and attribute population scripted end to end instead of done by hand through the GUI.
- **Security groups and access permissions** — role-based groups controlling file share and resource access, following least-privilege rather than ad hoc grants.
- **Delegated administration tiers** — tiered admin accounts and delegated OU control, mirroring a tiered-admin model rather than handing out Domain Admin by default.

Bulk provisioning from a CSV, rather than one account at a time:

```powershell
Import-Csv .\new-starters.csv | ForEach-Object {
    New-ADUser -Name $_.FullName `
        -SamAccountName $_.Username `
        -Path "OU=$($_.Department),OU=Users,DC=lab,DC=local" `
        -AccountPassword (ConvertTo-SecureString $_.TempPassword -AsPlainText -Force) `
        -Enabled $true -ChangePasswordAtLogon $true

    Add-ADGroupMember -Identity $_.SecurityGroup -Members $_.Username
}
```

## Policy, DNS/DHCP, and recovery

Group Policy objects cover drive mapping, password and account lockout policy, software restriction, and audit policy, each scoped to the OUs it's meant to govern. DNS and DHCP run alongside AD DS as they would in production, with scopes and zones kept in sync with the OU/department layout. System state backups are taken and authoritative/non-authoritative restore of AD is tested — a directory nobody can recover from is a liability.

## Note

It's a lab, not production — but every piece of it exists because it was a real, recurring part of the job, rebuilt here to keep the skills sharp and demonstrable.
