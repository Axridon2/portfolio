import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type Education = {
  qualification: string;
  institution: string;
  period: string;
  detail?: string;
};

export type Links = {
  github?: string;
  linkedin?: string;
};

export type Profile = {
  name: string;
  tagline: string;
  location: string;
  address: string;
  email: string;
  phone: string;
  links: Links;
  languages: string[];
  about: string[];
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
};

export function getProfile(): Profile {
  const file = fs.readFileSync(path.join(contentDir, "profile.md"), "utf8");
  const { data } = matter(file);
  return data as Profile;
}

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  tags: string[];
  year: number;
  featured: boolean;
  link?: string;
  repo?: string;
  image?: string;
  order: number;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  body: string;
};

function readProjectFile(filename: string): Project {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(
    path.join(contentDir, "projects", filename),
    "utf8",
  );
  const { data, content } = matter(raw);
  return { ...(data as ProjectFrontmatter), slug, body: content };
}

export function getAllProjects(): Project[] {
  const dir = path.join(contentDir, "projects");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map(readProjectFile).sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllProjects().forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

export type TocEntry = {
  text: string;
  slug: string;
};

export function extractToc(markdown: string): TocEntry[] {
  const headingPattern = /^##\s+(.+)$/gm;
  const entries: TocEntry[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingPattern.exec(markdown)) !== null) {
    const text = match[1].trim();
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    entries.push({ text, slug });
  }
  return entries;
}

export type LabNoteFrontmatter = {
  title: string;
  summary: string;
  tag: string;
  order: number;
};

export type LabNote = LabNoteFrontmatter & {
  slug: string;
  body: string;
};

function readLabNoteFile(filename: string): LabNote {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(
    path.join(contentDir, "lab-notes", filename),
    "utf8",
  );
  const { data, content } = matter(raw);
  return { ...(data as LabNoteFrontmatter), slug, body: content };
}

export function getAllLabNotes(): LabNote[] {
  const dir = path.join(contentDir, "lab-notes");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map(readLabNoteFile).sort((a, b) => a.order - b.order);
}

export function getLabNoteBySlug(slug: string): LabNote | undefined {
  return getAllLabNotes().find((n) => n.slug === slug);
}

export type BlogFrontmatter = {
  title: string;
  summary: string;
  date: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  body: string;
};

function readBlogFile(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(contentDir, "blog", filename), "utf8");
  const { data, content } = matter(raw);
  return { ...(data as BlogFrontmatter), slug, body: content };
}

export function getAllBlogPosts(): BlogPost[] {
  const dir = path.join(contentDir, "blog");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files
    .map(readBlogFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}

export function addHeadingIds(html: string): string {
  return html.replace(/<h2>(.*?)<\/h2>/g, (_match, text: string) => {
    const plain = text.replace(/<[^>]+>/g, "");
    const slug = plain
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    return `<h2 id="${slug}">${text}</h2>`;
  });
}
