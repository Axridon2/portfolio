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
          className={`text-xs uppercase tracking-wider px-4 py-2 border transition-colors ${
            activeTag === null
              ? "border-brass text-brass"
              : "border-line text-muted hover:text-paper"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs uppercase tracking-wider px-4 py-2 border transition-colors ${
              activeTag === tag
                ? "border-brass text-brass"
                : "border-line text-muted hover:text-paper"
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
          <p className="text-muted py-10">No projects tagged “{activeTag}” yet.</p>
        )}
      </div>
    </div>
  );
}
