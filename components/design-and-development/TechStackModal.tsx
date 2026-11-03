"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { TechStackIcon } from "@/components/design-and-development/TechStackIcons";
import { TECH_STACK_CATEGORIES } from "@/lib/design-and-development/tech-stack-content";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function TechStackModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tech-stack-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-white backdrop-blur-[2px]"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[min(90vh,52rem)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.18)]">
        <div className="flex items-start justify-between gap-4 border-b border-stone-200/70 px-5 py-4 sm:px-6 sm:py-5">
          <div>
            <h2 id="tech-stack-modal-title" className="text-lg font-bold text-stone-900 sm:text-xl">
              Our Technology Stack
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              Tools and technologies we use to design, build, and scale digital products.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 text-stone-500 transition hover:bg-white/60 hover:text-stone-900"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
          <div className="space-y-6">
            {TECH_STACK_CATEGORIES.map((category) => (
              <section key={category.id}>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-violet-700 sm:text-sm">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex flex-col items-center gap-2 rounded-xl border border-stone-200/70 bg-white/60 px-2 py-3 transition hover:border-violet-200 hover:bg-violet-50"
                    >
                      <TechStackIcon name={tech} className="h-7 w-7 sm:h-8 sm:w-8" />
                      <span className="text-center text-[10px] font-semibold leading-tight text-stone-700 sm:text-xs">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
