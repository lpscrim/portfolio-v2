export default function Services() {
  const services = [
    "Web Development",
    "Web Design",
    "E-Commerce",
    "SEO",
    "API /CMS/ DB Integration",
    "Brand Identity",
    "Shopify",
    "Responsive Layouts",
    "UI/UX",
  ];

  return (
    <section className="w-full bg-foreground relative">
        <div className="  pb-2 px-4 sm:px-16">
      <div className="max-w-3xl mx-auto text-background">
        {/* Services */}
        <h2 className="text-3xl lowercase home-title underline text-center">Services</h2>
        
        <div className="py-10 border-t border-b border-background/40 mt-8 mb-14 mx-10 max-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm sm:text-base justify-center">
            {services.map((service, i) => (
              <p key={i} className="text-background text-center">
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
