import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProjects,
  getProjectBySlug,
  markdownToHtml,
} from "@/lib/content";
import RevealOnScroll from "@/components/RevealOnScroll";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Adnane Serroukh`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const html = await markdownToHtml(project.body);

  return (
    <article className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <Link
          href="/projects"
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-orange transition-colors"
        >
          ← All projects
        </Link>

        <div className="mt-8 flex items-baseline justify-between gap-6 flex-wrap">
          <h1 className="font-display font-medium text-4xl md:text-5xl text-fg">
            {project.title}
          </h1>
          <span className="font-mono text-sm text-fg-muted">
            {project.year}
          </span>
        </div>

        <p className="mt-4 text-lg text-fg-muted max-w-xl">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.link || project.repo) && (
          <div className="mt-6 flex gap-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange hover:text-fg transition-colors"
              >
                Visit →
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange hover:text-fg transition-colors"
              >
                Repository →
              </a>
            )}
          </div>
        )}

        <div
          className="prose-content mt-14 max-w-none text-fg/90 [&_p]:mb-5 [&_p]:leading-relaxed [&_a]:text-orange [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_li]:mb-2 [&_strong]:text-fg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </RevealOnScroll>
    </article>
  );
}
