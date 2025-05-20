
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32 pb-20">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-5">
          <p className="font-mono text-teal opacity-0 animate-fadeIn" style={{ animationDelay: '100ms' }}>
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-light opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            John Doe.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate opacity-0 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            I build things for the web.
          </h2>
          <p className="text-slate max-w-xl text-lg opacity-0 animate-fadeIn" style={{ animationDelay: '400ms' }}>
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="pt-6 opacity-0 animate-fadeIn" style={{ animationDelay: '500ms' }}>
            <Button className="bg-transparent hover:bg-teal/10 text-teal border border-teal px-7 py-5 rounded">
              Check out my projects!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
