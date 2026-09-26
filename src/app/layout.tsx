import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { absoluteUrl, site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "Bathroom remodeling Plano TX | Eco Bathroom Remodel";
const siteDescription =
  "Bathroom remodeling Plano TX made easy. Eco Bathroom Remodel delivers stylish, high-quality bathroom renovations tailored to your home and budget.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: siteTitle,
    template: "%s | Eco Bathroom Remodel",
  },
  description: siteDescription,
  keywords: [
    "bathroom remodel Plano TX",
    "bathroom remodeling Plano",
    "tub to shower conversion Plano",
    "bathroom renovation Dallas",
    "walk in shower installers Frisco",
    "Eco Bathroom Remodel",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Modern bathroom with marble walls and glass walk-in shower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "pbi9nevqfEJibyGiUmBX4DkgmRJJKfzT0oVuOjLD-V4",
  },
  formatDetection: {
    telephone: false,
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: siteDescription,
      publisher: {
        "@id": `${site.url}/#localbusiness`,
      },
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      legalName: site.legalName,
      description: siteDescription,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      image: absoluteUrl("/images/modern-marble-walk-in-shower.webp"),
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.0516,
        longitude: -96.7769,
      },
      openingHours: ["Mo-Sa 07:00-19:00"],
      areaServed: site.serviceArea.map((a) => ({ "@type": "City", name: a })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
