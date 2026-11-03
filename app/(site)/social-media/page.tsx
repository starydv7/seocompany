import type { Metadata } from "next";
import PageJsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import SocialMediaLanding from "@/components/social-media/SocialMediaLanding";

export const metadata: Metadata = pageMetadata("/social-media");

export default function SocialMediaPage() {
  return (
    <>
      <PageJsonLd path="/social-media" />
      <SocialMediaLanding />
    </>
  );
}
