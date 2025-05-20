
import { useState, useEffect } from "react";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const socialLinks = [
    { 
      name: "Github", 
      icon: <Github className="h-5 w-5" />, 
      url: "https://github.com" 
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://linkedin.com" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="h-5 w-5" />, 
      url: "https://twitter.com" 
    },
    { 
      name: "Email", 
      icon: <Mail className="h-5 w-5" />, 
      url: "mailto:email@example.com" 
    }
  ];

  return (
    <div className={`fixed left-5 bottom-0 z-10 hidden md:block transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-24'}`}>
      <div className="flex flex-col items-center">
        <div className="space-y-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transform hover:-translate-y-1 transition-all duration-200"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="w-px h-24 bg-slate/20"></div>
      </div>
    </div>
  );
};

export default SocialSidebar;
