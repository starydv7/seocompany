import type { Metadata } from "next";
import LocalSeoLanding from "@/components/seo/LocalSeoLanding";

export const metadata: Metadata = {
  title: "Local SEO Services | BrandMarketing",
  description:
    "Local SEO services that drive calls, traffic, and real local customers—Google Maps visibility, GBP optimization, and qualified leads from nearby searchers.",
};

export default function LocalSeoPage() {
  return <LocalSeoLanding />;
}
