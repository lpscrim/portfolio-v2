import ProjectContainer from "../components/Sections/Projects/ProjectContainer";
import Form from "../components/Layout/Form";
import Footer from "../components/Layout/Footer";

export default function ProjectsMain() {
    return (
        <section id="projects" className="">
            <div className="relative w-full min-h-[660lvh]  md:min-h-[740lvh] lg:min-h-[760lvh] xl:min-h-[800lvh] ">
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