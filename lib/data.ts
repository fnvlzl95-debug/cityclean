import { withBasePath } from "@/lib/paths";

export type ServiceCategoryKey = "regular" | "total" | "home";

export type Service = {
  slug: string;
  category: ServiceCategoryKey;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  scope: string[];
  recommendedFor: string[];
  beforeAfter?: {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
  };
};

export type ServiceGroup = {
  key: ServiceCategoryKey;
  title: string;
  shortTitle: string;
  path: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export type Area = {
  slug: "paju" | "ilsan" | "goyang";
  title: string;
  headline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  districts: string[];
  placeUrl: string;
  primaryServiceSlugs: string[];
};

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  relatedServiceSlugs: string[];
};

export const siteConfig = {
  name: "시티클린",
  legalName: "시티클린",
  siteUrl: "https://cityclean.co.kr",
  description:
    "파주·일산·고양 정기청소, 사무실청소, 계단청소, 화장실청소, 에어컨청소를 현장 상태에 맞춰 관리하는 청소 전문 업체입니다.",
  phone: "010-2819-1403",
  telHref: "tel:01028191403",
  kakaoUrl: withBasePath("/contact#quick-contact"),
  naverPlaceUrl:
    "https://map.naver.com/p/search/%EC%8B%9C%ED%8B%B0%ED%81%B4%EB%A6%B0/place/2043076243",
  instagramUrl: "https://www.instagram.com/city_clean89/",
  serviceAreas: ["파주", "일산", "고양"],
  businessHours: "상담 가능 시간 09:00 - 20:00",
  ogImage: "/images/cases/og-cityclean.webp",
};

export const serviceGroups: ServiceGroup[] = [
  {
    key: "regular",
    title: "정기청소",
    shortTitle: "정기",
    path: "/regular-cleaning",
    description:
      "건물, 사무실, 상가, 병원, 교회 등 반복 관리가 필요한 공간을 주 1회부터 주 7회까지 맞춤 관리합니다.",
    seoTitle: "파주·일산·고양 정기청소 전문 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 정기청소 업체 시티클린. 사무실, 계단, 화장실, 건물, 병원, 교회 청소를 방문견적 후 주기별로 관리합니다.",
  },
  {
    key: "total",
    title: "종합청소",
    shortTitle: "종합",
    path: "/total-cleaning/window",
    description:
      "외벽, 유리창, 주차장, 대청소, 바닥왁스처럼 장비와 작업 동선이 중요한 단기 청소를 맡습니다.",
    seoTitle: "외벽청소·유리창청소·대청소 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 외벽청소, 유리창청소, 주차장청소, 대청소, 바닥왁스코팅 전문 청소 업체입니다.",
  },
  {
    key: "home",
    title: "홈클리닝",
    shortTitle: "홈",
    path: "/home-cleaning/aircon",
    description:
      "입주청소, 이사청소, 에어컨 분해청소처럼 생활 공간의 오염 원인을 세밀하게 정리합니다.",
    seoTitle: "입주청소·이사청소·에어컨청소 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 홈클리닝. 입주청소, 이사청소, 에어컨청소를 실제 오염 상태에 맞춰 진행합니다.",
  },
];

export const services: Service[] = [
  {
    slug: "stairs",
    category: "regular",
    title: "계단청소",
    shortTitle: "계단",
    eyebrow: "공용부 정기관리",
    summary: "먼지, 발자국, 벽면 오염이 반복되는 계단을 주기적으로 관리합니다.",
    description:
      "빌라, 상가, 건물의 계단은 입주민과 방문객이 가장 먼저 보는 공용부입니다. 시티클린은 바닥 재질과 오염도에 맞춰 초도청소 후 정기 주기를 설계합니다.",
    image: "/images/cases/regular-stairs.webp",
    imageAlt: "광택이 정리된 건물 계단 청소 결과",
    seoTitle: "파주·일산 계단청소 정기관리 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 계단청소. 빌라, 상가, 건물 공용 계단을 방문견적 후 주기별로 관리합니다.",
    keywords: ["계단청소", "빌라 계단청소", "공용부청소", "일산 정기청소"],
    scope: ["계단 바닥 세척", "난간 및 손잡이 닦음", "벽면 부분 오염 정리", "공용부 먼지 제거"],
    recommendedFor: ["빌라·다세대 건물", "상가 건물", "소형 오피스 건물", "관리 인력이 없는 공용부"],
    beforeAfter: {
      before: "/images/cases/regular-stairs-before.webp",
      after: "/images/cases/regular-stairs-after.webp",
      beforeAlt: "청소 전 계단 바닥 상태",
      afterAlt: "청소 후 광택이 살아난 계단 바닥",
    },
  },
  {
    slug: "office",
    category: "regular",
    title: "사무실청소",
    shortTitle: "사무실",
    eyebrow: "업무공간 관리",
    summary: "직원과 방문객이 함께 쓰는 사무실을 업무 흐름에 맞춰 관리합니다.",
    description:
      "책상 주변, 회의실, 바닥, 탕비실, 화장실까지 사무실 동선을 기준으로 관리합니다. 영업 전후, 야간, 주말 등 운영 시간에 맞춘 주기 설정이 가능합니다.",
    image: "/images/cases/regular-office.webp",
    imageAlt: "정돈된 사무실 바닥과 업무 공간",
    seoTitle: "일산·파주 사무실청소 정기관리 | 시티클린",
    seoDescription:
      "일산, 파주, 고양 사무실청소. 사무공간, 회의실, 탕비실, 화장실을 정기적으로 관리합니다.",
    keywords: ["사무실청소", "고양 사무실청소", "일산 정기청소업체", "파주 사무실청소"],
    scope: ["바닥 먼지 및 오염 정리", "책상 주변 관리", "탕비실 정리", "화장실 및 공용부 청소"],
    recommendedFor: ["사무실", "학원", "병원 접수 공간", "상가 내 업무 공간"],
    beforeAfter: {
      before: "/images/cases/regular-stairs-before.webp",
      after: "/images/cases/regular-stairs-after.webp",
      beforeAlt: "청소 전 공용부 바닥",
      afterAlt: "청소 후 정리된 공용부 바닥",
    },
  },
  {
    slug: "restroom",
    category: "regular",
    title: "화장실청소",
    shortTitle: "화장실",
    eyebrow: "위생 집중관리",
    summary: "냄새와 물때가 누적되기 쉬운 화장실을 위생 기준에 맞춰 관리합니다.",
    description:
      "화장실은 오염이 눈에 보이기 전에 관리 주기를 잡아야 합니다. 변기, 세면대, 바닥, 배수구, 벽면 물때를 정리하고 악취 원인을 줄입니다.",
    image: "/images/cases/regular-restroom.webp",
    imageAlt: "청소 후 정돈된 화장실 바닥",
    seoTitle: "파주·일산 화장실청소 정기관리 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 화장실청소. 상가, 사무실, 병원, 건물 화장실을 주기적으로 관리합니다.",
    keywords: ["화장실청소", "상가 화장실청소", "정기청소", "악취관리"],
    scope: ["변기 및 세면대 세척", "바닥 물때 제거", "배수구 주변 관리", "소모품 상태 확인"],
    recommendedFor: ["상가 화장실", "사무실 화장실", "병원·학원 화장실", "공용 샤워실"],
    beforeAfter: {
      before: "/images/cases/regular-restroom-before.webp",
      after: "/images/cases/regular-restroom-after.webp",
      beforeAlt: "화장실 청소 전 바닥 상태",
      afterAlt: "화장실 청소 후 바닥 상태",
    },
  },
  {
    slug: "church",
    category: "regular",
    title: "교회청소",
    shortTitle: "교회",
    eyebrow: "예배공간 관리",
    summary: "예배당, 교육실, 로비, 화장실을 행사 일정에 맞춰 정리합니다.",
    description:
      "주말 예배와 평일 모임이 반복되는 교회 공간은 일정에 맞춘 관리가 중요합니다. 공용부와 좌석, 바닥, 화장실을 균형 있게 관리합니다.",
    image: "/images/cases/regular-church.webp",
    imageAlt: "교회 공간 정기청소 사례",
    seoTitle: "파주·고양 교회청소 정기관리 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 교회청소. 예배당, 교육실, 로비, 화장실을 일정에 맞춰 정기관리합니다.",
    keywords: ["교회청소", "예배당청소", "정기청소", "고양 청소업체"],
    scope: ["예배당 바닥 관리", "로비 및 복도 청소", "교육실 정리", "화장실 위생관리"],
    recommendedFor: ["교회", "성당", "종교시설", "주말 이용이 많은 공용시설"],
  },
  {
    slug: "building",
    category: "regular",
    title: "건물청소",
    shortTitle: "건물",
    eyebrow: "건물 공용부 관리",
    summary: "출입구부터 복도, 계단, 화장실까지 건물 전체 인상을 관리합니다.",
    description:
      "건물 공용부는 작은 오염도 빠르게 누적됩니다. 시티클린은 방문견적 후 관리 범위와 주기를 정해 건물의 기본 상태를 유지합니다.",
    image: "/images/cases/regular-building.webp",
    imageAlt: "정리된 건물 공용부 청소 결과",
    seoTitle: "파주·일산 건물청소 정기관리 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 건물청소. 출입구, 복도, 계단, 화장실 등 공용부를 정기관리합니다.",
    keywords: ["건물청소", "건물 정기청소", "공용부청소", "파주 정기청소"],
    scope: ["출입구 관리", "복도 및 계단 청소", "공용 화장실 관리", "분리수거장 주변 정리"],
    recommendedFor: ["상가건물", "오피스건물", "빌딩 공용부", "병원·학원 건물"],
  },
  {
    slug: "hospital",
    category: "regular",
    title: "병원청소",
    shortTitle: "병원",
    eyebrow: "민감공간 관리",
    summary: "환자와 보호자가 이용하는 공간을 위생 중심으로 관리합니다.",
    description:
      "병원과 의원은 대기실, 진료실, 화장실, 바닥 오염을 안정적으로 관리해야 합니다. 운영 시간과 동선을 고려해 청소 시간을 조율합니다.",
    image: "/images/cases/regular-office.webp",
    imageAlt: "병원과 사무공간에 적합한 정돈된 실내 바닥",
    seoTitle: "일산·파주 병원청소 정기관리 | 시티클린",
    seoDescription:
      "일산, 파주, 고양 병원청소. 대기실, 진료실, 화장실, 공용부를 정기적으로 관리합니다.",
    keywords: ["병원청소", "의원청소", "정기청소", "위생관리"],
    scope: ["대기실 바닥 관리", "진료실 주변 정리", "화장실 청소", "출입구 및 복도 관리"],
    recommendedFor: ["의원", "한의원", "치과", "동물병원"],
  },
  {
    slug: "gym",
    category: "regular",
    title: "헬스장청소",
    shortTitle: "헬스장",
    eyebrow: "운동시설 관리",
    summary: "운동기구 주변, 샤워실, 탈의실, 바닥 오염을 주기적으로 관리합니다.",
    description:
      "헬스장과 운동시설은 땀, 먼지, 물기가 반복됩니다. 바닥과 공용부를 분리해 관리하고 샤워실 위생 상태를 안정적으로 유지합니다.",
    image: "/images/cases/regular-restroom.webp",
    imageAlt: "운동시설 공용부에 적합한 청소 결과",
    seoTitle: "파주·일산 헬스장청소 정기관리 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 헬스장청소. 운동시설, 샤워실, 탈의실, 화장실을 주기별로 관리합니다.",
    keywords: ["헬스장청소", "샤워실청소", "정기청소", "운동시설청소"],
    scope: ["운동공간 바닥 청소", "샤워실 물때 관리", "탈의실 정리", "화장실 청소"],
    recommendedFor: ["헬스장", "필라테스", "요가원", "샤워실 보유 시설"],
  },
  {
    slug: "salon",
    category: "regular",
    title: "미용실청소",
    shortTitle: "미용실",
    eyebrow: "매장 청결관리",
    summary: "머리카락, 약품 흔적, 바닥 오염을 영업 흐름에 맞춰 정리합니다.",
    description:
      "미용실은 머리카락과 약품 잔여물이 빠르게 쌓입니다. 영업 전후 시간에 맞춰 바닥, 의자 주변, 샴푸실, 화장실을 관리합니다.",
    image: "/images/cases/regular-office.webp",
    imageAlt: "매장 정기청소에 적합한 바닥 관리 사례",
    seoTitle: "파주·일산 미용실청소 정기관리 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 미용실청소. 영업 전후 시간에 맞춰 바닥, 샴푸실, 화장실을 관리합니다.",
    keywords: ["미용실청소", "매장청소", "정기청소", "상가청소"],
    scope: ["바닥 머리카락 제거", "의자 주변 정리", "샴푸실 관리", "화장실 청소"],
    recommendedFor: ["미용실", "네일샵", "피부관리실", "소형 상가"],
  },
  {
    slug: "restaurant",
    category: "regular",
    title: "식당 정기청소",
    shortTitle: "식당",
    eyebrow: "영업장 관리",
    summary: "홀, 바닥, 화장실, 주방 주변 오염을 영업 일정에 맞춰 관리합니다.",
    description:
      "식당은 기름때와 발자국, 음식물 흔적이 반복됩니다. 홀과 공용부 위주로 정기관리하고 필요 시 종합청소로 확장합니다.",
    image: "/images/cases/total-deep-clean.webp",
    imageAlt: "식당과 상가 대청소에 적합한 현장 사진",
    seoTitle: "파주·일산 식당청소 정기관리 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 식당청소. 홀, 바닥, 화장실, 공용부를 영업 일정에 맞춰 정기관리합니다.",
    keywords: ["식당청소", "상가청소", "매장청소", "정기청소"],
    scope: ["홀 바닥 관리", "출입구 정리", "화장실 청소", "주방 주변 부분 청소"],
    recommendedFor: ["식당", "카페", "프랜차이즈 매장", "상가 점포"],
  },
  {
    slug: "shower",
    category: "regular",
    title: "샤워실청소",
    shortTitle: "샤워실",
    eyebrow: "습식공간 관리",
    summary: "물때, 곰팡이, 배수구 오염이 반복되는 샤워실을 관리합니다.",
    description:
      "샤워실은 습기로 인해 곰팡이와 물때가 빠르게 생깁니다. 바닥, 벽면, 배수구, 수전 주변을 중심으로 주기 관리합니다.",
    image: "/images/cases/regular-restroom.webp",
    imageAlt: "물때가 정리된 습식 공간 바닥",
    seoTitle: "파주·일산 샤워실청소 정기관리 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 샤워실청소. 헬스장, 기숙사, 공용 샤워실의 물때와 배수구 오염을 관리합니다.",
    keywords: ["샤워실청소", "물때청소", "헬스장청소", "화장실청소"],
    scope: ["바닥 물때 제거", "벽면 오염 관리", "배수구 주변 청소", "수전 주변 정리"],
    recommendedFor: ["헬스장", "기숙사", "공용 샤워실", "숙박시설"],
  },
  {
    slug: "window",
    category: "total",
    title: "유리창청소",
    shortTitle: "유리창",
    eyebrow: "외부 시야 관리",
    summary: "매장과 건물의 첫인상을 좌우하는 유리창 오염을 정리합니다.",
    description:
      "유리창은 물때, 먼지, 빗물 자국이 외부 인상을 흐립니다. 접근 방식과 안전 동선을 확인한 뒤 유리와 프레임을 함께 관리합니다.",
    image: "/images/cases/total-window.webp",
    imageAlt: "상가 유리창 청소 현장",
    seoTitle: "파주·일산 유리창청소 전문 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 유리창청소. 상가, 사무실, 건물 외부 유리와 프레임 오염을 정리합니다.",
    keywords: ["유리창청소", "외부유리청소", "상가유리청소", "종합청소"],
    scope: ["유리 표면 세척", "프레임 주변 정리", "물때 및 빗물 자국 관리", "작업 동선 안전 확인"],
    recommendedFor: ["상가", "카페", "사무실", "건물 저층부"],
    beforeAfter: {
      before: "/images/cases/regular-restroom-before.webp",
      after: "/images/cases/regular-restroom-after.webp",
      beforeAlt: "청소 전 오염된 표면",
      afterAlt: "청소 후 정돈된 표면",
    },
  },
  {
    slug: "exterior",
    category: "total",
    title: "외벽청소",
    shortTitle: "외벽",
    eyebrow: "건물 외부 관리",
    summary: "외벽의 빗물 자국, 먼지, 오염 누적을 작업 환경에 맞춰 정리합니다.",
    description:
      "외벽청소는 장비 접근, 안전 동선, 오염 종류 확인이 우선입니다. 현장 확인 후 작업 방식과 범위를 정하고 안전하게 진행합니다.",
    image: "/images/cases/total-exterior-after.webp",
    imageAlt: "외벽청소 후 정리된 건물 외부",
    seoTitle: "파주·일산 외벽청소 전문 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 외벽청소. 건물 외부 오염과 빗물 자국을 현장 조건에 맞춰 정리합니다.",
    keywords: ["외벽청소", "건물외벽청소", "종합청소", "고양 외벽청소"],
    scope: ["외벽 오염 확인", "장비 접근 검토", "외부 표면 세척", "작업 후 상태 확인"],
    recommendedFor: ["상가 건물", "사옥", "저층 건물", "외관 관리가 필요한 매장"],
  },
  {
    slug: "deep",
    category: "total",
    title: "대청소",
    shortTitle: "대청소",
    eyebrow: "공간 리셋",
    summary: "오랫동안 쌓인 오염을 한 번에 정리해 공간의 기본 상태를 회복합니다.",
    description:
      "대청소는 정기관리 전 초도청소나 이전·리뉴얼 전후에 적합합니다. 바닥, 벽면, 창틀, 공용부를 공간 상태에 맞춰 정리합니다.",
    image: "/images/cases/total-deep-clean.webp",
    imageAlt: "대청소 작업 현장",
    seoTitle: "파주·일산 대청소 전문 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 대청소. 오래 쌓인 오염을 정리하고 정기관리 전 초도청소를 진행합니다.",
    keywords: ["대청소", "초도청소", "상가청소", "종합청소"],
    scope: ["공간 전체 오염 확인", "바닥 및 공용부 세척", "창틀·부분 오염 정리", "정기관리 전 상태 정리"],
    recommendedFor: ["이전 전후 공간", "리뉴얼 매장", "장기간 관리가 없던 건물", "정기청소 시작 전"],
  },
  {
    slug: "parking",
    category: "total",
    title: "주차장청소",
    shortTitle: "주차장",
    eyebrow: "대면적 바닥 관리",
    summary: "먼지, 타이어 자국, 물고임이 생기는 주차장 바닥을 정리합니다.",
    description:
      "주차장은 넓은 면적과 차량 동선 때문에 작업 계획이 중요합니다. 오염 상태와 배수 환경을 확인하고 구역별로 진행합니다.",
    image: "/images/cases/total-parking.webp",
    imageAlt: "주차장 청소 후 정돈된 바닥",
    seoTitle: "파주·일산 주차장청소 전문 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 주차장청소. 먼지, 타이어 자국, 바닥 오염을 구역별로 정리합니다.",
    keywords: ["주차장청소", "바닥청소", "종합청소", "건물청소"],
    scope: ["바닥 먼지 제거", "타이어 자국 확인", "배수구 주변 정리", "구역별 작업 진행"],
    recommendedFor: ["상가 주차장", "건물 지하주차장", "공용 주차공간", "관리소 없는 소형 주차장"],
  },
  {
    slug: "floor-wax",
    category: "total",
    title: "바닥왁스코팅",
    shortTitle: "바닥왁스",
    eyebrow: "바닥 보호",
    summary: "바닥 표면을 정리하고 광택과 보호막을 회복합니다.",
    description:
      "바닥왁스코팅은 표면 오염을 정리한 뒤 코팅으로 마감해 관리성을 높입니다. 바닥 재질과 사용량에 맞춰 진행합니다.",
    image: "/images/cases/total-floor-after.webp",
    imageAlt: "바닥왁스코팅 후 광택이 살아난 바닥",
    seoTitle: "파주·일산 바닥왁스코팅 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 바닥왁스코팅. 바닥 표면 오염을 정리하고 광택과 보호막을 회복합니다.",
    keywords: ["바닥왁스코팅", "바닥청소", "상가청소", "사무실청소"],
    scope: ["바닥 상태 확인", "표면 오염 정리", "왁스코팅", "건조 및 마감 확인"],
    recommendedFor: ["사무실", "상가", "병원", "공용부 바닥"],
  },
  {
    slug: "ventilator",
    category: "total",
    title: "환풍기청소",
    shortTitle: "환풍기",
    eyebrow: "공기 흐름 관리",
    summary: "먼지와 기름때가 쌓이는 환풍기 주변을 분해 가능한 범위에서 정리합니다.",
    description:
      "환풍기와 배기 주변은 오염이 누적되면 냄새와 성능 저하로 이어집니다. 현장에서 분해 가능 범위와 안전성을 확인하고 청소합니다.",
    image: "/images/cases/total-deep-clean.webp",
    imageAlt: "환풍기와 설비 주변 청소 현장",
    seoTitle: "파주·일산 환풍기청소 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 환풍기청소. 먼지와 기름때가 쌓이는 환풍기 주변을 현장 조건에 맞춰 정리합니다.",
    keywords: ["환풍기청소", "후드청소", "식당청소", "종합청소"],
    scope: ["환풍기 상태 확인", "분해 가능 범위 청소", "기름때 및 먼지 제거", "작업 후 작동 확인"],
    recommendedFor: ["식당", "카페", "상가", "공용 화장실"],
  },
  {
    slug: "restaurant",
    category: "total",
    title: "식당 종합청소",
    shortTitle: "식당",
    eyebrow: "영업장 집중관리",
    summary: "영업장에 누적된 기름때와 바닥 오염을 집중적으로 정리합니다.",
    description:
      "정기관리로 해결되지 않는 누적 오염은 종합청소로 정리합니다. 홀, 바닥, 주방 주변, 환풍기 주변 상태를 보고 범위를 정합니다.",
    image: "/images/cases/total-deep-clean.webp",
    imageAlt: "식당 종합청소 현장",
    seoTitle: "파주·일산 식당 종합청소 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 식당 종합청소. 영업장 바닥, 홀, 주방 주변 누적 오염을 집중 정리합니다.",
    keywords: ["식당청소", "상가청소", "대청소", "환풍기청소"],
    scope: ["홀 바닥 세척", "주방 주변 오염 정리", "환풍기 주변 확인", "영업 전후 일정 조율"],
    recommendedFor: ["식당", "카페", "프랜차이즈 매장", "배달전문점"],
  },
  {
    slug: "pool",
    category: "total",
    title: "수영장청소",
    shortTitle: "수영장",
    eyebrow: "습식 대형공간",
    summary: "물때와 미끄럼 오염이 생기는 수영장 주변 공간을 관리합니다.",
    description:
      "수영장과 습식 대형공간은 바닥 물때와 배수 상태가 중요합니다. 사용 일정과 안전 동선을 확인하고 구역별로 정리합니다.",
    image: "/images/cases/regular-restroom.webp",
    imageAlt: "습식 공간 청소 결과",
    seoTitle: "파주·일산 수영장청소 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 수영장청소. 습식 대형공간의 물때와 바닥 오염을 구역별로 관리합니다.",
    keywords: ["수영장청소", "습식공간청소", "물때청소", "종합청소"],
    scope: ["바닥 물때 관리", "배수구 주변 정리", "공용부 청소", "작업 동선 안전 확인"],
    recommendedFor: ["수영장", "스파", "사우나", "공용 샤워시설"],
  },
  {
    slug: "move-in",
    category: "home",
    title: "입주청소",
    shortTitle: "입주",
    eyebrow: "새 공간 입주 전",
    summary: "입주 전 보이지 않는 먼지, 창틀, 수납장, 욕실 오염을 정리합니다.",
    description:
      "입주청소는 새 공간을 쓰기 전에 기본 상태를 만드는 작업입니다. 창틀, 수납장, 욕실, 주방, 바닥을 꼼꼼히 확인합니다.",
    image: "/images/cases/home-move-in.webp",
    imageAlt: "입주청소 후 정돈된 주거공간",
    seoTitle: "파주·일산 입주청소 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 입주청소. 새집 입주 전 창틀, 수납장, 욕실, 주방, 바닥 오염을 정리합니다.",
    keywords: ["입주청소", "새집청소", "홈클리닝", "파주 입주청소"],
    scope: ["창틀 및 수납장 청소", "욕실 물때 정리", "주방 오염 확인", "바닥 먼지 제거"],
    recommendedFor: ["신축 입주", "리모델링 후", "공실 입주 전", "새집증후군이 걱정되는 공간"],
  },
  {
    slug: "move-out",
    category: "home",
    title: "이사청소",
    shortTitle: "이사",
    eyebrow: "이사 전후 정리",
    summary: "이사 일정에 맞춰 집 전체 오염을 정리하고 바로 생활 가능한 상태를 만듭니다.",
    description:
      "이사청소는 짧은 일정 안에서 넓은 범위를 정리해야 합니다. 공간별 오염 상태를 확인하고 주방, 욕실, 창틀, 바닥을 중심으로 진행합니다.",
    image: "/images/cases/home-move.webp",
    imageAlt: "이사청소 후 정리된 주거공간",
    seoTitle: "파주·일산 이사청소 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 이사청소. 이사 전후 주방, 욕실, 창틀, 바닥 오염을 일정에 맞춰 정리합니다.",
    keywords: ["이사청소", "홈클리닝", "주거청소", "일산 이사청소"],
    scope: ["주방 기름때 확인", "욕실 물때 정리", "창틀 먼지 제거", "바닥 전체 청소"],
    recommendedFor: ["아파트", "빌라", "오피스텔", "주택"],
  },
  {
    slug: "aircon",
    category: "home",
    title: "에어컨청소",
    shortTitle: "에어컨",
    eyebrow: "분해 세척",
    summary: "곰팡이와 냄새가 생기기 쉬운 에어컨 내부를 분해 가능한 범위에서 세척합니다.",
    description:
      "에어컨청소는 냄새와 곰팡이를 줄이고 사용 전 위생 상태를 확인하는 작업입니다. 부품 상태와 설치 환경을 보고 분해 범위를 정합니다.",
    image: "/images/cases/home-aircon-after.webp",
    imageAlt: "세척 후 정리된 에어컨 내부 부품",
    seoTitle: "파주·일산 에어컨청소 | 시티클린",
    seoDescription:
      "파주, 일산, 고양 에어컨청소. 곰팡이, 냄새, 먼지가 쌓인 에어컨 내부를 분해 가능한 범위에서 세척합니다.",
    keywords: ["에어컨청소", "일산 에어컨청소", "파주 에어컨청소", "곰팡이청소"],
    scope: ["외관 및 필터 확인", "분해 가능 범위 세척", "곰팡이·먼지 제거", "조립 후 작동 확인"],
    recommendedFor: ["벽걸이 에어컨", "스탠드 에어컨", "매장 에어컨", "여름 사용 전 점검"],
    beforeAfter: {
      before: "/images/cases/home-aircon-before.webp",
      after: "/images/cases/home-aircon-after.webp",
      beforeAlt: "청소 전 오염된 에어컨 내부 부품",
      afterAlt: "청소 후 정리된 에어컨 내부 부품",
    },
  },
];

export const areas: Area[] = [
  {
    slug: "paju",
    title: "파주",
    headline: "파주 정기청소와 건물 공용부 관리",
    description:
      "운정, 금촌, 야당, 문산 등 파주권 건물과 사무실의 정기청소를 방문견적 후 주기별로 설계합니다.",
    seoTitle: "파주 정기청소·사무실청소 업체 | 시티클린",
    seoDescription:
      "파주 정기청소 업체 시티클린. 운정, 금촌, 야당, 문산 건물, 사무실, 계단, 화장실 청소를 관리합니다.",
    keywords: ["파주 정기청소", "파주 정기청소업체", "파주 사무실청소", "파주 계단청소"],
    districts: ["운정", "금촌", "야당", "문산", "교하", "탄현"],
    placeUrl: siteConfig.naverPlaceUrl,
    primaryServiceSlugs: ["office", "stairs", "restroom", "building", "aircon"],
  },
  {
    slug: "ilsan",
    title: "일산",
    headline: "일산 정기청소 검색에 맞춘 전문 관리",
    description:
      "정발산, 마두, 백석, 대화, 주엽 등 일산권 사무실과 상가, 건물 공용부를 정기적으로 관리합니다.",
    seoTitle: "일산 정기청소·사무실청소 업체 | 시티클린",
    seoDescription:
      "일산 정기청소 업체 시티클린. 사무실, 상가, 계단, 화장실, 에어컨청소를 방문견적 후 관리합니다.",
    keywords: ["일산 정기청소", "일산 정기청소업체", "일산 사무실청소", "일산 에어컨청소"],
    districts: ["정발산", "마두", "백석", "대화", "주엽", "식사"],
    placeUrl: "/contact#quick-contact",
    primaryServiceSlugs: ["office", "stairs", "restroom", "aircon", "window"],
  },
  {
    slug: "goyang",
    title: "고양",
    headline: "고양 사무실청소와 상가 정기관리",
    description:
      "덕양, 화정, 행신, 삼송, 원흥 등 고양권 업무공간과 상가의 정기청소를 안정적으로 관리합니다.",
    seoTitle: "고양 정기청소·사무실청소 업체 | 시티클린",
    seoDescription:
      "고양 정기청소 업체 시티클린. 사무실청소, 상가청소, 계단청소, 화장실청소, 건물청소를 관리합니다.",
    keywords: ["고양 정기청소", "고양 사무실청소", "고양 상가청소", "고양 화장실청소"],
    districts: ["덕양", "화정", "행신", "삼송", "원흥", "능곡"],
    placeUrl: siteConfig.naverPlaceUrl,
    primaryServiceSlugs: ["office", "building", "restroom", "church", "deep"],
  },
];

export const articles: ArticleMeta[] = [
  {
    slug: "regular-cleaning-cycle",
    title: "정기청소 주기는 어떻게 정하면 좋을까요?",
    description:
      "주 1회부터 주 7회까지 정기청소 주기를 정할 때 봐야 하는 공간 이용량, 오염 속도, 예산 기준을 정리했습니다.",
    category: "정기청소",
    date: "2026-06-22",
    readTime: "4분",
    relatedServiceSlugs: ["office", "stairs", "restroom"],
  },
  {
    slug: "office-cleaning-checklist",
    title: "일산·파주 사무실 정기청소 체크리스트",
    description:
      "사무실 정기청소를 맡기기 전 확인해야 할 바닥, 탕비실, 화장실, 회의실 관리 항목입니다.",
    category: "사무실청소",
    date: "2026-06-22",
    readTime: "3분",
    relatedServiceSlugs: ["office", "restroom"],
  },
  {
    slug: "stairs-cleaning-signs",
    title: "계단청소가 필요한 건물의 신호",
    description:
      "빌라와 상가 건물에서 계단청소 주기를 앞당겨야 하는 대표적인 오염 신호를 정리했습니다.",
    category: "계단청소",
    date: "2026-06-22",
    readTime: "3분",
    relatedServiceSlugs: ["stairs", "building"],
  },
  {
    slug: "restroom-odor-care",
    title: "화장실 악취를 줄이려면 어디를 봐야 할까요?",
    description:
      "상가와 사무실 화장실에서 냄새가 반복될 때 확인해야 할 배수구, 바닥, 환기, 소모품 관리 기준입니다.",
    category: "화장실청소",
    date: "2026-06-22",
    readTime: "4분",
    relatedServiceSlugs: ["restroom", "shower"],
  },
  {
    slug: "aircon-cleaning-season",
    title: "에어컨청소 시기와 곰팡이 관리 기준",
    description:
      "에어컨을 켰을 때 냄새가 나거나 검은 점이 보일 때, 청소 시기와 점검 포인트를 안내합니다.",
    category: "에어컨청소",
    date: "2026-06-22",
    readTime: "3분",
    relatedServiceSlugs: ["aircon"],
  },
];

export function getServiceGroup(category: ServiceCategoryKey) {
  return serviceGroups.find((group) => group.key === category);
}

export function getServicesByCategory(category: ServiceCategoryKey) {
  return services.filter((service) => service.category === category);
}

export function getService(category: ServiceCategoryKey, slug: string) {
  return services.find((service) => service.category === category && service.slug === slug);
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function servicePath(service: Pick<Service, "category" | "slug">) {
  if (service.category === "regular") {
    return `/regular-cleaning/${service.slug}`;
  }

  if (service.category === "total") {
    return `/total-cleaning/${service.slug}`;
  }

  return `/home-cleaning/${service.slug}`;
}
