import SoftwareDevWebSection from "@/components/design-and-development/SoftwareDevWebSection";
import WebDevApproachSection from "@/components/design-and-development/WebDevApproachSection";
import WebDevFaqSection from "@/components/design-and-development/WebDevFaqSection";
import WebDevFinalCta from "@/components/design-and-development/WebDevFinalCta";
import WebDevSolutionsSection from "@/components/design-and-development/WebDevSolutionsSection";
import WebDevTechIndustriesSection from "@/components/design-and-development/WebDevTechIndustriesSection";

export default function WebDevLanding() {
  return (
    <div className="w-full max-w-none overflow-x-hidden bg-white">
      <SoftwareDevWebSection variant="page" />
      <WebDevSolutionsSection />
      <WebDevApproachSection />
      <WebDevTechIndustriesSection />
      <WebDevFaqSection />
      <WebDevFinalCta />
    </div>
  );
}
