export default function OffWhiteSparkleBg() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 min-h-full bg-[radial-gradient(ellipse_70%_45%_at_8%_0%,rgba(221,191,93,0.12),transparent_60%),radial-gradient(ellipse_60%_45%_at_95%_10%,rgba(124,92,255,0.12),transparent_58%),radial-gradient(ellipse_80%_55%_at_50%_100%,rgba(80,180,68,0.08),transparent_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 min-h-full opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(243,227,166,0.55) 0.6px, transparent 0.6px)",
          backgroundSize: "22px 26px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 min-h-full opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 0.4px, transparent 0.4px)",
          backgroundSize: "13px 15px",
          backgroundPosition: "5px 3px",
        }}
      />
    </>
  );
}
