import { SectionHeading, StationBadge } from "@/components/metro/Primitives";
import { aboutItems } from "@/components/metro/data";
import { withBasePath } from "@/lib/paths";

export function AboutSection() {
  return (
    <section className="metro-about" id="about">
      <SectionHeading color="gray" en="About Us" line="정보 라인" title="회사소개" />
      <div className="metro-about__panel">
        <StationBadge color="gray" no="11" />
        <div className="metro-about__copy">
          <h2>시티 클린은</h2>
          <p>전문성과 진심을 담아 도시의 공간을 청결하게 만들어갑니다.</p>
          <a href={withBasePath("/about")}>회사소개 보기</a>
        </div>
        <div className="metro-about__items">
          {aboutItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label}>
                <Icon aria-hidden="true" size={38} weight="duotone" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
