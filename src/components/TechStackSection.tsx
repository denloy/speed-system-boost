import { motion } from "framer-motion";

const categories = [
  { label: "Frontend", techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { label: "Backend", techs: ["Node.js", "Express", "Python", "PostgreSQL"] },
  { label: "AI / ML", techs: ["OpenAI", "LangChain", "RAG", "Vector DB"] },
  { label: "Automation", techs: ["n8n", "Zapier", "Webhooks", "REST APIs"] },
];

const TechStackSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Tech <span className="gradient-text">Stack</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display font-bold text-primary mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.techs.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-muted text-xs font-medium text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
