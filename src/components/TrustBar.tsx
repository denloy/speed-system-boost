import { motion } from "framer-motion";

const TrustBar = () => (
  <section className="py-12 border-y border-border/30">
    <div className="container mx-auto px-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mb-8 tracking-widest uppercase"
      >
        Trusted by startups, founders & growing businesses worldwide
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
        {["TechFlow", "DataSync", "ScaleAI", "CloudNova", "AutomateHQ"].map((name) => (
          <span key={name} className="font-display text-lg md:text-xl font-bold text-foreground">
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
