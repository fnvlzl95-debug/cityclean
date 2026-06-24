"use client";

/* ============================================================
   시안 7 · 정제된 프리미엄 에디토리얼 디자인
   디자인 이론(시각적 위계·게슈탈트·12컬럼 그리드·8pt 간격·
   타이포 시스템·60-30-10·대비·반복과 변주·힉/피츠의 법칙·
   점진적 공개·광학적 정렬)을 명시적으로 적용.
   색상 비율: 60 paper · 30 ink · 10 emerald
   ============================================================ */

import {
  ArrowRight,
  Broom,
  Buildings,
  CalendarCheck,
  CaretDown,
  CaretRight,
  CheckCircle,
  Clock,
  Drop,
  Headset,
  House,
  List,
  MapPin,
  Medal,
  NotePencil,
  Phone,
  Quotes,
  SealCheck,
  ShieldCheck,
  Sparkle,
  SprayBottle,
  Star,
  Storefront,
  Wind,
  X,
} from "@phosphor-icons/react/ssr";
import Image from "@/components/BasePathImage";
import { type FormEvent, useCallback, useMemo, useState } from "react";
import { DesignSwitch } from "@/components/DesignSwitch";
import { siteConfig } from "@/lib/data";
import { withBasePath } from "@/lib/paths";

type IconComponent = typeof House;

/* ---------- static content ---------- */

const navItems = [
  { label: "서비스", href: "#s7-services" },
  { label: "강점", href: "#s7-proof" },
  { label: "진행 절차", href: "#s7-process" },
  { label: "서비스 지역", href: "#s7-area" },
  { label: "고객 후기", href: "#s7-reviews" },
] as const;

/* 히어로 신뢰 지표 — 숫자는 mono로 (데이터 위계) */
const heroStats: { value: string; unit: string; label: string }[] = [
  { value: "12", unit: "년", label: "현장 경험" },
  { value: "2,300", unit: "+", label: "누적 시공" },
  { value: "4.9", unit: "/5", label: "고객 평점" },
];

/* 게슈탈트 공통영역 — 핵심 약속 3가지 */
const promises: { icon: IconComponent; title: string; desc: string }[] = [
  { icon: SealCheck, title: "직영 전문팀", desc: "외주 없이 교육받은 직영 인력이 직접 시공합니다." },
  { icon: ShieldCheck, title: "방문 견적", desc: "현장을 먼저 확인하고 범위와 금액을 투명하게 안내합니다." },
  { icon: Medal, title: "만족 책임제", desc: "미흡한 부분은 재방문으로 끝까지 책임집니다." },
];

/* 서비스 6카드 (3×2 그리드) — 카드 설계 공식 통일 */
const featuredServices: {
  icon: IconComponent;
  title: string;
  desc: string;
  tag: string;
  href: string;
}[] = [
  {
    icon: Buildings,
    title: "정기청소",
    desc: "사무실·계단·건물 공용부를 주기별로 관리해 늘 일정한 상태를 유지합니다.",
    tag: "주 1회 ~ 매일",
    href: "/regular-cleaning",
  },
  {
    icon: Storefront,
    title: "상가·매장청소",
    desc: "영업 전후 시간에 맞춰 홀, 바닥, 화장실을 정리해 첫인상을 지킵니다.",
    tag: "영업시간 맞춤",
    href: "/regular-cleaning/restaurant",
  },
  {
    icon: SprayBottle,
    title: "외벽·유리창청소",
    desc: "안전 동선을 확인한 뒤 외벽과 유리, 프레임 오염을 함께 정리합니다.",
    tag: "장비 시공",
    href: "/total-cleaning/window",
  },
  {
    icon: House,
    title: "입주·이사청소",
    desc: "창틀, 수납장, 욕실, 주방까지 새 공간의 기본 상태를 만들어 드립니다.",
    tag: "당일 가능",
    href: "/home-cleaning/move-in",
  },
  {
    icon: Wind,
    title: "에어컨 분해청소",
    desc: "곰팡이와 냄새의 원인을 분해 가능한 범위에서 세척해 위생을 회복합니다.",
    tag: "벽걸이·스탠드",
    href: "/home-cleaning/aircon",
  },
  {
    icon: Drop,
    title: "화장실·물때관리",
    desc: "변기, 세면대, 바닥, 배수구의 물때와 악취 원인을 위생 기준으로 관리합니다.",
    tag: "위생 집중",
    href: "/regular-cleaning/restroom",
  },
];

/* 강점 — F패턴 우측 리스트 */
const strengths: { num: string; title: string; desc: string }[] = [
  {
    num: "01",
    title: "현장 먼저, 견적은 그 다음",
    desc: "보이지 않는 오염까지 직접 확인한 뒤 작업 범위를 정합니다. 과한 견적도, 빠진 항목도 없습니다.",
  },
  {
    num: "02",
    title: "공간에 맞춘 주기 설계",
    desc: "이용량과 오염 속도를 기준으로 주 1회부터 매일까지 가장 효율적인 관리 주기를 제안합니다.",
  },
  {
    num: "03",
    title: "끝까지 책임지는 마무리",
    desc: "시공 후 상태를 함께 점검하고, 미흡한 부분은 재방문으로 정리합니다.",
  },
];

/* 진행 절차 — 가로 단계, 연속성 */
const processSteps: { step: string; icon: IconComponent; title: string; desc: string }[] = [
  { step: "01", icon: NotePencil, title: "상담·견적 요청", desc: "전화 또는 간편 폼으로 공간과 일정을 알려주세요." },
  { step: "02", icon: MapPin, title: "방문 현장 확인", desc: "직접 방문해 오염 상태와 작업 범위를 확인합니다." },
  { step: "03", icon: CalendarCheck, title: "일정 확정", desc: "원하는 날짜와 시간에 맞춰 작업 일정을 잡습니다." },
  { step: "04", icon: Broom, title: "전문 시공·점검", desc: "직영팀이 시공하고 결과를 함께 점검합니다." },
];

/* 서비스 지역 — 파주·일산·고양 */
const regions: { name: string; districts: string[] }[] = [
  { name: "파주", districts: ["운정", "금촌", "야당", "문산", "교하", "탄현"] },
  { name: "일산", districts: ["정발산", "마두", "백석", "대화", "주엽", "식사"] },
  { name: "고양", districts: ["덕양", "화정", "행신", "삼송", "원흥", "능곡"] },
];

/* 후기 */
type Review = { rating: number; text: string; name: string; meta: string };
const reviews: Review[] = [
  {
    rating: 5.0,
    text: "입주청소를 맡겼는데 창틀과 욕실까지 정말 꼼꼼했습니다. 견적도 방문 후 정확하게 안내해주셔서 믿음이 갔어요.",
    name: "운정 김O경 님",
    meta: "32평 아파트 입주청소",
  },
  {
    rating: 5.0,
    text: "사무실 정기청소 3개월째인데 늘 같은 컨디션으로 유지됩니다. 직원분들이 조용하고 깔끔하게 일하셔서 만족합니다.",
    name: "백석 이O호 님",
    meta: "사무실 주 2회 정기",
  },
  {
    rating: 4.9,
    text: "상가 외벽이 오래돼서 걱정했는데 안전하게 작업해주셨어요. 전후가 확연히 달라 손님 반응도 좋아졌습니다.",
    name: "화정 박O진 님",
    meta: "상가 외벽·유리창",
  },
];

/* 견적 폼 옵션 — 힉의 법칙: 핵심만 */
type Opt = { value: string; label: string };
const serviceTypes: Opt[] = [
  { value: "regular", label: "정기청소" },
  { value: "store", label: "상가·매장청소" },
  { value: "exterior", label: "외벽·유리창청소" },
  { value: "move", label: "입주·이사청소" },
  { value: "aircon", label: "에어컨청소" },
  { value: "special", label: "기타·특수청소" },
];
const areaSizes: Opt[] = [
  { value: "small", label: "10평 이하" },
  { value: "medium", label: "10 - 30평" },
  { value: "large", label: "30 - 60평" },
  { value: "xlarge", label: "60평 이상" },
];
const regionOptions: Opt[] = [
  { value: "paju", label: "파주" },
  { value: "ilsan", label: "일산" },
  { value: "goyang", label: "고양" },
];

const basePrice: Record<string, number> = {
  regular: 90000,
  store: 140000,
  exterior: 180000,
  move: 130000,
  aircon: 80000,
  special: 160000,
};
const areaMultiplier: Record<string, number> = {
  small: 1,
  medium: 1.4,
  large: 1.9,
  xlarge: 2.4,
};

const footerColumns: { title: string; links: string[] }[] = [
  { title: "서비스", links: ["정기청소", "종합청소", "홈클리닝", "에어컨청소"] },
  { title: "회사", links: ["회사소개", "시공사례", "자주 묻는 질문", "공지사항"] },
  { title: "이용안내", links: ["이용약관", "개인정보처리방침", "1:1 문의"] },
];

/* ---------- building blocks ---------- */

function SevenLogo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <a className={`s7-logo s7-logo--${tone}`} href="#s7-top">
      <span aria-hidden="true" className="s7-logo__mark">
        <svg viewBox="0 0 28 28" width="26" height="26">
          <rect x="1.5" y="1.5" width="25" height="25" rx="5" fill="currentColor" />
          <path d="M9 19V12l5-3.4 5 3.4v7z" fill="#fff" />
          <rect x="11" y="14.4" width="2.4" height="2.4" fill="currentColor" opacity="0.9" />
          <rect x="14.6" y="14.4" width="2.4" height="2.4" fill="currentColor" opacity="0.9" />
        </svg>
      </span>
      <span className="s7-logo__text">
        <strong>시티클린</strong>
        <small>CITY&nbsp;CLEAN</small>
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="s7-eyebrow">
      <span aria-hidden="true" className="s7-eyebrow__tick" />
      {children}
    </span>
  );
}

function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={`s7-head s7-head--${align}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="s7-head__title">{title}</h2>
      {lead ? <p className="s7-head__lead">{lead}</p> : null}
    </header>
  );
}

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="s7-stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} weight="fill" />
      ))}
    </span>
  );
}

function FieldSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
  invalid,
}: {
  label: string;
  placeholder: string;
  options: Opt[];
  value: string;
  onChange: (v: string) => void;
  invalid?: boolean;
}) {
  return (
    <label className="s7-field">
      <span className="s7-field__label">{label}</span>
      <span className="s7-field__control" data-invalid={invalid ? "true" : undefined}>
        <select
          aria-invalid={invalid || undefined}
          aria-label={label}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <CaretDown aria-hidden="true" className="s7-field__caret" size={13} weight="bold" />
      </span>
    </label>
  );
}

/* ---------- estimate panel (공통영역 · 점진적 공개) ---------- */

function EstimatePanel() {
  const [service, setService] = useState("");
  const [size, setSize] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const price = useMemo(() => {
    const base = basePrice[service] ?? 90000;
    const mult = areaMultiplier[size] ?? 1;
    return Math.round((base * mult) / 1000) * 1000;
  }, [service, size]);

  const ready = Boolean(service && size && region);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!service) next.service = "서비스 종류를 선택해주세요.";
    if (!size) next.size = "평형을 선택해주세요.";
    if (!region) next.region = "지역을 선택해주세요.";
    if (phone.replace(/[^0-9]/g, "").length < 9) next.phone = "연락처를 정확히 입력해주세요.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setDone(true);
      window.setTimeout(() => setDone(false), 4500);
    }
  };

  return (
    <form className="s7-estimate" id="s7-estimate" noValidate onSubmit={handleSubmit}>
      <div className="s7-estimate__head">
        <span className="s7-estimate__kicker">
          <Sparkle aria-hidden="true" size={14} weight="fill" /> 무료 방문 견적
        </span>
        <strong>30초 견적 요청</strong>
        <p>핵심 정보만 남기면 담당자가 확인 후 빠르게 연락드립니다.</p>
      </div>

      <div className="s7-estimate__grid">
        <FieldSelect
          invalid={Boolean(errors.service)}
          label="서비스 종류"
          onChange={setService}
          options={serviceTypes}
          placeholder="선택해주세요"
          value={service}
        />
        <FieldSelect
          invalid={Boolean(errors.size)}
          label="공간 평형"
          onChange={setSize}
          options={areaSizes}
          placeholder="선택해주세요"
          value={size}
        />
        <FieldSelect
          invalid={Boolean(errors.region)}
          label="지역"
          onChange={setRegion}
          options={regionOptions}
          placeholder="선택해주세요"
          value={region}
        />
        <label className="s7-field">
          <span className="s7-field__label">연락처</span>
          <span className="s7-field__control" data-invalid={errors.phone ? "true" : undefined}>
            <input
              aria-invalid={Boolean(errors.phone) || undefined}
              aria-label="연락처"
              inputMode="numeric"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="010-0000-0000"
              type="tel"
              value={phone}
            />
          </span>
        </label>
      </div>

      <div className="s7-estimate__foot">
        <div className="s7-estimate__price">
          <span className="s7-estimate__price-label">예상 금액</span>
          <strong data-ready={ready ? "true" : undefined}>
            {ready ? (
              <>
                {price.toLocaleString("ko-KR")}
                <em>원~</em>
              </>
            ) : (
              <span className="s7-estimate__price-empty">항목 선택 시 표시</span>
            )}
          </strong>
        </div>
        <button className="s7-btn s7-btn--solid s7-estimate__cta" type="submit">
          견적 요청하기
          <ArrowRight aria-hidden="true" size={16} weight="bold" />
        </button>
      </div>

      <p
        aria-live="polite"
        className="s7-estimate__msg"
        data-done={done ? "true" : undefined}
        role="status"
      >
        {done
          ? "요청이 접수되었습니다. 담당자가 확인 후 연락드립니다."
          : errors.service ??
            errors.size ??
            errors.region ??
            errors.phone ??
            "※ 실제 금액은 현장 상태에 따라 달라질 수 있습니다."}
      </p>
    </form>
  );
}

/* ---------- header ---------- */

function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="s7-header" id="s7-top">
      <div className="s7-topbar">
        <div className="s7-shell s7-topbar__inner">
          <span>
            <MapPin aria-hidden="true" size={13} weight="fill" /> 파주 · 일산 · 고양 청소 전문
          </span>
          <span className="s7-topbar__right">
            <Clock aria-hidden="true" size={13} weight="bold" /> {siteConfig.businessHours}
            <a href={siteConfig.telHref}>
              <Phone aria-hidden="true" size={13} weight="fill" /> {siteConfig.phone}
            </a>
          </span>
        </div>
      </div>

      <div className="s7-nav-wrap">
        <div className="s7-shell s7-nav">
          <SevenLogo />
          <nav aria-label="주요 메뉴" className="s7-nav__menu">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="s7-nav__right">
            <DesignSwitch />
            <button className="s7-btn s7-btn--solid s7-nav__cta" onClick={onBook} type="button">
              무료 견적
            </button>
            <button
              aria-expanded={open}
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              className="s7-burger"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
        <nav aria-label="모바일 메뉴" className="s7-mobile" data-open={open ? "true" : undefined}>
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="s7-mobile__call" href={siteConfig.telHref}>
            <Phone aria-hidden="true" size={15} weight="fill" /> 전화 상담 {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- hero (Z패턴 · 단일 주인공) ---------- */

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="s7-hero">
      <div className="s7-shell s7-hero__grid">
        <div className="s7-hero__copy">
          <Eyebrow>파주·일산·고양 청소 전문 · 시티클린</Eyebrow>
          <h1 className="s7-hero__title">
            깨끗함의 기준을
            <br />
            다시 만듭니다, <span>시티클린</span>
          </h1>
          <p className="s7-hero__sub">
            방문 견적으로 현장을 먼저 확인하고, 교육받은 직영팀이 직접 시공합니다.
            <br className="s7-hero__br" /> 정기청소부터 입주·외벽·에어컨까지, 공간에 맞는 관리를
            제안합니다.
          </p>

          <div className="s7-hero__actions">
            <button className="s7-btn s7-btn--solid s7-btn--lg" onClick={onBook} type="button">
              무료 방문 견적 받기
              <ArrowRight aria-hidden="true" size={17} weight="bold" />
            </button>
            <a className="s7-btn s7-btn--ghost s7-btn--lg" href={siteConfig.telHref}>
              <Phone aria-hidden="true" size={16} weight="fill" />
              전화 상담
            </a>
          </div>

          <dl className="s7-hero__stats">
            {heroStats.map((s) => (
              <div className="s7-stat" key={s.label}>
                <dt>
                  <span className="s7-stat__num">{s.value}</span>
                  <span className="s7-stat__unit">{s.unit}</span>
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="s7-hero__media">
          <span aria-hidden="true" className="s7-hero__plate" />
          <div className="s7-hero__frame">
            <Image
              alt="통유리 건물에서 스퀴지로 유리창을 닦는 시티클린 전문 작업자"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 44vw"
              src="/images/generated/pro-hero-worker.webp"
            />
          </div>
          <div className="s7-hero__badge">
            <span className="s7-hero__badge-stars">
              <Stars size={13} />
              <strong>4.9</strong>
            </span>
            <span className="s7-hero__badge-text">실고객 만족도 · 누적 2,300여 건</span>
          </div>
        </div>
      </div>

      {/* 게슈탈트 공통영역 — 신뢰 약속 3 */}
      <div className="s7-shell">
        <ul className="s7-promises">
          {promises.map((p) => {
            const Icon = p.icon;
            return (
              <li className="s7-promise" key={p.title}>
                <span className="s7-promise__icon">
                  <Icon aria-hidden="true" size={22} weight="duotone" />
                </span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- services (3×2 그리드) ---------- */

function Services() {
  return (
    <section className="s7-section" id="s7-services">
      <div className="s7-shell">
        <SectionHead
          eyebrow="SERVICES"
          lead="주거부터 상업·건물 관리까지, 시티클린이 가장 많이 의뢰받는 서비스입니다."
          title={
            <>
              필요한 공간에 맞춰
              <br className="s7-head__br" /> 정확하게 청소합니다
            </>
          }
        />
        <div className="s7-services">
          {featuredServices.map((s) => {
            const Icon = s.icon;
            return (
              <a className="s7-svc" href={withBasePath(s.href)} key={s.title}>
                <span className="s7-svc__icon">
                  <Icon aria-hidden="true" size={26} weight="duotone" />
                </span>
                <h3 className="s7-svc__title">{s.title}</h3>
                <p className="s7-svc__desc">{s.desc}</p>
                <span className="s7-svc__foot">
                  <span className="s7-svc__tag">{s.tag}</span>
                  <span className="s7-svc__more">
                    자세히 <CaretRight aria-hidden="true" size={13} weight="bold" />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- proof / strengths (대비 · F패턴) ---------- */

function Proof() {
  return (
    <section className="s7-proof" id="s7-proof">
      <div className="s7-shell s7-proof__grid">
        <div className="s7-proof__media">
          <Image
            alt="시티클린 직영팀이 사무실 공간을 정리하는 모습"
            fill
            sizes="(max-width: 980px) 100vw, 42vw"
            src="/images/cases/team-office.webp"
          />
          <div className="s7-proof__chip">
            <ShieldCheck aria-hidden="true" size={18} weight="fill" />
            <span>
              <strong>직영 운영</strong>
              외주 없는 책임 시공
            </span>
          </div>
        </div>

        <div className="s7-proof__copy">
          <SectionHead
            eyebrow="WHY CITYCLEAN"
            title={
              <>
                견적부터 마무리까지
                <br className="s7-head__br" /> 믿을 수 있는 이유
              </>
            }
          />
          <ol className="s7-strengths">
            {strengths.map((s) => (
              <li className="s7-strength" key={s.num}>
                <span className="s7-strength__num">{s.num}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- process (가로 단계 · 연속성) ---------- */

function Process() {
  return (
    <section className="s7-section s7-section--mist" id="s7-process">
      <div className="s7-shell">
        <SectionHead
          align="center"
          eyebrow="PROCESS"
          lead="상담부터 시공까지 군더더기 없는 4단계로 진행합니다."
          title="간단한 4단계 진행 절차"
        />
        <ol className="s7-steps">
          {processSteps.map((s) => {
            const Icon = s.icon;
            return (
              <li className="s7-step" key={s.step}>
                <span className="s7-step__num">{s.step}</span>
                <span className="s7-step__icon">
                  <Icon aria-hidden="true" size={24} weight="duotone" />
                </span>
                <strong>{s.title}</strong>
                <p>{s.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------- area (서비스 지역) ---------- */

function Area() {
  return (
    <section className="s7-section" id="s7-area">
      <div className="s7-shell s7-area__grid">
        <div className="s7-area__intro">
          <SectionHead
            eyebrow="SERVICE AREA"
            title={
              <>
                파주·일산·고양
                <br className="s7-head__br" /> 전 지역 방문합니다
              </>
            }
          />
          <ul className="s7-checklist">
            <li>
              <CheckCircle aria-hidden="true" size={17} weight="fill" /> 지역 내 빠른 방문 일정 조율
            </li>
            <li>
              <CheckCircle aria-hidden="true" size={17} weight="fill" /> 주거·상가·건물 공용부 모두 가능
            </li>
            <li>
              <CheckCircle aria-hidden="true" size={17} weight="fill" /> 정기 계약 시 우선 배정
            </li>
          </ul>
          <a className="s7-btn s7-btn--line" href="#s7-estimate">
            우리 지역 견적 확인
            <ArrowRight aria-hidden="true" size={15} weight="bold" />
          </a>
        </div>

        <div className="s7-regions">
          {regions.map((r) => (
            <article className="s7-region" key={r.name}>
              <header>
                <MapPin aria-hidden="true" size={16} weight="fill" />
                <strong>{r.name}</strong>
              </header>
              <div className="s7-region__tags">
                {r.districts.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- reviews (요약 + 카드 · 변주) ---------- */

function Reviews() {
  return (
    <section className="s7-section s7-section--mist" id="s7-reviews">
      <div className="s7-shell s7-reviews__grid">
        <aside className="s7-reviews__summary">
          <Eyebrow>REVIEWS</Eyebrow>
          <h2 className="s7-reviews__title">
            고객이 다시
            <br />
            찾는 이유
          </h2>
          <div className="s7-reviews__score">
            <strong>4.9</strong>
            <span>
              <Stars size={16} />
              <em>누적 만족도 · 2,300여 건</em>
            </span>
          </div>
          <p className="s7-reviews__note">파주·일산·고양 고객님들이 직접 남겨주신 후기입니다.</p>
        </aside>

        <div className="s7-reviews__cards">
          {reviews.map((rv) => (
            <article className="s7-review" key={rv.name}>
              <Quotes aria-hidden="true" className="s7-review__quote" size={26} weight="fill" />
              <div className="s7-review__top">
                <Stars size={14} />
                <em>{rv.rating.toFixed(1)}</em>
              </div>
              <p className="s7-review__text">{rv.text}</p>
              <footer className="s7-review__by">
                <span aria-hidden="true" className="s7-review__avatar">
                  {rv.name.charAt(0)}
                </span>
                <span>
                  <strong>{rv.name}</strong>
                  <small>{rv.meta}</small>
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- booking (공통영역 dark panel) ---------- */

function Booking() {
  return (
    <section className="s7-booking">
      <div className="s7-shell s7-booking__grid">
        <div className="s7-booking__copy">
          <Eyebrow>GET A QUOTE</Eyebrow>
          <h2 className="s7-booking__title">
            지금 바로
            <br />
            견적을 받아보세요
          </h2>
          <p className="s7-booking__lead">
            상담은 무료이며, 방문 견적 후 작업 여부를 결정하셔도 됩니다.
          </p>
          <a className="s7-booking__phone" href={siteConfig.telHref}>
            <span className="s7-booking__phone-icon">
              <Headset aria-hidden="true" size={22} weight="duotone" />
            </span>
            <span>
              <small>전화 상담</small>
              <strong>{siteConfig.phone}</strong>
            </span>
          </a>
        </div>
        <EstimatePanel />
      </div>
    </section>
  );
}

/* ---------- bottom cta ---------- */

function BottomCta({ onBook }: { onBook: () => void }) {
  return (
    <section className="s7-finalcta">
      <div className="s7-shell s7-finalcta__inner">
        <div>
          <h2>깨끗한 공간, 가장 확실한 방법으로.</h2>
          <p>방문 견적 · 직영 전문팀 · 만족 책임제 — 시티클린이 끝까지 책임집니다.</p>
        </div>
        <div className="s7-finalcta__actions">
          <button className="s7-btn s7-btn--solid s7-btn--lg" onClick={onBook} type="button">
            무료 견적 받기
            <ArrowRight aria-hidden="true" size={17} weight="bold" />
          </button>
          <a className="s7-btn s7-btn--ghost-light s7-btn--lg" href={siteConfig.telHref}>
            <Phone aria-hidden="true" size={16} weight="fill" /> {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="s7-footer">
      <div className="s7-shell s7-footer__top">
        <div className="s7-footer__brand">
          <SevenLogo tone="light" />
          <p>
            파주·일산·고양 청소 전문 시티클린. 방문 견적으로 현장을 먼저 확인하고 직영 전문팀이 책임
            시공합니다.
          </p>
          <a className="s7-footer__call" href={siteConfig.telHref}>
            <Phone aria-hidden="true" size={15} weight="fill" /> {siteConfig.phone}
          </a>
        </div>
        <div className="s7-footer__cols">
          {footerColumns.map((col) => (
            <div className="s7-footer__col" key={col.title}>
              <p>{col.title}</p>
              {col.links.map((link) => (
                <a href="#s7-top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="s7-shell s7-footer__bottom">
        <span>© 2026 시티클린 · 경기도 파주시</span>
        <span>상담 가능 시간 09:00 - 20:00 · 연중무휴</span>
      </div>
    </footer>
  );
}

/* ---------- root ---------- */

export function HomeSeven() {
  const scrollToEstimate = useCallback(() => {
    document
      .getElementById("s7-estimate")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div className="s7-home" data-variant="v6">
      <Header onBook={scrollToEstimate} />
      <main>
        <Hero onBook={scrollToEstimate} />
        <Services />
        <Proof />
        <Process />
        <Area />
        <Reviews />
        <Booking />
        <BottomCta onBook={scrollToEstimate} />
      </main>
      <Footer />
    </div>
  );
}
