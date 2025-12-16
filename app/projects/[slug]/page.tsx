import Footer from "../../components/Layout/Footer";
import projects from "../../data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = projects.find((proj) => slug === proj.slug);

  if (!project) return notFound();

  return (
    <div>
      <section
        id="projectPage"
        className="max-w-6xl text-foreground mx-auto pt-16 min-h-svh lg:px-8"
      >
        <div className="px-2 flex mb-16 flex-col gap-y-8">
          <div className="relative w-full px-2 sm:px-8 sm:py-8 lg:px-12 lg:py-12 xl:px-24 xl:py-18 py-6 rounded-sm overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
              style={{ backgroundImage: `url(${project.img})` }}
            />
            {/* Color/blur overlay */}
            <div className="absolute inset-0 w-full h-full bg-background/75 backdrop-blur" />
            {/* Video */}
            <video
              src={project.vid}
              autoPlay
              loop
              muted
              controls-hidden
              className="w-full rounded z-10 relative"
            />
          </div>
          <div className="w-full flex flex-col gap-y-4">
            <h1 className="text-xl sm:text-2xl px-2 font-bold mb-4">
              {project.title}
            </h1>

            <p className="w-full px-4 sm:text-lg whitespace-pre-line">
              {project.description}
            </p>
            <div className="mt-6 flex flex-row justify-between w-full text-lg home-title">
              <ul className="px-4">
                <li className="hover:opacity-100 opacity-75 transition-all duration-500">
                  <Link
                    href={project.url}
                    target="_blank"
                    className="cursor-crosshair"
                  >
                    {project.url.replace(/^https?:\/\/(www\.)?/, "")}
                  </Link>
                </li>
                <li className="opacity-75">{project.date}</li>
                <li className="opacity-25 border w-1/2 my-2"></li>
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="lowercase opacity-75"
                  >
                    {tech}
                  </li>
                ))}
                
              </ul>
              <div className="flex flex-col justify-end home-title px-4 text-lg tracking-wider opacity-40 hover:opacity-100 transition-all duration-500">
                <Link href="/projects">
                  <p>all projects</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
