"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-svh bg-background text-foreground px-4">
      <h1 className="home-title text-5xl sm:text-7xl mb-6 lowercase">
        something went wrong
      </h1>
      <p className="text-foreground/60 text-lg mb-10">
        An unexpected error occurred.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-2.5 border border-foreground/30 hover:border-foreground/70 transition-all duration-300 text-sm lowercase"
        >
          try again
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 border border-foreground/30 hover:border-foreground/70 transition-all duration-300 text-sm lowercase"
        >
          go home
        </Link>
      </div>
    </main>
  );
}
