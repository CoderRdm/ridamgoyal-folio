import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <p className="text-xl text-foreground/80 leading-relaxed">
              I am a passionate <span className="text-primary font-semibold">Electrical Engineering student</span> at 
              MNIT Jaipur, leveraging analytical thinking and problem-solving skills to build scalable web applications.
            </p>
            
            <p className="text-xl text-foreground/80 leading-relaxed">
              Skilled in <span className="text-primary font-semibold">React.js, Next.js, Node.js, SQL</span>, with a 
              strong foundation in Data Structures and Algorithms. My goal is to create impactful, user-friendly 
              solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                "Problem Solving", "Full Stack Development", "System Design", 
                "Team Leadership", "Technical Innovation"
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-foreground font-semibold text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="glass-card border-white/10 shadow-glow card-hover animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-8 gradient-text text-center">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'LeetCode Problems', value: '200+', color: 'text-primary' },
                  { label: 'CodeChef Rating', value: '2⭐', color: 'text-accent' },
                  { label: 'Users Served', value: '3000+', color: 'text-primary-light' },
                  { label: 'Projects Built', value: '5+', color: 'text-accent-light' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center group hover:scale-105 transition-transform">
                    <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:animate-glow`}>{stat.value}</div>
                    <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
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