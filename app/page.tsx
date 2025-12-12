import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Home/Hero";
import About from "./components/Sections/Home/About";
import Photo from "./components/Sections/Home/Photo";

export default function Home() {
  return (
    <main className="">
      <div className="relative min-h-svh w-full">
        <Hero />
      </div>
      <Header />
      <About />
      <Photo />

    </main>
  );
}
