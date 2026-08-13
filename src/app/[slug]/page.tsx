import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { services, getService, serviceSeo } from "@/data/services";
import { posts, getPost, postSeo } from "@/data/posts";
import ServiceDetail from "@/components/ServiceDetail";
import PostDetail from "@/components/PostDetail";

export function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    ...posts.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (service) {
    const title = serviceSeo[service.slug] ?? `${service.name} in Plano, TX`;
    return {
      title: { absolute: title },
      description: service.description,
      alternates: { canonical: `/${service.slug}` },
      openGraph: {
        title,
        description: service.description,
        url: `${site.url}/${service.slug}`,
        images: [
          {
            url: site.ogImage,
            width: 1200,
            height: 630,
            alt: "Modern bathroom with marble walls and glass walk-in shower",
          },
        ],
      },
    };
  }
  const post = getPost(slug);
  if (post) {
    const title = postSeo[post.slug] ?? post.title;
    return {
      title: { absolute: title },
      description: post.excerpt,
      alternates: { canonical: `/${post.slug}` },
      openGraph: {
        title,
        description: post.excerpt,
        url: `${site.url}/${post.slug}`,
        type: "article",
        publishedTime: post.date,
        images: [
          {
            url: site.ogImage,
            width: 1200,
            height: 630,
            alt: "Modern bathroom with marble walls and glass walk-in shower",
          },
        ],
      },
    };
  }
  return {};
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (service) return <ServiceDetail service={service} />;
  const post = getPost(slug);
  if (post) return <PostDetail post={post} />;
  notFound();
}
