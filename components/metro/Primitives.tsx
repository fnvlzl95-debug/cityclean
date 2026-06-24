import Image from "@/components/BasePathImage";
import Link from "next/link";
import type { ReactNode } from "react";
import { Star } from "@phosphor-icons/react/ssr";
import type { MetroColor } from "@/components/metro/types";

export function MetroLogo({ invert = false }: { invert?: boolean }) {
  return (
    <Link aria-label="시티클린 홈" className="metro-logo" data-invert={invert} href="/">
      <Image
        alt="시티클린 CITY CLEAN"
        height={86}
        priority={!invert}
        src={invert ? "/images/generated/city-clean-logo-white.svg" : "/images/generated/city-clean-logo.svg"}
        width={274}
      />
    </Link>
  );
}

export function SectionHeading({
  color,
  en,
  line,
  title,
}: {
  color: Extract<MetroColor, "blue" | "green" | "purple" | "gray">;
  en: string;
  line: string;
  title: string;
}) {
  return (
    <div className="metro-section-label" data-color={color}>
      <span>{line}</span>
      <strong>{title}</strong>
      <em>{en}</em>
    </div>
  );
}

export function StationBadge({
  children,
  className = "",
  color = "blue",
  no,
}: {
  children?: ReactNode;
  className?: string;
  color?: MetroColor;
  no: string;
}) {
  return (
    <span
      className={`metro-station ${className}`}
      data-color={color}
      data-station-color={color}
      data-station-no={no}
    >
      <span>{no}</span>
      {children}
    </span>
  );
}

export function MetroTrain({ className = "" }: { className?: string }) {
  return (
    <Image
      alt="시티클린 로고가 들어간 지하철 차량"
      className={`metro-train-img ${className}`}
      height={144}
      priority
      src="/images/generated/cityclean-train.png"
      width={540}
    />
  );
}

export function CityBackdrop() {
  return (
    <svg aria-hidden="true" className="metro-city" viewBox="0 0 420 210">
      <path className="metro-city__hill" d="M0 178 C70 128 124 152 178 116 C240 74 292 122 420 74 V210 H0 Z" />
      <path className="metro-city__tower" d="M66 178 V58 M48 58 H84 M58 42 H74 M65 18 H67 M55 178 H78" />
      <rect className="metro-city__building" height="88" width="36" x="104" y="90" />
      <rect className="metro-city__building" height="118" width="50" x="154" y="60" />
      <rect className="metro-city__building" height="74" width="44" x="224" y="104" />
      <rect className="metro-city__building" height="126" width="56" x="294" y="52" />
      <path className="metro-city__tree" d="M372 178 V136 M350 154 C350 134 362 122 376 122 C392 122 402 136 402 154 C402 172 392 180 376 180 C360 180 350 172 350 154Z" />
    </svg>
  );
}

export function StarRating() {
  return (
    <span aria-label="별점 5점" className="metro-stars">
      {[0, 1, 2, 3, 4].map((star) => (
        <Star aria-hidden="true" key={star} size={14} weight="fill" />
      ))}
    </span>
  );
}
