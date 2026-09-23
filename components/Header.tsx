"use client";

import Link from "next/link";
import { useState } from "react";
import NavDropdown from "@/components/NavDropdown";

const RESOURCES_ITEMS = [
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/projects", label: "Projects" },
];

const ABOUT_ITEMS = [
  { href: "/about", label: "About me" },
  { href: "/experience", label: "Experience" },
];

const MOBILE_LINKS = [
  { href: "/hire-me", label: "Hire me" },
  { href: "/services", label: "Services" },
  { href: "/lab-notes", label: "Lab notes" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About me" },
  { href: "/experience", label: "Experience" },
  { href: "/cv", label: "CV" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="print:hidden border-b border-line sticky top-0 z-50 bg-bg/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-display font-medium text-xl text-fg hover:text-orange transition-colors"
        >
          AS.
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
            adnane serroukh
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/hire-me"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
          >
            Hire me
          </Link>
          <Link
            href="/services"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
          >
            Services
          </Link>
          <Link
            href="/lab-notes"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
          >
            Lab notes
          </Link>
          <NavDropdown label="Resources" items={RESOURCES_ITEMS} />
          <NavDropdown label="About" items={ABOUT_ITEMS} />
          <a
            href="https://github.com/Axridon2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
          >
            GitHub
          </a>
          <Link
            href="/book-a-call"
            className="font-mono text-[11px] uppercase tracking-[0.15em] bg-orange text-fg px-5 py-2.5 hover:opacity-90 transition-opacity"
          >
            Book a call
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden font-mono text-xs uppercase tracking-[0.15em] text-fg border border-line px-3 py-2"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-line px-6 py-6 flex flex-col gap-4"
        >
          {MOBILE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/Axridon2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
          >
            GitHub
          </a>
          <Link
            href="/book-a-call"
            onClick={() => setMobileOpen(false)}
            className="font-mono text-xs uppercase tracking-[0.15em] bg-orange text-fg px-5 py-3 text-center hover:opacity-90 transition-opacity"
          >
            Book a call
          </Link>
        </nav>
      )}
    </header>
  );
}
