"use client";

import { AboutV1 } from "@/components/AboutV1";
import { AboutV2 } from "@/components/AboutV2";
import { useDesignVariant } from "@/components/DesignVariant";

export function AboutSwitch() {
  const { variant } = useDesignVariant();
  return variant === "v2" ? <AboutV2 /> : <AboutV1 />;
}
