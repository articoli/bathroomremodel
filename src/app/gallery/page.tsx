import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { px } from "@/lib/site";
import { galleryItems } from "@/data/gallery";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Gallery",
  description:
    "Browse real bathroom remodeling projects by Eco Bathroom Remodel, including renovations, tub to shower conversions, tile work, and custom vanities in Plano, TX.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Project Gallery"
        subtitle="Real bathrooms, real Plano-area homes. Tap any project to see what's possible, then imagine it in your home."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="columns-2 gap-4 md:columns-3 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
            {galleryItems.map((g, i) => (
              <Reveal key={g.id} delay={(i % 3) * 0.06}>
                <figure className="group relative block overflow-hidden rounded-2xl">
                  <Image
                    src={px(g.id, 700, i % 2 === 0 ? 500 : 620)}
                    alt={`${g.title} in ${g.location}`}
                    width={700}
                    height={i % 2 === 0 ? 500 : 620}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-950/80 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                    <p className="text-sm font-bold text-white">{g.title}</p>
                    <p className="text-xs text-brand-200">{g.location}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-brand-900 p-8 text-center md:p-10">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Ready to See Your Bathroom Here?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-100/90 md:text-base">
              Every project in this gallery started with a free consultation. Tell us about your
              bathroom and we&apos;ll show you exactly what&apos;s possible, with a fixed price and
              honest advice. Not sure what you need? Explore our{" "}
              <Link href="/services" className="font-semibold text-gold-400 underline decoration-gold-500/40 underline-offset-2 hover:text-gold-300">
                bathroom services
              </Link>{" "}
              first.
            </p>
            <Link
              href="/contacts"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-brand-950 transition hover:bg-gold-400"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
