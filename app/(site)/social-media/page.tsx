import type { Metadata } from "next";
import SocialMediaLanding from "@/components/social-media/SocialMediaLanding";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | BrandMarketing",
  description:
    "Social media marketing that builds brands, drives real engagement, and delivers measurable results across every major platform.",
};

export default function SocialMediaPage() {
  return <SocialMediaLanding />;
}
