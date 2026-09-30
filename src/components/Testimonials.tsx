import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./icons";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  // Renders nothing until real testimonials are added to the data file.
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="What Plano Homeowners Say"
          subtitle="Real feedback from real bathroom remodels across Plano and the Dallas-Fort Worth area."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex gap-1 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <StarIcon key={s} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">
                    {t.location} &middot; {t.project}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
