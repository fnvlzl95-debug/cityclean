import Link from "next/link";
import { ArrowUpRight, CheckCircle, PhoneCall } from "@phosphor-icons/react/ssr";
import { ContactBand } from "@/components/ContactBand";
import { LinkButton } from "@/components/LinkButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceMosaic } from "@/components/ServiceMosaic";
import type { ServiceCategoryKey } from "@/lib/data";
import { getServiceGroup, getServicesByCategory, servicePath, siteConfig } from "@/lib/data";

type ServiceHubProps = {
  category: ServiceCategoryKey;
};

const checkPoints = [
  "공간 이용량",
  "오염 누적 속도",
  "운영 전후 작업 가능 시간",
  "정기관리 주기",
  "장비 진입 동선",
  "A/S 확인 기준",
];

export function ServiceHub({ category }: ServiceHubProps) {
  const group = getServiceGroup(category);
  const services = getServicesByCategory(category);
  const leadService = services[0];

  if (!group || !leadService) {
    return null;
  }

  return (
    <main>
      <PageHero
        description={group.description}
        eyebrow={`${group.shortTitle} 서비스`}
        image={leadService.image}
        imageAlt={leadService.imageAlt}
        title={group.title}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a className="btn btn--light" href={siteConfig.telHref}>
            <PhoneCall aria-hidden="true" size={18} weight="duotone" />
            전화 상담
          </a>
          <LinkButton href="/contact" variant="primary">
            무료 방문견적 문의
          </LinkButton>
        </div>
      </PageHero>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <SectionIntro
              eyebrow="세부 서비스"
              title={`${group.title} 세부 서비스`}
              description="각 공간의 오염 속도와 이용 시간을 기준으로 작업 범위와 청소 주기를 맞춥니다."
            />
          </Reveal>
          <div className="mt-12">
            <ServiceMosaic services={services} />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionIntro
              eyebrow="견적 기준"
              title="견적 전에 확인하는 기준"
              description="청소 범위는 면적만으로 정하지 않습니다. 실제 오염도, 운영 시간, 출입 동선을 같이 봅니다."
            />
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {checkPoints.map((item) => (
              <div
                className="flex items-center gap-3 border-t border-[var(--line)] pt-4"
                key={item}
              >
                <CheckCircle
                  aria-hidden="true"
                  className="shrink-0 text-[var(--accent)]"
                  size={20}
                  weight="duotone"
                />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <SectionIntro eyebrow="대표 서비스" title="가장 많이 찾는 서비스" />
          </Reveal>
          <Reveal className="mt-12 grid gap-8 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link
                className="group border-t-2 border-[var(--ink)] pt-5 transition"
                href={servicePath(service)}
                key={service.slug}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                    {service.eyebrow}
                  </p>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="text-[var(--muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                    size={18}
                    weight="bold"
                  />
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.02em]">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{service.description}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactBand
        description={`${group.title} 상담은 현장 사진만으로 단정하지 않고 방문견적 후 작업 범위와 주기를 안내합니다.`}
        title={`${group.title}, 현장 기준으로 견적을 잡습니다.`}
      />
    </main>
  );
}
