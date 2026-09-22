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
          className="font-serif text-lg tracking-tight text-paper hover:text-brass transition-colors"
        >
          Adnane Serroukh
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-paper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
