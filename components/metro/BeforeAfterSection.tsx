import Image from "@/components/BasePathImage";
import { SectionHeading, StationBadge } from "@/components/metro/Primitives";
import { beforeAfterCases } from "@/components/metro/data";

export function BeforeAfterSection() {
  return (
    <section className="metro-before" id="before-after">
      <SectionHeading color="purple" en="Before & After" line="5호선" title="전후사례 라인" />
      <div className="metro-before__intro">
        <StationBadge color="purple" no="08" />
        <h2>전후 사례</h2>
        <p>눈에 보이는 확실한 변화!</p>
        <a href="#reviews">더 보기</a>
      </div>
      <div className="metro-before__rail" aria-label="작업 전후 사례">
        {beforeAfterCases.map((item) => (
          <article className="metro-before-card" key={item.title}>
            <h3>{item.title}</h3>
            <div className="metro-before-card__pair">
              <figure>
                <Image alt={`${item.title} 작업 전`} fill loading="eager" sizes="120px" src={item.before} />
                <figcaption>BEFORE</figcaption>
              </figure>
              <figure>
                <Image alt={`${item.title} 작업 후`} fill loading="eager" sizes="120px" src={item.after} />
                <figcaption>AFTER</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </div>
      <button aria-label="이전 사례 보기" className="metro-arrow metro-arrow--prev" type="button">
        ‹
      </button>
      <button aria-label="다음 사례 보기" className="metro-arrow metro-arrow--next" type="button">
        ›
      </button>
    </section>
  );
}
