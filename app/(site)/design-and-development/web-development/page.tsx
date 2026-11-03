import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { webDevFaq } from "@/lib/design-and-development/web-dev-content";
import WebDevLanding from "@/components/design-and-development/WebDevLanding";

export const metadata: Metadata = pageMetadata("/design-and-development/web-development");

export default function WebDevelopmentPage() {
  return (
    <>
      <PageJsonLd path="/design-and-development/web-development" faqs={[...webDevFaq.items]} />
      <WebDevLanding />
    </>
  );
}
