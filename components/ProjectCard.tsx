import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-t border-line py-8 first:border-t-0 md:first:border-t md:py-10"
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 md:gap-8">
        <div className="flex-1">
          <h3 className="font-serif text-2xl md:text-3xl text-paper group-hover:text-brass transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-muted max-w-xl">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wider text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="font-mono text-sm text-muted shrink-0">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
