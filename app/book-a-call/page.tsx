import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Book a call — Adnane Serroukh",
  description:
    "Get in touch about a job opportunity, freelance work, or IT support — by email or message.",
};

export default function BookACallPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange mb-6">
          GET IN TOUCH
        </p>
        <h1 className="font-display font-medium text-4xl md:text-6xl text-fg max-w-2xl leading-tight">
          Book a call.
        </h1>
        <p className="mt-6 text-lg text-fg-muted max-w-xl leading-relaxed">
          Job opportunity, freelance work, or IT support — send a message and
          I&apos;ll reply directly.
        </p>
      </RevealOnScroll>

      <div className="mt-16 grid md:grid-cols-[1fr_320px] gap-14">
        <RevealOnScroll delay={0.05}>
          <ContactForm />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="border border-line bg-raised p-6 space-y-6">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted mb-2">
                Email
              </h3>
              <a
                href="mailto:adnaneserroukh@outlook.com"
                className="text-orange hover:text-fg transition-colors break-all"
              >
                adnaneserroukh@outlook.com
              </a>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted mb-2">
                Calendar
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted border border-dashed border-line px-3 py-2">
                Pending — calendar link coming soon
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted mb-2">
                Based in
              </h3>
              <p className="text-fg-muted">London, UK</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
