"use client";

import {
  ArrowRight,
  Buildings,
  CalendarBlank,
  ChatCircleText,
  ClipboardText,
  Clock,
  House,
  Leaf,
  List,
  MapPin,
  PhoneCall,
  Sparkle,
  Star,
  Truck,
  Wrench,
} from "@phosphor-icons/react/ssr";
import Image from "@/components/BasePathImage";
import Link from "next/link";
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { DesignSwitch } from "@/components/DesignSwitch";
import { siteConfig } from "@/lib/data";
import { withBasePath } from "@/lib/paths";

const POSTER_W = 1055;
const POSTER_PHONE = "1555-1234";

type IconComponent = typeof House;
type NavItem = { label: string; href: string };
type ServiceCard = { icon: IconComponent; title: string; desc: string };
type StatItem = { value: string; unit: string; label: string };
type ReviewItem = { text: string; by: string };

const navItems: NavItem[] = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/regular-cleaning" },
  { label: "이용안내", href: "/contact" },
  { label: "후기", href: "#poster-review" },
  { label: "청소사례", href: "#poster-before" },
  { label: "고객센터", href: "#poster-footer" },
];

const serviceCards: ServiceCard[] = [
  { icon: House, title: "입주청소", desc: "새 집의 시작을 완벽하게" },
  { icon: Truck, title: "이사청소", desc: "이사 전후 깔끔한 마무리" },
  { icon: Buildings, title: "상가·사무실 청소", desc: "비즈니스 공간을 더 청결하게" },
  { icon: Wrench, title: "특수청소", desc: "곰팡이·화재·악취 케어" },
  { icon: ClipboardText, title: "정기청소", desc: "일상 속 쾌적함을 정기적으로" },
  { icon: Leaf, title: "에어컨 청소", desc: "보이지 않는 곳까지 시원하게" },
];

const stats: StatItem[] = [
  { value: "7,842", unit: "건", label: "누적 청소 건수" },
  { value: "98.7", unit: "%", label: "고객 만족도" },
  { value: "3,215", unit: "명", label: "재이용 고객 수" },
  { value: "6", unit: "년", label: "전문 청소 경력" },
];

const reviews: ReviewItem[] = [
  { text: "입주청소 정말 꼼꼼하게 해주셨어요. 새집 느낌 그대로입니다!", by: "서울 마포구 / 박OO님" },
  { text: "이사 전후로 이용했는데 너무 만족해요. 추천합니다!", by: "경기 고양시 / 이OO님" },
  { text: "상가 청소 정기적으로 맡기는데 항상 깔끔하고 응대도 좋아요.", by: "인천 남동구 / 김OO님" },
];

function PaperTexture({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`poster-paper-texture ${className}`} />;
}

function TornPaper({
  children,
  className = "",
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "mint" | "blue" | "black" | "orange" | "white";
}) {
  return (
    <div className={`poster-torn poster-torn--${tone} ${className}`}>
      <PaperTexture />
      {children}
    </div>
  );
}

function RoughHeadline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`poster-rough-headline ${className}`}>{children}</span>;
}

function TapeStrip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`poster-tape ${className}`}>{children}</span>;
}

function PaperClip({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`poster-paperclip ${className}`} />;
}

function HandDrawnArrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`poster-arrow ${className}`} viewBox="0 0 120 82">
      <path d="M103 9C77 7 51 20 36 40c-8 11-10 22-6 31" />
      <path d="M20 58l10 16 17-7" />
    </svg>
  );
}

function Scribble({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <span className={`poster-scribble ${className}`}>
      {children}
      <svg aria-hidden="true" viewBox="0 0 160 34">
        <path d="M7 24c24-16 42-17 56-3 13 13 29 12 49-4 13-10 26-10 39 1" />
      </svg>
    </span>
  );
}

function Starburst({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`poster-starburst ${className}`}>{children}</span>;
}

function HalftoneImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span className={`poster-halftone ${className}`}>
      <Image alt={alt} fill sizes="(max-width: 1100px) 100vw, 1055px" src={src} />
    </span>
  );
}

function RoughButton({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <a className={`poster-rough-button ${className}`} href={withBasePath(href)}>
      {children}
      <ArrowRight size={19} weight="bold" />
    </a>
  );
}

function GraphPaper({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`poster-graph-paper ${className}`} />;
}

function NewspaperCutout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`poster-newspaper ${className}`}>{children}</span>;
}

function PosterDoodles() {
  return (
    <>
      <span aria-hidden="true" className="poster-top-rip" />
      <span aria-hidden="true" className="poster-spark poster-spark--header" />
      <span aria-hidden="true" className="poster-spark poster-spark--service" />
      <span aria-hidden="true" className="poster-spark poster-spark--cta" />
      <span aria-hidden="true" className="poster-rip poster-rip--hero" />
      <span aria-hidden="true" className="poster-rip poster-rip--stats" />
      <span aria-hidden="true" className="poster-rip poster-rip--proof" />
      <span aria-hidden="true" className="poster-rip poster-rip--cta" />
      <span aria-hidden="true" className="poster-orange-star" />
      <span aria-hidden="true" className="poster-white-scratch poster-white-scratch--estimate" />
      <span aria-hidden="true" className="poster-white-scratch poster-white-scratch--cta" />
    </>
  );
}

function LogoMark({ invert = false }: { invert?: boolean }) {
  return (
    <Link aria-label="시티 클린 홈" className={`poster-logo ${invert ? "poster-logo--invert" : ""}`} href="/">
      <strong>시티 클린</strong>
      <span>CITY CLEAN</span>
      <Sparkle aria-hidden="true" size={25} weight="fill" />
    </Link>
  );
}

function PosterHeader() {
  return (
    <header className="poster-header">
      <LogoMark />
      <nav aria-label="포스터 주요 메뉴" className="poster-nav">
        {navItems.map((item) => (
          <a href={withBasePath(item.href)} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      <DesignSwitch />
      <a className="poster-fast" href={siteConfig.telHref}>
        빠른 견적 문의
      </a>
      <button aria-label="메뉴 열기" className="poster-menu" type="button">
        <List size={32} weight="bold" />
      </button>
    </header>
  );
}

function QuickEstimate() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert("견적 요청이 접수되었습니다. 담당자가 확인 후 빠르게 연락드리겠습니다.");
  };

  return (
    <form className="poster-estimate-form" onSubmit={handleSubmit}>
      <select aria-label="청소 종류" defaultValue="" required>
        <option disabled value="">
          청소 종류를 선택해주세요
        </option>
        <option>입주청소</option>
        <option>이사청소</option>
        <option>정기청소</option>
        <option>에어컨청소</option>
      </select>
      <select aria-label="공간 유형" defaultValue="" required>
        <option disabled value="">
          공간 유형을 선택해주세요
        </option>
        <option>아파트/주택</option>
        <option>사무실</option>
        <option>상가</option>
        <option>건물 공용부</option>
      </select>
      <select aria-label="평수" defaultValue="" required>
        <option disabled value="">
          평수(면적)를 선택해주세요
        </option>
        <option>10평 이하</option>
        <option>10평 - 30평</option>
        <option>30평 - 60평</option>
        <option>60평 이상</option>
      </select>
      <button type="submit">
        견적 바로 보기
        <ArrowRight size={23} weight="bold" />
      </button>
    </form>
  );
}

function ServiceGrid() {
  return (
    <div className="poster-service-grid">
      {serviceCards.map((service) => {
        const Icon = service.icon;
        return (
          <article className="poster-service-card" key={service.title}>
            <Icon aria-hidden="true" size={34} weight="duotone" />
            <strong>{service.title}</strong>
            <p>{service.desc}</p>
          </article>
        );
      })}
    </div>
  );
}

function StatsStrip() {
  return (
    <section aria-label="시티 클린 실적" className="poster-stats">
      <TornPaper className="poster-stats__label" tone="mint">
        <strong>숫자로 증명하는</strong>
        <span>시티 클린</span>
      </TornPaper>
      <div className="poster-stats__inner">
        {stats.map((stat) => (
          <div className="poster-stat" key={stat.label}>
            <strong>
              {stat.value}
              <small>{stat.unit}</small>
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <NewspaperCutout className="poster-stats__city">
        <HalftoneImage alt="도시 빌딩 흑백 콜라주" src="/images/generated/poster-city-halftone.png" />
      </NewspaperCutout>
    </section>
  );
}

function BeforeAfterBlock() {
  return (
    <section className="poster-proof" id="poster-before">
      <div className="poster-before-after">
        <figure className="poster-before">
          <HalftoneImage alt="청소 전 어질러진 어두운 방" src="/images/generated/poster-before-room.png" />
          <figcaption>BEFORE</figcaption>
        </figure>
        <HandDrawnArrow className="poster-before-arrow" />
        <figure className="poster-after">
          <Image alt="청소 후 밝고 깨끗한 거실" fill sizes="360px" src="/images/generated/poster-after-room.png" />
          <figcaption>AFTER</figcaption>
        </figure>
        <RoughButton className="poster-proof__button" href="/regular-cleaning/stairs">
          실제 청소 사례 더 보기
        </RoughButton>
      </div>
      <div className="poster-review" id="poster-review">
        <GraphPaper />
        <span aria-hidden="true" className="poster-review-hand" />
        <span aria-hidden="true" className="poster-review-scribble" />
        <h2>REAL REVIEW</h2>
        <p>고객님들의 생생한 후기!</p>
        <div className="poster-review__cards">
          {reviews.map((review) => (
            <article className="poster-review-card" key={review.by}>
              <span className="poster-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star aria-hidden="true" key={index} size={16} weight="fill" />
                ))}
              </span>
              <p>{review.text}</p>
              <strong>{review.by}</strong>
            </article>
          ))}
        </div>
        <RoughButton className="poster-review__button" href="/contact">
          후기 더 보기
        </RoughButton>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className="poster-bottom-cta">
      <TornPaper className="poster-bottom-cta__copy" tone="blue">
        <h2>
          지금 예약하고,
          <br />
          깨끗한 변화를 경험하세요!
        </h2>
      </TornPaper>
      <div className="poster-call-card">
        <span>상담 및 예약 문의</span>
        <strong>
          <PhoneCall aria-hidden="true" size={31} weight="bold" />
          {POSTER_PHONE}
        </strong>
        <small>평일 09:00 - 18:00 (주말/공휴일 휴무)</small>
      </div>
      <a className="poster-reserve" href={withBasePath("/contact")}>
        <CalendarBlank aria-hidden="true" size={33} weight="duotone" />
        <strong>예약하기</strong>
        <span>
          간편 예약 바로가기
          <ArrowRight aria-hidden="true" size={18} weight="bold" />
        </span>
      </a>
      <TornPaper className="poster-note" tone="mint">
        <PaperClip />
        <span>오늘의 청소,</span>
        <strong>내일의 여유.</strong>
        <i>☺</i>
      </TornPaper>
    </section>
  );
}

function PosterFooter() {
  return (
    <footer className="poster-footer" id="poster-footer">
      <LogoMark invert />
      <p>
        (주)시티 클린 ㅣ 대표 : 김시티 ㅣ 사업자등록번호 : 123-45-67890
        <br />
        서울특별시 강남구 테헤란로 123, 10층 (역삼동)
      </p>
      <nav aria-label="하단 링크">
        <a href={withBasePath("/contact")}>개인정보처리방침</a>
        <a href={withBasePath("/contact")}>이용약관</a>
        <span>© CITY CLEAN. All rights reserved.</span>
      </nav>
      <div className="poster-social">
        <a aria-label="인스타그램" href={siteConfig.instagramUrl}>
          in
        </a>
        <a aria-label="채팅 상담" href={siteConfig.kakaoUrl}>
          <ChatCircleText size={18} weight="bold" />
        </a>
        <a aria-label="위치 보기" href={siteConfig.naverPlaceUrl}>
          <MapPin size={18} weight="bold" />
        </a>
      </div>
    </footer>
  );
}

export function HomePoster() {
  const frameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const frame = frameRef.current;
    const stage = stageRef.current;
    if (!frame || !stage) return;

    const measure = () => {
      const availableWidth = window.innerWidth || frame.clientWidth;
      const nextScale = Math.max(0.28, Math.min(1, availableWidth / POSTER_W));
      setScale(nextScale);
      setHeight(stage.offsetHeight * nextScale);
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(frame);
    resizeObserver.observe(stage);
    window.addEventListener("load", measure);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("load", measure);
    };
  }, []);

  return (
    <div
      className="poster-home"
      ref={frameRef}
      style={{ ["--poster-scale" as string]: scale, height: height ? `${height}px` : undefined }}
    >
      <div className="poster-stage" ref={stageRef}>
        <main className="poster-board">
          <PaperTexture />
          <PosterDoodles />
          <PosterHeader />
          <section className="poster-hero">
            <div className="poster-hero__copy">
              <h1>
                <RoughHeadline className="poster-title-black">도시 청소,</RoughHeadline>
                <RoughHeadline className="poster-title-blue">새로고침</RoughHeadline>
              </h1>
              <p>
                더 깨끗한 공간, 더 가벼운 일상.
                <br />
                <strong>시티 클린</strong>이 도시의 라이프스타일을 새로고칩니다.
              </p>
            </div>
            <Starburst className="poster-clean-burst">CLEAN</Starburst>
            <Scribble className="poster-city-scribble">CITY CLEAN</Scribble>
            <HandDrawnArrow className="poster-city-arrow" />
            <NewspaperCutout className="poster-photo poster-photo--left">
              <HalftoneImage alt="도시 거리 흑백 하프톤 사진" src="/images/generated/poster-city-halftone.png" />
            </NewspaperCutout>
            <NewspaperCutout className="poster-skyline">
              <HalftoneImage alt="도시 스카이라인 하프톤 사진" src="/images/generated/poster-city-halftone.png" />
            </NewspaperCutout>
            <TornPaper className="poster-cleaner-card" tone="mint">
              <span aria-hidden="true" className="poster-cleaner-rays" />
              <span aria-hidden="true" className="poster-blue-explosion" />
              <Image
                alt="테이블을 청소하는 여성 클리너"
                className="poster-cleaner-img"
                fill
                priority
                sizes="520px"
                src="/images/generated/poster-cleaner-cutout.png"
              />
              <Scribble className="poster-refresh">Refresh Your Space!</Scribble>
            </TornPaper>
            <div className="poster-eco">
              <Leaf aria-hidden="true" size={28} weight="fill" />
              <span>친환경</span>
              <strong>세제 사용</strong>
              <small>인체·환경 무해</small>
            </div>
            <TapeStrip className="poster-brush-tape">청소는 기술, 결과는 감동!</TapeStrip>
          </section>

          <section className="poster-services-estimate">
            <TornPaper className="poster-services-panel" tone="mint">
              <div className="poster-services-head">
                <strong>OUR SERVICE</strong>
                <span>공간에 맞춘 맞춤형 청소 솔루션</span>
              </div>
              <PaperClip className="poster-services-clip" />
              <ServiceGrid />
              <NewspaperCutout className="poster-worker-cutout">
                <Image alt="청소 도구를 든 작업자" fill sizes="130px" src="/images/generated/metro-cleaner.png" />
              </NewspaperCutout>
              <RoughButton className="poster-services-more" href="/regular-cleaning">
                서비스 자세히 보기
              </RoughButton>
            </TornPaper>

            <TornPaper className="poster-estimate-panel" tone="blue">
              <h2>QUICK ESTIMATE</h2>
              <p>10초 만에 빠른 견적 받기!</p>
              <QuickEstimate />
              <span className="poster-time-badge">
                <Clock aria-hidden="true" size={24} weight="bold" />
                <strong>10</strong>
                sec
              </span>
              <span aria-hidden="true" className="poster-mint-splash" />
              <NewspaperCutout className="poster-squeegee-photo">
                <Image alt="하프톤 스퀴지 청소 도구" fill sizes="150px" src="/images/generated/poster-squeegee-halftone.png" />
              </NewspaperCutout>
              <Starburst className="poster-easy-burst">EASY!</Starburst>
            </TornPaper>
          </section>

          <StatsStrip />
          <BeforeAfterBlock />
          <BottomCta />
          <PosterFooter />
        </main>
      </div>
    </div>
  );
}
