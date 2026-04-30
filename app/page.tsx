import { BarChart3, Check, Rocket, Search, ShieldCheck, Target, TrendingUp, Zap } from "lucide-react";
import { Linkedin } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";

const LINKEDIN_SOHAIl = "https://www.linkedin.com/in/sohail-islam-b40776181/";
const LINKEDIN_TRISHA = "https://www.linkedin.com/in/trisha-nandy-a14688203/";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Reveal>
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-[#edf5ff] to-[#e6f2ff] px-4 pb-14 pt-4 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200/80 bg-white/75 p-4 shadow-lg shadow-sky-100 backdrop-blur sm:p-6 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.2fr,0.9fr] lg:items-start lg:gap-10">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide shadow-sm ring-1 ring-slate-200 sm:px-6 sm:py-2.5 sm:text-base">
                <span className="bg-gradient-to-r from-[#ddbf5d] to-[#50b444] bg-clip-text text-transparent">
                BrandMarketing
                </span>
              </div>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                Where Creativity
                <br />
                <span className="bg-gradient-to-r from-[#6c47ff] to-[#ef5f9d] bg-clip-text text-transparent">
                  Meets Conversion
                </span>
              </h1>
              <p className="max-w-xl text-base text-slate-600 sm:text-xl">
                We don't just build brands, we build businesses. From defining your identity to
                dominating search results, BrandMarketing is your partner in digital growth.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 sm:gap-6">
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

            <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl shadow-blue-100 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-md shadow-cyan-200">
                  <Check className="h-6 w-6" strokeWidth={3} />
                </span>
                <h3 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-[34px]">
                  Get a Free <span className="text-[#1f8fff]">SEO</span>
                  <br />
                  &amp; Marketing Audit
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Boost your traffic, leads, and sales with our expert SEO and marketing audit.
                Start with a free, no-obligation consultation.
              </p>
              <div className="mt-4 space-y-2.5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-300"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-300"
                />
                <input
                  type="text"
                  placeholder="Website (optional)"
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-300"
                />
                <a
                  href={HUBSPOT_MEETING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
                >
                  Request Your Free Audit
                </a>
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">
                We respect your privacy. 100% spam-free.
              </p>
            </div>
          </div>
        </div>
        </section>
      </Reveal>

      {/* Introduction: Data-Driven Strategies */}
      <Reveal>
        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-white px-4 py-8 shadow-[0_20px_60px_rgba(108,71,255,0.18)] sm:px-7 sm:py-10 lg:px-12 lg:py-14 xl:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-[340px] w-[340px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(108,71,255,0.07) 0%, transparent 70%)" }}
          />

          <div className="relative z-[1] mb-6 flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#6c47ff] to-[#9b7cff] text-white shadow-[0_8px_24px_rgba(108,71,255,0.35)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="12" width="4" height="9" rx="1" />
                <rect x="10" y="7" width="4" height="14" rx="1" />
                <rect x="17" y="3" width="4" height="18" rx="1" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold leading-[1.12] tracking-[-0.02em] text-[#0f0a1e] sm:text-[clamp(2rem,4vw,2.85rem)]">
              Data-Driven Strategies.
              <br />
              <span className="bg-gradient-to-r from-[#6c47ff] to-[#ff5c87] bg-clip-text text-transparent">
                Human-Centric Design.
              </span>
            </h2>
          </div>

          <p className="relative z-[1] mb-4 text-sm font-bold tracking-[0.01em] text-[#4b4568] sm:text-[1.05rem]">
            In a crowded digital landscape, noise is easy to make. Impact is hard to achieve.
          </p>

          <p className="relative z-[1] max-w-[740px] text-sm leading-[1.75] text-[#8c84a4] sm:text-base">
            At BrandMarketing, we bridge the gap between art and science. We believe that stunning
            branding is useless without visibility, and high traffic is meaningless without
            conversion. We fuse aesthetic excellence with rigorous performance tracking to ensure
            every dollar you spend returns value to your bottom line.
          </p>

          <div className="relative z-[1] my-7 flex items-center gap-2 sm:my-9 sm:gap-5">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[rgba(108,71,255,0.18)] to-transparent" />
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-br from-[#6c47ff] to-[#9b7cff] px-4 py-2 text-xs font-bold text-white shadow-[0_6px_24px_rgba(108,71,255,0.38)] sm:px-7 sm:py-3 sm:text-[0.95rem]">
              Our Philosophy
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[rgba(108,71,255,0.18)] to-transparent" />
          </div>

          <div className="relative z-[1] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-[1fr,auto,1fr,auto,1fr,auto,1fr] lg:items-center">
            <article className="group relative flex flex-col items-center gap-3 rounded-[22px] border-[1.5px] border-[rgba(108,71,255,0.12)] bg-[#faf8ff] px-6 pb-6 pt-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(108,71,255,0.15)]">
              <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#ede8ff] to-[#d6cbff] ring-1 ring-white/60">
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/30 opacity-0 transition group-hover:opacity-100" />
                <Search className="h-7 w-7 text-[#6c47ff] transition duration-300 group-hover:scale-110 group-hover:-rotate-6" />
              </div>
              <div className="text-base font-semibold tracking-[-0.01em] text-[#0f0a1e] sm:text-[1.05rem]">We don&apos;t guess.</div>
              <div className="text-[0.88rem] leading-[1.6] text-[#8c84a4]">Every decision is backed by data and research.</div>
            </article>

            <div className="hidden items-center justify-center text-[#8e73ff]/65 lg:flex">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

            <article className="group relative flex flex-col items-center gap-3 rounded-[22px] border-[1.5px] border-[rgba(108,71,255,0.12)] bg-[#faf8ff] px-6 pb-6 pt-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(239,95,157,0.16)]">
              <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff0f5] to-[#ffd6e4] ring-1 ring-white/60">
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/30 opacity-0 transition group-hover:opacity-100" />
                <Target className="h-7 w-7 text-[#f05f9f] transition duration-300 group-hover:scale-110" />
              </div>
              <div className="text-base font-semibold tracking-[-0.01em] text-[#0f0a1e] sm:text-[1.05rem]">We test.</div>
              <div className="text-[0.88rem] leading-[1.6] text-[#8c84a4]">A/B testing &amp; tracking power every move.</div>
            </article>

            <div className="hidden items-center justify-center text-[#8e73ff]/65 lg:flex">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

            <article className="group relative flex flex-col items-center gap-3 rounded-[22px] border-[1.5px] border-[rgba(108,71,255,0.12)] bg-[#faf8ff] px-6 pb-6 pt-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(47,195,168,0.16)]">
              <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#d6fff4] to-[#a8f5e1] ring-1 ring-white/60">
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/30 opacity-0 transition group-hover:opacity-100" />
                <TrendingUp className="h-7 w-7 text-[#1fbf92] transition duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
              </div>
              <div className="text-base font-semibold tracking-[-0.01em] text-[#0f0a1e] sm:text-[1.05rem]">We optimize.</div>
              <div className="text-[0.88rem] leading-[1.6] text-[#8c84a4]">We refine what works and cut what doesn&apos;t.</div>
            </article>

            <div className="hidden items-center justify-center text-[#8e73ff]/65 lg:flex">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

            <article className="group relative flex flex-col items-center gap-3 rounded-[22px] border-[1.5px] border-[rgba(108,71,255,0.12)] bg-[#faf8ff] px-6 pb-6 pt-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(246,178,79,0.16)]">
              <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff7e0] to-[#ffe5a8] ring-1 ring-white/60">
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/30 opacity-0 transition group-hover:opacity-100" />
                <BarChart3 className="h-7 w-7 text-[#d58c2b] transition duration-300 group-hover:scale-110" />
              </div>
              <div className="text-base font-semibold tracking-[-0.01em] text-[#0f0a1e] sm:text-[1.05rem]">We scale.</div>
              <div className="text-[0.88rem] leading-[1.6] text-[#8c84a4]">We grow what&apos;s proven to drive real results.</div>
            </article>
          </div>
        </div>
        </section>
      </Reveal>

      {/* Why Choose + Process + Testimonials */}
      <Reveal>
        <section className="bg-[#f5f7fc] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-7 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/60 sm:p-8">
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full bg-[#eef3ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6677d3]">
                Why We&apos;re Different
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose <span className="text-[#5f8dff]">Us?</span>
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                We operate with ruthless clarity - no fluff, no siloed teams, no guesswork.
                <br className="hidden sm:block" />
                Just measurable impact.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5f8dff] to-[#37b9ff]" />
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff4ff] text-[#5f8dff]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Full-Funnel Approach</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We don&apos;t operate in silos. Your SEO team talks to your Ads team to ensure a
                  cohesive, compounding strategy.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5be0b8] to-[#30c7b8]" />
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#eafff8] text-[#2fc3a8]">
                  <Search className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Transparency First</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Live reporting dashboards. No hidden fees, no jargon-filled excuses. You see
                  exactly what&apos;s happening, always.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8f65ff] to-[#f05f9f]" />
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4eeff] text-[#9364ff]">
                  <Zap className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Agile Execution</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  The digital world moves fast. We pivot strategies in real-time based on data, not
                  hunches or assumptions.
                </p>
              </article>
            </div>
          </div>

          <div className="space-y-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/60 sm:p-8">
            <div className="text-center">
              <span className="inline-flex rounded-full bg-[#e8fff5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#15b985]">
                Our Methodology
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The Process: <span className="text-[#28c09a]">How We Work</span>
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                A battle-tested four-stage framework built to launch fast and compound over time.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Search, title: "Discovery", body: "We dive deep into your industry, competitors, and current pain points to uncover opportunities.", color: "from-[#8f65ff] to-[#6a5cff]" },
                { icon: Target, title: "Strategy", body: "We build a roadmap tailored to your budget and KPIs - clear milestones, measurable checkpoints.", color: "from-[#4fc5ff] to-[#4f9eff]" },
                { icon: Rocket, title: "Execution", body: "Our creative and technical teams launch your campaigns with precision and speed.", color: "from-[#32d4a4] to-[#1fbf92]" },
                { icon: TrendingUp, title: "Optimization", body: "We analyze data to refine, improve, and scale what&apos;s working for maximum ROI.", color: "from-[#f6b24f] to-[#f58a3f]" },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <span className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow`}>
                    <item.icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/60 sm:p-8">
            <div className="text-center">
              <span className="inline-flex rounded-full bg-[#ffeaf1] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ef5f9d]">
                Client Testimonials
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Real Feedback From Businesses
                <br />
                <span className="bg-gradient-to-r from-[#7b5cff] to-[#ef5f9d] bg-clip-text text-transparent">
                  We Helped Grow
                </span>
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Clear communication, measurable results, and practical execution that business
                owners can trust.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  name: "Dr Biswaroop Chakarborty",
                  role: "AIIMS, Delhi - Mother and Child Department",
                  text: "The application development support was highly professional, detail-oriented, and reliable. The project was delivered with strong technical execution, clear communication, and a practical understanding of healthcare workflow needs.",
                  accent: "from-[#6a5cff] to-[#3eb8ff]",
                  initials: "DC",
                },
                {
                  name: "Debika Banerjee",
                  role: "Founder, Barfi Resturant",
                  text: "As a small business owner, I had no idea about digital marketing. They guided me step by step and helped me run my first successful ad campaign. Very supportive and transparent.",
                  accent: "from-[#28c09a] to-[#3eb8ff]",
                  initials: "DB",
                },
                {
                  name: "Subharata Sinha",
                  role: "District Yellow Pages",
                  text: "I worked with this team for lead generation campaigns and saw a noticeable improvement within the first 2 weeks. Clear communication, simple explanations, highly recommended for anyone looking to scale their business online.",
                  accent: "from-[#8f65ff] to-[#ef5f9d]",
                  initials: "SS",
                },
                {
                  name: "Pramod Sharma",
                  role: "CEO, Shifto",
                  text: "Professional and result-oriented approach. The team understood my requirements quickly and delivered beyond expectations. Looking forward to long-term collaboration with this outstanding team.",
                  accent: "from-[#f6b24f] to-[#ef5f9d]",
                  initials: "PS",
                },
              ].map((item) => (
                <figure key={item.name} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.accent}`} />
                  <div className="pointer-events-none absolute right-4 top-3 text-3xl font-serif text-slate-100">
                    &quot;
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">{item.text}</p>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} text-xs font-semibold text-white`}>
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
        </section>
      </Reveal>

      {/* Footer / Final CTA */}
      <Reveal>
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
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#ddbf5d]/30 transition hover:brightness-105"
              >
                Schedule a Strategy Call
              </a>
            </div>
          </div>
        </div>
        </section>
      </Reveal>
    </>
  );
}

