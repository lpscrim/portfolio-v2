import Card from "../../UI/Card";
import Link from "next/link";
import projects from "../../../data/projects";
import AnimateIn from "../../UI/AnimateIn";

const content = projects.slice(0, 4);

export default function About() {
  return (
    <div>
      <section
        id="about"
        className="flex  flex-col w-full bg-background bg-fixed min-h-svh z-50 relative px-4"
      >
        {/* About Section */}
        <div className="w-full pt-32 sm:pt-56 pb-0 sm:pb-32 sm:px-10 ">
          <AnimateIn className="max-w-6xl mx-auto text-foreground/80 text-2xl bg-background/0 py-6 text-left sm:text-center">
            <p
              className="mx-auto max-w-4xl text-lg lg:text-xl xl:leading-10 sm:text-center text-left"
            >
              A web design and development studio, working with businesses and individuals to build modern, responsive, and easy-to-use websites.
            </p>
          </AnimateIn>
        </div>
        {/* Projects Section */}
        <div className="w-full  pb-32 sm:px-6 lg:px-10">
          <div>

            <AnimateIn delay={0.2}>
              <div className="max-w-6xl mx-auto text-foreground bg-background/0 py-4 sm:py-8">
                <h2 className="hidden text-2xl sm:text-3xl xl:text-4xl text-center ">
                  Recent Works
                </h2>
              </div>
              <div className=" max-w-6xl mx-auto text-foreground flex flex-col gap-16 lg:gap-32">
                {content.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all max-w-5xl mx-auto duration-600 rounded-sm`}
                    style={{
                      transform: "translateY(40px)",
                    }}
                  >
                    <Card content={item} main={true} />
                  </div>
                ))}
                {/* See more button */}
                <div className="mt-16 flex justify-center">
                  <Link
                    href="/projects"
                    className="relative inline-block pb-1 text-foreground uppercase tracking-[0.2em] text-sm sm:text-base transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:opacity-70"
                  >
                    See more
                    <span className="sr-only"> web design projects</span>
                    <span
                      aria-hidden="true"
                      className="absolute left-0 -bottom-0.5 h-px w-full bg-current"
                    />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
