import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import projects from "../../../data/projects";

export default function Proj() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full flex flex-col gap-y-50 xl:mr-150 lg:mr-80 md:mr-50 sm:mr-30 mr-15">
      <h2 className="home-title mt-100  text-background text-5xl lg:text-6xl xl:text-7xl mx-auto font-semibold border-4 border-transparent hover:border-background/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2">
        projects
      </h2>
      {atTop && (
        <div
          className="flex flex-col items-center mt-20 lg:32 xl:36 cursor-pointer bounce-in-right transition-opacity duration-500 xl:pl-150 lg:pl-100 md:pl-70 sm:pl-40 pl-15"
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

      <div className="max-w-4xl mt-200 mx-auto text-foreground flex flex-col gap-y-40 lg:gap-y-50">
        {projects.map((project, index) => (
          <div key={index} className="rounded-sm" id={`project-${project.slug}`}>
            <Card content={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
