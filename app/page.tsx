import { Linkedin } from "lucide-react";

const LINKEDIN_SOHAIl = "https://www.linkedin.com/in/sohail-islam-b40776181/";
const LINKEDIN_TRISHA = "https://www.linkedin.com/in/trisha-nandy-a14688203/";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 shadow-sm shadow-sky-100 ring-1 ring-slate-200/60 backdrop-blur">
                ROI-First SEO
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Elevate your brand with elite SEO that compounds results.
              </h1>
              <p className="text-lg text-slate-600 sm:text-xl">
                We blend technical excellence, content authority, and conversion science to grow
                traffic that actually converts. White-glove service for teams that demand clarity
                and scale.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
                  href="/contact"
                >
                  Book a Strategy Call
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-slate-300/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"
                  href="/results"
                >
                  See results
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  120+ campaigns managed
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                  Technical + content + CRO
                </div>
              </div>
            </div>
            <div className="relative isolate flex-1">
              <div className="absolute inset-0 -z-10 blur-3xl" aria-hidden>
                <div className="h-full w-full bg-gradient-to-br from-cyan-200/60 via-blue-200/50 to-indigo-200/50" />
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-xl shadow-sky-100 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Traffic Growth
                    </p>
                    <p className="text-2xl font-semibold text-slate-900">+182%</p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md shadow-cyan-200">
                    SEO
                  </div>
                </div>
                <div className="h-40 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 p-4">
                  <div className="h-full rounded-lg bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.2),transparent_35%)]" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg border border-slate-200/80 bg-white p-3 shadow-sm">
                    <p className="text-xs text-slate-500">Avg. Position</p>
                    <p className="text-lg font-semibold text-slate-900">#3.1</p>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-3 shadow-sm">
                    <p className="text-xs text-slate-500">CTR Lift</p>
                    <p className="text-lg font-semibold text-slate-900">+42%</p>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-3 shadow-sm">
                    <p className="text-xs text-slate-500">Leads</p>
                    <p className="text-lg font-semibold text-slate-900">+3.4x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + Value Proposition */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          {/* Logos / social proof */}
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm shadow-sky-50 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Trusted across industries like
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-slate-600 sm:grid-cols-4">
              <div className="text-sm font-semibold tracking-wide">SaaS & Tech Platforms</div>
              <div className="text-sm font-semibold tracking-wide">Fintech & Insurance</div>
              <div className="text-sm font-semibold tracking-wide">Education & EdTech</div>
              <div className="text-sm font-semibold tracking-wide">eCommerce & D2C Brands</div>
              <div className="text-sm font-semibold tracking-wide">Law Firms & Local Services</div>
              <div className="text-sm font-semibold tracking-wide">Healthcare & Aesthetics</div>
              <div className="text-sm font-semibold tracking-wide">Events & Media</div>
              <div className="text-sm font-semibold tracking-wide">B2B Services & Consulting</div>
            </div>
          </div>

          {/* Why choose us cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Why brands stay with us for the long term.
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  Clear strategy, transparent reporting, and a senior team focused on meaningful
                  business metrics – not vanity numbers.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-semibold text-white shadow-md shadow-cyan-200">
                  01
                </span>
                <h3 className="text-sm font-semibold text-slate-900">Technical SEO mastery</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Fix crawling, indexation, and site performance so every page can actually win.
                </p>
              </div>
              <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-xs font-semibold text-white shadow-md shadow-sky-200">
                  02
                </span>
                <h3 className="text-sm font-semibold text-slate-900">Content that converts</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Search-first content and landing pages designed to turn visitors into pipeline.
                </p>
              </div>
              <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-semibold text-white shadow-md shadow-emerald-200">
                  03
                </span>
                <h3 className="text-sm font-semibold text-slate-900">Predictable growth</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Clear roadmaps, projections, and reporting that tie SEO to real revenue.
                </p>
              </div>
              <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-xs font-semibold text-white shadow-md shadow-purple-200">
                  04
                </span>
                <h3 className="text-sm font-semibold text-slate-900">Senior-only team</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Direct access to specialists – no handoffs to juniors or disconnected teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Services */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              What we can do for your growth.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              A senior SEO, social, and automation team working together to build predictable,
              compounding growth – from traffic and visibility to leads, sales, and retention.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            {/* Performance Marketing & Lead Generation */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Performance Marketing & Lead Generation
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Paid campaigns and funnels built to generate high-intent, sales-ready leads.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-1 text-sm text-slate-600 sm:grid-cols-2">
                <li>Google, Meta & LinkedIn campaigns with clear CPL & ROI goals</li>
                <li>Full-funnel lead gen with landing pages, forms & tracking</li>
                <li>CRO, landing page optimization & A/B testing</li>
                <li>GA4, GTM & attribution setup to see what really works</li>
                <li>Funnel diagnostics and “leak fixing” for better conversion</li>
              </ul>
              <div className="mt-4 mt-auto flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-semibold text-white shadow-md shadow-emerald-200">
                    D
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Led by Dhiraj Kumar</p>
                    <p className="text-xs text-slate-500">
                      8+ years running performance campaigns and conversion-focused funnels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation, CRM & Growth Systems */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Automation, CRM & Growth Systems
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  HubSpot & Go High Level systems that turn traffic into pipeline and revenue.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-1 text-sm text-slate-600 sm:grid-cols-2">
                <li>HubSpot & GHL setup, pipelines, forms & tracking</li>
                <li>Lead scoring, segmentation & lifecycle automation</li>
                <li>Email, SMS & WhatsApp nurture sequences</li>
                <li>Cold outreach, follow-up & reactivation systems</li>
                <li>Integrated growth ecosystems across SEO, ads, email & social</li>
              </ul>
              <div className="mt-4 mt-auto flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-xs font-semibold text-white shadow-md shadow-amber-200">
                    D
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Led by Dhiraj Kumar</p>
                    <p className="text-xs text-slate-500">
                      Marketing automation & CRM specialist building end-to-end systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Brand Visibility */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Social Media & Brand Visibility
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Story-driven social strategies that grow your brand where your audience lives.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-1 text-sm text-slate-600 sm:grid-cols-2">
                <li>Platform-specific strategies for Instagram, Facebook, LinkedIn & YouTube</li>
                <li>Paid social campaigns focused on leads, revenue & brand lift</li>
                <li>Content calendars, storytelling & brand-consistent creatives</li>
                <li>Full account management with daily/weekly optimization</li>
                <li>Analytics on reach, engagement, CTR, conversions & growth</li>
              </ul>
              <div className="mt-4 mt-auto flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-semibold text-white shadow-md shadow-indigo-200">
                    T
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Led by Trisha Nandy</p>
                    <p className="text-xs text-slate-500">
                      Social & content specialist focused on performance and storytelling.
                    </p>
                  </div>
                </div>
                <a
                  href={LINKEDIN_TRISHA}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm transition hover:border-sky-400 hover:text-sky-700"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* SEO & Organic Growth */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  SEO & Organic Growth
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  End-to-end SEO that connects search intent, technical excellence, and
                  conversion-focused content.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-1 text-sm text-slate-600 sm:grid-cols-2">
                <li>Full SEO strategy & roadmaps for SaaS, Fintech, EdTech, eCom & Local</li>
                <li>Technical SEO, Core Web Vitals & crawl/index optimization</li>
                <li>Semantic content frameworks & AI Overview–ready content</li>
                <li>Local SEO & Map Pack visibility for calls and walk-ins</li>
                <li>High-authority, relevant link building & digital PR</li>
              </ul>
              <div className="mt-4 mt-auto flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-xs font-semibold text-white shadow-md shadow-cyan-200">
                    S
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Led by Sohail Islam</p>
                    <p className="text-xs text-slate-500">
                      6+ years in SEO for SaaS, Fintech, EdTech, eCom & Local markets.
                    </p>
                  </div>
                </div>
                <a
                  href={LINKEDIN_SOHAIl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm transition hover:border-sky-400 hover:text-sky-700"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-300/80 bg-gradient-to-r from-slate-50 via-sky-50 to-indigo-50 px-5 py-4 text-sm text-slate-700">
            <p>
              Want a roadmap that connects SEO, social, ads and automation for your brand?{" "}
              <span className="font-semibold text-slate-900">
                We’ll map the exact system we’d build for you before you commit.
              </span>
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
            >
              Book a Free Growth & SEO Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              How we turn attention into predictable growth.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              A clear, repeatable process from deep audit to long-term optimization – so you always
              know what&apos;s happening and why.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-5">
            {[
              {
                step: "01",
                title: "Audit",
                body: "Technical, content, analytics & funnel diagnosis to find the real levers.",
              },
              {
                step: "02",
                title: "Strategy",
                body: "Channel, keyword & offer roadmap tied directly to revenue goals.",
              },
              {
                step: "03",
                title: "Execution",
                body: "Content, campaigns, automation & CRO implemented by senior specialists.",
              },
              {
                step: "04",
                title: "Optimization",
                body: "Ongoing testing, iteration and budget shifts based on real data.",
              },
              {
                step: "05",
                title: "Reporting",
                body: "Simple, honest reporting focused on pipeline, not vanity metrics.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-sm shadow-sm shadow-sky-50"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-[11px] font-semibold text-white shadow-md shadow-cyan-200">
                  {item.step}
                </span>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case Studies / Results */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                A few ways we&apos;ve moved the needle.
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Every project is different, but the outcome is the same – more qualified attention,
                more pipeline, more revenue.
              </p>
            </div>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-3">
            <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm shadow-sm shadow-sky-50">
              <div className="flex min-h-[28px] items-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600">
                  SaaS • SEO + Content
                </p>
              </div>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                +182% organic traffic & 3.4x more demos in 9 months.
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                From scattered blogs to a semantic content engine targeting high-intent use cases.
              </p>
              <div className="mt-4 mt-auto space-y-3">
                <dl className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <dt className="text-slate-500">High-intent keywords</dt>
                    <dd className="font-semibold text-slate-900">+54 in top 3</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Demo requests</dt>
                    <dd className="font-semibold text-slate-900">+240%</dd>
                  </div>
                </dl>
                <button className="inline-flex w-max items-center rounded-full bg-sky-50 px-3 py-1.5 text-[11px] font-semibold text-sky-800 shadow-sm shadow-sky-100 transition hover:bg-sky-100">
                  View full breakdown
                </button>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm shadow-sm shadow-sky-50">
              <div className="flex min-h-[28px] items-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Local Services • SEO + Paid + Auto
                </p>
              </div>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                3x inbound calls with a blended SEO + ads funnel.
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Rebuilt local pages, tightened tracking and layered call-focused campaigns with
                automated follow-up.
              </p>
              <div className="mt-4 mt-auto space-y-3">
                <dl className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <dt className="text-slate-500">Local Map Pack</dt>
                    <dd className="font-semibold text-slate-900">Top 3 for 15+ terms</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Cost per lead</dt>
                    <dd className="font-semibold text-slate-900">-38%</dd>
                  </div>
                </dl>
                <button className="inline-flex w-max items-center rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 shadow-sm shadow-emerald-100 transition hover:bg-emerald-100">
                  View full breakdown
                </button>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm shadow-sm shadow-sky-50">
              <div className="flex min-h-[28px] items-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                  Education • Social + Email + Funnels
                </p>
              </div>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                2.7x enrolments with an integrated content + nurture system.
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Social storytelling, lead magnets and lifecycle email built on top of a clean funnel.
              </p>
              <div className="mt-4 mt-auto space-y-3">
                <dl className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <dt className="text-slate-500">Lead-to-enrolment</dt>
                    <dd className="font-semibold text-slate-900">+63%</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Email open rate</dt>
                    <dd className="font-semibold text-slate-900">+38%</dd>
                  </div>
                </dl>
                <button className="inline-flex w-max items-center rounded-full bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold text-indigo-800 shadow-sm shadow-indigo-100 transition hover:bg-indigo-100">
                  View full breakdown
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials & Founders' Quotes */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              What our partners care about most.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Clarity, senior attention and feeling like there&apos;s a real team thinking about
              their growth every week.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <figure className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm shadow-sm shadow-sky-50">
              <p className="text-xs text-slate-600">
                “We finally have an SEO strategy that our leadership understands. The reports focus
                on pipeline, not just impressions.”
              </p>
              <figcaption className="mt-4 flex items-center gap-3 text-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-[11px] font-semibold text-white">
                  B
                </div>
                <div>
                  <p className="font-semibold text-slate-900">B2B SaaS Founder</p>
                  <p className="text-slate-500">Series A • North America</p>
                </div>
              </figcaption>
            </figure>

            <figure className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm shadow-sm shadow-sky-50">
              <p className="text-xs text-slate-600">
                “The team behaves like an in-house growth squad – from ad copy to landing pages and
                CRM, everything is connected.”
              </p>
              <figcaption className="mt-4 flex items-center gap-3 text-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-[11px] font-semibold text-white">
                  M
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Marketing Director</p>
                  <p className="text-slate-500">Healthcare & Aesthetics</p>
                </div>
              </figcaption>
            </figure>

            <figure className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm shadow-sm shadow-sky-50">
              <p className="text-xs text-slate-600">
                “Instead of random tasks, we have a 90-day plan and know exactly what&apos;s coming
                next and what it should produce.”
              </p>
              <figcaption className="mt-4 flex items-center gap-3 text-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-[11px] font-semibold text-white">
                  O
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Operations Lead</p>
                  <p className="text-slate-500">Professional Services</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* AI & Data-Driven SEO */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-8 text-slate-100 shadow-xl shadow-slate-900/40 sm:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300 ring-1 ring-slate-700/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
              AI-Assisted, Human-Led
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              We use AI to go faster, not to replace thinking.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Research, clustering and outlines can be automated – but strategy, positioning and
              brand voice stay 100% human.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="space-y-2 rounded-2xl bg-slate-900/60 p-4 text-sm ring-1 ring-slate-700/80">
              <h3 className="text-sm font-semibold text-slate-50">Research & ideation</h3>
              <p className="text-xs text-slate-300">
                Use AI to cluster keywords, analyse SERPs and uncover angles faster – then we decide
                what&apos;s actually worth pursuing.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-slate-900/60 p-4 text-sm ring-1 ring-slate-700/80">
              <h3 className="text-sm font-semibold text-slate-50">Human-first content & QA</h3>
              <p className="text-xs text-slate-300">
                Every asset is outlined, edited and fact-checked by specialists so it feels on-brand
                and conversion-focused, not robotic.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-slate-900/60 p-4 text-sm ring-1 ring-slate-700/80">
              <h3 className="text-sm font-semibold text-slate-50">AI Search & Overviews</h3>
              <p className="text-xs text-slate-300">
                We structure pages and entities so you&apos;re discoverable in AI Overviews while
                still winning classic organic placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Audit / Intake */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-lg shadow-sky-100 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr),minmax(0,1fr)]">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Get a free Growth & SEO opportunity map.
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Share where you are today and where you want to go – we&apos;ll record a short Loom
                with the biggest opportunities we see across SEO, paid and automation.
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-xs text-slate-600 sm:grid-cols-2">
                <li>Custom Loom or PDF within 3–5 business days</li>
                <li>No obligation, no generic checklists</li>
                <li>Clear 90-day priorities you can execute with or without us</li>
                <li>Honest feedback if SEO/paid isn&apos;t the right lever yet</li>
              </ul>
            </div>

            <form className="space-y-3 text-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Work email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Website URL</label>
                <input
                  type="url"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
                  placeholder="https://"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Main growth goal
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100">
                    <option>More demos / sales calls</option>
                    <option>More trial signups / self-serve</option>
                    <option>More local calls / walk-ins</option>
                    <option>Better quality leads</option>
                    <option>Stronger brand & demand</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Current monthly visitors (rough)
                  </label>
                  <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100">
                    <option>&lt; 5,000</option>
                    <option>5,000 – 25,000</option>
                    <option>25,000 – 100,000</option>
                    <option>100,000+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Anything else we should know?
                </label>
                <textarea
                  rows={3}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2"
                  placeholder="Context, timelines, existing channels…"
                />
              </div>
              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
              >
                Request free growth audit
              </button>
              <p className="mt-1 text-[11px] text-slate-500">
                We&apos;ll respond within 1–2 business days. No spam, no random newsletter.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Answers before you even have to ask.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              A few of the most common questions we hear from founders and marketing leaders.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-sm shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                How long until we see results from SEO?
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Most clients start to see meaningful movement in 3–4 months and compounding growth
                from month 6+, depending on your baseline, competition and implementation speed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-sm shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Can you work with our existing dev or content team?
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Yes. Many of our best results come from tight collaboration – we bring strategy,
                briefs and QA, your team helps ship changes faster.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-sm shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                How do you report on performance?
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                We build a shared dashboard and send a concise monthly summary covering traffic,
                rankings, leads, revenue and what we&apos;re doing next – not just screenshots from
                tools.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-sm shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                What does working together practically look like?
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                You get a dedicated Slack/WhatsApp thread, recurring calls and a shared roadmap.
                You always know who&apos;s doing what and when it will be done.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

