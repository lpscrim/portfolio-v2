const projects = [
  {
    title: "John Sloan Pottery",
    slug: "john-sloan-pottery",
    brief:
      "Full-stack e-commerce site for a potter, featuring a filterable work gallery, Etsy sync, custom mug builder, and Stripe Connect checkout with region-aware shipping.",
    description:
      "Full-stack e-commerce site for John Sloan Pottery, built with Next.js 15, TypeScript, and Tailwind CSS. The site showcases ceramic work through a filterable gallery with deep-link photo modals, a persistent cart, and Stripe Connect checkout — processing payments directly to the artist's account with a platform fee via application charges. Shipping is region-aware (UK / EU / International) with rates configurable from the admin panel. A custom mug builder lets customers specify shape and glaze options before purchase. Products sync bidirectionally with Etsy via a Vercel Cron job, keeping stock levels consistent across both storefronts. An admin panel protected via Supabase Auth handles product management, stock levels, order tracking, and editable home and about page content — all without touching code. Order notifications are sent via Resend, with Stripe webhook handling for both standard and Connect-forwarded events.",
    img: "/projects/jsp1.webp",
    vid: "/Vids/Jsp1.mp4",
    url: "https://john-sloan-pottery.vercel.app/",
    date: "2026-06-21",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Stripe Connect",
      "Supabase",
      "Resend",
      "Etsy API",
    ],
  },
  {
    title: "Anna Maia Art",
    slug: "anna-maia-art",
    brief:
      "Full-stack e-commerce site for an artist, featuring a filterable gallery, persistent cart, and Stripe Connect checkout with region-aware shipping.",
    description:
      "Full-stack e-commerce site for Anna Maia Art, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. The site allows the artist to showcase and sell original paintings and prints, with a filterable work gallery, deep-link modals, and a persistent cart. Checkout is powered by Stripe Connect, processing payments directly to the artist's account with a platform fee retained via application charges. Shipping is region-aware (UK / EU / International), with rates configurable from an admin panel and dynamic price updates at checkout. An admin panel protected via Supabase Auth handles product management, stock levels, order tracking, and editable home page content — all without touching code. Order notifications are sent via Resend, with Stripe webhook handling for both standard and Connect-forwarded events.",
    img: "/projects/ana1.webp",
    vid: "/Vids/Ana3.mp4",
    url: "https://annamaiaart.com",
    date: "2026-04-25",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Stripe Connect",
      "Supabase",
      "Resend",
    ],
  },
  {
    title: "Daydreamteam",
    slug: "daydreamteam",
    brief:
      "A vibrant, user-friendly website for a photographer, featuring a minimal/ dynamic portfolio section.",
    description:
      "DayDreamTeam is a custom portfolio site for presenting photography and visual art in a clean, immersive format. Built with Next.js and Cloudinary, it combines fast image delivery, dynamic project galleries, SEO-ready metadata, and a responsive viewing experience that lets visitors move seamlessly between curated projects and full photo collections.",
    img: "/projects/ddt1.webp",
    vid: "/Vids/Ddt.mp4",
    url: "https://daydreamteam.co.uk",
    date: "2026-03-15",
    tech: ["Next.js", "Cloudinary"],
  },
  {
    title: "Hillside House",
    slug: "hillside-house",
    brief:
      "A modern, responsive website for a boutique bed and breakfast, featuring AirBnB integration for seamless booking management.",
    description:
      "A marketing and booking website for Hillside House, a self-catering holiday rental in Elgol, Isle of Skye. Built with Next.js 15, TypeScript, and Tailwind CSS, the site features a full-screen hero landing section, a room-by-room photo gallery, a contact/enquiry form, and an integrated booking widget. Lenis smooth scrolling and Framer Motion animations provide a polished user experience, while structured metadata, Open Graph tags, a sitemap, and robots.txt cover SEO fundamentals.",
    img: "/projects/hls.webp",
    vid: "/Vids/Hls.mp4",
    url: "https://hillsidehouseelgol.com",
    date: "2025-12-01",
    tech: ["Next.js", "Guesty API"],
  },

  {
    title: "Shopify Kiosk QR",
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
