import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </div>
        
        <div className="space-y-8">
          <Card className="p-8 card-hover border-2">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Software Development Intern</h3>
                    <p className="text-lg text-primary font-semibold">Training & Placement Cell, MNIT Jaipur</p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">May 2025 – Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Jaipur, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-background rounded-xl border-2 border-border hover:border-primary/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Built the Placement Portal</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">Full-stack app that's now being used by 300+ students. React, Next.js, Node.js stack.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-5 bg-background rounded-xl border-2 border-border hover:border-primary/50 transition-colors">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-accent flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Set up authentication</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">JWT tokens, Google OAuth login, and role-based permissions so students, admins, and companies have different access levels.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-5 bg-background rounded-xl border-2 border-border hover:border-primary/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Added analytics & deployed</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">Built a dashboard to track applications and placements. Deployed everything on Vercel.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-8">
                  {[
                    "React.js", "Next.js", "Node.js", "JWT Authentication", 
                    "Google OAuth", "RBAC", "Analytics", "Vercel"
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-xs font-medium">
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