"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../UI/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Photo() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);
  const [xlScreen, setXlScreen] = useState(false);

  const photos = [
    { src: "/photos/photo (11).webp", alt: "Photo 1" },
    { src: "/photos/photo (2).webp", alt: "Photo 2" },
    { src: "/photos/photo (3).webp", alt: "Photo 3" },
    { src: "/photos/photo (4).webp", alt: "Photo 4" },
    { src: "/photos/photo (5).webp", alt: "Photo 5" },
    { src: "/photos/photo (6).webp", alt: "Photo 6" },
    { src: "/photos/photo (7).webp", alt: "Photo 7" },
    { src: "/photos/photo (8).webp", alt: "Photo 8" },
    { src: "/photos/photo (9).webp", alt: "Photo 9" },
    { src: "/photos/photo (10).webp", alt: "Photo 10" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1040) {
        window.location.reload();
      }
    };
    {
      /* Animations */
    }
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
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  useEffect(() => {
    {
      /* Responsive check */
    }
    function handleResize() {
      setLargeScreen(window.innerWidth >= 1280);
      setXlScreen(window.innerWidth >= 1536);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  {
    /* Determine photos to display */
  }
  const visiblePhotos = !showAll
    ? xlScreen
      ? photos.slice(0, 9)
      : largeScreen
      ? photos.slice(0, 4)
      : photos.slice(0, 3)
    : photos;

  const handleShowAll = () => {
    setShowAll((v) => !v);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <section
      id="photo"
      className="flex flex-col w-full bg-background bg-fixed min-h-svh z-50 relative"
    >
      {/* Photography Section */}
      <div className="w-full py-26 sm:px-10 bg-foreground/5 pb-50">
        <div className="max-w-3xl  mx-auto text-foreground text-2xl bg-background/0 p-6 text-left md:text-center">
          <h2
            ref={headingRef}
            className="hidden mb-8 sm:mb-14 text-2xl sm:text-3xl home-title lowercase text-foreground/90 tracking-wider underline"
          >
            Photography
          </h2>
          <p ref={paraRef} className="text-xl sm:text-2xl">
            Specialising in photography that delivers striking visuals and
            meaningful storytelling.{" "}
          </p>
        </div>
        {/* Photo Gallery */}
        <div className="px-2 mt-16 grid grid-cols-2 2xl:grid-cols-3 gap-4  mx-auto">
          {visiblePhotos.map((photo, index) => (
            <div
              key={index}
              className="col-span-2 xl:col-span-1 max-w-4xl mx-auto pop-up"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          {photos.length > 3 && visiblePhotos.length < 9 && (
            <Button
              className="mt-4 px-4 py-2 bg-foreground text-background  transition-all"
              onClick={handleShowAll}
            >
              {showAll ? "Show less" : "Show more"}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
