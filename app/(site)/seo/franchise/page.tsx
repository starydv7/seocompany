import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import FranchiseSeoLanding from "@/components/seo/FranchiseSeoLanding";

export const metadata: Metadata = pageMetadata("/seo/franchise");

export default function FranchiseSeoPage() {
  return (
    <>
      <PageJsonLd path="/seo/franchise" />
      <FranchiseSeoLanding />
    </>
  );
}
