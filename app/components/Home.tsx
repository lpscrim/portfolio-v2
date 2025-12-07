"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const parent = document.getElementById("parallax-container");
      const children = parent?.getElementsByTagName("div");
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const speed = (i + 4) * 0.5;
          const yPos = -(window.pageYOffset * speed) / children.length;
          children[i].style.transform = `translateY(${yPos}px)`;
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
      <div className="absolute h-[220vh]  bg-[url('/Layered1.svg')]"></div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-2">
        <h2 className="home-title pt-60 text-white text-4xl">HELLO</h2>
      </div>
      <div className="h-full fixed bg-[url('/Layered2.svg')] z-5"></div>
      <div className="h-full fixed bg-[url('/Layered3.svg')] flex items-center justify-center z-10"></div>
      
      <div className="h-full fixed top-[100px] bg-[url('/Layered4.svg')] z-15"></div>
    </main>
  );
}
