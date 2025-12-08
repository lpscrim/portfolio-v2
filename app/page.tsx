import Home from "./components/Home";

export default function Page() {
  return (
    <main>
      <div className="relative min-h-[110vh] w-full">
        <Home />
      </div>
      <section className="w-full bg-white h-400 z-50 relative">
        <div className="max-w-3xl mx-auto text-black text-2xl">
          <h2>About</h2>
          <p>This is the normal scrolling content below the parallax section.</p>
        </div>
        <div className="w-full py-50 h-screen bg-cyan-700"></div>
        <div className="w-full py-50 absolute bottom-0 bg-green-700"></div>
      </section>

    </main>
  );
}