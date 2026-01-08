const projects = [
  {
    title: "Hillside House",
    slug: "hillside-house",
    brief:
      "A modern, responsive website for a boutique bed and breakfast, featuring Shopify integration for seamless booking management.",
    description:
      "Website for Hillside House, a boutique B&B on the Isle of Skye. The clean layout highlights the property's amenities and scenic location while maintaining brand consistency through a cohesive colour palette and local imagery. SEO was prioritized throughout, and Airbnb affiliate integration enables real-time booking management to prevent double bookings.",
    img: "/projects/hls.webp",
    vid: "/Vids/Hls.mp4",
    url: "https://hillsidehouseelgol.com",
    date: "2025-12-01",
    tech: ["Next.js", "Guesty API"],
  },

  {
    title: "Shopify kiosk QR",
    slug: "shopify-kiosk",
    brief:
      "A custom in-store kiosk system using dynamic QR codes for contactless product browsing and checkout.",
    description: `Custom kiosk QR code system deployed across multiple retail stores. Customers scan QR codes to access product information and complete purchases on their mobile devices. Features include dynamically generated QR codes via external API, a rebuilt checkout page, session timers for security, and automatic "kiosk" tagging on orders for analytics tracking.`,
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
      "Website redesign for an independent tiling company, featuring an integrated CMS for easy content management.",
    description:
      "Complete redesign for No Grout About It, an independent tiling company. The clean layout showcases services and portfolio work effectively. Integrated with Sanity CMS for the blog section, enabling the client to update content and images independently without technical expertise.",
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
      "Website for an established outdoor clothing brand, with significant SEO improvements and CMS integration.",
    description:
      "Website for Cioch, a respected outdoor clothing brand based in Scotland. Focus areas included dramatic SEO improvements and Sanity CMS integration for independent gallery management. Fully responsive across all devices with consistent brand identity throughout.",
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
      "Minimal portfolio site built with vanilla HTML, CSS, and JavaScript, achieving 100% Lighthouse scores.",
    description:
      "A return to fundamentals—no frameworks, no virtual DOM, just HTML, CSS, and vanilla JavaScript. Without heavy libraries or dependencies, the site achieves 100% Lighthouse scores and remains fully functional even with JavaScript disabled. Built for speed and maximum compliance.",
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
      "E-commerce site for an antiques restoration company, with Stripe-powered inventory and payments.",
    description:
      "E-commerce platform for an antiques restoration company specializing in British lamps. Stripe API handles both payments and inventory management, eliminating the need for a separate backend. Stock updates dynamically after each transaction, and the client manages products directly through Stripe's dashboard.",
    img: "/projects/lmp1.webp",
    vid: "/Vids/Lmp.mp4",
    url: "https://lampman.netlify.app",
    date: "2023-06-06",
    tech: ["Next.js", "Stripe API"],
  },
];
export default projects;