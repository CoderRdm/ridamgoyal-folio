import { Card } from "@/components/ui/card";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Shield,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      color: "text-primary"
    },
    {
      title: "Backend", 
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs"],
      color: "text-accent"
    },
    {
      title: "Databases",
      icon: Database, 
      skills: ["PostgreSQL"],
      color: "text-primary"
    },
    {
      title: "Authentication",
      icon: Shield,
      skills: ["JWT", "Google OAuth", "Clerk", "RBAC"],
      color: "text-accent"
    },
    {
      title: "Blockchain & AI",
      icon: Zap,
      skills: ["Solidity", "Ethereum", "Web3.js", "GoogleGenAI", "AI"],
      color: "text-primary"
    },
    {
      title: "Tools & Deployment",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "Vercel"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies I've actually used in my projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-6 card-hover border-2 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-background ${category.color} shadow-md`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-background border-2 border-border rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;