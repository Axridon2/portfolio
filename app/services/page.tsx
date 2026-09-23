import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import PricingCard, { type Tier } from "@/components/PricingCard";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services — Adnane Serroukh",
  description:
    "Remote support, home visits and small business IT setup in London. Transparent hourly and fixed pricing.",
};

const TIERS: Tier[] = [
  {
    name: "REMOTE SUPPORT",
    price: "£30",
    unit: "/ hr",
    description: "M365, email and ad-hoc issues, fixed remotely, same-day.",
    features: [
      "Microsoft 365 and email troubleshooting",
      "Software installs, updates and general fixes",
      "Same-day turnaround for most requests",
      "Billed in 30-minute increments",
    ],
  },
  {
    name: "HOME VISIT",
    price: "£60",
    unit: "/ hr · min 1h",
    description: "PC/laptop set-up, OS installs, printer and network set-up.",
    features: [
      "PC and laptop set-up or repair",
      "OS install and migration",
      "Printer and home network set-up",
      "London travel included, zones 1–3",
    ],
    highlight: true,
  },
  {
    name: "SMALL BUSINESS SETUP",
    price: "from £250",
    description: "Intune/M365 tenant set-up, device enrolment, handover docs.",
    features: [
      "Microsoft 365 and Intune tenant configuration",
      "Device enrolment and baseline policy",
      "Documentation handover for your team",
      "Scoped quote after a short discovery call",
    ],
  },
];

const FAQS: FaqItem[] = [
  {
    question: "What's the response time?",
    answer:
      "Remote support requests are usually picked up same-day. Home visits and small business setups are scheduled around availability — expect a reply within 24 hours to confirm timing.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Home visits cover London zones 1–3, included in the hourly rate. Further out is possible by arrangement — ask when you get in touch. Remote support has no geographic limit.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payment is taken after the work is completed and you're happy with it — no fix, no fee. Small business setups are quoted up front with payment on handover.",
  },
  {
    question: "How is my data protected?",
    answer:
      "Access is limited to what's needed for the job, credentials are never stored, and any temporary remote-access tools are closed at the end of the session. Nothing is logged or retained afterwards.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <RevealOnScroll>
          <SectionHeading number="PRICING" title="Services" />
        </RevealOnScroll>
        <div className="grid md:grid-cols-3 gap-5">
          {TIERS.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={0.05 * i}>
              <PricingCard tier={tier} />
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={0.2}>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
            + VAT where applicable · No fix, no fee · Payment after completion
          </p>
        </RevealOnScroll>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <RevealOnScroll>
            <SectionHeading number="FAQ" title="Questions" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <FaqAccordion items={FAQS} />
          </RevealOnScroll>
        </div>
      </section>

      <CtaBand heading="Get a quote for your setup." />
    </div>
  );
}
