import {
  DM_DEVELOPMENT_ROUTE,
  DM_ECOMMERCE_ROUTE,
  DM_ENTERPRISE_ROUTE,
  DM_FRANCHISE_ROUTE,
  DM_STRATEGY_ROUTE,
} from "@/lib/digital-marketing/service-routes";

/** Mega-menu Digital Marketing item label → route */
export const DM_ITEM_HREFS: Record<string, string> = {
  "Digital Marketing Strategy": DM_STRATEGY_ROUTE,
  "Digital Marketing Development": DM_DEVELOPMENT_ROUTE,
  "Franchise Digital Marketing": DM_FRANCHISE_ROUTE,
  "Enterprise Digital Marketing": DM_ENTERPRISE_ROUTE,
  "eCommerce Marketing": DM_ECOMMERCE_ROUTE,
  "eCommerce SEO": DM_ECOMMERCE_ROUTE,
  "eCommerce PPC": DM_ECOMMERCE_ROUTE,
  "eCommerce Optimization": DM_ECOMMERCE_ROUTE,
  "Shopify SEO": DM_ECOMMERCE_ROUTE,
  "Shopify Web Design": DM_ECOMMERCE_ROUTE,
  "eCommerce Web Design": DM_ECOMMERCE_ROUTE,
};
