import Link from "next/link";

type BrandMarkProps = {
  invert?: boolean;
};

export function BrandMark({ invert = false }: BrandMarkProps) {
  return (
    <Link aria-label="시티클린 홈" className="flex items-center gap-2.5" href="/">
      <span
        className={
          invert
            ? "grid size-9 place-items-center rounded-none border border-white/25 bg-white text-sm font-black text-[var(--ink)]"
            : "brand-sigil"
        }
      >
        시티
      </span>
      <strong
        className={
          invert
            ? "text-lg font-black tracking-tight text-white"
            : "text-[1.15rem] font-black tracking-tight text-[var(--ink)]"
        }
      >
        시티클린
      </strong>
    </Link>
  );
}
