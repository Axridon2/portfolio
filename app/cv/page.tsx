import type { Metadata } from "next";
import { getProfile } from "@/lib/content";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "CV — Adnane Serroukh",
  description:
    "Printable CV for Adnane Serroukh — IT support specialist, London.",
};

export default function CvPage() {
  const profile = getProfile();

  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-20 print:py-0 print:px-0 print:max-w-none print:text-black">
      <div className="flex items-start justify-between gap-6 flex-wrap mb-10 print:hidden">
        <h1 className="font-display font-medium text-4xl text-fg">
          Curriculum Vitae
        </h1>
        <PrintButton />
      </div>

      <header className="mb-10 print:mb-6">
        <h2 className="font-display font-medium text-3xl md:text-4xl text-fg print:text-black print:text-xl print:font-sans print:font-bold">
          {profile.name}
        </h2>
        <div className="mt-3 font-mono text-sm text-fg-muted print:text-black print:font-sans space-y-1">
          <p>{profile.address}</p>
          <p>
            {profile.phone} · {profile.email}
          </p>
          <p>Languages: {profile.languages.join(", ")}</p>
        </div>
      </header>

      <section className="mb-12 print:mb-6">
        <h3 className="font-mono text-xs text-orange print:text-black tracking-[0.2em] uppercase mb-4 print:font-sans print:font-bold print:text-xs">
          Profile
        </h3>
        <div className="space-y-4 print:space-y-2">
          {profile.about.map((paragraph, i) => (
            <p
              key={i}
              className="text-fg-muted print:text-black leading-relaxed print:text-sm"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-12 print:mb-6">
        <h3 className="font-mono text-xs text-orange print:text-black tracking-[0.2em] uppercase mb-6 print:font-sans print:font-bold print:text-xs print:mb-3">
          Employment
        </h3>
        <div className="space-y-10 print:space-y-4">
          {profile.experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-display font-medium text-xl text-fg print:text-black print:text-base print:font-sans print:font-bold">
                  {job.role} — {job.company}
                </h4>
                <span className="font-mono text-xs text-fg-muted print:text-black">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-fg-muted print:text-black mt-1">
                {job.location}
              </p>
              <p className="mt-3 text-fg-muted print:text-black print:text-sm leading-relaxed">
                {job.summary}
              </p>
              <ul className="mt-3 space-y-1.5 print:space-y-1 list-disc pl-5">
                {job.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-fg-muted print:text-black print:text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 print:mb-6">
        <h3 className="font-mono text-xs text-orange print:text-black tracking-[0.2em] uppercase mb-6 print:font-sans print:font-bold print:text-xs print:mb-3">
          Education
        </h3>
        <div className="space-y-6 print:space-y-3">
          {profile.education.map((edu) => (
            <div key={edu.qualification}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-display font-medium text-lg text-fg print:text-black print:text-base print:font-sans print:font-bold">
                  {edu.qualification}
                </h4>
                <span className="font-mono text-xs text-fg-muted print:text-black">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-fg-muted print:text-black mt-1">
                {edu.institution}
              </p>
              {edu.detail && (
                <p className="mt-2 text-sm text-fg-muted print:text-black">
                  {edu.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-mono text-xs text-orange print:text-black tracking-[0.2em] uppercase mb-6 print:font-sans print:font-bold print:text-xs print:mb-3">
          Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 print:grid-cols-2 print:gap-y-3">
          {profile.skills.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm text-fg print:text-black font-medium mb-2 print:text-sm">
                {group.category}
              </h4>
              <p className="text-sm text-fg-muted print:text-black">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
