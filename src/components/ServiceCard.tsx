import Link from "next/link";
import Image from "next/image";
import { px } from "@/lib/site";
import { imageAlt } from "@/data/imageAlts";
import { ArrowRightIcon } from "@/components/icons";
import { services } from "@/data/services";

export default function ServiceCard({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  return (
    <Link
      href={`/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={px(service.image, 800, 600)}
          alt={imageAlt(service.image, service.name)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800">
          {service.shortName}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-brand-900">{service.name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 group-hover:text-gold-600">
          Learn more
          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
