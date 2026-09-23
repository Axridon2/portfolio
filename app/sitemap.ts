import type { MetadataRoute } from "next";
import { getAllProjects, getAllBlogPosts, getAllLabNotes } from "@/lib/content";

const SITE_URL = "http://localhost:3100";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/hire-me",
    "/services",
    "/lab-notes",
    "/resources",
    "/blog",
    "/case-studies",
    "/projects",
    "/about",
    "/experience",
    "/book-a-call",
    "/cv",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjects().map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllBlogPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(),
  }));

  const labNoteRoutes = getAllLabNotes().map((n) => ({
    url: `${SITE_URL}/lab-notes/${n.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes, ...labNoteRoutes];
}
