import { motion } from "framer-motion";

const before = ["Manual, repetitive work", "Scattered tools & systems", "Slow, costly operations"];
const after = ["Fully automated workflows", "Smart AI-powered systems", "Scalable, revenue-driving platforms"];

const ResultsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
      >
        The <span className="gradient-text">Transformation</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="font-display text-lg font-bold text-destructive mb-6">Before Working With Me</h3>
          <ul className="space-y-4">
            {before.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <span className="text-destructive">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 glow-primary"
        >
          <h3 className="font-display text-lg font-bold text-primary mb-6">After Working With Me</h3>
          <ul className="space-y-4">
            {after.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <span className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ResultsSection;
