import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignCls} mb-10 md:mb-14`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl leading-tight md:text-4xl ${
          light ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-brand-100/90" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
