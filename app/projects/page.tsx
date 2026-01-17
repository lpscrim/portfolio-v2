import ProjectContainer from "../components/Sections/Projects/ProjectContainer";
import Form from "../components/Layout/Form";
import Footer from "../components/Layout/Footer";

export default function ProjectsMain() {
    return (
        <section id="projects" className="">
            <div className="relative w-full min-h-[600lvh]  md:min-h-[650lvh] lg:min-h-[680lvh] xl:min-h-[730lvh] ">
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