import type { TocEntry } from "@/lib/content";

export default function DocsToc({ entries }: { entries: TocEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted mb-4">
        On this page
      </p>
      <ul className="space-y-2.5 border-l border-line">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <a
              href={`#${entry.slug}`}
              className="block pl-4 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-muted hover:text-orange transition-colors"
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
