import { DESIGN_ITEM_HREFS } from "@/lib/design-and-development/nav-item-hrefs";
import { DM_ITEM_HREFS } from "@/lib/digital-marketing/nav-item-hrefs";
import { PPC_ITEM_HREFS } from "@/lib/ppc/nav-item-hrefs";
import { SM_ITEM_HREFS } from "@/lib/social-media/nav-item-hrefs";

/** Mega-menu SEO item label → dedicated page route */
export const SEO_ITEM_HREFS: Record<string, string> = {
  "Local SEO": "/seo/local",
  "Technical SEO": "/seo/technical",
  "Franchise SEO": "/seo/franchise",
  "AI SEO Services": "/seo/aiseo",
};

export function hrefForMegaItem(label: string, _sectionHref: string): string | null {
  return (
    SEO_ITEM_HREFS[label] ??
    DM_ITEM_HREFS[label] ??
    DESIGN_ITEM_HREFS[label] ??
    SM_ITEM_HREFS[label] ??
    PPC_ITEM_HREFS[label] ??
    null
  );
}