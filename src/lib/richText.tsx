import { Fragment } from "react";
import Link from "next/link";

const linkRe = /(\[[^\]]+\]\([^)]+\))/g;

function splitLink(part: string) {
  const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  return m ? { text: m[1], href: m[2] } : null;
}

export default function renderInline(text: string) {
  const parts = text.split(linkRe);
  return parts.map((part, i) => {
    const link = splitLink(part);
    if (link) {
      const isExternal =
        link.href.startsWith("http") ||
        link.href.startsWith("tel:") ||
        link.href.startsWith("mailto:");
      if (isExternal) {
        return (
          <a
            key={i}
            href={link.href}
            className="font-semibold text-brand-700 underline decoration-gold-500 underline-offset-2 hover:text-brand-800"
          >
            {link.text}
          </a>
        );
      }
      return (
        <Link
          key={i}
          href={link.href}
          className="font-semibold text-brand-700 underline decoration-gold-500 underline-offset-2 hover:text-brand-800"
        >
          {link.text}
        </Link>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
