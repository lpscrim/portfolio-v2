const projects = [
  {
    title: "Duncaan Holidays",
    slug: "duncaan-holidays",
    brief:
      "A polished holiday rental website with easy-to-navigate property pages, online booking, and a simple admin area for updates.",
    description:
      "A straightforward holiday rental website designed to help guests browse properties, check availability, and book with confidence. The site makes it easy to explore rooms and listings, while the owner can update property details, pricing, and content through a simple admin area without needing technical help.",
    img: "/projects/Dch.webp",
    vid: "/Vids/Dch.mp4",
    url: "https://www.duncaanholidays.com",
    date: "2026-10-03",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "Cloudinary",
    ],
  },
  {
    title: "John Sloan Pottery",
    slug: "john-sloan-pottery",
    brief:
      "An artist-led online shop with a gallery, custom mug builder, smooth checkout, and easy stock management.",
    description:
      "A welcoming online shop for a ceramic artist, built to make browsing and buying feel simple. Customers can explore the collection, customise a mug, and check out without confusion. The studio can manage stock, orders, and product updates in one place, while the site also stays in sync with Etsy so both shops reflect the same availability.",
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
      "A calm, premium art shop that makes it easy to browse work, manage orders, and keep the sales process simple.",
    description:
      "A beautifully simple shop for an artist who wants to sell paintings and prints with less friction. Visitors can browse by collection, add pieces to a cart, and complete their purchase smoothly. The site also gives the artist a straightforward way to manage products, inventory, and order updates without needing a complicated setup behind the scenes.",
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
      "A bright, modern portfolio for a photographer that puts the work front and centre and makes contact easy.",
    description:
      "A clean and immersive portfolio site designed to help a photographer showcase their work beautifully. The layout keeps attention on the images, while the site also makes it easy for new clients to explore projects and get in touch. It feels polished and easy to use on both desktop and mobile.",
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
      "A warm, welcoming website for a holiday cottage with room details, guest info, and a smoother booking journey.",
    description:
      "A polished marketing and booking website for a self-catering property on the Isle of Skye. It gives visitors a clear overview of the accommodation, showcases the rooms with photography, and makes it easy to ask questions or begin the booking process. The result is a website that feels friendly, professional, and easy to trust.",
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
      "A customer-friendly kiosk system that lets shoppers scan a QR code, browse products, and pay on their own phone.",
    description:
      "A practical in-store solution designed to make shopping feel faster and more convenient. Customers can scan a QR code, view the product range on their phone, and complete their purchase without waiting at a till. It also helps the business track customer activity and keep the buying process organised across multiple store locations.",
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
      "A cleaner, more confident website for a tiling business that makes services and previous work easier to understand.",
    description:
      "A full website refresh for a tiling company that needed a stronger online presence. The new design makes it easier for visitors to understand the services on offer, view finished work, and get in touch. The team can also update content and images in a simple way without needing technical support.",
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
      "A refreshed outdoor brand website with clearer browsing, stronger search visibility, and easier content updates.",
    description:
      "A website refresh for an established Scottish outdoor clothing brand. The aim was to make the site easier to browse, improve how it appears in search results, and give the team a simple way to update product imagery and content. The result is a cleaner, more consistent brand presence across devices.",
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
      "A lightweight personal portfolio focused on speed, clarity, and a straightforward experience.",
    description:
      "A simple, fast portfolio built using the fundamentals of the web. It keeps the experience clean and accessible while still feeling polished, and it performs extremely well because it avoids unnecessary complexity. The result is a site that feels quick, dependable, and easy to navigate.",
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
      "A simple online shop for an antique lighting business, designed to make browsing and buying straightforward.",
    description:
      "An online shop built to help an antiques business sell pieces more easily. The site makes it simple to browse stock, understand what is available, and complete purchases without a lot of friction. It also gives the business a cleaner way to keep products and stock levels up to date.",
    img: "/projects/lmp1.webp",
    vid: "/Vids/Lmp.mp4",
    url: "https://lampman.netlify.app",
    date: "2023-06-06",
    tech: ["Next.js", "Stripe API"],
  },
];
export default projects;
