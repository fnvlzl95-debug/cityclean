import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowSquareOut, MapPin, PhoneCall } from "@phosphor-icons/react/ssr";
import { ContactBand } from "@/components/ContactBand";
import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceMosaic } from "@/components/ServiceMosaic";
import type { Service } from "@/lib/data";
import { areas, getArea, getServiceBySlug, servicePath, siteConfig } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    return {};
  }

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    keywords: area.keywords,
    alternates: {
      canonical: `/areas/${area.slug}`,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      images: [{ url: siteConfig.ogImage, alt: `${area.title} 정기청소 시티클린` }],
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    notFound();
  }

  const recommendedServices = area.primaryServiceSlugs
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is Service => Boolean(service));

  const areaJsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: `${siteConfig.name} ${area.title} 정기청소`,
    url: `${siteConfig.siteUrl}/areas/${area.slug}`,
    telephone: siteConfig.phone,
    areaServed: {
      "@type": "City",
      name: area.title,
    },
    serviceType: area.keywords,
  };

  return (
    <>
      <JsonLd data={areaJsonLd} />
      <main>
        <PageHero
          description={area.description}
          eyebrow="지역 서비스"
          image="/images/cases/hero-office.webp"
          imageAlt={`${area.title} 정기청소 현장`}
          title={area.headline}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="btn btn--light" href={siteConfig.telHref}>
              <PhoneCall aria-hidden="true" size={18} weight="duotone" />
              전화 상담
            </a>
            <LinkButton href={area.placeUrl} variant="primary">
              플레이스 연결
            </LinkButton>
          </div>
        </PageHero>

        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionIntro
                eyebrow={`${area.title} 검색어`}
                title={`${area.title}에서 먼저 잡을 검색어`}
                description="플레이스와 홈페이지가 같은 서비스명을 반복적으로 보여주되, 실제 상담권역과 서비스 내용으로 뒷받침합니다."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {area.keywords.map((keyword) => (
                  <span
                    className="rounded-none border border-[var(--line)] bg-white px-4 py-2 text-sm font-black text-[var(--ink)]"
                    key={keyword}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {area.districts.map((district) => (
                <div className="flex items-center gap-3 border-t border-[var(--line)] py-5" key={district}>
                  <span className="grid size-10 place-items-center rounded-none bg-[var(--sky)] text-[var(--accent)]">
                    <MapPin aria-hidden="true" size={18} weight="duotone" />
                  </span>
                  <span className="text-lg font-black">{district}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <SectionIntro
              eyebrow="추천 서비스"
              title={`${area.title}에서 많이 상담하는 서비스`}
              description="정기청소를 중심으로 잡고, 에어컨청소와 종합청소 키워드를 자연스럽게 연결합니다."
            />
            <div className="mt-12">
              <ServiceMosaic compact services={recommendedServices} />
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="border-t border-[var(--line)] pt-6">
              <p className="eyebrow">네이버 플레이스</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
                플레이스와 홈페이지 정보를 같은 방향으로 맞춥니다.
              </h2>
            </div>
            <div className="space-y-6">
              {[
                "업체명은 사업자등록증상 상호 또는 실제 간판명 기준으로 유지합니다.",
                "대표 서비스명, 사진, 설명 문구를 정기청소 중심으로 통일합니다.",
                "전후 사진은 서비스별로 분리해 올리고, 홈페이지 상세 페이지와 연결합니다.",
              ].map((item) => (
                <p
                  className="border-t border-[var(--line)] pt-5 text-lg font-bold leading-8 text-[var(--ink)]"
                  key={item}
                >
                  {item}
                </p>
              ))}
              <Link
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-none bg-[var(--ink)] px-6 text-sm font-black text-white transition hover:-translate-y-0.5"
                href={area.placeUrl}
              >
                네이버 플레이스 보기
                <ArrowSquareOut aria-hidden="true" size={17} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <SectionIntro
              eyebrow="서비스 바로가기"
              title="세부 서비스 바로가기"
              description="검색 사용자가 원하는 서비스로 바로 이동할 수 있게 지역 페이지에서도 연결합니다."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {recommendedServices.map((service) => (
                <Link
                  className="group border-t border-[var(--line)] pt-5"
                  href={servicePath(service)}
                  key={`${service.category}-${service.slug}`}
                >
                  <p className="text-sm font-black text-[var(--accent)]">{service.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{service.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactBand
          description={`${area.title} 정기청소, 사무실청소, 에어컨청소 상담은 전화로 가장 빠르게 확인할 수 있습니다.`}
          title={`${area.title} 청소 상담, 현장 기준으로 안내드립니다.`}
        />
      </main>
    </>
  );
}
