import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-12 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-display text-xl font-bold gradient-text">DevAI</span>
          <p className="text-sm text-muted-foreground mt-1">
            Building scalable software & AI systems that drive real business growth.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { icon: Twitter, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Github, href: "#" },
            { icon: Mail, href: "mailto:hello@example.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Social link"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 DevAI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
