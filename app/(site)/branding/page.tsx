import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Branding & Content Strategy | Identity with Intent",
  description:
    "We craft unforgettable brand identities and high-authority content that turns browsers into brand advocates.",
};

export default function BrandingPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Hero */}
        <header className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 shadow-sm shadow-purple-100 ring-1 ring-slate-200/60 backdrop-blur">
            Branding & Content Strategy
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Don&apos;t Just Fit In. Lead the Conversation.
          </h1>
          <p className="mx-auto max-w-3xl text-xl font-semibold text-slate-700">
            We craft unforgettable brand identities and high-authority content that turns
            &quot;browsers&quot; into &quot;brand advocates.&quot;
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-purple-200/50 transition hover:shadow-xl hover:shadow-purple-300/50 hover:brightness-105"
          >
            Build My Brand Identity
          </Link>
        </header>

        {/* Brand Identity Prism Diagram */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-purple-100/50 sm:p-12">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            BRAND IDENTITY PRISM
          </h2>
          <div className="relative mx-auto max-w-5xl">
            <svg viewBox="0 0 1000 600" className="w-full h-auto">
              {/* Central beige hexagon */}
              <polygon
                points="500,120 620,190 620,310 500,380 380,310 380,190"
                fill="#f5e1b8"
                stroke="#1e293b"
                strokeWidth="2"
              />

              {/* Dotted vertical line through center */}
              <line
                x1="500"
                y1="100"
                x2="500"
                y2="380"
                stroke="#6b7280"
                strokeWidth="2"
                strokeDasharray="6,6"
              />

              {/* Dotted horizontal line through center */}
              <line
                x1="320"
                y1="240"
                x2="680"
                y2="240"
                stroke="#6b7280"
                strokeWidth="2"
                strokeDasharray="6,6"
              />

              {/* Top-left triangle - PHYSIQUE (green) */}
              <polygon
                points="500,120 380,190 500,190"
                fill="#6ee7b7"
                stroke="none"
              />

              {/* Top-right triangle - PERSONALITY (coral) */}
              <polygon
                points="500,120 500,190 620,190"
                fill="#fb7185"
                stroke="none"
              />

              {/* Bottom-left triangle - REFLECTION (yellow) */}
              <polygon
                points="380,310 500,310 500,380"
                fill="#fde68a"
                stroke="none"
              />

              {/* Bottom-right triangle - SELF-IMAGE (teal) */}
              <polygon
                points="500,310 620,310 500,380"
                fill="#7dd3fc"
                stroke="none"
              />

              {/* Text labels - positioned outside hexagon with good spacing */}
              {/* PHYSIQUE - top-left, outside */}
              <text
                x="300"
                y="160"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="16"
                fill="#22c55e"
              >
                PHYSIQUE
              </text>

              {/* PERSONALITY - top-right, outside */}
              <text
                x="700"
                y="160"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="16"
                fill="#fb7185"
              >
                PERSONALITY
              </text>

              {/* REFLECTION - bottom-left, outside */}
              <text
                x="300"
                y="340"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="16"
                fill="#facc15"
              >
                REFLECTION
              </text>

              {/* SELF-IMAGE - bottom-right, outside */}
              <text
                x="700"
                y="340"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="16"
                fill="#0ea5e9"
              >
                SELF-IMAGE
              </text>

              {/* RELATIONSHIP - left side, outside - exactly 260px from center */}
              <text
                x="240"
                y="240"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="16"
                fill="#6b7280"
              >
                RELATIONSHIP
              </text>

              {/* CULTURE - right side, outside - exactly 260px from center (mirror of left) */}
              <text
                x="760"
                y="240"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="16"
                fill="#6b7280"
              >
                CULTURE
              </text>

              {/* Top bracket - PICTURE OF SENDER */}
              <path
                d="M 180 100 L 380 100 M 620 100 L 820 100"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x="500"
                y="95"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="12"
                fill="#1e293b"
              >
                PICTURE OF SENDER
              </text>

              {/* Bottom bracket - PICTURE OF RECEIVER */}
              <path
                d="M 180 380 L 380 380 M 620 380 L 820 380"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x="500"
                y="400"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="12"
                fill="#1e293b"
              >
                PICTURE OF RECEIVER
              </text>

              {/* Left bracket - EXTERNALIZATION */}
              <path
                d="M 160 150 L 160 210 M 160 270 L 160 330"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x="130"
                y="240"
                textAnchor="middle"
                transform="rotate(-90 130 240)"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="12"
                fill="#1e293b"
              >
                EXTERNALIZATION
              </text>

              {/* Right bracket - INTERNALIZATION */}
              <path
                d="M 840 150 L 840 210 M 840 270 L 840 330"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x="870"
                y="240"
                textAnchor="middle"
                transform="rotate(90 870 240)"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="12"
                fill="#1e293b"
              >
                INTERNALIZATION
              </text>
            </svg>
          </div>
        </div>

        {/* Why Branding */}
        <section className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/20 p-8 shadow-xl shadow-purple-100/50 sm:p-12">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Branding is Your Best Investment
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            In a world of infinite choices, people don&apos;t buy products; they buy{" "}
            <span className="font-bold text-slate-900">stories</span> and{" "}
            <span className="font-bold text-slate-900">trust</span>. A strong brand reduces your
            cost-per-acquisition because your reputation does the heavy lifting before the ad even
            runs.
          </p>
        </section>

        {/* Our Creative Services */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Creative Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 1. Brand Strategy & Positioning */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-8 text-sm shadow-lg shadow-purple-50/50">
              <h3 className="text-xl font-bold text-slate-900">1. Brand Strategy &amp; Positioning</h3>
              <p className="mt-4 text-slate-700">
                Before we design, we define. We find your &quot;Unique Selling Proposition&quot; (USP)
                and carve out a space in the market that your competitors can&apos;t touch.
              </p>
              <div className="mt-4 rounded-lg bg-purple-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">The Blueprint:</p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                  <li>• Competitor analysis</li>
                  <li>• Target persona mapping</li>
                  <li>• Value proposition design</li>
                </ul>
              </div>
            </article>

            {/* 2. Visual Identity Systems */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-8 text-sm shadow-lg shadow-purple-50/50">
              <h3 className="text-xl font-bold text-slate-900">2. Visual Identity Systems</h3>
              <p className="mt-4 text-slate-700">
                Your visual &quot;handshake.&quot; We create a cohesive look that works across every
                touchpoint, from your website favicon to giant billboards.
              </p>
              <div className="mt-4 rounded-lg bg-pink-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">Deliverables:</p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                  <li>• Logo suites</li>
                  <li>• Typography</li>
                  <li>• Color palettes</li>
                  <li>• Comprehensive Brand Style Guide</li>
                </ul>
              </div>
            </article>

            {/* 3. High-Authority Content Marketing */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-8 text-sm shadow-lg shadow-purple-50/50">
              <h3 className="text-xl font-bold text-slate-900">3. High-Authority Content Marketing</h3>
              <p className="mt-4 text-slate-700">
                Content is the fuel for your SEO and Social Media engines. We produce content that
                educates, entertains, and converts.
              </p>
              <div className="mt-4 rounded-lg bg-indigo-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">The Output:</p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                  <li>• SEO-optimized blogs</li>
                  <li>• Whitepapers</li>
                  <li>• Case studies</li>
                  <li>• Website copy that speaks &quot;human&quot;</li>
                </ul>
              </div>
            </article>

            {/* 4. Video & Motion Graphics */}
            <article className="rounded-2xl border border-slate-200/80 bg-white p-8 text-sm shadow-lg shadow-purple-50/50">
              <h3 className="text-xl font-bold text-slate-900">4. Video &amp; Motion Graphics</h3>
              <p className="mt-4 text-slate-700">
                Short-form video is the king of engagement. We produce high-quality Reels, TikToks,
                and explainer videos that capture attention in the first 1.5 seconds.
              </p>
            </article>
          </div>
        </section>

        {/* BrandMarketing Content Framework */}
        <section className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 p-8 shadow-xl shadow-indigo-100/50 sm:p-12">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The &quot;BrandMarketing&quot; Content Framework
          </h2>
          <p className="mb-8 text-center text-lg text-slate-700">
            We don&apos;t just write for the sake of writing. Every piece of content we create
            follows a strategic funnel to ensure it moves the needle.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 bg-white/70">
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Stage</th>
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Content Type</th>
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 bg-white/60">
                  <td className="px-6 py-4 font-semibold text-slate-900">Top (Awareness)</td>
                  <td className="px-6 py-4 text-slate-700">Viral Reels, Educational Blogs</td>
                  <td className="px-6 py-4 text-slate-700">Capture Attention &amp; Traffic</td>
                </tr>
                <tr className="border-b border-slate-200 bg-white/60">
                  <td className="px-6 py-4 font-semibold text-slate-900">Middle (Consideration)</td>
                  <td className="px-6 py-4 text-slate-700">Case Studies, Newsletters</td>
                  <td className="px-6 py-4 text-slate-700">Build Trust &amp; Authority</td>
                </tr>
                <tr className="bg-white/60">
                  <td className="px-6 py-4 font-semibold text-slate-900">Bottom (Conversion)</td>
                  <td className="px-6 py-4 text-slate-700">Sales Pages, Reviews, FAQs</td>
                  <td className="px-6 py-4 text-slate-700">Close the Sale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Our Process */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Process: From Concept to Culture
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-purple-50/50">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-bold text-white shadow-md shadow-purple-200">
                1
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">The Immersion</h3>
              <p className="text-sm text-slate-600">
                We interview your team and customers to find the &quot;heart&quot; of your business.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-purple-50/50">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-sm font-bold text-white shadow-md shadow-pink-200">
                2
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">The Concept</h3>
              <p className="text-sm text-slate-600">
                We present visual and verbal directions that define your new path.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-purple-50/50">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-sm font-bold text-white shadow-md shadow-indigo-200">
                3
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">The Creation</h3>
              <p className="text-sm text-slate-600">
                Our designers and writers build out your brand assets and content library.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-purple-50/50">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-sm font-bold text-white shadow-md shadow-cyan-200">
                4
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">The Launch</h3>
              <p className="text-sm text-slate-600">
                We deploy your brand across all channels and monitor audience sentiment.
              </p>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border-2 border-dashed border-purple-200 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 p-8 text-center shadow-lg shadow-purple-100/50 sm:p-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Stop Being a Commodity. Become a Category Leader.
          </h2>
          <p className="mb-6 text-lg text-slate-700">
            If your brand looks and sounds like everyone else, you&apos;re forced to compete on
            price. When you have a powerful brand, you compete on value.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-purple-200/50 transition hover:shadow-xl hover:shadow-purple-300/50 hover:brightness-105"
          >
            Let&apos;s Define Your Brand Story
          </Link>
        </section>
      </div>
    </section>
  );
}


