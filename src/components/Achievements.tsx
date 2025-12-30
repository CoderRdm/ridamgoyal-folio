import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code, DollarSign, Award, GitBranch } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "TechExcel Hackathon - 2nd Place",
      organization: "MNIT Jaipur",
      date: "March 2025",
      description: "Came in 2nd place out of 100+ teams. We built NightOwl in 48 hours and somehow it worked.",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "300+ LeetCode Problems Solved",
      organization: "LeetCode Platform",
      date: "Ongoing",
      description: "Been grinding LeetCode for a while now. Still can't solve some hard problems, but getting better.",
      icon: Code,
      color: "text-green-600", 
      bgColor: "bg-green-50"
    },
    {
      title: "2⭐ CodeChef Rating",
      organization: "CodeChef",
      date: "Current",
      description: "Got to 2 stars on CodeChef. Competitive programming is tough, but it's good practice.",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Overall Coordinator",
      organization: "Code to Career Club, MNIT",
      date: "Current Position",
      description: "Running the Code to Career club at MNIT. Organizing events, workshops, and trying to help other students learn.",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Open Source Contributor",
      organization: "Hacktoberfest & GitHub",
      date: "2024",
      description: "Contributed to open source projects during Hacktoberfest. Got the Pull Shark achievement on GitHub for my contributions.",
      icon: GitBranch,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      link: "https://github.com/users/CoderRdm/achievements/pull-shark"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-primary">Leadership</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Some things I'm proud of, and a few positions I've held
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            const hasLink = 'link' in achievement && achievement.link;
            return (
              <Card 
                key={achievement.title}
                className={`p-6 card-hover ${hasLink ? 'cursor-pointer' : ''}`}
                onClick={hasLink ? () => window.open((achievement as any).link, '_blank') : undefined}
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
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="px-3 py-1">
                        {achievement.date}
                      </Badge>
                      {hasLink && (
                        <Badge variant="outline" className="px-3 py-1 text-xs">
                          Verify →
                        </Badge>
                      )}
                    </div>
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