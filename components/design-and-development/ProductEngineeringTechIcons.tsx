import {
  AwsIcon,
  DockerIcon,
  NodeJsIcon,
  PostgresIcon,
} from "@/components/design-and-development/BackendTechIcons";
import {
  NextJsIcon,
  ReactIcon,
  TypeScriptIcon,
} from "@/components/design-and-development/FrontendTechIcons";

type IconProps = { className?: string };

export function PythonIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3C8.5 3 6 4.5 6 7.5V9h6V8H8c0-1.5 1-2.5 3-2.5 2 0 3 .8 3 2.5v1.5c0 2-1.5 3.5-4 3.5H7v1.5C7 19.5 9.5 21 13 21s6-1.5 6-4.5V15h-6v1h4c0 1.5-1 2.5-3 2.5-2 0-3-.8-3-2.5V13c0-2 1.5-3.5 4-3.5h2V8c0-2.5-2.5-4-6-4z"
        fill="#3776AB"
      />
      <circle cx="9" cy="6.5" r="1" fill="#FFD43B" />
      <circle cx="15" cy="17.5" r="1" fill="#FFD43B" />
    </svg>
  );
}

export function KubernetesIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#326CE5" />
      <path
        d="M12 6l1.5 2.6h3l-1.5 2.6 1.5 2.6h-3L12 16.4l-1.5-2.6h-3l1.5-2.6L6.5 8.6h3L12 6z"
        fill="#fff"
        opacity="0.9"
      />
      <circle cx="12" cy="12" r="2.5" fill="#fff" />
    </svg>
  );
}

export const PRODUCT_ENGINEERING_TECH_ICONS = {
  React: ReactIcon,
  "Next.js": NextJsIcon,
  "Node.js": NodeJsIcon,
  TypeScript: TypeScriptIcon,
  Python: PythonIcon,
  PostgreSQL: PostgresIcon,
  AWS: AwsIcon,
  Docker: DockerIcon,
  Kubernetes: KubernetesIcon,
} as const;
