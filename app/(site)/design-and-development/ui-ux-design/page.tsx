import type { Metadata } from "next";
import UiuxDevLanding from "@/components/design-and-development/UiuxDevLanding";

export const metadata: Metadata = {
  title: "UI/UX Design Services | BrandMarketing",
  description:
    "User-centered UI/UX design from research to high-fidelity prototypes that delight users and drive engagement.",
};

export default function UiUxDesignPage() {
  return <UiuxDevLanding />;
}
