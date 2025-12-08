"use client";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const mobileSpeeds = [0.2, 0.3, 0.5, 0.6, 0.7];
    const desktopSpeeds = [0.1, 0.2, 0.4, 0.3, 1.4,  0.5];

    const handleScroll = () => {
      const mobile = document.getElementById("parallax-container-mobile");
      const desktop = document.getElementById("parallax-container-desktop");

      if (mobile && window.innerWidth < 640) {
        const children = mobile.getElementsByClassName("parallax-layer");
        for (let i = 0; i < children.length; i++) {
          const yPos = -(window.pageYOffset * mobileSpeeds[i]);
          (
            children[i] as HTMLElement
          ).style.transform = `translateY(${yPos}px)`;
        }
      }
      if (desktop && window.innerWidth >= 640) {
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
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <section id="hero">
      <div
        id="parallax-container-mobile"
        className="sm:hidden flex parallax-container relative overflow-x-hidden"
      >
        <div className="parallax-layer fixed h-[150vh] bg-[url('/Layered1.svg')]"></div>
        <div className="parallax-layer fixed top-0 left-0 w-full h-full flex items-center justify-center z-2">
          <h2 className="home-title pt-60 text-white text-4xl fade-in">Welcome</h2>
        </div>
        <div className="parallax-layer h-full fixed bg-[url('/Layered2.svg')] z-5"></div>
        <div className="parallax-layer h-full fixed bg-[url('/Layered3.svg')] flex items-center justify-center z-10"></div>
        <div className="parallax-layer fixed z-15 w-full left-0 top-0">
          <div className="w-full h-screen bg-[url('/Layered4.svg')] bg-cover bg-center"></div>
          <div className="w-full h-screen bg-black"></div>
        </div>
      </div>
      <div
        id="parallax-container-desktop"
        className="hidden sm:flex parallax-container relative overflow-x-hidden"
      >
        <div className="parallax-layer fixed h-[150vh] bg-[url('/LayeredL1.png')]"></div>

        <div className="parallax-layer h-full fixed bg-[url('/LayeredL8.png')] mt-0.5 z-5"></div>
        <div className="parallax-layer fixed top-0 left-0 w-full h-full flex items-center justify-center z-7">
          <h2 className="home-title -mt-23 xl:-mt-28  text-white text-6xl fade-in">WELCOME</h2>
        </div>

        <div className="parallax-layer h-full fixed bg-[url('/LayeredL3.png')] flex items-center justify-center z-10"></div>
        <div className="parallax-layer fixed top-0 left-0 w-full h-full flex items-center justify-center z-15">
          <h2 className="home-title pt-[110vh] text-white text-4xl"></h2>
        </div>
        <div className="parallax-layer fixed z-15 w-full left-0 top-0">
          <div className="w-full h-screen bg-[url('/LayeredL4.png')] bg-cover bg-center"></div>
          <div className="w-full h-[50vh] bg-black"></div>
        </div>
      </div>
    </section>
  );
}
