import { CheckCircle2, Shield, FileCheck, Headphones, Clock, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: Shield,
    title: "Veículos verificados",
    description: "Todos os veículos passam por rigorosa inspeção técnica e documental.",
  },
  {
    icon: FileCheck,
    title: "Documentação completa",
    description: "Toda documentação verificada e regularizada antes da venda.",
  },
  {
    icon: Headphones,
    title: "Atendimento personalizado",
    description: "Equipe especializada pronta para atender suas necessidades.",
  },
  {
    icon: Clock,
    title: "Processo ágil",
    description: "Da escolha à entrega, tudo de forma rápida e eficiente.",
  },
  {
    icon: Star,
    title: "Qualidade garantida",
    description: "Seleção criteriosa de veículos que atendem nossos padrões.",
  },
  {
    icon: CheckCircle2,
    title: "Suporte pós-venda",
    description: "Acompanhamento contínuo mesmo após a compra.",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".feature-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-up");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background relative">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <span className="inline-block text-accent font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            Por que escolher
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            A{" "}
            <span className="text-gradient-gold">Mamedio Veículos</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença na sua experiência de compra.
          </p>
        </div>

        {/* Grid - Mobile: 1 coluna, Desktop: múltiplas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-item opacity-0 bg-card rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1.5 md:mb-2 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
