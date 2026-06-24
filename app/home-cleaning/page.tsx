import type { Metadata } from "next";
import { ServiceHubSwitch } from "@/components/ServiceHubSwitch";
import { getServiceGroup } from "@/lib/data";

const group = getServiceGroup("home");

export const metadata: Metadata = {
  title: group?.seoTitle,
  description: group?.seoDescription,
  alternates: {
    canonical: "/home-cleaning",
  },
};

export default function HomeCleaningPage() {
  return <ServiceHubSwitch category="home" />;
}
