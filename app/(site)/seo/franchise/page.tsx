import type { Metadata } from "next";
import FranchiseSeoLanding from "@/components/seo/FranchiseSeoLanding";

export const metadata: Metadata = {
  title: "Franchise SEO Services | BrandMarketing",
  description:
    "Franchise SEO for multi-location growth—location pages, GBP optimization, technical SEO, and scalable systems that improve local visibility across every branch.",
};

export default function FranchiseSeoPage() {
  return <FranchiseSeoLanding />;
}
