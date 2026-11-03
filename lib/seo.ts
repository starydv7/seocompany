import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-routes";
import { SITE_NAME } from "@/lib/site";

export const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE_NAME} — SEO agency and web & app development company` };

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const CONTACT = {
  email: "connect@brandmarketing.digital",
  phone: "+91-70034-27553",
  locality: "Kolkata",
  region: "West Bengal",
  country: "IN",
  sameAs: [
    "https://www.linkedin.com/company/brandmarketingdigital/",
    "https://www.facebook.com/brandmarketingdigital.official",
  ],
} as const;

type SeoPage = {
  /** Short label used in breadcrumbs. */
  name: string;
  /** Rendered through the root layout's "%s | BrandMarketing" template unless `absoluteTitle` is set. */
  title: string;
  absoluteTitle?: boolean;
  description: string;
  keywords: string[];
  /** Emits a schema.org Service for the page. */
  serviceType?: string;
  /** Points the canonical URL at another route that serves the same content. */
  canonical?: string;
};

export const SEO_PAGES: Record<string, SeoPage> = {
  "/": {
    name: "Home",
    title: "BrandMarketing | SEO Agency, Web & App Development Company",
    absoluteTitle: true,
    description:
      "Results-driven SEO agency and web & app development company. Rank higher on Google and AI search, hire expert developers, and grow revenue with one senior team.",
    keywords: [
      "SEO agency",
      "digital marketing agency",
      "web development company",
      "app development company",
      "hire web developers",
      "hire app developers",
      "software development agency",
    ],
  },
  "/about": {
    name: "About",
    title: "About Us | SEO & Development Agency in Kolkata, India",
    description:
      "Meet BrandMarketing: strategists, SEO specialists, designers and developers in Kolkata, India, helping brands worldwide rank higher and grow revenue.",
    keywords: ["about BrandMarketing", "SEO agency Kolkata", "digital marketing agency India", "web development agency India"],
  },
  "/contact": {
    name: "Contact",
    title: "Contact Us | Book a Free SEO & Development Strategy Call",
    description:
      "Talk to BrandMarketing about SEO, digital marketing, web development or hiring developers. Book a free strategy call and get a roadmap for your growth goals.",
    keywords: ["contact SEO agency", "book strategy call", "hire developers", "free SEO consultation"],
  },
  "/pricing": {
    name: "Pricing",
    title: "SEO & AI Automation Pricing",
    description:
      "See starting prices for SEO audits, 90-day SEO sprints, AI automation setup and SEO-ready websites. Fixed-scope audits, USD pricing, reporting you can verify.",
    keywords: ["SEO pricing", "SEO packages", "SEO audit cost", "website development cost", "AI automation pricing"],
  },
  "/careers": {
    name: "Careers",
    title: "Careers | SEO, Marketing & Developer Jobs",
    description:
      "Join BrandMarketing and help ambitious brands grow. Explore openings for SEO specialists, marketers, designers and software developers.",
    keywords: ["SEO jobs", "digital marketing jobs", "developer jobs Kolkata", "web developer careers"],
  },
  "/branding": {
    name: "Branding",
    title: "Branding & Content Strategy Agency",
    description:
      "Brand identity design and high-authority content strategy that turns browsers into loyal customers and builds search visibility that lasts.",
    keywords: ["branding agency", "brand identity design", "content strategy agency", "content marketing services"],
    serviceType: "Branding and content strategy",
  },
  "/services": {
    name: "Services",
    title: "SEO, Digital Marketing & Development Services",
    description:
      "SEO, PPC, social media, marketing automation, web and app development. Pick a single service or combine them into one full-funnel growth system.",
    keywords: ["digital marketing services", "SEO services", "PPC services", "marketing automation", "web development services"],
  },
  "/social-media": {
    name: "Social Media Marketing",
    title: "Social Media Marketing Agency | SMM Services",
    description:
      "Social media marketing agency for Instagram, Facebook, LinkedIn, YouTube and more. Content, community and paid social that build real, measurable growth.",
    keywords: ["social media marketing agency", "SMM services", "social media management", "Instagram marketing", "LinkedIn marketing"],
    serviceType: "Social media marketing",
  },
  "/seo": {
    name: "SEO",
    title: "SEO Agency | Search Engine Optimization Services",
    description:
      "SEO agency that drives rankings, traffic and revenue. Strategy-first, white-hat SEO: technical audits, content, link building, local and AI search optimization.",
    keywords: ["SEO agency", "SEO services", "search engine optimization company", "SEO company", "best SEO agency"],
    serviceType: "Search engine optimization",
  },
  "/seo/local": {
    name: "Local SEO",
    title: "Local SEO Services | Google Maps & Business Profile Optimization",
    description:
      "Local SEO services that bring calls, visits and leads: Google Business Profile optimization, Maps rankings, citations and reviews for nearby customers.",
    keywords: ["local SEO services", "Google Maps SEO", "Google Business Profile optimization", "local SEO agency", "near me SEO"],
    serviceType: "Local SEO",
  },
  "/seo/technical": {
    name: "Technical SEO",
    title: "Technical SEO Services | Audits, Core Web Vitals & Schema",
    description:
      "Technical SEO services that fix what holds rankings back: site audits, crawlability, indexation, Core Web Vitals, schema markup and safe site migrations.",
    keywords: ["technical SEO services", "SEO audit", "Core Web Vitals optimization", "schema markup", "site migration SEO"],
    serviceType: "Technical SEO",
  },
  "/seo/franchise": {
    name: "Franchise SEO",
    title: "Franchise SEO Services | Multi-Location SEO Agency",
    description:
      "Franchise SEO for multi-location brands: location pages, Google Business Profile management and technical SEO that lift local rankings across every branch.",
    keywords: ["franchise SEO", "multi-location SEO", "franchise SEO agency", "location pages SEO"],
    serviceType: "Franchise SEO",
  },
  "/seo/ai": {
    name: "AI SEO",
    title: "AI SEO Agency | Rank in ChatGPT, Gemini & AI Overviews",
    description:
      "AI SEO services (GEO and AEO) that make your brand the source ChatGPT, Google AI Overviews, Gemini and Perplexity trust, cite and recommend.",
    keywords: ["AI SEO agency", "AI SEO services", "generative engine optimization", "answer engine optimization", "ChatGPT SEO", "AI Overviews SEO"],
    serviceType: "AI search optimization",
  },
  "/seo/aiseo": {
    name: "AI SEO",
    title: "AI SEO Agency | Rank in ChatGPT, Gemini & AI Overviews",
    description:
      "AI SEO services (GEO and AEO) that make your brand the source ChatGPT, Google AI Overviews, Gemini and Perplexity trust, cite and recommend.",
    keywords: ["AI SEO agency", "AI SEO services", "generative engine optimization", "answer engine optimization"],
    serviceType: "AI search optimization",
    canonical: "/seo/ai",
  },
  "/digital-marketing-services": {
    name: "Digital Marketing Services",
    title: "Digital Marketing Agency | Full-Funnel Marketing Services",
    description:
      "Full-funnel digital marketing agency combining SEO, PPC, social media, content and CRO to drive predictable, compounding growth for your business.",
    keywords: ["digital marketing agency", "digital marketing services", "online marketing agency", "performance marketing agency"],
    serviceType: "Digital marketing",
  },
  "/digital-marketing-services/ppc": {
    name: "PPC",
    title: "PPC Agency | Google Ads Management Services",
    description:
      "PPC agency for Google Ads, YouTube, Microsoft and programmatic campaigns. Qualified traffic, lower cost per lead and maximum return on ad spend.",
    keywords: ["PPC agency", "Google Ads management", "PPC management services", "Google Ads agency", "pay per click company"],
    serviceType: "Pay-per-click advertising management",
  },
  "/digital-marketing-services/link-building": {
    name: "Link Building",
    title: "Link Building Services | White-Hat Backlinks & Digital PR",
    description:
      "White-hat link building services and digital PR that earn high-authority backlinks, strengthen domain authority and push your pages up the rankings.",
    keywords: ["link building services", "backlink building", "white hat link building", "digital PR agency", "SEO backlinks"],
    serviceType: "Link building",
  },
  "/digital-marketing-services/online-marketplace-marketing": {
    name: "Marketplace Marketing",
    title: "Amazon & Online Marketplace Marketing Agency",
    description:
      "Online marketplace marketing for Amazon, Flipkart, Meesho and more: listing optimization, marketplace ads and growth strategy that increase sales.",
    keywords: ["Amazon marketing agency", "marketplace marketing", "Flipkart marketing", "Amazon listing optimization", "Amazon PPC"],
    serviceType: "Online marketplace marketing",
  },
  "/digital-marketing": {
    name: "Digital Marketing",
    title: "Digital Marketing Company | Strategy, Execution & Growth",
    description:
      "Digital marketing company that creates predictable growth: strategy, execution and optimization across SEO, paid media and social in one scalable system.",
    keywords: ["digital marketing company", "digital marketing agency", "growth marketing agency", "online marketing services"],
    serviceType: "Digital marketing",
  },
  "/digital-marketing/strategy": {
    name: "Strategy",
    title: "Digital Marketing Strategy Consulting",
    description:
      "Digital marketing strategy consulting: market research, channel selection, budgets and measurable KPIs that turn your marketing spend into real growth.",
    keywords: ["digital marketing strategy", "marketing strategy consulting", "digital marketing consultant", "marketing plan"],
    serviceType: "Digital marketing strategy",
  },
  "/digital-marketing/development": {
    name: "Development",
    title: "Marketing Automation, Tracking & Funnel Development",
    description:
      "We build the tracking, marketing automation, funnels, CRM integrations and reporting dashboards behind scalable, measurable digital marketing.",
    keywords: ["marketing automation services", "conversion tracking setup", "sales funnel development", "marketing dashboards"],
    serviceType: "Marketing technology development",
  },
  "/digital-marketing/ecommerce": {
    name: "eCommerce",
    title: "eCommerce Marketing Agency | SEO, PPC & CRO for Online Stores",
    description:
      "eCommerce marketing agency driving traffic and sales for online stores: eCommerce SEO, shopping ads, conversion optimization and store design.",
    keywords: ["ecommerce marketing agency", "ecommerce SEO", "Shopify marketing", "Google Shopping ads", "ecommerce CRO"],
    serviceType: "eCommerce marketing",
  },
  "/digital-marketing/franchise": {
    name: "Franchise",
    title: "Franchise Marketing Agency | Multi-Location Digital Marketing",
    description:
      "Franchise digital marketing for multi-location growth: local SEO, PPC, content and scalable systems that lift visibility and leads for every location.",
    keywords: ["franchise marketing agency", "franchise digital marketing", "multi-location marketing", "franchise lead generation"],
    serviceType: "Franchise marketing",
  },
  "/digital-marketing/enterprise": {
    name: "Enterprise",
    title: "Enterprise Digital Marketing Agency",
    description:
      "Enterprise digital marketing services for scalable growth: data-driven SEO, PPC and full-funnel programs with global reach and measurable revenue impact.",
    keywords: ["enterprise digital marketing", "enterprise SEO", "enterprise marketing agency", "B2B marketing agency"],
    serviceType: "Enterprise digital marketing",
  },
  "/design-and-development": {
    name: "Design & Development",
    title: "Web & App Development Company | Hire Expert Developers",
    description:
      "Web, mobile app and custom software development company. Hire senior developers and designers to build fast, scalable, SEO-ready digital products.",
    keywords: [
      "web development company",
      "app development company",
      "software development company",
      "hire developers",
      "hire dedicated developers",
      "website design and development",
    ],
    serviceType: "Software and web development",
  },
  "/hire-developers": {
    name: "Hire Developers",
    title: "Hire Developers | Dedicated Web & App Developers",
    description:
      "Hire dedicated web developers, app developers, React, Next.js and Node.js engineers. Interview vetted senior talent and choose dedicated, hourly or fixed-scope.",
    keywords: [
      "hire developers",
      "hire dedicated developers",
      "hire web developers",
      "hire app developers",
      "hire React developers",
      "hire Node.js developers",
      "hire full stack developers",
      "web developer for hire",
      "hire remote developers India",
    ],
    serviceType: "Dedicated developer hiring",
  },
  "/design-and-development/software-development": {
    name: "Software Development",
    title: "Software Development Company | Hire Software Developers",
    description:
      "Custom software development company building scalable platforms, from startup MVPs to enterprise systems. Hire dedicated software developers on demand.",
    keywords: ["software development company", "custom software development", "hire software developers", "dedicated development team", "MVP development"],
    serviceType: "Custom software development",
  },
  "/design-and-development/web-development": {
    name: "Web Development",
    title: "Web Development Company | Hire Web Developers",
    description:
      "Web development company building fast, SEO-ready websites and web apps with React and Next.js. Hire expert web developers to grow traffic and conversions.",
    keywords: ["web development company", "hire web developers", "website development services", "web application development", "Next.js development agency"],
    serviceType: "Web development",
  },
  "/design-and-development/mobile-app-development": {
    name: "Mobile App Development",
    title: "Mobile App Development Company | Hire App Developers",
    description:
      "Mobile app development company building iOS, Android and cross-platform apps. Hire experienced app developers to launch high-performance apps faster.",
    keywords: ["mobile app development company", "hire app developers", "app developer", "iOS app development", "Android app development", "React Native development"],
    serviceType: "Mobile app development",
  },
  "/design-and-development/frontend-development": {
    name: "Frontend Development",
    title: "Frontend Development Services | Hire React & Next.js Developers",
    description:
      "Frontend development services with React, Next.js, TypeScript and Tailwind CSS. Hire frontend developers for fast, accessible, pixel-perfect interfaces.",
    keywords: ["frontend development services", "hire React developers", "hire Next.js developers", "hire frontend developers", "TypeScript development"],
    serviceType: "Frontend development",
  },
  "/design-and-development/backend-development": {
    name: "Backend Development",
    title: "Backend Development Services | Hire Backend Developers",
    description:
      "Backend development services: secure APIs, databases, cloud infrastructure and integrations. Hire backend developers to build scalable systems.",
    keywords: ["backend development services", "hire backend developers", "API development", "Node.js development", "cloud backend development"],
    serviceType: "Backend development",
  },
  "/design-and-development/ui-ux-design": {
    name: "UI/UX Design",
    title: "UI/UX Design Agency | Website & App Design Services",
    description:
      "UI/UX design agency for websites and mobile apps: user research, wireframes and high-fidelity prototypes that delight users and lift conversions.",
    keywords: ["UI UX design agency", "UI UX design services", "website design company", "app design services", "hire UI UX designer"],
    serviceType: "UI/UX design",
  },
  "/design-and-development/product-engineering": {
    name: "Product Engineering",
    title: "Product Engineering Services | MVP & SaaS Development",
    description:
      "End-to-end product engineering, from strategy and architecture to MVP and SaaS development, optimization and long-term support by a senior team.",
    keywords: ["product engineering services", "MVP development", "SaaS development company", "product development company"],
    serviceType: "Product engineering",
  },
  "/design-and-development/business-solutions": {
    name: "Business Solutions",
    title: "Custom Business Software Solutions",
    description:
      "Custom business software and digital solutions that streamline operations, automate workflows and improve customer experiences across your organization.",
    keywords: ["business software solutions", "custom business applications", "workflow automation", "enterprise software development"],
    serviceType: "Business software solutions",
  },
  "/design-and-development/development-process": {
    name: "Development Process",
    title: "Our Software Development Process | Agile Delivery",
    description:
      "How we deliver software: discovery, design, agile development, QA, launch and support. A transparent process that ships quality products on time.",
    keywords: ["software development process", "agile development", "software development lifecycle", "development methodology"],
  },
  "/blog": {
    name: "Blog",
    title: "SEO, Digital Marketing & Development Blog",
    description:
      "Practical SEO, AI search, PPC, social media and web development playbooks from the BrandMarketing team to help modern brands grow.",
    keywords: ["SEO blog", "digital marketing blog", "AI SEO tips", "web development blog"],
  },
};

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function pageMetadata(path: string): Metadata {
  const page = SEO_PAGES[path];
  if (!page) throw new Error(`Missing SEO_PAGES entry for ${path}`);

  const url = absoluteUrl(page.canonical ?? path);
  const fullTitle = page.absoluteTitle ? page.title : `${page.title} | ${SITE_NAME}`;

  return {
    title: page.absoluteTitle ? { absolute: page.title } : page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      title: fullTitle,
      description: page.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [OG_IMAGE.url],
    },
  };
}

function breadcrumbTrail(path: string) {
  const trail = [{ name: SEO_PAGES["/"].name, url: absoluteUrl("/") }];
  if (path === "/") return trail;
  const segments = path.split("/").filter(Boolean);
  segments.forEach((_, i) => {
    const sub = `/${segments.slice(0, i + 1).join("/")}`;
    const page = SEO_PAGES[sub];
    if (page) trail.push({ name: page.name, url: absoluteUrl(sub) });
  });
  return trail;
}

export function pageJsonLd(path: string, faqs?: { q: string; a: string }[]) {
  const page = SEO_PAGES[path];
  if (!page) throw new Error(`Missing SEO_PAGES entry for ${path}`);
  const url = absoluteUrl(page.canonical ?? path);
  const graph: Record<string, unknown>[] = [];

  if (path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbTrail(page.canonical ?? path).map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  graph.push({
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.absoluteTitle ? page.title : `${page.title} | ${SITE_NAME}`,
    description: page.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    ...(path !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    inLanguage: "en",
  });

  if (page.serviceType) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.title.split(" | ")[0],
      serviceType: page.serviceType,
      description: page.description,
      url,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "Place", name: "Worldwide" },
    });
  }

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        alternateName: "BrandMarketing Digital",
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo.png`,
        image: `${SITE_URL}/assets/logo.png`,
        description: SEO_PAGES["/"].description,
        email: CONTACT.email,
        telephone: CONTACT.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: CONTACT.locality,
          addressRegion: CONTACT.region,
          addressCountry: CONTACT.country,
        },
        areaServed: { "@type": "Place", name: "Worldwide" },
        sameAs: CONTACT.sameAs,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT.email,
          telephone: CONTACT.phone,
          availableLanguage: ["English"],
        },
        knowsAbout: [
          "Search engine optimization",
          "AI search optimization",
          "Pay-per-click advertising",
          "Social media marketing",
          "Web development",
          "Mobile app development",
          "Custom software development",
          "UI/UX design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
    ],
  };
}
