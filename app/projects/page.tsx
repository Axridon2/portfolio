import type { Metadata } from "next";
import { getAllProjects, getAllTags } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata: Metadata = {
  title: "Projects — Adnane Serroukh",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllTags();

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <SectionHeading number="—" title="Projects" />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <ProjectsFilter projects={projects} tags={tags} />
      </RevealOnScroll>
    </section>
  );
}
