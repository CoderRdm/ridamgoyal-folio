import { Card } from "@/components/ui/card";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  BookOpen,
  Layers
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React.js", "Next.js", "Redux", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
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
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
      color: "text-primary"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "Vercel"],
      color: "text-accent"
    },
    {
      title: "Core Concepts",
      icon: BookOpen,
      skills: ["OOP", "DBMS", "Authentication", "DSA"],
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className={`p-6 bg-gradient-card border-0 shadow-soft card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-background ${category.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-background border border-border rounded-md text-sm font-medium hover:border-primary transition-colors duration-300"
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