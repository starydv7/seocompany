type IconProps = { className?: string };

function GoogleAdsIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <path d="M6 28L14 10l6 12-4 6H6z" fill="#FBBC04" />
      <path d="M22 28h8L18 10l-4 6 8 12z" fill="#4285F4" />
      <circle cx="27" cy="27" r="5" fill="#34A853" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect width="36" height="36" rx="8" fill="#FF0000" />
      <path d="M15 12v12l10-6-10-6z" fill="#fff" />
    </svg>
  );
}

function GoogleAnalyticsIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect width="36" height="36" rx="8" fill="#F9AB00" />
      <rect x="8" y="20" width="6" height="10" rx="2" fill="#fff" />
      <rect x="17" y="14" width="6" height="16" rx="2" fill="#fff" />
      <rect x="26" y="8" width="6" height="22" rx="2" fill="#fff" />
    </svg>
  );
}

function Dv360Icon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect width="36" height="36" rx="8" fill="#4285F4" />
      <text x="18" y="22" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">
        DV360
      </text>
    </svg>
  );
}

function GtmIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect width="36" height="36" rx="8" fill="#8AB4F8" />
      <path d="M10 18h16M18 10v16" stroke="#1a73e8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Sa360Icon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect width="36" height="36" rx="8" fill="#34A853" />
      <text x="18" y="22" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">
        SA360
      </text>
    </svg>
  );
}

function MicrosoftIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect x="6" y="6" width="11" height="11" fill="#F25022" />
      <rect x="19" y="6" width="11" height="11" fill="#7FBA00" />
      <rect x="6" y="19" width="11" height="11" fill="#00A4EF" />
      <rect x="19" y="19" width="11" height="11" fill="#FFB900" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect width="36" height="36" rx="6" fill="#0A66C2" />
      <path
        d="M10 14h4v14h-4V14zm2-5a2.3 2.3 0 110 4.6 2.3 2.3 0 010-4.6zM16 14h3.8v2h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6v9h-4v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2H16V14z"
        fill="#fff"
      />
    </svg>
  );
}

export const PPC_PLATFORM_ICONS: Record<string, (p: IconProps) => JSX.Element> = {
  "Google Ads": GoogleAdsIcon,
  YouTube: YouTubeIcon,
  "Google Analytics": GoogleAnalyticsIcon,
  "Display & Video 360": Dv360Icon,
  "Google Tag Manager": GtmIcon,
  "Search Ads 360": Sa360Icon,
  "Microsoft Advertising": MicrosoftIcon,
  "LinkedIn Ads": LinkedInIcon,
};
