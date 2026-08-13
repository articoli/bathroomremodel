import Link from "next/link";
import Image from "next/image";
import { px } from "@/lib/site";
import { posts } from "@/data/posts";
import { CalendarIcon, ArrowRightIcon } from "@/components/icons";

export default function BlogCard({ slug, index }: { slug: string; index: number }) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={px(post.image, 800, 500)}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          priority={index < 3}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-700">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarIcon className="h-3.5 w-3.5" />
            {date}
          </span>
        </div>
        <h3 className="font-display text-lg leading-snug text-brand-900 group-hover:text-brand-700">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 group-hover:text-gold-600">
          Read article
          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
