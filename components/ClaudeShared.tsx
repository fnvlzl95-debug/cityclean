"use client";

import Image from "@/components/BasePathImage";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, PhoneCall } from "@phosphor-icons/react/ssr";
import type { Service } from "@/lib/data";
import { servicePath, siteConfig } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

/* ----------------------------------------------------------------
   Rise — mount-based fade-up. Deterministic (always ends visible),
   so content never depends on a scroll/IntersectionObserver event.
   ---------------------------------------------------------------- */
export function Rise({
  children,
  className,
  delay = 0,
  y = 22,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Before → after reveal — the signature. On load the seam glides
   from "before" toward "after", then settles; drag to compare.
   ---------------------------------------------------------------- */
export function CldReveal({
  before,
  after,
  beforeAlt,
  afterAlt,
  caption,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
}) {
  const [pos, setPos] = useState(82);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let raf = 0;
    let startTs = 0;
    const from = reduce ? 50 : 82;
    const to = 50;
    const dur = reduce ? 0 : 1600;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = dur === 0 ? 1 : Math.min(1, (ts - startTs) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setPos(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const moveTo = (clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(6, Math.min(94, next)));
  };

  return (
    <figure className="cld-reveal">
      <div
        className="cld-reveal__frame"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) moveTo(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        ref={frameRef}
      >
        <Image alt={afterAlt} className="cld-reveal__img" fill priority sizes="(max-width: 1024px) 100vw, 46vw" src={after} />
        <div className="cld-reveal__before" style={{ width: `${pos}%` }}>
          <Image alt={beforeAlt} className="cld-reveal__img" fill priority sizes="(max-width: 1024px) 100vw, 46vw" src={before} />
          <span className="cld-reveal__tag cld-reveal__tag--before">작업 전</span>
        </div>
        <span className="cld-reveal__tag cld-reveal__tag--after">작업 후</span>
        <div className="cld-reveal__seam" style={{ left: `${pos}%` }}>
          <span className="cld-reveal__handle" aria-hidden="true">
            <i />
            <i />
          </span>
        </div>
      </div>
      {caption ? <figcaption className="cld-reveal__caption">{caption}</figcaption> : null}
    </figure>
  );
}

/* ----------------------------------------------------------------
   Service gallery — an editorial set of tall plates. Used on the
   service hub pages.
   ---------------------------------------------------------------- */
export function CldServiceGallery({ services }: { services: Service[] }) {
  return (
    <div className="cld-gallery">
      {services.map((service, index) => (
        <Rise delay={(index % 3) * 0.06} key={`${service.category}-${service.slug}`}>
          <Link className="cld-plate" href={servicePath(service)}>
            <span className="cld-plate__media">
              <Image alt={service.imageAlt} className="cld-plate__img" fill sizes="(max-width: 768px) 100vw, 33vw" src={service.image} />
            </span>
            <span className="cld-plate__label">{service.eyebrow}</span>
            <span className="cld-plate__title">{service.title}</span>
            <span className="cld-plate__text">{service.summary}</span>
            <span className="cld-plate__go">
              살펴보기
              <ArrowUpRight size={15} weight="bold" />
            </span>
          </Link>
        </Rise>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------
   Contact — calm dark close used at the foot of every V2 surface.
   ---------------------------------------------------------------- */
export function CldContact({
  title = "공간을 보내주시면, 필요한 만큼만 제안드립니다.",
  description = "파주 · 일산 · 고양 어디든 방문견적으로 상태를 먼저 확인합니다. 위치와 면적, 희망 일정만 알려주세요.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="cld-contact">
      <Rise className="cld-contact__inner">
        <p className="cld-eyebrow cld-eyebrow--invert">문의</p>
        <h2 className="cld-contact__title">{title}</h2>
        <p className="cld-contact__text">{description}</p>
        <div className="cld-contact__actions">
          <a className="cld-btn cld-btn--light" href={siteConfig.telHref}>
            <PhoneCall size={17} weight="fill" />
            {siteConfig.phone}
          </a>
          <a className="cld-btn cld-btn--outline" href={siteConfig.kakaoUrl}>
            카카오로 문의
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>
        <p className="cld-contact__hours">{siteConfig.businessHours}</p>
      </Rise>
    </section>
  );
}
