import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { px, site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import {
  CheckIcon,
  ShieldIcon,
  LeafIcon,
  ClipboardIcon,
  KeyIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Eco Bathroom Remodel, Plano's local bathroom remodeling team. Licensed, insured, and committed to eco-friendly, beautifully built bathrooms across North Texas.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldIcon,
    title: "Honesty First",
    text: "We tell you what your bathroom needs, even when that's less work and less money. Trust is the foundation of every project.",
  },
  {
    icon: LeafIcon,
    title: "Eco-Conscious Craft",
    text: "Water-wise fixtures, low-VOC materials, and responsible waste handling are standard on every job, not an upsell.",
  },
  {
    icon: ClipboardIcon,
    title: "Clear Communication",
    text: "Daily updates with photos, a written fixed-price contract, and a real timeline. You're never left guessing.",
  },
  {
    icon: KeyIcon,
    title: "Built to Last",
    text: "Proper waterproofing, level tile, and code-compliant workmanship mean your bathroom holds up for decades, not just until the paint dries.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Eco Bathroom Remodel"
        subtitle="A local Plano team that treats every bathroom like it's in our own home."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Plano-Born, Plano-Built"
            />
            <div className="-mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Eco Bathroom Remodel started with a simple observation: homeowners in North
                Texas were getting sold remodeling projects, not results. Deadlines slipped,
                budgets ballooned, and subcontractors pointed fingers at each other while the
                homeowner waited.
              </p>
              <p>
                We built our company to be the opposite. We're a single, accountable team of
                licensed plumbers, tile specialists, and finish craftsmen who do the work
                ourselves, and we put a fixed price in writing before a single wall comes down.
              </p>
              <p>
                Today we've remodeled more than 500 bathrooms across Plano, Frisco, Allen,
                McKinney, Richardson, and the surrounding Dallas–Fort Worth area. From{" "}
                <Link href="/complete-bathroom-renovations" className="font-semibold text-brand-700 underline decoration-gold-500 underline-offset-2 hover:text-brand-800">
                  complete renovations
                </Link>{" "}
                to{" "}
                <Link href="/tub-to-shower-conversion" className="font-semibold text-brand-700 underline decoration-gold-500 underline-offset-2 hover:text-brand-800">
                  tub to shower conversions
                </Link>{" "}
                and{" "}
                <Link href="/accessibility-modifications" className="font-semibold text-brand-700 underline decoration-gold-500 underline-offset-2 hover:text-brand-800">
                  accessibility upgrades
                </Link>
                , we've kept the same values that started it all: honesty, quality, and building
                bathrooms that use less water and look spectacular doing it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={px(5502253, 700, 900)}
                alt="Custom bathroom vanity built by Eco Bathroom Remodel"
                width={700}
                height={900}
                className="h-full w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="flex flex-col gap-4">
                <Image
                  src={px(7031840, 700, 500)}
                  alt="Frameless glass shower installation in Plano"
                  width={700}
                  height={500}
                  className="w-full rounded-2xl object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <Image
                  src={px(7005476, 700, 500)}
                  alt="New shower system installed by our team"
                  width={700}
                  height={500}
                  className="w-full rounded-2xl object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Values Behind Every Job"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-gold-400">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-brand-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Why Homeowners Trust Us"
            title="The Eco Bathroom Remodel Difference"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "In-House Craftsmen",
                text: "Plumbing, tile, glass, and finish work are done by our own team, one crew, one standard of quality, no subcontractor roulette.",
              },
              {
                title: "Eco-Friendly Standard",
                text: "Low-flow fixtures, efficient lighting, and responsible disposal lower your bills and your footprint. 'Eco' isn't a marketing word here.",
              },
              {
                title: "Guaranteed Satisfaction",
                text: "If a detail isn't right, we fix it. We don't leave a job until you walk through it and smile. Our reputation depends on it.",
              },
              {
                title: "Real Local Reviews",
                text: "Our growth comes from word of mouth in Plano neighborhoods, homeowners who compare, then call us back for the next project.",
              },
              {
                title: "Licensed & Insured",
                text: "Fully licensed plumbing and fully insured crews give you peace of mind from the first demo to the final walkthrough.",
              },
              {
                title: "Clean, Respectful Job Sites",
                text: "Daily cleanup, protected floors, and crews who treat your home like their own. Your family keeps living normally while we work.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-slate-50 p-7">
                  <h3 className="font-display text-lg text-brand-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-6">
          <Reveal>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Let&apos;s Build the Bathroom You&apos;ve Been Waiting For
            </h2>
            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {["Free in-home consultation", "Fixed-price written quote", "Licensed & insured team"].map(
                (b) => (
                  <li key={b} className="inline-flex items-center gap-2 text-sm text-brand-100">
                    <CheckIcon className="h-4 w-4 text-gold-400" />
                    {b}
                  </li>
                )
              )}
            </ul>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-brand-950 transition hover:bg-gold-400"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Get a Free Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
