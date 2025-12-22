import ProjectContainer from "../components/Sections/Projects/ProjectContainer";
import Form from "../components/Layout/Form";
import Footer from "../components/Layout/Footer";

export default function ProjectsMain() {
    return (
        <section id="projects" className="">
            <div className="relative w-full min-h-[520lvh]  md:min-h-[550lvh] lg:min-h-[620lvh] xl:min-h-[700lvh] ">
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