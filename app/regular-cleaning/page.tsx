import type { Metadata } from "next";
import { ServiceHubSwitch } from "@/components/ServiceHubSwitch";
import { getServiceGroup } from "@/lib/data";

const group = getServiceGroup("regular");

export const metadata: Metadata = {
  title: group?.seoTitle,
  description: group?.seoDescription,
  alternates: {
    canonical: "/regular-cleaning",
  },
};

export default function RegularCleaningPage() {
  return <ServiceHubSwitch category="regular" />;
}
