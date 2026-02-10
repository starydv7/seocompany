import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | BrandMarketing Digital",
  description:
    "Social media marketing services that build brands, boost engagement, and drive measurable revenue.",
};

export default function SocialMediaPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Hero */}
        <header className="space-y-5 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Social Media Marketing Services
          </h1>
          <p className="text-lg font-semibold text-slate-700 sm:text-xl">
            That Build Brands, Boost Engagement &amp; Drive Revenue
          </p>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
            In today&apos;s digital world, social media is where conversations happen, communities
            form, and customers decide what to buy.
          </p>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
            At Brand Digital, we don&apos;t just post content — we build social ecosystems that
            strengthen your brand, amplify your voice, and convert followers into loyal customers.
            Whether you&apos;re a local business, ecommerce brand, or enterprise organization, our
            social media marketing strategies are tailored to your audience, goals, and growth
            ambitions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:shadow-indigo-200 hover:brightness-105"
            >
              Book Your Free Social Strategy Consultation
            </Link>
          </div>
        </header>

        {/* Why Social Matters */}
        <section className="grid gap-8 rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-sm text-slate-700 shadow-xl shadow-indigo-50 sm:p-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why Social Media Marketing Matters in 2025
            </h2>
            <p className="text-base font-semibold text-slate-800">
              Social platforms are no longer optional — they&apos;re essential.
            </p>
            <ul className="space-y-2">
              <li>Over 5 billion people use social media daily — that&apos;s a massive opportunity for visibility.</li>
              <li>Social engagement enhances brand trust and recall.</li>
              <li>Platforms like Facebook, Instagram, X, LinkedIn, TikTok, and YouTube are now integral parts of the buyer journey.</li>
              <li>Smart social strategies drive traffic, leads, and sales with measurable ROI.</li>
            </ul>
            <p className="pt-1 text-sm font-medium text-slate-800">
              At Brand Digital, we focus on strategies that deliver both long-term brand equity and
              short-term business results.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6">
            <h3 className="text-base font-semibold text-slate-900">
              Our Social Media Marketing Services
            </h3>
            <p className="text-sm">
              We design and execute social strategies that connect, engage, and convert your ideal
              audience across platforms.
            </p>
            <ul className="space-y-1.5 text-sm">
              <li>Full-funnel social strategy</li>
              <li>Always-on content &amp; campaign planning</li>
              <li>Community management &amp; engagement</li>
              <li>Paid social advertising &amp; retargeting</li>
              <li>Reporting and optimization cycles</li>
            </ul>
          </div>
        </section>

        {/* Service pillars */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Our Social Media Marketing Services
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* 1. Strategic Social Media Planning */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50">
              <h3 className="text-lg font-semibold text-slate-900">
                🔥 1. Strategic Social Media Planning
              </h3>
              <p className="mt-3 text-slate-700">
                We begin with deep audience research and competitive analysis to build a
                data-backed, goal-oriented social strategy that aligns with your business
                objectives — whether that&apos;s brand awareness, lead generation, or ecommerce growth.
              </p>
            </article>

            {/* 2. Content Creation */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50">
              <h3 className="text-lg font-semibold text-slate-900">
                📱 2. Social Content Creation &amp; Publishing
              </h3>
              <p className="mt-3 font-medium text-slate-800">Content that stops and converts:</p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>Platform-specific creative — carousel posts, Reels, Stories, short-form video</li>
                <li>Brand storytelling that builds connection</li>
                <li>Messaging designed for engagement, not just visibility</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                We craft posts that strengthen relationships and encourage interactions, not just
                scroll-bys.
              </p>
            </article>

            {/* 3. Organic & Community */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50">
              <h3 className="text-lg font-semibold text-slate-900">
                📊 3. Organic Social Growth &amp; Community Management
              </h3>
              <p className="mt-3 text-slate-700">
                Strong communities convert. We grow your following organically and manage
                interactions so your audience feels heard and valued — from comments and DMs to
                community engagement.
              </p>
            </article>

            {/* 4. Paid Social */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50">
              <h3 className="text-lg font-semibold text-slate-900">
                🎯 4. Paid Social Advertising
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
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-indigo-50 md:col-span-2">
              <h3 className="text-lg font-semibold text-slate-900">
                📈 5. Social Performance Analytics &amp; Reporting
              </h3>
              <p className="mt-3 text-slate-700">
                We track what matters — engagement, reach, click-through, conversions, and revenue
                impact — and deliver transparent, actionable insights so you always know the ROI of
                your social efforts.
              </p>
            </article>
          </div>
        </section>

        {/* Platforms */}
        <section className="space-y-6 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-indigo-50 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Social Media Platforms We Master
          </h2>
          <p className="text-sm text-slate-700 sm:text-base">
            We manage and optimize campaigns across all key platforms where your audience spends
            time:
          </p>
          <div className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">Facebook &amp; Instagram</span> – Community, ads &amp; storytelling
              </p>
            </div>
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">X (formerly Twitter)</span> – Conversations &amp; topical authority
              </p>
            </div>
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">LinkedIn</span> – B2B branding &amp; thought leadership
              </p>
            </div>
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">TikTok</span> – Viral reach &amp; high-impact short-form content
              </p>
            </div>
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">YouTube</span> – Search-optimized video content
              </p>
            </div>
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">Pinterest</span> – Discovery and ecommerce traffic
              </p>
            </div>
          </div>
          <p className="pt-2 text-sm text-slate-700">
            Each platform has its unique purpose — we tailor strategies, content, and messaging for
            maximum results on every channel.
          </p>
        </section>

        {/* What makes us different */}
        <section className="space-y-6 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-indigo-50 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What Makes Social Media At Brand Digital Different
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <p className="text-sm font-semibold text-slate-900">
                ✔ Integrated Growth Strategy
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                We don&apos;t treat social media as an isolated channel. It&apos;s integrated with your digital marketing ecosystem — supporting SEO, web traffic, conversion optimization, and lead nurturing.
              </p>
            </div>
            <div className="space-y-1 rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <p className="text-sm font-semibold text-slate-900">
                ✔ Data-Driven Creativity
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                We combine analytics and creative storytelling so your social content not only performs — it converts.
              </p>
            </div>
            <div className="space-y-1 rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <p className="text-sm font-semibold text-slate-900">
                ✔ Tailored to Your Audience
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Your audience isn&apos;t generic — so neither are our strategies. We build campaigns that reflect your brand, voice, and customer preferences.
              </p>
            </div>
            <div className="space-y-1 rounded-xl border border-slate-200/60 bg-slate-50/30 p-5">
              <p className="text-sm font-semibold text-slate-900">
                ✔ Transparent Reporting &amp; Collaboration
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                You&apos;ll always know what we&apos;re doing, why we&apos;re doing it, and how it&apos;s driving your business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Who we help */}
        <section className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-indigo-50 sm:p-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Who We Help
          </h2>
          <p className="mb-6 text-base text-slate-600">
            Brand Digital works with:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="text-sm font-medium leading-relaxed text-slate-700">
                Small &amp; local businesses looking to get noticed
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="text-sm font-medium leading-relaxed text-slate-700">
                Ecommerce brands wanting more sales
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="text-sm font-medium leading-relaxed text-slate-700">
                Service providers seeking community engagement
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4">
              <p className="text-sm font-medium leading-relaxed text-slate-700">
                Enterprises optimizing multi-channel campaigns
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            From startups to established brands, our social media marketing services scale with your
            ambition.
          </p>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border-2 border-dashed border-pink-200 bg-gradient-to-br from-pink-50 via-indigo-50 to-cyan-50 p-8 text-center shadow-lg shadow-pink-100/50 sm:p-12">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to Turn Social into Your Growth Engine?
          </h2>
          <p className="mb-4 text-sm text-slate-700 sm:text-base">
            Your competitors are already using social media to grow. Don&apos;t fall behind — lead
            the conversation instead of reacting to it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:shadow-indigo-200 hover:brightness-105"
          >
            Book Your Free Social Strategy Consultation with BrandMarketing Digital Today
          </Link>
        </section>
      </div>
    </section>
  );
}


