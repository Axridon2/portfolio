import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Blog — Adnane Serroukh",
  description: "First-person write-ups on the homelab, IT support and what's next.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <SectionHeading number="WRITING" title="Blog" />
      </RevealOnScroll>

      <div className="border-t border-line">
        {posts.map((post, i) => (
          <RevealOnScroll key={post.slug} delay={0.03 * i}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-8 border-b border-line hover:border-orange transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
                {formatDate(post.date)}
              </span>
              <h3 className="mt-2 font-display font-medium text-2xl text-fg group-hover:text-orange transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-fg-muted">{post.summary}</p>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.1}>
        <div className="mt-10 border border-dashed border-line p-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
            More posts — coming soon
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
