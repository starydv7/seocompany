import SoftwareDevWebSection from "@/components/design-and-development/SoftwareDevWebSection";
import WebDevApproachSection from "@/components/design-and-development/WebDevApproachSection";
import WebDevFaqSection from "@/components/design-and-development/WebDevFaqSection";
import WebDevFinalCta from "@/components/design-and-development/WebDevFinalCta";
import WebDevSolutionsSection from "@/components/design-and-development/WebDevSolutionsSection";
import WebDevTechIndustriesSection from "@/components/design-and-development/WebDevTechIndustriesSection";
import { EliteHireBand, EliteRelated, EliteTicker } from "@/components/design-and-development/elite/EliteSections";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxPage from "@/components/lux/LuxPage";
import {
  BACKEND_DEVELOPMENT_ROUTE,
  FRONTEND_DEVELOPMENT_ROUTE,
  UI_UX_DESIGN_ROUTE,
} from "@/lib/design-and-development/service-routes";

const WEB_TICKER = [
  "Next.js",
  "Corporate websites",
  "Headless CMS",
  "eCommerce",
  "Core Web Vitals",
  "Web applications",
  "SEO-ready builds",
  "Dashboards",
  "Landing pages",
  "Accessibility",
];

export default function WebDevLanding() {
  return (
    <LuxPage>
      <div className="relative isolate overflow-hidden">
        <LuxBackdrop dust={false} />
        <div className="relative">
          <SoftwareDevWebSection variant="page" />
        </div>
      </div>
      <EliteTicker items={WEB_TICKER} />
      <WebDevSolutionsSection />
      <WebDevApproachSection />
      <WebDevTechIndustriesSection />
      <div className="pt-16">
        <EliteHireBand
          roleId="web-developers"
          title="Need web developers on your team?"
          body="Hire dedicated Next.js, React and full-stack web developers who ship fast, SEO-ready websites and apps."
        />
      </div>
      <WebDevFaqSection />
      <EliteRelated routes={[FRONTEND_DEVELOPMENT_ROUTE, UI_UX_DESIGN_ROUTE, BACKEND_DEVELOPMENT_ROUTE]} />
      <WebDevFinalCta />
    </LuxPage>
  );
}
