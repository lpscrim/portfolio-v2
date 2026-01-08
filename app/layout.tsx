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
  title: "Lewis Scrimgeour | Web Design & Development",
  description: "Portfolio of Lewis Scrimgeour - Modern web design and development.",
  keywords: ["web designer", "web design", "web developent", "web developer", "Next.js", "React", "portfolio"],
  
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
  ],
  
  openGraph: {
    title: "Lewis Scrimgeour - Web Design & Development",
    description: "Portfolio of Lewis Scrimgeour - Modern web design and development.",
    url: "https://lpscrim.com",
    siteName: "Lewis Scrimgeour Portfolio",
    type: "website",
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
    <html lang="en" className="bg-black">
      <body
        className={`bg-foreground overflow-x-hidden antialiased flex flex-col min-h-screen`}
      >
        <div className="flex-1 flex flex-col bg-foreground/5">{children}</div>
        
      </body>
      <LenisScroll />
    </html>
  );
}
