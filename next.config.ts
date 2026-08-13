import path from "path";
import type { NextConfig } from "next";
import { services } from "./src/data/services";
import { posts } from "./src/data/posts";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
  async redirects() {
    const serviceRedirects = services.map((s) => ({
      source: `/services/${s.slug}`,
      destination: `/${s.slug}`,
      permanent: true,
    }));
    const postRedirects = posts.map((p) => ({
      source: `/blog/${p.slug}`,
      destination: `/${p.slug}`,
      permanent: true,
    }));
    return [...serviceRedirects, ...postRedirects];
  },
};

export default nextConfig;