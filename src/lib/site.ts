export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bathroomremodelplano.com";

export const absoluteUrl = (path: string) =>
  `${siteUrl.replace(/\/+$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

export const site = {
  name: "Eco Bathroom Remodel",
  legalName: "Eco Bathroom Remodel LLC",
  url: siteUrl,
  phone: "+1 (972) 391-8227",
  phoneHref: "tel:+19723918227",
  email: "info@bathroomremodelplano.com",
  ogImage: absoluteUrl("/images/og-modern-marble-walk-in-shower.jpg"),
  address: {
    street: "5700 West Plano Pkwy, Suite 1000",
    city: "Plano",
    state: "TX",
    zip: "75093",
    full: "5700 West Plano Pkwy, Suite 1000, Plano, TX 75093",
  },
  serviceArea: [
    "Plano",
    "Frisco",
    "Allen",
    "McKinney",
    "Richardson",
    "Carrollton",
    "Lewisville",
    "The Colony",
    "Dallas",
  ],
  hours: "Mon–Sat: 7:00 AM – 7:00 PM",
  founded: 2014,
};

const imageFiles: Record<number, string> = {
  7534282: "/images/modern-marble-walk-in-shower.webp",
  5825561: "/images/complete-bathroom-renovation.webp",
  6899351: "/images/tub-to-shower-conversion.webp",
  7005476: "/images/modern-glass-shower-installation.webp",
  6957081: "/images/white-bathtub-replacement.webp",
  7031840: "/images/frameless-glass-shower-enclosure.webp",
  8583810: "/images/bathroom-tile-flooring.webp",
  5502253: "/images/custom-double-vanity.webp",
  6653889: "/images/gold-faucet-fixture-upgrade.webp",
  7005279: "/images/chrome-faucet-marble-bathroom.webp",
  5502260: "/images/accessible-walk-in-shower.webp",
  9252956: "/images/freestanding-tub-luxury-bathroom.webp",
  6835174: "/images/modern-bathroom-gold-trim.webp",
  7031719: "/images/minimalist-bathroom-sink-toilet.webp",
  8925979: "/images/sunlit-bathroom-chrome-faucet.webp",
  8134805: "/images/gray-tiled-bathroom-bathtub.webp",
  4300078: "/images/shower-fixture-upgrade.webp",
  6890406: "/images/bright-modern-bathroom-sink.webp",
};

export const px = (id: number) =>
  imageFiles[id] ?? "/images/modern-marble-walk-in-shower.webp";