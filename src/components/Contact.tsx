import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-accent rounded-full">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous pour un premier échange sur vos besoins. 
            Nous vous proposerons un diagnostic adapté à votre situation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Coordonnées
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:contact@esm-conseil.fr" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@esm-conseil.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <a href="tel:+33123456789" className="text-muted-foreground hover:text-primary transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <p className="text-muted-foreground">
                    Paris, Île-de-France
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-accent/50">
              <h4 className="font-semibold text-foreground mb-2">Diagnostic gratuit</h4>
              <p className="text-sm text-muted-foreground">
                Bénéficiez d'un premier échange de 30 minutes pour évaluer vos besoins 
                et identifier les opportunités d'optimisation de votre SI.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="bg-card"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Organisation
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Votre entreprise"
                    className="bg-card"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="bg-card"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Objet de votre demande"
                  className="bg-card"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou vos besoins..."
                  className="bg-card resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
