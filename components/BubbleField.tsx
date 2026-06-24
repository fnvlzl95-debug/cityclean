"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

type BubbleFieldProps = {
  id?: string;
  className?: string;
  density?: number;
  tone?: "light" | "dark";
};

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

/**
 * Interactive soap-bubble field (tsParticles). Self-contained: it carries its
 * own ParticlesProvider so it can be loaded as a client-only island
 * (dynamic ssr:false) without suppressing the page's server rendering.
 * Bubbles drift upward, grow on hover, and scatter on click.
 */
export function BubbleField({ id = "bubbles", className, density = 42, tone = "light" }: BubbleFieldProps) {
  const options = useMemo<ISourceOptions>(() => {
    const colors =
      tone === "dark"
        ? ["#ffffff", "#7fe9d8", "#bdfca6"]
        : ["#ffffff", "#9fe7ee", "#bff0d4"];
    return {
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
      particles: {
        number: { value: density, density: { enable: true, width: 900, height: 900 } },
        color: { value: colors },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.06, max: 0.34 },
          animation: { enable: true, speed: 0.5, sync: false },
        },
        size: { value: { min: 3, max: 26 } },
        stroke: { width: 1, color: { value: "rgba(255,255,255,0.55)" } },
        move: {
          enable: true,
          direction: "top",
          random: true,
          straight: false,
          speed: { min: 0.3, max: 1.4 },
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true },
        },
        modes: {
          bubble: { distance: 170, size: 38, duration: 2, opacity: 0.75 },
          push: { quantity: 4 },
        },
      },
    };
  }, [density, tone]);

  return (
    <ParticlesProvider init={init}>
      <Particles id={id} className={className} options={options} />
    </ParticlesProvider>
  );
}
