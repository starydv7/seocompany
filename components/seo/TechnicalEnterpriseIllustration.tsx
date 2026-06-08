/** 3D isometric server stacks + floating icons — Enterprise card */
export default function TechnicalEnterpriseIllustration() {
  const uid = "ent-ill";

  return (
    <div className="relative flex items-center justify-center" aria-hidden>
      <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-3xl" />

      <svg
        viewBox="0 0 220 180"
        className="relative h-full w-full max-h-[11rem] max-w-[15rem] sm:max-h-[12.5rem] sm:max-w-[17rem]"
      >
        <defs>
          <linearGradient id={`${uid}-top`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id={`${uid}-face`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5b21b6" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>
          <filter id={`${uid}-glow`}>
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating icons */}
        <g opacity="0.85">
          <rect x="12" y="24" width="28" height="28" rx="6" fill="rgba(139,92,246,0.25)" stroke="#a78bfa" strokeWidth="1" />
          <text x="26" y="42" textAnchor="middle" fill="#ddd6fe" fontSize="10" fontFamily="monospace">
            {"</>"}
          </text>

          <rect x="168" y="18" width="30" height="30" rx="6" fill="rgba(99,102,241,0.2)" stroke="#818cf8" strokeWidth="1" />
          <circle cx="183" cy="33" r="6" fill="none" stroke="#c4b5fd" strokeWidth="1.5" />
          <circle cx="183" cy="33" r="2" fill="#a78bfa" />

          <rect x="175" y="120" width="32" height="24" rx="5" fill="rgba(124,58,237,0.2)" stroke="#8b5cf6" strokeWidth="1" />
          <text x="191" y="136" textAnchor="middle" fill="#e9d5ff" fontSize="7" fontFamily="monospace">
            0101
          </text>
        </g>

        {/* Back tower */}
        <polygon points="108,32 148,52 148,118 108,98" fill={`url(#${uid}-face)`} opacity="0.8" />
        <polygon points="108,32 128,22 168,42 148,52" fill={`url(#${uid}-top)`} opacity="0.75" />
        <polygon points="148,52 168,42 168,108 148,118" fill="#4338ca" opacity="0.7" />
        {[48, 62, 76, 90, 104].map((y) => (
          <line
            key={`b-${y}`}
            x1="112"
            y1={y}
            x2="144"
            y2={y + 20}
            stroke="#60a5fa"
            strokeWidth="2"
            opacity="0.6"
            filter={`url(#${uid}-glow)`}
          />
        ))}

        {/* Center tower */}
        <polygon points="72,52 112,72 112,148 72,128" fill={`url(#${uid}-face)`} />
        <polygon points="72,52 92,42 132,62 112,72" fill={`url(#${uid}-top)`} />
        <polygon points="112,72 132,62 132,138 112,148" fill="#4c1d95" />
        {[68, 82, 96, 110, 124].map((y, i) => (
          <g key={`c-${y}`}>
            <line x1="76" y1={y} x2="108" y2={y + 20} stroke="#a78bfa" strokeWidth="2.5" opacity="0.9" />
            <circle cx="84" cy={y + 8} r="2.5" fill={i % 2 === 0 ? "#4ade80" : "#60a5fa"} />
          </g>
        ))}

        {/* Front tower */}
        <polygon points="38,78 78,98 78,158 38,138" fill={`url(#${uid}-face)`} />
        <polygon points="38,78 58,68 98,88 78,98" fill="#818cf8" />
        <polygon points="78,98 98,88 98,148 78,158" fill="#5b21b6" />
        {[94, 108, 122, 136].map((y) => (
          <rect
            key={`f-${y}`}
            x="44"
            y={y}
            width="22"
            height="7"
            rx="1.5"
            fill="#c4b5fd"
            opacity="0.55"
          />
        ))}

        <ellipse cx="100" cy="162" rx="72" ry="12" fill="#1e1b4b" opacity="0.4" />
      </svg>
    </div>
  );
}
