"use client";

import { useRef, useEffect } from "react";
import Button from "../../UI/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../../UI/Card";
import Link from "next/link";
import projects from "../../../data/projects";

const content = projects.slice(0, 4);

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);

  {
    /* Animations */
  }
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
    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            paddingLeft: i % 2 === 0 ? "60px" : "0px",
            paddingRight: i % 2 !== 0 ? "60px" : "0px",
            opacity: 0,
            y: 40,
          },
          {
            paddingLeft: "0px",
            paddingRight: "0px",
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col w-full bg-background bg-fixed min-h-svh z-50 relative"
    >
      {/* About Section */}
      <div className="w-full pt-32 sm:pt-42 pb-10 sm:pb-30 sm:px-10 bg-foreground/5">
        <div className="max-w-3xl mx-auto text-foreground text-2xl bg-background/0 p-6 text-left md:text-center">
          <h2
            ref={headingRef}
            className="hidden sm:block mb-8 sm:mb-14 text-2xl sm:text-3xl home-title lowercase underline text-foreground/90"
          >
            Web Design / Development
          </h2>
          <p ref={paraRef} className="text-xl sm:text-2xl">
            Collaborating with a variety of people and businesses to create
            bespoke websites. Whether you need a brand new site or a complete
            redesign, we have the expertise and creativity to bring your vision
            to life with exceptional results.
          </p>
        </div>
      </div>
      {/* Projects Section */}
      <div className="w-full pb-20 sm:px-10 bg-foreground/5 ">
        <div className="max-w-3xl mx-auto text-foreground text-2xl bg-background/0 p-6 text-left md:text-center">
          <h2 className="hidden sm:block mb-8 sm:mb-14 text-2xl sm:text-3xl lowercase home-title underline">
            Recent Projects
          </h2>
        </div>
        <div className="px-2 max-w-5xl mx-auto text-foreground flex flex-col gap-10 lg:gap-16">
          {content.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`transition-all duration-600 rounded-sm`}
              style={{
                paddingLeft: index % 2 === 0 ? "60px" : "0px",
                paddingRight: index % 2 !== 0 ? "60px" : "0px",
                opacity: 0.75,
                transform: "translateY(40px)",
              }}
            >
              <Card content={item} main={true} />
            </div>
          ))}
          {/* See more button */}
          <div className=" flex justify-center">
            <Button className="px-4 py-2 bg-foreground text-background transition-all">
              <Link href="/projects">See more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
