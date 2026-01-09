import { Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold">ESM</span>
            <span className="text-sm opacity-70">Enterprise Service Management</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@esm-conseil.fr" 
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-70">
          <p>© {currentYear} ESM - Enterprise Service Management. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
