import type { Metadata } from "next";
import BusinessSolutionsLanding from "@/components/design-and-development/BusinessSolutionsLanding";

export const metadata: Metadata = {
  title: "Business Solutions | BrandMarketing",
  description:
    "Tailored digital business solutions that streamline operations, enhance customer experiences, and drive organizational efficiency.",
};

export default function BusinessSolutionsPage() {
  return <BusinessSolutionsLanding />;
}
