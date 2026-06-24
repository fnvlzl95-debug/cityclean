import type { Metadata, Viewport } from "next";
import { DesignVariantProvider } from "@/components/DesignVariant";
import { MobileCta } from "@/components/MobileCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "시티클린 | 파주·일산·고양 정기청소 전문",
    template: "%s",
  },
  description: siteConfig.description,
  keywords: [
    "시티클린",
    "파주 정기청소",
    "일산 정기청소",
    "고양 정기청소",
    "사무실청소",
    "계단청소",
    "에어컨청소",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "시티클린 | 파주·일산·고양 정기청소 전문",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "시티클린 정기청소 현장",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c241b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link href="https://cdn.jsdelivr.net" rel="preconnect" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/variable/pretendard-variable.css"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        {/* Korean serif for the "Claude" design variant. Loaded in the root
            layout (applies to every route), so the per-page-font rule is moot. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Black+Han+Sans&family=Gowun+Batang:wght@400;700&family=Jua&family=Nanum+Pen+Script&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DesignVariantProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileCta />
        </DesignVariantProvider>
      </body>
    </html>
  );
}
