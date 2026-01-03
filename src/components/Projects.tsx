import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Placement Portal",
      description: "Built this for our college's placement cell. It's handling 3000+ students now, which is way more than I expected. Learned a lot about authentication, handling scale, and why you should plan your database schema properly from the start.",
      icon: Users,
      technologies: ["React.js", "Next.js", "Node.js", "JWT", "Google OAuth", "RBAC", "Vercel"],
      highlights: [
        "3000+ students using it",
        "JWT & OAuth setup", 
        "Role-based permissions",
        "Basic analytics dashboard"
      ],
      liveDemo: "https://placement-2sof.vercel.app/",
      github: "https://github.com/CoderRdm/deploy2",
      color: "bg-primary"
    },
    {
      title: "Resume Builder", 
      description: "Made this because I got tired of formatting resumes in Word. You can see changes in real-time, save multiple versions, and export as PDF. The PostgreSQL setup was a pain, but it works now.",
      icon: Smartphone,
      technologies: ["React.js", "PostgreSQL", "JWT", "Clerk", "AWS", "Docker"],
      highlights: [
        "Live preview while editing",
        "PostgreSQL for storage",
        "JWT/Clerk auth",
        "Docker for deployment"
      ],
      liveDemo: "#",
      github: "https://github.com/CoderRdm/TechExcel_NextJs", 
      color: "bg-accent"
    },{
      title: "User Trust",
      description: "A blockchain project I worked on during a hackathon. It's a reputation system on Ethereum - users can rate each other and build trust scores. The gas fees are annoying, but it was fun learning Solidity.",
      icon: Users,
      technologies: ["Solidity", "Ethereum", "Web3.js", "JavaScript"],
      highlights: [
        "Smart contracts on Ethereum",
        "Reputation scoring system",
        "Web3 integration",
        "Built in 48 hours"
      ],
      liveDemo: "#",
      github: "https://github.com/CoderRdm/sparkathon",
      color: "bg-primary"
    },
    {
      title: "NightOwl",
      description: "AI study buddy I built for a hackathon. It helps you figure out what you don't know, creates study plans, and quizzes you. Uses Google's AI APIs - the hardest part was getting the prompts right so it actually helps instead of just being annoying.",
      icon: Users,
      technologies: ["GoogleGenAI services", "React", "TypeScript"],
      highlights: [
        "Personalized study plans",
        "AI-generated quizzes",
        "Conversational tutoring",
        "Multi-language support"
      ],
      liveDemo: "#",
      github: "https://github.com/CoderRdm/Gemini-Hackathon",
      color: "bg-primary"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's some stuff I've built. Some worked out well, others taught me what not to do.
          </p>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="card-hover border-2 h-full flex flex-col"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-xl ${project.color} mr-4 shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base flex-1">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="px-3 py-1.5 text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                  <Button
  size="lg"
  className="flex-1 font-semibold"
  onClick={() => {
    if (project.liveDemo === '#') {
      alert('Live demo not available right now');
      return;
    }
    window.open(project.liveDemo, '_blank');
  }}
>
  <ExternalLink className="mr-2 h-4 w-4" />
  Live Demo
</Button>

                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex-1 font-semibold"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
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