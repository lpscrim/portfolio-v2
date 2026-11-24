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
        <div className=" parallax-layer pointer-events-auto fixed top-0 left-0 w-full h-svh flex items-center justify-center z-7">
          {/* Title */}
          <h1
            className="home-title -mt-22 lg:-mt-32 brightness-200 text-background text-3xl sm:text-4xl lg:text-5xl pt-0 pb-1 px-2 sm:pt-1 sm:pb-2 lg:px-3 border-3 sm:border-4 lg:border-5 border-background/80 hover:border-background/0 transition-all rounded-md fade-in duration-700 cursor-pointer "
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
            lewis scrimgeour
          </h1>
        </div>

        <div className="parallax-layer pointer-events-none h-svh fixed bg-[url('/Layered/LayeredL3.webp')] flex items-center justify-center z-10">
          <h2 className="home-title fade-in-2 brightness-180 ml-38 sm:ml-46 lg:ml-62 -mt-7 sm:-mt-3 lg:-mt-7  text-background/80 text-base sm:text-lg lg:text-2xl ">
            web design
          </h2>
        </div>
        <div className="parallax-layer pointer-events-none fixed top-0 left-0 w-full h-svh flex items-center justify-center z-15"></div>
        <div className="parallax-layer pointer-events-none fixed z-15 w-full left-0 top-0 -mt-0.5">
          <div className="w-full h-svh bg-[url('/Layered/LayeredL4.webp')] bg-cover bg-center"></div>
          <div className="w-full h-[50vh] bg-foreground"></div>
        </div>
      </div>
    </section>
  );
}
