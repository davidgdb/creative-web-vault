
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-light mb-12 flex items-center">
          <span className="font-mono text-teal mr-2">01.</span> About Me
          <div className="ml-4 h-px bg-slate/20 flex-grow"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4 text-lg">
            <p>
              Hello! I'm John, a software developer with a passion for creating digital experiences that live on the internet. 
              My interest in web development started back in 2012 when I decided to try customizing Tumblr themes — turns out hacking 
              together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a tech company. 
              My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>

            <div className="grid grid-cols-2 gap-2 pt-4 font-mono text-sm">
              <div className="flex items-center">
                <div className="text-teal mr-2">▹</div>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center">
                <div className="text-teal mr-2">▹</div>
                <span>React</span>
              </div>
              <div className="flex items-center">
                <div className="text-teal mr-2">▹</div>
                <span>Next.js</span>
              </div>
              <div className="flex items-center">
                <div className="text-teal mr-2">▹</div>
                <span>Node.js</span>
              </div>
              <div className="flex items-center">
                <div className="text-teal mr-2">▹</div>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center">
                <div className="text-teal mr-2">▹</div>
                <span>AWS</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-teal rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <Card className="relative glass-card bg-navy-light/50 overflow-hidden rounded-lg aspect-square w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="relative h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Portrait photograph"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
