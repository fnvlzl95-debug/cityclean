import Image from "@/components/BasePathImage";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, PhoneCall } from "@phosphor-icons/react/ssr";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ContactBand } from "@/components/ContactBand";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import type { Service } from "@/lib/data";
import { getServicesByCategory, servicePath, siteConfig } from "@/lib/data";

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  const related = getServicesByCategory(service.category)
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main>
      <PageHero
        description={service.description}
        eyebrow={service.eyebrow}
        image={service.image}
        imageAlt={service.imageAlt}
        title={service.title}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a className="btn btn--light" href={siteConfig.telHref}>
            <PhoneCall aria-hidden="true" size={18} weight="duotone" />
            전화 상담
          </a>
          <LinkButton href="/contact" variant="primary">
            방문견적 문의
          </LinkButton>
        </div>
      </PageHero>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              eyebrow="작업 범위"
              title={`${service.title} 작업 범위`}
              description={service.summary}
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {service.keywords.map((keyword) => (
                <span
                  className="rounded-none border border-[var(--line-strong)] bg-white px-3 py-1 text-xs font-bold text-[var(--muted)]"
                  key={keyword}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {service.scope.map((item) => (
              <div className="border-t border-[var(--line)] pt-4" key={item}>
                <CheckCircle
                  aria-hidden="true"
                  className="text-[var(--accent)]"
                  size={22}
                  weight="duotone"
                />
                <p className="mt-3 text-lg font-bold">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-4 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="relative min-h-[480px] overflow-hidden rounded-none bg-[var(--ink)]">
            <Image
              alt={service.imageAlt}
              className="h-full w-full object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              src={service.image}
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="추천 공간"
              title="이런 공간에 맞습니다"
              description="방문견적 때 실제 면적과 오염도를 보고 주기와 작업 범위를 조정합니다."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.recommendedFor.map((item) => (
                <div
                  className="flex items-center gap-3 border-t border-[var(--line)] pt-3.5"
                  key={item}
                >
                  <CheckCircle
                    aria-hidden="true"
                    className="shrink-0 text-[var(--accent)]"
                    size={18}
                    weight="fill"
                  />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {service.beforeAfter ? (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <Reveal className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionIntro
              eyebrow="전후 비교"
              title={`${service.title} 전후 사례`}
              description="실제 작업 사진은 홈페이지와 네이버 플레이스에서 같은 방향으로 관리해 검색 이후 신뢰를 이어갑니다."
            />
            <BeforeAfterSlider
              after={service.beforeAfter.after}
              afterAlt={service.beforeAfter.afterAlt}
              before={service.beforeAfter.before}
              beforeAlt={service.beforeAfter.beforeAlt}
            />
          </Reveal>
        </section>
      ) : null}

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <SectionIntro
              eyebrow="함께 보는 서비스"
              title="같이 상담하는 서비스"
              description="한 번의 방문견적에서 인접한 공간까지 함께 확인할 수 있습니다."
            />
          </Reveal>
          <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                className="group border-t-2 border-[var(--ink)] pt-5 transition"
                href={servicePath(item)}
                key={item.slug}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                    {item.eyebrow}
                  </p>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="text-[var(--muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                    size={18}
                    weight="bold"
                  />
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.02em]">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactBand
        description={`${service.title}는 사진만으로 견적을 단정하기 어렵습니다. 현장 상태와 작업 시간을 확인한 뒤 안내합니다.`}
        title={`${service.title}, 현장 보고 정확히 안내드립니다.`}
      />
    </main>
  );
}
