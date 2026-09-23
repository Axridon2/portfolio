import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug, markdownToHtml } from "@/lib/content";
import RevealOnScroll from "@/components/RevealOnScroll";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Adnane Serroukh`,
    description: post.summary,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.body);

  return (
    <article className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28">
      <RevealOnScroll>
        <Link
          href="/blog"
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted hover:text-orange transition-colors"
        >
          ← All posts
        </Link>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
          {formatDate(post.date)}
        </p>
        <h1 className="mt-3 font-display font-medium text-4xl md:text-5xl text-fg leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-fg-muted max-w-xl">{post.summary}</p>

        <div
          className="prose-content mt-14 max-w-none text-fg/90 [&_h2]:font-display [&_h2]:font-medium [&_h2]:text-2xl [&_h2]:text-fg [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:mb-5 [&_p]:leading-relaxed [&_a]:text-orange [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_li]:mb-2 [&_strong]:text-fg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </RevealOnScroll>
    </article>
  );
}
