import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-svh bg-background text-foreground px-4">
      <h1 className="home-title text-6xl sm:text-8xl mb-6 lowercase">404</h1>
      <p className="text-foreground/60 text-lg mb-10">Page not found.</p>
      <Link
        href="/"
        className="px-6 py-2.5 border border-foreground/30 hover:border-foreground/70 transition-all duration-300 text-sm lowercase"
      >
        go home
      </Link>
    </main>
  );
}
