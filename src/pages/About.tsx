import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, ArrowRightLeft, Wrench } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero section */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-4xl text-foreground font-['Playfair_Display'] mb-6 md:text-4xl font-normal">Les services managés : une solution indispensable, sans coût caché 

            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">

            </p>
          </motion.div>
        </section>

        {/* Key insights */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl bg-accent p-8 shadow-[var(--shadow-elevated)]">
              
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary">
                <ArrowRightLeft className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-lg font-semibold text-accent-foreground">
                Concentrons-nous sur les projets de transformations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl bg-secondary p-8 shadow-[var(--shadow-elevated)]">
              
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary">
                <Wrench className="w-6 h-6 text-secondary-foreground bg-muted-foreground" />
              </div>
              <p className="text-lg font-semibold text-secondary-foreground">Les services managés doivent gérer le quotidien du SI, sans coûts cachés
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-destructive" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-['Playfair_Display']">Pourquoi ESM Solutions Numériques ?

                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>Après avoir opéré comme DSI, puis comme conseil informatique depuis plus de 20 ans, un constat s'est imposé : sans l'ajout de mesures fortes pour la sécurité au quotidien, une PME prend des risques énormes en opérant sur Internet. 
Ce constat est aussi un aveu d'échec face aux exigences toujours plus grandes de sécurisation et de transformation du Système d'Information.
</p>
                  <p className="text-foreground font-medium border-l-4 border-primary pl-6">Un fournisseur de services managés pour gérer vos opérations IT et garantir le niveau de sécurité de votre Système d'Information. Vous disposerez enfin de vos ressources internes pour accompagner les projets de transformation.</p>
                  <p className="text-foreground font-medium border-l-4 border-primary pl-6 mt-4"><strong>ESM Solutions Numériques</strong> : un fournisseur de services managés pour gérer le quotidien sans diminuer le niveau de sécurité de votre Système d'Information. Vous disposerez enfin de vos ressources internes pour accompagner les projets de transformation.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);
};

export default About;