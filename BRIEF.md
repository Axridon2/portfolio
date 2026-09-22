# Project: Adnane Serroukh — Personal Portfolio / CV Site

## Who this is for
Adnane Serroukh — UK-based IT professional (cyber security background, see CV below). He wants a
personal portfolio page to display his projects and experience. You are building the
**architecture/foundation**: a complete, working, extendable site he can grow into.

## Stack (do not substitute)
- Next.js 15 App Router + TypeScript + Tailwind CSS
- Content = markdown files in `content/` (frontmatter + body) read with gray-matter — NO database, NO cloud services
- framer-motion for subtle scroll reveals only (once: true), nothing gimmicky

## Content — SOURCE OF TRUTH
`/tmp/cv-extract.md` — Adnane's real CV. Use it for `/cv` and the About/experience content.
The contact details (phone, email, address) go ONLY on the `/cv` print view, not the public homepage.

## Design reference
`https://test.axridon.com/` — match its design language:
- Dark editorial: near-black background (#0a0a0b), off-white text, ONE accent (warm brass #c9a961)
- Editorial serif display font (Fraunces or Playfair Display via next/font) + neutral sans body (Inter)
- Oversized serif headlines, numbered sections ("01 — Selected work"), asymmetric editorial grids
- Generous whitespace; NO emojis, NO gradients, NO card shadows, NO text-shadow overlays
- Footer style: "© 2026 Adnane Serroukh" + location

## Pages
- `/` — hero (name + tagline "IT & cyber security — systems that stay quiet"), numbered sections:
  01 Selected work (featured projects), 02 Tooling (skills from CV, grouped), 03 About (from CV profile,
  homelab mention is fine — he runs a real Proxmox cluster), 04 Contact CTA
- `/projects` — all projects, filterable by tag
- `/projects/[slug]` — detail page rendering markdown body
- `/cv` — printable CV view built strictly from `/tmp/cv-extract.md` content + a print stylesheet + print button

## Content model
- `content/profile.md` — frontmatter: name, tagline, location, email, phone, links (github/linkedin placeholders), about[], skills[] (category+items), experience[] (role/company/period/location/summary/highlights), education[]
- `content/projects/<slug>.md` — frontmatter: title, summary, tags[], year, featured(bool), link, repo, image (optional, under /public/projects/), order; body = markdown description

## Seed projects (write these as markdown files — real things Adnane has built/runs)
1. "Proxmox homelab" — 6-node Proxmox VE cluster running dozens of LXCs (Hermes AI agent platform,
   Vaultwarden, Nextcloud, Kismet wireless IDS, OCR pipeline); tags: [Infrastructure, Linux, Virtualisation]
2. "Kismet WIDS" — wireless intrusion detection with monitor-mode sensors across nodes, watchdog alerting;
   tags: [Security, Networking, Automation]
3. "Document OCR pipeline" — faster-whisper + OCR pipeline containerised on GPU node; tags: [Automation, AI]
4. "Strive (Android)" — Android app built and maintained from a synced monorepo; tags: [Mobile, TypeScript]
(He can edit/replace these markdown files anytime — that is the point of the content layer.)

## Non-goals
- No admin UI, no auth, no analytics, no external DB, no CMS service
- Keep it deployable with `npm run build && npm start` on a plain Debian LXC

## Done means
- `npm run build` passes with zero errors
- All pages render with real CV content (not lorem ipsum, not fictional jobs)
- `npm run start` serves on :3100 — verify with curl
