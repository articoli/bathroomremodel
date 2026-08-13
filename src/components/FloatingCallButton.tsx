import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export default function FloatingCallButton() {
  return (
    <a
      href={site.phoneHref}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-800 py-3 pl-4 pr-5 text-sm font-bold text-white shadow-xl shadow-brand-950/30 transition hover:bg-brand-700 md:hidden"
      aria-label={`Call ${site.phone}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
      </span>
      <PhoneIcon className="h-4 w-4" />
      Call Now
    </a>
  );
}
