import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const techBadges = [
  "React", "Next.js", "Node.js", "Python", "OpenAI", "n8n", "TypeScript", "APIs", "LangChain"
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative container mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Currently available for 2 new projects
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            I Build Scalable Software & AI Automations That{" "}
            <span className="gradient-text glow-text">Grow Your Business</span>{" "}
            While You Sleep.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Automate operations • Reduce costs • Increase productivity • Launch fast. 
            I turn complex business challenges into intelligent, automated systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover-glow glow-primary transition-all"
            >
              🚀 Book a Strategy Call
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass text-foreground font-semibold text-lg hover:border-primary/50 transition-all"
            >
              <Mail size={20} />
              Start a Project
            </a>
          </div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground animate-float"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
