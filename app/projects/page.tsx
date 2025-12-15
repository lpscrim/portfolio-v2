import ProjectContainer from "../components/Sections/Projects/ProjectContainer";
import Header from "../components/Layout/Header";

export default function ProjectsMain() {
    return (
        <div className="">
            <div className="relative w-full min-h-[480svh] sm:min-h-[520svh] md:min-h-[580svh] lg:min-h-[700svh] ">
                <ProjectContainer />
            </div>
            <Header />
        </div>
    )
}