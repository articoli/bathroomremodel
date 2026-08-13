import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import CtaSection from "@/components/CtaSection";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Blog & Resources",
  description:
    "Expert advice on bathroom remodeling in Plano, TX, including costs, tub to shower conversions, tile selection, accessibility, and water-saving upgrades.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog & Resources"
        subtitle="Planning a bathroom remodel? Start here. Honest advice from the Plano pros who do this every day."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <BlogCard key={p.slug} slug={p.slug} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Got Questions? We've Got Answers."
        subtitle="Our free consultation covers everything, costs, timelines, materials, and honest recommendations for your Plano home."
      />
    </>
  );
}
