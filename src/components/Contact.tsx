import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Want to work on something together? Have a question? Or just want to chat? Hit me up.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-2 card-hover">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Always open to new projects and interesting conversations
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:goyalridam2005@gmail.com"
                  className="flex items-center gap-4 p-5 bg-background rounded-xl border-2 border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">goyalridam2005@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/CoderRdm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-background rounded-xl border-2 border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">GitHub</h4>
                    <p className="text-sm text-muted-foreground">@CoderRdm</p>
                  </div>
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 border-2 card-hover">
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Let's Talk</h3>
                <p className="text-muted-foreground">
                  Projects, opportunities, or just want to chat about tech
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full font-semibold h-12"
                  onClick={() => window.open('mailto:goyalridam2005@gmail.com?subject=Hello Ridam!&body=Hi Ridam, I would like to connect with you regarding...')}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full font-semibold h-12"
                  onClick={() => window.open('https://github.com/CoderRdm', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View My Work
                </Button>
              </div>
              
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  I usually reply within a day or two
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