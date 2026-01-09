import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Governance } from "@/components/Governance";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Governance />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
