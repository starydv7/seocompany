import type { Metadata } from "next";
import Link from "next/link";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import { BarChart3, Brush, Code2, Compass, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us | BrandMarketing",
  description:
    "Meet the minds behind the metrics, a collective of strategists, creators, and analysts obsessed with growth.",
};

type AboutMember = {
  title: string;
  name: string;
  role: string;
  quote: string;
  description: string;
  superpower: string;
};

const members: AboutMember[] = [
  {
    title: "The Visionary",
    name: "Dhiraj Kumar Yadav",
    role: "Founder & Automation Specialist",
    quote: "Marketing is no longer about the stuff that you make, but about the stories you tell.",
    description:
      "Dhiraj founded BrandMarketing to end the war between branding and sales. He sets the north star strategy for every client, making sure long term positioning aligns with day to day execution.",
    superpower: "Seeing the big picture before the puzzle pieces are even out of the box.",
  },
  {
    title: "The Data Architect",
    name: "Sohail Islam",
    role: "Co Founder & Head of Performance & SEO",
    quote: "If you can't measure it, you can't improve it.",
    description:
      "Sohail builds the measurement and performance infrastructure that turns creative ideas into predictable outcomes. From technical SEO to paid acquisition, he treats every budget like it is his own.",
    superpower: "Turning a confusing 100 page data report into a 1 page action plan.",
  },
  {
    title: "The Visual Storyteller",
    name: "Trisha Nandy",
    role: "Co Founder & Social Media Manager",
    quote: "Design is the silent ambassador of your brand.",
    description:
      "Trisha makes sure your brand does not just show up, it stands out. From logo concepts to the aesthetics of your social presence, she protects your identity with sharp detail and consistency.",
    superpower: "Translating complex business concepts into stunning, simple visuals.",
  },
  {
    title: "The Performance Engine",
    name: "Saitika Bhowmik",
    role: "Performance Marketer",
    quote: "If you can't measure it, you can't improve it.",
    description:
      "Saitika brings 7 years of digital marketing and 5 years of performance marketing expertise. She designs and optimizes Google Ads strategies, manages paid social campaigns (Meta, Instagram, LinkedIn, Pinterest), and implements marketing automation for clients across USA, Australia, Canada, and domestic markets. DV360 certified with hands-on programmatic advertising experience.",
    superpower: "Turning ad spend into predictable ROI through data-driven optimization.",
  },
  {
    title: "The Technical Guru",
    name: "Pawan Yadav",
    role: "Co Founder & Lead Developer",
    quote: "Great marketing needs great systems behind it.",
    description:
      "Pawan turns growth requirements into fast, secure, scalable web and mobile experiences. From tracking and analytics to full product builds, he makes sure the tech foundation can handle real users and real scale.",
    superpower: "Shipping reliable products that feel simple, even when the system is complex.",
  },
];

export default function AboutPage() {
  const memberIcons = [Compass, BarChart3, Brush, Sparkles, Code2];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_35%)]"
      />
      <div className="mx-auto max-w-6xl space-y-12">
        <Reveal>
          <header className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-sky-100/40 backdrop-blur sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            Meet The Team
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The Minds Behind the Metrics
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
            We are a collective of strategists, creators, and data analysts. While we each have our
            own specialty, from color theory to keyword density, we&apos;re united by a single
            obsession: <span className="font-semibold text-slate-900">Growth.</span>
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Strategy</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Data led decision making</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Creative</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Strong identity and content</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Execution</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Fast systems for growth</p>
            </div>
          </div>
          </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {members.map((m, index) => {
            const Icon = memberIcons[index % memberIcons.length];
            return (
              <Reveal key={m.name} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-sm shadow-sm shadow-sky-50 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-100/60">
                  <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" />
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                      <Icon className="h-3.5 w-3.5 text-indigo-600" />
                      {m.title}
                    </div>
                    <h2 className="text-lg font-semibold tracking-tight text-slate-900">{m.name}</h2>
                    <p className="text-xs font-medium text-slate-600">{m.role}</p>
                  </div>

                  <blockquote className="mt-4 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-4 text-xs text-slate-700">
                    “{m.quote}”
                  </blockquote>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700">{m.description}</p>

                  <dl className="mt-5 space-y-2 text-xs text-slate-600">
                    <div>
                      <dt className="font-semibold text-slate-900">Superpower</dt>
                      <dd className="mt-0.5">{m.superpower}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-5">
                    <Link
                      href={HUBSPOT_MEETING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
                    >
                      Work with us
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <section className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-sky-50/40 to-indigo-50/40 p-8 shadow-lg shadow-sky-100/40 sm:p-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                Join Our Squad
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Think you have what it takes?
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                We’re always looking for ambitious talent to join our ranks. If you’re obsessed with
                digital culture and results-driven marketing, we want to hear from you.
              </p>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-200 transition hover:brightness-105"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </section>
  );
}


