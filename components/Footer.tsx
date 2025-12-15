import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white/80 text-sm text-slate-600 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3 max-w-sm">
          <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-xs font-semibold text-white shadow-md shadow-cyan-200">
              SC
            </span>
            <span>SeoCompany</span>
          </div>
          <p className="text-xs text-slate-600">
            A senior SEO, social and automation team building predictable, compounding growth
            systems for brands that care about real results.
          </p>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Services
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  SEO & Organic Growth
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Social & Content
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Paid Media & Funnels
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900">
                  Automation & CRM
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Company
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/team" className="hover:text-slate-900">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-slate-900">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Connect
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/in/dhiraj-kumar-88a5a7a7/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900"
                >
                  LinkedIn – Dhiraj
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sohail-islam-b40776181/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900"
                >
                  LinkedIn – Sohail
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/trisha-nandy-a14688203/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900"
                >
                  LinkedIn – Trisha
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/80 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} SeoCompany. All rights reserved.</p>
          <p className="text-[10px]">
            Built for brands that care about strategy, execution and measurable growth.
          </p>
        </div>
      </div>
    </footer>
  );
}


