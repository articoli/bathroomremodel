import Image from "next/image";
import Link from "next/link";
import { px, site } from "@/lib/site";
import { imageAlt } from "@/data/imageAlts";
import renderInline from "@/lib/richText";
import type { Post } from "@/data/posts";
import { posts } from "@/data/posts";
import { getService } from "@/data/services";
import CtaSection from "@/components/CtaSection";
import {
  CalendarIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@/components/icons";

export default function PostDetail({ post }: { post: Post }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const more = [...posts]
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-brand-900">
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20 md:px-6">
          <nav className="mb-5 text-xs font-medium text-brand-300" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-brand-500">/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="mx-2 text-brand-500">/</span>
            <span className="text-gold-400">Article</span>
          </nav>
          <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-400">
            {post.category}
          </span>
          <h1 className="font-display text-3xl leading-tight text-white md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-brand-200">
            <CalendarIcon className="h-4 w-4" />
            {date} · {post.readTime}
          </p>
        </div>
      </section>

      <article className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={px(post.image, 1200, 700)}
              alt={imageAlt(post.image, post.title)}
              width={1200}
              height={700}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="prose-brand mt-10">
            {post.body.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{renderInline(p)}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((li, k) => (
                      <li key={k}>{renderInline(li)}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-brand-50 p-6 text-center md:p-8">
            <p className="font-display text-xl text-brand-900">
              Ready to start your project?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Get a free, no-obligation quote from Plano&apos;s bathroom remodeling pros.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {site.phone}
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-800 px-6 py-3 text-sm font-bold text-brand-800 transition hover:bg-brand-800 hover:text-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>

      {post.relatedServices.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <div className="mb-8">
              <h2 className="font-display text-2xl text-brand-900 md:text-3xl">
                Related Services
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Ready to put this into practice in your Plano home?
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {post.relatedServices.map((slug) => {
                const s = getService(slug);
                if (!s) return null;
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-2.5 text-sm font-bold text-brand-800 transition hover:border-brand-400 hover:bg-brand-100"
                  >
                    {s.name}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-2xl text-brand-900 md:text-3xl">
              Keep Reading
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              All articles
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={px(p.image, 600, 400)}
                    alt={imageAlt(p.image, p.title)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-brand-700">{p.category}</p>
                  <h3 className="mt-1 font-display text-base leading-snug text-brand-900 group-hover:text-brand-700">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
