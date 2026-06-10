type IconProps = { className?: string };

export function SalesforceIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M8 6c-1.5 0-2.8.8-3.5 2C3.8 7.8 2.5 8 1.5 9c-1 1-.8 2.8.5 3.5 0 1.5.8 2.8 2 3.5 0 1.5 1.2 2.5 2.8 2.5 1 1.2 2.5 1.8 4 1.5 1 .8 2.2 1 3.5.5 1.2.5 2.5 0 3.5-.8 1.5-.5 2.8-1.5 3.5-2.8.5-1.2 1.5-2.2 2.8-2.5 1.2-.2 2.2-1 2.8-2.2.8-.2 1.5-.8 2-1.5.5-1 .5-2.2 0-3.2-.5-1.2-1.5-2-2.8-2.2-1-.2-2-.8-2.5-1.8-.5-1-1.5-1.8-2.8-1.8z"
        fill="#00A1E0"
      />
    </svg>
  );
}

export function HubSpotIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#FF7A59" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
      <circle cx="17" cy="7" r="2" fill="#FF7A59" stroke="#fff" strokeWidth="1" />
    </svg>
  );
}

export function SlackIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="4" y="10" width="4" height="10" rx="2" fill="#E01E5A" />
      <rect x="10" y="4" width="10" height="4" rx="2" fill="#36C5F0" />
      <rect x="10" y="16" width="10" height="4" rx="2" fill="#2EB67D" />
      <rect x="16" y="10" width="4" height="10" rx="2" fill="#ECB22E" />
    </svg>
  );
}

export function GoogleWorkspaceIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M6 4h8l4 4v12H6V4z" fill="#4285F4" />
      <path d="M14 4v4h4" fill="#34A853" opacity="0.8" />
      <rect x="8" y="10" width="8" height="1.5" rx="0.5" fill="#fff" />
      <rect x="8" y="13" width="6" height="1.5" rx="0.5" fill="#fff" opacity="0.8" />
    </svg>
  );
}

export const BUSINESS_INTEGRATION_ICONS = {
  Salesforce: SalesforceIcon,
  HubSpot: HubSpotIcon,
  Slack: SlackIcon,
  "Google Workspace": GoogleWorkspaceIcon,
} as const;
