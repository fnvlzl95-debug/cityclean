import type { Metadata } from "next";
import Link from "next/link";
import { ArrowSquareOut, ChatCircleText, CheckCircle, MapPin, PhoneCall } from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/PageHero";
import { areas, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "문의하기 | 시티클린",
  description:
    "파주·일산·고양 정기청소, 사무실청소, 계단청소, 화장실청소, 에어컨청소 문의는 시티클린 전화 상담으로 빠르게 확인하세요.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        description="공간 위치, 청소 범위, 원하는 주기를 알려주시면 방문견적 기준으로 안내드립니다."
        eyebrow="문의"
        image="/images/cases/hero-office.webp"
        imageAlt="시티클린 정기청소 상담"
        title="청소 상담은 전화가 가장 빠릅니다."
      />

      <section className="px-4 py-20 md:px-8 md:py-28" id="quick-contact">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">빠른 문의</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              현장 사진과 위치를 함께 보내주세요.
            </h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)]">
              카카오 채널 연결 전에는 전화 상담으로 바로 접수합니다. 채널 주소가 준비되면
              이 버튼을 카카오 상담으로 연결합니다.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              className="flex min-h-[180px] flex-col justify-between rounded-none bg-[var(--ink)] p-6 text-white shadow-[var(--shadow-md)] transition hover:-translate-y-1"
              href={siteConfig.telHref}
            >
              <PhoneCall aria-hidden="true" size={28} weight="duotone" />
              <div>
                <p className="text-sm font-bold text-white/[0.62]">전화 상담</p>
                <p className="mt-2 text-3xl font-black tracking-tight">{siteConfig.phone}</p>
              </div>
            </a>
            <a
              className="flex min-h-[180px] flex-col justify-between rounded-none border border-[var(--line)] bg-white p-6 text-[var(--ink)] shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
              href={siteConfig.kakaoUrl}
            >
              <ChatCircleText aria-hidden="true" size={28} weight="duotone" />
              <div>
                <p className="text-sm font-bold text-[var(--muted)]">카카오 문의</p>
                <p className="mt-2 text-3xl font-black tracking-tight">채널 연결</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">상담 전 안내</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              상담 전에 알려주시면 좋은 정보
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "청소 위치와 건물명",
              "원하는 서비스",
              "면적과 화장실 개수",
              "희망 요일과 시간",
              "현재 오염 상태 사진",
              "주차와 장비 진입 가능 여부",
            ].map((item) => (
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
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10">
            <p className="eyebrow">네이버 플레이스</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              지역별 플레이스 연결
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {areas.map((area) => (
              <Link
                className="group border-t border-[var(--line)] pt-5"
                href={area.placeUrl}
                key={area.slug}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-none bg-[var(--sky)] text-[var(--accent)]">
                      <MapPin aria-hidden="true" size={18} weight="duotone" />
                    </span>
                    <h3 className="text-2xl font-black">{area.title}</h3>
                  </div>
                  <ArrowSquareOut aria-hidden="true" size={17} weight="bold" />
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
