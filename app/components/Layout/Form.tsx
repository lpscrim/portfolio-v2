"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const formRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!formRef.current || !triggerRef.current) return;

    gsap.set(formRef.current, { yPercent: -50 });

    const uncover = gsap.timeline({ paused: true })
      .to(formRef.current, { yPercent: 0, ease: "none" });

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top bottom",
      end: "+=75%",
      animation: uncover,
      scrub: true,
      markers: true,
      invalidateOnRefresh: true,
    });

    // Refresh on resize for dynamic layouts
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    // Optionally, refresh when images load
    const imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
      img.addEventListener("load", handleResize);
    });

    // Initial refresh after mount
    ScrollTrigger.refresh();

    return () => {
      uncover.kill();
      st.kill();
      window.removeEventListener("resize", handleResize);
      imgs.forEach(img => {
        img.removeEventListener("load", handleResize);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section ref={triggerRef} id="trigger"></section>
      <form className="w-vw h-[80svh] bg-foreground z-45 overflow-hidden">
        <section
          ref={formRef}
          className="form-container h-[80svh] bg-foreground flex flex-col text-white justify-center items-center"
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
    </>
  );
}