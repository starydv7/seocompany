import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Linkedin } from "lucide-react";
import { notFound } from "next/navigation";
import { teamMembers } from "../data";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return { title: "Team | SEO Company" };

  return {
    title: `${member.name} | Team`,
    description: member.headline,
  };
}

export default function TeamMemberPage({ params }: Props) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to team
          </Link>
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm transition hover:border-sky-400 hover:bg-sky-50 hover:text-sky-800"
          >
            <Linkedin className="h-4 w-4" />
            View on LinkedIn
          </a>
        </div>

        {/* Hero Header */}
        <header className="relative isolate rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/20 p-8 shadow-xl shadow-sky-100/50 sm:p-12">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.08),transparent_50%)]" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-3xl font-bold text-white shadow-xl shadow-cyan-200/50 ring-4 ring-white">
              {member.name.charAt(0)}
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {member.name}
                </h1>
                <p className="mt-2 text-lg font-semibold text-slate-700 sm:text-xl">{member.role}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                {member.experience && (
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                    <span className="font-medium">{member.experience} experience</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                  <span>{member.location}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.8fr),minmax(0,1fr)]">
          {/* Left Column - Main Content */}
          <article className="space-y-6">
            {/* About Section */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-sky-50/50">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                <h2 className="text-lg font-bold tracking-tight text-slate-900">About</h2>
              </div>
              <p className="mb-6 text-lg font-semibold leading-relaxed text-slate-900">
                {member.headline}
              </p>
              <div className="space-y-5 text-base leading-relaxed text-slate-700">
                {member.bio.map((para, idx) => (
                  <p key={idx} className="text-slate-700">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            {member.achievements && member.achievements.length > 0 && (
              <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-sky-50/50">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
                  <h2 className="text-lg font-bold tracking-tight text-slate-900">
                    Key Deliverables & Results
                  </h2>
                </div>
                <ul className="space-y-4">
                  {member.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white shadow-md shadow-emerald-200/50">
                        {idx + 1}
                      </div>
                      <p className="flex-1 text-base leading-relaxed text-slate-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Right Column - Sidebar */}
          <aside className="space-y-6">
            {/* Specialties */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                <h2 className="text-base font-bold tracking-tight text-slate-900">
                  What they&apos;re best at
                </h2>
              </div>
              <ul className="space-y-3.5">
                {member.specialties.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 ring-2 ring-cyan-100" />
                    <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            {member.tools && member.tools.length > 0 && (
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-5 flex items-center gap-2">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600" />
                  <h2 className="text-base font-bold tracking-tight text-slate-900">
                    Tools & Platforms
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {member.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-lg border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Industries */}
            {member.industries && member.industries.length > 0 && (
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-sky-50/50">
                <div className="mb-5 flex items-center gap-2">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
                  <h2 className="text-base font-bold tracking-tight text-slate-900">
                    Industries & Verticals
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {member.industries.map((industry, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-lg border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            {member.cta && (
              <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-gradient-to-br from-sky-50 via-indigo-50 to-cyan-50 p-6 shadow-lg shadow-sky-100/50">
                <p className="mb-4 text-base font-semibold text-slate-800">
                  Ready to work with {member.name.split(" ")[0]}?
                </p>
                <Link
                  href={member.cta.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200/50 transition hover:shadow-xl hover:shadow-blue-200/50 hover:brightness-105"
                >
                  {member.cta.text}
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}




