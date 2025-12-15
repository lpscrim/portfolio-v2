import ProjectContainer from "../components/Sections/Projects/ProjectContainer";
import Header from "../components/Layout/Header";

export default function ProjectsMain() {
    return (
        <div className="">
            <div className="relative w-full min-h-[570svh] sm:min-h-[590svh] md:min-h-[650svh] lg:min-h-[770svh] ">
                <ProjectContainer />
            </div>
            <Header />
        </div>
    )
}