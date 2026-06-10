import {
  AwsIcon,
  DockerIcon,
  ExpressIcon,
  NodeJsIcon,
  PostgresIcon,
  RedisIcon,
} from "@/components/design-and-development/BackendTechIcons";
import {
  Css3Icon,
  Html5Icon,
  NextJsIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "@/components/design-and-development/FrontendTechIcons";
import {
  KubernetesIcon,
  PythonIcon,
} from "@/components/design-and-development/ProductEngineeringTechIcons";
import {
  AdobeXdIcon,
  FigmaIcon,
  IllustratorIcon,
  InVisionIcon,
  NotionIcon,
  PhotoshopIcon,
  SketchIcon,
  ZeplinIcon,
} from "@/components/design-and-development/UiuxToolIcons";
import {
  GoogleWorkspaceIcon,
  HubSpotIcon,
  SalesforceIcon,
  SlackIcon,
} from "@/components/design-and-development/BusinessSolutionsIntegrationIcons";

type IconProps = { className?: string };

function GenericTechIcon({ label, color, className = "h-5 w-5" }: IconProps & { label: string; color: string }) {
  const abbr = label.slice(0, 2).toUpperCase();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="4" fill={color} />
      <text x="12" y="15.5" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff">
        {abbr}
      </text>
    </svg>
  );
}

export function VueIcon(props: IconProps) {
  return <GenericTechIcon label="Vu" color="#42b883" {...props} />;
}

export function AngularIcon(props: IconProps) {
  return <GenericTechIcon label="Ng" color="#DD0031" {...props} />;
}

export function GraphQLIcon(props: IconProps) {
  return <GenericTechIcon label="GQL" color="#E10098" {...props} />;
}

export function MongoDBIcon(props: IconProps) {
  return <GenericTechIcon label="Mg" color="#47A248" {...props} />;
}

export function ReactNativeIcon(props: IconProps) {
  return <ReactIcon {...props} />;
}

export function SwiftIcon(props: IconProps) {
  return <GenericTechIcon label="Sw" color="#F05138" {...props} />;
}

export function KotlinIcon(props: IconProps) {
  return <GenericTechIcon label="Kt" color="#7F52FF" {...props} />;
}

export function FlutterIcon(props: IconProps) {
  return <GenericTechIcon label="Fl" color="#02569B" {...props} />;
}

export function FirebaseIcon(props: IconProps) {
  return <GenericTechIcon label="Fb" color="#FFCA28" {...props} />;
}

export function GcpIcon(props: IconProps) {
  return <GenericTechIcon label="GCP" color="#4285F4" {...props} />;
}

export function AzureIcon(props: IconProps) {
  return <GenericTechIcon label="Az" color="#0078D4" {...props} />;
}

export function CicdIcon(props: IconProps) {
  return <GenericTechIcon label="CI" color="#7c3aed" {...props} />;
}

export function RestApiIcon(props: IconProps) {
  return <GenericTechIcon label="API" color="#3b82f6" {...props} />;
}

export function StripeIcon(props: IconProps) {
  return <GenericTechIcon label="St" color="#635BFF" {...props} />;
}

export const TECH_STACK_ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  React: ReactIcon,
  "Next.js": NextJsIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  Sass: SassIcon,
  HTML5: Html5Icon,
  CSS3: Css3Icon,
  "Vue.js": VueIcon,
  Angular: AngularIcon,
  "Node.js": NodeJsIcon,
  "Express.js": ExpressIcon,
  Python: PythonIcon,
  GraphQL: GraphQLIcon,
  "REST APIs": RestApiIcon,
  PostgreSQL: PostgresIcon,
  MongoDB: MongoDBIcon,
  Redis: RedisIcon,
  "React Native": ReactNativeIcon,
  Swift: SwiftIcon,
  Kotlin: KotlinIcon,
  Flutter: FlutterIcon,
  Firebase: FirebaseIcon,
  AWS: AwsIcon,
  "Google Cloud": GcpIcon,
  Azure: AzureIcon,
  Docker: DockerIcon,
  Kubernetes: KubernetesIcon,
  "CI/CD": CicdIcon,
  Figma: FigmaIcon,
  "Adobe XD": AdobeXdIcon,
  Sketch: SketchIcon,
  Photoshop: PhotoshopIcon,
  Illustrator: IllustratorIcon,
  InVision: InVisionIcon,
  Zeplin: ZeplinIcon,
  Notion: NotionIcon,
  Salesforce: SalesforceIcon,
  HubSpot: HubSpotIcon,
  Stripe: StripeIcon,
  Slack: SlackIcon,
  "Google Workspace": GoogleWorkspaceIcon,
};

export function TechStackIcon({ name, className }: { name: string; className?: string }) {
  const Icon = TECH_STACK_ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
