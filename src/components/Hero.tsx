import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto section-padding">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text">Ridam Goyal</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Frontend Developer • Problem Solver • Tech Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate Electrical Engineering student at MNIT Jaipur, building scalable web applications
            that solve real-world problems with clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="font-semibold"
              onClick={() => window.open('https://github.com/CoderRdm', '_blank')}
            >
              <Github className="w-5 h-5" />
              View GitHub
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold"
              onClick={() => window.open('mailto:goyalridam2005@gmail.com')}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="mailto:goyalridam2005@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              goyalridam2005@gmail.com
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;