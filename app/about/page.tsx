import type { Metadata } from "next";
import { getProfile } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About — Adnane Serroukh",
  description:
    "IT support specialist based in London — background, education, languages, and what runs outside of work.",
};

export default function AboutPage() {
  const profile = getProfile();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <RevealOnScroll>
          <SectionHeading number="ABOUT" title="About me" />
        </RevealOnScroll>

        <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
          <RevealOnScroll>
            <div className="aspect-square border border-line flex items-center justify-center bg-raised">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted text-center px-4">
                Portrait — coming soon
              </span>
            </div>
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

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <RevealOnScroll>
            <SectionHeading number="EDUCATION" title="Education" />
          </RevealOnScroll>
          <div className="max-w-2xl border-l border-line">
            {profile.education.map((edu, i) => (
              <RevealOnScroll key={edu.qualification} delay={0.05 * i}>
                <div className="relative pl-8 pb-12 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-orange" />
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-orange mb-2">
                    {edu.period}
                  </p>
                  <h3 className="font-display font-medium text-xl text-fg">
                    {edu.qualification}
                  </h3>
                  <p className="font-mono text-xs text-fg-muted mt-1">
                    {edu.institution}
                  </p>
                  {edu.detail && (
                    <p className="mt-3 text-sm text-fg-muted leading-relaxed">
                      {edu.detail}
                    </p>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16">
          <RevealOnScroll>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-4">
              Languages
            </h3>
            <ul className="space-y-2">
              {profile.languages.map((lang) => (
                <li key={lang} className="text-fg-muted">
                  {lang}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-4">
              Outside work
            </h3>
            <p className="text-fg-muted leading-relaxed">
              A 6-node Proxmox homelab, self-hosted services (Vaultwarden,
              Nextcloud), and a habit of building open-source-adjacent side
              projects to keep the muscle memory sharp between tickets.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <CtaBand heading="Want the full picture?" subheading="Experience, skills and education in one place." />
    </div>
  );
}
