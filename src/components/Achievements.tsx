import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code, DollarSign, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "TechExcel Hackathon - 2nd Place",
      organization: "MNIT Jaipur",
      date: "March 2025",
      description: "Secured 2nd position in competitive hackathon among 100+ teams",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "200+ LeetCode Problems Solved",
      organization: "LeetCode Platform",
      date: "Ongoing",
      description: "Consistent problem-solving with focus on algorithms and data structures",
      icon: Code,
      color: "text-green-600", 
      bgColor: "bg-green-50"
    },
    {
      title: "2⭐ CodeChef Rating",
      organization: "CodeChef",
      date: "Current",
      description: "Achieved 2-star rating through competitive programming excellence",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Finance Secretary",
      organization: "Code to Career Club, MNIT",
      date: "Current Position",
      description: "Managed ₹50,000+ budget and organized 5+ technical workshops",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Recognition for technical excellence and leadership contributions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.title}
                className={`p-6 bg-gradient-card border-0 shadow-soft card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${achievement.bgColor} ${achievement.color} flex-shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                      <p className="text-primary font-semibold">{achievement.organization}</p>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <Badge variant="secondary" className="px-3 py-1">
                      {achievement.date}
                    </Badge>
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

export default Achievements;