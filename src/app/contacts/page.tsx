import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  MailIcon,
  CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us & Request a Free Quote",
  description:
    "Contact Eco Bathroom Remodel in Plano, TX. Call (972) 391-8227 or request a free quote for bathroom remodeling across North Texas.",
  alternates: { canonical: "/contacts" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Tell us about your bathroom and get a free, no-obligation quote within one business day."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl text-brand-900 md:text-3xl">
                We&apos;d Love to Hear From You
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Prefer to talk it through? Call us directly, a real human who works in Plano
                will answer. Or send a message and we&apos;ll get back to you within one business
                day.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-brand-200 hover:bg-brand-50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-gold-400">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Call or Text
                    </span>
                    <span className="mt-0.5 block text-lg font-bold text-brand-900">
                      {site.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-brand-200 hover:bg-brand-50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-gold-400">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </span>
                    <span className="mt-0.5 block text-base font-bold text-brand-900">
                      {site.email}
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-gold-400">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Visit Us
                    </span>
                    <span className="mt-0.5 block text-base font-semibold text-brand-900">
                      {site.address.full}
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-gold-400">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Hours
                    </span>
                    <span className="mt-0.5 block text-base font-semibold text-brand-900">
                      {site.hours}
                    </span>
                    <span className="block text-sm text-slate-500">
                      Emergency calls answered 24/7
                    </span>
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-2.5">
                {[
                  "Free in-home consultation",
                  "Fixed-price written quotes",
                  "Serving Plano & all North Texas",
                ].map((b) => (
                  <li key={b} className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100">
                      <CheckIcon className="h-3 w-3 text-brand-700" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-brand-950/5 md:p-10">
              <h2 className="font-display text-2xl text-brand-900">Request Your Free Quote</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and we&apos;ll follow up within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
