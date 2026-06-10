import type { Metadata } from "next";
import Link from "next/link";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  MonitorSmartphone,
  Server,
  Palette,
  Cpu,
  Briefcase,
  Workflow,
  Sparkles,
  CheckCircle2,
  Rocket,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Landmark,
  Truck,
  Building2,
  Users,
  Building,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Design and Development | BrandMarketing",
  description:
    "End-to-end software, web, mobile and product engineering. Custom platforms, modern UI and scalable systems built by a senior team.",
};

type Category = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  href: string;
  Icon: LucideIcon;
  accent: string;
  items: string[];
};

const categories: Category[] = [
  {
    id: "software-development",
    title: "Software Development",
    kicker: "Custom systems, built to scale.",
    description:
      "From SaaS products to enterprise platforms — we design, build and ship full-stack software that fits your business.",
    href: "/design-and-development/software-development",
    Icon: Code2,
    accent: "from-cyan-500 via-blue-600 to-indigo-600",
    items: [
      "Custom Software Development",
      "Full Stack Web Development",
      "Enterprise Application Development",
      "SaaS Product Development",
      "Startup MVP Development",
      "API Development & Integration",
      "Cloud-Based Applications",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    kicker: "Websites that perform.",
    description:
      "Marketing sites, dashboards, e-commerce and internal tools — fast, accessible and built on modern stacks.",
    href: "/branding",
    Icon: Globe,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    items: [
      "Corporate Websites",
      "Business Websites",
      "Portfolio Websites",
      "Landing Pages",
      "Admin Dashboards",
      "CRM & ERP Systems",
      "Analytics Platforms",
      "E-commerce Platforms",
      "Booking & Management Systems",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    kicker: "Native feel, cross-platform reach.",
    description:
      "iOS, Android and React Native apps engineered for performance, offline support and real-time experiences.",
    href: "/branding",
    Icon: Smartphone,
    accent: "from-pink-500 via-rose-500 to-orange-500",
    items: [
      "Android App Development",
      "React Native Applications",
      "Cross-Platform Mobile Apps",
      "Business Mobile Applications",
      "Real-Time Applications",
    ],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    kicker: "Modern UI that converts.",
    description:
      "React and TypeScript-led frontends with pixel-perfect interfaces, animations and responsive layouts.",
    href: "/branding",
    Icon: MonitorSmartphone,
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    items: [
      "React.js Development",
      "TypeScript Applications",
      "Modern UI Development",
      "Responsive Web Interfaces",
      "Interactive User Experiences",
      "Tailwind CSS Development",
    ],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    kicker: "APIs, databases, scale.",
    description:
      "Robust Node.js and REST API backends with authentication, integrations and database architecture done right.",
    href: "/branding",
    Icon: Server,
    accent: "from-amber-500 via-orange-500 to-rose-500",
    items: [
      "Node.js & Express.js Development",
      "REST API Development",
      "Authentication Systems",
      "Database Architecture",
      "Firebase Integration",
      "Scalable Backend Systems",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    kicker: "Design that ships.",
    description:
      "User research, wireframes, prototypes and high-fidelity UI for web, mobile and SaaS products.",
    href: "/branding",
    Icon: Palette,
    accent: "from-sky-500 via-cyan-500 to-emerald-500",
    items: [
      "Website UI Design",
      "Mobile App UI Design",
      "Dashboard Design",
      "SaaS Product Design",
      "Wireframing & Prototyping",
      "Responsive UI/UX",
      "Premium Modern Interfaces",
    ],
  },
  {
    id: "product-engineering",
    title: "Product Engineering",
    kicker: "From idea to live product.",
    description:
      "End-to-end product teams handling planning, architecture, feature delivery and ongoing support.",
    href: "/branding",
    Icon: Cpu,
    accent: "from-fuchsia-500 via-purple-500 to-indigo-500",
    items: [
      "End-to-End Product Development",
      "Product Planning & Architecture",
      "Feature Development",
      "Performance Optimization",
      "System Integration",
      "Product Maintenance & Support",
    ],
  },
  {
    id: "business-solutions",
    title: "Business Solutions",
    kicker: "Internal tools that pay back.",
    description:
      "Custom platforms for inventory, employees, customers, billing and analytics — built around your workflow.",
    href: "/branding",
    Icon: Briefcase,
    accent: "from-yellow-500 via-amber-500 to-orange-600",
    items: [
      "Inventory Management Systems",
      "Employee Management Systems",
      "Customer Management Platforms",
      "Billing Systems",
      "Workflow Automation",
      "Reporting & Analytics Systems",
    ],
  },
  {
    id: "development-process",
    title: "Development Process",
    kicker: "Predictable delivery.",
    description:
      "A transparent process from requirement analysis through deployment and post-launch support — no surprises.",
    href: "/branding",
    Icon: Workflow,
    accent: "from-green-500 via-emerald-500 to-teal-500",
    items: [
      "Requirement Analysis",
      "Product Planning",
      "UI/UX Design",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance & Support",
    ],
  },
];

const valueProps: { label: string; value: string }[] = [
  { label: "Products Shipped", value: "100+" },
  { label: "Active Clients", value: "50+" },
  { label: "Years Experience", value: "8+" },
  { label: "Tech Stacks", value: "12+" },
];

const industries: { name: string; Icon: LucideIcon; accent: string }[] = [
  { name: "Startups", Icon: Rocket, accent: "from-orange-500 to-pink-500" },
  { name: "Healthcare", Icon: HeartPulse, accent: "from-rose-500 to-red-500" },
  { name: "Education", Icon: GraduationCap, accent: "from-amber-500 to-orange-500" },
  { name: "E-commerce", Icon: ShoppingBag, accent: "from-fuchsia-500 to-purple-500" },
  { name: "Finance", Icon: Landmark, accent: "from-emerald-500 to-teal-500" },
  { name: "Logistics", Icon: Truck, accent: "from-sky-500 to-blue-500" },
  { name: "Real Estate", Icon: Building2, accent: "from-indigo-500 to-violet-500" },
  { name: "Community Platforms", Icon: Users, accent: "from-cyan-500 to-emerald-500" },
  { name: "Enterprise Businesses", Icon: Building, accent: "from-slate-700 to-slate-500" },
  { name: "Local Businesses", Icon: Store, accent: "from-yellow-500 to-amber-600" },
];

export default function DesignAndDevelopmentPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(80,180,68,0.08),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(221,191,93,0.08),transparent_35%)]"
      />

      <div className="mx-auto w-full space-y-14">
        <Reveal>
          <header className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-emerald-100/30 backdrop-blur sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d]/15 via-[#dde55d]/15 to-[#50b444]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#50b444]">
              <Sparkles className="h-3.5 w-3.5" />
              Design and Development
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              End-to-end software, web and mobile{" "}
              <span className="bg-gradient-to-r from-[#ddbf5d] to-[#50b444] bg-clip-text text-transparent">
                engineered to scale.
              </span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              From custom SaaS platforms to mobile apps, internal tools to e-commerce — we design,
              build and maintain digital products that fit your business and grow with it. Modern
              stacks, senior team, predictable delivery.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore Capabilities
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {valueProps.map((vp) => (
                <div
                  key={vp.label}
                  className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                >
                  <p className="text-2xl font-bold text-[#50b444]">{vp.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {vp.label}
                  </p>
                </div>
              ))}
            </div>
          </header>
        </Reveal>

        <Reveal>
          <section
            aria-labelledby="industries-heading"
            className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-lg shadow-emerald-100/30 backdrop-blur sm:p-10"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#50b444]">
                Industries we serve
              </p>
              <h2
                id="industries-heading"
                className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                Trusted across web, mobile and software projects
              </h2>
            </div>

            <div
              className="marquee-mask group relative mt-8 overflow-hidden"
              style={{ ["--marquee-duration" as string]: "45s" }}
            >
              <div className="flex w-max animate-marquee-ltr gap-4 group-hover:[animation-play-state:paused]">
                {[0, 1].map((dup) => (
                  <ul
                    key={dup}
                    aria-hidden={dup === 1}
                    className="flex shrink-0 items-center gap-4"
                  >
                    {industries.map((ind) => (
                      <li
                        key={`${dup}-${ind.name}`}
                        className="flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${ind.accent} text-white shadow-sm`}
                        >
                          <ind.Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <span className="whitespace-nowrap text-sm font-semibold text-slate-800">
                          {ind.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <div id="categories" className="scroll-mt-24 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#50b444]">
                What we build
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                9 capabilities, one delivery team
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <article
                  key={c.id}
                  id={c.id}
                  className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-sm shadow-sm shadow-sky-50 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-100"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-md`}
                    >
                      <c.Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-base font-semibold tracking-tight text-slate-900">
                        {c.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700">{c.kicker}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700">{c.description}</p>

                  <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-600">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#50b444]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5">
                    <Link
                      href={c.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <section className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/30 p-8 shadow-lg shadow-emerald-100/30 sm:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#50b444]">
                  Have a product in mind?
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Let&apos;s scope it together — for free.
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Tell us what you&apos;re trying to build. We&apos;ll come back with a focused
                  scope, timeline and rough cost — no decks, no fluff, just clarity on what it
                  takes to ship.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
                >
                  Schedule a Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Send us a brief
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
