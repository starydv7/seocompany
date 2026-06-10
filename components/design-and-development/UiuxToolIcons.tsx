type IconProps = { className?: string };

export function FigmaIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="4" y="4" width="6" height="6" rx="3" fill="#F24E1E" />
      <rect x="4" y="10" width="6" height="6" rx="3" fill="#A259FF" />
      <rect x="10" y="10" width="6" height="6" rx="3" fill="#1ABCFE" />
      <rect x="10" y="4" width="6" height="6" rx="3" fill="#0ACF83" />
      <rect x="4" y="16" width="6" height="6" rx="3" fill="#FF7262" />
    </svg>
  );
}

export function AdobeXdIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="4" fill="#470137" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#FF61F6">
        XD
      </text>
    </svg>
  );
}

export function SketchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3L4 9l8 12 8-12-8-6z" fill="#F7B500" />
      <path d="M12 3v6l8 6-8-6V3z" fill="#F7D154" />
      <path d="M4 9h16L12 3 4 9z" fill="#E8A000" opacity="0.5" />
    </svg>
  );
}

export function PhotoshopIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="4" fill="#001E36" />
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#31A8FF">
        Ps
      </text>
    </svg>
  );
}

export function IllustratorIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="4" fill="#330000" />
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FF9A00">
        Ai
      </text>
    </svg>
  );
}

export function InVisionIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#FF3366" />
      <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff">
        in
      </text>
    </svg>
  );
}

export function MazeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="5" fill="#5B4FE9" />
      <path
        d="M7 8h4v4H7V8zm6 0h4v4h-4V8zM7 14h4v2H7v-2zm6 0h4v2h-4v-2z"
        fill="#fff"
        opacity="0.9"
      />
    </svg>
  );
}

export function ZeplinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="5" fill="#FDBD39" />
      <path
        d="M8 6l8 6-8 6V6z"
        fill="#fff"
      />
      <path
        d="M8 6v12l4-6-4-6z"
        fill="#F5A623"
        opacity="0.6"
      />
    </svg>
  );
}

export function NotionIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="5" y="5" width="14" height="14" rx="2" fill="#000" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        N
      </text>
    </svg>
  );
}

export const UIUX_TOOL_ICONS = {
  Figma: FigmaIcon,
  "Adobe XD": AdobeXdIcon,
  Sketch: SketchIcon,
  Photoshop: PhotoshopIcon,
  Illustrator: IllustratorIcon,
  InVision: InVisionIcon,
  Maze: MazeIcon,
  Zeplin: ZeplinIcon,
  Notion: NotionIcon,
} as const;
