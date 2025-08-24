import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a passionate <span className="text-primary font-semibold">Electrical Engineering student</span> at 
              MNIT Jaipur, leveraging analytical thinking and problem-solving skills to build scalable web applications.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Skilled in <span className="text-primary font-semibold">React.js, Next.js, Node.js, SQL</span>, with a 
              strong foundation in Data Structures and Algorithms. My goal is to create impactful, user-friendly 
              solutions that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Problem Solving", "Full Stack Development", "System Design", 
                "Team Leadership", "Technical Innovation"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-card border border-border rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-card border-0 shadow-medium">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold gradient-text mb-2">Quick Stats</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">LeetCode Problems</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">2⭐</div>
                  <div className="text-sm text-muted-foreground">CodeChef Rating</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">3000+</div>
                  <div className="text-sm text-muted-foreground">Users Served</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;