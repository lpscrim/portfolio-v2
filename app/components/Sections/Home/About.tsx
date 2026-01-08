"use client";

import { useRef, useEffect } from "react";
import Button from "../../UI/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../../UI/Card";
import Link from "next/link";
import projects from "../../../data/projects";
import Services from "./Services";

const content = projects.slice(0, 4);

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const firstRef = useRef<HTMLHeadingElement | null>(null);
  const secondRef = useRef<HTMLParagraphElement | null>(null);
  const thirdRef = useRef<HTMLDivElement | null>(null);

  {
    /* Animations */
  }
  useEffect(() => {
    if (firstRef.current) {
      gsap.fromTo(
        firstRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: firstRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (secondRef.current) {
      gsap.fromTo(
        secondRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: secondRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (thirdRef.current) {
      gsap.fromTo(
        thirdRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: thirdRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <section
        id="about"
        className="flex flex-col w-full bg-background bg-fixed min-h-svh z-50 relative"
      >
        {/* About Section */}
        <div className="w-full pt-32 sm:pt-56 pb-16 sm:pb-32 sm:px-10 bg-foreground/5">
          <div className="max-w-3xl xl:max-w-4xl mx-auto text-foreground text-2xl bg-background/0 p-6 text-center">
            <h2 className="hidden mb-8 sm:mb-14 text-2xl sm:text-3xl underline text-foreground/90">
              Web Design / Development
            </h2>
            <p
              ref={firstRef}
              className="text-xl sm:text-2xl xl:text-3xl xl:leading-10"
            >
              Collaborating with a variety of people and businesses to create
              bespoke websites. Whether you need a brand new site or a complete
              redesign, we have the expertise and creativity to bring your
              vision to life with exceptional results.
            </p>
          </div>
        </div>
        {/* Projects Section */}
        <div className="w-full pb-32 sm:px-10 bg-foreground/5">
          <div>
            <div ref={secondRef} className="pb-8 sm:pb-16">
              <Services />
            </div>
            <div ref={thirdRef}>
              <div className="max-w-3xl mx-auto text-foreground text-2xl bg-background/0 px-6 pt-8 pb-8 sm:pb-16 text-center">
                <h2 className=" text-2xl sm:text-3xl underline">
                  Recent Projects
                </h2>
              </div>
              <div className="px-2 max-w-5xl mx-auto text-foreground flex flex-col gap-16 lg:gap-32">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-600 rounded-sm`}
                    style={{
                      transform: "translateY(40px)",
                    }}
                  >
                    <Card content={item} main={true} />
                  </div>
                ))}
                {/* See more button */}
                <div className="mt-16 flex justify-center">
                  <Button className="px-4 py-2 bg-foreground text-background transition-all">
                    <Link href="/projects">
                      See more
                      <span className="sr-only"> web design projects</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
