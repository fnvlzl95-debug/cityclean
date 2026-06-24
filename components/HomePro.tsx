"use client";

import {
  Broom,
  Buildings,
  CalendarCheck,
  CaretDown,
  CaretRight,
  CheckCircle,
  Couch,
  Headset,
  House,
  Lightning,
  List,
  MapPin,
  Medal,
  NotePencil,
  SealCheck,
  ShieldCheck,
  Sparkle,
  SprayBottle,
  Star,
  Storefront,
  X,
} from "@phosphor-icons/react/ssr";
import Image from "@/components/BasePathImage";
import { type FormEvent, useCallback, useMemo, useState } from "react";
import { DesignSwitch } from "@/components/DesignSwitch";
import { siteConfig } from "@/lib/data";

type IconComponent = typeof House;

/* ---------- static data ---------- */

const navItems = [
  { label: "서비스", href: "#pro-services" },
  { label: "파주 청소", href: "#pro-area" },
  { label: "요금안내", href: "#pro-estimate" },
  { label: "실시간 예약", href: "#pro-estimate" },
  { label: "고객센터", href: "#pro-footer" },
] as const;

const heroFeatures: { icon: IconComponent; line1: string; line2: string }[] = [
  { icon: SealCheck, line1: "파주시 전지역", line2: "빠른 방문 가능" },
  { icon: ShieldCheck, line1: "전문 교육 받은", line2: "직영팀 운영" },
  { icon: Medal, line1: "100% 만족 보장", line2: "안심 서비스" },
];

type ServiceOption = { value: string; label: string };
const serviceTypes: ServiceOption[] = [
  { value: "moveIn", label: "입주/이사 청소" },
  { value: "occupied", label: "거주 청소" },
  { value: "office", label: "사무실 청소" },
  { value: "store", label: "상가/매장 청소" },
  { value: "special", label: "특수 청소" },
  { value: "partial", label: "부분 청소" },
];
const spaceTypes: ServiceOption[] = [
  { value: "apartment", label: "아파트/주택" },
  { value: "officetel", label: "오피스텔/원룸" },
  { value: "office", label: "사무실" },
  { value: "store", label: "상가/매장" },
  { value: "common", label: "건물 공용부" },
];
const areaSizes: ServiceOption[] = [
  { value: "small", label: "10평 이하" },
  { value: "medium", label: "10평 - 30평" },
  { value: "large", label: "30평 - 60평" },
  { value: "xlarge", label: "60평 이상" },
];

const basePrice: Record<string, number> = {
  moveIn: 120000,
  occupied: 90000,
  office: 150000,
  store: 160000,
  special: 180000,
  partial: 60000,
};
const areaMultiplier: Record<string, number> = {
  small: 1,
  medium: 1.4,
  large: 1.8,
  xlarge: 2.3,
};

const services: { icon: IconComponent; title: string; desc: string }[] = [
  { icon: House, title: "입주/이사 청소", desc: "새로운 시작을 깨끗하게" },
  { icon: Couch, title: "거주 청소", desc: "정기적인 관리로 쾌적한 생활" },
  { icon: Buildings, title: "사무실 청소", desc: "업무 효율을 높이는 깨끗한 공간" },
  { icon: Storefront, title: "상가/매장 청소", desc: "고객이 찾고 싶은 깨끗한 매장" },
  { icon: SprayBottle, title: "특수 청소", desc: "곰팡이·새집증후군·외벽 전문 청소" },
  { icon: Sparkle, title: "부분 청소", desc: "필요한 공간만 선택 청소" },
];

const areaChecklist = [
  "파주시 전지역 방문 가능",
  "파주 주소지 전용 예약",
  "일정 확인 후 빠른 방문",
  "주거·상업 공간 모두 가능",
];

/* simplified Paju districts — internal living zones only */
const pajuLabels: { name: string; x: number; y: number; big?: boolean }[] = [
  { name: "탄현", x: 44, y: 50 },
  { name: "운정", x: 96, y: 92 },
  { name: "문산", x: 150, y: 58 },
  { name: "교하", x: 70, y: 132 },
  { name: "파주", x: 130, y: 120, big: true },
  { name: "조리", x: 116, y: 168 },
  { name: "광탄", x: 178, y: 158 },
  { name: "금촌", x: 96, y: 205 },
];

const processSteps: { step: number; icon: IconComponent; title: string; desc: string }[] = [
  { step: 1, icon: NotePencil, title: "견적 및 예약", desc: "간단한 정보 입력으로 견적 확인 및 예약" },
  { step: 2, icon: CalendarCheck, title: "일정 확정", desc: "원하는 날짜와 시간 선택 후 확정" },
  { step: 3, icon: Broom, title: "전문가 방문 & 청소", desc: "전문 교육 받은 팀이 꼼꼼하게 청소" },
];

type Review = { rating: number; text: string; name: string; meta: string };
const reviews: Review[] = [
  {
    rating: 5.0,
    text: "입주청소 정말 꼼꼼하게 해주셨어요. 새집처럼 깨끗해서 감동했습니다!",
    name: "파주 운정",
    meta: "30평대 아파트",
  },
  {
    rating: 5.0,
    text: "사무실 정기청소 맡겼는데 직원분들이 정말 친절하고 깔끔합니다.",
    name: "파주 금촌",
    meta: "사무실",
  },
  {
    rating: 4.9,
    text: "예약부터 청소까지 빠르고 완벽했어요. 다음에도 꼭 이용할게요!",
    name: "파주 교하",
    meta: "25평대 아파트",
  },
];

const footerColumns: { title: string; links: string[] }[] = [
  { title: "회사소개", links: ["회사소개", "이용약관", "개인정보처리방침"] },
  { title: "서비스", links: ["입주/이사 청소", "거주 청소", "사무실 청소"] },
  { title: "고객센터", links: ["자주 묻는 질문", "공지사항", "1:1 문의"] },
];

/* ---------- small building blocks ---------- */

function ProLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`pro-logo${footer ? " pro-logo--footer" : ""}`} href="#pro-top">
      <span aria-hidden="true" className="pro-logo__mark">
        <svg viewBox="0 0 32 34" width="30" height="32">
          <path d="M3 33V11l9-6 9 6v22z" fill="#ffffff" />
          <path d="M21 33V14l8 5v14z" fill="#3f8bff" />
          <rect x="6" y="15" width="3.4" height="3.4" fill="#0a234e" />
          <rect x="11.6" y="15" width="3.4" height="3.4" fill="#0a234e" />
          <rect x="6" y="21" width="3.4" height="3.4" fill="#0a234e" />
          <rect x="11.6" y="21" width="3.4" height="3.4" fill="#0a234e" />
          <rect x="23.5" y="22" width="2.8" height="2.8" fill="#0a234e" />
        </svg>
      </span>
      <span className="pro-logo__text">
        <strong>시티 클린</strong>
        <small>CITY CLEAN</small>
      </span>
    </a>
  );
}

function FieldSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
  invalid,
  describedBy,
}: {
  label: string;
  placeholder: string;
  options: ServiceOption[];
  value: string;
  onChange: (v: string) => void;
  invalid?: boolean;
  describedBy?: string;
}) {
  return (
    <label className="pro-field">
      <span className="pro-field__label">{label}</span>
      <span className="pro-field__control" data-invalid={invalid ? "true" : undefined}>
        <select
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          aria-label={label}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <CaretDown aria-hidden="true" className="pro-field__chevron" size={14} weight="bold" />
      </span>
    </label>
  );
}

/* ---------- estimate panel ---------- */

function EstimatePanel() {
  const [serviceType, setServiceType] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const price = useMemo(() => {
    const base = basePrice[serviceType] ?? 120000;
    const mult = areaMultiplier[area] ?? 1;
    return Math.round((base * mult) / 1000) * 1000;
  }, [serviceType, area]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!serviceType) next.serviceType = "서비스 종류를 선택해주세요.";
    if (!spaceType) next.spaceType = "공간 유형을 선택해주세요.";
    if (address.trim().length < 2) next.address = "주소를 입력해주세요.";
    else if (!address.includes("파주")) next.address = "현재 파주시 지역만 예약할 수 있습니다.";
    if (!area) next.area = "평형을 선택해주세요.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setDone(true);
      window.setTimeout(() => setDone(false), 4000);
    }
  };

  return (
    <form className="pro-estimate" id="pro-estimate" onSubmit={handleSubmit} noValidate>
      <div className="pro-estimate__main">
        <div className="pro-estimate__head">
          <strong>빠른 견적 계산</strong>
          <span>간단한 정보만 입력하고 예상 금액을 확인하세요!</span>
        </div>
        <div className="pro-estimate__grid">
          <FieldSelect
            describedBy={errors.serviceType ? "err-service" : undefined}
            invalid={Boolean(errors.serviceType)}
            label="서비스 종류"
            onChange={(v) => setServiceType(v)}
            options={serviceTypes}
            placeholder="서비스 종류 선택"
            value={serviceType}
          />
          <FieldSelect
            describedBy={errors.spaceType ? "err-space" : undefined}
            invalid={Boolean(errors.spaceType)}
            label="청소 공간 유형"
            onChange={(v) => setSpaceType(v)}
            options={spaceTypes}
            placeholder="청소 공간 유형 선택"
            value={spaceType}
          />
          <label className="pro-field">
            <span className="pro-field__label">파주시 주소</span>
            <span className="pro-field__control" data-invalid={errors.address ? "true" : undefined}>
              <input
                aria-describedby={errors.address ? "err-address" : undefined}
                aria-invalid={Boolean(errors.address) || undefined}
                aria-label="파주시 주소"
                onChange={(event) => setAddress(event.target.value)}
                placeholder="파주시 내 주소를 입력해주세요"
                type="text"
                value={address}
              />
            </span>
          </label>
          <FieldSelect
            describedBy={errors.area ? "err-area" : undefined}
            invalid={Boolean(errors.area)}
            label="평형"
            onChange={(v) => setArea(v)}
            options={areaSizes}
            placeholder="평형 선택"
            value={area}
          />
        </div>
        <p aria-live="polite" className="pro-estimate__msg" data-done={done ? "true" : undefined} role="status">
          {done
            ? "예약 요청이 접수되었습니다. 담당자가 확인 후 빠르게 연락드립니다."
            : errors.address ?? errors.serviceType ?? errors.spaceType ?? errors.area ?? ""}
        </p>
        <span className="pro-sr" id="err-service">
          {errors.serviceType}
        </span>
        <span className="pro-sr" id="err-space">
          {errors.spaceType}
        </span>
        <span className="pro-sr" id="err-address">
          {errors.address}
        </span>
        <span className="pro-sr" id="err-area">
          {errors.area}
        </span>
      </div>

      <div className="pro-estimate__side">
        <span className="pro-estimate__price-label">예상 금액</span>
        <strong className="pro-estimate__price">
          {price.toLocaleString("ko-KR")}
          <em>원~</em>
        </strong>
        <span className="pro-estimate__note">※ 실제 금액은 현장 상태에 따라 변동될 수 있습니다.</span>
        <button className="pro-estimate__cta" type="submit">
          지금 예약하기
          <CaretRight aria-hidden="true" size={15} weight="bold" />
        </button>
      </div>
    </form>
  );
}

/* ---------- Paju map ---------- */

function PajuMap() {
  return (
    <div className="pro-map">
      <span className="pro-map__pin">
        <MapPin aria-hidden="true" size={16} weight="fill" />
      </span>
      <svg aria-label="파주시 서비스 지역 지도" className="pro-map__svg" role="img" viewBox="0 0 240 250">
        <defs>
          <filter id="pro-map-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1e4f9c" floodOpacity="0.16" />
          </filter>
        </defs>
        <g filter="url(#pro-map-shadow)" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M70 18 122 10 168 30 150 70 188 96 176 150 196 188 150 232 96 236 58 210 70 150 34 120 40 74Z" fill="#cbdffa" />
          <path d="M70 18 122 10 168 30 150 70 110 78 78 60 40 74Z" fill="#dce9fb" />
          <path d="M40 74 78 60 110 78 96 132 70 150 34 120Z" fill="#c2d9f8" />
          <path d="M110 78 150 70 188 96 176 150 132 158 96 132Z" fill="#d4e4fb" />
          <path d="M70 150 96 132 132 158 124 200 96 236 58 210Z" fill="#bcd4f6" />
          <path d="M132 158 176 150 196 188 150 232 124 200Z" fill="#cfe0fa" />
        </g>
      </svg>
      {pajuLabels.map((label) => (
        <span
          className={`pro-map__label${label.big ? " pro-map__label--big" : ""}`}
          key={label.name}
          style={{ left: `${(label.x / 240) * 100}%`, top: `${(label.y / 250) * 100}%` }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
}

/* ---------- sections ---------- */

function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="pro-header" id="pro-top">
      <div className="pro-shell pro-header__inner">
        <ProLogo />
        <nav aria-label="주요 메뉴" className="pro-nav">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="pro-header__right">
          <DesignSwitch />
          <button className="pro-book-btn" onClick={onBook} type="button">
            <CalendarCheck aria-hidden="true" size={17} weight="bold" />
            지금 예약하기
          </button>
          <button
            aria-expanded={open}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            className="pro-burger"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>
      <nav aria-label="모바일 메뉴" className="pro-mobile-menu" data-open={open ? "true" : undefined}>
        {navItems.map((item) => (
          <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pro-hero">
      <span aria-hidden="true" className="pro-hero__sky" />
      <svg aria-hidden="true" className="pro-hero__skyline" viewBox="0 0 600 220" preserveAspectRatio="none">
        <g fill="#bcd2f0" opacity="0.5">
          <rect x="20" y="120" width="46" height="100" />
          <rect x="74" y="86" width="40" height="134" />
          <rect x="122" y="140" width="34" height="80" />
          <rect x="164" y="60" width="52" height="160" />
          <rect x="224" y="108" width="38" height="112" />
          <rect x="270" y="150" width="30" height="70" />
          <rect x="308" y="92" width="46" height="128" />
          <rect x="362" y="132" width="34" height="88" />
          <rect x="404" y="70" width="50" height="150" />
          <rect x="462" y="116" width="40" height="104" />
          <rect x="510" y="150" width="32" height="70" />
          <rect x="548" y="100" width="40" height="120" />
        </g>
      </svg>

      <div className="pro-shell pro-hero__cols">
        <div className="pro-hero__copy">
          <h1 className="pro-hero__title">
            바쁜 파주 생활,
            <br />
            청소는 <span>시티 클린</span>에게
          </h1>
          <p className="pro-hero__sub">파주 전문 청소팀이 당신의 소중한 시간을 돌려드립니다.</p>
          <ul className="pro-hero__features">
            {heroFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <li key={feature.line1}>
                  <span className="pro-hero__feat-icon">
                    <Icon aria-hidden="true" size={19} weight="bold" />
                  </span>
                  <span className="pro-hero__feat-text">
                    {feature.line1}
                    <br />
                    {feature.line2}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pro-hero__media">
          <Image
            alt="파주 통유리 건물에서 스퀴지로 유리창을 닦는 전문 청소 작업자"
            fill
            priority
            sizes="(max-width: 920px) 100vw, 46vw"
            src="/images/generated/pro-hero-worker.webp"
          />
        </div>

        <EstimatePanel />
      </div>
    </section>
  );
}

function SectionHeading({ icon: Icon, title, sub }: { icon: IconComponent; title: string; sub?: string }) {
  return (
    <div className="pro-heading">
      <h2>
        <span className="pro-heading__icon">
          <Icon aria-hidden="true" size={20} weight="bold" />
        </span>
        {title}
      </h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}

function AreaAndServices() {
  return (
    <section className="pro-mid">
      <div className="pro-shell pro-mid__grid">
        <div className="pro-area" id="pro-area">
          <SectionHeading
            icon={MapPin}
            sub="파주시 내 빠른 방문과 전문 청소 서비스를 제공합니다."
            title="파주 서비스 지역"
          />
          <div className="pro-area__body">
            <PajuMap />
            <div className="pro-area__side">
              <ul className="pro-checklist">
                {areaChecklist.map((item) => (
                  <li key={item}>
                    <CheckCircle aria-hidden="true" size={16} weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="pro-outline-btn" href="#pro-estimate">
                파주 서비스 지역 확인
                <CaretRight aria-hidden="true" size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>

        <div className="pro-services" id="pro-services">
          <SectionHeading icon={Buildings} title="서비스 종류" />
          <div className="pro-services__grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="pro-service-card" key={service.title}>
                  <Icon aria-hidden="true" size={38} weight="duotone" />
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="pro-process-wrap" id="pro-process">
      <div className="pro-shell">
        <div className="pro-process">
          <div className="pro-process__head">
            <Lightning aria-hidden="true" size={20} weight="fill" />
            <h2>단 3단계, 빠른 예약 프로세스</h2>
          </div>
          <div className="pro-process__row">
            <div className="pro-process__steps">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="pro-step-wrap" key={step.step}>
                    <article className="pro-step">
                      <span className="pro-step__num">{step.step}</span>
                      <Icon aria-hidden="true" className="pro-step__icon" size={30} weight="duotone" />
                      <div className="pro-step__text">
                        <strong>{step.title}</strong>
                        <p>{step.desc}</p>
                      </div>
                    </article>
                    {index < processSteps.length - 1 ? (
                      <CaretRight aria-hidden="true" className="pro-step__arrow" size={24} weight="bold" />
                    ) : null}
                  </div>
                );
              })}
            </div>
            <aside className="pro-consult">
              <Headset aria-hidden="true" size={30} weight="duotone" />
              <strong>빠른 상담이 필요하세요?</strong>
              <p>파주 청소 전문 상담사가 친절하게 도와드리겠습니다.</p>
              <a className="pro-consult__phone" href={siteConfig.telHref}>
                {siteConfig.phone}
              </a>
              <small>운영시간 09:00 - 18:00 (연중무휴)</small>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="pro-reviews" id="pro-reviews">
      <div className="pro-shell pro-reviews__grid">
        <div className="pro-reviews__summary">
          <h2>고객 리뷰</h2>
          <p>시티 클린을 이용하신 파주 고객님들의 생생한 후기</p>
          <div className="pro-reviews__score">
            <strong>4.9 / 5</strong>
            <span className="pro-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star aria-hidden="true" key={index} size={18} weight="fill" />
              ))}
            </span>
          </div>
          <span className="pro-reviews__count">실제 고객 만족도 (2,345건)</span>
          <a className="pro-outline-btn" href="#pro-footer">
            리뷰 더보기
            <CaretRight aria-hidden="true" size={14} weight="bold" />
          </a>
        </div>
        <div className="pro-reviews__cards">
          {reviews.map((review) => (
            <article className="pro-review-card" key={review.name}>
              <div className="pro-review-card__top">
                <span className="pro-stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star aria-hidden="true" key={index} size={15} weight="fill" />
                  ))}
                </span>
                <em>{review.rating.toFixed(1)}</em>
              </div>
              <p>{review.text}</p>
              <div className="pro-review-card__by">
                <span className="pro-review-card__avatar" aria-hidden="true" />
                <strong>{review.name}</strong>
                <i />
                <span>{review.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCta({ onBook }: { onBook: () => void }) {
  return (
    <section className="pro-cta-wrap">
      <div className="pro-shell">
        <div className="pro-cta">
          <svg aria-hidden="true" className="pro-cta__skyline" viewBox="0 0 360 120" preserveAspectRatio="none">
            <g fill="none" stroke="#cfe2ff" strokeWidth="2" opacity="0.5">
              <path d="M8 116V60h26v-18h22v74" />
              <path d="M60 116V36h30v80" />
              <path d="M96 116V72h22v44" />
              <path d="M124 116V48h34v68" />
              <path d="M164 116V82h24v34" />
              <path d="M196 116V52h30v64" />
              <path d="M232 116V70h22v46" />
              <path d="M262 116V40h32v76" />
              <path d="M300 116V78h22v38" />
            </g>
          </svg>
          <div className="pro-cta__copy">
            <strong>파주에서 지금 예약하고 깨끗한 공간을 경험하세요!</strong>
            <span>일정 확인 후 빠른 방문 · 파주 전문 직영팀 · 100% 만족 보장</span>
          </div>
          <button className="pro-cta__btn" onClick={onBook} type="button">
            지금 예약하기
            <CaretRight aria-hidden="true" size={18} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pro-footer" id="pro-footer">
      <div className="pro-shell pro-footer__inner">
        <div className="pro-footer__brand">
          <ProLogo footer />
          <p>서비스 지역 : 경기도 파주시</p>
        </div>
        <div className="pro-footer__cols">
          {footerColumns.map((column) => (
            <div className="pro-footer__col" key={column.title}>
              <p>{column.title}</p>
              {column.links.map((link) => (
                <a href="#pro-footer" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="pro-footer__contact">
          <strong>{siteConfig.phone}</strong>
          <span>운영시간 09:00 - 18:00 (연중무휴)</span>
          <span>이메일 help@cityclean.co.kr</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- root ---------- */

export function HomePro() {
  const scrollToEstimate = useCallback(() => {
    document.getElementById("pro-estimate")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div className="pro-home">
      <Header onBook={scrollToEstimate} />
      <main>
        <Hero />
        <AreaAndServices />
        <ProcessSection />
        <ReviewsSection />
        <BottomCta onBook={scrollToEstimate} />
      </main>
      <Footer />
    </div>
  );
}
