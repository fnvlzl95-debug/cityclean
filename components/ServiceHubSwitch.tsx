"use client";

import { useDesignVariant } from "@/components/DesignVariant";
import { ServiceHub } from "@/components/ServiceHub";
import { ServiceHubV2 } from "@/components/ServiceHubV2";
import type { ServiceCategoryKey } from "@/lib/data";

export function ServiceHubSwitch({ category }: { category: ServiceCategoryKey }) {
  const { variant } = useDesignVariant();
  return variant === "v2" ? (
    <ServiceHubV2 category={category} />
  ) : (
    <ServiceHub category={category} />
  );
}
