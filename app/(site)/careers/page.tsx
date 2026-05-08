import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Clock,
  MapPin,
  Sparkles,
  Rocket,
  Users,
  GraduationCap,
  HeartHandshake,
  Wifi,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers | BrandMarketing",
  description:
    "Join BrandMarketing and help ambitious brands grow. Explore current openings across marketing, engineering and design.",
};

type Department = "Marketing" | "Engineering" | "Design" | "Operations";

type JobPosting = {
  id: string;
  title: string;
  department: Department;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  location: string;
  experience: string;
  description: string;
  skills: string[];
};

const openings: JobPosting[] = [
  {
    id: "performance-marketer",
    title: "Performance Marketer",
    department: "Marketing",
    type: "Full-time",
    location: "Kolkata · Remote-friendly",
    experience: "2–4 years",
    description:
      "Own paid acquisition end-to-end across Google Ads, Meta and LinkedIn. Build, test and scale campaigns that hit ROAS targets month after month.",
    skills: ["Google Ads", "Meta Ads", "GA4", "Conversion tracking", "Funnel design"],
  },
  {
    id: "seo-strategist",
    title: "SEO Strategist",
    department: "Marketing",
    type: "Full-time",
    location: "Kolkata · Remote-friendly",
    experience: "2–4 years",
    description:
      "Design and execute technical, on-page and content SEO programs for B2B and eCommerce clients. Comfortable with both audits and execution.",
    skills: ["Technical SEO", "Ahrefs / Semrush", "Search Console", "Content briefs", "Schema"],
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    department: "Marketing",
    type: "Full-time",
    location: "Kolkata · Hybrid",
    experience: "1–3 years",
    description:
      "Plan, ship and report on social content for multiple brands. Equal parts strategist, creative director and community builder.",
    skills: ["Content calendars", "Reels / shorts", "Community management", "Reporting"],
  },
  {
    id: "content-strategist",
    title: "Content Strategist & Writer",
    department: "Marketing",
    type: "Full-time",
    location: "Remote (India)",
    experience: "2+ years",
    description:
      "Turn keyword research and customer interviews into editorial calendars and high-converting content. Strong writing is non-negotiable.",
    skills: ["SEO writing", "Editorial planning", "Copywriting", "Interviewing"],
  },
  {
    id: "fullstack-developer",
    title: "Full-Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Kolkata · Remote-friendly",
    experience: "2–5 years",
    description:
      "Ship fast, secure web apps with Next.js, TypeScript and Node. Collaborate with marketers to instrument analytics, build landing pages and product surfaces.",
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Kolkata · Hybrid",
    experience: "2+ years",
    description:
      "Design landing pages, dashboards and brand systems that convert. Equal love for craft, hierarchy and shipping.",
    skills: ["Figma", "Design systems", "Prototyping", "Conversion design"],
  },
  {
    id: "marketing-intern",
    title: "Digital Marketing Intern",
    department: "Marketing",
    type: "Internship",
    location: "Kolkata · On-site",
    experience: "0–1 year",
    description:
      "Six-month structured internship rotating through SEO, paid ads and social. Hands-on learning with real client accounts and a senior mentor.",
    skills: ["Curiosity", "Spreadsheets", "Writing", "Coachability"],
  },
];

const departmentStyles: Record<Department, { badge: string; dot: string }> = {
  Marketing: {
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    dot: "bg-emerald-500",
  },
  Engineering: {
    badge: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    dot: "bg-indigo-500",
  },
  Design: {
    badge: "bg-pink-50 text-pink-700 ring-pink-100",
    dot: "bg-pink-500",
  },
  Operations: {
    badge: "bg-amber-50 text-amber-700 ring-amber-100",
    dot: "bg-amber-500",
  },
};

const perks: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Wifi,
    title: "Remote-friendly",
    description: "Work where you do your best. Quarterly meetups in Kolkata to stay close.",
  },
  {
    Icon: GraduationCap,
    title: "Learning budget",
    description: "Annual budget for courses, certifications, conferences and books.",
  },
  {
    Icon: Rocket,
    title: "Real ownership",
    description: "Drive entire client outcomes from strategy to execution to reporting.",
  },
  {
    Icon: HeartHandshake,
    title: "Senior mentorship",
    description: "Weekly 1-on-1s with founders. No middle-management theatre.",
  },
  {
    Icon: Users,
    title: "Tight, kind team",
    description: "Small enough that your work is visible. Big enough that you're never alone.",
  },
  {
    Icon: Sparkles,
    title: "Modern tooling",
    description: "Best-in-class tools across SEO, paid, analytics, automation and design.",
  },
];

const valueProps: { value: string; label: string }[] = [
  { value: "50+", label: "Active clients" },
  { value: "10", label: "Service lines" },
  { value: "8+", label: "Years building brands" },
  { value: "100%", label: "Remote-friendly" },
];

const APPLY_EMAIL = "connect@brandmarketing.digital";
function applyHref(role: string) {
  const subject = encodeURIComponent(`Application: ${role}`);
  const body = encodeURIComponent(
    `Hi BrandMarketing team,\n\nI'd like to apply for the ${role} role.\n\n— Brief intro:\n— Years of experience:\n— Portfolio / LinkedIn:\n— Earliest start date:\n\nThanks!`
  );
  return `mailto:${APPLY_EMAIL}?subject=${subject}&body=${body}`;
}

export default function CareersPage() {
  const departments = Object.keys(departmentStyles) as Department[];
  const counts: Record<string, number> = openings.reduce<Record<string, number>>(
    (acc, o) => {
      acc[o.department] = (acc[o.department] ?? 0) + 1;
      return acc;
    },
    {}
  );

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
              Join Our Squad
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Build the future of growth marketing{" "}
              <span className="bg-gradient-to-r from-[#ddbf5d] to-[#50b444] bg-clip-text text-transparent">
                with us.
              </span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              We&apos;re a small, senior team helping ambitious brands grow with strategy,
              creativity and data. If you love shipping work that actually moves the metric, you&apos;ll
              feel right at home.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#openings"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
              >
                See Open Roles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
                  "General application — BrandMarketing"
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Mail className="h-4 w-4" />
                Send us your resume
              </a>
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
          <section aria-labelledby="why-us-heading" className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#50b444]">
                Why join us
              </p>
              <h2
                id="why-us-heading"
                className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                A studio environment, with the ambition of an agency.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {perks.map(({ Icon, title, description }) => (
                <article
                  key={title}
                  className="flex gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-sky-50 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-100"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ddbf5d] to-[#50b444] text-white shadow-md shadow-[#ddbf5d]/30">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="openings"
            aria-labelledby="openings-heading"
            className="scroll-mt-24 space-y-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#50b444]">
                  Open Positions
                </p>
                <h2
                  id="openings-heading"
                  className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
                >
                  {openings.length === 0
                    ? "No active openings right now"
                    : `${openings.length} roles open across the team`}
                </h2>
              </div>
              {openings.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {departments.map((dept) => {
                    const c = counts[dept] ?? 0;
                    if (c === 0) return null;
                    return (
                      <span
                        key={dept}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ring-inset ${departmentStyles[dept].badge}`}
                      >
                        <span
                          aria-hidden
                          className={`h-1.5 w-1.5 rounded-full ${departmentStyles[dept].dot}`}
                        />
                        {dept} · {c}
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {openings.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ddbf5d] to-[#50b444] text-white shadow-md shadow-[#ddbf5d]/30">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  We&apos;re between hiring sprints
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                  We hire in bursts as client work scales. Send your resume and a short note —
                  when the right role opens, you&apos;ll hear from us first.
                </p>
                <a
                  href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
                    "General application — BrandMarketing"
                  )}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
                >
                  <Mail className="h-4 w-4" />
                  Send us your resume
                </a>
              </div>
            ) : (
              <ul className="grid auto-rows-fr gap-4 md:grid-cols-2">
                {openings.map((job) => {
                  const dept = departmentStyles[job.department];
                  return (
                    <li key={job.id}>
                      <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-100">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 space-y-2">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ring-1 ring-inset ${dept.badge}`}
                            >
                              <span
                                aria-hidden
                                className={`h-1.5 w-1.5 rounded-full ${dept.dot}`}
                              />
                              {job.department}
                            </span>
                            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                              {job.title}
                            </h3>
                          </div>
                          <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ddbf5d] to-[#50b444] text-white shadow-md shadow-[#ddbf5d]/30 sm:inline-flex">
                            <Briefcase className="h-5 w-5" strokeWidth={1.75} />
                          </span>
                        </div>

                        <dl className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600">
                          <div className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-[#50b444]" />
                            <dt className="sr-only">Type</dt>
                            <dd>{job.type}</dd>
                          </div>
                          <div className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-[#50b444]" />
                            <dt className="sr-only">Location</dt>
                            <dd>{job.location}</dd>
                          </div>
                          <div className="inline-flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-[#50b444]" />
                            <dt className="sr-only">Experience</dt>
                            <dd>{job.experience}</dd>
                          </div>
                        </dl>

                        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                          {job.description}
                        </p>

                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {job.skills.map((s) => (
                            <li
                              key={s}
                              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                          <a
                            href={applyHref(job.title)}
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
                          >
                            Apply Now
                            <ArrowRight className="h-4 w-4" />
                          </a>
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                          >
                            Ask a question
                          </Link>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/30 p-8 shadow-lg shadow-emerald-100/30 sm:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#50b444]">
                  Don&apos;t see your role?
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Pitch yourself in one short email.
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  If you&apos;re great at what you do and obsessed with growth, we want to know
                  about you — even when nothing&apos;s posted. Tell us what you do best and where
                  you want to take it.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
                    "I'd like to join BrandMarketing"
                  )}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#ddbf5d]/30 transition hover:brightness-105"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Use the contact form
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
