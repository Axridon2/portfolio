import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-raised border border-dashed border-raised-line px-6 py-6 md:px-8 md:py-8 mb-5 relative overflow-hidden transition-colors hover:border-orange"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ticked-line" />
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 md:gap-8">
        <div className="flex-1">
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display font-medium text-2xl md:text-3xl text-fg group-hover:text-orange transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-fg-muted max-w-xl">{project.summary}</p>
          <span className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted group-hover:text-orange transition-colors">
            Read case study →
          </span>
        </div>
        <span className="font-mono text-sm text-fg-muted shrink-0">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
