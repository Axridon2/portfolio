---
title: "Intune & Autopilot endpoint management"
summary: "Zero-touch deployment, compliance policy, and conditional access, reproducing production endpoint management."
tag: "INTUNE"
order: 3
---

## Overview

An endpoint management lab built around Microsoft Intune and Windows Autopilot, reproducing the device lifecycle and security policy work handled as endpoint and security policy administration at Janus Henderson Investors.

## Enrolment

Devices are joined to Azure AD and enrolled into Intune, with enrolment status pages configured so a new machine doesn't reach the desktop until policy has actually applied.

## Deployment profiles

Windows Autopilot deployment profiles take a device from out-of-box to fully configured without an admin sitting at the keyboard — zero-touch provisioning end to end.

## Compliance and configuration

Baseline compliance rules (encryption, OS version, firewall state) are paired with configuration profiles that push consistent settings across the fleet. Conditional access in Azure AD then gates access to mail and apps on device compliance and sign-in risk, not just username and password.

## App deployment and patching

Microsoft 365 and line-of-business applications are packaged and pushed through Intune rather than installed manually per device. BitLocker is enforced by policy, and staged Windows Update rings roll patches out in waves instead of all at once.

Checking a device's compliance state directly via Graph is often faster than opening the console:

```powershell
Connect-MgGraph -Scopes "DeviceManagementManagedDevices.Read.All"

Get-MgDeviceManagementManagedDevice -Filter "operatingSystem eq 'Windows'" |
    Where-Object { $_.ComplianceState -ne "compliant" } |
    Select-Object DeviceName, ComplianceState, LastSyncDateTime
```

## Result

A small but complete picture of the modern endpoint stack — the same policies and profiles that kept a real fleet of laptops compliant and provisioned without manual intervention.
