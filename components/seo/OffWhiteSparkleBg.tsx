export default function OffWhiteSparkleBg() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 min-h-full bg-[#f9f7f4]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 min-h-full bg-[radial-gradient(ellipse_85%_55%_at_10%_5%,rgba(255,255,255,0.95),transparent_58%),radial-gradient(ellipse_75%_50%_at_92%_8%,rgba(255,255,255,0.82),transparent_52%),radial-gradient(ellipse_90%_65%_at_50%_95%,rgba(255,252,247,0.9),transparent_62%),radial-gradient(ellipse_40%_30%_at_65%_45%,rgba(255,255,255,0.45),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 min-h-full opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.92) 0.55px, transparent 0.55px)",
          backgroundSize: "20px 24px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 min-h-full opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.75) 0.35px, transparent 0.35px)",
          backgroundSize: "12px 14px",
          backgroundPosition: "5px 3px",
        }}
      />
    </>
  );
}
