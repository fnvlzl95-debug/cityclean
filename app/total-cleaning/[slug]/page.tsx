import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService, getServicesByCategory, servicePath } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServicesByCategory("total").map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService("total", slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: servicePath(service),
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function TotalCleaningDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService("total", slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
