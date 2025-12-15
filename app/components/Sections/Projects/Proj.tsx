import Card from "../../UI/Card";

const projects = [
  {
    title: "Hillside House",
    brief:
      "This project involved designing and developing a modern, responsive website for Hillside House, a boutique bed and breakfast. The site was built using Next.js to ensure fast load times and an optimal user experience across all devices.",
    description:
      "This website aims to create stunning, responsive, and user-friendly websites that help businesses establish a strong online presence.",
    img: "/projects/hls.svg",
    vid: "/Vids/Hls.mp4",
  },

  {
    title: "Shopify kiosk QR",
    brief:
      "A custom kiosk QR code system for retail stores built using Shopify's liquid templating language.",
    description: `Using Shopify's liquid templating language, I created a custom kiosk QR code system for multiple retail stores across various themes. The system allows customers to scan QR codes placed around the store to quickly access product information and make purchases directly from their mobile devices. The QR code was generated using an external API and dynamically linked to a rebuilt checkout page. The interface was then integrated with a custom timer that resets the session. Additionally, all customer orders were then tagged with "kiosk" for easy identification. This system enhances the shopping experience by providing a secure and contactless way for customers to explore products and make purchases, whilst providing data to show in-store engagement.`,
    img: "/projects/qr1.svg",
    vid: "/Vids/Qr.mp4",
  },

  {
    title: "No Grout About It",
    brief:
      "This project involved redesigning and developing a website for No Grout About It, an independent tiling company. The site was built using Next.js to create a modern, responsive, and user-friendly experience that effectively showcases the company's services and portfolio.",
    description:
      "This is the website for an independent tiling company, No Grout About It. Built with Next.js, it was redesigned to offer a modern, responsive, and user-friendly experience. The website features a clean design that highlights the company's services and portfolio. By using a similar color palette and local images, the site maintains a consistent brand identity. The site includes an integrated CMS for managing the dynamic blog section, allowing the client to easily update content and images without needing extensive technical knowledge.",
    img: "/projects/gro1.svg",
    vid: "/Vids/Gro.mp4",
  },

  {
    title: "Cioch",
    brief:
      "This project involved designing and developing a website for Cioch, a local business. The site was built using Next.js to ensure it was both visually appealing and highly functional, providing users with an excellent browsing experience.",
    description:
      "This is the website for Cioch, a respected outdoor clothing brand. Built with Next.js, it was redesigned to offer a modern, responsive, and user-friendly experience. The design preserves the charm of the original style while incorporating modern principles. By using a similar color palette and local images, the site maintains a consistent brand identity. SEO was dramatically improved, and the site was integrated with a CMS using Sanity, allowing the owners to update gallery images independently. The site is fully responsive, ensuring a great user experience across all devices.",
    img: "/projects/cio1.svg",
    vid: "/Vids/Cio.mp4",
  },

  {
    title: "Profile v.1",
    brief:
      " A simple and fast portfolio website built using HTML, CSS, and vanilla JavaScript to achieve optimal performance and compliance.",
    description:
      "After using various frameworks for serverside projects and API requests, I decided to return to HTML/vanillaJS to create a simple and fast portfolio website. With no need for a virtual DOM or huge amounts of reusable components, a more simple approach felt more applicable. No vast libraries and dependencies were required, allowing for a more direct HTML led site. As a result the simple website has achieved 100% scores on lighthouse, is lightning fast and extremely compliant. Browsers that do not support Javascript will still be able to view the full site.",
    img: "/projects/pro1.svg",
    vid: "/Vids/Pro.mp4",
  },

  {
    title: "Lampman",
    brief:
      "A fully integrated e-commerce site for an antiques restoration company specializing in British lamps, built with NextJS and Tailwind CSS.",
    description:
      "Lampman is a fully integrated e-commerce site built for an antiques restoration company specializing in British lamps. The project uses NextJS and Tailwind CSS for modular development, reducing code repetition and optimizing image loading. The site features a shopping cart and Stripe API integration for secure payments and customer requests. Stripe's API was used to manage limited stock, eliminating the need for a separate backend or inventory management system. After each transaction, stock is updated dynamically and can be managed directly from Stripe's CMS by the client, making the process efficient and cost-effective.",
    img: "/projects/lmp1.svg",
    vid: "/Vids/Lmp.mp4",
  },
];

export default function Proj() {
  return (
    <div className="relative w-full flex flex-col gap-y-50 xl:mr-150 lg:mr-100 md:mr-70 sm:mr-40 mr-15">
      <h2 className="home-title mt-100 text-background text-5xl lg:text-6xl xl:text-7xl mx-auto font-semibold border-4 border-transparent hover:border-background/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2">
        projects
      </h2>

      <div className="max-w-4xl mt-200 mx-auto text-foreground flex flex-col gap-y-60 lg:gap-y-70 ">
        {projects.map((project, index) => (
          <div key={index} className="rounded-sm">
            <Card content={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
