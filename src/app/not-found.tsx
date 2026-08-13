import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-slate-50">
      <div className="mx-auto max-w-xl px-5 py-20 text-center">
        <p className="font-display text-7xl font-bold text-brand-100">404</p>
        <h1 className="mt-4 font-display text-3xl text-brand-900">
          This Page Is Under Renovation
        </h1>
        <p className="mt-3 text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back to something useful.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Back to Home
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-800 px-7 py-3.5 text-sm font-bold text-brand-800 transition hover:bg-brand-800 hover:text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
