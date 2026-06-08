import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HUBSPOT_MEETING_URL } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
  FRANCHISE_INNER,
  FRANCHISE_ITEM_BODY,
  FRANCHISE_ITEM_TITLE,
  FRANCHISE_SECTION,
  FRANCHISE_SECTION_SUBTITLE,
  FRANCHISE_SECTION_TITLE,
  GradientIconBox,
  TITLE_GRADIENT,
} from "@/components/seo/franchise-seo-styles";
import { franchiseServices, franchiseServicesIntro } from "@/lib/seo/franchise-content";

export default function FranchiseServicesSection() {
  return (
    <section className={FRANCHISE_SECTION}>
      <Reveal className={`${FRANCHISE_INNER} w-full text-center`}>
        <h2 className={FRANCHISE_SECTION_TITLE}>
          Our Franchise <span className={TITLE_GRADIENT}>SEO Services</span>
        </h2>
        <p className={`mt-3 ${FRANCHISE_SECTION_SUBTITLE}`}>
          {franchiseServicesIntro}
        </p>
      </Reveal>

      <div className={`${FRANCHISE_INNER} mt-[2%] grid w-full grid-cols-1 items-stretch gap-[2%] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`}>
        {franchiseServices.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.02} className="h-full">
            <article className="flex h-full min-h-[14rem] w-full flex-col rounded-xl border border-slate-200/90 bg-white p-[2%] transition hover:shadow-md">
              <GradientIconBox icon={service.icon} />
              <h3 className={`mt-4 ${FRANCHISE_ITEM_TITLE}`}>
                {service.title}
              </h3>
              <p className={`mt-2 flex-1 ${FRANCHISE_ITEM_BODY} text-slate-600`}>
                {service.description}{" "}
                {service.bullets[0]}
              </p>
              <Link
                href={HUBSPOT_MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
              >
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
