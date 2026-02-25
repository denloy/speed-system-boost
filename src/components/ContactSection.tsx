import { motion } from "framer-motion";
import { ArrowRight, Mail, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would integrate with backend
    alert("Thanks for reaching out! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Turn Your Idea Into a{" "}
            <span className="gradient-text glow-text">Scalable, AI-Powered System</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Ready to automate, scale, and grow? Let's talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="https://wa.me/2347061746733?text=Hi%2C%20I%27d%20like%20to%20book%20a%20call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover-glow glow-primary transition-all"
            >
              🚀 Book a Call <ArrowRight size={20} />
            </a>
            <a
              href="https://wa.me/2347061746733?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass text-foreground font-semibold text-lg hover:border-primary/50 transition-all"
            >
              <Mail size={20} /> Send a Message
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          id="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto glass rounded-2xl p-8 glow-primary"
        >
          <h3 className="font-display text-xl font-bold mb-6">Send a Message</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover-glow glow-primary transition-all"
            >
              <Send size={18} /> Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
