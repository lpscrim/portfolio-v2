import ProjectContainer from "../components/Sections/Projects/ProjectContainer";
import Header from "../components/Layout/Header";

export default function ProjectsMain() {
    return (
        <div className="">
            <div className="relative w-full min-h-[500svh]">
                <ProjectContainer />
            </div>
            <Header />
        </div>
    )
}