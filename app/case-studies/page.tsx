import type { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Case studies — Adnane Serroukh",
  description:
    "Seven projects from the homelab — infrastructure, security, automation and mobile — each with a full write-up.",
};

export default function CaseStudiesPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <SectionHeading number="CASE STUDIES" title="Case studies" />
      </RevealOnScroll>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={0.04 * i}>
            <CaseStudyCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
