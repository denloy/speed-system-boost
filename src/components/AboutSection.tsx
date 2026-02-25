import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import portrait from "@/assets/portrait.jpg";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 120, suffix: "+", label: "Automations Built" },
  { value: 10000, suffix: "+", label: "Hours Saved" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden glow-primary">
            <img src={portrait} alt="Developer portrait" className="w-full max-w-md mx-auto rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-4 md:right-4 glass-strong rounded-xl px-6 py-4 glow-primary">
            <p className="text-sm text-muted-foreground">Full-Stack & AI Expert</p>
            <p className="font-display font-bold text-primary">5+ Years Experience</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            I Don't Just Build Apps —{" "}
            <span className="gradient-text">I Build Revenue Systems</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
            <p>
              I turn manual workflows into intelligent automation. I connect tools, APIs, CRMs, and AI agents 
              into seamless systems that work 24/7 — so you don't have to.
            </p>
            <p>
              As a full-stack engineer and AI automation specialist, I focus on one thing: 
              building technology that directly impacts your bottom line.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
