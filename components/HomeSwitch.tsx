"use client";

import { useDesignVariant } from "@/components/DesignVariant";
import { HomeExperience } from "@/components/HomeExperience";
import { HomeExperienceV2 } from "@/components/HomeExperienceV2";
import { HomeMetro } from "@/components/HomeMetro";
import { HomePro } from "@/components/HomePro";
import { HomeSeven } from "@/components/HomeSeven";
import { HomeV4 } from "@/components/HomeV4";

export function HomeSwitch() {
  const { variant } = useDesignVariant();
  if (variant === "v1") {
    return <HomeExperience />;
  }

  if (variant === "v2") {
    return <HomeExperienceV2 />;
  }

  if (variant === "v4") {
    return <HomeV4 />;
  }

  if (variant === "v5") {
    return <HomePro />;
  }

  if (variant === "v6") {
    return <HomeSeven />;
  }

  return <HomeMetro />;
}
