import Link from "next/link";

export default function Footer({ location }: { location: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="print:hidden border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
          <span>
            © {year} Adnane Serroukh
          </span>
          <span className="text-orange">✶</span>
          <span>{location}</span>
        </div>
        <nav className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em]">
          <Link href="/" className="text-fg-muted hover:text-fg transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-fg-muted hover:text-fg transition-colors">
            Projects
          </Link>
          <Link href="/cv" className="text-fg-muted hover:text-fg transition-colors">
            CV
          </Link>
        </nav>
      </div>
    </footer>
  );
}
