import { ArrowRight, CalendarBlank, CurrencyKrw } from "@phosphor-icons/react/ssr";
import { MetroTrain, SectionHeading, StationBadge } from "@/components/metro/Primitives";
import { prices } from "@/components/metro/data";

export function PricingSection() {
  return (
    <section className="metro-pricing-booking">
      <div className="metro-pricing" id="pricing">
        <SectionHeading color="green" en="Pricing" line="3호선" title="가격 라인" />
        <div className="metro-price-card">
          <div className="metro-price-card__intro">
            <StationBadge className="metro-price__badge" color="green" no="06" />
            <CurrencyKrw aria-hidden="true" size={30} weight="duotone" />
            <strong>요금 안내</strong>
            <p>투명한 가격, 정확한 서비스</p>
            <a href="#booking">자세히 보기</a>
          </div>
          <div className="metro-price-table">
            {prices.map(([name, unit, price]) => (
              <div key={name}>
                <strong>{name}</strong>
                <span>{unit}</span>
                <em>{price}</em>
              </div>
            ))}
          </div>
          <small>공간, 오염도, 구조에 따라 가격이 달라질 수 있습니다.</small>
        </div>
      </div>

      <div className="metro-booking" id="booking">
        <span className="metro-booking__tag">예약 라인</span>
        <div className="metro-booking__panel">
          <StationBadge color="orange" no="07" />
          <div>
            <strong>Book Now</strong>
            <h2>예약하기</h2>
            <p>간편하게 청소 예약!</p>
            <a href="tel:021234567">
              예약하기
              <ArrowRight aria-hidden="true" size={15} weight="bold" />
            </a>
          </div>
          <CalendarBlank aria-hidden="true" className="metro-booking__icon" size={42} weight="duotone" />
        </div>
        <div className="metro-booking__train">
          <MetroTrain />
        </div>
      </div>
    </section>
  );
}
