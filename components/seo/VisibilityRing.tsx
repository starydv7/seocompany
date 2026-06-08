type VisibilityRingProps = {
  value: number;
  label: string;
  color: string;
  track: string;
  size?: number;
  id: string;
};

export default function VisibilityRing({
  value,
  label,
  color,
  track,
  size = 100,
  id,
}: VisibilityRingProps) {
  const stroke = 7;
  const radius = (size - stroke) / 2 - 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
          <circle cx={cx} cy={cy} r={radius} fill="none" stroke={track} strokeWidth={stroke} />
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{value}%</span>
        </div>
      </div>
      <p className="mt-3 max-w-[6.5rem] text-[11px] font-medium leading-snug text-white/90">{label}</p>
    </div>
  );
}
