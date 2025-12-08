import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Hero";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-[103vh] w-full">
        <Hero />
      </div>
      <Header />
      <section id="about" className="flex flex-col w-full bg-white h-400 z-50 relative">
        <div className="w-full py-50 h-screen bg-black/50">
          <div className="max-w-3xl mx-auto text-black text-2xl">
            <h2>About</h2>
            <p>
              This is the normal scrolling content below the parallax section.
            </p>
          </div>
        </div>
        <div className="w-full py-50 absolute bottom-0 bg-green-700"></div>
      </section>
    </main>
  );
}
