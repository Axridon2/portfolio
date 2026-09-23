import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Hire me — Adnane Serroukh",
  description:
    "IT support and cyber security, available for permanent roles, contract work and freelance day-rate engagements.",
};

const ENGAGEMENT_MODELS = [
  {
    tag: "PERMANENT ROLE",
    title: "Permanent role",
    blurb:
      "Service desk, IT support or junior infrastructure roles. Five years across MSP, asset management and Lloyd's managing agent environments, ready to embed in an in-house team.",
  },
  {
    tag: "CONTRACT",
    title: "Contract",
    blurb:
      "Fixed-term or rolling contracts covering endpoint management, identity administration or service desk cover — including backfill for leave, projects or migrations.",
  },
  {
    tag: "FREELANCE DAY-RATE",
    title: "Freelance day-rate",
    blurb:
      "Short engagements for Intune/M365 tenant setup, AD cleanup, or one-off infrastructure projects, billed by the day with clear scope up front.",
  },
];

const WHAT_YOU_GET = [
  "Direct, plain-English communication — no jargon padding tickets to look busy",
  "Documentation left behind for every change, not tribal knowledge",
  "SLA-conscious triage: business-impacting issues first, always",
  "Comfortable across Windows, macOS and Linux, not just one stack",
  "A homelab habit of testing changes before they touch production",
];

export default function HireMePage() {
  return (
    <div>
      <section className="border-b border-line bg-dot-grid">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <RevealOnScroll>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange mb-6">
              AVAILABLE NOW
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl text-fg max-w-3xl leading-tight">
              IT support that stays quiet, and scales when you need it.
            </h1>
            <p className="mt-6 text-lg text-fg-muted max-w-2xl leading-relaxed">
              Five years across service desk, endpoint management and identity
              administration — for a Lloyd&apos;s managing agent, a global asset
              manager, and a multi-client MSP. Open to permanent roles,
              contract cover, and freelance day-rate work.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <RevealOnScroll>
          <SectionHeading number="ENGAGEMENT MODELS" title="How we can work together" />
        </RevealOnScroll>
        <div className="grid md:grid-cols-3 gap-5">
          {ENGAGEMENT_MODELS.map((model, i) => (
            <RevealOnScroll key={model.title} delay={0.05 * i}>
              <div className="border border-line bg-raised p-6 md:p-8 h-full">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">
                  {model.tag}
                </span>
                <h3 className="mt-4 font-display font-medium text-2xl text-fg">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm text-fg-muted leading-relaxed">
                  {model.blurb}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <RevealOnScroll>
            <SectionHeading number="WHAT YOU GET" title="What working with me looks like" />
          </RevealOnScroll>
          <ul className="max-w-2xl space-y-4">
            {WHAT_YOU_GET.map((item) => (
              <RevealOnScroll key={item}>
                <li className="flex items-start gap-3 text-fg-muted leading-relaxed">
                  <span className="text-orange mt-1 shrink-0">✶</span>
                  {item}
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        heading="Tell me what you need covered."
        subheading="Job opportunity, contract or freelance work — a short call is the fastest way to find out if it's a fit."
      />
    </div>
  );
}
