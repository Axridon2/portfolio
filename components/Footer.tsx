import Link from "next/link";

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { href: "/services", label: "Remote support" },
      { href: "/services", label: "Home visit" },
      { href: "/services", label: "Small business" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/projects", label: "Projects" },
      { href: "/lab-notes", label: "Lab notes" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About me" },
      { href: "/experience", label: "Experience" },
      { href: "/book-a-call", label: "Book a call" },
      { href: "/cv", label: "CV" },
    ],
  },
];

export default function Footer({ location }: { location: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="print:hidden border-t border-line bg-dot-grid">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display font-medium text-xl text-fg hover:text-orange transition-colors"
            >
              AS.
            </Link>
            <p className="mt-3 font-mono text-[11px] leading-relaxed text-fg-muted max-w-[22ch]">
              IT support &amp; cyber security — systems that stay quiet.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
            <span>
              © {year} <span className="text-orange">✶</span> Adnane Serroukh
            </span>
            <span className="text-line">·</span>
            <span>{location}</span>
            <span className="text-line">·</span>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors"
            >
              GitHub
            </a>
            <span className="text-line">·</span>
            <a
              href="https://www.linkedin.com/in/adnane-serroukh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
            No cookies · No tracking
          </span>
        </div>
      </div>
    </footer>
  );
}
