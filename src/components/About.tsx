import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hey! I'm an <span className="text-primary font-semibold">Electrical Engineering student</span> at MNIT Jaipur, 
              but honestly, I've been more into coding than circuits lately. Started with web development a few years back 
              and got hooked on building things people actually use.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I work with <span className="text-primary font-semibold">React, Next.js, Node.js, TypeScript, and some blockchain stuff</span> when I'm feeling adventurous. 
              Also dabbling with AI tools and trying to figure out how to make them useful. When I'm not coding, 
              I'm usually solving DSA problems or figuring out why my code isn't working.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                "Problem Solving", "Full Stack Dev", "System Design", 
                "Leading Teams", "Trying New Tech", "AI Integration"
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="card-hover border-2">
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-10 text-primary text-center">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: 'LeetCode Problems', value: '300+', color: 'text-primary' },
                  { label: 'CodeChef Rating', value: '2⭐', color: 'text-accent' },
                  { label: 'Users Served', value: '300+', color: 'text-primary' },
                  { label: 'Projects Built', value: '5+', color: 'text-accent' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;