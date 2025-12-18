"use client";
import { useEffect } from "react";
import Proj from "../../Sections/Projects/Proj";

export default function ProjectContainer() {
  {/* Parallax Effect */}
  useEffect(() => {
    const desktopSpeeds = [0.004, 0.005, 0.3, 0.008, 1,  0.009];

    const handleResize = () => {
          if (window.innerWidth >= 640) {
            window.location.reload();
          }
        };

    const handleScroll = () => {
      const desktop = document.getElementById("parallax-container");

      if (desktop) {
        const children = desktop.getElementsByClassName("parallax-layer");
        for (let i = 0; i < children.length; i++) {
          const yPos = -(window.pageYOffset * desktopSpeeds[i]);
          (
            children[i] as HTMLElement
          ).style.transform = `translateY(${yPos}px)`;
        }
      }
      
    };

    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  return (
    <section id="heroProjects">
      {/* Parallax Containers */}
      <div
        id="parallax-container"
        className="flex parallax-container relative overflow-x-hidden"
      >
        <div className="parallax-layer pointer-events-none fixed h-[150vh] bg-[url('/Layered/LayeredL1.webp')]">
          <div className="w-full h-full bg-foreground/5"></div>
        </div>

        <div className="parallax-layer pointer-events-none h-[105lvh] fixed bg-[url('/Layered/LayeredL8.webp')] mt-0.5 z-5"></div>
        <div className="parallax-layer pointer-events-auto fixed top-0 left-0 w-full h-[105lvh] flex flex-col items-end justify-start z-7">
          <h2 className="xl:mr-80 md:mr-20 mr-2 home-title mt-170 md:mt-180  text-white text-5xl lg:text-6xl xl:text-7xl  border-4 border-transparent hover:border-white/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2 brightness-150">2025</h2>
          <h2 className="xl:mr-80 md:mr-20 mr-2 home-title mt-120 md:mt-140 xl:mt-200 text-white text-5xl lg:text-6xl xl:text-7xl  border-4 border-transparent hover:border-white/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2 brightness-150">2024</h2>
          <h2 className="hidden xl:mr-80 md:mr-20 mr-2 home-title mt-80 text-white text-5xl lg:text-6xl xl:text-7xl  border-4 border-transparent hover:border-white/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2 brightness-150">2023</h2>        
        </div>

        <div className="parallax-layer pointer-events-none h-[105lvh] fixed bg-[url('/Layered/LayeredL3.webp')] flex items-center justify-center z-10"></div>
        <div className="parallax-layer pointer-events-auto fixed top-0 left-0 w-full h-4vh flex items-center justify-center z-15 px-1 sm:px-4">
          <Proj />
        </div>
        <div className="parallax-layer pointer-events-none fixed z-25 w-full left-0 top-0 -mt-0.5 ">
          <div className="w-full h-[105lvh] bg-[url('/Layered/LayeredL4.webp')] bg-cover bg-center"></div>
          <div className="w-full h-[50svh] -mt-px bg-foreground"></div>
        </div>
      </div>
    </section>
  );
}
