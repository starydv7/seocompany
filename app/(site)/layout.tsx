import type { ReactNode } from "react";
import LuxPage from "@/components/lux/LuxPage";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <LuxPage>{children}</LuxPage>;
}
