import { homeServices } from "../../../data/services";

export default function Services() {
  const services = homeServices;

  return (
    <section id="services" className="w-full relative">
      <div className="pb-2">
        <div className="max-w-6xl mx-auto text-center">
          {/* Services */}
          <h2 className="sr-only">Services</h2>

          <div className="py-10 border-t border-  border-b border-foreground/20 mt-8 mb-14 ">
            <div className="flex flex-wrap  justify-around sm:justify-center gap-y-4 gap-x-4 text-sm sm:text-base">
              {services.map((service, i) => (
                <p
                  key={i}
                  className="text-center w-1/3 sm:w-1/3 lg:w-1/4 box-border sm:px-2 whitespace-nowrap"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
