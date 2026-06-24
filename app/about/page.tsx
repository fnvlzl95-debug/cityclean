import type { Metadata } from "next";
import { AboutSwitch } from "@/components/AboutSwitch";

export const metadata: Metadata = {
  title: "회사소개 | 시티클린",
  description:
    "시티클린은 파주·일산·고양 정기청소와 종합청소, 홈클리닝을 현장 상태에 맞춰 관리하는 청소 전문 업체입니다.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutSwitch />;
}
