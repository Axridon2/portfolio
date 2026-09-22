"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden border border-brass text-brass px-6 py-3 text-sm tracking-wide hover:bg-brass hover:text-ink transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
