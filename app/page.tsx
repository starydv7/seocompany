import { Linkedin } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";

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
                BrandMarketing
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Where Creativity Meets Conversion
              </h1>
              <p className="text-lg text-slate-600 sm:text-xl">
                We don't just build brands, we build businesses. From defining your identity to dominating search results, BrandMarketing is your partner in digital growth.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Free Audit
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

      {/* Introduction: Who We Are */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Data-Driven Strategies. Human-Centric Design.
            </h2>
            <p className="text-lg text-slate-600 sm:text-xl">
              In a crowded digital landscape, noise is easy to make. Impact is hard to achieve.
            </p>
            <div className="space-y-4 text-base text-slate-700">
              <p>
                At BrandMarketing, we bridge the gap between art and science. We believe
                that stunning branding is useless without visibility, and high traffic is
                meaningless without conversion. We fuse aesthetic excellence with rigorous
                performance tracking to ensure every dollar you spend returns value to your bottom
                line.
              </p>
              <p className="font-semibold text-slate-900">
                Our Philosophy: We don&apos;t guess. We test, we optimize, and we scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why Choose Us?
            </h2>
          </div>
          <div className="space-y-4">

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Full-Funnel Approach</h3>
                <p className="mt-2 text-sm text-slate-600">
                  We don&apos;t operate in silos. Your SEO team talks to your Ads team to ensure a
                  cohesive strategy.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Transparency First</h3>
                <p className="mt-2 text-sm text-slate-600">
                  You get access to live reporting dashboards. No hidden fees, no jargon-filled
                  excuses.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Agile Execution</h3>
                <p className="mt-2 text-sm text-slate-600">
                  The digital world moves fast. We pivot strategies in real-time based on data, not
                  hunches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services: The Growth Ecosystem */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Our Services: The Growth Ecosystem
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* 1. Branding & Identity */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Branding & Identity</h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Build a legacy, not just a logo.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Your brand is your promise. We help you articulate who you are, what you stand
                  for, and why it matters.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <p className="text-xs font-semibold text-slate-700">Deliverables:</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Visual Identity Systems</li>
                  <li>• Brand Voice Guidelines</li>
                  <li>• Logo Design</li>
                  <li>• Rebranding Strategy</li>
              </ul>
              </div>
            </div>

            {/* 2. Social Media Management */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-md">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                  </div>
                  <div>
                <h3 className="text-lg font-semibold text-slate-900">Social Media Management</h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Spark conversations that convert.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  We turn passive scrollers into loyal community members. Our team curates content
                  that resonates with your audience and aligns with current trends.
                    </p>
                  </div>
              <div className="mt-auto pt-4">
                <p className="text-xs font-semibold text-slate-700">Deliverables:</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Content Calendar Creation</li>
                  <li>• Community Management</li>
                  <li>• Influencer Collaborations</li>
                  <li>• Reels/Short-form Video Production</li>
                </ul>
              </div>
            </div>

            {/* 3. Search Engine Optimization (SEO) */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Be found when it matters most.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  We move you up the ladder of search results using ethical, white-hat techniques.
                  We focus on technical excellence and content authority.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <p className="text-xs font-semibold text-slate-700">Deliverables:</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Technical Site Audits</li>
                  <li>• Keyword Strategy</li>
                  <li>• On-Page Optimization</li>
                  <li>• Link Building</li>
              </ul>
              </div>
            </div>

            {/* 4. Performance Marketing */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Performance Marketing</h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Scale with precision.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  We focus on the metrics that actually move the needle. We treat your budget as if
                  it were our own, constantly calculating the efficiency of your campaigns.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <p className="text-xs font-semibold text-slate-700">The Formula:</p>
                <p className="mt-2 text-xs text-slate-600">
                  We focus on optimizing your specific equation: ROI, CPA, LTV, and conversion rates
                  that drive real business growth.
                </p>
              </div>
            </div>

            {/* 5. Paid Ads (PPC & Social) */}
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50 backdrop-blur">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Paid Ads (PPC & Social)</h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Instant traffic, targeted results.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Whether it&apos;s Google, Meta (Facebook/Instagram), or LinkedIn, we craft
                  high-converting ad campaigns that target your ideal customer at the perfect
                  moment.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <p className="text-xs font-semibold text-slate-700">Deliverables:</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  <li>• Campaign Setup</li>
                  <li>• A/B Testing Creatives</li>
                  <li>• Retargeting Strategies</li>
                  <li>• Landing Page Optimization</li>
              </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Process: How We Work */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              The Process: How We Work
            </h2>
          </div>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                body: "We dive deep into your industry, competitors, and current pain points.",
              },
              {
                step: "02",
                title: "Strategy",
                body: "We build a roadmap tailored to your budget and KPIs (Key Performance Indicators).",
              },
              {
                step: "03",
                title: "Execution",
                body: "Our creative and technical teams launch your campaigns.",
              },
              {
                step: "04",
                title: "Optimization",
                body: "We analyze data to refine, improve, and scale.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm shadow-sky-50"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-md shadow-cyan-200">
                  {item.step}
                </span>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <p className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
              Client Testimonials
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Real Feedback From Businesses We Helped Grow
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Clear communication, measurable results, and practical execution that business owners
              can trust.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <figure className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm shadow-sky-50 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-100">
              <div className="pointer-events-none absolute right-5 top-4 text-4xl font-serif text-slate-200">
                &quot;
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                The application development support was highly professional, detail-oriented, and
                reliable. The project was delivered with strong technical execution, clear
                communication, and a practical understanding of healthcare workflow needs.
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white">
                  DB
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Dr Biswaroop Chakarborty</p>
                  <p className="text-slate-500">AIIMS, Delhi - Mother and Child Department</p>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm shadow-sky-50 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-100">
              <div className="pointer-events-none absolute right-5 top-4 text-4xl font-serif text-slate-200">
                &quot;
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                As a small business owner, I had no idea about digital marketing. They guided me
                step by step and helped me run my first successful ad campaign. Very supportive and
                transparent.
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-xs font-semibold text-white">
                  DB
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Debika Banerjee</p>
                  <p className="text-slate-500">Founder, Barfi Resturant</p>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm shadow-sky-50 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-100">
              <div className="pointer-events-none absolute right-5 top-4 text-4xl font-serif text-slate-200">
                &quot;
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                I worked with this team for lead generation campaigns and saw a noticeable
                improvement within the first 2 weeks. The communication was clear and they
                explained everything in simple terms. Highly recommended for anyone looking to
                scale their business online.
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-semibold text-white">
                  SS
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Subharata Sinha</p>
                  <p className="text-slate-500">District Yellow Pages</p>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm shadow-sky-50 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-100">
              <div className="pointer-events-none absolute right-5 top-4 text-4xl font-serif text-slate-200">
                &quot;
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Professional and result-oriented approach. The team understood my requirements
                quickly and delivered beyond expectations. Looking forward to long-term
                collaboration.
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-xs font-semibold text-white">
                  PS
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Pramod Sharma</p>
                  <p className="text-slate-500">CEO, Shifto</p>
                </div>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm shadow-sky-50 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-100">
              <div className="pointer-events-none absolute right-5 top-4 text-4xl font-serif text-slate-200">
                &quot;
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Even the initial consultation itself was very valuable. They pointed out gaps in my
                marketing strategy that I had never noticed before. Great experience overall.
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-xs font-semibold text-white">
                  K
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Kayan</p>
                  <p className="text-slate-500">Kayan Trades</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/30 p-8 shadow-lg shadow-sky-100 sm:p-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-lg text-slate-600 sm:text-xl">
              Stop leaving revenue on the table. Let&apos;s discuss how we can elevate your brand
              and multiply your ROI.
            </p>
            <div className="pt-4">
              <a
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
              >
                Schedule a Strategy Call
              </a>
            </div>
            <div className="pt-8 space-y-3 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-700">Phone:</span>{" "}
                <a href="tel:+917003427553" className="hover:text-slate-900">
                  +91 70034 27553
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Location:</span> Kolkata, India
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

