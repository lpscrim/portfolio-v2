import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function Card({
  content,
  main,
}: {
  content: {
    title: string;
    slug: string;
    description: string;
    img: string;
    vid: string;
    brief?: string;
  };
  main?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    function checkInMiddle() {
      if (!cardRef.current || !videoRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const middleStart = vh * 0.25;
      const middleEnd = vh * 0.75;
      const cardMiddle = rect.top + rect.height / 2;
      const active = cardMiddle >= middleStart && cardMiddle <= middleEnd;
      setIsActive(active);
      if (active) {
        if (videoRef.current.play) videoRef.current.play();
      } else {
        if (videoRef.current.pause) videoRef.current.pause();
        if (typeof videoRef.current.currentTime === 'number') videoRef.current.currentTime = 0;
      }
    }

    checkInMiddle();
    window.addEventListener("scroll", checkInMiddle, { passive: true });
    window.addEventListener("resize", checkInMiddle);

    return () => {
      window.removeEventListener("scroll", checkInMiddle);
      window.removeEventListener("resize", checkInMiddle);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={
        "group w-full h-full overflow-hidden rounded-sm hover:shadow-md cursor-pointer justify-center flex flex-col relative transition-all duration-500 ease-in-out " +
        (isActive ? "brightness-100" : "brightness-90")
      }
    >
      <Link href={"/projects/" + content.slug} className="w-full h-full">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${content.img})` }}
        />
        <div
          className={
            `absolute inset-0 w-full h-full ` +
            (main
              ? "bg-background/65 backdrop-blur"
              : " bg-foreground/65 backdrop-blur")
          }
        />

        {/* Content */}
        <div className="px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-10 xl:px-12 xl:py-12 relative items-center justify-center flex z-10 ">
          <video
            ref={videoRef}
            className="w-full h-auto object-cover rounded-sm aspect-video "
            src={content.vid}
            preload="metadata"
            muted
            playsInline
            poster={content.img}
          />
        </div>
        <div
          className={`px-4 py-2 sm:px-6`}
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="text-base -mt-5 w-full justify-center flex">
            <div className={`md:text-xl inline-block rounded-xs ` + (main ? "group-hover:bg-background transition-all duration-700" : "")} >
              <h2
                className={
                  `group-hover:bg-foreground/5 px-4 lowercase home-title tracking-wide pt-0.5 transition-all duration-700 text-lg sm:text-xl` +
                  (main ? " text-foreground" : " text-background")
                }
              >
                {content.title}
              </h2>
            </div>
          </div>
        </div>
      </Link>
      {/* Overlay moved outside Link */}
      {!main && content.brief && (
        <div className="absolute inset-0 z-99 w-full h-full bg-foreground/95 text-background flex flex-col opacity-0 items-start justify-center text-center group-hover:opacity-100 transition-opacity duration-600 pointer-events-none">
          <p className="pt-12 md:pt-16 lg:pt-24 text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-10 xl:px-16 w-full h-full  ">
            {content.brief}
          </p>
          <p className="home-title px-4 pb-10 lg:pb-16 mx-auto text-sm sm:text-base">click for more details</p>
        </div>
      )}
    </div>
  );
}
