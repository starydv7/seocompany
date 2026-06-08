import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Building2,
  Calendar,
  ClipboardList,
  Cloud,
  Copy,
  FileSearch,
  Globe2,
  Layers,
  Dumbbell,
  Home,
  Link2,
  MapPin,
  MessageSquare,
  Monitor,
  Network,
  Newspaper,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Star,
  Store,
  Target,
  TrendingDown,
  Rocket,
  Settings,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wrench,
  Briefcase,
  HeartPulse,
} from "lucide-react";

export const franchiseChallenges = {
  badge: "Challenges We Solve",
  title: "Without the Right Strategy,",
  titleHighlight: "Franchise Websites",
  titleEnd: "Often Struggle With",
  subtitle:
    "Franchise businesses face unique SEO challenges that can limit growth, visibility, and performance across locations.",
  items: [
    {
      title: "Duplicate Content",
      description:
        "Similar pages across locations cause cannibalization and lower rankings.",
      icon: Copy,
    },
    {
      title: "Weak Location Pages",
      description:
        "Thin or poorly optimized location pages lead to low visibility and traffic.",
      icon: MapPin,
    },
    {
      title: "Keyword Cannibalization",
      description:
        "Multiple pages compete for the same keywords, reducing overall performance.",
      icon: Search,
    },
    {
      title: "Inconsistent Google Business Profiles",
      description:
        "Incomplete or inconsistent profiles hurt trust and local rankings.",
      icon: Building2,
    },
    {
      title: "Poor Local Rankings",
      description:
        "Lack of local optimization keeps locations from ranking in their markets.",
      icon: TrendingDown,
    },
    {
      title: "Disconnected SEO Efforts",
      description:
        "Siloed strategies and poor coordination lead to wasted budgets and missed growth.",
      icon: Link2,
    },
  ],
} as const;

export const franchiseTrusted = {
  badge: "Trusted By",
  title: "Trusted by Multi-Location Brands Worldwide",
  subtitle:
    "We help businesses with multiple locations, branches, and service areas dominate local search, drive more leads, and grow consistently.",
  industries: [
    {
      title: "Multi-Location Fitness",
      description: "Helping gym chains and fitness centers attract more members locally.",
      icon: Dumbbell,
      accent: "from-violet-500 to-purple-400",
      line: "bg-violet-500",
      iconBg: "bg-violet-100 text-violet-600",
    },
    {
      title: "Healthcare Networks",
      description:
        "Driving patient appointments across clinics, hospitals, and specialty centers.",
      icon: HeartPulse,
      accent: "from-pink-500 to-rose-400",
      line: "bg-pink-500",
      iconBg: "bg-pink-100 text-pink-600",
    },
    {
      title: "Restaurant Groups",
      description: "Increasing footfall, reservations, and online orders for restaurant chains.",
      icon: UtensilsCrossed,
      accent: "from-amber-500 to-orange-400",
      line: "bg-amber-500",
      iconBg: "bg-amber-100 text-amber-600",
    },
    {
      title: "Home Services",
      description: "Generating high-intent leads for service-area and home service businesses.",
      icon: Home,
      accent: "from-sky-500 to-cyan-400",
      line: "bg-sky-500",
      iconBg: "bg-sky-100 text-sky-600",
    },
    {
      title: "Retail Franchises",
      description: "Boosting local visibility and in-store visits for retail brands and franchises.",
      icon: ShoppingBag,
      accent: "from-emerald-500 to-green-400",
      line: "bg-emerald-500",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Professional Services",
      description: "Helping law firms, agencies, and consultancies grow with local SEO strategies.",
      icon: Briefcase,
      accent: "from-indigo-600 to-violet-500",
      line: "bg-indigo-600",
      iconBg: "bg-indigo-100 text-indigo-700",
    },
  ],
  stats: [
    { value: "500+", label: "Locations Optimized", icon: MapPin, iconColor: "text-violet-600 bg-violet-50" },
    { value: "250+", label: "Brands Scaled", icon: BarChart3, iconColor: "text-emerald-600 bg-emerald-50" },
    { value: "1M+", label: "Customers Reached", icon: Users, iconColor: "text-pink-600 bg-pink-50" },
    {
      value: "180%+",
      label: "Average Traffic Growth",
      icon: TrendingUp,
      iconColor: "text-violet-600 bg-violet-50",
    },
    { value: "98%", label: "Client Satisfaction", icon: Star, iconColor: "text-amber-600 bg-amber-50" },
    { value: "20+", label: "Countries Served", icon: Globe2, iconColor: "text-blue-600 bg-blue-50" },
  ],
} as const;

export const franchiseHero = {
  eyebrow: "Franchise SEO Services",
  title: "Franchise SEO Services for Multi-Location Business Growth",
  titleHighlight: "Multi-Location Business Growth",
  tagline:
    "Scalable SEO systems for multi-location brands, franchise networks, and ambitious local growth goals.",
  intro: [
    "Franchise SEO is not the same as traditional SEO.",
    "Managing SEO for one local business is relatively simple. Managing SEO across dozens or hundreds of franchise locations is an entirely different challenge.",
  ],
  locationFactors: [
    "different competitors",
    "different search behavior",
    "different customer intent",
    "different ranking opportunities",
  ],
  brandMustMaintain: [
    "consistent messaging",
    "centralized control",
    "scalable SEO systems",
    "unified authority",
  ],
  struggles: [
    "duplicate content",
    "weak location pages",
    "keyword cannibalization",
    "inconsistent Google Business Profiles",
    "poor local rankings",
    "disconnected SEO efforts",
  ],
  closing:
    "Our franchise SEO services help multi-location businesses improve local visibility, strengthen brand authority, and generate qualified leads across every franchise location.",
  checklist: [
    "Location-specific competitors & intent",
    "Scalable multi-location SEO systems",
    "Consistent brand + centralized control",
    "Unified authority across branches",
    "GBP & local pack optimization",
    "Location-level reporting & attribution",
  ],
};

export const whatIsFranchiseSeo = {
  titlePrefix: "What Is",
  titleAccent: "Franchise SEO?",
  body: [
    "Franchise SEO is the process of optimizing multi-location businesses so the corporate brand and every franchise location can rank effectively in search engines.",
    "It focuses on scalability, local relevance, technical infrastructure, content governance, and location-level performance across the entire network.",
  ],
  pillars: [
    { label: "Local SEO", icon: MapPin },
    { label: "Technical SEO", icon: Wrench },
    { label: "Multi-location content", icon: Layers },
    { label: "GBP optimization", icon: Building2 },
    { label: "Scalable architecture", icon: Network },
    { label: "Review management", icon: Star },
    { label: "Location optimization", icon: Target },
    { label: "Entity trust signals", icon: ShieldCheck },
  ] as { label: string; icon: LucideIcon }[],
  combines: [
    "local SEO",
    "technical SEO",
    "multi-location content strategy",
    "Google Business Profile optimization",
    "scalable site architecture",
    "review management",
    "location-specific optimization",
  ],
};

export const franchiseServicesIntro =
  "Comprehensive franchise SEO solutions built for scale, local visibility, and long-term multi-location growth.";

export const whyFranchiseSeo = {
  titleLine1: "Why Franchise",
  titleLine2: "SEO Matters",
  lead:
    "Franchise websites compete in highly competitive search environments where small SEO problems can affect visibility, traffic, and revenue across many locations.",
  body: [
    "Most customers search locally before making purchasing decisions.",
    "Searches like “gym near me”, “dentist in Chicago”, “best pizza in Dallas”, and “roof repair near me” are highly intent-driven.",
    "If franchise locations are not properly optimized, competitors will capture those customers first.",
    "Modern franchise SEO is no longer about simply creating hundreds of city pages.",
  ],
  priorities: [
    "unique local relevance",
    "authentic location signals",
    "localized content",
    "consistent business information",
    "user experience",
    "entity trust",
  ],
  note: "As many SEO professionals now discuss, templated location pages with minimal differentiation often fail to rank well in modern search results.",
  risks: [
    { title: "Weak local visibility", desc: "National brand recognition without local rankings." },
    { title: "Duplicate city pages", desc: "Templated content that search engines devalue." },
    { title: "Cannibalization", desc: "Locations competing against each other in SERPs." },
    { title: "GBP inconsistency", desc: "Listings that confuse maps and local packs." },
    { title: "Disconnected efforts", desc: "Franchisees optimizing without central governance." },
    { title: "No location reporting", desc: "Corporate teams blind to branch-level performance." },
  ],
};

export const franchiseServices = [
  {
    title: "Multi-Location SEO Strategy",
    description:
      "Franchise SEO requires scalable systems rather than isolated optimization tactics.",
    bullets: [
      "Corporate oversight, local optimization, and location-level performance tracking",
      "Site architecture, local search visibility, content scalability, internal linking",
      "Authority distribution so franchise brands grow without SEO chaos",
    ],
    icon: Network,
  },
  {
    title: "Franchise Location Page Optimization",
    description:
      "Location pages are one of the most important elements of franchise SEO.",
    bullets: [
      "Unique localized content, location-specific FAQs, embedded maps, and local reviews",
      "Branch details, service-area information, schema markup, and locally relevant media",
      "Pages that justify their existence with genuinely unique local value",
    ],
    icon: MapPin,
  },
  {
    title: "Google Business Profile Optimization",
    description:
      "Google Business Profile optimization is critical for franchise SEO success.",
    bullets: [
      "Bulk GBP optimization, category consistency, and duplicate listing cleanup",
      "Review management, local posting, map ranking optimization, and profile verification",
      "Improved Maps visibility, local pack rankings, calls, and direction requests",
    ],
    icon: Building2,
  },
  {
    title: "Franchise Technical SEO",
    description:
      "Large franchise websites often suffer from technical SEO problems that quietly affect rankings.",
    bullets: [
      "Crawlability, indexation, site speed, and Core Web Vitals",
      "Internal linking, schema markup, URL structure, and duplicate content management",
      "Fixes at scale where small errors can affect hundreds of pages simultaneously",
    ],
    icon: Wrench,
  },
  {
    title: "Local SEO for Franchise Locations",
    description:
      "Every franchise location competes in its own local search ecosystem.",
    bullets: [
      "Geo-targeted keywords, local map visibility, regional intent, and “near me” searches",
      "Citation management, NAP consistency, review optimization, and localized content",
      "Local backlink acquisition to strengthen each branch’s authority",
    ],
    icon: Globe2,
  },
  {
    title: "Franchise Content Marketing",
    description:
      "Content is one of the biggest challenges for franchise SEO.",
    bullets: [
      "Localized landing pages, regional blog content, city-specific FAQs, and local resource pages",
      "Community-focused content with hybrid central + localized structures",
      "Balances corporate authority, local relevance, uniqueness, and SEO scalability",
    ],
    icon: FileSearch,
  },
  {
    title: "Franchise Review Management",
    description:
      "Reviews strongly influence local rankings, customer trust, conversion rates, and map visibility.",
    bullets: [
      "Generate reviews consistently across locations",
      "Monitor review activity and improve response strategy",
      "Strengthen local trust signals and manage reputation at scale",
    ],
    icon: MessageSquare,
  },
  {
    title: "Franchise SEO Analytics & Reporting",
    description:
      "One of the biggest franchise SEO challenges is measuring performance across multiple locations.",
    bullets: [
      "Location-level rankings, traffic analysis, and lead attribution",
      "Call tracking, conversion monitoring, and GBP insights",
      "Clear reporting for corporate teams and franchise owners",
    ],
    icon: BarChart3,
  },
];

export const franchiseProblemsSection = {
  titlePrefix: "Franchise SEO Problems",
  titleAccent: "We Solve",
  subtitle:
    "Small technical issues across large franchise websites can lead to massive traffic, ranking, and revenue losses.",
  problems: [
    { title: "Crawl Budget Waste", diagram: 0 },
    { title: "Indexing Issues", diagram: 1 },
    { title: "Duplicate Content", diagram: 2 },
    { title: "Keyword Cannibalization", diagram: 3 },
    { title: "Slow Deployment", diagram: 4 },
  ],
} as const;

export const franchiseIndustries = {
  titlePrefix: "Franchise SEO for",
  titleAccent: "Every Industry",
  tabs: [
    { id: "saas", label: "SaaS Companies", icon: Cloud },
    { id: "ecommerce", label: "eCommerce", icon: ShoppingBag },
    { id: "publishers", label: "Publishers", icon: Newspaper },
    { id: "franchises", label: "Franchises", icon: Store },
    { id: "multilocation", label: "Multi-Location", icon: MapPin },
    { id: "global", label: "Global Brands", icon: Globe2 },
  ],
  tabSubtitles: {
    saas: "Tailored SEO strategies designed to help SaaS businesses scale, acquire, and retain customers.",
    ecommerce:
      "SEO built for large catalogs, category growth, and revenue-focused ecommerce visibility.",
    publishers:
      "Editorial and technical SEO for publishers competing on speed, authority, and indexation.",
    franchises:
      "Franchise SEO systems that balance corporate brand strength with local location performance.",
    multilocation:
      "Location-level optimization for brands managing SEO across many branches and markets.",
    global:
      "International SEO frameworks for brands expanding organic growth across regions.",
  },
  panels: {
    saas: [
      {
        title: "Scalable SEO strategies for SaaS platforms",
        description: "Drive qualified sign-ups and grow your user base with product-led SEO.",
      },
      {
        title: "Improve product & landing page visibility",
        description: "Rank feature, pricing, and comparison pages that influence buying decisions.",
      },
      {
        title: "Drive organic signups & demo requests",
        description: "Capture high-intent searches from buyers actively evaluating software.",
      },
      {
        title: "Optimize documentation & support content",
        description: "Turn help centers and docs into traffic assets that build trust and retention.",
      },
      {
        title: "Strengthen topical authority & brand trust",
        description: "Build entity signals that help SaaS brands compete in crowded SERPs.",
      },
    ],
    ecommerce: [
      {
        title: "Category and product page optimization at scale",
        description: "Improve rankings across thousands of SKUs without sacrificing quality.",
      },
      {
        title: "Improve indexation for large catalog sites",
        description: "Fix crawl waste and get the right products discovered faster.",
      },
      {
        title: "Drive non-branded organic revenue growth",
        description: "Expand visibility beyond branded searches with commercial-intent keywords.",
      },
      {
        title: "Fix duplicate content and faceted navigation issues",
        description: "Reduce index bloat from filters, parameters, and thin URLs.",
      },
      {
        title: "Strengthen category-level topical authority",
        description: "Build hub pages that earn rankings and support internal linking at scale.",
      },
    ],
    publishers: [
      {
        title: "Editorial SEO workflows for high-volume publishing",
        description: "Align newsrooms and SEO teams on repeatable content optimization.",
      },
      {
        title: "Improve crawl efficiency across large archives",
        description: "Prioritize high-value URLs and reduce legacy content drag.",
      },
      {
        title: "Grow organic traffic to high-intent content",
        description: "Target topics that attract readers ready to subscribe or convert.",
      },
      {
        title: "Optimize news and evergreen content clusters",
        description: "Balance timely coverage with durable topical authority pages.",
      },
      {
        title: "Strengthen E-E-A-T and author authority signals",
        description: "Improve trust signals that matter for competitive publishing niches.",
      },
    ],
    franchises: [
      {
        title: "Scalable SEO strategies for franchise networks",
        description: "Govern SEO centrally while empowering each location to rank locally.",
      },
      {
        title: "Improve location page and GBP visibility",
        description: "Win map pack rankings and calls across every franchise market.",
      },
      {
        title: "Drive calls, visits, and qualified local leads",
        description: "Connect organic visibility to measurable location-level outcomes.",
      },
      {
        title: "Reduce duplicate content across branch pages",
        description: "Replace templated city pages with genuinely unique local value.",
      },
      {
        title: "Strengthen brand trust and local authority",
        description: "Build consistent NAP, reviews, and entity signals at scale.",
      },
    ],
    multilocation: [
      {
        title: "Location-specific keyword and content strategy",
        description: "Target the searches each branch needs to win in its service area.",
      },
      {
        title: "Consistent NAP and citation management",
        description: "Standardize listings so Google trusts your local data everywhere.",
      },
      {
        title: "GBP optimization across every branch",
        description: "Improve Maps visibility, engagement, and conversion per location.",
      },
      {
        title: "Local landing pages with unique market value",
        description: "Create pages that rank because they reflect real local expertise.",
      },
      {
        title: "Centralized reporting for all locations",
        description: "Track rankings, traffic, and leads with location-level clarity.",
      },
    ],
    global: [
      {
        title: "International SEO and hreflang architecture",
        description: "Serve the right language and region to the right users in search.",
      },
      {
        title: "Market-specific keyword research and content",
        description: "Adapt strategy to how customers search in each country.",
      },
      {
        title: "Multi-region technical SEO governance",
        description: "Maintain crawlability, speed, and index health across global sites.",
      },
      {
        title: "Localized organic growth strategies",
        description: "Scale wins from one market into repeatable regional playbooks.",
      },
      {
        title: "Cross-market performance reporting",
        description: "Compare organic growth with dashboards built for global stakeholders.",
      },
    ],
  },
  cta: {
    highlight: "Industries. Challenges. Goals.",
    body: "Let's align franchise SEO with how your network actually grows.",
    buttonLabel: "Book a Strategy Call",
  },
} as const;

export const franchiseProcessSection = {
  badge: "OUR PROVEN PROCESS",
  titlePrefix: "Our Franchise",
  titleAccent: "SEO Process",
  subtitle:
    "A strategic, data-driven approach to deliver scalable SEO results that drive long-term business growth.",
  steps: [
    {
      step: "01",
      title: "Audit & Analysis",
      description:
        "Deep technical, content, and competitive audits to uncover opportunities across your franchise network.",
      tagline: "Deep SEO & Competitor Insights",
      icon: Search,
      tagIcon: Search,
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Build a scalable franchise SEO roadmap aligned with corporate goals and location-level targets.",
      tagline: "Data-Backed Strategy Roadmap",
      icon: ClipboardList,
      tagIcon: ClipboardList,
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Execute technical fixes, on-page SEO, content, and GBP improvements across all locations.",
      tagline: "Flawless Execution Across All Areas",
      icon: Wrench,
      tagIcon: Wrench,
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description:
        "Track rankings, traffic, calls, and conversions with real-time visibility into every market.",
      tagline: "Real-Time Performance Tracking",
      icon: Monitor,
      tagIcon: Monitor,
    },
    {
      step: "05",
      title: "Analysis & Optimization",
      description:
        "Turn performance data into ongoing optimizations that compound results over time.",
      tagline: "Actionable Insights & Optimization",
      icon: BarChart3,
      tagIcon: BarChart3,
    },
    {
      step: "06",
      title: "Growth & Scale",
      description:
        "Scale winning playbooks across new locations while maintaining brand consistency and ROI.",
      tagline: "Sustainable SEO Growth at Scale",
      icon: TrendingUp,
      tagIcon: TrendingUp,
    },
  ],
  features: [
    {
      title: "Transparent Reporting",
      description: "Clear, detailed, and easy to understand reports",
    },
    {
      title: "Agile & Data-Driven",
      description: "We adapt strategies based on real-time data and trends",
    },
    {
      title: "Enterprise-Grade Execution",
      description: "Best practices, advanced tools, and expert SEO team",
    },
    {
      title: "Long-Term Partnership",
      description: "Committed to your success and business growth",
    },
    {
      title: "ROI Focused",
      description: "Every strategy is aligned to drive measurable ROI",
    },
  ],
} as const;

export const franchiseMetrics = [
  { value: "3–6 mo", label: "Typical measurable SEO gains", icon: TrendingUp },
  { value: "100+", label: "Locations supported at scale", icon: Building2 },
  { value: "Local+", label: "Pack & map visibility focus", icon: MapPin },
  { value: "GBP", label: "Centralized listing management", icon: Star },
  { value: "ROI", label: "Location-level attribution", icon: BarChart3 },
];

export const whyChooseUs = {
  badge: "BUILT FOR FRANCHISE GROWTH",
  titleBefore: "Why Businesses Choose Our",
  titleAccent: "Franchise SEO",
  titleAfter: "Services",
  subtitle:
    "Franchise SEO requires far more than basic local optimization. It requires scalable systems, local expertise, technical SEO, operational structure, content governance, centralized reporting, and location-level optimization.",
  cards: [
    {
      title: "Scalable Systems",
      description:
        "Centralized SEO frameworks that scale across hundreds of locations without losing quality.",
      icon: Layers,
    },
    {
      title: "Local Expertise",
      description:
        "Location-level optimization that wins map pack rankings and high-intent local searches.",
      icon: MapPin,
    },
    {
      title: "Technical SEO",
      description:
        "Enterprise-grade technical fixes for crawlability, speed, indexation, and site architecture.",
      icon: Wrench,
    },
    {
      title: "Operational Structure",
      description:
        "Clear workflows so corporate and franchisees execute SEO with consistency and accountability.",
      icon: Network,
    },
    {
      title: "Content Governance",
      description:
        "Brand-safe content systems that keep every location unique, compliant, and rank-worthy.",
      icon: ShieldCheck,
    },
    {
      title: "Performance & Reporting",
      description:
        "Location-level dashboards that tie rankings and traffic to calls, leads, and revenue.",
      icon: BarChart3,
    },
  ],
  highlight: {
    before: "Our franchise SEO strategies help businesses improve ",
    emphasis1: "visibility",
    middle:
      " across every market while maintaining strong brand consistency and ",
    emphasis2: "scalable long-term growth.",
  },
  stats: [
    { value: "500+", label: "Locations Optimized", icon: MapPin, iconClass: "text-violet-600 bg-violet-50" },
    { value: "250+", label: "Brands Served", icon: BarChart3, iconClass: "text-emerald-600 bg-emerald-50" },
    { value: "1M+", label: "Customers Reached", icon: Users, iconClass: "text-pink-600 bg-pink-50" },
    {
      value: "180%+",
      label: "Average Traffic Growth",
      icon: TrendingUp,
      iconClass: "text-orange-600 bg-orange-50",
    },
    { value: "98%", label: "Client Satisfaction", icon: Star, iconClass: "text-amber-600 bg-amber-50" },
  ],
} as const;

export const franchiseFaqSection = {
  title: "Frequently Asked Questions",
  subtitleLead: "Get clear answers to common questions about our ",
  subtitleAccent: "Enterprise SEO",
  subtitleTail: " services.",
} as const;

export const franchiseFaqs = [
  {
    q: "What is the difference between enterprise SEO and regular SEO?",
    a: "Enterprise SEO focuses on large-scale websites with complex architectures, multiple stakeholders, and advanced technical requirements—going far beyond basic keyword optimization.",
  },
  {
    q: "How long does it take to see results from enterprise SEO?",
    a: "Most enterprise clients see meaningful improvements within 3–6 months, with compounding gains as technical fixes, content, and authority build over time.",
  },
  {
    q: "Do you work with international websites?",
    a: "Yes. We support multi-region and multilingual SEO, including hreflang, market-specific content, and localized performance tracking.",
  },
  {
    q: "How do you handle SEO for large eCommerce websites?",
    a: "We optimize category architecture, faceted navigation, product templates, crawl budget, and internal linking at scale for high-inventory stores.",
  },
  {
    q: "What tools and technologies do you use?",
    a: "We use enterprise-grade analytics, rank tracking, technical crawlers, and custom dashboards aligned with your stack and reporting needs.",
  },
] as const;

export const franchiseFinalCta = {
  titleLead: "Ready to Scale Your Organic ",
  titleAccent: "Visibility?",
  subtitle:
    "Let's build a scalable SEO strategy that drives measurable results for your enterprise.",
  primaryLabel: "Book a Strategy Call",
  secondaryLabel: "View Case Studies",
  secondaryHref: "/seo",
  trustItems: [
    { label: "Enterprise SEO Experts", icon: Calendar },
    { label: "Proven Methodologies", icon: ShieldCheck },
    { label: "Results You Can Measure", icon: BarChart3 },
  ],
} as const;

export const franchiseCtaFeatures = [
  {
    title: "Proven Strategies",
    description: "Data-driven SEO strategies built for enterprise growth.",
    icon: Rocket,
  },
  {
    title: "Measurable Results",
    description: "Track performance with advanced analytics and reporting.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Security",
    description: "We follow strict security protocols to protect your data.",
    icon: Shield,
  },
  {
    title: "Dedicated Team",
    description: "Work with an experienced team that understands your business.",
    icon: Users,
  },
  {
    title: "Advanced Technology",
    description: "We use enterprise-grade tools and technologies for better outcomes.",
    icon: Settings,
  },
] as const;

