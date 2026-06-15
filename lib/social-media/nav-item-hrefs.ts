import { SM_HUB_ROUTE } from "@/lib/social-media/service-routes";

export const SM_ITEM_HREFS: Record<string, string> = {
  "Social Media Management": SM_HUB_ROUTE,
  "Social Media Brand Management": SM_HUB_ROUTE,
  "Franchise Social Media": SM_HUB_ROUTE,
  "Enterprise Social Media": SM_HUB_ROUTE,
  Facebook: `${SM_HUB_ROUTE}#platforms`,
  LinkedIn: `${SM_HUB_ROUTE}#platforms`,
  Twitter: `${SM_HUB_ROUTE}#platforms`,
  Instagram: `${SM_HUB_ROUTE}#platforms`,
};
