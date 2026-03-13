import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Landmark, Briefcase } from "lucide-react";

const clientTypes = [
  {
    icon: Briefcase,
    title: "TPE",
    description: "Accompagnement adapté aux très petites entreprises avec des solutions pragmatiques et un budget maîtrisé.\nInclus la fourniture en location longue durée d'un package informatique : poste de travail, sécurité, support licences bureautique.",
    gradient: "bg-gradient-hero",
  },
  {
    icon: Building2,
    title: "PME",
    description: "Structuration du SI pour accompagner la croissance et optimiser les processus métier.",
    gradient: "bg-gradient-secondary",
  },
  {
    icon: Users,
    title: "Associations",
    description: "Solutions numériques adaptées aux contraintes et spécificités du secteur associatif.",
    gradient: "bg-gradient-accent",
  },
  {
    icon: Landmark,
    title: "Collectivités",
    description: "Expertise des enjeux du secteur public et accompagnement à la transformation digitale.",
    gradient: "bg-primary",
  },
];

export const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary-foreground bg-gradient-accent rounded-full shadow-soft">
            Notre clientèle
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Des solutions pour chaque structure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous adaptons notre accompagnement aux spécificités de chaque type d'organisation, 
            quelle que soit sa taille ou son secteur d'activité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 ${client.gradient}`} />
              <div className="p-8">
                <div className={`inline-flex p-3 rounded-xl ${client.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <client.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {client.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
