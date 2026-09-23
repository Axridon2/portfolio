import Link from "next/link";
import { getFeaturedProjects } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import CaseStudyCard from "@/components/CaseStudyCard";
import TerminalHero from "@/components/TerminalHero";
import Ticker from "@/components/Ticker";
import FeaturePanel, { type Feature } from "@/components/FeaturePanel";
import CtaBand from "@/components/CtaBand";

const FEATURES: Feature[] = [
  {
    tag: "01 — ENDPOINT MANAGEMENT",
    title: "Endpoint Management",
    blurb:
      "Intune, Windows Autopilot and zero-touch deployment. Devices enrolled, compliant and patched without an admin at the keyboard.",
  },
  {
    tag: "02 — IDENTITY & ACCESS",
    title: "Identity & Access",
    blurb:
      "Active Directory, Entra ID and Okta. Access provisioned on least-privilege, conditional access gating risk, not just passwords.",
  },
  {
    tag: "03 — SERVICE DELIVERY",
    title: "Service Delivery",
    blurb:
      "ServiceNow incident and request management, SLA-driven triage, and documentation that means the next ticket goes faster than the last.",
  },
];

const ENVIRONMENTS = [
  "LLOYD'S MANAGING AGENT",
  "GLOBAL ASSET MANAGEMENT",
  "MULTI-CLIENT MSP",
];

export default function Home() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <div>
      <TerminalHero />

      <div className="border-b border-line bg-bg">
        <p className="mx-auto max-w-6xl px-6 md:px-10 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
          Environments supported
        </p>
      </div>
      <Ticker items={ENVIRONMENTS} />

      {/* Feature panels */}
      <section className="border-b border-line bg-dot-grid">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <RevealOnScroll>
            <SectionHeading number="CAPABILITIES" title="What I cover" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-5">
            {FEATURES.map((feature, i) => (
              <RevealOnScroll key={feature.title} delay={0.05 * i}>
                <FeaturePanel feature={feature} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case studies */}
      <section
        id="selected-work"
        className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28"
      >
        <RevealOnScroll>
          <SectionHeading number="CASE STUDIES" title="Featured work" />
        </RevealOnScroll>
        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={0.05 * i}>
              <CaseStudyCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={0.15}>
          <div className="mt-10">
            <Link
              href="/case-studies"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange hover:text-fg transition-colors"
            >
              View all case studies →
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <CtaBand
        heading="Let's build something that stays running."
        subheading="Permanent, contract or one-off — remote support, home visits and small business setup across London."
      />
    </div>
  );
}
