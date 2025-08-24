import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card border-0 shadow-medium">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold gradient-text mb-2">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Open to new opportunities and collaborations
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:goyalridam2005@gmail.com"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">goyalridam2005@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/CoderRdm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-muted-foreground">@CoderRdm</p>
                  </div>
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-card border-0 shadow-medium">
            <div className="space-y-6">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Start a Conversation</h3>
                <p className="text-muted-foreground">
                  Whether it's about a project, opportunity, or just to say hello
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full font-semibold"
                  onClick={() => window.open('mailto:goyalridam2005@gmail.com?subject=Hello Ridam!&body=Hi Ridam, I would like to connect with you regarding...')}
                >
                  <Send className="w-5 h-5" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full font-semibold"
                  onClick={() => window.open('https://github.com/CoderRdm', '_blank')}
                >
                  <Github className="w-5 h-5" />
                  View My Work
                </Button>
              </div>
              
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;