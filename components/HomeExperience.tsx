"use client";

import Image from "@/components/BasePathImage";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChatCircleText,
  CheckCircle,
  EnvelopeSimple,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
} from "@phosphor-icons/react/ssr";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { articles, servicePath, services, siteConfig, type Service } from "@/lib/data";

const serviceCards = ["office", "stairs", "move-in"]
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is Service => Boolean(service));

const teamCards = [
  {
    name: "정기관리팀",
    role: "사무실·건물 관리",
    image: "/images/cases/team-office.webp",
    alt: "시티클린 작업자가 사무실을 청소하는 모습",
  },
  {
    name: "홈클리닝팀",
    role: "입주·이사 청소",
    image: "/images/cases/team-home.webp",
    alt: "입주 공간 창문을 청소하는 작업자",
  },
  {
    name: "종합청소팀",
    role: "유리·바닥·대청소",
    image: "/images/cases/team-window.webp",
    alt: "건물 외부 유리창을 청소하는 작업자",
  },
];

const aboutPoints = [
  "파주·일산·고양 현장 중심 운영",
  "공간별 장비와 세제 분리",
  "작업 후 상태 확인과 안내",
  "정기관리부터 단기청소까지 대응",
];

const planSets = {
  regular: [
    {
      name: "기본 정기관리",
      price: "방문견적",
      items: ["주 1회부터 일정 조율", "바닥·공용부 기본 관리", "화장실·탕비실 체크", "쓰레기 정리와 먼지 제거"],
      accent: false,
    },
    {
      name: "표준 정기관리",
      price: "상담 후",
      items: ["주 2-3회 추천", "계단·복도 주기 관리", "위생 구역 집중 케어", "운영 시간 맞춤 작업"],
      accent: true,
    },
    {
      name: "집중 관리",
      price: "맞춤설계",
      items: ["병원·식당·건물 대응", "초도청소 후 정기 전환", "오염도 높은 구역 관리", "세부 체크리스트 운영"],
      accent: false,
    },
  ],
  single: [
    {
      name: "입주·이사청소",
      price: "상담 후",
      items: ["창틀·수납장 먼지 제거", "주방·욕실 오염 정리", "바닥 전체 마감", "입주 일정 맞춤 진행"],
      accent: false,
    },
    {
      name: "종합 대청소",
      price: "방문견적",
      items: ["상가·건물 대면적 정리", "바닥·유리 상태 확인", "묵은 오염 집중 세척", "정기관리 전 상태 회복"],
      accent: true,
    },
    {
      name: "에어컨 세척",
      price: "기종별",
      items: ["필터와 내부 오염 확인", "곰팡이·냄새 원인 세척", "분해 가능 범위 안내", "조립 후 작동 확인"],
      accent: false,
    },
  ],
};

const reviews = [
  {
    name: "김지현",
    role: "입주청소 고객",
    text: "창틀과 수납장 안쪽까지 깔끔하게 정리돼 바로 짐을 들일 수 있었습니다.",
  },
  {
    name: "박성우",
    role: "사무실 정기청소",
    text: "매주 같은 기준으로 관리해주셔서 직원들이 체감할 만큼 사무실이 정돈됐습니다.",
  },
  {
    name: "이수진",
    role: "상가청소 고객",
    text: "영업 전 시간에 맞춰 바닥과 화장실을 정리해주셔서 매장 첫인상이 좋아졌습니다.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;
const cardStagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function HomeExperience() {
  const [planMode, setPlanMode] = useState<"regular" | "single">("regular");
  const [reviewIndex, setReviewIndex] = useState(0);
  const activePlans = planSets[planMode];
  const review = useMemo(() => reviews[reviewIndex], [reviewIndex]);
  const latestArticles = articles.slice(0, 3);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <>
      <motion.div className="scroll-progress clean-progress" style={{ scaleX: progress }} />
      <main className="figma-home">
        {/* hero */}
        <section className="figma-hero">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="figma-hero__copy"
            initial={{ opacity: 0, y: 26 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="figma-eyebrow">합리적인 비용의 전문 청소</p>
            <h1>
              전문적이고 효율적인
              <br />
              청소 서비스를 제공합니다
            </h1>
            <p className="figma-hero__lead">
              파주·일산·고양의 사무실, 건물, 입주 공간을 현장 기준에 맞춰 꼼꼼하게
              관리합니다.
            </p>
            <div className="figma-actions">
              <a className="figma-button figma-button--green" href={siteConfig.telHref}>
                <PhoneCall size={17} weight="fill" />
                상담 시작하기
              </a>
              <a className="figma-button figma-button--line" href="#services">
                서비스 보기
              </a>
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            className="figma-hero__media"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <Image
              alt="시티클린 청소 서비스 대표 이미지"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              src="/images/cases/hero-office.webp"
            />
          </motion.div>
        </section>

        {/* services */}
        <section className="figma-section figma-block" id="services">
          <div className="figma-container">
            <Reveal>
              <div className="figma-head">
                <p className="figma-eyebrow">서비스</p>
                <h2>언제나 최선의 청소 서비스를 제공합니다</h2>
                <p>
                  공간 상태와 이용 주기에 맞춰 정기청소, 홈클리닝, 종합청소를 조합해
                  안내합니다.
                </p>
              </div>
            </Reveal>
            <motion.div
              className="figma-cards"
              initial="hidden"
              variants={cardStagger}
              viewport={{ once: true, amount: 0.15 }}
              whileInView="show"
            >
              {serviceCards.map((service) => (
                <motion.div variants={cardItem} key={service.slug}>
                  <Link className="figma-card" href={servicePath(service)}>
                    <span className="figma-card__media">
                      <Image alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 380px" src={service.image} />
                    </span>
                    <span className="figma-card__body">
                      <strong>{service.title}</strong>
                      <span className="figma-card__text">{service.summary}</span>
                      <span className="figma-card__go">
                        자세히 보기 <ArrowUpRight size={15} weight="bold" />
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <Reveal className="figma-more">
              <Link className="figma-button figma-button--line" href="/regular-cleaning">
                전체 서비스 보기
                <ArrowRight size={16} weight="bold" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* value */}
        <section className="figma-section figma-split">
          <div className="figma-container">
            <Reveal className="figma-split__grid">
              <div className="figma-split__copy">
                <p className="figma-eyebrow">합리적인 청소 솔루션</p>
                <h2>고품질 청소를 합리적인 비용으로 제공합니다</h2>
                <p>
                  정해진 패키지를 강요하지 않고 면적, 오염도, 작업 가능 시간에 맞춰 필요한
                  범위만 설계합니다.
                </p>
                <div className="figma-actions">
                  <a className="figma-button figma-button--green" href={siteConfig.telHref}>
                    견적 문의
                  </a>
                </div>
              </div>
              <div className="figma-shot">
                <Image alt="건물 정기청소 현장" fill sizes="(max-width: 900px) 100vw, 520px" src="/images/cases/regular-building.webp" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* team */}
        <section className="figma-section figma-block">
          <div className="figma-container">
            <Reveal>
              <div className="figma-head">
                <p className="figma-eyebrow">전문 청소팀</p>
                <h2>완성도 높은 청소는 전문 청소팀에서 시작됩니다</h2>
                <p>
                  같은 장비를 써도 작업 기준이 달라지면 결과가 달라집니다. 공간별 담당
                  기준을 나눠 관리합니다.
                </p>
              </div>
            </Reveal>
            <motion.div
              className="figma-cards"
              initial="hidden"
              variants={cardStagger}
              viewport={{ once: true, amount: 0.15 }}
              whileInView="show"
            >
              {teamCards.map((member) => (
                <motion.div variants={cardItem} key={member.name}>
                  <article className="figma-card">
                    <span className="figma-card__media">
                      <Image alt={member.alt} fill sizes="(max-width: 760px) 100vw, 380px" src={member.image} />
                    </span>
                    <span className="figma-card__body">
                      <strong>{member.name}</strong>
                      <span className="figma-card__text">{member.role}</span>
                    </span>
                  </article>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* about */}
        <section className="figma-section figma-split">
          <div className="figma-container">
            <Reveal className="figma-split__grid figma-split__grid--reverse">
              <div className="figma-shot">
                <Image alt="계단 청소 결과" fill sizes="(max-width: 900px) 100vw, 520px" src="/images/cases/regular-stairs-after.webp" />
              </div>
              <div className="figma-split__copy">
                <p className="figma-eyebrow">회사 소개</p>
                <h2>믿고 맡기는 청소, 시티클린입니다</h2>
                <p>
                  시티클린은 정기적으로 쓰이는 공간의 기본 청결을 유지하는 데 집중합니다.
                  현장 확인 후 필요한 작업만 명확하게 안내합니다.
                </p>
                <div className="figma-check-grid">
                  {aboutPoints.map((point) => (
                    <span key={point}>
                      <CheckCircle size={16} weight="fill" />
                      {point}
                    </span>
                  ))}
                </div>
                <div className="figma-actions">
                  <a className="figma-button figma-button--green" href={siteConfig.telHref}>
                    상담하기
                  </a>
                  <Link className="figma-button figma-button--line" href="/about">
                    더 알아보기
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* pricing */}
        <section className="figma-pricing">
          <div className="figma-container">
            <Reveal>
              <div className="figma-head figma-head--center figma-head--light">
                <p className="figma-eyebrow figma-eyebrow--light">견적 안내</p>
                <h2>합리적인 비용의 청소 플랜을 선택하세요</h2>
                <div className="figma-toggle" aria-label="견적 유형 선택">
                  <button aria-pressed={planMode === "regular"} onClick={() => setPlanMode("regular")} type="button">
                    정기관리
                  </button>
                  <button aria-pressed={planMode === "single"} onClick={() => setPlanMode("single")} type="button">
                    단기청소
                  </button>
                </div>
              </div>
            </Reveal>

            <motion.div
              className="figma-plan-grid"
              initial="hidden"
              variants={cardStagger}
              viewport={{ once: true, amount: 0.15 }}
              whileInView="show"
            >
              {activePlans.map((plan) => (
                <motion.article
                  className={plan.accent ? "figma-plan figma-plan--accent" : "figma-plan"}
                  key={plan.name}
                  variants={cardItem}
                >
                  <h3>{plan.name}</h3>
                  <strong className="figma-plan__price">{plan.price}</strong>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>
                        <CheckCircle size={16} weight="fill" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a className="figma-plan__button" href={siteConfig.telHref}>
                    문의하기
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* reviews */}
        <section className="figma-section figma-reviews">
          <div className="figma-container">
            <Reveal className="figma-reviews__grid">
              <div className="figma-reviews__copy">
                <p className="figma-eyebrow">고객 후기</p>
                <h2>고객이 직접 남긴 이용 후기</h2>
                <p>
                  실제 상담과 작업 이후 고객이 남긴 후기를 바탕으로 시티클린의 작업 기준을
                  확인할 수 있습니다.
                </p>
                <div className="figma-reviews__nav" aria-label="후기 선택">
                  {reviews.map((item, index) => (
                    <button
                      aria-label={`${item.name} 후기 보기`}
                      aria-pressed={reviewIndex === index}
                      key={item.name}
                      onClick={() => setReviewIndex(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>

              <article className="figma-review-card">
                <div className="figma-stars" aria-label="별점 5점">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} weight="fill" />
                  ))}
                </div>
                <p className="figma-review-card__text">{review.text}</p>
                <div className="figma-review-card__by">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* blog */}
        <section className="figma-section figma-block">
          <div className="figma-container">
            <Reveal>
              <div className="figma-head">
                <p className="figma-eyebrow">청소 상식</p>
                <h2>알아두면 좋은 청소 팁과 소식</h2>
                <p>
                  정기청소 주기, 사무실 체크리스트, 악취 관리처럼 상담 전에 알면 좋은
                  내용을 정리했습니다.
                </p>
              </div>
            </Reveal>
            <motion.div
              className="figma-cards"
              initial="hidden"
              variants={cardStagger}
              viewport={{ once: true, amount: 0.15 }}
              whileInView="show"
            >
              {latestArticles.map((article, index) => (
                <motion.div variants={cardItem} key={article.slug}>
                  <Link className="figma-card" href={`/cleaning-tips/${article.slug}`}>
                    <span className="figma-card__media">
                      <Image
                        alt={article.title}
                        fill
                        sizes="(max-width: 760px) 100vw, 380px"
                        src={serviceCards[index % serviceCards.length].image}
                      />
                    </span>
                    <span className="figma-card__body">
                      <span className="figma-card__meta">
                        {article.category} · {article.date}
                      </span>
                      <strong>{article.title}</strong>
                      <span className="figma-card__text">{article.description}</span>
                      <span className="figma-card__go">
                        자세히 보기 <ArrowUpRight size={15} weight="bold" />
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* contact */}
        <section className="figma-section figma-contact">
          <div className="figma-container">
            <Reveal className="figma-contact__grid">
              <div>
                <p className="figma-eyebrow">연락처</p>
                <h2>편하게 문의하세요</h2>
                <div className="figma-contact-list">
                  <a href={siteConfig.telHref}>
                    <PhoneCall size={20} weight="fill" />
                    <span>
                      <strong>전화 문의</strong>
                      {siteConfig.phone}
                    </span>
                  </a>
                  <a href={siteConfig.kakaoUrl}>
                    <ChatCircleText size={20} weight="fill" />
                    <span>
                      <strong>카카오 문의</strong>
                      빠른 문의 남기기
                    </span>
                  </a>
                  <Link href="/contact">
                    <MapPin size={20} weight="fill" />
                    <span>
                      <strong>상담 지역</strong>
                      파주 · 일산 · 고양
                    </span>
                  </Link>
                </div>
              </div>

              <form className="figma-contact-form">
                <div className="figma-contact-form__head">
                  <span>
                    <ShieldCheck size={16} weight="fill" />
                    문의 안내
                  </span>
                  <p>위치, 면적, 희망 일정만 남겨주시면 필요한 작업 범위를 안내드립니다.</p>
                </div>
                <input aria-label="이름" placeholder="이름" type="text" />
                <input aria-label="연락처" placeholder="연락처" type="text" />
                <textarea aria-label="문의 내용" placeholder="문의 내용" rows={4} />
                <a className="figma-button figma-button--green" href={siteConfig.telHref}>
                  <EnvelopeSimple size={16} weight="bold" />
                  문의 보내기
                </a>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
