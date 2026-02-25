import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Powered CRM Automation",
    problem: "Manual lead tracking taking 20+ hours/week",
    solution: "Built AI agents with auto-classification, scoring, and CRM sync",
    result: "85% reduction in manual work, 3x faster lead response",
  },
  {
    title: "SaaS Analytics Platform",
    problem: "No visibility into business KPIs across tools",
    solution: "Full-stack dashboard aggregating data from 12+ APIs in real-time",
    result: "Single source of truth, saving $50K+/year in reporting costs",
  },
  {
    title: "E-commerce Automation Suite",
    problem: "Order processing bottleneck limiting growth",
    solution: "End-to-end automation: orders, inventory, shipping, customer comms",
    result: "10x order capacity with zero additional headcount",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real results for real businesses. Every project is outcome-driven.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover-glow flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-lg font-bold">{project.title}</h3>
              <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Problem</p>
                <p className="text-sm text-muted-foreground">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Solution</p>
                <p className="text-sm text-muted-foreground">{project.solution}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary mb-1">Result</p>
                <p className="text-sm font-semibold text-foreground">{project.result}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
