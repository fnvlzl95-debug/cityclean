import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70svh] place-items-center px-4 py-20 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.03em] text-[var(--ink)]">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-5 text-[var(--muted)]">
          요청한 주소가 바뀌었거나 아직 준비되지 않은 페이지입니다.
        </p>
        <Link
          className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-none bg-[var(--ink)] px-6 text-sm font-black text-white transition hover:-translate-y-0.5"
          href="/"
        >
          홈으로 이동
        </Link>
      </div>
    </main>
  );
}
