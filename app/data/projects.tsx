const projects = [
  {
    title: "Hillside House",
    slug: "hillside-house",
    brief:
      "This project involved designing and developing a modern, responsive website for Hillside House, a boutique bed and breakfast. The site was built using Next.js to ensure fast load times and an optimal user experience across all devices.",
    description:
      "This is the website for Hillside House, a boutique bed and breakfast. Built with Next.js, it was designed to offer a modern, responsive, and user-friendly experience. The design features a clean layout that highlights the property's amenities and scenic location.\n By using a similar color palette and local images, the site maintains a consistent brand identity. SEO was a priority, and the site was integrated with a Shopify affiliate program to allow easy booking and management of reservations instantly to avoid double bookings.",
    img: "/projects/hls.webp",
    vid: "/Vids/Hls.mp4",
    url: "https://hillsidehouse.netlify.app",
    date: "2025-12-01",
    tech: ["Next.js", "Guesty API"],
  },

  {
    title: "Shopify kiosk QR",
    slug: "shopify-kiosk",
    brief:
      "A custom kiosk QR code system for retail stores built using Shopify's liquid templating language.",
    description: `Using Shopify's liquid templating language, I created a custom kiosk QR code system for multiple retail stores across various themes. The system allows customers to scan QR codes placed around the store to quickly access product information and make purchases directly from their mobile devices. The QR code was generated using an external API and dynamically linked to a rebuilt checkout page. The interface was then integrated with a custom timer that resets the session. Additionally, all customer orders were then tagged with "kiosk" for easy identification. This system enhances the shopping experience by providing a secure and contactless way for customers to explore products and make purchases, whilst providing data to show in-store engagement.`,
    img: "/projects/kio1.webp",
    vid: "/Vids/Kio.mp4",
    url: "https://merch.herts.ac.uk",
    date: "2025-10-05",
    tech: ["Shopify Liquid", "JS", "QR Code API"],
  },

  {
    title: "No Grout About It",
    slug: "no-grout-about-it",
    brief:
      "This project involved redesigning and developing a website for No Grout About It, an independent tiling company. The site was built using Next.js to create a modern, responsive, and user-friendly experience that effectively showcases the company's services and portfolio.",
    description:
      "This is the website for an independent tiling company, No Grout About It. Built with Next.js, it was redesigned to offer a modern, responsive, and user-friendly experience. The website features a clean design that highlights the company's services and portfolio. By using a similar color palette and local images, the site maintains a consistent brand identity. The site includes an integrated CMS for managing the dynamic blog section, allowing the client to easily update content and images without needing extensive technical knowledge.",
    img: "/projects/gro1.webp",
    vid: "/Vids/Gro.mp4",
    url: "https://nogroutaboutit.netlify.app",
    date: "2025-09-09",
    tech: ["Next.js", "Sanity CMS"],
  },

  {
    title: "Cioch",
    slug: "cioch",
    brief:
      "This project involved designing and developing a website for Cioch, a local business. The site was built using Next.js to ensure it was both visually appealing and highly functional, providing users with an excellent browsing experience.",
    description:
      "This is the website for Cioch, a respected outdoor clothing brand. Built with Next.js, it was redesigned to offer a modern, responsive, and user-friendly experience. The design preserves the charm of the original style while incorporating modern principles. By using a similar color palette and local images, the site maintains a consistent brand identity. SEO was dramatically improved, and the site was integrated with a CMS using Sanity, allowing the owners to update gallery images independently. The site is fully responsive, ensuring a great user experience across all devices.",
    img: "/projects/cio1.webp",
    vid: "/Vids/Cio.mp4",
    url: "https://cioch-direct.co.uk",
    date: "2025-05-13",
    tech: ["Next.js", "Sanity CMS"],
  },

  {
    title: "Profile v.1",
    slug: "profile-v1",
    brief:
      " A simple and fast portfolio website built using HTML, CSS, and vanilla Javascript to achieve optimal performance and compliance.",
    description:
      "After using various frameworks for serverside projects and API requests, I decided to return to HTML/vanillaJS to create a simple and fast portfolio website. With no need for a virtual DOM or huge amounts of reusable components, a more simple approach felt more applicable. No vast libraries and dependencies were required, allowing for a more direct HTML led site. As a result the simple website has achieved 100% scores on lighthouse, is lightning fast and extremely compliant. Browsers that do not support JS will still be able to view the full site.",
    img: "/projects/prof1.webp",
    vid: "/Vids/Pro.mp4",
    url: "https://lpscrim.netlify.app",
    date: "2024-01-20",
    tech: ["HTML", "CSS", "JS"],
  },

  {
    title: "Lampman",
    slug: "lampman",
    brief:
      "A fully integrated e-commerce site for an antiques restoration company specializing in British lamps, built with NextJS and Tailwind CSS.",
    description:
      "Lampman is a fully integrated e-commerce site built for an antiques restoration company specializing in British lamps. The project uses NextJS and Tailwind CSS for modular development, reducing code repetition and optimizing image loading. The site features a shopping cart and Stripe API integration for secure payments and customer requests. Stripe's API was used to manage limited stock, eliminating the need for a separate backend or inventory management system. After each transaction, stock is updated dynamically and can be managed directly from Stripe's CMS by the client, making the process efficient and cost-effective.",
    img: "/projects/lmp1.webp",
    vid: "/Vids/Lmp.mp4",
    url: "https://lampman.netlify.app",
    date: "2023-06-06",
    tech: ["Next.js", "Stripe API"],
  },
];
export default projects;