import { Card } from "@/components/ui/card";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
        <div className="w-24 h-0.5 bg-primary mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm a final-year <span className="text-primary font-semibold">Electrical Engineering student</span> at MNIT Jaipur and a Software Engineering Intern at Wells Fargo. I'm a product-minded full-stack developer who builds and ships AI-powered applications.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            My work spans <span className="text-primary font-semibold">React, Next.js, Node.js, Python, and LLM application development</span> - from queueing-theory simulations to evaluation and fact-checking pipelines for AI agents. I also enjoy system design and competitive programming.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {["Full-stack Development", "LLM Applications", "System Design", "Problem Solving", "Cloud & Deployment", "AI Integration"].map((skill) => (
              <div key={skill} className="flex items-center space-x-3 group"><div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" /><span className="text-foreground font-medium">{skill}</span></div>
            ))}
          </div>
        </div>
        <Card className="card-hover border-2"><div className="p-10"><h3 className="text-2xl font-bold mb-10 text-primary text-center">Quick Stats</h3><div className="grid grid-cols-2 gap-10">
          {[
            { label: "LeetCode Problems", value: "400+", color: "text-primary" },
            { label: "SQL Problems Solved", value: "19", color: "text-accent" },
            { label: "CodeChef Rating", value: "2-star", color: "text-primary" },
            { label: "Hackathon Finish", value: "2nd", color: "text-accent" },
          ].map((stat) => <div key={stat.label} className="text-center"><div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div><div className="text-sm text-muted-foreground font-medium">{stat.label}</div></div>)}
        </div></div></Card>
      </div>
    </div>
  </section>
);

export default About;
