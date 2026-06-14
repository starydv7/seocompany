import type { ReactNode } from "react";
import {
  type ServiceSectionVariant,
  serviceSectionClass,
} from "@/components/design-and-development/software-dev-styles";

export function ServiceSectionShell({
  variant,
  id,
  shellClassName,
  children,
}: {
  variant: ServiceSectionVariant;
  id?: string;
  shellClassName?: string;
  children: ReactNode;
}) {
  const className = [serviceSectionClass(variant), shellClassName].filter(Boolean).join(" ");

  if (variant === "page") {
    return <section className={className}>{children}</section>;
  }

  return (
    <article id={id} className={className}>
      {children}
    </article>
  );
}

export function SectionHeading({
  variant,
  className,
  children,
}: {
  variant: ServiceSectionVariant;
  className: string;
  children: ReactNode;
}) {
  if (variant === "page") {
    return <h1 className={className}>{children}</h1>;
  }

  return <h2 className={className}>{children}</h2>;
}
