import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Smartphone } from "lucide-react";

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
      color: "bg-primary"
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
      color: "bg-accent"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Showcasing some of my best work and technical achievements that demonstrate my passion for creating impactful solutions
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="glass-card border-white/10 shadow-glow card-hover animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-10">
                  <div className="flex items-center mb-8">
                    <div className={`p-4 rounded-2xl ${project.color} mr-4 group-hover:scale-110 transition-transform pulse-glow`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  
                  <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-foreground text-lg">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3 group/highlight hover:translate-x-2 transition-transform">
                          <div className="w-3 h-3 bg-gradient-primary rounded-full group-hover/highlight:scale-125 transition-transform" />
                          <span className="text-foreground/80 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      size="lg"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex-1 glass-card hover:bg-primary/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
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