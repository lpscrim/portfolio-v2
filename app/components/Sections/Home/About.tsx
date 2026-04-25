import Button from "../../UI/Button";
import Card from "../../UI/Card";
import Link from "next/link";
import projects from "../../../data/projects";
import Services from "./Services";
import AnimateIn from "../../UI/AnimateIn";

const content = projects.slice(0, 4);

export default function About() {
  return (
    <div>
      <section
        id="about"
        className="flex flex-col w-full bg-background bg-fixed min-h-svh z-50 relative px-4"
      >
        {/* About Section */}
        <div className="w-full pt-32 sm:pt-56 pb-16 sm:pb-32 sm:px-10 ">
          <AnimateIn className="max-w-7xl mx-auto text-foreground/80 text-2xl bg-background/0 py-6 text-left sm:text-center">
            <p
              className="text-2xl xl:text-3xl xl:leading-10 "
            >
              A web design and development studio. Collaborating with a variety of businesses and induviduals to create modern, responsive, and user-friendly websites.
            </p>
          </AnimateIn>
        </div>
        {/* Projects Section */}
        <div className="w-full pb-32 sm:px-6 lg:px-10">
          <div>
            <AnimateIn delay={0.1} className="pb-8 sm:pb-16">
              <Services />
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="max-w-7xl mx-auto text-foreground text-2xl bg-background/0 py-4 sm:py-8">
                <h2 className="text-3xl sm:text-4xl text-center ">
                  Recent Works
                </h2>
              </div>
              <div className=" max-w-7xl mx-auto text-foreground flex flex-col gap-16 lg:gap-32">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-600 rounded-sm`}
                    style={{
                      transform: "translateY(40px)",
                    }}
                  >
                    <Card content={item} main={true} />
                  </div>
                ))}
                {/* See more button */}
                <div className="mt-16 flex justify-center">
                  <Button className="px-4 py-2 bg-foreground text-background transition-all sm:text-lg">
                    <Link href="/projects">
                      See more
                      <span className="sr-only"> web design projects</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
