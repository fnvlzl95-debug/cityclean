"use client";

import Image from "@/components/BasePathImage";
import { useState } from "react";
import { ArrowsLeftRight } from "@phosphor-icons/react/ssr";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
};

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  label = "작업 전후 비교",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(52);

  return (
    <div className="before-after" aria-label={label}>
      <Image
        alt={afterAlt}
        className="h-full w-full object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        src={after}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
        <Image
          alt={beforeAlt}
          className="h-full w-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          src={before}
        />
      </div>
      <div className="absolute inset-y-0" style={{ left: `${value}%` }}>
        <div className="h-full w-px bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.18)]" />
        <div className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-none bg-white text-xs font-bold text-[var(--ink)] shadow-xl">
          <ArrowsLeftRight aria-hidden="true" size={18} weight="bold" />
        </div>
      </div>
      <div className="absolute left-4 top-4 rounded-none bg-[rgba(17,29,21,0.82)] px-3 py-1 text-xs font-semibold text-white">
        작업 전
      </div>
      <div className="absolute right-4 top-4 rounded-none bg-white/[0.85] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
        작업 후
      </div>
      <input
        aria-label={label}
        className="absolute inset-x-4 bottom-4 accent-[var(--accent)]"
        max="82"
        min="18"
        onChange={(event) => setValue(Number(event.target.value))}
        type="range"
        value={value}
      />
    </div>
  );
}
