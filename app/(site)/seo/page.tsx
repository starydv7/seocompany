import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Search Engine Optimization (SEO) Services | BrandMarketing Digital",
  description:
    "SEO services that drive rankings, revenue, and real business growth. Strategy-first, white-hat SEO built for Google’s future.",
};

export default function SeoPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Hero */}
        <header className="space-y-5 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Search Engine Optimization (SEO) Services
          </h1>
          <p className="text-lg font-semibold text-slate-700 sm:text-xl">
            That Drive Rankings, Revenue &amp; Real Business Growth
          </p>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
            If your website isn&apos;t ranking on Google, it isn&apos;t competing. At BrandMarketing
            Digital, we don&apos;t chase vanity metrics – we build search ecosystems that turn
            rankings into traffic, traffic into leads, and leads into revenue.
          </p>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
            Our SEO strategies are engineered for long-term dominance, not short-lived spikes.
            Whether you&apos;re a startup, local business, ecommerce brand, or enterprise, we help
            you own your search space.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
            >
              Get a Free SEO Strategy Call
            </Link>
          </div>
        </header>

        {/* Why SEO ROI */}
        <section className="grid gap-8 rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-sm text-slate-700 shadow-xl shadow-sky-50 sm:p-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why SEO Still Delivers the Highest ROI in Digital Marketing
            </h2>
            <p className="text-base font-semibold text-slate-800">
              Paid ads stop the moment your budget ends. SEO keeps working.
            </p>
            <ul className="space-y-2">
              <li>70%+ of clicks go to organic results.</li>
              <li>Users trust organic rankings more than ads.</li>
              <li>SEO compounds results month after month.</li>
            </ul>
            <p className="pt-1 text-sm font-medium text-slate-800">
              But only strategic, technically sound SEO works in 2025. That&apos;s where Brand
              Digital comes in.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6">
            <h3 className="text-base font-semibold text-slate-900">
              Our SEO Approach: Built for Algorithms, Designed for Humans
            </h3>
            <p className="text-sm">
              We combine technical excellence, semantic relevance, and conversion psychology to
              create SEO campaigns that Google rewards and users engage with.
            </p>
            <p className="text-sm font-medium text-slate-900">Our SEO methodology focuses on:</p>
            <ul className="space-y-1.5 text-sm">
              <li>Search intent, not just keywords</li>
              <li>Topic authority, not isolated pages</li>
              <li>User experience, not keyword stuffing</li>
              <li>Sustainable growth, not risky shortcuts</li>
            </ul>
            <p className="pt-1 text-xs font-medium text-slate-600">
              We follow 100% white-hat SEO practices, aligned with Google&apos;s latest algorithm
              updates.
            </p>
          </div>
        </section>

        {/* Comprehensive SEO Services */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Comprehensive SEO Services by Brand Digital
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Advanced Keyword Research */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-sky-50">
              <h3 className="text-lg font-semibold text-slate-900">
                🔍 Advanced Keyword &amp; Search Intent Research
              </h3>
              <p className="mt-3 text-slate-700">
                We go beyond keyword volume and identify the opportunities that actually move
                revenue.
              </p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>Buyer-intent keywords</li>
                <li>Semantic keyword clusters</li>
                <li>Competitor ranking gaps</li>
                <li>Long-tail conversion opportunities</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                This ensures you rank for searches that actually generate business.
              </p>
            </article>

            {/* Technical SEO */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-sky-50">
              <h3 className="text-lg font-semibold text-slate-900">
                🛠 Technical SEO &amp; Website Optimization
              </h3>
              <p className="mt-3 font-medium text-slate-800">
                A slow or broken website kills rankings. We fix technical debt before it hurts your
                growth.
              </p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>Crawlability &amp; indexation issues</li>
                <li>Site speed &amp; Core Web Vitals</li>
                <li>Mobile usability &amp; UX flaws</li>
                <li>URL structure, schema &amp; internal linking</li>
                <li>Duplicate content &amp; technical errors</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                Your site becomes search-engine-friendly and user-first.
              </p>
            </article>

            {/* On-Page SEO */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-sky-50">
              <h3 className="text-lg font-semibold text-slate-900">
                ✍️ On-Page SEO &amp; Content Optimization
              </h3>
              <p className="mt-3 text-slate-700">
                We optimize every ranking signal so your pages are built to rank and to convert.
              </p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>Page titles &amp; meta descriptions</li>
                <li>Heading structure (H1–H6)</li>
                <li>Content depth &amp; topical relevance</li>
                <li>Internal links &amp; content flow</li>
                <li>Image optimization &amp; accessibility</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                Our content is written to rank AND convert, not just fill space.
              </p>
            </article>

            {/* Link Building */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-sky-50">
              <h3 className="text-lg font-semibold text-slate-900">
                🔗 Authority Link Building &amp; Off-Page SEO
              </h3>
              <p className="mt-3 font-medium text-slate-800">
                Backlinks still matter — but only the right ones.
              </p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>High-authority editorial backlinks</li>
                <li>Niche-relevant placements</li>
                <li>Brand mentions &amp; digital PR links</li>
                <li>Natural anchor text profiles</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                No spam. No PBNs. No penalties.
              </p>
            </article>

            {/* Local SEO */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-sky-50">
              <h3 className="text-lg font-semibold text-slate-900">
                📍 Local SEO for High-Intent Customers
              </h3>
              <p className="mt-3 text-slate-700">
                Perfect for service businesses and multi-location brands that rely on inbound
                calls, bookings, and visits.
              </p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>Google Business Profile optimization</li>
                <li>Local citations &amp; NAP consistency</li>
                <li>Location-specific landing pages</li>
                <li>Reviews &amp; local trust signals</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                Result: more calls, visits, and local conversions.
              </p>
            </article>

            {/* Ecommerce SEO */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-sky-50">
              <h3 className="text-lg font-semibold text-slate-900">
                🛒 Ecommerce &amp; Conversion-Focused SEO
              </h3>
              <p className="mt-3 text-slate-700">
                SEO that sells, not just ranks — tailor-made for ecommerce and product-led brands.
              </p>
              <ul className="mt-3 space-y-1.5 text-slate-700">
                <li>Product &amp; category page optimization</li>
                <li>Ecommerce schema &amp; filters</li>
                <li>Site architecture for scale</li>
                <li>CRO elements to improve sales</li>
              </ul>
              <p className="mt-3 text-xs font-medium text-slate-600">
                Ideal for Shopify, WooCommerce, and custom platforms.
              </p>
            </article>

            {/* Reporting */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 text-sm shadow-lg shadow-sky-50 md:col-span-2">
              <h3 className="text-lg font-semibold text-slate-900">
                📊 Data-Driven Reporting &amp; Transparent Tracking
              </h3>
              <p className="mt-3 text-slate-700">You&apos;ll always know:</p>
              <ul className="mt-2 grid gap-2 text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
                <li>What we&apos;re doing</li>
                <li>Why we&apos;re doing it</li>
                <li>What&apos;s working</li>
                <li>Where growth is coming from</li>
              </ul>
              <p className="mt-4 text-slate-700">We track:</p>
              <ul className="mt-2 grid gap-2 text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
                <li>Keyword rankings</li>
                <li>Organic traffic growth</li>
                <li>Leads &amp; conversions</li>
                <li>ROI &amp; revenue impact</li>
              </ul>
              <p className="mt-4 text-xs font-medium text-slate-600">No fluff. Just clarity.</p>
            </article>
          </div>
        </section>

        {/* Why choose us */}
        <section className="space-y-6 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-sky-50 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why Brands Choose Brand Digital Over Other SEO Agencies
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✔ Strategy-first, not template-based</li>
            <li>✔ SEO built for Google&apos;s future, not past tricks</li>
            <li>✔ Transparent communication &amp; reporting</li>
            <li>✔ Customized plans for every business</li>
            <li>✔ Focus on growth, not just rankings</li>
          </ul>
          <p className="pt-1 text-sm font-semibold text-slate-900">
            We don&apos;t sell &quot;SEO packages.&quot; We build SEO assets that compound in value.
          </p>
        </section>

        {/* Who we work with */}
        <section className="space-y-4 rounded-2xl border border-slate-200/80 bg-white/90 p-8 text-sm text-slate-700 shadow-lg shadow-sky-50 sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Who We Work With
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <p>Startups &amp; growing brands</p>
            <p>Local &amp; national service businesses</p>
            <p>Ecommerce stores</p>
            <p>Agencies &amp; enterprises</p>
          </div>
          <p className="pt-2 text-sm text-slate-700">
            If organic growth matters to your business, BrandMarketing Digital is your SEO partner.
          </p>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border-2 border-dashed border-sky-200 bg-gradient-to-br from-sky-50 via-indigo-50 to-cyan-50 p-8 text-center shadow-lg shadow-sky-100/50 sm:p-12">
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to Outrank Your Competitors?
          </h3>
          <p className="mb-4 text-sm text-slate-700 sm:text-base">
            Your competitors are investing in SEO right now. The question is — are you building
            authority or falling behind?
          </p>
          <p className="mb-6 text-sm font-semibold text-slate-900">
            Let Brand Digital help you: Rank higher • Convert more • Scale faster
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:shadow-blue-200 hover:brightness-105"
          >
            Get a Free SEO Strategy Call Today
          </Link>
        </section>
      </div>
    </section>
  );
}


