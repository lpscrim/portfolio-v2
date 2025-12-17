"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const services = [
    "Web Development",
    "Web Design",
    "E-Commerce",
    "SEO",
    "API /CMS/ DB Integration",
    "Brand Identity",
    "Shopify",
    "Responsive Layouts",
    "UI/UX",
  ];

  return (
    <section className="w-full bg-background relative">
        <div className=" pt-16 sm:pt-20 pb-2 px-4 sm:px-16 bg-foreground/5">
      <div className="max-w-3xl mx-auto text-foreground">
        {/* Services */}
        <div ref={servicesRef} className="py-20 border-t border-b border-foreground/40 mb-10">
       
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm sm:text-base">
            {services.map((service, i) => (
              <p key={i} className="text-foreground">
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
