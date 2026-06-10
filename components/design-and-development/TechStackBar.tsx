"use client";

import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import TechStackModal from "@/components/design-and-development/TechStackModal";
import { TechStackIcon } from "@/components/design-and-development/TechStackIcons";

type Props = {
  technologies: readonly string[];
  title?: string;
};

export default function TechStackBar({
  technologies,
  title = "Technologies We Use",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative mt-[2%] flex flex-col gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-4">
        <p className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-slate-700 sm:text-xs">
          {title}
        </p>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-5">
          {technologies.map((tech) => (
            <div key={tech} className="flex flex-col items-center gap-1">
              <TechStackIcon name={tech} className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
              <span className="text-[9px] font-semibold text-slate-600 sm:text-[10px]">{tech}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 self-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-700 shadow-sm transition hover:border-violet-200 hover:bg-violet-50 sm:text-xs"
        >
          <LayoutGrid className="h-3.5 w-3.5 text-violet-600" />
          View All
        </button>
      </div>
      <TechStackModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
