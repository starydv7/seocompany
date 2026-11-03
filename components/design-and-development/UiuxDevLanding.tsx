import SoftwareDevUiuxSection from "@/components/design-and-development/SoftwareDevUiuxSection";
import EliteServicePage from "@/components/design-and-development/elite/EliteServicePage";
import { UIUX_ELITE } from "@/lib/design-and-development/elite-content";

export default function UiuxDevLanding() {
  return <EliteServicePage hero={<SoftwareDevUiuxSection variant="page" />} service={UIUX_ELITE} />;
}
