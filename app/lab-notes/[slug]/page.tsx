import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllLabNotes,
  getLabNoteBySlug,
  markdownToHtml,
  addHeadingIds,
  extractToc,
} from "@/lib/content";
import RevealOnScroll from "@/components/RevealOnScroll";
import DocsToc from "@/components/DocsToc";

export function generateStaticParams() {
  return getAllLabNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getLabNoteBySlug(slug);
  if (!note) return {};
  return {
    title: `${note.title} — Lab notes — Adnane Serroukh`,
    description: note.summary,
  };
}

export default async function LabNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getLabNoteBySlug(slug);
  if (!note) notFound();

  const notes = getAllLabNotes();
  const index = notes.findIndex((n) => n.slug === slug);
  const prev = index > 0 ? notes[index - 1] : undefined;
  const next = index < notes.length - 1 ? notes[index + 1] : undefined;

  const rawHtml = await markdownToHtml(note.body);
  const html = addHeadingIds(rawHtml);
  const toc = extractToc(note.body);

  return (
    <article className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <Link
          href="/lab-notes"
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-orange transition-colors"
        >
          ← All lab notes
        </Link>
      </RevealOnScroll>

      <div className="mt-8 grid md:grid-cols-[1fr_240px] gap-14">
        <div className="min-w-0">
          <RevealOnScroll>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">
              {note.tag}
            </span>
            <h1 className="mt-3 font-display font-medium text-3xl md:text-5xl text-fg">
              {note.title}
            </h1>
            <p className="mt-4 text-lg text-fg-muted max-w-xl">
              {note.summary}
            </p>

            <div
              className="prose-content mt-14 max-w-none text-fg/90 [&_h2]:font-display [&_h2]:font-medium [&_h2]:text-2xl [&_h2]:text-fg [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-28 [&_p]:mb-5 [&_p]:leading-relaxed [&_a]:text-orange [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_li]:mb-2 [&_strong]:text-fg"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </RevealOnScroll>

          <nav className="mt-16 pt-8 border-t border-line flex items-center justify-between gap-6">
            {prev ? (
              <Link
                href={`/lab-notes/${prev.slug}`}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-orange transition-colors"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/lab-notes/${next.slug}`}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-orange transition-colors text-right"
              >
                {next.title} →
              </Link>
            )}
          </nav>
        </div>

        <aside className="hidden md:block">
          <DocsToc entries={toc} />
        </aside>
      </div>
    </article>
  );
}
