"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

export type NavDropdownItem = {
  href: string;
  label: string;
};

export default function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: NavDropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-fg transition-colors"
      >
        {label}
        <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      <div
        id={menuId}
        role="menu"
        className={`absolute left-0 top-full pt-3 min-w-[200px] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="border border-line bg-raised py-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-orange hover:bg-bg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
