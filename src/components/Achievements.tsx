import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award, Code, Trophy, Users } from "lucide-react";

const achievements = [
  { title: "TechExcel Hackathon - 2nd Place", organization: "MNIT Training & Placement Cell", date: "March 2025", description: "Placed second among 50 teams at the MNIT Training & Placement Cell hackathon.", icon: Trophy, color: "text-yellow-600", bgColor: "bg-yellow-50" },
  { title: "400+ LeetCode Problems Solved", organization: "LeetCode", date: "Ongoing", description: "Solved 400+ problems, including 19 MySQL problems, while strengthening data structures and algorithms fundamentals.", icon: Code, color: "text-green-600", bgColor: "bg-green-50" },
  { title: "2-star CodeChef Rating", organization: "CodeChef", date: "Ongoing", description: "Active competitive-programming participant focused on continual problem-solving practice.", icon: Award, color: "text-blue-600", bgColor: "bg-blue-50" },
  { title: "Student Placement Coordinator", organization: "Training and Placement Cell, MNIT", date: "Feb 2026 - Present", description: "Supporting placement-related coordination for students at MNIT Jaipur.", icon: Users, color: "text-purple-600", bgColor: "bg-purple-50" },
  { title: "Advisor to Coordinator", organization: "Code 2 Career Club, MNIT", date: "Apr 2026 - Present", description: "Advising the student coordinator for the Code 2 Career Club at MNIT.", icon: Users, color: "text-orange-600", bgColor: "bg-orange-50" },
];

const Achievements = () => (
  <section id="achievements" className="section-padding bg-background"><div className="max-w-6xl mx-auto"><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements & <span className="text-primary">Leadership</span></h2><div className="w-24 h-0.5 bg-primary mx-auto" /><p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">Selected achievements and positions of responsibility</p></div><div className="grid md:grid-cols-2 gap-6">
    {achievements.map((achievement) => { const Icon = achievement.icon; return <Card key={achievement.title} className="p-6 card-hover"><div className="flex items-start gap-4"><div className={`p-3 rounded-xl ${achievement.bgColor} ${achievement.color} flex-shrink-0`}><Icon className="w-6 h-6" /></div><div className="flex-1 space-y-3"><div><h3 className="text-xl font-bold text-foreground">{achievement.title}</h3><p className="text-primary font-semibold">{achievement.organization}</p></div><p className="text-foreground/80 leading-relaxed">{achievement.description}</p><Badge variant="secondary" className="px-3 py-1">{achievement.date}</Badge></div></div></Card>; })}
  </div></div></section>
);

export default Achievements;
