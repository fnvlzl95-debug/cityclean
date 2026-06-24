import type { Metadata } from "next";
import { ServiceHubSwitch } from "@/components/ServiceHubSwitch";
import { getServiceGroup } from "@/lib/data";

const group = getServiceGroup("total");

export const metadata: Metadata = {
  title: group?.seoTitle,
  description: group?.seoDescription,
  alternates: {
    canonical: "/total-cleaning",
  },
};

export default function TotalCleaningPage() {
  return <ServiceHubSwitch category="total" />;
}
