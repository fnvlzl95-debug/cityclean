"use client";

import Image from "@/components/BasePathImage";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Buildings,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  ChatCircleDots,
  ClipboardText,
  Drop,
  Gift,
  House,
  Leaf,
  List,
  MapPin,
  PhoneCall,
  Plus,
  Receipt,
  ShieldCheck,
  Sparkle,
  Star,
  ThumbsUp,
  Truck,
  Wrench,
} from "@phosphor-icons/react/ssr";
import { DesignSwitch } from "@/components/DesignSwitch";
import { BucketV4, MascotV4 } from "@/components/MascotV4";
import { siteConfig } from "@/lib/data";

const MASCOT_IMG: string | null = "/images/generated/cityclean-mascot-v4.png";

type IconComponent = typeof House;
type Tone = "green" | "blue" | "yellow" | "purple";
type NavItem = { label: string; href: string };
type HeroFeature = { icon: IconComponent; color: "blue" | "green"; a: string; b: string };
type BookingStep = { no: number; tone: Exclude<Tone, "purple">; icon: IconComponent; title: string; desc: string };
type ServiceItem = { tone: Tone; icon: IconComponent; title: string; desc: string; image: string; alt: string };
type EventBenefit = { label?: string; icon?: IconComponent; a: string; b: string };
type BottomBenefit = { icon: IconComponent; a: string; b: string };

const navItems: NavItem[] = [
  { label: "서비스", href: "#v4-services" },
  { label: "예약", href: "#v4-steps" },
  { label: "후기", href: "#v4-result" },
  { label: "이벤트", href: "#v4-event" },
  { label: "문의하기", href: "#v4-trust" },
];

const heroFeatures: HeroFeature[] = [
  { icon: ShieldCheck, color: "blue", a: "전문 교육받은", b: "청소 전문가" },
  { icon: Leaf, color: "green", a: "친환경 세제 사용", b: "안심 청소" },
  { icon: ThumbsUp, color: "blue", a: "고객 만족도 98%", b: "높은 재이용률" },
];

const bookingSteps: BookingStep[] = [
  { no: 1, tone: "green", icon: House, title: "공간 유형 선택", desc: "우리 집, 오피스, 이사 등\n공간을 선택해 주세요." },
  { no: 2, tone: "blue", icon: CalendarBlank, title: "날짜 & 시간 선택", desc: "원하는 날짜와 시간을\n선택해 주세요." },
  { no: 3, tone: "yellow", icon: ClipboardText, title: "정보 입력 & 예약 완료", desc: "연락처와 장소를 입력하면\n예약이 완료됩니다!" },
];

const services: ServiceItem[] = [
  {
    tone: "green",
    icon: House,
    title: "입주청소",
    desc: "새로운 시작을 위한 완벽한 청소! 공사 먼지부터 보이지 않는 곳까지 꼼꼼하게 케어해 드려요.",
    image: "/images/cases/home-move-in.webp",
    alt: "입주청소를 마친 깨끗한 거실",
  },
  {
    tone: "blue",
    icon: Buildings,
    title: "오피스청소",
    desc: "쾌적한 업무 환경을 만들어 드려요! 정기 관리로 늘 깨끗한 오피스 공간을 유지하세요.",
    image: "/images/cases/regular-office.webp",
    alt: "정돈된 오피스 공간",
  },
  {
    tone: "purple",
    icon: Truck,
    title: "이사청소",
    desc: "이사 전후 깔끔한 마무리! 생활 먼지, 묵은 때까지 말끔하게 청소해 드려요.",
    image: "/images/cases/home-move.webp",
    alt: "이사 청소 현장",
  },
  {
    tone: "yellow",
    icon: Drop,
    title: "욕실/주방 집중청소",
    desc: "물때, 곰팡이, 기름때를 한 번에! 찌든 때까지 제거하여 위생적인 공간으로 만들어 드려요.",
    image: "/images/cases/regular-restroom.webp",
    alt: "집중 청소를 마친 욕실",
  },
];

const eventBenefits: EventBenefit[] = [
  { label: "20%", a: "모든 청소 서비스", b: "최대 20% 할인" },
  { icon: Gift, a: "친환경 세제", b: "무료 업그레이드" },
  { icon: ClipboardText, a: "정기 청소 시", b: "추가 10% 할인" },
];

const bottomBenefits: BottomBenefit[] = [
  { icon: ShieldCheck, a: "100% 만족 보장제", b: "만족하지 못하면 재청소!" },
  { icon: Wrench, a: "전문 장비 & 친환경 세제", b: "안전하고 효과적인 청소" },
  { icon: Receipt, a: "투명한 가격, 추가 비용 NO!", b: "견적 그대로 안심 청소" },
  { icon: MapPin, a: "전국 어디서나", b: "시티 클린의 약속" },
];

function LogoV4() {
  return (
    <a className="v4-logo" href="#top">
      <span className="v4-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="14" width="20" height="26" rx="3" fill="#2d8cf0" />
          <rect x="22" y="6" width="16" height="34" rx="3" fill="#1f6fd6" />
          <g fill="#eaf6ff">
            <rect x="10" y="19" width="5" height="5" rx="1" />
            <rect x="17" y="19" width="5" height="5" rx="1" />
            <rect x="10" y="28" width="5" height="5" rx="1" />
            <rect x="17" y="28" width="5" height="5" rx="1" />
            <rect x="27" y="12" width="6" height="6" rx="1" />
            <rect x="27" y="22" width="6" height="6" rx="1" />
          </g>
          <path d="M33 4c5 2 7 6 5 11-5-1-7-5-5-11Z" fill="#2ec27e" />
        </svg>
      </span>
      <span className="v4-logo__text">
        <strong>시티 클린</strong>
        <em>CITY CLEAN</em>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="v4-header">
      <div className="v4-header__inner">
        <LogoV4 />
        <nav aria-label="메인 메뉴" className="v4-nav">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="v4-header__right">
          <DesignSwitch />
          <a className="v4-headphone" href={siteConfig.telHref}>
            <span className="v4-headphone__ic">
              <PhoneCall size={18} weight="fill" />
            </span>
            <span className="v4-headphone__txt">
              <strong>{siteConfig.phone}</strong>
              <em>상담시간 09:00-18:00</em>
            </span>
          </a>
          <button aria-label="메뉴 열기" className="v4-burger" type="button">
            <List size={22} weight="bold" />
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroBadges() {
  return (
    <ul className="v4-hero__trust">
      {heroFeatures.map((feature) => {
        const Icon = feature.icon;
        return (
          <li key={feature.b}>
            <span className={`v4-tic v4-tic--${feature.color}`}>
              <Icon size={18} weight="fill" />
            </span>
            <span className="v4-tic__txt">
              <strong>{feature.a}</strong>
              {feature.b}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function HeroSection() {
  return (
    <section className="v4-hero">
      <div className="v4-hero__scene" aria-hidden="true">
        <svg className="v4-skyline" viewBox="0 0 1440 240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#ffffff" opacity="0.45">
            <rect x="60" y="120" width="70" height="120" rx="4" />
            <rect x="150" y="80" width="54" height="160" rx="4" />
            <rect x="220" y="140" width="60" height="100" rx="4" />
            <rect x="1130" y="110" width="66" height="130" rx="4" />
            <rect x="1210" y="70" width="50" height="170" rx="4" />
            <rect x="1275" y="135" width="64" height="105" rx="4" />
          </g>
          <g fill="#cfe9c4" opacity="0.9">
            <rect x="92" y="150" width="8" height="8" />
            <rect x="108" y="150" width="8" height="8" />
            <rect x="166" y="110" width="8" height="8" />
            <rect x="184" y="110" width="8" height="8" />
            <rect x="1228" y="100" width="8" height="8" />
            <rect x="1246" y="100" width="8" height="8" />
          </g>
        </svg>
        <svg className="v4-hills" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 110C260 50 460 70 720 110S1180 70 1440 96V200H0Z" fill="#bfe7a8" opacity="0.7" />
          <path d="M0 150C300 100 520 130 760 150S1200 120 1440 140V200H0Z" fill="#9fd984" opacity="0.85" />
        </svg>
      </div>
      <span className="v4-bubble v4-bubble--1" aria-hidden="true" />
      <span className="v4-bubble v4-bubble--2" aria-hidden="true" />
      <span className="v4-bubble v4-bubble--3" aria-hidden="true" />
      <span className="v4-bubble v4-bubble--4" aria-hidden="true" />
      <span className="v4-spark v4-spark--1" aria-hidden="true">✦</span>
      <span className="v4-spark v4-spark--2" aria-hidden="true">✦</span>
      <span className="v4-spark v4-spark--3" aria-hidden="true">✦</span>

      <div className="v4-hero__inner">
        <div className="v4-hero__copy">
          <span className="v4-pill">
            깨끗한 공간, 행복한 일상 <Sparkle size={15} weight="fill" />
          </span>
          <h1 className="v4-hero__title">
            <span className="g">청소</span>도 즐겁게,
            <br />
            <span className="b">시티 클린</span>과 함께!
          </h1>
          <p className="v4-hero__lead">전문가의 손길로 반짝이는 공간을 만들어 드려요!</p>
          <HeroBadges />
          <div className="v4-hero__cta">
            <a className="v4-btn v4-btn--green" href="#v4-services">
              서비스 보러가기 <ArrowRight size={17} weight="bold" />
            </a>
            <a className="v4-btn v4-btn--white" href="#v4-steps">
              빠른 예약하기 <CalendarBlank size={17} weight="bold" />
            </a>
          </div>
        </div>

        <div className="v4-hero__art">
          <span className="v4-speech" aria-hidden="true">
            반짝반짝
            <br />
            깨끗해져요!
          </span>
          {MASCOT_IMG ? (
            <Image
              alt="시티클린 3D 마스코트 캐릭터"
              className="v4-mascot"
              height={630}
              priority
              sizes="(max-width: 720px) 78vw, 430px"
              src={MASCOT_IMG}
              width={420}
            />
          ) : (
            <MascotV4 className="v4-mascot" />
          )}
          <BucketV4 className="v4-bucket" />
          <span className="v4-plant" aria-hidden="true">
            <Leaf size={36} weight="fill" />
          </span>
        </div>
      </div>

      <svg className="v4-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 54C180 12 340 12 540 46S900 96 1080 70 1320 28 1440 40V110H0Z" fill="#ffffff" opacity="0.7" />
        <path d="M0 70C200 30 360 34 560 62S940 104 1140 84 1340 50 1440 64V110H0Z" fill="#ffffff" />
      </svg>
    </section>
  );
}

function BookingStepCard({ step, showArrow }: { step: BookingStep; showArrow: boolean }) {
  const Icon = step.icon;

  return (
    <div className="v4-step-wrap">
      <article className="v4-step">
        <span className={`v4-step__no v4-step__no--${step.tone}`}>{step.no}</span>
        <span className={`v4-step__ic v4-step__ic--${step.tone}`}>
          <Icon size={30} weight="duotone" />
        </span>
        <strong>{step.title}</strong>
        <p>{step.desc}</p>
      </article>
      {showArrow ? (
        <span className="v4-step__arrow" aria-hidden="true">
          <CaretRight size={22} weight="bold" />
        </span>
      ) : null}
    </div>
  );
}

function QuickBookingCard() {
  return (
    <aside className="v4-quickcard">
      <strong>빠른 예약</strong>
      <p>
        지금 바로 상담하고
        <br />
        빠르게 예약하세요!
      </p>
      <span className="v4-quickcard__num">
        <PhoneCall size={20} weight="fill" />
        {siteConfig.phone}
      </span>
      <a className="v4-quickcard__btn" href={siteConfig.telHref}>
        전화 상담하기
      </a>
    </aside>
  );
}

function BookingStepsSection() {
  return (
    <section className="v4-steps" id="v4-steps">
      <div className="v4-wrap v4-steps__grid">
        <div className="v4-steps__head">
          <h2>
            3단계로
            <br />
            간편하게
            <br />
            예약하세요!
          </h2>
          <span className="v4-doodle" aria-hidden="true">
            <ArrowRight size={30} weight="bold" />
          </span>
        </div>

        <div className="v4-steps__cards">
          {bookingSteps.map((step, index) => (
            <BookingStepCard key={step.no} showArrow={index < bookingSteps.length - 1} step={step} />
          ))}
        </div>

        <QuickBookingCard />
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <article className={`v4-card v4-card--${service.tone}`}>
      <div className="v4-card__media">
        <Image alt={service.alt} fill sizes="(max-width: 760px) 50vw, 240px" src={service.image} />
        <span className="v4-card__ic">
          <Icon size={22} weight="fill" />
        </span>
      </div>
      <div className="v4-card__body">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <button aria-label={`${service.title} 자세히 보기`} className="v4-card__plus" type="button">
          <Plus size={18} weight="bold" />
        </button>
      </div>
    </article>
  );
}

function ServicesSection() {
  return (
    <section className="v4-services" id="v4-services">
      <div className="v4-wrap">
        <div className="v4-sec-head">
          <div>
            <span className="v4-eyebrow">시티 클린의</span>
            <h2 className="v4-h2">
              전문 청소 서비스 <Sparkle size={22} weight="fill" />
            </h2>
            <p>공간에 맞는 맞춤 청소로 완벽한 깨끗함을 선사합니다.</p>
          </div>
          <a className="v4-ghost" href="#v4-services">
            전체 서비스 보기 <ArrowRight size={15} weight="bold" />
          </a>
        </div>

        <div className="v4-cards">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const move = (clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      className="v4-ba"
      ref={frame}
      onPointerDown={(e) => {
        drag.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => drag.current && move(e.clientX)}
      onPointerUp={() => (drag.current = false)}
    >
      <Image alt="청소 후 깨끗한 욕실" className="v4-ba__img" fill sizes="(max-width: 900px) 100vw, 520px" src="/images/cases/regular-restroom-after.webp" />
      <div className="v4-ba__before" style={{ width: `${pos}%` }}>
        <Image alt="청소 전 욕실" className="v4-ba__img" fill sizes="(max-width: 900px) 100vw, 520px" src="/images/cases/regular-restroom-before.webp" />
      </div>
      <span className="v4-ba__tag v4-ba__tag--before">BEFORE</span>
      <span className="v4-ba__tag v4-ba__tag--after">AFTER</span>
      <div className="v4-ba__handle" style={{ left: `${pos}%` }}>
        <span>
          <CaretLeft size={13} weight="bold" />
          <CaretRight size={13} weight="bold" />
        </span>
      </div>
    </div>
  );
}

function ReviewMiniCard() {
  return (
    <article className="v4-review">
      <div className="v4-stars" aria-label="별점 5점">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={17} weight="fill" />
        ))}
      </div>
      <strong>정말 새집처럼 변했어요!</strong>
      <p>구석구석 꼼꼼하게 청소해 주셔서 감동했습니다.</p>
      <div className="v4-review__by">
        <span className="v4-avatar" aria-hidden="true">
          <House size={16} weight="fill" />
        </span>
        <span>
          김** 고객님 <i>입주청소 이용</i>
        </span>
      </div>
    </article>
  );
}

function BeforeAfterSection() {
  return (
    <section className="v4-result" id="v4-result">
      <div className="v4-wrap v4-result__grid">
        <div className="v4-result__copy">
          <span className="v4-eyebrow">눈으로 확인하는</span>
          <h2 className="v4-h2">
            청소 효과! <Sparkle size={22} weight="fill" />
          </h2>
          <p>시티 클린의 꼼꼼한 청소 전후를 확인해 보세요.</p>
          <a className="v4-ghost" href="#v4-result">
            더 많은 후기 보기 <ArrowRight size={15} weight="bold" />
          </a>
        </div>

        <BeforeAfterSlider />
        <ReviewMiniCard />
      </div>
      <div className="v4-dots" aria-hidden="true">
        <span data-active="true" />
        <span />
        <span />
      </div>
    </section>
  );
}

function PromoEventSection() {
  return (
    <section className="v4-event" id="v4-event">
      <div className="v4-wrap v4-event__card">
        <div className="v4-event__copy">
          <span className="v4-pill v4-pill--green">진행중인 이벤트</span>
          <h2>
            <span className="hl">5월 한정!</span> 봄맞이 청소 할인 이벤트
          </h2>
          <p>지금 예약하시면 최대 20% 할인 혜택을 드려요!</p>
          <a className="v4-ghost v4-ghost--solid" href={siteConfig.telHref}>
            이벤트 자세히 보기 <ArrowRight size={15} weight="bold" />
          </a>
        </div>

        <ul className="v4-perks">
          {eventBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <li key={benefit.a}>
                <span className="v4-perk__ic">
                  {benefit.label ? <b>{benefit.label}</b> : Icon ? <Icon size={26} weight="duotone" /> : null}
                </span>
                <span className="v4-perk__txt">
                  <strong>{benefit.a}</strong>
                  {benefit.b}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="v4-event__visual" aria-hidden="true">
          <div className="v4-coupon">
            <span className="v4-coupon__off">
              20<small>%</small>
              <em>OFF</em>
            </span>
          </div>
          {MASCOT_IMG ? (
            <Image alt="" className="v4-event__mascot" height={160} sizes="96px" src={MASCOT_IMG} width={106} />
          ) : (
            <MascotV4 className="v4-event__mascot" />
          )}
        </div>
      </div>
    </section>
  );
}

function BenefitRowSection() {
  return (
    <section className="v4-trust" id="v4-trust">
      <div className="v4-wrap v4-trust__grid">
        {bottomBenefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div className="v4-guar" key={benefit.a}>
              <span className="v4-guar__ic">
                <Icon size={24} weight="duotone" />
              </span>
              <span className="v4-guar__txt">
                <strong>{benefit.a}</strong>
                {benefit.b}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FloatingInquiryButton() {
  return (
    <a className="v4-fab" href={siteConfig.kakaoUrl}>
      <ChatCircleDots size={20} weight="fill" />
      문의하기
    </a>
  );
}

export function HomeV4() {
  return (
    <div className="v4-home" id="top">
      <Header />
      <HeroSection />
      <BookingStepsSection />
      <ServicesSection />
      <BeforeAfterSection />
      <PromoEventSection />
      <BenefitRowSection />
      <FloatingInquiryButton />
    </div>
  );
}
