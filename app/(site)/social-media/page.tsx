import type { Metadata } from "next";
import EliteMarketingPage from "@/components/marketing/elite/EliteMarketingPage";
import PageJsonLd from "@/components/seo/JsonLd";
import { SOCIAL_MEDIA_PAGE } from "@/lib/marketing/pages/services-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/social-media");

export default function SocialMediaPage() {
  return (
    <>
      <PageJsonLd path="/social-media" faqs={SOCIAL_MEDIA_PAGE.faqs} />
      <EliteMarketingPage page={SOCIAL_MEDIA_PAGE} />
    </>
  );
}
