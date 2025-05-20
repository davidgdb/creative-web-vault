
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-navy/90 backdrop-blur-sm shadow-md' : 'py-5'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-teal font-mono text-xl">
          <a href="#" className="flex items-center">
            <span className="font-bold">{"<"}</span>
            <span>Portfolio</span>
            <span className="font-bold">{" />"}</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item, i) => (
              <li key={item.name} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
                <a href={item.href} className="text-slate-light hover:text-teal transition-colors relative group">
                  <span className="font-mono text-xs text-teal mr-1">{`0${i+1}.`}</span>
                  {item.name}
                  <span className="absolute left-0 right-0 bottom-0 h-px bg-teal transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </a>
              </li>
            ))}
            <li className="opacity-0 animate-fadeIn" style={{ animationDelay: `${navItems.length * 100}ms` }}>
              <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">Resume</Button>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-teal z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end justify-center space-y-1.5">
            <span className={`block h-0.5 bg-teal transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-teal transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`block h-0.5 bg-teal transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 flex flex-col justify-center bg-navy-dark/95 backdrop-blur-md p-8 z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col items-center space-y-6 text-center">
              {navItems.map((item, i) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-lg text-slate-light hover:text-teal transition-colors py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="block font-mono text-teal mb-1">{`0${i+1}.`}</span>
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button 
                  variant="outline" 
                  className="border-teal text-teal hover:bg-teal/10 mt-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
