import { Button } from "@/components/ui/button";
import { Github, Mail, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow rounded-full blur-3xl opacity-20 floating-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl opacity-30 floating-animation" style={{ animationDelay: '-3s' }} />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-shadow">
            <span className="gradient-text">Ridam Goyal</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
            Frontend Developer | Problem Solver | Tech Enthusiast
          </p>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-16 leading-relaxed">
            Passionate Electrical Engineering student at MNIT Jaipur, leveraging analytical thinking 
            and problem-solving skills to build scalable web applications with modern technologies.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button 
            size="lg"
            className="text-xl px-10 py-6 pulse-glow group"
            onClick={() => window.open('https://github.com/CoderRdm', '_blank')}
          >
            <Github className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
            View GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-xl px-10 py-6 glass-card hover:bg-primary/10"
            onClick={() => window.open('mailto:goyalridam2005@gmail.com', '_blank')}
          >
            <Mail className="mr-3 h-6 w-6" />
            Get In Touch
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60 floating-animation" />
        <div className="absolute top-40 right-16 w-6 h-6 bg-accent rounded-full opacity-40 floating-animation" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary-light rounded-full opacity-50 floating-animation" style={{ animationDelay: '-4s' }} />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;