import FaqAccordion from "@/components/seo/FaqAccordion";
import {
  WDM_FONT_SECTION,
  WDM_SECTION,
  WDM_SECTION_PY,
} from "@/components/design-and-development/web-dev-styles";
import { webDevFaq } from "@/lib/design-and-development/web-dev-content";

export default function WebDevFaqSection() {
  return (
    <section className={`${WDM_SECTION} ${WDM_SECTION_PY} bg-white`}>
      <div className="mb-8 text-center sm:mb-10">
        <h2 className={WDM_FONT_SECTION}>{webDevFaq.title}</h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#7c3aed]" />
      </div>
      <div className="mx-auto max-w-3xl">
        <FaqAccordion items={[...webDevFaq.items]} />
      </div>
    </section>
  );
}
