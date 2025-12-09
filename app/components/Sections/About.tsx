import Card from "../UI/Card";

export default function About() {
  return (
    <section id="about" className="flex flex-col w-full bg-foreground min-h-svh z-50 relative">
        <div className="w-full py-35 md:py-45 px-10  bg-background">
          <div className="max-w-3xl mx-auto text-black text-2xl bg-background p-6">
            <p>
              A web design studio focused on delivering beautiful,
              user-friendly websites that help businesses grow online.
              Whether you`re looking to build a new site from scratch or
              revamp an existing one, we have the skills and expertise to
              bring your vision to life.
            </p>
          </div>
        </div>
        <div className="w-full py-35 md:py-45 px-10 bg-background">
            <div className="max-w-7xl mx-auto text-black text-2xl">
                <Card>
                    
                </Card>
            </div>
        </div>
      </section>      
    );
}