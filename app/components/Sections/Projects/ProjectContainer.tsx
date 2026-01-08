"use client";
import Proj from "../../Sections/Projects/Proj";
import { useParallax } from "../../Functions/hooks/useParallax";
import Image from "next/image";

export default function ProjectContainer() {
  const desktopSpeeds = [0.004, 0.005, 0.3, 0.008, 1, 0.009];
  useParallax("parallax-container", desktopSpeeds, true);

  return (
    <section id="heroProjects">
      {/* Parallax Containers */}
      <div
        id="parallax-container"
        className="flex parallax-container relative overflow-x-hidden"
      >
        <div className="parallax-layer pointer-events-none fixed h-[150vh] w-full will-change-transform">
          <Image
            src="/Layered/LayeredL1.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="w-full h-full bg-foreground/5 relative z-10"></div>
        </div>

        <div className="parallax-layer pointer-events-none h-[105lvh] w-full fixed mt-0.5 z-5 will-change-transform">
          <Image
            src="/Layered/LayeredL8.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="parallax-layer pointer-events-auto fixed top-0 left-0 w-full h-[105lvh] flex flex-col items-end justify-start z-7">
          <h2 className="xl:mr-80 md:mr-20 mr-2 home-title mt-170 md:mt-180  text-white text-5xl lg:text-6xl xl:text-7xl  border-4 border-transparent hover:border-white/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2 brightness-150">2025</h2>
          <h2 className="xl:mr-80 md:mr-20 mr-2 home-title mt-120 md:mt-140 xl:mt-200 text-white text-5xl lg:text-6xl xl:text-7xl  border-4 border-transparent hover:border-white/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2 brightness-150">2024</h2>
          <h2 className="hidden xl:mr-80 md:mr-20 mr-2 home-title mt-80 text-white text-5xl lg:text-6xl xl:text-7xl  border-4 border-transparent hover:border-white/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2 brightness-150">2023</h2>        
        </div>

        <div className="parallax-layer pointer-events-none h-[105lvh] w-full fixed flex items-center justify-center z-10 will-change-transform">
          <Image
            src="/Layered/LayeredL3.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="parallax-layer pointer-events-auto fixed top-0 left-0 w-full h-4vh flex items-center justify-center z-15 px-1 sm:px-4 will-change-transform">
          <Proj />
        </div>
        <div className="parallax-layer pointer-events-none fixed z-25 w-full left-0 top-0 -mt-0.5 will-change-transform">
          <div className="w-full h-[105lvh] relative">
            <Image
              src="/Layered/LayeredL4.webp"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="w-full h-[50svh] -mt-px bg-foreground"></div>
        </div>
      </div>
    </section>
  );
}
