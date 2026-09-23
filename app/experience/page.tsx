import type { Metadata } from "next";
import { getProfile } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import Ticker from "@/components/Ticker";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Experience — Adnane Serroukh",
  description:
    "Five years of IT support experience across a Lloyd's managing agent, a global asset manager, and a multi-client MSP.",
};

export default function ExperiencePage() {
  const profile = getProfile();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <RevealOnScroll>
          <SectionHeading number="TIMELINE" title="Experience" />
        </RevealOnScroll>

        <div className="space-y-6">
          {profile.experience.map((job, i) => (
            <RevealOnScroll key={`${job.company}-${job.period}`} delay={0.05 * i}>
              <div className="border border-line bg-raised p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-display font-medium text-2xl md:text-3xl text-fg">
                    {job.role}
                    <span className="text-fg-muted"> — {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-orange whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-fg-muted mt-2">
                  {job.location}
                </p>
                <p className="mt-4 text-fg-muted leading-relaxed max-w-2xl">
                  {job.summary}
                </p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
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
      </section>

      <div className="border-t border-line bg-bg">
        <p className="mx-auto max-w-6xl px-6 md:px-10 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
          Routes I&apos;ve supported
        </p>
      </div>
      <Ticker items={["US", "EMEA", "APAC"]} />

      <CtaBand heading="Looking for someone with this coverage?" />
    </div>
  );
}
