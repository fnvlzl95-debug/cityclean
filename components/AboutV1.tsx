import Image from "@/components/BasePathImage";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";

export function AboutV1() {
  return (
    <main>
      <PageHero
        description="시티클린은 정기청소를 중심으로 건물, 사무실, 상가, 화장실, 계단, 에어컨까지 공간 상태에 맞춰 관리합니다."
        eyebrow="회사 소개"
        image="/images/cases/regular-office.webp"
        imageAlt="시티클린 사무실 청소 현장"
        title="보이는 곳보다, 반복해서 더러워지는 곳을 봅니다."
      />

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-none bg-[var(--ink)]">
            <Image
              alt="시티클린 계단청소 결과"
              className="h-full w-full object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="/images/cases/regular-stairs.webp"
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="작업 원칙"
              title="현장 기준으로 범위와 주기를 정합니다"
              description="청소는 공간마다 오염 속도가 다릅니다. 시티클린은 방문견적에서 사용량, 바닥 재질, 냄새 원인, 관리 시간을 함께 확인합니다."
            />
            <div className="mt-8 divide-y divide-[var(--line)]">
              {[
                "정기청소는 초도청소 후 유지관리 기준을 잡습니다.",
                "친환경 세제와 공간별 장비를 오염도에 맞게 사용합니다.",
                "작업 후 미비한 부분은 피드백 기준으로 재정비합니다.",
              ].map((item) => (
                <div className="flex gap-3 py-5" key={item}>
                  <CheckCircle
                    aria-hidden="true"
                    className="mt-1 text-[var(--accent)]"
                    size={20}
                    weight="duotone"
                  />
                  <p className="text-lg font-bold leading-8">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          {[
            ["정기청소", "사무실, 계단, 화장실, 건물 공용부처럼 반복 관리가 필요한 공간을 주기별로 관리합니다."],
            ["종합청소", "외벽, 유리창, 주차장, 대청소, 바닥왁스코팅처럼 장비와 동선이 필요한 작업을 진행합니다."],
            ["홈클리닝", "입주청소, 이사청소, 에어컨청소처럼 생활 공간의 오염 원인을 세밀하게 정리합니다."],
          ].map(([title, description]) => (
            <div className="border-t-2 border-[var(--ink)] pt-6" key={title}>
              <h2 className="text-2xl font-extrabold tracking-[-0.02em]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
