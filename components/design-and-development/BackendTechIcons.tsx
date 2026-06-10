type IconProps = { className?: string };

export function NodeJsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2z"
        fill="#339933"
        stroke="#2d7a2d"
        strokeWidth="0.5"
      />
      <text x="12" y="14" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff">
        JS
      </text>
    </svg>
  );
}

export function ExpressIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="3" fill="#1a1a1a" />
      <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff">
        ex
      </text>
    </svg>
  );
}

export function PostgresIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <ellipse cx="12" cy="14" rx="8" ry="6" fill="#336791" />
      <circle cx="12" cy="9" r="5" fill="#336791" />
      <circle cx="10" cy="8" r="1" fill="#fff" />
      <circle cx="14" cy="8" r="1" fill="#fff" />
    </svg>
  );
}

export function RedisIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 8l8-3 8 3-8 3-8-3zm0 4l8 3 8-3M4 16l8 3 8-3" fill="none" stroke="#DC382D" strokeWidth="1.5" />
      <path d="M4 8v8l8 3V11L4 8z" fill="#DC382D" opacity="0.85" />
    </svg>
  );
}

export function DockerIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="7" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="11" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="7" y="6" width="3" height="3" fill="#2496ED" />
      <rect x="11" y="6" width="3" height="3" fill="#2496ED" />
      <path d="M15 13h4c1 0 2-1.5 2-3s-1.5-3-3-3" fill="none" stroke="#2496ED" strokeWidth="1.5" />
    </svg>
  );
}

export function AwsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <text x="12" y="11" textAnchor="middle" fontSize="7" fontWeight="800" fill="#232F3E">
        aws
      </text>
      <path d="M6 15c3 2 9 2 12 0" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const BACKEND_TECH_ICONS = {
  "Node.js": NodeJsIcon,
  "Express.js": ExpressIcon,
  PostgreSQL: PostgresIcon,
  Redis: RedisIcon,
  Docker: DockerIcon,
  AWS: AwsIcon,
} as const;
