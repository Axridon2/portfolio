import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
];

export default function Header() {
  return (
    <header className="print:hidden border-b border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.15em] text-fg hover:text-orange transition-colors"
        >
          <span className="text-orange">✶</span> Adnane Serroukh
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
