import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Shield, FileCheck } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Schéma Directeur",
    description: "Vision stratégique et roadmap de transformation de votre SI alignée sur vos objectifs métier.",
  },
  {
    icon: TrendingUp,
    title: "Pilotage & ROI",
    description: "Suivi budgétaire rigoureux et mesure du retour sur investissement de vos projets IT.",
  },
  {
    icon: Shield,
    title: "Gestion des Risques",
    description: "Identification et maîtrise des risques : disponibilité, intégrité, confidentialité, traçabilité.",
  },
  {
    icon: FileCheck,
    title: "Conformité",
    description: "Accompagnement RGPD et respect des réglementations sectorielles applicables.",
  },
];

export const Governance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gouvernance" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-accent rounded-full">
            Gouvernance SI
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Une gouvernance solide pour un SI performant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous structurons votre système d'information autour de quatre piliers fondamentaux 
            pour garantir performance et pérennité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-4 rounded-2xl bg-accent mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <pillar.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-hero"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Années d'expérience" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "50+", label: "Projets réalisés" },
              { value: "24/7", label: "Support disponible" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
