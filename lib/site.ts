export const SITE_NAME = "BrandMarketing";

export const BRAND_LOGO = {
  src: "/assets/logo.png",
  alt: "BrandMarketing logo",
  width: 160,
  height: 160,
  className:
    "block h-16 w-auto max-w-none shrink-0 origin-left object-contain sm:h-20",
} as const;

/** HubSpot Meetings — book a call (opens in a new tab) */
export const HUBSPOT_MEETING_URL =
  process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL ??
  "https://meetings-na2.hubspot.com/brand-marketing";
