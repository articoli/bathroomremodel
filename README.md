# Eco Bathroom Remodel — Plano, TX

A production-ready Next.js 15 (App Router) website for a Plano, Texas bathroom remodeling company. Built with TypeScript, Tailwind CSS, and lightweight Framer Motion animations.

## Tech Stack

- Next.js 15 (App Router, Server Components)
- TypeScript
- Tailwind CSS v4
- Framer Motion (light, viewport-triggered reveals only)
- `next/image` for optimized images (Pexels placeholders)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables

Copy `.env.example` to `.env.local` and set the SMTP credentials to enable contact form email delivery via `/api/contact`. Until configured, the form shows a "call us" fallback message (no crash).

| Variable          | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `SMTP_HOST`       | SMTP server host                         |
| `SMTP_PORT`       | SMTP port (default 587)                  |
| `SMTP_USER`       | SMTP username                            |
| `SMTP_PASS`       | SMTP password / app password             |
| `CONTACT_EMAIL_TO`| Recipient for quote requests (optional)  |

## Site Configuration

All business details (phone, address, service area, hours) live in one place: `src/lib/site.ts`. Phone is `+1 (972) 391-8227` and appears as a `tel:` link in the header, footer, hero, CTAs, and floating mobile call button.

## Content

- Service pages: `src/data/services.ts` (11 services, data-driven under `/services/[slug]`)
- Blog posts: `src/data/posts.ts` (9 SEO-friendly posts under `/blog/[slug]`)
- Gallery: `src/data/gallery.ts`
- Placeholder images use Pexels; swap the IDs in the data files / `px()` helper for real project photos.

## SEO Included

- Metadata + Open Graph + canonical per page
- `sitemap.xml` and `robots.ts` (auto-generated)
- LocalBusiness + Service + BlogPosting structured data (JSON-LD)
- Mobile-first layout with sticky header, click-to-call, and floating Call Now button
