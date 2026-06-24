import Image from "@/components/BasePathImage";
import { SectionHeading, StationBadge } from "@/components/metro/Primitives";
import { serviceCards } from "@/components/metro/data";

export function ServicesSection() {
  return (
    <section className="metro-services" id="services">
      <SectionHeading color="blue" en="Our Services" line="2호선" title="서비스 라인" />
      <div className="metro-service-grid">
        {serviceCards.map((service) => {
          const Icon = service.icon;
          return (
            <article className="metro-service-card" key={service.title}>
              <StationBadge no={service.no} />
              <div className="metro-service-card__head">
                <span>
                  <Icon aria-hidden="true" size={30} weight="duotone" />
                </span>
                <h3>{service.title}</h3>
              </div>
              <div className="metro-service-card__image">
                <Image alt={service.alt} fill loading="eager" sizes="190px" src={service.image} />
              </div>
              <p>{service.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
