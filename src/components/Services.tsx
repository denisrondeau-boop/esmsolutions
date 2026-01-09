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
      "Analyse SWOT et schéma directeur",
    ],
  },
  {
    icon: Headphones,
    title: "Centre de Services",
    description: "Pilotage et optimisation de votre support avec l'aide de l'intelligence artificielle.",
    items: [
      "Pilotage centre de services partagés",
      "Audit des processus support",
      "Agents IA pour automatisation",
      "Catalogue de services partenaires",
    ],
  },
  {
    icon: BarChart3,
    title: "Gouvernance SI",
    description: "Pilotage stratégique de vos projets de transformation digitale.",
    items: [
      "Pilotage projets de transformation",
      "Gestion budgétaire et risques",
      "Analyse KPI et reporting mensuel",
      "Bilan annuel qualité/coûts/délais",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Développement des compétences de vos équipes sur les outils et bonnes pratiques.",
    items: [
      "Outils de formation personnalisés",
      "Modules d'auto-formation",
      "Sessions de formation animées",
      "Accompagnement au changement",
    ],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
            Nos expertises
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Des services adaptés à vos besoins
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche sur mesure pour accompagner TPE, PME, associations et collectivités 
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
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-gradient-hero">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-secondary" />
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
