import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "He automated our entire onboarding pipeline. What used to take 3 days now takes 30 minutes. Absolute game-changer for our growth.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, ScaleUp Labs",
    text: "The AI system he built handles 80% of our customer inquiries automatically. Our team can finally focus on high-value work.",
  },
  {
    name: "Emily Watson",
    role: "COO, DataSync",
    text: "Best investment we made. The automation suite paid for itself within the first month. Professional, fast, and incredibly effective.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
      >
        What Clients <span className="gradient-text">Say</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-display font-bold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
