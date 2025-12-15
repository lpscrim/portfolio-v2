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
  title: "Lewis Scrimgeour Web Design",
  description:
    "Portfolio website of Lewis Scrimgeour, a web designer and developer specializing in creating modern, responsive, and user-friendly websites.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
  ],
  manifest: "/site.webmanifest",
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
        <section id="trigger"></section>
        <Form />
        <Footer />
      </body>
      <LenisScroll />
    </html>
  );
}
