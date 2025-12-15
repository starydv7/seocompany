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
};

export const teamMembers: TeamMember[] = [
  {
    slug: "dhiraj-kumar",
    name: "Dhiraj Kumar",
    role: "Digital Marketing, Marketing Automation & Growth Specialist",
    headline:
      "Building predictable, automation-first growth systems across ads, CRM, email and funnels.",
    location: "India • Working with brands in India, Australia, UK & USA",
    experience: "8+ years",
    specialties: [
      "Marketing automation & CRM (HubSpot, Go High Level, Zoho)",
      "Performance marketing (Google, Meta, LinkedIn)",
      "Full-funnel strategy & conversion rate optimization",
      "Lifecycle email, SMS & WhatsApp automation",
    ],
    bio: [
      "Dhiraj designs and runs full-funnel growth systems – from cold traffic and lead capture to CRM workflows, nurture sequences and sales enablement.",
      "He has partnered with brands across finance, insurance, healthcare, education, SaaS, eCommerce, events and B2B services, leading projects that connect paid media, landing pages, automation and sales pipelines.",
      "His approach is automation-first and ROI-focused: instead of disconnected campaigns, he builds integrated ecosystems that make every lead easier to track, nurture and close.",
    ],
    linkedIn: "https://www.linkedin.com/in/dhiraj-kumar-88a5a7a7/",
  },
  {
    slug: "sohail-islam",
    name: "Sohail Islam",
    role: "SEO Specialist & MBA (Marketing)",
    headline:
      "Search-intent driven SEO that turns rankings into qualified traffic, leads and authority.",
    location: "Serving US & global clients across SaaS, Fintech, EdTech, eCom & Local",
    experience: "6+ years",
    specialties: [
      "Technical SEO & Core Web Vitals",
      "Semantic content frameworks & AI Overviews",
      "Local SEO & Map Pack visibility",
      "High-intent keyword strategy & lead-focused reporting",
    ],
    bio: [
      "Sohail plans and executes end-to-end SEO strategies that go beyond traffic – aligning search intent, technical foundations and content with real business goals.",
      "He has led SEO for SaaS products, fintech platforms, education brands, eCommerce stores and local businesses, improving high-intent keyword coverage, organic traffic quality and conversion rates.",
      "From advanced audits and site architecture to semantic content and link acquisition, he focuses on sustainable, compounding organic growth.",
    ],
    linkedIn: "https://www.linkedin.com/in/sohail-islam-b40776181/",
  },
  {
    slug: "trisha-nandy",
    name: "Trisha Nandy",
    role: "Digital Marketing & Social Media Specialist",
    headline:
      "Story-led social and content strategies that turn attention into engagement and demand.",
    location: "Working with education brands, media, premium institutions & corporates",
    experience: "4+ years",
    specialties: [
      "Social strategy across Instagram, Facebook, LinkedIn, YouTube & X",
      "Paid social campaigns & performance analytics",
      "Content calendars & brand storytelling",
      "Community, engagement & personal branding",
    ],
    bio: [
      "Trisha blends journalism-level storytelling with data-driven execution to build social presences that are consistent, on-brand and outcome-focused.",
      "She has worked with education brands, media houses and corporate clients, planning and running campaigns that improve reach, meaningful engagement and conversion.",
      "Beyond social, she supports SEO-focused content and guest posting, helping brands grow both visibility and authority.",
    ],
    linkedIn: "https://www.linkedin.com/in/trisha-nandy-a14688203/",
  },
];


