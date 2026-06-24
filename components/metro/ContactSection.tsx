import { Clock, EnvelopeSimple, MapPin, PhoneCall } from "@phosphor-icons/react/ssr";
import { MetroTrain, StationBadge } from "@/components/metro/Primitives";
import { phone } from "@/components/metro/data";

// Station 10 — 연락처 (pairs with the reviews row)
export function ContactCard() {
  return (
    <section className="metro-contact" id="contact">
      <StationBadge className="metro-contact__badge" color="purple" no="10" />
      <div className="metro-contact-card">
        <h2>연락처</h2>
        <a href="tel:021234567">
          <PhoneCall aria-hidden="true" size={18} weight="fill" />
          {phone}
        </a>
        <a href="mailto:hello@cityclean.co.kr">
          <EnvelopeSimple aria-hidden="true" size={18} weight="bold" />
          hello@cityclean.co.kr
        </a>
        <span>
          <Clock aria-hidden="true" size={18} weight="bold" />
          08:00 - 20:00 (연중무휴)
        </span>
        <span>
          <MapPin aria-hidden="true" size={18} weight="bold" />
          서울특별시 강남구 테헤란로 123, 5층
        </span>
      </div>
    </section>
  );
}

// Station 12 — 도착역 (pairs with the About row)
export function ArrivalSection() {
  return (
    <section className="metro-arrival" id="arrival">
      <div className="metro-arrival__station">
        <StationBadge className="metro-station--large" color="blue" no="12">
          <strong>
            도착역
            <br />
            깨끗한 일상
          </strong>
        </StationBadge>
      </div>
      <div className="metro-arrival__bubble">시티 클린과 함께 더 깨끗한 내일로!</div>
      <div className="metro-arrival__train">
        <MetroTrain />
      </div>
    </section>
  );
}
