"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden font-mono text-[11px] uppercase tracking-[0.15em] border border-orange text-orange px-6 py-3 hover:bg-orange hover:text-bg transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
