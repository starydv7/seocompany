import SoftwareDevMobileSection from "@/components/design-and-development/SoftwareDevMobileSection";
import EliteServicePage from "@/components/design-and-development/elite/EliteServicePage";
import { MOBILE_ELITE } from "@/lib/design-and-development/elite-content";

export default function MobileAppDevLanding() {
  return <EliteServicePage hero={<SoftwareDevMobileSection variant="page" />} service={MOBILE_ELITE} />;
}
