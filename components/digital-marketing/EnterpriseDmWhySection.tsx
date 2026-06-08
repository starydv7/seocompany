import { Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import EnterpriseDmWhyHub from "@/components/digital-marketing/EnterpriseDmWhyHub";
import {
  EDM_ACCENT,
  EDM_BLUE,
  EDM_BODY,
  EDM_SECTION,
  EDM_SECTION_PY,
  EDM_SECTION_TITLE,
} from "@/components/digital-marketing/enterprise-dm-styles";
import { enterpriseDmWhy } from "@/lib/digital-marketing/enterprise-content";

export default function EnterpriseDmWhySection() {
  const {
    titleBefore,
    titleAccent,
    lead,
    checklist,
    challengesTitle,
    challenges,
  } = enterpriseDmWhy;

  return (
    <section className={`${EDM_SECTION} bg-white ${EDM_SECTION_PY}`}>
      <div className="grid w-full max-w-none grid-cols-1 items-start gap-12 lg:grid-cols-3 lg:gap-x-[3%]">
        {/* Left */}
        <Reveal className="min-w-0">
          <h2 className={`leading-[1.2] ${EDM_SECTION_TITLE}`}>
            {titleBefore}
            <span className={EDM_ACCENT}>{titleAccent}</span>
          </h2>
          <p className={`mt-4 w-full ${EDM_BODY}`}>{lead}</p>
          <ul className="mt-7 space-y-3.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: EDM_BLUE }}
                >
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Center hub — extra horizontal room */}
        <Reveal
          delay={0.05}
          className="flex min-w-0 items-center justify-center overflow-visible px-1 py-4 lg:px-4"
        >
          <EnterpriseDmWhyHub />
        </Reveal>

        {/* Right challenges */}
        <Reveal delay={0.08} className="min-w-0">
          <div className="rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-[0_6px_28px_rgba(15,23,42,0.07)] sm:px-7 sm:py-7">
            <h3 className="text-base font-bold text-[#0f172a] sm:text-lg">
              {challengesTitle}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {challenges.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[13px] text-slate-600">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 shadow-sm">
                    <X className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
