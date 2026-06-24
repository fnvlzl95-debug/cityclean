"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, List, PhoneCall, X } from "@phosphor-icons/react/ssr";
import { BrandMark } from "@/components/BrandMark";
import { DesignSwitch } from "@/components/DesignSwitch";
import {
  areas,
  getServicesByCategory,
  serviceGroups,
  servicePath,
  siteConfig,
} from "@/lib/data";

const topLinks = [
  { label: "홈", href: "/", match: ["/"] },
  { label: "회사소개", href: "/about", match: ["/about"] },
  { label: "서비스", href: "/regular-cleaning", match: ["/regular-cleaning", "/total-cleaning", "/home-cleaning"] },
  { label: "청소상식", href: "/cleaning-tips", match: ["/cleaning-tips"] },
  { label: "문의", href: "/contact", match: ["/contact"] },
];

const overlayLinks = [
  { no: "01", label: "정기청소", href: "/regular-cleaning" },
  { no: "02", label: "종합청소", href: "/total-cleaning/window" },
  { no: "03", label: "홈클리닝", href: "/home-cleaning/aircon" },
  { no: "04", label: "회사소개", href: "/about" },
  { no: "05", label: "청소상식", href: "/cleaning-tips" },
  { no: "06", label: "문의하기", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="topbar" data-scrolled={scrolled}>
        <div className="topbar__pill">
          <BrandMark />

          <nav aria-label="주요 메뉴" className="topnav">
            {topLinks.map((link) => (
              <Link
                data-active={
                  link.href === "/"
                    ? pathname === "/"
                    : link.match.some((match) => pathname.startsWith(match))
                }
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="topbar__right">
            <DesignSwitch />
            <a className="pill-phone" href={siteConfig.telHref}>
              <PhoneCall aria-hidden="true" size={16} weight="fill" />
              <span className="label">견적 문의</span>
            </a>
            <button
              aria-expanded={open}
              aria-label="전체 메뉴 열기"
              className="menu-btn"
              onClick={() => setOpen(true)}
              type="button"
            >
              메뉴
              <span>
                <List aria-hidden="true" size={16} weight="bold" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div aria-hidden={!open} className="overlay" data-open={open}>
        <div className="overlay__scrim" />
        <div className="overlay__inner">
          <div className="overlay__top">
            <BrandMark invert />
            <button className="overlay__close" onClick={() => setOpen(false)} type="button">
              닫기
              <span>
                <X aria-hidden="true" size={16} weight="bold" />
              </span>
            </button>
          </div>

          <div className="overlay__grid">
            <nav aria-label="전체 메뉴" className="overlay__primary">
              {overlayLinks.map((link) => (
                <Link className="overlay__link" href={link.href} key={link.href} onClick={() => setOpen(false)}>
                  <i>{link.no}</i>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="overlay__side">
              {serviceGroups.map((group) => (
                <div className="overlay__group" key={group.key}>
                  <p>{group.title}</p>
                  <div className="overlay__chips">
                    {getServicesByCategory(group.key)
                      .slice(0, 6)
                      .map((service) => (
                        <Link
                          className="overlay__chip"
                          href={servicePath(service)}
                          key={service.slug}
                          onClick={() => setOpen(false)}
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
              <div className="overlay__group">
                <p>상담 지역</p>
                <div className="overlay__chips">
                  {areas.map((area) => (
                    <Link
                      className="overlay__chip"
                      href={`/areas/${area.slug}`}
                      key={area.slug}
                      onClick={() => setOpen(false)}
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              </div>
              <a className="overlay__call" href={siteConfig.telHref}>
                <PhoneCall aria-hidden="true" size={22} weight="fill" />
                {siteConfig.phone}
                <ArrowUpRight aria-hidden="true" size={18} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
