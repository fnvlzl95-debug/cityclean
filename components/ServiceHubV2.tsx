"use client";

import Image from "@/components/BasePathImage";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, PhoneCall } from "@phosphor-icons/react/ssr";
import { CldContact, CldServiceGallery, Rise } from "@/components/ClaudeShared";
import type { ServiceCategoryKey } from "@/lib/data";
import { getServiceGroup, getServicesByCategory, siteConfig } from "@/lib/data";
import { withBasePath } from "@/lib/paths";

const ease = [0.22, 1, 0.36, 1] as const;

const checkPoints = [
  "공간 이용량",
  "오염 누적 속도",
  "운영 전후 작업 가능 시간",
  "정기관리 주기",
  "장비 진입 동선",
  "A/S 확인 기준",
];

export function ServiceHubV2({ category }: { category: ServiceCategoryKey }) {
  const group = getServiceGroup(category);
  const services = getServicesByCategory(category);
  const leadService = services[0];
  const reduce = useReducedMotion();

  if (!group || !leadService) {
    return null;
  }

  return (
    <main className="cld">
      {/* hero */}
      <section className="cld-phero cld-phero--media">
        <div className="cld-wrap">
          <div className="cld-phero__grid">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="cld-phero__copy"
              initial={reduce ? false : { opacity: 0, y: 22 }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="cld-eyebrow">{group.shortTitle} 서비스</p>
              <h1 className="cld-phero__title">{group.title}</h1>
              <p className="cld-phero__lead">{group.description}</p>
              <div className="cld-actions">
                <a className="cld-btn cld-btn--dark" href={siteConfig.telHref}>
                  <PhoneCall size={17} weight="fill" />
                  전화 상담
                </a>
                <a className="cld-btn cld-btn--quiet" href={withBasePath("/contact")}>
                  무료 방문견적
                  <ArrowUpRight size={16} weight="bold" />
                </a>
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              className="cld-phero__media"
              initial={reduce ? false : { opacity: 0 }}
              transition={{ duration: 1, ease, delay: 0.15 }}
            >
              <Image alt={leadService.imageAlt} className="cld-phero__img" fill priority sizes="(max-width: 1024px) 100vw, 46vw" src={leadService.image} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="cld-section">
        <div className="cld-wrap">
          <header className="cld-head">
            <p className="cld-eyebrow">세부 서비스</p>
            <h2 className="cld-h2">{group.title}, 공간별로 나눠 관리합니다.</h2>
            <p className="cld-head__lead">
              각 공간의 오염 속도와 이용 시간을 기준으로 작업 범위와 청소 주기를 맞춥니다.
            </p>
          </header>
          <CldServiceGallery services={services} />
        </div>
      </section>

      {/* criteria */}
      <section className="cld-approach">
        <div className="cld-wrap">
          <div className="cld-approach__grid">
            <Rise>
              <p className="cld-eyebrow">견적 기준</p>
              <p className="cld-approach__quote">
                청소 범위는 면적만으로 정하지 않습니다. 실제 <em>오염도</em>와 운영 시간, 출입
                동선을 같이 봅니다.
              </p>
            </Rise>
            <Rise delay={0.1}>
              <ul className="cld-criteria">
                {checkPoints.map((item) => (
                  <li className="cld-criteria__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Rise>
          </div>
        </div>
      </section>

      <CldContact
        description={`${group.title} 상담은 현장 사진만으로 단정하지 않고 방문견적 후 작업 범위와 주기를 안내합니다.`}
        title={`${group.title}, 현장 기준으로 견적을 잡습니다.`}
      />
    </main>
  );
}
