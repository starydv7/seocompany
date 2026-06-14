import type { Metadata } from "next";

import DevelopmentProcessLanding from "@/components/design-and-development/DevelopmentProcessLanding";



export const metadata: Metadata = {

  title: "Development Process | BrandMarketing",

  description:

    "A structured, transparent, and scalable development process from requirement analysis through deployment and long-term support.",

};



export default function DevelopmentProcessPage() {

  return <DevelopmentProcessLanding />;

}

