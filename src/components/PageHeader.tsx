import Link from "next/link";

export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, #ffffff 0%, transparent 40%), radial-gradient(circle at 85% 70%, #2dd4bf 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">
        <nav className="mb-4 text-xs font-medium text-brand-300" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-brand-500">/</span>
          <span className="text-gold-400">{breadcrumb ?? title}</span>
        </nav>
        <h1 className="font-display text-3xl leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100/90 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
