import SoftwareDevBusinessSolutionsSection from "@/components/design-and-development/SoftwareDevBusinessSolutionsSection";
import EliteServicePage from "@/components/design-and-development/elite/EliteServicePage";
import { BUSINESS_ELITE } from "@/lib/design-and-development/elite-content";

export default function BusinessSolutionsLanding() {
  return <EliteServicePage hero={<SoftwareDevBusinessSolutionsSection variant="page" />} service={BUSINESS_ELITE} />;
}
