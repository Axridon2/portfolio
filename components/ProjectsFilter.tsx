"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/content";

export default function ProjectsFilter({
  projects,
  tags,
}: {
  projects: Project[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [projects, activeTag]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-14">
        <button
          onClick={() => setActiveTag(null)}
          className={`font-mono text-[11px] uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
            activeTag === null
              ? "border-orange text-orange"
              : "border-line text-fg-muted hover:text-fg"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`font-mono text-[11px] uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
              activeTag === tag
                ? "border-orange text-orange"
                : "border-line text-fg-muted hover:text-fg"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div>
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {filtered.length === 0 && (
          <p className="text-fg-muted py-10">
            No projects tagged “{activeTag}” yet.
          </p>
        )}
      </div>
    </div>
  );
}
