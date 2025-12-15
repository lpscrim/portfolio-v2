import Image from "next/image";
import projects from "../../data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = projects.find((proj) => slug === proj.slug);

  if (!project) return notFound();

  return (
    <section id="projectPage" className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <video src={project.vid} controls className="mb-6 w-full rounded" />
      <Image
        src={project.img}
        alt={project.title}
        className="mb-6 w-full rounded"
        width={800}
        height={600}
      />
      <p className="mb-4">{project.description}</p>
      {project.brief && (
        <p className="italic text-gray-500">{project.brief}</p>
      )}
    </section>
  );
}