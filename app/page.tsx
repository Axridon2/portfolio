import Link from "next/link";
import { getProfile, getFeaturedProjects } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectCard from "@/components/ProjectCard";
import TerminalHero from "@/components/TerminalHero";
import Ticker from "@/components/Ticker";

export default function Home() {
  const profile = getProfile();
  const featured = getFeaturedProjects();

  return (
    <div>
      <TerminalHero />
      <Ticker />

      {/* Selected work */}
      <section
        id="selected-work"
        className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28"
      >
        <RevealOnScroll>
          <SectionHeading number="01 — SELECTED_WORK" title="Selected work" />
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
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange hover:text-fg transition-colors"
            >
              View all projects →
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* Tooling */}
      <section className="border-t border-line bg-dot-grid">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <RevealOnScroll>
            <SectionHeading number="02 — TOOLING" title="Tooling" />
          </RevealOnScroll>
          <div className="space-y-10">
            {profile.skills.map((group, i) => (
              <RevealOnScroll key={group.category} delay={0.05 * i}>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs uppercase tracking-[0.1em] border border-line bg-bg px-3 py-2 text-fg-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <RevealOnScroll>
          <SectionHeading number="03 — EXPERIENCE" title="Experience" />
        </RevealOnScroll>
        <div className="max-w-2xl border-l border-line">
          {profile.experience.map((job, i) => (
            <RevealOnScroll key={`${job.company}-${job.period}`} delay={0.05 * i}>
              <div className="relative pl-8 pb-14 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-orange" />
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-orange mb-2">
                  {job.period}
                </p>
                <h3 className="font-display font-medium text-2xl text-fg">
                  {job.role}
                  <span className="text-fg-muted"> — {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-fg-muted mt-1">
                  {job.location}
                </p>
                <p className="mt-4 text-fg-muted leading-relaxed">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-fg-muted leading-relaxed pl-4 border-l border-line"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={0.1}>
          <p className="mt-4 text-sm text-fg-muted max-w-xl">
            Full experience, education and contact details are on the{" "}
            <Link href="/cv" className="text-orange hover:text-fg transition-colors">
              CV page
            </Link>
            .
          </p>
        </RevealOnScroll>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <RevealOnScroll>
          <SectionHeading number="04 — ABOUT" title="About" />
        </RevealOnScroll>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <RevealOnScroll>
            <h3 className="font-display font-light text-3xl md:text-4xl text-fg leading-tight">
              Systems that stay quiet.
            </h3>
          </RevealOnScroll>
          <div className="space-y-6">
            {profile.about.map((paragraph, i) => (
              <RevealOnScroll key={i} delay={0.05 * i}>
                <p className="text-fg-muted leading-relaxed">{paragraph}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 border-t border-line">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange mb-6">
            05 — CONTACT <span className="mx-2">✶</span> GET IN TOUCH
          </p>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-fg max-w-2xl leading-tight">
            Let&apos;s build something that stays running.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="/cv"
              className="font-mono text-[11px] uppercase tracking-[0.15em] bg-orange text-fg px-6 py-3 hover:opacity-90 transition-opacity"
            >
              View CV
            </Link>
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
              >
                GitHub
              </a>
            )}
            {profile.links.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
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
