const DUST = [
  { left: "12%", top: "22%", size: 3, delay: "0s" },
  { left: "28%", top: "64%", size: 2, delay: "-3s" },
  { left: "46%", top: "18%", size: 2, delay: "-6s" },
  { left: "63%", top: "52%", size: 3, delay: "-1.5s" },
  { left: "78%", top: "28%", size: 2, delay: "-4.5s" },
  { left: "88%", top: "70%", size: 3, delay: "-7s" },
  { left: "6%", top: "78%", size: 2, delay: "-2s" },
  { left: "54%", top: "82%", size: 2, delay: "-5s" },
];

export default function LuxBackdrop({
  horizon = true,
  dust = true,
}: {
  horizon?: boolean;
  dust?: boolean;
}) {
  return (
    <>
      <div aria-hidden className="lux-aurora">
        <span className="lux-blob lux-blob-gold" />
        <span className="lux-blob lux-blob-violet" />
        <span className="lux-blob lux-blob-emerald" />
      </div>
      {horizon ? <div aria-hidden className="lux-horizon" /> : null}
      {dust
        ? DUST.map((d, i) => (
            <span
              key={i}
              aria-hidden
              className="lux-dust"
              style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay }}
            />
          ))
        : null}
      <div aria-hidden className="lux-grain" />
    </>
  );
}
