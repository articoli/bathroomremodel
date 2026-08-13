"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contacts", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand-950 text-brand-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="h-3.5 w-3.5 text-gold-500" />
              {site.address.full}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="h-3.5 w-3.5 text-gold-500" />
              {site.hours}
            </span>
          </div>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold text-gold-400 hover:text-gold-300"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {site.phone}
          </a>
        </div>
      </div>

      <div
        className={`border-b border-slate-100 bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-md shadow-brand-950/5" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Eco Bathroom Remodel home">
            <Image
              src="/favicon.svg"
              alt=""
              width={40}
              height={40}
              unoptimized
              className="h-10 w-10 shrink-0"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-brand-900">
                Eco Bathroom Remodel
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-600">
                Plano, TX
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.href === "/services") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition ${
                        isActive(link.href)
                          ? "text-brand-800"
                          : "text-slate-600 hover:text-brand-800"
                      }`}
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={`h-3.5 w-3.5 transition ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </Link>
                    {servicesOpen && (
                      <div className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-2">
                        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-brand-950/10">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
href={`/${s.slug}`}
                              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-800"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                    isActive(link.href)
                      ? "text-brand-800"
                      : "text-slate-600 hover:text-brand-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-brand-200 px-4 py-2.5 text-sm font-bold text-brand-800 transition hover:border-brand-400 hover:bg-brand-50 md:inline-flex"
            >
              <PhoneIcon className="h-4 w-4 text-brand-700" />
              {site.phone}
            </a>
            <Link
              href="/contacts"
              className="hidden rounded-full bg-brand-800 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 sm:inline-flex"
            >
              Get a Free Quote
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-white md:hidden"
              aria-label={`Call ${site.phone}`}
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-brand-900 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[65px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              if (link.href === "/services") {
                return (
                  <div key={link.href} className="border-b border-slate-100">
                    <Link
                      href={link.href}
                      className="block py-4 text-lg font-bold text-brand-900"
                    >
                      Services
                    </Link>
                    <div className="pb-4 pl-2">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}`}
                          className="block py-2 text-sm font-medium text-slate-600 hover:text-brand-800"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b border-slate-100 py-4 text-lg font-bold ${
                    isActive(link.href) ? "text-brand-700" : "text-brand-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-800 px-6 py-4 text-base font-bold text-white"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {site.phone}
              </a>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-800 px-6 py-4 text-base font-bold text-brand-800"
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
