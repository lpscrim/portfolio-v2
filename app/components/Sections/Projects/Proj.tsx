import { useEffect, useState, useRef } from "react";
import Card from "../../UI/Card";
import projects from "../../../data/projects";

export default function Proj() {
  const [atTop, setAtTop] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtTop(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full flex flex-col gap-y-50 sm:pl-4 xl:pl-0 xl:max-w-7xl xl:mx-auto items-start">
      {/* Sentinel element for IntersectionObserver - detects when we're at top */}
      <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-1" />
      <h2 className="home-title mt-100 xl:pr-180 lg:pr-120 md:pr-80 sm:pr-40 pr-20 text-background text-5xl lg:text-6xl xl:text-7xl mx-auto font-semibold transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2">
        projects
      </h2>
      {atTop && (
        <div
          className="flex flex-col items-center mt-20 lg:32 xl:36 bounce-in-right transition-opacity duration-500 xl:pr-180 lg:pr-120 md:pr-80 sm:pr-40 pr-20"
          style={{
            opacity: atTop ? 1 : 0,
            pointerEvents: atTop ? "auto" : "none",
          }}

        >
          <svg
            className="w-6 h-6 mt-1 text-background/70"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-5 5-5-5"
            />
          </svg>
        </div>
      )}

      <div className="sm:pl-8 max-w-3xl xl:max-w-4xl mt-200 text-foreground flex flex-col gap-y-40 lg:gap-y-50">
        {projects.map((project, index) => (
          <div key={index} className="rounded-sm" id={`project-${project.slug}`}>
            <Card content={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
