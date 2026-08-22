import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORIGINS 2026 — BUILD WHAT SHOULD EXIST",
  description: "A 24-hour innovation hackathon for ideas that solve real problems, improve lives, and create meaningful impact.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${interSans.variable} bg-white text-black`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-white text-black font-inter antialiased selection:bg-black selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

