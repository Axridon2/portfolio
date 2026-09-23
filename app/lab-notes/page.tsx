import type { Metadata } from "next";
import Link from "next/link";
import { getAllLabNotes } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Lab notes — Adnane Serroukh",
  description:
    "Technical write-ups from the homelab: Proxmox, Active Directory, Intune, Kismet and OCR pipelines.",
};

export default function LabNotesPage() {
  const notes = getAllLabNotes();

  return (
    <section className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <SectionHeading number="DOCS" title="Lab notes" />
      </RevealOnScroll>
      <div className="border-t border-line">
        {notes.map((note, i) => (
          <RevealOnScroll key={note.slug} delay={0.03 * i}>
            <Link
              href={`/lab-notes/${note.slug}`}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-line hover:border-orange transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange w-28 shrink-0">
                {note.tag}
              </span>
              <div className="flex-1">
                <h3 className="font-display font-medium text-xl text-fg group-hover:text-orange transition-colors">
                  {note.title}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">{note.summary}</p>
              </div>
              <span className="font-mono text-xs text-fg-muted shrink-0">→</span>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
