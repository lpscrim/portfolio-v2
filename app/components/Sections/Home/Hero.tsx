"use client";
import { useParallax } from "../../Functions/hooks/useParallax";

export default function Hero() {
  const speeds = [0.1, 0.2, 0.4, 0.3, 1.4, 0.5];
  useParallax("parallax-container", speeds, true);

  return (
    <section id="hero">
      {/* Parallax Container */}
      <div
        id="parallax-container"
        className="flex parallax-container relative overflow-x-hidden"
      >
        <div className="parallax-layer pointer-events-none fixed h-[150vh] bg-[url('/Layered/LayeredL1.webp')]">
          <div className="w-full h-full bg-foreground/0"></div>
        </div>

        <div className="parallax-layer pointer-events-none h-svh fixed bg-[url('/Layered/LayeredL8.webp')] mt-0.5 z-5"></div>
        <div className="parallax-layer pointer-events-auto fixed top-0 left-0 w-full h-svh flex items-center justify-center z-7">
          {/* Desktop Title */}
          <h1
            className="home-title -mt-24 xl:-mt-28 2xl:-mt-34 brightness-150 text-background text-5xl lg:text-6xl xl:text-7xl border-2 border-transparent hover:border-background/80 transition-all duration-800 rounded-md fade-in py-3 px-6 cursor-pointer "
            tabIndex={0}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Lewis Scrimgeour 
          </h1>
        </div>

        <div className="parallax-layer pointer-events-none h-svh fixed bg-[url('/Layered/LayeredL3.webp')] flex items-center justify-center z-10"></div>
        <div className="parallax-layer pointer-events-none fixed top-0 left-0 w-full h-svh flex items-center justify-center z-15">
          <h2 className="home-title pt-[110vh] text-background/80 text-2xl"></h2>
        </div>
        <div className="parallax-layer pointer-events-none fixed z-15 w-full left-0 top-0 -mt-0.5">
          <div className="w-full h-svh bg-[url('/Layered/LayeredL4.webp')] bg-cover bg-center"></div>
          <div className="w-full h-[50vh] bg-foreground"></div>
        </div>
      </div>
    </section>
  );
}
