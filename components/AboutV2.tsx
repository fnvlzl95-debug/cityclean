"use client";

import Image from "@/components/BasePathImage";
import { motion, useReducedMotion } from "framer-motion";
import { CldContact, Rise } from "@/components/ClaudeShared";

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  ["01", "현장 기준으로 범위를 정합니다", "청소는 공간마다 오염 속도가 다릅니다. 방문견적에서 사용량, 바닥 재질, 냄새 원인, 관리 시간을 함께 확인합니다."],
  ["02", "초도청소 후 유지 기준을 잡습니다", "정기청소는 한 번의 청소로 끝나지 않습니다. 처음 상태를 회복한 뒤 유지에 필요한 주기를 설계합니다."],
  ["03", "오염도에 맞는 장비를 씁니다", "친환경 세제와 공간별 장비를 오염도에 맞게 나눠 사용합니다. 같은 장비라도 기준이 다르면 결과가 달라집니다."],
  ["04", "끝까지 확인하고 정리합니다", "작업 후 미비한 부분은 피드백 기준으로 다시 정비합니다. 남기는 것은 결과입니다."],
];

const domains = [
  ["정기청소", "사무실, 계단, 화장실, 건물 공용부처럼 반복 관리가 필요한 공간을 주기별로 관리합니다."],
  ["종합청소", "외벽, 유리창, 주차장, 대청소, 바닥왁스코팅처럼 장비와 동선이 필요한 작업을 진행합니다."],
  ["홈클리닝", "입주청소, 이사청소, 에어컨청소처럼 생활 공간의 오염 원인을 세밀하게 정리합니다."],
];

export function AboutV2() {
  const reduce = useReducedMotion();

  return (
    <main className="cld">
      {/* hero */}
      <section className="cld-phero">
        <div className="cld-wrap">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="cld-phero__copy"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="cld-eyebrow">회사 소개</p>
            <h1 className="cld-phero__title">
              보이는 곳보다,
              <br />
              반복해서 더러워지는 곳을 봅니다.
            </h1>
            <p className="cld-phero__lead">
              시티클린은 정기청소를 중심으로 건물, 사무실, 상가, 화장실, 계단, 에어컨까지 공간
              상태에 맞춰 관리하는 청소 전문 업체입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* statement with image */}
      <section className="cld-section">
        <div className="cld-wrap">
          <div className="cld-about__split">
            <Rise className="cld-about__media">
              <Image alt="시티클린 계단청소 결과" className="cld-about__img" fill sizes="(max-width: 1024px) 100vw, 46vw" src="/images/cases/regular-stairs.webp" />
            </Rise>
            <Rise delay={0.1}>
              <p className="cld-eyebrow">작업 원칙</p>
              <p className="cld-about__quote">
                같은 공간이라도 오염 속도는 다릅니다. 그래서 <em>현장</em>에서 범위와 주기를
                정합니다.
              </p>
              <dl className="cld-points cld-points--num">
                {principles.map(([no, term, desc]) => (
                  <div className="cld-points__row" key={no}>
                    <dt>
                      <i>{no}</i>
                      {term}
                    </dt>
                    <dd>{desc}</dd>
                  </div>
                ))}
              </dl>
            </Rise>
          </div>
        </div>
      </section>

      {/* domains */}
      <section className="cld-approach">
        <div className="cld-wrap">
          <header className="cld-head">
            <p className="cld-eyebrow">관리 영역</p>
            <h2 className="cld-h2">세 갈래로 공간을 나눠 관리합니다.</h2>
          </header>
          <div className="cld-domains">
            {domains.map(([title, desc], index) => (
              <Rise delay={index * 0.08} key={title}>
                <div className="cld-domain">
                  <h3 className="cld-domain__title">{title}</h3>
                  <p className="cld-domain__text">{desc}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <CldContact
        description="파주·일산·고양 정기청소와 종합청소, 홈클리닝 상담은 전화로 가장 빠르게 연결됩니다."
        title="현장 상태를 보고, 주기에 맞게 관리합니다."
      />
    </main>
  );
}
