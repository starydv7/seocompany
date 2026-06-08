import type { Metadata } from "next";
import AiSeoLanding from "@/components/seo/AiSeoLanding";

export const metadata: Metadata = {
  title: "AI SEO Services | BrandMarketing",
  description:
    "AI SEO services for visibility in ChatGPT, Google AI Overviews, Gemini, Perplexity, and generative search—become the source AI engines trust and recommend.",
};

export default function AiSeoPage() {
  return <AiSeoLanding />;
}
