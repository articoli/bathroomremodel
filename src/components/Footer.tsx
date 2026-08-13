import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { PhoneIcon, MapPinIcon, ClockIcon, MailIcon, LeafIcon, FacebookIcon } from "@/components/icons";

const facebookUrl = "https://www.facebook.com/share/1BknfByZkE/";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/favicon.svg"
                alt=""
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 shrink-0"
              />
              <span className="font-display text-lg font-bold text-white">
                Eco Bathroom Remodel
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-200/80">
              Plano&apos;s trusted bathroom remodeling company. We design and build
              beautiful, eco-friendly bathrooms for homeowners across North Texas.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold-400">
              <LeafIcon className="h-4 w-4" />
              Licensed &amp; Insured
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Eco Bathroom Remodel on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-100 transition hover:bg-[#1877f2] hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <span className="text-sm text-brand-200/80">Follow us on Facebook</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gold-400">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-brand-200/80 transition hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gold-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Project Gallery" },
                { href: "/service-areas", label: "Service Areas" },
                { href: "/blog", label: "Blog & Resources" },
                { href: "/contacts", label: "Contact & Free Quote" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
                { href: "/disclaimer", label: "Disclaimer" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-brand-200/80 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gold-400">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-start gap-2.5 font-semibold text-white hover:text-gold-300"
                >
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-start gap-2.5 text-brand-200/80 hover:text-white"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-brand-200/80">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                {site.address.full}
              </li>
              <li className="inline-flex items-start gap-2.5 text-brand-200/80">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-14 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=5700%20West%20Plano%20Pkwy%2C%20Suite%201000%2C%20Plano%2C%20TX%2075093&output=embed"
            title="Eco Bathroom Remodel location map: 5700 West Plano Pkwy, Suite 1000, Plano, TX 75093"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full border-0 grayscale-[35%] md:h-80"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-brand-200/70 md:flex-row md:px-6">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Serving Plano, Frisco, Allen, McKinney, Richardson, Carrollton, Lewisville, and
            surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
}
