import Image from "@/components/BasePathImage";
import { MapPin } from "@phosphor-icons/react/ssr";
import { MetroTrain } from "@/components/metro/Primitives";
import { heroBadges } from "@/components/metro/data";

export function Hero() {
  return (
    <section className="metro-hero" id="top">
      <div className="metro-hero__copy">
        <h1>
          도시를 달리는
          <br />
          <strong>청소 서비스</strong>
        </h1>
        <p>
          우리 동네, 우리 공간을 깨끗하게!
          <br />
          시티 클린이 빠르고 꼼꼼하게 달려갑니다.
        </p>
        <div className="metro-hero__badges" aria-label="서비스 특징">
          {heroBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <div className="metro-hero__train">
          <MetroTrain />
        </div>
      </div>

      <div className="metro-hero__center">
        <div className="metro-terminal" data-station-color="blue" data-station-no="01">
          <span>01</span>
          <strong>
            출발역
            <br />
            시티 클린
          </strong>
        </div>
        <div className="metro-speech">쾌적한 도시 생활의 시작, 시티 클린과 함께!</div>
      </div>

      <div className="metro-worker">
        <Image
          alt="시티클린 청소 작업자 일러스트"
          fill
          priority
          sizes="(max-width: 900px) 48vw, 300px"
          src="/images/generated/metro-cleaner.png"
        />
      </div>

      <aside className="metro-legend" aria-label="노선 안내">
        <strong>노선 안내</strong>
        <span data-line="blue">서비스 라인</span>
        <span data-line="green">가격 라인</span>
        <span data-line="orange">예약 라인</span>
        <span data-line="purple">후기 라인</span>
        <span data-line="gray">정보 라인</span>
      </aside>

      <aside className="metro-quick">
        <strong>빠른 이동</strong>
        <span>원하는 역을 눌러보세요!</span>
        <MapPin aria-hidden="true" size={30} weight="duotone" />
      </aside>
    </section>
  );
}
