import { motion } from "framer-motion";
import { Search, Lightbulb, Hammer, Rocket } from "lucide-react";

const steps = [
  { icon: Search, label: "Discover", desc: "Deep dive into your business, goals, and pain points" },
  { icon: Lightbulb, label: "Strategy", desc: "Blueprint the perfect automation & tech solution" },
  { icon: Hammer, label: "Build", desc: "Develop, test, and iterate until it's bulletproof" },
  { icon: Rocket, label: "Deploy & Scale", desc: "Launch, monitor, and scale for maximum impact" },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
      >
        How I <span className="gradient-text">Work</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 glow-primary">
              <step.icon size={28} className="text-primary-foreground" />
            </div>
            <div className="font-display text-sm text-primary mb-2">Step {i + 1}</div>
            <h3 className="font-display text-xl font-bold mb-2">{step.label}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
