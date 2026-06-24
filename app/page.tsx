import type { Metadata } from "next";
import { HomeSwitch } from "@/components/HomeSwitch";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "시티클린 | 파주·일산·고양 정기청소 전문",
  description:
    "시티클린은 파주·일산·고양 정기청소, 사무실청소, 계단청소, 화장실청소, 에어컨청소를 현장 상태에 맞춰 관리합니다.",
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  telephone: siteConfig.phone,
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  sameAs: [siteConfig.naverPlaceUrl, siteConfig.instagramUrl],
  makesOffer: [
    "정기청소",
    "사무실청소",
    "계단청소",
    "화장실청소",
    "에어컨청소",
    "외벽청소",
    "유리창청소",
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <HomeSwitch />
    </>
  );
}
