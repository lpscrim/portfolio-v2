import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";

export default function Home() {
  return (
    <main className="">
      <div className="relative min-h-svh w-full">
        <Hero />
      </div>
      <Header />
      <About />
    </main>
    
  );
}
