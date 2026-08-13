import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { px, site } from "@/lib/site";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { galleryItems } from "@/data/gallery";
import { imageAlt } from "@/data/imageAlts";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import CtaSection from "@/components/CtaSection";
import {
  PhoneIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldIcon,
  LeafIcon,
  CalendarIcon,
  ClipboardIcon,
  HammerIcon,
  KeyIcon,
  ChevronDownIcon,
  MapPinIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: {
    absolute: "Bathroom Remodeling in Plano, TX | Eco Bathroom Remodel",
  },
  description:
    "Plano, TX bathroom remodeling done right: complete renovations, tub-to-shower conversions, tile, custom vanities, and fixed pricing. Call (972) 391-8227.",
  alternates: { canonical: "/" },
};

const trustBadges = [
  "Licensed & Insured",
  "Free Estimates",
  "Fixed-Price Quotes",
  "10+ Years Experience",
  "Satisfaction Guarantee",
];

const whyChoose = [
  {
    icon: ShieldIcon,
    title: "Licensed, Insured & Local",
    text: "A Plano-based team with licensed plumbing and insured crews, fully accountable, from first visit to final walkthrough.",
  },
  {
    icon: LeafIcon,
    title: "Eco-Friendly by Design",
    text: "Water-efficient fixtures, low-VOC materials, and responsible disposal help you save on bills and the planet.",
  },
  {
    icon: ClipboardIcon,
    title: "Fixed-Price Quotes",
    text: "You get a fixed-price quote in writing. No hourly surprises, no vague change orders, no hidden fees.",
  },
  {
    icon: KeyIcon,
    title: "One Team, Done Right",
    text: "Our own craftsmen handle plumbing, tile, and finish work, so quality never gets lost between subcontractors.",
  },
];

const processSteps = [
  {
    icon: CalendarIcon,
    step: "01",
    title: "Free Consultation",
    text: "We visit your Plano home, measure the space, and listen to how you live in it.",
  },
  {
    icon: ClipboardIcon,
    step: "02",
    title: "Design & Fixed Quote",
    text: "We share layout options and materials with a fixed price and clear timeline, no pressure.",
  },
  {
    icon: HammerIcon,
    step: "03",
    title: "Expert Remodel",
    text: "Our team demos, waterproofs, tiles, and installs with daily updates and a clean job site.",
  },
  {
    icon: KeyIcon,
    step: "04",
    title: "Final Walkthrough",
    text: "We inspect every detail together, polish any touch-up, and hand over the keys.",
  },
];

const faqs = [
  {
    q: "How much does a bathroom remodel cost in Plano, TX?",
    a: "The cost depends on the size of the bathroom, materials, plumbing changes, and the scope of work. After an in-home consultation, we provide a detailed fixed-price quote based on your specific project.",
  },
  {
    q: "How long does a typical bathroom remodel take?",
    a: "Smaller updates can finish in a few days, while complete bathroom renovations typically take 3 to 4 weeks depending on demolition, plumbing, tile work, material availability, and project complexity.",
  },
  {
    q: "Do I need a permit for a bathroom remodel in Plano?",
    a: "Some bathroom remodeling projects require permits, particularly when plumbing, electrical, or structural work is involved. We can explain the requirements for your specific project and handle the process where applicable.",
  },
  {
    q: "Can you convert my bathtub into a walk-in shower?",
    a: "Yes. Tub-to-shower conversions are one of our most popular services. We can help you choose a layout, shower system, tile, glass enclosure, and accessibility features that fit your space.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Homeowners can contact us to discuss their project and schedule a free in-home consultation for a detailed estimate.",
  },
  {
    q: "Which areas do you serve besides Plano?",
    a: "We serve Plano and nearby communities, including Frisco, Allen, McKinney, Richardson, Carrollton, Lewisville, The Colony, and surrounding North Texas areas.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-brand-950">
        <Image
          src={px(7534282)}
          alt={imageAlt(7534282, "Modern renovated bathroom in Plano, Texas")}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-6">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              <MapPinIcon className="h-3.5 w-3.5" />
              Plano, Texas &amp; Surrounding Areas
            </p>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-white md:text-6xl">
              Bathroom Remodeling in <span className="text-gold-400">Plano, TX</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-100/90 md:text-lg">
              Eco Bathroom Remodel provides professional bathroom remodeling services for
              homeowners in Plano, TX and nearby North Texas communities. Whether you&apos;re
              planning a complete bathroom renovation, a tub-to-shower conversion, or targeted
              upgrades, our team delivers quality craftsmanship, clear pricing, and practical
              designs built around your home and lifestyle.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-brand-950 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {site.phone}
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition hover:border-white/70 hover:bg-white/10"
              >
                Get a Free Quote
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((b) => (
                <li key={b} className="inline-flex items-center gap-2 text-sm font-medium text-brand-100">
                  <CheckIcon className="h-4 w-4 text-gold-400" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 md:px-6 md:py-12">
          {[
            { value: "10+", label: "Years Serving North Texas" },
            { value: "3–4", label: "Weeks for a Typical Full Remodel" },
            { value: "30–50%", label: "Less Water with Efficient Fixtures" },
            { value: "1", label: "Accountable Team, Demo to Finish" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brand-800 md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={px(5825561)}
                  alt={imageAlt(5825561, "Completed bathroom renovation project in Plano, TX")}
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-brand-900 p-6 shadow-xl md:block">
                <p className="font-display text-3xl font-bold text-gold-400">Free</p>
                <p className="text-sm text-brand-100">
                  In-home estimates
                  <br />
                  &amp; written quotes
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Why Plano Chooses Us"
              title="Why Plano Homeowners Choose Eco Bathroom Remodel"
            />
            <p className="-mt-4 text-base leading-relaxed text-slate-600">
              Plano homes vary widely, from established neighborhoods with older bathroom
              layouts to newer homes with large primary suites. We help homeowners update
              outdated tubs, improve storage, modernize showers, and choose durable materials
              suited for everyday family use.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every project starts with a free in-home consultation and a written scope of
              work. You&apos;ll know what&apos;s included, what materials we&apos;ll use, and
              what it costs before work begins. Then our own crew handles design, permits,
              demo, plumbing, tile, and fixtures with daily updates and a clean job site.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Free in-home consultation and measurements",
                "Written scope of work and fixed price before we start",
                "Permits and code requirements handled where applicable",
                "Water-saving fixtures sized for North Texas water use",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <CheckIcon className="h-3 w-3 text-brand-700" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              More About Our Team
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Bathroom Remodeling Services in Plano"
            subtitle="From quick fixture upgrades to complete master bath renovations, one accountable team handles it all."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} />
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-800 px-7 py-3.5 text-sm font-bold text-brand-800 transition hover:bg-brand-800 hover:text-white"
            >
              View All Services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            light
            eyebrow="Why Eco Bathroom Remodel"
            title="The Trusted Choice for Plano Bathrooms"
            subtitle="Every project begins with a detailed consultation and a written scope of work. You'll know what's included, what materials are being used, and what to expect throughout the remodeling process."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100/85">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Our Process"
            title="Simple, Transparent, Stress-Free"
            subtitle="A clear four-step process means you always know what's happening, what's next, and what it costs."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="absolute right-5 top-4 font-display text-4xl font-bold text-brand-100">
                    {p.step}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-white">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-brand-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Recent Bathroom Transformations"
            subtitle="A look at real projects for homeowners across Plano and the Dallas–Fort Worth area."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {galleryItems.slice(0, 8).map((g, i) => (
              <Reveal key={g.id} delay={(i % 4) * 0.06}>
                <Link
                  href="/gallery"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={px(g.id)}
                    alt={imageAlt(g.id, g.title)}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white md:text-sm">
                    {g.title}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              View Full Gallery
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Local Bathroom Remodeling Team in Plano"
            />
            <div className="-mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Eco Bathroom Remodel is a locally focused remodeling company serving
                homeowners throughout Plano and nearby North Texas communities. Founded in
                Plano in 2014, we grew by doing the work ourselves: licensed plumbing,
                in-house tile, and finish work under one accountable team.
              </p>
              <p>
                We work with homeowners from the initial consultation through the final
                walkthrough, helping them plan functional, comfortable bathrooms that fit
                their style, space, and budget.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Read Our Story
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-slate-50 p-8">
              <ul className="space-y-4">
                {[
                  "One accountable in-house crew, no subcontractor roulette",
                  "Licensed plumbing and fully insured crews",
                  `Based in Plano at ${site.address.street}`,
                  "Free estimates and fixed-price written quotes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                      <CheckIcon className="h-3 w-3 text-brand-700" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently Asked Questions About Bathroom Remodeling in Plano"
            subtitle="Straight answers to the questions homeowners ask us most."
          />
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group rounded-2xl border border-slate-200 bg-white transition open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-lg text-brand-900 transition hover:text-brand-700 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDownIcon className="h-5 w-5 shrink-0 text-gold-500 transition group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              Have a different question? We&apos;re happy to help.{" "}
              <a href={site.phoneHref} className="font-bold text-brand-700 hover:underline">
                Call {site.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-brand-50/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Proudly Local"
                title="Serving Plano and All of North Texas"
              />
              <p className="-mt-4 text-base leading-relaxed text-slate-600">
                We're based in Plano at {site.address.street} and serve homeowners throughout
                Collin and Dallas counties, from Frisco, Allen, and McKinney to Richardson,
                Carrollton, Lewisville, The Colony, and Dallas. Wherever you are, the process is
                the same: honest advice, fixed pricing, and craftsmanship we're proud to stand
                behind.
              </p>
              <Link
                href="/service-areas"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition hover:text-brand-800"
              >
                View All Service Areas
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
                  Areas We Serve
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
                  {site.serviceArea.map((a) => (
                    <li key={a} className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                      <MapPinIcon className="h-3.5 w-3.5 text-brand-600" />
                      {a}, TX
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="From Our Blog"
            title="Helpful Advice for Plano Homeowners"
            subtitle="Research, planning, and design tips straight from our remodeling pros."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[...posts]
              .sort((a, b) => b.date.localeCompare(a.date))
              .slice(0, 3)
              .map((p) => (
                <BlogCard key={p.slug} slug={p.slug} />
              ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-800 px-7 py-3.5 text-sm font-bold text-brand-800 transition hover:bg-brand-800 hover:text-white"
            >
              Read the Blog
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
