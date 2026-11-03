import type { ReactNode } from "react";
import LuxBackdrop from "@/components/lux/LuxBackdrop";
import LuxPage from "@/components/lux/LuxPage";
import type { EliteService } from "@/lib/design-and-development/elite-content";
import EliteServiceSections from "./EliteSections";

/** Lux shell for a Design & Development service: the page's own hero, then the full elite section set. */
export default function EliteServicePage({ hero, service }: { hero: ReactNode; service: EliteService }) {
  return (
    <LuxPage>
      <div className="relative isolate overflow-hidden">
        <LuxBackdrop dust={false} />
        <div className="relative">{hero}</div>
      </div>
      <EliteServiceSections service={service} />
    </LuxPage>
  );
}
