import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/lux/SiteEffects";
import { GoogleTagManagerBody, GoogleTagManagerHead } from "@/components/GoogleTagManager";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "BrandMarketing | SEO & Digital Growth",
  description: "BrandMarketing, premium SEO and digital marketing delivering measurable results.",
  icons: {
    icon: [{ url: "/assets/logo.png", type: "image/png" }],
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#06070d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-slate-50 ${serif.variable} ${mono.variable}`}>
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className={`${inter.className} min-h-screen text-slate-900`}>
        <GoogleTagManagerBody />
        <SiteEffects />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
