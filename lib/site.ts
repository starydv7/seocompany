export const SITE_NAME = "BrandMarketing";

export const BRAND_LOGO = {
  src: "/assets/logo.png",
  alt: "BrandMarketing logo",
  width: 336,
  height: 200,
  className: "h-16 w-[7.2rem] shrink-0 object-contain object-left sm:h-20 sm:w-[8.4rem]",
} as const;

/** HubSpot Meetings — book a call (opens in a new tab) */
export const HUBSPOT_MEETING_URL =
  process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL ??
  "https://meetings-na2.hubspot.com/brand-marketing";
