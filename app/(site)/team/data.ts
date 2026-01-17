export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  headline: string;
  location: string;
  experience: string;
  specialties: string[];
  bio: string[];
  linkedIn: string;
  achievements?: string[];
  tools?: string[];
  industries?: string[];
  cta?: {
    text: string;
    href: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    slug: "dhiraj-kumar",
    name: "Dhiraj Kumar",
    role: "Digital Marketing, Marketing Automation & Growth Specialist",
    headline:
      "Building predictable, scalable, and conversion-driven growth systems across marketing automation, CRM, paid ads, and full-funnel strategy.",
    location: "India • Working with brands in India, Australia, UK & USA",
    experience: "8+ years",
    specialties: [
      "Marketing automation & CRM (HubSpot, Go High Level, Zoho CRM)",
      "Performance marketing (Google Ads, Meta Ads, LinkedIn Ads)",
      "Full-funnel digital marketing strategy & CRO",
      "Email, SMS & WhatsApp lifecycle automation",
      "Lead generation, demand gen & funnel optimization",
      "Analytics, tracking & attribution (GA4, GTM)",
    ],
    bio: [
      "I'm Dhiraj Kumar — a Digital Marketing, Marketing Automation & Growth Specialist with 8+ years of experience helping businesses build predictable, scalable, and conversion-driven growth systems.",
      "I specialize in marketing automation, CRM setup, email marketing, paid advertising, SEO, and social media strategy, with deep expertise in HubSpot and Go High Level (GHL). My work sits at the intersection of strategy, technology, and performance marketing, where I design systems that attract qualified leads, nurture them intelligently across channels, and convert them into long-term customers.",
      "Over the years, I have partnered with B2B and B2C brands across Finance, Insurance, Healthcare, Education, SaaS, eCommerce, Events, and Service-based businesses in India, Australia, the UK, and the USA. I've delivered end-to-end solutions—from traffic generation and landing page optimization to CRM automation, lifecycle email marketing, and sales enablement workflows.",
      "My methodology is automation-first and outcome-driven. Rather than running disconnected campaigns, I build integrated marketing ecosystems that align ads, content, email, CRM workflows, and social media—improving speed-to-lead, increasing conversions, and maximizing ROI.",
      "I offer comprehensive services including HubSpot onboarding & advanced automation setup, Go High Level (GHL) CRM & funnel automation, lead scoring and lifecycle stages, sales + marketing workflow automation, email nurture sequences, cold email outreach systems, paid ads & lead generation funnels, social media strategy, and SEO & website optimization.",
      "Why work with me? 8+ years of real-world digital marketing experience, strong mix of strategy + execution, automation-first mindset, data-driven & ROI-focused approach, and clear communication & structured processes.",
    ],
    linkedIn: "https://www.linkedin.com/in/dhiraj-kumar-88a5a7a7/",
    achievements: [
      "Marketing Automation – HubSpot: Built end-to-end HubSpot automation workflows, automated lead routing, follow-ups & deal stages, improved sales response time by 60%+",
      "Email Marketing & Nurturing: Designed high-converting drip campaigns, increased email open rates by 35–45%, improved lead-to-conversion rate significantly",
      "Paid Media & Lead Generation: Managed performance campaigns with ROI focus, optimized CPL and conversion rates, built scalable funnel systems",
    ],
    tools: [
      "HubSpot",
      "Go High Level (GHL)",
      "Zoho CRM",
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "GA4",
      "GTM",
      "Email Marketing Platforms",
      "SMS & WhatsApp Automation",
    ],
    industries: [
      "Finance & Insurance",
      "Healthcare & Aesthetics",
      "Education & EdTech",
      "SaaS",
      "eCommerce & D2C",
      "Events & Entertainment",
      "B2B Services",
    ],
    cta: {
      text: "Book a Free Automation & Growth Audit",
      href: "/contact",
    },
  },
  {
    slug: "sohail-islam",
    name: "Sohail Islam",
    role: "SEO Specialist & MBA (Marketing)",
    headline:
      "Results-driven SEO that builds sustainable organic growth across SaaS, Fintech, EdTech, eCommerce, and Local Markets.",
    location: "Serving US & global clients across SaaS, Fintech, EdTech, eCom & Local",
    experience: "6+ years",
    specialties: [
      "Technical SEO & Core Web Vitals optimization",
      "Semantic content frameworks & AI Overviews (AIO)",
      "Local SEO & Map Pack visibility",
      "High-intent keyword strategy & lead-focused reporting",
    ],
    bio: [
      "I'm Sohail Islam, a results-driven SEO Specialist and MBA (Marketing) with over 6+ years of experience helping brands build sustainable organic growth across SaaS, Fintech, EdTech, eCommerce, and Local Markets, primarily serving US and global clients.",
      "I design and execute end-to-end SEO strategies that go beyond rankings. My approach is rooted in search intent, technical excellence, and data-backed decision-making, ensuring every optimization directly contributes to traffic quality, conversions, and long-term brand authority.",
      "From advanced technical SEO and Core Web Vitals optimization to semantic content frameworks, AIO (Google AI Overviews), and high-authority link building, I help businesses strengthen their visibility where it matters most, at every stage of the customer journey.",
      "I've worked with law firms, fintech platforms, education brands, eCommerce businesses, and local enterprises, delivering consistent improvements in high-intent keyword rankings, organic traffic and qualified leads, Local Map Pack visibility and inbound calls, and website performance, UX, and crawl efficiency.",
      "What differentiates me is my ability to align SEO with business objectives. I don't apply generic tactics, I create custom growth roadmaps backed by analytics, competitor intelligence, and clear KPIs. Using tools like GA4, Google Search Console, SEMrush, Ahrefs, and Screaming Frog, I provide transparent reporting and strategic insights clients can act on with confidence.",
      "Today, I work closely with decision-makers and founders, managing SEO as a long-term growth channel, not a short-term experiment. If you're looking for an SEO partner who understands strategy, execution, and ROI—not just algorithms—let's connect.",
    ],
    linkedIn: "https://www.linkedin.com/in/sohail-islam-b40776181/",
    achievements: [
      "High-intent keyword rankings improvements",
      "Organic traffic and qualified leads growth",
      "Local Map Pack visibility and inbound calls",
      "Website performance, UX, and crawl efficiency optimization",
    ],
    tools: ["GA4", "Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog"],
    industries: ["SaaS", "Fintech", "EdTech", "eCommerce", "Local Markets", "Law Firms"],
    cta: {
      text: "Book a Free SEO Strategy Call",
      href: "/contact",
    },
  },
  {
    slug: "trisha-nandy",
    name: "Trisha Nandy",
    role: "Digital Marketing & Social Media Specialist",
    headline:
      "Story-driven social and content strategies that build visibility, engagement, and measurable growth across digital platforms.",
    location: "Working with education brands, media, premium institutions & corporates",
    experience: "4+ years",
    specialties: [
      "Social strategy across Instagram, Facebook, LinkedIn, YouTube & X",
      "Paid social campaigns & performance analytics",
      "Content calendars & brand storytelling",
      "Community, engagement & personal branding",
    ],
    bio: [
      "I'm Trisha Nandy, a Digital Marketing & Social Media Specialist with a strong foundation in content strategy, paid social advertising, and performance analytics, helping brands build visibility, engagement, and measurable growth across digital platforms.",
      "With hands-on experience working with premium institutions, education brands, media houses, and corporate clients, I specialize in crafting platform-specific social media strategies that blend creative storytelling with data-driven execution. My work spans Facebook, Instagram, YouTube, LinkedIn, and X, ensuring brands maintain a consistent, high-impact presence wherever their audience is active.",
      "I plan and optimize paid social media campaigns to drive measurable business results, build and manage structured content calendars aligned with brand and campaign goals, handle end-to-end social media account management across platforms, and focus on outcomes such as stronger reach, meaningful engagement, and conversion-driven performance.",
      "I track and analyze key KPIs including engagement rate, CTR, impressions, conversions, and audience growth, translating social media analytics into clear, actionable insights for clients and stakeholders.",
      "My background in journalism and media studies gives me a unique edge allowing me to craft compelling narratives, maintain brand tonality, and create content that connects with audiences while staying aligned with business objectives. I've also contributed to SEO-focused content, website audits, and guest blogging, strengthening overall digital authority alongside social growth.",
      "Currently, I work with brands as a strategic social media partner, managing campaigns, client communication, reporting, and optimization with precision and professionalism. If you're looking for a digital marketer who understands content, performance, and brand storytelling, not just posting schedules, let's collaborate.",
    ],
    linkedIn: "https://www.linkedin.com/in/trisha-nandy-a14688203/",
    achievements: [
      "Plan and optimize paid social media campaigns for measurable business results",
      "Build and manage structured content calendars aligned with brand goals",
      "End-to-end social media account management across platforms",
      "Track and analyze KPIs: engagement rate, CTR, impressions, conversions, audience growth",
    ],
    tools: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "YouTube Analytics", "Social Media Analytics"],
    industries: ["Education", "Media Houses", "Premium Institutions", "Corporate Clients"],
    cta: {
      text: "Build a High-Impact Social Media Strategy",
      href: "/contact",
    },
  },
  {
    slug: "pawan-yadav",
    name: "Pawan Yadav",
    role: "Full-Stack Software Developer (MERN Stack & React Native)",
    headline:
      "Turning complex ideas into scalable, secure, and reliable digital products that can grow, handle real users, and support business operations.",
    location: "Working with startups, businesses, and research organizations globally",
    experience: "3+ years",
    specialties: [
      "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      "React Native mobile application development",
      "Backend API design & development",
      "Database architecture & optimization",
      "Authentication & Role-based Access Systems",
      "Full development lifecycle: Requirement Analysis → Architecture Design → Development → Testing → Deployment → Maintenance",
    ],
    bio: [
      "I am a results-driven Full-Stack Software Developer with 3+ years of hands-on industry experience, specializing in MERN Stack and Mobile Application Development (React Native).",
      "My core strength is turning complex ideas into scalable, secure, and reliable digital products. I don't just write code — I design systems that can grow, handle real users, and support business operations.",
      "I have worked extensively on healthcare & public health platforms, government & research-based information systems, business process automation tools, analytics & data-driven dashboards, and community & service applications.",
      "I am comfortable owning the entire development lifecycle: Requirement Analysis → Architecture Design → Development → Testing → Deployment → Maintenance.",
    ],
    linkedIn: "https://www.linkedin.com/in/pawan-yadav-dev/",
    achievements: [
      "Healthcare & Public Health Platforms",
      "Government & Research-Based Information Systems",
      "Business Process Automation Tools",
      "Analytics & Data-Driven Dashboards",
      "Community & Service Applications",
    ],
    tools: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "React Native",
      "Power BI",
      "REST APIs",
      "GraphQL",
      "JWT Authentication",
      "AWS/Cloud Deployment",
    ],
    industries: [
      "Healthcare & Public Health",
      "Government & Research",
      "Business Process Automation",
      "Analytics & Data Dashboards",
      "Community & Service Applications",
      "Startups & SMBs",
    ],
    cta: {
      text: "Discuss Your Development Project",
      href: "/contact",
    },
  },
];




