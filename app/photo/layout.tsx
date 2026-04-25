import type { Metadata } from "next";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Photography | Lewis Scrimgeour",
  description:
    "Photography portfolio by Lewis Scrimgeour — striking visuals and meaningful storytelling.",
  openGraph: {
    title: "Photography | Lewis Scrimgeour",
    description:
      "Photography portfolio by Lewis Scrimgeour — striking visuals and meaningful storytelling.",
    url: "https://lpscrim.com/photo",
  },
};

export default function PhotosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full bg-background min-h-svh z-50 relative">
    <Header />
      {children}
      <Footer />
    </main>
  );
}
