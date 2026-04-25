import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import { pageServices } from "@/app/data/services";
import AnimateIn from "@/app/components/UI/AnimateIn";

export default function ServicesPage() {

  return (
    <main className="flex flex-col w-full bg-background min-h-svh z-50 relative">
      <Header />
      <section className="flex flex-col w-full bg-background min-h-svh py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full">
          <AnimateIn>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl text-foreground mb-12 lowercase home-title"
            >
              services
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pageServices.map((service, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 border border-foreground/20 rounded-sm hover:border-foreground/50 transition-all duration-300"
              >
                <p className="text-foreground text-sm sm:text-base lowercase tracking-wide">
                  {service}
                </p>
              </div>
            ))}
          </AnimateIn>

          <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-foreground/20">
            <p className="text-foreground/70 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Whether you need a complete website overhaul, UI improvements, API integration, or ongoing maintenance, I deliver tailored solutions that combine technical expertise with creative vision.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}