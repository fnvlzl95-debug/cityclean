import { ArrowRight, ChatCircleText, PhoneCall, Sparkle } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/data";

type ContactBandProps = {
  title?: string;
  description?: string;
};

export function ContactBand({
  title = "현장 상태를 보고, 주기에 맞게 관리합니다.",
  description = "파주·일산·고양 정기청소와 에어컨청소 상담은 전화로 가장 빠르게 연결됩니다.",
}: ContactBandProps) {
  return (
    <section className="cband">
      <Reveal>
        <div className="cband__inner">
          <div style={{ position: "relative", zIndex: 1 }}>
            <p className="kicker-light">
              <Sparkle size={16} weight="fill" />
              문의
            </p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="cband__actions" style={{ position: "relative", zIndex: 1 }}>
            <a className="btn btn--inverse" href={siteConfig.telHref}>
              <PhoneCall aria-hidden="true" size={18} weight="duotone" />
              {siteConfig.phone}
            </a>
            <a className="btn btn--on-dark" href={siteConfig.kakaoUrl}>
              <ChatCircleText aria-hidden="true" size={18} weight="duotone" />
              카카오 문의
              <ArrowRight aria-hidden="true" size={16} weight="bold" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
