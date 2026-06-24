import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { areas, getServicesByCategory, servicePath, siteConfig } from "@/lib/data";

export function SiteFooter() {
  const regular = getServicesByCategory("regular").slice(0, 5);

  return (
    <footer className="bg-[var(--ink)] px-4 pb-28 pt-14 text-white md:px-8 md:pb-14">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 border-t border-white/[0.16] pt-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <BrandMark invert />
            <p className="mt-6 max-w-md text-sm leading-7 text-white/[0.62]">
              파주·일산·고양 정기청소, 종합청소, 홈클리닝을 현장 기준으로 관리합니다.
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/[0.46]">
              서비스
            </p>
            <div className="mt-4 grid gap-2">
              {regular.map((service) => (
                <Link
                  className="text-sm font-bold text-white/[0.76] transition hover:text-white"
                  href={servicePath(service)}
                  key={service.slug}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/[0.46]">
              문의
            </p>
            <div className="mt-4 grid gap-2 text-sm font-bold text-white/[0.76]">
              <a href={siteConfig.telHref}>{siteConfig.phone}</a>
              <Link href="/contact">문의하기</Link>
              <div className="flex flex-wrap gap-2 pt-2">
                {areas.map((area) => (
                  <Link
                    className="rounded-none border border-white/[0.18] px-3 py-1 text-xs"
                    href={`/areas/${area.slug}`}
                    key={area.slug}
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/[0.12] pt-5 text-xs font-bold text-white/[0.38]">
          © 시티클린. 파주·일산·고양 청소 전문.
        </div>
      </div>
    </footer>
  );
}
