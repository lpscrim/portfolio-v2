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
      "This project involved creating a simple, user-friendly kiosk interface for a Shopify store using Next.js. The goal was to enhance the in-store shopping experience by allowing customers to easily browse products and make purchases via QR codes.",
    description: "",
    img: "/projects/qr1.svg",
    vid: "/Vids/Qr.mp4",
  },

  {
    title: "No Grout About It",
    brief:
      "This is the website for an independent tiling company, No Grout About It. Built with Next.js, it was designed to offer a modern, responsive, and user-friendly experience.",
    description:
      "The brief of this website is to provide top-notch web design services that combine aesthetics with functionality.",
    img: "/projects/gro1.svg",
    vid: "/Vids/Gro.mp4",
  },

  {
    title: "Cioch",
    brief:
      "This project involved designing and developing a website for Cioch, a local business. The site was built using Next.js to ensure it was both visually appealing and highly functional, providing users with an excellent browsing experience.",
    description:
      "This website aims to create stunning, responsive, and user-friendly websites that help businesses establish a strong online presence.",
    img: "/projects/cio1.svg",
    vid: "/Vids/Cio.mp4",
  },

  {
    title: "Profile v.1",
    brief:
      "This project involved creating a personal portfolio website using Next.js. The goal was to showcase my skills, projects, and experience in web design and development through a clean, modern, and responsive design.",
    description:
      "A creative approach to a website that focuses on delivering exceptional user experiences through innovative design solutions.",
    img: "/projects/pro1.svg",
    vid: "/Vids/Pro.mp4",
  },

  {
    title: "Lampman",
    brief:
      "This project involved designing and developing a website for Lampman, a lighting",
    description:
      "A creative approach to a website that focuses on delivering exceptional user experiences through innovative design solutions.",
    img: "/projects/lmp1.svg",
    vid: "/Vids/Lmp.mp4",
  },
];

export default function Proj() {
  return (
    <div className="relative w-full flex flex-col gap-y-50 lg:mr-120 md:mr-80 sm:mr-60 mr-30">
      <h2 className="home-title mt-100 text-background text-5xl lg:text-6xl xl:text-7xl mx-auto font-semibold border-4 border-transparent hover:border-background/80 transition-all duration-1250 rounded-md fade-in pb-1 pt-2 px-2">projects</h2>

      <div className="max-w-4xl mt-200 mx-auto text-foreground flex flex-col gap-y-50 ">
        {projects.map((project, index) => (
          <div key={index} className="rounded-sm">
            <Card content={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
