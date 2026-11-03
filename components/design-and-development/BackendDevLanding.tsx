import SoftwareDevBackendSection from "@/components/design-and-development/SoftwareDevBackendSection";
import EliteServicePage from "@/components/design-and-development/elite/EliteServicePage";
import { BACKEND_ELITE } from "@/lib/design-and-development/elite-content";

export default function BackendDevLanding() {
  return <EliteServicePage hero={<SoftwareDevBackendSection variant="page" />} service={BACKEND_ELITE} />;
}
