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

  // Scroll-based animation for main cards
  useEffect(() => {
    if (!main) return;

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

      if (active && videoRef.current.paused) {
        videoRef.current.play().catch((e) => {
          console.error("Video play failed:", e);
        });
      } else if (!active && !videoRef.current.paused) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }

    checkInMiddle();
    window.addEventListener("scroll", checkInMiddle, { passive: true });
    window.addEventListener("resize", checkInMiddle, { passive: true });

    const cleanupVideo = videoRef.current;

    return () => {
      window.removeEventListener("scroll", checkInMiddle);
      window.removeEventListener("resize", checkInMiddle);
      if (cleanupVideo && !cleanupVideo.paused) {
        cleanupVideo.pause();
      }
    };
  }, [main]);

  // Mouse-over animation for non-main cards
  useEffect(() => {
    if (main) return;

    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    const handleMouseEnter = () => {
      if (video.paused) {
        video.play().catch((e) => {
          console.error("Video play failed:", e);
        });
      }
    };

    const handleMouseLeave = () => {
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [main]);

  return (
    <div
      ref={cardRef}
      className={
        "group w-full h-full overflow-hidden rounded-sm hover:shadow-md cursor-pointer justify-center flex flex-col relative transition-all duration-500 ease-in-out " +
        (main && isActive ? "brightness-100" : "brightness-90")
      }
    >
      <Link href={"/projects/" + content.slug} className="w-full h-full">
        {/* Background image */}
        <div
          className={"absolute inset-0 w-full h-full bg-cover bg-center " + 
          (main ? "opacity-80" : "opacity-50")
          }
          style={{ backgroundImage: `url(${content.img})` }}
        />
        <div
          className={
            `absolute inset-0 w-full h-full ` +
            (main
              ? "bg-background/80 backdrop-blur"
              : " bg-foreground/75 backdrop-blur")
          }
        />

        {/* Content */}
        <div className="px-4 py-4 md:px-6 md:py-6 lg:px-12 lg:py-8 xl:px-14 xl:py-8 relative items-center justify-center flex z-10 ">
          <video
            ref={videoRef}
            className="w-full h-auto object-cover rounded-sm aspect-video"
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
    </div>
  );
}
