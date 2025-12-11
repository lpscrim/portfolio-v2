"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    // Set initial position
    gsap.set(formRef.current, { yPercent: -50 });

    // Create timeline
    const uncover = gsap.timeline({ paused: true })
      .to(formRef.current, { yPercent: 0, ease: "none" });

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: "section#photo",
      start: "bottom bottom",
      end: "+=75%",
      markers: true,
      animation: uncover,
      scrub: true,
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    // Cleanup
    return () => {
      uncover.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <form className="w-vw h-[75svh] bg-foreground z-45 overflow-hidden">
      <section
        ref={formRef}
        className="form-container h-[75svh] bg-white flex flex-col text-foreground justify-center items-center"
      >
        TESTING
        <Image
          src="/logo1.svg"
          alt="Logo"
          width={32}
          height={32}
          className="w-8 h-8 scale-75 object-contain"
        />
      </section>
    </form>
  );
}