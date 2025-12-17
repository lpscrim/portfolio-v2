import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Home/Hero";
import About from "./components/Sections/Home/About";
import Form from "./components/Layout/Form";
import Footer from "./components/Layout/Footer"
import Services from "./components/Sections/Home/Services";

export default function Home() {
  return (
    <main className="">
      <div className="relative min-h-svh w-full">
        <Hero />
      </div>
      <Header />
      <About />
      <Services />
      <section id="trigger"></section>
      <div className="z-50 relative">        
        <Form />
        <Footer />
      </div>
    </main>
  );
}
