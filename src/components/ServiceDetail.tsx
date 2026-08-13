import Image from "next/image";
import Link from "next/link";
import { px, site } from "@/lib/site";
import renderInline from "@/lib/richText";
import type { Service } from "@/data/services";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import {
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  ShieldIcon,
  StarIcon,
  HammerIcon,
} from "@/components/icons";

export default function ServiceDetail({ service }: { service: Service }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@type": "HomeAndConstructionBusiness", name: site.legalName },
    areaServed: "Plano, TX",
    url: `${site.url}/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={service.name}
        subtitle={service.tagline}
        breadcrumb="Services"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={px(service.image, 1000, 700)}
                  alt={`${service.name} in Plano, TX`}
                  width={1000}
                  height={700}
                  priority
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm font-semibold leading-relaxed text-slate-600">
                {service.description}
              </p>
              <div className="mt-6 space-y-3">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                      <CheckIcon className="h-3 w-3 text-brand-700" />
                    </span>
                    {b}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
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
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-6">
          <SectionHeading
            eyebrow="The Full Story"
            title={`Why ${service.shortName} in Plano?`}
          />
          <div className="prose-brand space-y-4">
            {service.body.map((p, i) => (
              <p key={i}>{renderInline(p)}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Proven Process"
            subtitle="Clear steps, clear communication, and a timeline you can plan around."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="absolute right-5 top-4 font-display text-4xl font-bold text-brand-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-white">
                    <HammerIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-brand-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <SectionHeading
            light
            eyebrow="Why Choose Us"
            title="Why Plano Homeowners Pick Eco Bathroom Remodel"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ...service.whyChoose.map((w) => ({ icon: ShieldIcon, text: w })),
              { icon: StarIcon, text: `4.9-star average across hundreds of ${service.shortName.toLowerCase()} projects` },
            ].map((item, i) => (
              <Reveal key={item.text} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-brand-100/90">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition hover:text-gold-300"
            >
              See similar projects in our gallery
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <SectionHeading
            eyebrow="Common Questions"
            title={`${service.name} FAQs`}
          />
          <div className="space-y-4">
            {service.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <h3 className="font-display text-lg text-brand-900">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              Have a different question? We&apos;re happy to help.{" "}
              <a href={site.phoneHref} className="font-bold text-brand-700 hover:underline">
                call {site.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {service.relatedServices.length > 0 && (
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <SectionHeading
              eyebrow="Keep Exploring"
              title="Related Services"
              subtitle={`Popular add-ons and companion services that pair well with ${service.shortName.toLowerCase()}.`}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.relatedServices.map((slug) => (
                <ServiceCard key={slug} slug={slug} />
              ))}
            </div>
          </div>
        </section>
      )}

      {service.relatedPosts.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-6">
            <SectionHeading
              eyebrow="From Our Blog"
              title="Related Articles"
              subtitle="Useful reading to help you plan your project with confidence."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.relatedPosts.map((slug) => (
                <BlogCard key={slug} slug={slug} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection
        title={`Ready to Get Started With ${service.shortName}?`}
        subtitle="Call now for a free in-home consultation and fixed-price quote from our Plano team."
      />
    </>
  );
}
