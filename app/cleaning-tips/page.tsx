import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "청소상식 | 시티클린",
  description:
    "정기청소 주기, 사무실청소 체크리스트, 계단청소, 화장실 악취 관리, 에어컨청소 시기를 정리한 시티클린 청소상식입니다.",
  alternates: {
    canonical: "/cleaning-tips",
  },
};

export default function CleaningTipsPage() {
  return (
    <main>
      <PageHero
        description="현장에서 자주 묻는 정기청소, 사무실청소, 계단청소, 에어컨청소 기준을 짧고 구체적으로 정리합니다."
        eyebrow="청소 상식"
        image="/images/cases/regular-office.webp"
        imageAlt="정돈된 사무실 청소 현장"
        title="청소상식"
      />
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1080px] divide-y divide-[var(--line)]">
          {articles.map((article) => (
            <Link
              className="group grid gap-6 py-8 md:grid-cols-[0.35fr_1fr_auto]"
              href={`/cleaning-tips/${article.slug}`}
              key={article.slug}
            >
              <div>
                <p className="text-sm font-black text-[var(--accent)]">{article.category}</p>
                <p className="mt-2 text-xs font-bold text-[var(--muted)]">
                  {article.date} · {article.readTime}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[var(--ink)]">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {article.description}
                </p>
              </div>
              <span className="grid size-11 place-items-center rounded-none border border-[var(--line)] transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                <ArrowUpRight aria-hidden="true" size={18} weight="bold" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
