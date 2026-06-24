"use client";

import Image from "@/components/BasePathImage";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, PhoneCall } from "@phosphor-icons/react/ssr";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CldContact, CldReveal, Rise } from "@/components/ClaudeShared";
import { siteConfig } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const categories = [
  {
    key: "regular",
    title: "정기청소",
    en: "Regular care",
    text: "사무실·계단·화장실·건물 공용부처럼 반복해서 더러워지는 공간을 주기로 관리합니다.",
    image: "/images/cases/regular-office.webp",
    alt: "정돈된 사무실 바닥과 업무 공간",
    href: "/regular-cleaning",
  },
  {
    key: "total",
    title: "종합청소",
    en: "Deep work",
    text: "외벽·유리창·주차장·대청소처럼 장비와 동선이 필요한 작업을 한 번에 끝냅니다.",
    image: "/images/cases/total-window.webp",
    alt: "상가 유리창 청소 현장",
    href: "/total-cleaning",
  },
  {
    key: "home",
    title: "홈클리닝",
    en: "Living spaces",
    text: "입주·이사·에어컨 청소처럼 생활 공간에 남은 오염의 원인부터 정리합니다.",
    image: "/images/cases/home-move-in.webp",
    alt: "입주 청소를 마친 생활 공간",
    href: "/home-cleaning",
  },
] as const;

const principles = [
  ["현장 우선", "사진만으로 단정하지 않고 방문견적에서 사용량·재질·냄새·시간을 함께 봅니다."],
  ["필요한 범위만", "정해진 패키지를 강요하지 않습니다. 면적과 오염도에 맞춰 설계합니다."],
  ["같은 기준", "공간별 장비와 세제를 나눠, 누가 와도 같은 결과를 남깁니다."],
  ["끝까지 확인", "작업 후 미비한 부분은 피드백 기준으로 다시 정리합니다."],
];

const proofs = [
  {
    before: "/images/cases/regular-stairs-before.webp",
    after: "/images/cases/regular-stairs-after.webp",
    beforeAlt: "청소 전 계단 바닥",
    afterAlt: "청소 후 광택이 살아난 계단",
    place: "건물 계단 · 공용부 정기관리",
  },
  {
    before: "/images/cases/regular-restroom-before.webp",
    after: "/images/cases/regular-restroom-after.webp",
    beforeAlt: "청소 전 화장실 바닥",
    afterAlt: "청소 후 정돈된 화장실",
    place: "상가 화장실 · 위생 집중관리",
  },
];

const reviews = [
  { text: "창틀과 수납장 안쪽까지 정리돼, 바로 짐을 들일 수 있었습니다.", name: "김지현", role: "입주청소" },
  { text: "매주 같은 기준으로 관리해주셔서 직원들이 체감할 만큼 사무실이 정돈됐습니다.", name: "박성우", role: "사무실 정기청소" },
  { text: "영업 전 시간에 맞춰 바닥과 화장실을 정리해주셔서 매장 첫인상이 좋아졌습니다.", name: "이수진", role: "상가청소" },
];

export function HomeExperienceV2() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = useMemo(() => reviews[reviewIndex], [reviewIndex]);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <main className="cld">
      <motion.div className="cld-progress" style={{ scaleX: progress }} />

      {/* ---------- hero ---------- */}
      <section className="cld-hero">
        <div className="cld-hero__grid">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="cld-hero__copy"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="cld-eyebrow">파주 · 일산 · 고양 — 정기청소 전문</p>
            <h1 className="cld-hero__title">
              매일 쓰는 공간일수록,
              <br />
              첫인상은 <em>청결</em>에서
              <br />
              다시 시작됩니다.
            </h1>
            <p className="cld-hero__lead">
              시티클린은 사무실과 건물, 입주 공간을 현장 기준에 맞춰 관리합니다. 보이는 곳보다,
              반복해서 더러워지는 곳을 먼저 봅니다.
            </p>
            <div className="cld-actions">
              <a className="cld-btn cld-btn--dark" href={siteConfig.telHref}>
                <PhoneCall size={17} weight="fill" />
                상담 전화
              </a>
              <a className="cld-btn cld-btn--quiet" href="#services">
                서비스 살펴보기
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>
            <dl className="cld-hero__facts">
              <div>
                <dt>관리 주기</dt>
                <dd>주 1회 – 7회</dd>
              </div>
              <div>
                <dt>견적</dt>
                <dd>무료 방문견적</dd>
              </div>
              <div>
                <dt>상담 시간</dt>
                <dd>09:00 – 20:00</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="cld-hero__media"
            initial={reduce ? false : { opacity: 0 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
          >
            <CldReveal
              after="/images/cases/regular-stairs-after.webp"
              afterAlt="청소 후 광택이 살아난 계단"
              before="/images/cases/regular-stairs-before.webp"
              beforeAlt="청소 전 계단 바닥"
              caption="실제 현장 — 건물 계단 작업 전후"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section className="cld-section" id="services">
        <div className="cld-wrap">
          <header className="cld-head">
            <p className="cld-eyebrow">서비스</p>
            <h2 className="cld-h2">공간의 상태에 맞춰, 세 가지로 나눕니다.</h2>
          </header>
          <div className="cld-cats">
            {categories.map((cat, index) => (
              <Rise delay={index * 0.08} key={cat.key}>
                <Link className="cld-cat" href={cat.href}>
                  <span className="cld-cat__media">
                    <Image alt={cat.alt} className="cld-cat__img" fill sizes="(max-width: 900px) 100vw, 33vw" src={cat.image} />
                  </span>
                  <span className="cld-cat__en">{cat.en}</span>
                  <span className="cld-cat__title">{cat.title}</span>
                  <span className="cld-cat__text">{cat.text}</span>
                  <span className="cld-cat__go">
                    자세히 보기
                    <ArrowUpRight size={15} weight="bold" />
                  </span>
                </Link>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- approach ---------- */}
      <section className="cld-approach">
        <div className="cld-wrap">
          <div className="cld-approach__grid">
            <Rise>
              <p className="cld-eyebrow">일하는 방식</p>
              <p className="cld-approach__quote">
                고품질 청소를 <em>합리적인 비용</em>으로. 정해진 패키지가 아니라, 현장을 보고
                필요한 범위만 설계합니다.
              </p>
            </Rise>
            <Rise delay={0.1}>
              <dl className="cld-points">
                {principles.map(([term, desc]) => (
                  <div className="cld-points__row" key={term}>
                    <dt>{term}</dt>
                    <dd>{desc}</dd>
                  </div>
                ))}
              </dl>
            </Rise>
          </div>
        </div>
      </section>

      {/* ---------- proof ---------- */}
      <section className="cld-section">
        <div className="cld-wrap">
          <header className="cld-head">
            <p className="cld-eyebrow">작업 전후</p>
            <h2 className="cld-h2">결과는 손잡이를 움직여 직접 확인하세요.</h2>
          </header>
          <div className="cld-proof">
            {proofs.map((proof, index) => (
              <Rise delay={index * 0.08} key={proof.place}>
                <figure className="cld-proof__item">
                  <div className="cld-proof__frame">
                    <BeforeAfterSlider
                      after={proof.after}
                      afterAlt={proof.afterAlt}
                      before={proof.before}
                      beforeAlt={proof.beforeAlt}
                      label={`${proof.place} 작업 전후`}
                    />
                  </div>
                  <figcaption className="cld-proof__cap">{proof.place}</figcaption>
                </figure>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- voice ---------- */}
      <section className="cld-voice">
        <div className="cld-wrap">
          <p className="cld-eyebrow">고객의 말</p>
          <motion.blockquote
            animate={{ opacity: 1, y: 0 }}
            className="cld-voice__quote"
            initial={{ opacity: 0, y: 14 }}
            key={reviewIndex}
            transition={{ duration: 0.5, ease }}
          >
            “{review.text}”
          </motion.blockquote>
          <div className="cld-voice__by">
            <strong>{review.name}</strong>
            <span>{review.role}</span>
          </div>
          <div className="cld-voice__dots" aria-label="후기 선택">
            {reviews.map((item, index) => (
              <button
                aria-label={`${item.name} 후기 보기`}
                aria-pressed={reviewIndex === index}
                data-active={reviewIndex === index}
                key={item.name}
                onClick={() => setReviewIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>

      <CldContact />
    </main>
  );
}
