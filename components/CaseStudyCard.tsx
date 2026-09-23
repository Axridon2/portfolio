import Link from "next/link";
import type { Project } from "@/lib/content";

export default function CaseStudyCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-line bg-raised p-6 md:p-8 relative overflow-hidden transition-colors hover:border-orange"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ticked-line" />
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display font-medium text-xl md:text-2xl text-fg group-hover:text-orange transition-colors">
        {project.title}
      </h3>
      <p className="mt-3 text-sm text-fg-muted leading-relaxed">
        {project.summary}
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted group-hover:text-orange transition-colors">
          Read case study →
        </span>
        <span className="font-mono text-xs text-fg-muted">{project.year}</span>
      </div>
    </Link>
  );
}
