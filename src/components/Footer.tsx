
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 text-center border-t border-slate/10 text-slate">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <a 
              href="#" 
              className="text-slate hover:text-teal transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          <div className="font-mono text-xs">
            <p>
              Designed & Built by <span className="text-teal">John Doe</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
