import Link from "next/link";
import { getProfile, getFeaturedProjects } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const profile = getProfile();
  const featured = getFeaturedProjects();

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-24 pb-28 md:pt-36 md:pb-40">
        <RevealOnScroll>
          <p className="font-mono text-sm text-brass tracking-[0.2em] mb-6">
            {profile.location}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-paper max-w-3xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted max-w-xl italic font-serif">
            {profile.tagline}
          </p>
        </RevealOnScroll>
      </section>

      {/* 01 Selected work */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <RevealOnScroll>
          <SectionHeading number="01" title="Selected work" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div>
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <div className="mt-10">
            <Link
              href="/projects"
              className="text-sm text-brass hover:text-paper transition-colors"
            >
              View all projects →
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* 02 Tooling */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <RevealOnScroll>
          <SectionHeading number="02" title="Tooling" />
        </RevealOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {profile.skills.map((group, i) => (
            <RevealOnScroll key={group.category} delay={0.05 * i}>
              <h3 className="font-serif text-xl text-paper mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 03 Experience */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <RevealOnScroll>
          <SectionHeading number="03" title="Experience" />
        </RevealOnScroll>
        <div className="max-w-2xl space-y-14">
          {profile.experience.map((job, i) => (
            <RevealOnScroll key={`${job.company}-${job.period}`} delay={0.05 * i}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-serif text-2xl text-paper">
                  {job.role}
                  <span className="text-muted"> — {job.company}</span>
                </h3>
              </div>
              <p className="mt-2 font-mono text-xs text-brass tracking-[0.15em]">
                {job.period} · {job.location}
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                {job.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted leading-relaxed pl-4 border-l border-line"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={0.1}>
          <p className="mt-10 text-sm text-muted max-w-xl">
            Full experience, education and contact details are on the{" "}
            <Link href="/cv" className="text-brass hover:text-paper transition-colors">
              CV page
            </Link>
            .
          </p>
        </RevealOnScroll>
      </section>

      {/* 04 About */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <RevealOnScroll>
          <SectionHeading number="04" title="About" />
        </RevealOnScroll>
        <div className="max-w-2xl space-y-6">
          {profile.about.map((paragraph, i) => (
            <RevealOnScroll key={i} delay={0.05 * i}>
              <p className="text-lg text-muted leading-relaxed">
                {paragraph}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 05 Contact CTA */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <RevealOnScroll>
          <SectionHeading number="05" title="Contact" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="text-lg text-muted max-w-xl mb-8">
            Full experience, education and contact details are on the CV
            page.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <Link
              href="/cv"
              className="inline-block border border-brass text-brass px-6 py-3 text-sm tracking-wide hover:bg-brass hover:text-ink transition-colors"
            >
              View CV
            </Link>
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-paper transition-colors"
              >
                GitHub
              </a>
            )}
            {profile.links.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-paper transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
