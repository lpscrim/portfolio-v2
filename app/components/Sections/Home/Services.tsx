export default function Services() {
  const services = [
    "Web Development",
    "Web Design",
    "E-Commerce",
    "API /CMS",
    "SEO",
    "Brand Identity",
    "Shopify",
    "Accessibility",
    "Responsive Design",
    "UI/UX",
  ];

  return (
    <section id="services" className="w-full relative">
      <div className="pb-2 lg:px-16">
        <div className="max-w-4xl mx-auto text-center sm:pl-0">
          {/* Services */}
          <h2 className="py-4 sm:py-8 text-3xl sm:text-4xl">Services</h2>

          <div className="py-10 border-t border-b border-foreground/80 mt-8 mb-14 ">
            <div className="flex flex-wrap justify-center italic gap-y-2 gap-x-4 text-lg sm:text-xl xl:text-2xl">
              {services.map((service, i) => (
                <p
                  key={i}
                  className="text-center w-1/3 sm:w-1/3 lg:w-1/4 box-border px-2"
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
