import { Button } from "@/components/ui/button";
import { Github, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle Background Gradienthg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-6 mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Ridam Goyal</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
            Building things on the web
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Currently studying Electrical Engineering at MNIT Jaipur, but I spend most of my time coding. 
            I build web apps, solve problems, and occasionally break things (then fix them).
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="text-base px-8 py-6 h-auto font-semibold"
            onClick={() => window.open('https://github.com/CoderRdm', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-base px-8 py-6 h-auto font-semibold"
            onClick={() => window.open('mailto:goyalridam2005@gmail.com', '_blank')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;