type IconProps = { className?: string };

function InstagramIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#ig-grad)" />
      <circle cx="20" cy="20" r="7" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="29" cy="11" r="2" fill="#fff" />
    </svg>
  );
}

function FacebookIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="20" fill="#1877F2" />
      <path
        d="M22.5 21.5h2.8l1.2-4.5h-3.9v-2.5c0-1.3.4-2.2 2.2-2.2h2.1V8.2c-.4 0-1.7-.2-3.3-.2-3.3 0-5.5 2-5.5 5.7v3.3h-3.7v4.5h3.7V32h4.6v-6.5z"
        fill="#fff"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="6" fill="#0A66C2" />
      <path
        d="M11 15h4v15h-4V15zm2-5.5a2.3 2.3 0 110 4.6 2.3 2.3 0 010-4.6zM17 15h3.8v2h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6v9h-4v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2H17V15z"
        fill="#fff"
      />
    </svg>
  );
}

function TwitterIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#000" />
      <path
        d="M23.5 11h3.2l-7 8 8.2 11h-6.4l-5-6.5-5.7 6.5H7.5l7.5-8.6L7.2 11h6.6l4.5 6 5.2-6zm-1.1 17.5h1.8L14.8 12.7h-1.9l9.5 15.8z"
        fill="#fff"
      />
    </svg>
  );
}

function YouTubeIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#FF0000" />
      <path d="M30 14.5a3 3 0 00-2.1-2.2C25.8 12 20 12 20 12s-5.8 0-7.9.3A3 3 0 0010 14.5 31 31 0 009 20a31 31 0 001 5.5 3 3 0 002.1 2.2C14.2 28 20 28 20 28s5.8 0 7.9-.3a3 3 0 002.1-2.2A31 31 0 0031 20a31 31 0 00-1-5.5z" fill="#fff" fillOpacity="0" />
      <path d="M18 24.5v-9l7 4.5-7 4.5z" fill="#fff" />
      <rect x="8" y="13" width="24" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="0" />
      <rect x="8" y="13" width="24" height="14" rx="4" fill="#FF0000" />
      <path d="M18 24.5v-9l7 4.5-7 4.5z" fill="#fff" />
    </svg>
  );
}

function PinterestIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="20" fill="#E60023" />
      <path
        d="M20 10c-5.5 0-10 4.3-10 9.6 0 4 2.4 7.4 5.8 8.8-.1-.7-.1-1.8.1-2.7.1-.6.8-3.8.8-3.8s-.2-.4-.2-1c0-.9.5-1.6 1.2-1.6.6 0 .9.4.9 1 0 .6-.4 1.5-.6 2.3-.2.7.4 1.2 1 1.2 1.2 0 2.1-1.3 2.1-3.1 0-1.6-1.1-2.8-3-2.8-2.1 0-3.4 1.6-3.4 3.4 0 .7.3 1.4.6 1.8.1.1.1.1 0 .4l-.2.8c-.1.3-.3.4-.6.2-1.6-.7-2.5-3-2.5-4.8 0-3.9 2.9-6.7 7-6.7 3.7 0 6.5 2.6 6.5 6.1 0 3.7-2.3 6.5-5.6 6.5-1.1 0-2.1-.6-2.5-1.3l-.7 2.6c-.2.8-.8 1.8-1.2 2.4.9.3 1.9.4 2.9.4 5.5 0 10-4.3 10-9.6C30 14.3 25.5 10 20 10z"
        fill="#fff"
      />
    </svg>
  );
}

function TikTokIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="8" fill="#010101" />
      <path
        d="M24.5 11.5c.5 2.2 2 3.8 4.5 4v3.2c-1.7 0-3.3-.5-4.5-1.4v6.8c0 3.5-2.8 6.3-6.3 6.3s-6.3-2.8-6.3-6.3 2.8-6.3 6.3-6.3c.3 0 .7 0 1 .1v3.4c-.3-.1-.7-.1-1-.1-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V11.5h2.4z"
        fill="#25F4EE"
      />
      <path
        d="M24.5 12.5c.5 2.2 2 3.8 4.5 4v3.2c-1.7 0-3.3-.5-4.5-1.4v6.8c0 3.5-2.8 6.3-6.3 6.3-1.5 0-2.9-.5-4-1.4.9.8 2.1 1.3 3.4 1.3 3.5 0 6.3-2.8 6.3-6.3v-6.8c1.2.9 2.8 1.4 4.5 1.4v-3.2c-1.2-.2-2.3-.8-3.1-1.7-.3-.3-.5-.7-.7-1.1h-2.6v11.8c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .7 0 1 .1v-3.4c-.3-.1-.7-.1-1-.1-3.5 0-6.3 2.8-6.3 6.3s2.8 6.3 6.3 6.3 6.3-2.8 6.3-6.3V12.5h-2.4z"
        fill="#FE2C55"
      />
    </svg>
  );
}

export const SOCIAL_PLATFORM_ICONS: Record<string, (p: IconProps) => JSX.Element> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  "Twitter / X": TwitterIcon,
  YouTube: YouTubeIcon,
  Pinterest: PinterestIcon,
  TikTok: TikTokIcon,
};
