import SoftwareDevDevelopmentProcessSection from "@/components/design-and-development/SoftwareDevDevelopmentProcessSection";
import EliteServicePage from "@/components/design-and-development/elite/EliteServicePage";
import { PROCESS_ELITE } from "@/lib/design-and-development/elite-content";

export default function DevelopmentProcessLanding() {
  return <EliteServicePage hero={<SoftwareDevDevelopmentProcessSection variant="page" />} service={PROCESS_ELITE} />;
}
