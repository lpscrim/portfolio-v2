import ProjectContainer from "../components/Sections/Projects/ProjectContainer";
import Form from "../components/Layout/Form";
import Footer from "../components/Layout/Footer";

export default function ProjectsMain() {
    return (
        <section id="projects" className="">
            <div className="relative w-full min-h-[570svh] sm:min-h-[590svh] md:min-h-[650svh] lg:min-h-[770svh] ">
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