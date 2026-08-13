import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import {
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@/components/icons";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Services in Plano, TX",
  description:
    "Explore our bathroom services: complete renovations, tub to shower conversions, tile, glass enclosures, custom vanities, accessibility upgrades & more in Plano, TX.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Bathroom Services"
        subtitle="One local team for every bathroom project, from a single fixture upgrade to a complete luxury renovation."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} slug={s.slug} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl text-brand-900 md:text-4xl">
                Not Sure What Your Bathroom Needs?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                No problem. Most homeowners don't know whether they need a full renovation or a
                targeted upgrade until a pro takes a look. We offer a free in-home consultation.
                We&apos;ll inspect your bathroom, talk through your goals, and give you honest
                recommendations with a fixed price. No obligation, no pressure. Researching
                first? Our{" "}
                <Link href="/blog" className="font-semibold text-brand-700 underline decoration-gold-500 underline-offset-2 hover:text-brand-800">
                  remodeling blog
                </Link>{" "}
                covers costs, timelines, and materials.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free measurements and honest assessment",
                  "Written fixed-price quote",
                  "Options at multiple budget levels",
                  "Advice on resale value, too",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                      <CheckIcon className="h-3 w-3 text-brand-700" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call {site.phone}
                </a>
                <Link
                  href="/contacts"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-800 px-7 py-3.5 text-sm font-bold text-brand-800 transition hover:bg-brand-800 hover:text-white"
                >
                  Get a Free Quote
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4">
                {[
                  {
                    q: "What areas do you serve?",
                    a: `We're based in Plano and serve ${site.serviceArea.slice(0, 5).join(", ")}, and surrounding North Texas communities.`,
                  },
                  {
                    q: "Are you licensed and insured?",
                    a: "Yes. Our plumbing is fully licensed and our crews are fully insured, so you're protected from first demo to final walkthrough.",
                  },
                  {
                    q: "Do you provide free quotes?",
                    a: "Yes. Our in-home consultation and fixed-price written quote are always free and carry zero obligation.",
                  },
                  {
                    q: "How long will my project take?",
                    a: "A tub to shower conversion typically takes 5–10 working days; a full renovation 3–4 weeks. You'll get a detailed timeline in writing up front.",
                  },
                ].map((f) => (
                  <div
                    key={f.q}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-display text-lg text-brand-900">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
