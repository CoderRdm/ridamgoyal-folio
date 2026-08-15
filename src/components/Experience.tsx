import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Bot, Calendar, ChartNoAxesCombined, FlaskConical, MapPin, Network } from "lucide-react";

const contributions = [
  { title: "Built an MCP server for legacy-code analysis", description: "Enabled LLM-driven analysis of legacy COBOL code and the generation and analysis of Business Requirement Documents to support a banking-system migration.", icon: Network, color: "text-primary" },
  { title: "Created a sandboxed agent-testing extension", description: "Simulated AI-agent responses so engineers could validate agent workflows without consuming API tokens or incurring inference costs.", icon: FlaskConical, color: "text-accent" },
  { title: "Developed an AI-powered Jira analyzer", description: "Turned sprint and issue data into actionable insights, helping engineering leads identify team bottlenecks and delivery trends.", icon: ChartNoAxesCombined, color: "text-primary" },
  { title: "Built an on-call AI assistant and Autosys skill", description: "Bridged Unix and Windows environments to streamline downtime triage, and auto-generated JIL scripts for scheduled batch workflows.", icon: Bot, color: "text-accent" },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-background"><div className="max-w-6xl mx-auto"><div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-primary">Experience</span></h2><div className="w-24 h-0.5 bg-primary mx-auto" /></div><Card className="p-8 card-hover border-2"><div className="flex flex-col lg:flex-row lg:items-start gap-8"><div className="flex-1"><div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"><div><h3 className="text-2xl font-bold text-foreground mb-2">Software Engineering Intern</h3><p className="text-lg text-primary font-semibold">Wells Fargo</p></div><div className="flex flex-col sm:items-end gap-2"><div className="flex items-center gap-2 text-muted-foreground"><Calendar className="w-4 h-4" /><span className="text-sm">May 2026 - Jul 2026</span></div><div className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4" /><span className="text-sm">Bengaluru, India</span></div></div></div><div className="space-y-4">
    {contributions.map(({ title, description, icon: Icon, color }) => <div key={title} className="flex items-start gap-4 p-5 bg-background rounded-xl border-2 border-border hover:border-primary/50 transition-colors"><div className={`p-2 bg-primary/10 rounded-lg ${color}`}><Icon className="w-6 h-6 flex-shrink-0" /></div><div><h4 className="font-semibold text-foreground mb-1">{title}</h4><p className="text-muted-foreground text-sm leading-relaxed">{description}</p></div></div>)}
  </div><div className="flex flex-wrap gap-2 mt-8">{["MCP", "LLM Workflows", "COBOL Analysis", "Jira Analytics", "Unix", "Windows", "Autosys"].map((tech) => <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-xs font-medium">{tech}</Badge>)}</div></div></div></Card></div></section>
);

export default Experience;
