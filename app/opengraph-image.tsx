import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BrandMarketing — SEO agency and web & app development company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SERVICES = ["SEO & AI Search", "Web Development", "Mobile Apps", "PPC & Social"];

export default async function OpengraphImage() {
  // Small copy of the logo: the full-size PNG pushes this Edge Function past Vercel's size limit.
  const logo = await fetch(new URL("../public/assets/logo-og.png", import.meta.url)).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #fbf8f1 0%, #f3ecdd 100%)",
          color: "#172033",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo as unknown as string} width={96} height={96} alt="" />
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>BrandMarketing</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            SEO Agency, Web & App Development Company
          </div>
          <div style={{ fontSize: 30, color: "#57534e" }}>
            Rank higher. Hire expert developers. Grow revenue.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {SERVICES.map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid #b8923f",
                fontSize: 24,
                color: "#172033",
                background: "rgba(255,255,255,0.7)",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
