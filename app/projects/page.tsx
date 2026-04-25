import ProjectContainer from "../components/Sections/Projects/ProjectContainer";
import Form from "../components/Layout/Form";
import Footer from "../components/Layout/Footer";
import projects from "../data/projects";

export default function ProjectsMain() {
    const count = projects.length;
    return (
        <section id="projects" className="">
            <style>{`
              .projects-scroll-container { min-height: ${count * 80}lvh; }
              @media (min-width: 768px)  { .projects-scroll-container { min-height: ${count * 92.5}lvh; } }
              @media (min-width: 1024px) { .projects-scroll-container { min-height: ${count * 95}lvh; } }
              @media (min-width: 1280px) { .projects-scroll-container { min-height: ${count * 100}lvh; } }
            `}</style>
            <div className="projects-scroll-container relative w-full">
                <ProjectContainer />
            </div>
            <section id="trigger"></section>
        <div className="z-50 relative">
          <Form />
          <Footer />
        </div>
        </section>
    )
}