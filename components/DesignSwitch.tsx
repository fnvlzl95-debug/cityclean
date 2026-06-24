"use client";

import { useDesignVariant } from "@/components/DesignVariant";

const options = [
  { value: "v1", label: "시안 1", title: "시안 1 · 시티클린 기본 디자인" },
  { value: "v2", label: "시안 2", title: "시안 2 · Claude 에디토리얼 디자인" },
  { value: "v3", label: "시안 3", title: "시안 3 · 지하철 노선도 디자인" },
  { value: "v4", label: "시안 4", title: "시안 4 · 마스코트 캐릭터 디자인" },
  { value: "v5", label: "시안 5", title: "시안 5 · 프리미엄 기업형 디자인 (파주)" },
  { value: "v6", label: "시안 6", title: "시안 6 · 정제된 프리미엄 에디토리얼 디자인" },
] as const;

export function DesignSwitch() {
  const { variant, setVariant } = useDesignVariant();

  return (
    <div aria-label="디자인 시안 선택" className="dswitch" role="group">
      <span aria-hidden="true" className="dswitch__tag">
        시안
      </span>
      <div className="dswitch__track" data-active={variant}>
        <span aria-hidden="true" className="dswitch__thumb" />
        {options.map((option) => (
          <button
            aria-pressed={variant === option.value}
            className="dswitch__btn"
            data-active={variant === option.value}
            key={option.value}
            onClick={() => setVariant(option.value)}
            title={option.title}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
