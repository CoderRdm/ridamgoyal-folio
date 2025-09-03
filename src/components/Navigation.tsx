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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-card shadow-glow' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-3xl font-bold gradient-text hover:scale-110 transition-all duration-300 text-shadow"
          >
            Ridam Goyal
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              onClick={() => window.open('https://github.com/CoderRdm', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              onClick={() => window.open('mailto:goyalridam2005@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 glass-card"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 glass-card mt-2 rounded-2xl animate-slide-up">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg text-left px-4 py-2 hover:bg-primary/10 rounded-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex space-x-4 pt-4 px-4">
                <Button
                  variant="ghost"
                  size="lg"
                  className="flex-1 hover:bg-primary/10"
                  onClick={() => window.open('https://github.com/CoderRdm', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 glass-card hover:bg-primary/10"
                  onClick={() => window.open('mailto:goyalridam2005@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;