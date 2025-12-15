import Link from "next/link";
import { teamMembers } from "@/app/(site)/team/data";

export default function TeamPage() {
  return (
    <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Team
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            The team behind the growth systems.
          </h1>
          <p className="text-sm text-slate-600 sm:text-base">
            A small, senior group leading SEO, paid, social and automation end-to-end. Click into
            any profile to see how they think and what they&apos;ve shipped.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm shadow-sm shadow-sky-50 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-md shadow-cyan-200">
                  {member.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                  <p className="text-xs text-slate-500">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-900">{member.headline}</p>
              <p className="mt-2 text-xs text-slate-600">{member.location}</p>
              <p className="mt-1 text-xs text-slate-500">
                Experience: <span className="font-semibold text-slate-800">{member.experience}</span>
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                {member.specialties.slice(0, 3).map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-sky-700">
                View full profile
                <span className="ml-1 transition group-hover:translate-x-0.5">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


