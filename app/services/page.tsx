"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Front-End Development",
  "E-Commerce",
  "Design / Re-Design",
  "SEO Optimisation",
  "API Integration",
  "CMS Integration",
  "Brand Identity",
  "Shopify Development",
  "Responsive Layouts",
  "UI/UX",
  "Maintenance & Updates",
  "Performance Optimisation",
  "Copywriting",
];

export default function ServicesPage() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <main className="flex flex-col w-full bg-background min-h-svh z-50 relative">
      <Header />
      <section className="flex flex-col w-full bg-background min-h-svh py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl text-foreground mb-12 lowercase home-title"
          >
            services
          </h1>

          <div
            ref={servicesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 border border-foreground/20 rounded-sm hover:border-foreground/50 transition-all duration-300"
              >
                <p className="text-foreground text-sm sm:text-base lowercase tracking-wide">
                  {service}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-foreground/20">
            <p className="text-foreground/70 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Whether you need a complete website overhaul, UI improvements, API integration, or ongoing maintenance, I deliver tailored solutions that combine technical expertise with creative vision.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}