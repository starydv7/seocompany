import SoftwareDevProductEngineeringSection from "@/components/design-and-development/SoftwareDevProductEngineeringSection";
import EliteServicePage from "@/components/design-and-development/elite/EliteServicePage";
import { PRODUCT_ELITE } from "@/lib/design-and-development/elite-content";

export default function ProductEngineeringLanding() {
  return <EliteServicePage hero={<SoftwareDevProductEngineeringSection variant="page" />} service={PRODUCT_ELITE} />;
}
