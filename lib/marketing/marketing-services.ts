import {
  Building2,
  Code2,
  Compass,
  Link2,
  MapPin,
  Megaphone,
  MousePointerClick,
  Search,
  Share2,
  ShoppingBag,
  Sparkles,
  Store,
  Wrench,
  BrainCircuit,
  Network,
} from "lucide-react";
import type { EliteRelatedItem } from "@/components/design-and-development/elite/EliteSections";

/** Every marketing page, used for "Related services" cards. */
export const MARKETING_SERVICES: EliteRelatedItem[] = [
  { href: "/digital-marketing", title: "Digital Marketing", description: "Full-funnel marketing systems that create predictable growth.", icon: Sparkles, accent: "gold" },
  { href: "/digital-marketing-services", title: "All Marketing Services", description: "Every channel we run, from SEO and PPC to social and marketplaces.", icon: Network, accent: "violet" },
  { href: "/digital-marketing/strategy", title: "Digital Marketing Strategy", description: "Research, positioning and a channel plan tied to revenue targets.", icon: Compass, accent: "gold" },
  { href: "/digital-marketing/development", title: "Marketing Development", description: "Tracking, automation, funnels and dashboards behind your growth.", icon: Code2, accent: "violet" },
  { href: "/digital-marketing/ecommerce", title: "eCommerce Marketing", description: "Shopping ads, product SEO and CRO that lift revenue per visitor.", icon: ShoppingBag, accent: "rose" },
  { href: "/digital-marketing/franchise", title: "Franchise Marketing", description: "Central brand control with local campaigns for every location.", icon: MapPin, accent: "emerald" },
  { href: "/digital-marketing/enterprise", title: "Enterprise Marketing", description: "Multi-brand, multi-region programmes with enterprise attribution.", icon: Building2, accent: "sky" },
  { href: "/seo", title: "SEO Services", description: "Technical, content and authority SEO that compounds organic revenue.", icon: Search, accent: "emerald" },
  { href: "/seo/local", title: "Local SEO", description: "Google Maps, Business Profile and local rankings that drive calls.", icon: MapPin, accent: "emerald" },
  { href: "/seo/technical", title: "Technical SEO", description: "Speed, crawlability, indexing and schema fixed at the root.", icon: Wrench, accent: "sky" },
  { href: "/seo/franchise", title: "Franchise SEO", description: "Location pages and local rankings for every franchise unit.", icon: MapPin, accent: "gold" },
  { href: "/seo/ai", title: "AI SEO", description: "Visibility in ChatGPT, Google AI Overviews and answer engines.", icon: BrainCircuit, accent: "violet" },
  { href: "/digital-marketing-services/ppc", title: "PPC Advertising", description: "Google, YouTube and Meta campaigns built around cost per lead.", icon: Megaphone, accent: "sky" },
  { href: "/digital-marketing-services/link-building", title: "Link Building", description: "White-hat digital PR that earns authoritative backlinks.", icon: Link2, accent: "violet" },
  { href: "/digital-marketing-services/online-marketplace-marketing", title: "Marketplace Marketing", description: "Amazon and marketplace SEO, ads and storefronts that win the buy box.", icon: Store, accent: "gold" },
  { href: "/social-media", title: "Social Media Marketing", description: "Content, community and paid social that build demand.", icon: Share2, accent: "rose" },
  { href: "/services", title: "CRO & Content Marketing", description: "Conversion optimisation and content that turn traffic into revenue.", icon: MousePointerClick, accent: "gold" },
];
