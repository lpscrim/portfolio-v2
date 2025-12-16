import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";

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
