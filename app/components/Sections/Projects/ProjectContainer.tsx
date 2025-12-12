"use client";
import { useEffect } from "react";
import Proj from "../../Sections/Projects/Proj";

export default function ProjectContainer() {
  useEffect(() => {
    const desktopSpeeds = [0.004, 0.005, 0.3, 0.009, 1,  0.012];

    const handleResize = () => {
      window.location.reload();
    };

    const handleScroll = () => {
      const desktop = document.getElementById("parallax-container");

        const children = desktop.getElementsByClassName("parallax-layer");
        for (let i = 0; i < children.length; i++) {
          const yPos = -(window.pageYOffset * desktopSpeeds[i]);
          (
            children[i] as HTMLElement
          ).style.transform = `translateY(${yPos}px)`;
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
      <div
        id="parallax-container"
        className="hidden sm:flex parallax-container relative overflow-x-hidden"
      >
        <div className="parallax-layer pointer-events-none fixed h-[150vh] bg-[url('/Layered/LayeredL1.png')]"></div>

        <div className="parallax-layer pointer-events-none h-full fixed bg-[url('/Layered/LayeredL8.png')] mt-0.5 z-5"></div>
        <div className="parallax-layer pt-100 pointer-events-auto fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-7">
          <h2 className="home-title mt-100 text-background text-5xl lg:text-6xl xl:text-7xl  border-4 border-transparent hover:border-background/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2">2025</h2>
          <h2 className="home-title mt-100 text-background text-5xl lg:text-6xl xl:text-7xl  border-4 border-transparent hover:border-background/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2">2024</h2>
        </div>

        <div className="parallax-layer pointer-events-none h-full fixed bg-[url('/Layered/LayeredL3.png')] flex items-center justify-center z-10"></div>
        <div className="parallax-layer pointer-events-none fixed top-0 left-0 w-full h-4vh flex items-center justify-center z-15">
          <Proj />
        </div>
        <div className="parallax-layer pointer-events-none fixed z-25 w-full left-0 top-0 -mt-0.5">
          <div className="w-full h-svh bg-[url('/Layered/LayeredL4.png')] bg-cover bg-center"></div>
          <div className="w-full h-[50vh] bg-foreground"></div>
        </div>
      </div>
    </section>
  );
}
