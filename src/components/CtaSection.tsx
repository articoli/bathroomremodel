import { site } from "@/lib/site";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PhoneIcon } from "@/components/icons";

export default function CtaSection({
  title = "Ready to Transform Your Bathroom?",
  subtitle = "Get a free, no-obligation quote today. Our Plano team will measure, design, and price your project, with honest advice and no pressure.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #ffffff 0%, transparent 40%), radial-gradient(circle at 80% 80%, #2dd4bf 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 text-center md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-100/90 md:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-brand-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400 sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {site.phone}
            </a>
            <Link
              href="/contacts"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 text-base font-bold text-white transition hover:border-white/60 hover:bg-white/10 sm:w-auto"
            >
              Get a Free Quote
            </Link>
          </div>
          <p className="mt-6 text-sm text-brand-200/80">
            Serving {site.serviceArea.slice(0, 6).join(", ")} and the surrounding Dallas–Fort Worth area
          </p>
        </Reveal>
      </div>
    </section>
  );
}
