import Footer from "./components/Layout/Footer";
import Form from "./components/Layout/Form";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "./components/Functions/LenisScroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lewis Scrimgeour | Web Designer & Developer",
  description: "Portfolio of Lewis Scrimgeour - Modern web design and development. Next.js, React, and Tailwind CSS projects.",
  keywords: ["web designer", "web developer", "Next.js", "React", "portfolio"],
  
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
  ],
  manifest: "/site.webmanifest",
  
  // Open Graph - improves social sharing
  openGraph: {
    title: "Lewis Scrimgeour - Web Designer & Developer",
    description: "Explore my portfolio of modern, responsive websites",
    url: "https://lpscrim.com",
    siteName: "Lewis Scrimgeour Portfolio",
    type: "website",
    images: [
      {
        url: "https://lpscrim.com/og-image.png",
        width: 1200,
        height: 630,
      }
    ]
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://lpscrim.com"
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased flex flex-col min-h-screen`}
      >
        <div className="flex-1 flex flex-col">{children}</div>
        
      </body>
      <LenisScroll />
    </html>
  );
}
