"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const speeds = [0.1, 0.3, 0.5, 0.6, 0.7]; // background to foreground
    const handleScroll = () => {
      const parent = document.getElementById("parallax-container");
      const children = parent?.getElementsByClassName("parallax-layer");
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const yPos = -(window.pageYOffset * speeds[i]);
          (children[i] as HTMLElement).style.transform = `translateY(${yPos}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <main
      id="parallax-container"
      className="parallax-container min-h-[400vh] relative overflow-x-hidden"
    >
      <div className="parallax-layer absolute h-[180vh] bg-[url('/Layered1.svg')]"></div>
      <div className="parallax-layer fixed top-0 left-0 w-full h-full flex items-center justify-center z-2">
        <h2 className="home-title pt-60 text-white text-4xl">HELLO</h2>
      </div>
      <div className="parallax-layer h-full fixed bg-[url('/Layered2.svg')] z-5"></div>
      <div className="parallax-layer h-full fixed bg-[url('/Layered3.svg')] flex items-center justify-center z-10"></div>
      <div className="parallax-layer fixed z-15 w-full left-0 top-0">
        <div className="w-full h-screen bg-[url('/Layered4.svg')] bg-cover bg-center"></div>
        <div className="w-full h-screen bg-black"></div>
      </div>
    </main>
  );
}
