type IconProps = { className?: string };

function AmazonIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#FF9900" />
      <path
        d="M22 28c-5.5 1.5-10.5 1.5-14.5 0-.3 0-.5.3-.3.5 1.5 1.2 4.5 2.5 8 2.5s6.5-1.3 8-2.5c.2-.2 0-.5-.2-.5z"
        fill="#232F3E"
      />
      <path
        d="M28 14c0-3-2.5-5-6-5s-6 2-6 5 2.5 5 6 5 6-2 6-5zm-6 3c-1.5 0-2.5-1-2.5-3s1-3 2.5-3 2.5 1 2.5 3-1 3-2.5 3z"
        fill="#232F3E"
      />
      <text x="20" y="18" textAnchor="middle" fill="#232F3E" fontSize="11" fontWeight="700">
        a
      </text>
    </svg>
  );
}

function FlipkartIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#2874F0" />
      <text x="20" y="24" textAnchor="middle" fill="#FFE500" fontSize="9" fontWeight="800">
        FK
      </text>
    </svg>
  );
}

function MeeshoIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#9F2089" />
      <text x="20" y="24" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">
        Meesho
      </text>
    </svg>
  );
}

function MyntraIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#FF3F6C" />
      <text x="20" y="24" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">
        M
      </text>
    </svg>
  );
}

function AjioIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#2C4152" />
      <text x="20" y="24" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">
        AJIO
      </text>
    </svg>
  );
}

function NykaaIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#FC2779" />
      <text x="20" y="24" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">
        Nykaa
      </text>
    </svg>
  );
}

export const MARKETPLACE_PLATFORM_ICONS: Record<string, (p: IconProps) => JSX.Element> = {
  Amazon: AmazonIcon,
  Flipkart: FlipkartIcon,
  Meesho: MeeshoIcon,
  Myntra: MyntraIcon,
  Ajio: AjioIcon,
  Nykaa: NykaaIcon,
};
