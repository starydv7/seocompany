import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import {
  getServiceAccentStyles,
  type ServiceAccent,
  type ServiceGraphicType,
} from "@/lib/design-and-development/software-dev-content";
import {
  SDM_FONT_BODY,
  SDM_FONT_CARD_TITLE,
  SDM_FONT_LIST,
  SDM_SERVICE_CARD,
} from "@/components/design-and-development/software-dev-styles";
import SoftwareDevServiceGraphic from "@/components/design-and-development/SoftwareDevServiceGraphic";

type ServiceCardProps = {
  title: string;
  icon: LucideIcon;
  description: string;
  accent: ServiceAccent;
  items: readonly string[];
  graphic: ServiceGraphicType;
};

export default function SoftwareDevServiceCard({
  title,
  icon: Icon,
  description,
  accent,
  items,
  graphic,
}: ServiceCardProps) {
  const styles = getServiceAccentStyles(accent);
  const isProcess = graphic === "process";

  return (
    <article className={SDM_SERVICE_CARD}>
      {isProcess ? (
        <div className="flex w-full flex-col gap-[2%]">
          <div className="w-full">
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${styles.iconColor}`} strokeWidth={2} />
              </span>
              <h3 className={SDM_FONT_CARD_TITLE}>{title}</h3>
            </div>
            <p className={SDM_FONT_BODY}>{description}</p>
          </div>
          <SoftwareDevServiceGraphic type="process" />
        </div>
      ) : (
        <div className="grid w-full items-center gap-[2%] lg:grid-cols-[minmax(0,40%)_minmax(0,60%)]">
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${styles.iconColor}`} strokeWidth={2} />
              </span>
              <h3 className={SDM_FONT_CARD_TITLE}>{title}</h3>
            </div>
            <p className={`mb-4 sm:mb-5 ${SDM_FONT_BODY}`}>{description}</p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${styles.checkBg}`}
                  >
                    <Check className={`h-3 w-3 ${styles.checkColor}`} strokeWidth={3} />
                  </span>
                  <span className={SDM_FONT_LIST}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex min-h-[15rem] w-full items-center overflow-visible sm:min-h-[17rem] lg:min-h-[19rem]">
            <SoftwareDevServiceGraphic type={graphic} />
          </div>
        </div>
      )}
    </article>
  );
}
