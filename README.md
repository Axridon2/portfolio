# Adnane Serroukh — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS. Content lives as markdown
in `content/` (frontmatter read with `gray-matter`) — no database, no external
services.

## Structure

- `content/profile.md` — name, tagline, about, skills, experience, education
- `content/projects/*.md` — one file per project (frontmatter + markdown body)
- `app/` — `/` home, `/projects` listing with tag filter, `/projects/[slug]`
  detail, `/cv` printable CV

To add or edit a project, add/edit a markdown file in `content/projects/`.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start   # serves on :3100
```
