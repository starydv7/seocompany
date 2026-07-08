import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleTagManagerBody, GoogleTagManagerHead } from "@/components/GoogleTagManager";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-50">
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className={`${inter.className} min-h-screen text-slate-900`}>
        <GoogleTagManagerBody />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

