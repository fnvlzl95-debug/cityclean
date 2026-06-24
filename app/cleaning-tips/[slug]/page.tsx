import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { articles, getArticle, getServiceBySlug, servicePath } from "@/lib/data";
import type { Service } from "@/lib/data";
import AirconCleaningSeason from "@/content/cleaning-tips/aircon-cleaning-season.mdx";
import OfficeCleaningChecklist from "@/content/cleaning-tips/office-cleaning-checklist.mdx";
import RegularCleaningCycle from "@/content/cleaning-tips/regular-cleaning-cycle.mdx";
import RestroomOdorCare from "@/content/cleaning-tips/restroom-odor-care.mdx";
import StairsCleaningSigns from "@/content/cleaning-tips/stairs-cleaning-signs.mdx";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const articleComponents: Record<string, ComponentType> = {
  "regular-cleaning-cycle": RegularCleaningCycle,
  "office-cleaning-checklist": OfficeCleaningChecklist,
  "stairs-cleaning-signs": StairsCleaningSigns,
  "restroom-odor-care": RestroomOdorCare,
  "aircon-cleaning-season": AirconCleaningSeason,
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | 시티클린 청소상식`,
    description: article.description,
    alternates: {
      canonical: `/cleaning-tips/${article.slug}`,
    },
  };
}

export default async function CleaningTipDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  const Article = articleComponents[slug];

  if (!article || !Article) {
    notFound();
  }

  const relatedServices = article.relatedServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is Service => Boolean(service));

  return (
    <main>
      <PageHero
        description={article.description}
        eyebrow={article.category}
        image="/images/cases/hero-office.webp"
        imageAlt="시티클린 정기청소 현장"
        title={article.title}
      />
      <article className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,760px)_1fr]">
          <div className="article-body">
            <Article />
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-t border-[var(--line)] pt-5">
              <p className="eyebrow">관련 서비스</p>
              <div className="mt-6 divide-y divide-[var(--line)]">
                {relatedServices.map((service) => (
                  <Link
                    className="block py-5"
                    href={servicePath(service)}
                    key={`${service.category}-${service.slug}`}
                  >
                    <h2 className="text-xl font-black tracking-tight">{service.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {service.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
      <ContactBand
        description="청소상식으로 기준을 확인한 뒤, 실제 현장 상태는 방문견적에서 다시 확인합니다."
        title="공간별 청소 기준, 현장에서 맞춰드립니다."
      />
    </main>
  );
}
