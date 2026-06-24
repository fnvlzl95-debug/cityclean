"use client";

import { useEffect, useRef, useState } from "react";
import { AboutSection } from "@/components/metro/AboutSection";
import { BeforeAfterSection } from "@/components/metro/BeforeAfterSection";
import { ArrivalSection, ContactCard } from "@/components/metro/ContactSection";
import { Hero } from "@/components/metro/Hero";
import { MetroFooter } from "@/components/metro/MetroFooter";
import { MetroHeader } from "@/components/metro/MetroHeader";
import { MetroRoute, type MetroStation } from "@/components/metro/MetroRoute";
import { PricingSection } from "@/components/metro/PricingSection";
import { ReviewsSection } from "@/components/metro/ReviewsSection";
import { ServicesSection } from "@/components/metro/ServicesSection";

// The subway "board" (with its line) is a fixed 1055px canvas. It is centred
// on wide screens and only ever scaled DOWN to fit narrower viewports — never
// enlarged — so the page never grows abnormally tall. The header and footer
// are normal full-width bars outside the canvas.
const BOARD_W = 1055;

const LINE_COLORS: Record<string, string> = {
  blue: "#0754c9",
  green: "#159447",
  orange: "#ff5a00",
  purple: "#8b2bd0",
  gray: "#747b85",
};

export function HomeMetro() {
  const scaleRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [boxH, setBoxH] = useState<number | undefined>(undefined);
  const [stations, setStations] = useState<MetroStation[]>([]);
  const [routeH, setRouteH] = useState(0);

  useEffect(() => {
    const box = scaleRef.current;
    const wrap = wrapRef.current;
    if (!box || !wrap) return;

    const measure = () => {
      const s = Math.min(1, box.clientWidth / BOARD_W);
      const h = wrap.offsetHeight;
      setScale(s);
      setRouteH(h);
      setBoxH(h * s);

      const wrapRect = wrap.getBoundingClientRect();
      const found: MetroStation[] = [];
      wrap.querySelectorAll<HTMLElement>("[data-station-no]").forEach((el) => {
        const r = el.getBoundingClientRect();
        found.push({
          no: Number(el.dataset.stationNo),
          color: LINE_COLORS[el.dataset.stationColor ?? "blue"] ?? LINE_COLORS.blue,
          x: (r.left + r.width / 2 - wrapRect.left) / s,
          y: (r.top + r.height / 2 - wrapRect.top) / s,
        });
      });
      found.sort((a, b) => a.no - b.no);
      setStations(found);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    ro.observe(wrap);
    const settle = window.setTimeout(measure, 500);
    window.addEventListener("load", measure);
    return () => {
      ro.disconnect();
      window.clearTimeout(settle);
      window.removeEventListener("load", measure);
    };
  }, []);

  return (
    <div className="metro-home" style={{ ["--metro-scale" as string]: scale }}>
      <MetroHeader />
      <div className="metro-board-scale" ref={scaleRef} style={{ height: boxH ? `${boxH}px` : undefined }}>
        <div className="metro-board-wrap" ref={wrapRef}>
          <MetroRoute height={routeH} stations={stations} width={BOARD_W} />
          <main className="metro-board">
            <Hero />
            <ServicesSection />
            <PricingSection />
            <BeforeAfterSection />
            <div className="metro-row metro-row--rc">
              <ReviewsSection />
              <ContactCard />
            </div>
            <div className="metro-row metro-row--aa">
              <AboutSection />
              <ArrivalSection />
            </div>
          </main>
        </div>
      </div>
      <MetroFooter />
    </div>
  );
}
