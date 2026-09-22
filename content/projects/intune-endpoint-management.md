---
title: "Intune & Autopilot Endpoint Lab"
summary: "An Intune and Windows Autopilot endpoint management lab covering zero-touch deployment, compliance policy, and conditional access."
tags: ["Endpoint Management", "Windows", "Cloud"]
year: 2026
featured: false
order: 6
---

An endpoint management lab built around Microsoft Intune and Windows Autopilot, reproducing the device lifecycle and security policy work handled in production as endpoint and security policy administration at Janus Henderson.

The lab covers:

- **Intune enrolment** — devices joined to Azure AD and enrolled into Intune, with enrolment status pages configured so a new machine doesn't reach the desktop until policy has actually applied.
- **Windows Autopilot deployment profiles** — zero-touch provisioning profiles that take a device from out-of-box to fully configured without an admin sitting at the keyboard.
- **Compliance and device configuration policies** — baseline compliance rules (encryption, OS version, firewall state) paired with configuration profiles that push consistent settings across the fleet.
- **Conditional access with Azure AD** — access to mail and apps gated on device compliance and sign-in risk, not just username and password.
- **App deployment** — Microsoft 365 and line-of-business applications packaged and pushed through Intune rather than installed manually per device.
- **BitLocker and Windows Update rings** — disk encryption enforced by policy, with staged update rings so patches roll out in waves instead of all at once.

The result is a small but complete picture of the modern endpoint stack — the same policies and profiles that kept a real fleet of laptops compliant and provisioned without manual intervention.
