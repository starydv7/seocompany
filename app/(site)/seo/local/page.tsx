import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import LocalSeoLanding from "@/components/seo/LocalSeoLanding";

export const metadata: Metadata = pageMetadata("/seo/local");

export default function LocalSeoPage() {
  return (
    <>
      <PageJsonLd path="/seo/local" />
      <LocalSeoLanding />
    </>
  );
}
