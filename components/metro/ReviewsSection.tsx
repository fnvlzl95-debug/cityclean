import { ChatCircleDots } from "@phosphor-icons/react/ssr";
import { StarRating, StationBadge } from "@/components/metro/Primitives";
import { reviews } from "@/components/metro/data";

export function ReviewsSection() {
  return (
    <section className="metro-reviews" id="reviews">
      <div className="metro-review-intro">
        <StationBadge className="metro-review__badge" color="purple" no="09" />
        <ChatCircleDots aria-hidden="true" size={34} weight="duotone" />
        <h2>고객 후기</h2>
        <p>고객 만족이 시티 클린의 원동력!</p>
        <a href="#contact">더 많은 후기 보기</a>
      </div>
      <div className="metro-review-grid">
        {reviews.map((review) => (
          <article className="metro-review-card" key={review.by}>
            <StarRating />
            <p>{review.text}</p>
            <span>{review.by}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
