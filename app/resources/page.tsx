import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Resources — Adnane Serroukh",
  description: "Blog posts, case studies and projects.",
};

const CARDS = [
  {
    href: "/blog",
    tag: "WRITING",
    title: "Blog",
    blurb: "First-person write-ups on the homelab, the job, and what's next.",
  },
  {
    href: "/case-studies",
    tag: "PROJECTS, IN DEPTH",
    title: "Case studies",
    blurb: "Seven projects from the homelab, each with a full write-up.",
  },
  {
    href: "/projects",
    tag: "ALL WORK",
    title: "Projects",
    blurb: "The complete, filterable list of everything that's been built.",
  },
];

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <SectionHeading number="RESOURCES" title="Resources" />
      </RevealOnScroll>
      <div className="grid md:grid-cols-3 gap-5">
        {CARDS.map((card, i) => (
          <RevealOnScroll key={card.href} delay={0.05 * i}>
            <Link
              href={card.href}
              className="group block border border-line bg-raised p-6 md:p-8 h-full hover:border-orange transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">
                {card.tag}
              </span>
              <h3 className="mt-4 font-display font-medium text-2xl text-fg group-hover:text-orange transition-colors">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-fg-muted leading-relaxed">
                {card.blurb}
              </p>
              <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted group-hover:text-orange transition-colors">
                View →
              </span>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
