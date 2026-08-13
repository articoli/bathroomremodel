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
  StarIcon,
  ShieldIcon,
  LeafIcon,
  CalendarIcon,
  ClipboardIcon,
  HammerIcon,
  KeyIcon,
  QuoteIcon,
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
    title: "Fixed, Transparent Pricing",
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

const testimonials = [
  {
    quote:
      "Eco Bathroom Remodel converted our unused tub into a gorgeous walk-in shower. They were on time every day, kept the house clean, and the price never changed. Best money we've spent on the house.",
    name: "Sarah M.",
    location: "Plano, TX",
  },
  {
    quote:
      "We did a full master bath renovation. The team's tile work is flawless and they caught a plumbing issue the builder's original install had missed. We plan to use them for the guest bath next.",
    name: "James & Amy R.",
    location: "Frisco, TX",
  },
  {
    quote:
      "As an older homeowner, the curbless shower and grab bars gave me my independence back. It looks so beautiful that guests don't even notice it's a safety remodel.",
    name: "Margaret T.",
    location: "Richardson, TX",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-brand-950">
        <Image
          src={px(7534282, 1600, 1000)}
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
              Eco Bathroom Remodel is a local Plano, TX bathroom remodeling company. From
              complete renovations to tub-to-shower conversions and targeted remodels, our
              craftsmen deliver premium workmanship, fixed transparent pricing, and
              water-efficient upgrades that make your bathroom the best room in the house.
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
            { value: "500+", label: "Bathrooms Remodeled" },
            { value: "10+", label: "Years in North Texas" },
            { value: "4.9★", label: "Average Client Rating" },
            { value: "100%", label: "Fixed-Price Quotes" },
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
                  src={px(5825561, 900, 700)}
                  alt={imageAlt(5825561, "Completed bathroom renovation project in Plano, TX")}
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-brand-900 p-6 shadow-xl md:block">
                <p className="font-display text-3xl font-bold text-gold-400">10+</p>
                <p className="text-sm text-brand-100">
                  Years remodeling
                  <br />
                  North Texas homes
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
              Remodeling shouldn't mean months of chaos. Our local team handles everything,
              design, permits, demo, plumbing, tile, and fixtures, with daily updates, a clean
              job site, and a price we put in writing. The result is a bathroom that's beautiful,
              water-efficient, and built to last. Popular with Plano families: tub
              to shower conversions, tile flooring, and custom vanities.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Free in-home consultation and measurements",
                "Water-saving fixtures that lower monthly bills",
                "Real reviews from Plano, Frisco, and Allen homeowners",
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
            subtitle="We're not the biggest company in North Texas. We're the one homeowners call back, recommend, and trust with their biggest remodeling investment."
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
                    src={px(g.id, 600, 450)}
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
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="Plano Homeowners Love Their New Bathrooms"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-7">
                  <QuoteIcon className="h-8 w-8 text-gold-500" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-1 text-gold-500">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon key={s} className="h-4 w-4" />
                      ))}
                    </div>
                    <p className="mt-2 text-sm font-bold text-brand-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
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
