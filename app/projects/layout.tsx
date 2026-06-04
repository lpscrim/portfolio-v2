import type { Metadata } from "next";
import Header from "@/app/components/Layout/Header";

export const metadata: Metadata = {
  title: "Projects | Lewis Scrimgeour",
  description: "Web design and development projects by Lewis Scrimgeour — browse recent client work and case studies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Lewis Scrimgeour",
    description: "Web design and development projects by Lewis Scrimgeour — browse recent client work and case studies.",
    url: "https://lpscrim.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Lewis Scrimgeour",
    description: "Web design and development projects by Lewis Scrimgeour — browse recent client work and case studies.",
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
