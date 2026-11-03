import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/lux/SiteEffects";
import { GoogleTagManagerBody, GoogleTagManagerHead } from "@/components/GoogleTagManager";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE, SEO_PAGES, siteJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { SITE_URL } from "@/lib/site-routes";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_PAGES["/"].title,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_PAGES["/"].description,
  keywords: SEO_PAGES["/"].keywords,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: SEO_PAGES["/"].title,
    description: SEO_PAGES["/"].description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_PAGES["/"].title,
    description: SEO_PAGES["/"].description,
    images: [OG_IMAGE.url],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
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
  themeColor: "#172033",
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
        <JsonLd data={siteJsonLd()} />
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

