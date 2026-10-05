import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Home/Hero";
import About from "./components/Sections/Home/About";
import Form from "./components/Layout/Form";
import Footer from "./components/Layout/Footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://lpscrim.com/#business",
  name: "Lewis Scrimgeour - Web Design & Development",
  description:
    "Freelance web designer and developer based on the Isle of Skye, building fast, modern websites with Next.js and React for clients across Scotland, the UK and beyond.",
  url: "https://lpscrim.com",
  email: "Lpscrim@gmail.com",
  founder: { "@type": "Person", name: "Lewis Scrimgeour" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Isle of Skye",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "Place", name: "Isle of Skye" },
    { "@type": "Place", name: "Scottish Highlands" },
    { "@type": "Country", name: "Scotland" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  knowsAbout: ["Web design", "Web development", "Next.js", "React", "SEO"],
  sameAs: [
    "https://github.com/lpscrim",
    "https://www.linkedin.com/in/lewis-scrimgeour-13389b243/",
  ],
};

export default function Home() {
  return (
    <main className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative min-h-svh w-full">
        <Hero />
      </div>
      <Header />
      <About />
      <section id="trigger"></section>
      <div className="z-50 relative min-h-svh bg-foreground">        
        <Form />
        <Footer />
      </div>
    </main>
  );
}
