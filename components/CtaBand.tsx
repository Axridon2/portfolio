import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function CtaBand({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <section className="border-t border-line bg-dot-grid">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <RevealOnScroll>
          <div className="ticked-line max-w-24 mb-8" />
          <h2 className="font-display font-medium text-3xl md:text-5xl text-fg max-w-2xl leading-tight">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-fg-muted max-w-xl">{subheading}</p>
          )}
          <div className="mt-10">
            <Link
              href="/book-a-call"
              className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] bg-orange text-fg px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Book a call
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
