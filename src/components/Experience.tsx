import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          <Card className="p-8 bg-gradient-card border-0 shadow-medium card-hover">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Software Development Intern</h3>
                    <p className="text-lg text-primary font-semibold">Training & Placement Cell, MNIT Jaipur</p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>May 2025 – Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Jaipur, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                    <Users className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Built Full-Stack Placement Portal</h4>
                      <p className="text-muted-foreground">Serving 3000+ users with React.js, Next.js, and Node.js</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                    <TrendingUp className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Implemented Secure Authentication</h4>
                      <p className="text-muted-foreground">JWT, Google OAuth, and RBAC for enterprise-level security</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                    <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Created Analytics Dashboards</h4>
                      <p className="text-muted-foreground">Real-time insights and deployment on Vercel platform</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "React.js", "Next.js", "Node.js", "JWT Authentication", 
                    "Google OAuth", "RBAC", "Analytics", "Vercel"
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;