export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
      <div className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
          Legal Information
        </p>
        <h1 className="font-display text-3xl leading-tight text-brand-900 md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {updated}</p>
      </div>
      <div className="prose-brand">{children}</div>
    </div>
  );
}
