import {
  Bathtub,
  Buildings,
  ClipboardText,
  House,
  Leaf,
  ShieldCheck,
  Truck,
  UserGear,
} from "@phosphor-icons/react/ssr";

export const phone = "02-123-4567";

export const navItems = [
  ["서비스", "#services"],
  ["요금안내", "#pricing"],
  ["이용안내", "#booking"],
  ["전후사례", "#before-after"],
  ["고객후기", "#reviews"],
  ["회사소개", "#about"],
] as const;

export const heroBadges = [
  "전문 장비",
  "친환경 세제",
  "직영팀 운영",
  "만족 보장",
] as const;

export const serviceCards = [
  {
    no: "02",
    title: "입주청소",
    icon: House,
    image: "/images/cases/home-move-in.webp",
    alt: "정돈된 거실 청소 이미지",
    copy: "새 집의 시작을 완벽하게",
  },
  {
    no: "03",
    title: "사무실청소",
    icon: Buildings,
    image: "/images/cases/regular-office.webp",
    alt: "정돈된 사무실 청소 이미지",
    copy: "업무 공간을 밝고 쾌적하게",
  },
  {
    no: "04",
    title: "이사청소",
    icon: Truck,
    image: "/images/cases/home-move.webp",
    alt: "이사 후 공간 청소 이미지",
    copy: "이사 전후 깔끔한 마무리",
  },
  {
    no: "05",
    title: "욕실청소",
    icon: Bathtub,
    image: "/images/cases/regular-restroom.webp",
    alt: "밝은 욕실 청소 이미지",
    copy: "물때와 곰팡이까지 보송하게",
  },
] as const;

export const prices = [
  ["입주청소", "25평 기준", "250,000원~"],
  ["사무실청소", "30평 기준", "200,000원~"],
  ["이사청소", "25평 기준", "230,000원~"],
  ["욕실청소", "1개 기준", "80,000원~"],
] as const;

export const beforeAfterCases = [
  {
    title: "입주청소",
    before: "/images/cases/regular-stairs-before.webp",
    after: "/images/cases/regular-stairs-after.webp",
  },
  {
    title: "욕실청소",
    before: "/images/cases/regular-restroom-before.webp",
    after: "/images/cases/regular-restroom-after.webp",
  },
  {
    title: "이사청소",
    before: "/images/cases/home-aircon-before.webp",
    after: "/images/cases/home-aircon-after.webp",
  },
  {
    title: "사무실청소",
    before: "/images/cases/regular-office.webp",
    after: "/images/cases/hero-office.webp",
  },
] as const;

export const reviews = [
  {
    text: "이사청소를 맡겼는데 모서리까지 꼼꼼하게 정리되어 새 집처럼 느껴졌어요.",
    by: "김OO 고객님",
  },
  {
    text: "사무실 정기 청소 후 직원들이 쾌적해졌다고 바로 이야기해 주었습니다.",
    by: "박OO 대표님",
  },
  {
    text: "욕실 곰팡이 때문에 고민이었는데 눈에 띄게 밝아져서 만족했습니다.",
    by: "이OO 고객님",
  },
] as const;

export const aboutItems = [
  {
    icon: UserGear,
    label: "전문 교육 직영팀",
  },
  {
    icon: Leaf,
    label: "친환경 세제 사용",
  },
  {
    icon: ClipboardText,
    label: "체계적인 청소",
  },
  {
    icon: ShieldCheck,
    label: "고객 만족 100%",
  },
] as const;
