'use client'

import { useRef, useEffect, useState } from "react";

import Card from "../UI/Card";

const content = [
  {
    title: "Project 1",
    description:
      "This website aims to create stunning, responsive, and user-friendly websites that help businesses establish a strong online presence.",
    img:"/LayeredL1.png"
  },
  {
    title: "Project 2",
    description:
      "The brief of this website is to provide top-notch web design services that combine aesthetics with functionality.",
      img:"/LayeredL1.png"
  },
  {
    title: "Project 3",
    description:
      "A creative approach to a website that focuses on delivering exceptional user experiences through innovative design solutions.",
      img:"/LayeredL1.png"
  },
  {
    title: "Project 4",
    description:
      "This website aims to create stunning, responsive, and user-friendly websites that help businesses establish a strong online presence.",
    img:"/LayeredL1.png"
  },
  {
    title: "Project 4",
    description:
      "The brief of this website is to provide top-notch web design services that combine aesthetics with functionality.",
      img:"/LayeredL1.png"
  },
  {
    title: "Project 5",
    description:
      "A creative approach to a website that focuses on delivering exceptional user experiences through innovative design solutions.",
      img:"/LayeredL1.png"
  }
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

export default function About() {
  return (
    <section id="about" className="flex flex-col w-full bg-white bg-(url[]) min-h-svh z-50 relative">
        <div className="w-full py-35 md:py-45 px-10  bg-black/5">
          <div className="max-w-3xl mx-auto text-black text-2xl bg-background/0 p-6">
            <p>
              A web design studio focused on delivering beautiful,
              user-friendly websites that help businesses grow online.
              Whether you`re looking to build a new site from scratch or
              revamp an existing one, we have the skills and expertise to
              bring your vision to life.
            </p>
          </div>
        </div>
        <div className="w-full py-35 md:py-45 px-10 bg-black/5">
            <div className="max-w-7xl mx-auto text-black text-2xl flex flex-col gap-6 md:gap-10 lg:gap-18">
              {content.map((item, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'md:pl-15' : 'md:pr-15'} pr-0 pl-0 hover:px-0 transition-all duration-800`}>
                  <Card content={item} bottom={index % 2 === 0} />
                </div>
              ))}
            </div>
        </div>
      </section>      
    );
}