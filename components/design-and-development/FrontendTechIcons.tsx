type TechIconProps = { className?: string };

export function ReactIcon({ className = "h-5 w-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextJsIcon({ className = "h-5 w-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#0f172a" />
      <path d="M8 16V8l5.5 8H8zm4-8h4v8h-4V8z" fill="#fff" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "h-5 w-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        TS
      </text>
    </svg>
  );
}

export function TailwindIcon({ className = "h-5 w-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 6c-3.5 0-5.7 1.75-6.6 5.25 1.3-1.75 2.8-2.4 4.5-1.95.98.24 1.68.94 2.45 1.71.71.71 1.53 1.53 3.15 1.53 3.5 0 5.7-1.75 6.6-5.25-1.3 1.75-2.8 2.4-4.5 1.95-.98-.24-1.68-.94-2.45-1.71C14.44 6.82 13.62 6 12 6zM5.4 12c-3.5 0-5.7 1.75-6.6 5.25 1.3-1.75 2.8-2.4 4.5-1.95.98.24 1.68.94 2.45 1.71.71.71 1.53 1.53 3.15 1.53 3.5 0 5.7-1.75 6.6-5.25-1.3 1.75-2.8 2.4-4.5 1.95-.98-.24-1.68-.94-2.45-1.71-.71-.71-1.53-1.53-3.15-1.53z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function SassIcon({ className = "h-5 w-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 4c-4.5 0-8 1.2-8 4.5 0 2.8 3.6 3.6 3.6 5.4 0 1-0.8 1.7-2.1 1.7-1.2 0-2.1-.6-2.7-1.4l1-2.2c.4.5 1 .8 1.6.8.6 0 1-.3 1-.8 0-1.2-3.2-1.6-3.2-4.6C3.2 5.8 7.2 4 12 4zm6.5 3.2c-1.8 0-3.2.8-3.8 2.1l2 .9c.3-.7 1-.9 1.7-.9 1.2 0 2 .7 2 1.8 0 2.3-3.5 2.9-3.5 5.5 0 .9.4 1.6 1.2 2.1l-1.1 2.1c-1.5-.8-2.3-2.1-2.3-3.7 0-2.6 3.5-3.2 3.5-5.5 0-1.5-1.2-2.4-2.9-2.4z"
        fill="#CD6799"
      />
    </svg>
  );
}

export function Html5Icon({ className = "h-5 w-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 3h16l-1.5 17-6.5 2-6.5-2L4 3z" fill="#E44D26" />
      <path d="M12 20.5l4.5-1.3.5-5.7H12v2.5h2.8l-.2 2.1L12 19.2V20.5zM12 11.5h5l.3-3.5H12v3.5z" fill="#fff" />
    </svg>
  );
}

export function Css3Icon({ className = "h-5 w-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 3h16l-1.5 17-6.5 2-6.5-2L4 3z" fill="#1572B6" />
      <path d="M12 20.5l4.5-1.3.5-5.7H12v2.5h2.8l-.2 2.1L12 19.2V20.5zM12 11.5h5l.3-3.5H12v3.5z" fill="#fff" />
    </svg>
  );
}

export const FRONTEND_TECH_ICONS = {
  React: ReactIcon,
  "Next.js": NextJsIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  Sass: SassIcon,
  HTML5: Html5Icon,
  CSS3: Css3Icon,
} as const;
