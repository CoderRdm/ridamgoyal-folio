import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Shield, BarChart3, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Placement Portal",
      description: "Streamlined campus recruitment platform serving 3000+ users with secure backend and automation features. Built with modern React ecosystem and deployed on Vercel.",
      icon: Users,
      technologies: ["React.js", "Next.js", "Node.js", "JWT", "Google OAuth", "RBAC", "Vercel"],
      highlights: [
        "3000+ active users",
        "JWT & OAuth authentication", 
        "Role-based access control",
        "Real-time analytics"
      ],
      liveDemo: "#",
      github: "#",
      color: "text-primary"
    },
    {
      title: "Resume Builder App", 
      description: "Responsive application with real-time preview capabilities, PostgreSQL backend, and robust authentication using JWT/Clerk. Deployed on AWS with Docker containerization.",
      icon: Smartphone,
      technologies: ["React.js", "PostgreSQL", "JWT", "Clerk", "AWS", "Docker", "Real-time Preview"],
      highlights: [
        "Real-time preview",
        "PostgreSQL database",
        "JWT/Clerk authentication",
        "Docker containerization"
      ],
      liveDemo: "#",
      github: "#", 
      color: "text-accent"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`p-8 bg-gradient-card border-0 shadow-medium card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-background ${project.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;