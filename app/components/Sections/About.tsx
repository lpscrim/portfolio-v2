"use client";

import { useRef, useEffect } from "react";
import Button from "../UI/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../UI/Card";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: "Hillside House",
    description:
      "This website aims to create stunning, responsive, and user-friendly websites that help businesses establish a strong online presence.",
    img: "/projects/hls.svg",
    vid: "/Vids/Hls.mp4",
  },
  {
    title: "No Grout About It",
    description:
      "The brief of this website is to provide top-notch web design services that combine aesthetics with functionality.",
    img: "/projects/gro1.svg",
    vid: "/Vids/Gro.mp4",
  },

  {
    title: "Cioch",
    description:
      "This website aims to create stunning, responsive, and user-friendly websites that help businesses establish a strong online presence.",
    img: "/projects/cio1.svg",
    vid: "/Vids/Cio.mp4",
  },

  {
    title: "Lampman",
    description:
      "A creative approach to a website that focuses on delivering exceptional user experiences through innovative design solutions.",
    img: "/projects/lmp1.svg",
    vid: "/Vids/Lmp.mp4",
  },
];

export default function About() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);

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
      <div className="w-full py-37 px-10 bg-black/5">
        <div className="max-w-3xl mx-auto text-black text-2xl bg-background/0 p-6 text-left md:text-center">
          <h2 ref={headingRef} className="mb-14 text-2xl font-semibold">
            Web Design Studio
          </h2>
          <p ref={paraRef}>
            We specialize in crafting beautiful, user-friendly websites that
            empower businesses to grow and succeed online. Whether you need a
            brand new site or a complete redesign, we have the expertise and
            creativity to bring your vision to life with exceptional results.
          </p>
        </div>
      </div>
      <div className="w-full pb-20 px-10 bg-black/5 ">
        <div className="max-w-3xl mx-auto text-black text-2xl bg-background/0 p-6 text-left md:text-center">
          <h2 className="mb-14 text-2xl font-semibold">Recent Projects</h2>
        </div>
        <div className="max-w-5xl mx-auto text-black flex flex-col gap-10 lg:gap-16">
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
              <Card content={item} />
            </div>
          ))}
          <div className=" flex justify-center">
            <Button className="px-4 py-2 bg-black text-background transition-all">
              <Link href="/projects">
                See more
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
