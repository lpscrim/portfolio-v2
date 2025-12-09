"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../UI/Card";

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: "Project 1",
    description:
      "This website aims to create stunning, responsive, and user-friendly websites that help businesses establish a strong online presence.",
    img: "/LayeredL1.png",
  },
  {
    title: "Project 2",
    description:
      "The brief of this website is to provide top-notch web design services that combine aesthetics with functionality.",
    img: "/LayeredL1.png",
  },
  {
    title: "Project 3",
    description:
      "A creative approach to a website that focuses on delivering exceptional user experiences through innovative design solutions.",
    img: "/LayeredL1.png",
  },
  {
    title: "Project 4",
    description:
      "This website aims to create stunning, responsive, and user-friendly websites that help businesses establish a strong online presence.",
    img: "/LayeredL1.png",
  },
];

export default function About() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
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
            duration: 1,
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
      className="flex flex-col w-full bg-white bg-fixed min-h-svh z-50 relative"
    >
      <div className="w-full py-35 px-10 bg-black/5">
        <div className="max-w-3xl mx-auto text-black text-2xl bg-background/0 p-6 text-center">
          <p ref={sectionRef}>
            A web design studio focused on delivering beautiful, user-friendly
            websites that help businesses grow online. Whether you`re looking to
            build a new site from scratch or revamp an existing one, we have the
            skills and expertise to bring your vision to life.
          </p>
        </div>
      </div>
      <div className="w-full pb-20 px-10 bg-black/5">
        <div className="max-w-6xl mx-auto text-black text-2xl flex flex-col gap-6 md:gap-10 lg:gap-24">
          {content.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`transition-all duration-600`}
              style={{
                paddingLeft: index % 2 === 0 ? "60px" : "0px",
                paddingRight: index % 2 !== 0 ? "60px" : "0px",
                opacity: 0.75,
                transform: "translateY(40px)",
              }}
            >
              <Card content={item} bottom={index % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
