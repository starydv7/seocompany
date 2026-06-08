import type { Metadata } from "next";
import EnterpriseDmLanding from "@/components/digital-marketing/EnterpriseDmLanding";

export const metadata: Metadata = {
  title: "Enterprise Digital Marketing Services | BrandMarketing",
  description:
    "Enterprise digital marketing services for scalable business growth—data-driven strategies, global performance, and measurable revenue across SEO, PPC, and full-funnel channels.",
};

export default function EnterpriseDigitalMarketingPage() {
  return <EnterpriseDmLanding />;
}
