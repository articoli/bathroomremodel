import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { services, getService } from "@/data/services";
import { posts, getPost } from "@/data/posts";
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
    const title = `${service.name} in Plano, TX | Eco Bathroom Remodel`;
    return {
      title,
      description: service.description,
      alternates: { canonical: `/${service.slug}` },
      openGraph: {
        title,
        description: service.description,
        url: `${site.url}/${service.slug}`,
      },
    };
  }
  const post = getPost(slug);
  if (post) {
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `/${post.slug}` },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `${site.url}/${post.slug}`,
        type: "article",
        publishedTime: post.date,
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
