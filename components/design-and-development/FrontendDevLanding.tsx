import SoftwareDevFrontendSection from "@/components/design-and-development/SoftwareDevFrontendSection";
import EliteServicePage from "@/components/design-and-development/elite/EliteServicePage";
import { FRONTEND_ELITE } from "@/lib/design-and-development/elite-content";

export default function FrontendDevLanding() {
  return <EliteServicePage hero={<SoftwareDevFrontendSection variant="page" />} service={FRONTEND_ELITE} />;
}
