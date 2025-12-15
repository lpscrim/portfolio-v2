import Card from "../../UI/Card";
import projects from "../../../data/projects";

export default function Proj() {
  return (
    <div className="relative w-full flex flex-col gap-y-50 xl:mr-150 lg:mr-100 md:mr-70 sm:mr-40 mr-15">
      <h2 className="home-title mt-100 text-background text-5xl lg:text-6xl xl:text-7xl mx-auto font-semibold border-4 border-transparent hover:border-background/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2">
        projects
      </h2>

      <div className="max-w-4xl mt-200 mx-auto text-foreground flex flex-col gap-y-60 lg:gap-y-70 ">
        {projects.map((project, index) => (
          <div key={index} className="rounded-sm">
            <Card content={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
