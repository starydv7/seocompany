import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import AiSeoLanding from "@/components/seo/AiSeoLanding";

export const metadata: Metadata = pageMetadata("/seo/ai");

export default function AiSeoPage() {
  return (
    <>
      <PageJsonLd path="/seo/ai" />
      <AiSeoLanding />
    </>
  );
}
