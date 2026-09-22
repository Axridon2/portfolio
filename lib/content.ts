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
