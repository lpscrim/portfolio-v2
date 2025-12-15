"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  // Tester state for manual mode switching
  const [mode, setMode] = useState<"auto" | "mobile" | "desktop">("auto");

  useEffect(() => {
    const mobileSpeeds = [0.2, 0.3, 0.5, 0.6, 0.7];
    const desktopSpeeds = [0.1, 0.2, 0.4, 0.3, 1.4, 0.5];

    const handleResize = () => {
      if (mode === "auto" && window.innerWidth >= 640) {
        window.location.reload();
      }
    };

    const handleScroll = () => {
      // Determine which container is active
      const isMobile =
        mode === "mobile" ||
        (mode === "auto" && window.innerWidth < 640);
      const isDesktop =
        mode === "desktop" ||
        (mode === "auto" && window.innerWidth >= 640);

      const mobile = document.getElementById("parallax-container-mobile");
      const desktop = document.getElementById("parallax-container-desktop");

      if (mobile && isMobile) {
        const children = mobile.getElementsByClassName("parallax-layer");
        for (let i = 0; i < children.length; i++) {
          const yPos = -(window.pageYOffset * mobileSpeeds[i]);
          (children[i] as HTMLElement).style.transform = `translateY(${yPos}px)`;
        }
      }
      if (desktop && isDesktop) {
        const children = desktop.getElementsByClassName("parallax-layer");
        for (let i = 0; i < children.length; i++) {
          const yPos = -(window.pageYOffset * desktopSpeeds[i]);
          (children[i] as HTMLElement).style.transform = `translateY(${yPos}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
      window.removeEventListener("resize", handleResize, false);
    };
  }, [mode]);

  // Helper to determine which container to show
  const showMobile =
    mode === "mobile" || (mode === "auto" && typeof window !== "undefined" && window.innerWidth < 640);
  const showDesktop =
    mode === "desktop" || (mode === "auto" && typeof window !== "undefined" && window.innerWidth >= 640);

  return (
    <section id="hero">
      {/* Tester Button */}
      <div className="fixed top-4 right-4 z-9999 flex gap-2">
        <button
          className={`px-2 py-1 rounded ${mode === "auto" ? "bg-secondary text-background" : "bg-background text-secondary"} border`}
          onClick={() => setMode("auto")}
        >
          Auto
        </button>
        <button
          className={`px-2 py-1 rounded ${mode === "mobile" ? "bg-secondary text-background" : "bg-background text-secondary"} border`}
          onClick={() => setMode("mobile")}
        >
          Mobile
        </button>
        <button
          className={`px-2 py-1 rounded ${mode === "desktop" ? "bg-secondary text-background" : "bg-background text-secondary"} border`}
          onClick={() => setMode("desktop")}
        >
          Desktop
        </button>
      </div>
      {/* Parallax Containers */}
      {showMobile && (
        <div
          id="parallax-container-mobile"
          className="flex parallax-container relative overflow-x-hidden"
        >
          <div className="parallax-layer pointer-events-none fixed h-[150vh] bg-[url('/Layered/Layered1.svg')]"></div>
          <div className="parallax-layer pointer-events-auto fixed top-0 left-0 w-full h-svh flex items-center justify-center z-2">
            {/* Mobile Title */}
            <h2
              className="home-title -mt-60 text-background/80 text-3xl fade-in border-2 border-transparent hover:border-background/80 rounded-sm pb-0.5 pt-1 px-1.5 transition-all duration-1500 cursor-pointer"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              lewis scrimgeour
            </h2>
          </div>
          <div className="parallax-layer pointer-events-none h-svh fixed bg-[url('/Layered/Layered2.svg')] z-5"></div>
          <div className="parallax-layer pointer-events-none h-svh fixed bg-[url('/Layered/Layered3.svg')] flex items-center justify-center z-10"></div>
          <div className="parallax-layer pointer-events-none fixed z-15 w-full left-0 top-0 ">
            <div className="w-full h-svh bg-[url('/Layered/Layered4.svg')] bg-cover bg-center"></div>
            <div className="w-full h-svh bg-foreground "></div>
          </div>
        </div>
      )}
      {showDesktop && (
        <div
          id="parallax-container-desktop"
          className="flex parallax-container relative overflow-x-hidden"
        >
          <div className="parallax-layer pointer-events-none fixed h-[150vh] bg-[url('/Layered/LayeredL1.png')]"></div>

          <div className="parallax-layer pointer-events-none h-full fixed bg-[url('/Layered/LayeredL8.png')] mt-0.5 z-5"></div>
          <div className="parallax-layer pointer-events-auto fixed top-0 left-0 w-full h-full flex items-center justify-center z-7">
            {/* Desktop Title */}
            <h2
              className="home-title -mt-22 xl:-mt-28 text-background text-5xl lg:text-6xl xl:text-7xl border-4 border-transparent hover:border-background/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2 cursor-pointer"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              lewis scrimgeour
            </h2>
          </div>

          <div className="parallax-layer pointer-events-none h-full fixed bg-[url('/Layered/LayeredL3.png')] flex items-center justify-center z-10"></div>
          <div className="parallax-layer pointer-events-none fixed top-0 left-0 w-full h-full flex items-center justify-center z-15">
            <h2 className="home-title pt-[110vh] text-background/80 text-2xl"></h2>
          </div>
          <div className="parallax-layer pointer-events-none fixed z-15 w-full left-0 top-0 -mt-0.5">
            <div className="w-full h-screen bg-[url('/Layered/LayeredL4.png')] bg-cover bg-center"></div>
            <div className="w-full h-[50vh] bg-foreground"></div>
          </div>
        </div>
      )}
    </section>
  );
}
