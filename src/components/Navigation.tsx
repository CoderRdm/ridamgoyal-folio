import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              Ridam Goyal
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://github.com/CoderRdm', '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.open('mailto:goyalridam2005@gmail.com')}
            >
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg shadow-soft">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="flex space-x-2 px-3 py-2">
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1"
                onClick={() => {
                  window.open('https://github.com/CoderRdm', '_blank');
                  setIsOpen(false);
                }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button 
                variant="default" 
                size="sm"
                className="flex-1"
                onClick={() => {
                  window.open('mailto:goyalridam2005@gmail.com');
                  setIsOpen(false);
                }}
              >
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;