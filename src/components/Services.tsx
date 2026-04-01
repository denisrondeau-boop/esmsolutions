import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Headphones, BarChart3, GraduationCap, ChevronRight } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Conseil & Diagnostic",
    description: "Audit complet de vos ressources informatiques et cartographie des risques pour un SI optimisé.",
    items: [
      "Audit des processus clés",
      "Organisation et gouvernance SI",
      "Cartographie des risques (DICT)",
      "Schéma Directeur du Système d'Information (SDSI)",
      "Amélioration de la performance opérationnelle",
    ],
  },
  {
    icon: Headphones,
    title: "Services Managés",
    description: "Pilotage et optimisation de votre sécurité avec l'aide d'outils de dernière génération ",
    items: [
      "Centre de services support utilisateurs",
      "Supervision de parc, suivi des mises jours et des sauvegardes",
      "Surveillance des systèmes avec BitDefender GravityZone (EDR, XDR, SOC), patch management, conformité des équipements",
      "Solutions de continuité d'activité en cas de sinistre : PCA/ PRA",
    ],
  },
  {
    icon: BarChart3,
    title: "Trajectoire de conformité NIS2",
    description: "Pilotage des projets de mise en conformité NIS2",
    items: [
      "Phase 1 : Cadrage et gouvernance du projet",
      "Phase 2 : Evaluation de la conformité (sur 18 domaines NIS2)",
      "Phase 3 : Remédiation priorisée, traitement des écarts",
      "Phase 4 : Pilotage en continu : revue mensuelle des indicateurs",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Développement des compétences de vos équipes sur les outils et bonnes pratiques.",
    items: [
      "Outils de formation personnalisés",
      "Exercices et apprentissage en auto-formation",
      "Animation de sessions de formation",
      "Accompagnement au changement",
    ],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary-foreground bg-gradient-secondary rounded-full shadow-soft">
            Nos expertises
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Des services adaptés à vos besoins
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche sur mesure pour accompagner TPE, PME, associations et établissements médico-sociaux 
            dans leur transformation numérique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"

            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-gradient-hero group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};