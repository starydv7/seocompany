import type { Metadata } from "next";
import Link from "next/link";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
  BarChart3,
  Camera,
  CheckCircle2,
  Compass,
  Facebook,
  Linkedin,
  MessageSquare,
  Music2,
  Pin,
  Sparkles,
  Target,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | BrandMarketing",
  description:
    "Social media marketing services that build brands, boost engagement, and drive measurable revenue.",
};

export default function SocialMediaPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.09),transparent_35%)]"
      />
      <div className="mx-auto w-full space-y-12 sm:space-y-16">
        {/* Hero */}
        <Reveal>
          <header className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 text-center shadow-xl shadow-indigo-100/40 backdrop-blur sm:p-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-pink-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            Social Growth Engine
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Social Media Marketing Services
          </h1>
          <p className="mt-3 text-base font-semibold text-slate-700 sm:text-xl">
            That Build Brands, Boost Engagement and Drive Revenue
          </p>
          <p className="mx-auto mt-4 w-full text-sm text-slate-600 sm:text-base">
            In today&apos;s digital world, social media is where conversations happen, communities
            form and customers decide what to buy.
          </p>
          <p className="mx-auto mt-2 w-full text-sm text-slate-600 sm:text-base">
            At BrandMarketing, we build social ecosystems that strengthen your brand, amplify your
            voice and convert followers into loyal customers.
          </p>
          <div className="mt-6">
            <Link
              href={HUBSPOT_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ddbf5d]/30 transition hover:brightness-105"
            >
              Book Your Free Social Strategy Consultation
            </Link>
          </div>
          <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Reach</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Audience first strategies</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Engagement</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Creative content systems</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Revenue</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Performance driven execution</p>
            </div>
          </div>
          </header>
        </Reveal>

        {/* Why Social Matters */}
        <Reveal>
          <section className="grid gap-8 rounded-3xl border border-slate-200/80 bg-white/90 p-6 text-sm text-slate-700 shadow-xl shadow-indigo-50 sm:p-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why Social Media Marketing Matters in 2025
            </h2>
            <p className="text-base font-semibold text-slate-800">Social platforms are essential.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>Over 5 billion people use social media daily.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>Social engagement enhances brand trust and recall.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>Key platforms are now integral parts of the buyer journey.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>Smart strategies drive traffic, leads, and sales with measurable ROI.</span>
              </li>
            </ul>
            <p className="pt-1 text-sm font-medium text-slate-800">
              At BrandMarketing, we focus on strategies that deliver both long-term brand equity and
              short-term business results.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-indigo-50/70 to-cyan-50/70 p-6">
            <h3 className="text-base font-semibold text-slate-900">Execution Pillars</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-white/70 bg-white/70 px-3 py-2">
                <Compass className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-medium text-slate-700">Full funnel social strategy</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/70 bg-white/70 px-3 py-2">
                <Camera className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-slate-700">Always on content planning</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/70 bg-white/70 px-3 py-2">
                <Users className="h-4 w-4 text-cyan-600" />
                <span className="text-sm font-medium text-slate-700">Community management</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/70 bg-white/70 px-3 py-2">
                <Target className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-slate-700">Paid social and retargeting</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/70 bg-white/70 px-3 py-2">
                <BarChart3 className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">Reporting and optimization</span>
              </div>
            </div>
          </div>
          </section>
        </Reveal>

        {/* Service pillars */}
        <Reveal>
          <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Our Social Media Marketing Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* 1. Strategic Social Media Planning */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50 transition hover:-translate-y-0.5 hover:shadow-indigo-100">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Compass className="h-5 w-5 text-indigo-600" />
                Strategic Social Media Planning
              </h3>
              <p className="mt-3 text-slate-700">
                We begin with deep audience research and competitive analysis to build a
                data-backed, goal-oriented social strategy that aligns with your business
                objectives, whether that&apos;s brand awareness, lead generation, or ecommerce growth.
              </p>
            </article>

            {/* 2. Content Creation */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50 transition hover:-translate-y-0.5 hover:shadow-indigo-100">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Camera className="h-5 w-5 text-pink-600" />
                Social Content Creation and Publishing
              </h3>
              <p className="mt-3 font-medium text-slate-800">Content that stops and converts:</p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>Platform specific creative, carousel posts, Reels, Stories, short form video</li>
                <li>Brand storytelling that builds connection</li>
                <li>Messaging designed for engagement, not just visibility</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                We craft posts that strengthen relationships and encourage interactions, not just
                scroll-bys.
              </p>
            </article>

            {/* 3. Organic & Community */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50 transition hover:-translate-y-0.5 hover:shadow-indigo-100">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Users className="h-5 w-5 text-cyan-600" />
                Organic Social Growth and Community Management
              </h3>
              <p className="mt-3 text-slate-700">
                Strong communities convert. We grow your following organically and manage
                interactions so your audience feels heard and valued, from comments and DMs to
                community engagement.
              </p>
            </article>

            {/* 4. Paid Social */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50 transition hover:-translate-y-0.5 hover:shadow-indigo-100">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Target className="h-5 w-5 text-violet-600" />
                Paid Social Advertising
              </h3>
              <p className="mt-3 font-medium text-slate-800">
                Target the right people with high-impact ads:
              </p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>Custom audience creation</li>
                <li>Conversion-focused ad creatives</li>
                <li>Optimized bidding &amp; budget allocation</li>
                <li>A/B testing for continuous improvement</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                Paid and organic strategies work together for maximum impact.
              </p>
            </article>

            {/* 5. Analytics */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50 transition hover:-translate-y-0.5 hover:shadow-indigo-100 md:col-span-2">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <BarChart3 className="h-5 w-5 text-emerald-600" />
                Social Performance Analytics and Reporting
              </h3>
              <p className="mt-3 text-slate-700">
                We track what matters, engagement, reach, click-through, conversions, and revenue
                impact, and deliver transparent, actionable insights so you always know the ROI of
                your social efforts.
              </p>
            </article>
          </div>
          </section>
        </Reveal>

        {/* Platforms */}
        <Reveal>
          <section className="space-y-6 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-indigo-50 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Social Media Platforms We Master
          </h2>
          <p className="text-sm text-slate-700 sm:text-base">
            We manage and optimize campaigns across all key platforms where your audience spends
            time:
          </p>
          <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <article className="group rounded-xl border border-slate-200/70 bg-slate-50/60 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Facebook className="h-4 w-4" />
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-pink-100 text-pink-700">
                  <Camera className="h-4 w-4" />
                </span>
              </div>
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">Facebook &amp; Instagram</span>, Community, ads and storytelling
              </p>
            </article>
            <article className="group rounded-xl border border-slate-200/70 bg-slate-50/60 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md">
              <div className="mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Twitter className="h-4 w-4" />
                </span>
              </div>
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">X (formerly Twitter)</span>, Conversations and topical authority
              </p>
            </article>
            <article className="group rounded-xl border border-slate-200/70 bg-slate-50/60 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md">
              <div className="mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f2ff] text-[#0a66c2]">
                  <Linkedin className="h-4 w-4" />
                </span>
              </div>
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">LinkedIn</span>, B2B branding and thought leadership
              </p>
            </article>
            <article className="group rounded-xl border border-slate-200/70 bg-slate-50/60 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md">
              <div className="mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-900">
                  <Music2 className="h-4 w-4" />
                </span>
              </div>
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">TikTok</span>, Viral reach and high impact short form content
              </p>
            </article>
            <article className="group rounded-xl border border-slate-200/70 bg-slate-50/60 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md">
              <div className="mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <Youtube className="h-4 w-4" />
                </span>
              </div>
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">YouTube</span>, Search optimized video content
              </p>
            </article>
            <article className="group rounded-xl border border-slate-200/70 bg-slate-50/60 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md">
              <div className="mb-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  <Pin className="h-4 w-4" />
                </span>
              </div>
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">Pinterest</span>, Discovery and ecommerce traffic
              </p>
            </article>
          </div>
          <p className="pt-2 text-sm text-slate-700">
            Each platform has its unique purpose, we tailor strategies, content, and messaging for
            maximum results on every channel.
          </p>
          </section>
        </Reveal>

        {/* What makes us different */}
        <Reveal>
          <section className="space-y-6 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-indigo-50 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What Makes Social Media At BrandMarketing Different
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Compass className="h-4 w-4 text-indigo-600" />
                Integrated Growth Strategy
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                We don&apos;t treat social media as an isolated channel. It&apos;s integrated with your digital marketing ecosystem, supporting SEO, web traffic, conversion optimization, and lead nurturing.
              </p>
            </div>
            <div className="space-y-1 rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Sparkles className="h-4 w-4 text-pink-600" />
                Data Driven Creativity
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                We combine analytics and creative storytelling so your social content not only performs, it converts.
              </p>
            </div>
            <div className="space-y-1 rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Users className="h-4 w-4 text-cyan-600" />
                Tailored to Your Audience
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Your audience isn&apos;t generic, so neither are our strategies. We build campaigns that reflect your brand, voice, and customer preferences.
              </p>
            </div>
            <div className="space-y-1 rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                Transparent Reporting and Collaboration
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                You&apos;ll always know what we&apos;re doing, why we&apos;re doing it, and how it&apos;s driving your business growth.
              </p>
            </div>
          </div>
          </section>
        </Reveal>

        {/* Who we help */}
        <Reveal>
          <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-indigo-50 sm:p-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Who We Help
          </h2>
          <p className="mb-6 text-base text-slate-600">
            BrandMarketing works with:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="group rounded-xl border border-slate-200/70 bg-gradient-to-br from-white to-indigo-50/30 p-4 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                <Users className="h-4 w-4" />
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                Small and local businesses looking to get noticed
              </p>
            </article>
            <article className="group rounded-xl border border-slate-200/70 bg-gradient-to-br from-white to-cyan-50/30 p-4 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                <BarChart3 className="h-4 w-4" />
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                Ecommerce brands wanting more sales
              </p>
            </article>
            <article className="group rounded-xl border border-slate-200/70 bg-gradient-to-br from-white to-violet-50/30 p-4 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-md">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                <MessageSquare className="h-4 w-4" />
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                Service providers seeking community engagement
              </p>
            </article>
            <article className="group rounded-xl border border-slate-200/70 bg-gradient-to-br from-white to-emerald-50/30 p-4 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Target className="h-4 w-4" />
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                Enterprises optimizing multi channel campaigns
              </p>
            </article>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            From startups to established brands, our social media marketing services scale with your
            ambition.
          </p>
          </section>
        </Reveal>

        {/* Final CTA */}
        <Reveal>
          <section className="rounded-3xl border-2 border-dashed border-pink-200 bg-gradient-to-br from-pink-50 via-indigo-50 to-cyan-50 p-6 text-center shadow-lg shadow-pink-100/50 sm:p-12">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to Turn Social into Your Growth Engine?
          </h2>
          <p className="mb-4 text-sm text-slate-700 sm:text-base">
            Your competitors are already using social media to grow. Don&apos;t fall behind, lead
            the conversation instead of reacting to it.
          </p>
          <Link
            href={HUBSPOT_MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ddbf5d] to-[#50b444] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ddbf5d]/30 transition hover:brightness-105"
          >
            Book Your Free Social Strategy Consultation with BrandMarketing Today
          </Link>
          </section>
        </Reveal>
      </div>
    </section>
  );
}


