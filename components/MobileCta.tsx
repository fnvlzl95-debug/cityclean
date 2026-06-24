import { ChatCircleText, PhoneCall } from "@phosphor-icons/react/ssr";
import { siteConfig } from "@/lib/data";

export function MobileCta() {
  return (
    <div className="mobile-cta fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.15] bg-[rgba(17,29,21,0.96)] p-3 text-white shadow-2xl backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          className="flex min-h-12 items-center justify-center gap-2 rounded-none bg-white text-sm font-bold text-[var(--ink)]"
          href={siteConfig.telHref}
        >
          <PhoneCall aria-hidden="true" size={17} weight="duotone" />
          전화 상담
        </a>
        <a
          className="flex min-h-12 items-center justify-center gap-2 rounded-none bg-[var(--accent)] text-sm font-bold text-white"
          href={siteConfig.kakaoUrl}
        >
          <ChatCircleText aria-hidden="true" size={17} weight="duotone" />
          카카오 문의
        </a>
      </div>
    </div>
  );
}
