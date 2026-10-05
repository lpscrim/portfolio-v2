import type { Metadata } from "next";
import Header from "@/app/components/Layout/Header";

const title = "Web Design & Development Projects | Lewis Scrimgeour";
const description =
  "Recent web design and development projects by Lewis Scrimgeour, a freelance developer based on the Isle of Skye — from holiday rental sites to portfolios and web apps.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title,
    description,
    url: "https://lpscrim.com/projects",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full bg-background min-h-svh z-50 relative">
    <Header />
      {children}
    </main>
  );
}
