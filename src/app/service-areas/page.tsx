import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { px, site } from "@/lib/site";
import { imageAlt } from "@/data/imageAlts";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import {
  PhoneIcon,
  CheckIcon,
  MapPinIcon,
  ArrowRightIcon,
  ShowerIcon,
  BathIcon,
  CabinetIcon,
  StarIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: {
    absolute: "Bathroom Remodeling Service Areas | Plano, TX",
  },
  description:
    "Bathroom remodeling across Plano, Frisco, McKinney, Allen, Richardson, and all of North Texas. Local pros, fixed pricing, and free in-home quotes.",
  alternates: { canonical: "/service-areas" },
};

const areas = [
  {
    name: "Plano",
    text: "Our home base. From West Plano's newer custom builds to the established neighborhoods around downtown, we know every builder, layout, and quirk. It's why Plano homeowners keep recommending us to their neighbors.",
  },
  {
    name: "Frisco",
    text: "Fast-growing communities where builder-grade bathrooms beg for upgrades. We turn standard-issue master baths into the resort-style spaces Frisco homeowners love to show off.",
  },
  {
    name: "McKinney",
    text: "Historic charm meets brand-new construction. We handle everything from older-home renovations that need careful planning to modern master suites in the newest neighborhoods.",
  },
  {
    name: "Allen",
    text: "Family-friendly neighborhoods where durable, low-maintenance bathrooms are the priority. Kids, pets, and busy mornings are all part of the design conversation.",
  },
  {
    name: "Richardson",
    text: "Mature neighborhoods and well-loved homes that deserve thoughtful remodels, from complete renovations to quick fixture refreshes that modernize a room in a day.",
  },
  {
    name: "Carrollton",
    text: "Busy families need practical, budget-smart updates that still look great. We deliver honest advice and fixed pricing, so the project fits your life and your wallet.",
  },
  {
    name: "Lewisville",
    text: "From first-time remodels to aging-in-place upgrades, we bring the same craftsmanship and care to every Lewisville home, whether it's a full gut or a walk-in shower.",
  },
  {
    name: "The Colony",
    text: "Resort-style communities where beautiful bathrooms are the norm. Our luxury upgrades and spa-like showers fit right in with lakeside living.",
  },
  {
    name: "Dallas",
    text: "City homes and condos where space is precious. Smart layouts, custom storage, and space-saving designs make the most of every square foot.",
  },
];

const popularServices = [
  {
    icon: ShowerIcon,
    title: "Tub to Shower Conversions",
    text: "Trade the unused tub for a walk-in shower that's safer and easier to clean.",
    href: "/tub-to-shower-conversion",
    label: "See tub to shower conversions",
  },
  {
    icon: BathIcon,
    title: "Complete Bathroom Renovations",
    text: "Full-scale remodels handled end to end by one accountable team.",
    href: "/complete-bathroom-renovations",
    label: "See complete renovations",
  },
  {
    icon: CabinetIcon,
    title: "Custom Vanities & Storage",
    text: "Vanities and storage built around the way your family actually uses the room.",
    href: "/custom-vanity-and-storage",
    label: "See custom vanities",
  },
];

const whyUs = [
  "Licensed, insured, and locally owned in Plano",
  "Free in-home consultations and fixed-price quotes in writing",
  "One accountable crew, no finger-pointing subcontractors",
  "Eco-friendly fixtures and materials on every project",
  "4.9-star average across hundreds of North Texas projects",
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHeader
        title="Service Areas"
        subtitle="Proudly serving Plano and the surrounding North Texas communities with honest, expert bathroom remodeling."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Proudly Local"
              title="Based in Plano, Built Across North Texas"
            />
            <div className="-mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Eco Bathroom Remodel is headquartered in Plano, but our crews work every day
                in Frisco, McKinney, Allen, Richardson, and the surrounding Dallas–Fort Worth
                area. Being local means we know the builders, the home styles, and the common
                bathroom problems specific to each community.
              </p>
              <p>
                Wherever you live, the process is the same: we visit your home, measure the
                space, talk through how you use it, and put a fixed price in writing. No travel
                fees, no surprises, no subcontractor roulette. Just the{" "}
                <Link href="/complete-bathroom-renovations" className="font-semibold text-brand-700 underline decoration-gold-500 underline-offset-2 hover:text-brand-800">
                  craftsmanship we bring to every project
                </Link>
                .
              </p>
              <p>
                Not sure if we cover your neighborhood? Call us at (972) 391-8227, and we'll
                tell you straight. If we can't help, we'll point you to someone who can.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={px(7534282, 900, 700)}
                alt={imageAlt(7534282, "Modern renovated bathroom in Plano, Texas")}
                width={900}
                height={700}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Communities We Serve"
            title="Bathroom Remodeling in Your City"
            subtitle="From master suite remodels to quick fixture upgrades, our Plano-based crews cover homes throughout Collin and Dallas counties."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-white">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-brand-900">
                    {a.name}, TX
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="What We Do Everywhere"
            title="Popular Remodeling Services in North Texas"
            subtitle="The same services Plano homeowners rely on, available across every community we serve."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-brand-800">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-brand-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition hover:text-brand-800"
                  >
                    {s.label}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                light
                align="left"
                eyebrow="Why Neighbors Choose Us"
                title="The Same Trusted Team, Community After Community"
              />
              <ul className="mt-6 space-y-3">
                {whyUs.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-brand-100/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                      <CheckIcon className="h-3 w-3 text-gold-400" />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-2 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <p className="mt-4 font-display text-2xl leading-snug text-white">
                  "Eco Bathroom Remodel converted our unused tub into a gorgeous walk-in shower.
                  They were on time every day, kept the house clean, and the price never changed."
                </p>
                <p className="mt-4 text-sm font-bold text-gold-400">Sarah M. · Plano, TX</p>
                <p className="mt-8 border-t border-white/10 pt-6 text-sm text-brand-200/80">
                  Hear more from homeowners across {site.serviceArea.slice(0, 4).join(", ")} and
                  beyond. Every project gets the same local attention and fixed-price honesty.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              <MapPinIcon className="h-3.5 w-3.5" />
              {site.address.city}, TX &amp; Surrounding Areas
            </span>
            <h2 className="mt-6 font-display text-3xl leading-tight text-brand-900 md:text-4xl">
              Ready to Remodel? We&apos;re Close By.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Call now for a free consultation and fixed-price quote from your local North Texas
              bathroom remodeling team.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-brand-950 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {site.phone}
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-800 px-8 py-4 text-base font-bold text-brand-800 transition hover:bg-brand-800 hover:text-white"
              >
                Get a Free Quote
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
