import { motion } from "framer-motion";
import { Brain, Code2, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Automation",
    items: ["AI Agents & Assistants", "Workflow Automation", "CRM & API Integrations", "Chatbots & AI Pipelines"],
    gradient: "from-primary to-accent",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    items: ["SaaS Platforms", "Web Applications", "MVP Development", "Scalable Backend Systems"],
    gradient: "from-accent to-primary",
  },
  {
    icon: Zap,
    title: "Business Process Optimization",
    items: ["System Design", "Performance Optimization", "Automation Strategy", "Revenue System Architecture"],
    gradient: "from-primary to-secondary",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Services That <span className="gradient-text">Drive Results</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          End-to-end solutions designed to automate, scale, and generate revenue.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover-glow"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon size={28} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">{service.title}</h3>
            <ul className="space-y-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
