import { Button } from "@/components/ui/button";
import { ArrowRight, Car, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <Car className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Sua conquista está próxima</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Seu próximo carro está a{" "}
            <span className="text-gradient-gold">poucos cliques</span> de distância.
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Encontre veículos verificados, negocie com confiança e realize sua conquista com a segurança que você merece.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              <Car className="w-5 h-5" />
              Buscar veículos
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroSecondary" size="xl" className="group">
              <MessageSquare className="w-5 h-5" />
              Falar com uma agência
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
