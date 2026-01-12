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
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <span className="inline-block text-accent font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
            Por que escolher
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            A{" "}
            <span className="text-gradient-gold">Mamedio Veículos</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença na sua experiência de compra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-item opacity-0 bg-card rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
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
