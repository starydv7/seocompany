import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  Code,
  FileText,
  Link2,
  MapPin,
  ShoppingCart,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Users,
  Target,
  Video,
  MessageSquare,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | SEO & Social Media Marketing",
  description:
    "Comprehensive SEO and Social Media Marketing services that drive rankings, revenue, and real business growth.",
};

export default function ServicesPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* SEO Services Section */}
        <div className="space-y-12">
          {/* SEO Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 shadow-sm shadow-sky-100 ring-1 ring-slate-200/60 backdrop-blur">
              SEO Services
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Search Engine Optimization (SEO) Services
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold text-slate-700">
              That Drive Rankings, Revenue & Real Business Growth
            </p>
          </div>

          {/* SEO Company Built for Brands */}
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/20 p-8 shadow-xl shadow-sky-100/50 sm:p-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              SEO Company Built for Brands That Want to Dominate Search
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              If your website isn't ranking on Google, it isn't competing.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              At Brand Digital, we don't chase vanity metrics, we build search ecosystems that turn
              rankings into traffic, traffic into leads, and leads into revenue. Our SEO strategies
              are engineered for long-term dominance, not short-lived spikes. Whether you're a
              startup, local business, ecommerce brand, or enterprise, we help you own your search
              space.
            </p>
          </div>

          {/* Why SEO Still Delivers Highest ROI */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Why SEO Still Delivers the Highest ROI in Digital Marketing
              </h2>
              <p className="text-lg font-semibold text-slate-700">
                Paid ads stop the moment your budget ends. SEO keeps working.
              </p>
              <ul className="space-y-3 text-base text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>70%+ of clicks go to organic results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Users trust organic rankings more than ads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>SEO compounds results month after month</span>
                </li>
              </ul>
              <p className="pt-2 text-base font-medium text-slate-700">
                But only strategic, technically sound SEO works in 2025. That's where Brand
                Digital comes in.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
              <h3 className="mb-4 text-xl font-bold text-slate-900">Our SEO Approach</h3>
              <p className="mb-4 text-base text-slate-700">
                Built for Algorithms, Designed for Humans
              </p>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                We combine technical excellence, semantic relevance, and conversion psychology to
                create SEO campaigns that Google rewards and users engage with.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  <span>Search intent, not just keywords</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  <span>Topic authority, not isolated pages</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  <span>User experience, not keyword stuffing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  <span>Sustainable growth, not risky shortcuts</span>
                </li>
              </ul>
              <p className="mt-4 text-xs font-medium text-slate-500">
                100% white-hat SEO practices, aligned with Google's latest algorithm updates.
              </p>
            </div>
          </div>

          {/* Comprehensive SEO Services */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Comprehensive SEO Services by Brand Digital
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Keyword Research */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-200">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Advanced Keyword & Search Intent Research
                  </h3>
                </div>
                <p className="mb-3 text-sm text-slate-600">
                  We go beyond keyword volume and identify:
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                    <span>Buyer-intent keywords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                    <span>Semantic keyword clusters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                    <span>Competitor ranking gaps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                    <span>Long-tail conversion opportunities</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  This ensures you rank for searches that actually generate business.
                </p>
              </div>

              {/* Technical SEO */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Technical SEO & Website Optimization
                  </h3>
                </div>
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  A slow or broken website kills rankings.
                </p>
                <p className="mb-3 text-sm text-slate-600">We fix:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
                    <span>Crawlability & indexation issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
                    <span>Site speed & Core Web Vitals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
                    <span>Mobile usability & UX flaws</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
                    <span>URL structure, schema & internal linking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
                    <span>Duplicate content & technical errors</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  Your site becomes search-engine-friendly and user-first.
                </p>
              </div>

              {/* On-Page SEO */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-200">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    On-Page SEO & Content Optimization
                  </h3>
                </div>
                <p className="mb-3 text-sm text-slate-600">
                  We optimize every ranking signal, including:
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600" />
                    <span>Page titles & meta descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600" />
                    <span>Heading structure (H1–H6)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600" />
                    <span>Content depth & topical relevance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600" />
                    <span>Internal links & content flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600" />
                    <span>Image optimization & accessibility</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  Our content is written to rank AND convert, not just fill space.
                </p>
              </div>

              {/* Link Building */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-200">
                    <Link2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Authority Link Building & Off-Page SEO
                  </h3>
                </div>
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Backlinks still matter—but only the right ones.
                </p>
                <p className="mb-3 text-sm text-slate-600">We build:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
                    <span>High-authority editorial backlinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
                    <span>Niche-relevant placements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
                    <span>Brand mentions & digital PR links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
                    <span>Natural anchor text profiles</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  No spam. No PBNs. No penalties.
                </p>
              </div>

              {/* Local SEO */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-200">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Local SEO for High-Intent Customers
                  </h3>
                </div>
                <p className="mb-3 text-sm text-slate-600">
                  Perfect for service businesses and multi-location brands.
                </p>
                <p className="mb-3 text-sm text-slate-600">We optimize:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600" />
                    <span>Google Business Profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600" />
                    <span>Local citations & NAP consistency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600" />
                    <span>Local landing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600" />
                    <span>Reviews & local trust signals</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  Result: More calls, visits, and local conversions.
                </p>
              </div>

              {/* Ecommerce SEO */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md shadow-violet-200">
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Ecommerce & Conversion-Focused SEO
                  </h3>
                </div>
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  SEO that sells, not just ranks.
                </p>
                <p className="mb-3 text-sm text-slate-600">We optimize:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
                    <span>Product & category pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
                    <span>Ecommerce schema & filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
                    <span>Site architecture for scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-600" />
                    <span>CRO elements to improve sales</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  Ideal for Shopify, WooCommerce, and custom platforms.
                </p>
              </div>

              {/* Reporting */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-sky-200">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Data-Driven Reporting & Transparent Tracking
                  </h3>
                </div>
                <p className="mb-3 text-sm font-semibold text-slate-700">You'll always know:</p>
                <ul className="mb-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
                    <span>What we're doing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
                    <span>Why we're doing it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
                    <span>What's working</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
                    <span>Where growth is coming from</span>
                  </li>
                </ul>
                <p className="mb-2 text-xs font-semibold text-slate-700">We track:</p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>• Keyword rankings</li>
                  <li>• Organic traffic growth</li>
                  <li>• Leads & conversions</li>
                  <li>• ROI & revenue impact</li>
                </ul>
                <p className="mt-3 text-xs font-medium text-slate-500">No fluff. Just clarity.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Brand Digital */}
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-sky-50/30 p-8 shadow-xl shadow-sky-100/50 sm:p-12">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Why Brands Choose Brand Digital Over Other SEO Agencies
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">
                  Strategy-first, not template-based
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">
                  SEO built for Google's future, not past tricks
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">
                  Transparent communication & reporting
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">
                  Customized plans for every business
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-medium text-slate-700">
                  Focus on growth, not just rankings
                </span>
              </div>
            </div>
            <p className="mt-6 text-base font-semibold text-slate-900">
              We don't sell "SEO packages." We build SEO assets that compound in value.
            </p>
          </div>

          {/* Who We Work With */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-sky-50/50">
            <h3 className="mb-4 text-xl font-bold text-slate-900">Who We Work With</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-sm font-medium text-slate-700">Startups & growing brands</div>
              <div className="text-sm font-medium text-slate-700">
                Local & national service businesses
              </div>
              <div className="text-sm font-medium text-slate-700">Ecommerce stores</div>
              <div className="text-sm font-medium text-slate-700">Agencies & enterprises</div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              If organic growth matters to your business, Brand Digital is your SEO partner.
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-3xl border-2 border-dashed border-sky-200 bg-gradient-to-br from-sky-50 via-indigo-50 to-cyan-50 p-8 text-center shadow-lg shadow-sky-100/50 sm:p-12">
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Ready to Outrank Your Competitors?
            </h3>
            <p className="mb-6 text-base text-slate-700">
              Your competitors are investing in SEO right now. The question is—are you building
              authority or falling behind?
            </p>
            <p className="mb-6 text-sm font-semibold text-slate-900">
              Let Brand Digital help you: Rank higher • Convert more • Scale faster
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-cyan-200/50 transition hover:shadow-xl hover:shadow-blue-200/50 hover:brightness-105"
            >
              Get a Free SEO Strategy Call Today
            </Link>
          </div>
        </div>

        {/* Social Media Services Section */}
        <div className="space-y-12 border-t-2 border-slate-200 pt-20">
          {/* Social Media Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 shadow-sm shadow-indigo-100 ring-1 ring-slate-200/60 backdrop-blur">
              Social Media Marketing
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Social Media Marketing Services
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold text-slate-700">
              That Build Brands, Boost Engagement & Drive Revenue
            </p>
          </div>

          {/* The Social Media Company */}
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 p-8 shadow-xl shadow-indigo-100/50 sm:p-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              The Social Media Company That Turns Attention into Revenue
            </h2>
            <p className="mb-4 text-base leading-relaxed text-slate-600">
              In today's digital world, social media is where conversations happen, communities
              form, and customers decide what to buy.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              At Brand Digital, we don't just post content — we build social ecosystems that
              strengthen your brand, amplify your voice, and convert followers into loyal customers.
              Whether you're a local business, ecommerce brand, or enterprise organization, our
              social media marketing strategies are tailored to your audience, goals, and growth
              ambitions.
            </p>
          </div>

          {/* Why Social Media Matters */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Why Social Media Marketing Matters in 2025
              </h2>
              <p className="text-lg font-semibold text-slate-700">
                Social platforms are no longer optional — they're essential.
              </p>
              <ul className="space-y-3 text-base text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <span>
                    Over 5 billion people use social media daily — that's a massive opportunity for
                    visibility.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <span>Social engagement enhances brand trust and recall.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <span>
                    Platforms like Facebook, Instagram, X, LinkedIn, TikTok, and YouTube are now
                    integral parts of the buyer journey.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <span>
                    Smart social strategies drive traffic, leads, and sales with measurable ROI.
                  </span>
                </li>
              </ul>
              <p className="pt-2 text-base font-medium text-slate-700">
                At Brand Digital, we focus on strategies that deliver both long-term brand equity
                and short-term business results.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-indigo-50/50">
              <h3 className="mb-4 text-xl font-bold text-slate-900">Our Social Media Services</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      1. Strategic Social Media Planning
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Deep audience research and competitive analysis to build data-backed,
                      goal-oriented social strategy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      2. Social Content Creation & Publishing
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Platform-specific creative — carousel posts, Reels, Stories, short-form video.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      3. Organic Social Growth & Community Management
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Grow your following organically and manage interactions so your audience feels
                      heard and valued.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      4. Paid Social Advertising
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Custom audience creation, conversion-focused ad creatives, optimized bidding
                      & budget allocation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      5. Social Performance Analytics & Reporting
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Track engagement, reach, click-through, conversions, and revenue impact with
                      transparent, actionable insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Platforms */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-indigo-50/50">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">
              Social Media Platforms We Master
            </h2>
            <p className="mb-6 text-base text-slate-600">
              We manage and optimize campaigns across all key platforms where your audience spends
              time:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  Facebook & Instagram
                </h3>
                <p className="text-xs text-slate-600">Community, ads & storytelling</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">X (formerly Twitter)</h3>
                <p className="text-xs text-slate-600">Conversations & topical authority</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">LinkedIn</h3>
                <p className="text-xs text-slate-600">B2B branding & thought leadership</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">TikTok</h3>
                <p className="text-xs text-slate-600">Viral reach & high-impact short-form content</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">YouTube</h3>
                <p className="text-xs text-slate-600">Search-optimized video content</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">Pinterest</h3>
                <p className="text-xs text-slate-600">Discovery and ecommerce traffic</p>
              </div>
            </div>
            <p className="mt-6 text-sm font-medium text-slate-700">
              Each platform has its unique purpose — we tailor strategies, content, and messaging for
              maximum results on every channel.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-indigo-50 to-purple-50/30 p-8 shadow-xl shadow-indigo-100/50 sm:p-12">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What Makes Social Media At Brand Digital Different
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Integrated Growth Strategy
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      We don't treat social media as an isolated channel. It's integrated with your
                      digital marketing ecosystem — supporting SEO, web traffic, conversion
                      optimization, and lead nurturing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Data-Driven Creativity</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      We combine analytics and creative storytelling so your social content not only
                      performs — it converts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Tailored to Your Audience
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Your audience isn't generic — so neither are our strategies. We build
                      campaigns that reflect your brand, voice, and customer preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Transparent Reporting & Collaboration
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      You'll always know what we're doing, why we're doing it, and how it's driving
                      your business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who We Help */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-indigo-50/50">
            <h3 className="mb-4 text-xl font-bold text-slate-900">Who We Help</h3>
            <p className="mb-4 text-base text-slate-600">Brand Digital works with:</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-sm font-medium text-slate-700">
                Small & local businesses looking to get noticed
              </div>
              <div className="text-sm font-medium text-slate-700">
                Ecommerce brands wanting more sales
              </div>
              <div className="text-sm font-medium text-slate-700">
                Service providers seeking community engagement
              </div>
              <div className="text-sm font-medium text-slate-700">
                Enterprises optimizing multi-channel campaigns
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              From startups to established brands, our social media marketing services scale with
              your ambition.
            </p>
          </div>

          {/* Social Media CTA */}
          <div className="rounded-3xl border-2 border-dashed border-indigo-200 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 text-center shadow-lg shadow-indigo-100/50 sm:p-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Ready to Turn Social into Your Growth Engine?
            </h2>
            <p className="mb-6 text-base text-slate-700">
              Your competitors are already using social media to grow. Don't fall behind — lead the
              conversation instead of reacting to it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200/50 transition hover:shadow-xl hover:shadow-purple-200/50 hover:brightness-105"
            >
              Book Your Free Social Strategy Consultation with Brand Digital Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

