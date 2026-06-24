import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  external?: boolean;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: LinkButtonProps) {
  const classes = [
    "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-none px-6 text-sm font-black transition duration-300 hover:-translate-y-0.5 active:translate-y-px",
    variant === "primary" &&
      "bg-[var(--accent)] text-white hover:shadow-[var(--shadow-brand)]",
    variant === "secondary" &&
      "border border-[var(--line-strong)] bg-white text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    variant === "dark" &&
      "bg-[var(--ink)] text-white hover:bg-[var(--ink-2)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {children}
        <ArrowRight aria-hidden="true" size={16} weight="bold" />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <ArrowRight aria-hidden="true" size={16} weight="bold" />
    </Link>
  );
}
