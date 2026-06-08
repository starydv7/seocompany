type CircularScoreProps = {
  score: number;
  max?: number;
  size?: number;
  gradientId?: string;
};

export default function CircularScore({
  score,
  max = 100,
  size = 96,
  gradientId = "scoreGradient",
}: CircularScoreProps) {
  const stroke = size >= 100 ? 10 : 8;
  const radius = (size - stroke) / 2 - 4;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(Math.max(score / max, 0), 1);
  const offset = circumference * (1 - pct);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="#e8ecff"
          strokeWidth={stroke}
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold leading-none text-indigo-700">{score}</span>
        <span className="mt-0.5 text-[11px] font-medium text-slate-400">/{max}</span>
      </div>
    </div>
  );
}
