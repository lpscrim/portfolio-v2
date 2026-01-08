export default function Services() {
  const services = [
    "Web Development",
    "Web Design",
    "E-Commerce",
    "API /CMS Integration",
    "SEO",
    "Brand Identity",
    "Shopify",
    "UI/UX",
    "Responsive Design",
    "Accessibility",
  ];

  return (
    <section id="services" className="w-full relative">
        <div className="pb-2 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Services */}
        <h2 className="mb-8 sm:mb-14 text-2xl sm:text-3xl underline">Services</h2>
        
        <div className="py-10 border-t border-b border-foreground/80 mt-8 mb-14 mx-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-base sm:text-lg justify-center">
            {services.map((service, i) => (
              <p key={i} className=" text-center">
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
