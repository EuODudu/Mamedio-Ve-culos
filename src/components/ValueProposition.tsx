import { Award, Eye, Users, Target } from "lucide-react";
import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: Award,
    title: "Curadoria rigorosa",
    description: "Selecionamos apenas veículos que atendem nossos padrões de qualidade.",
  },
  {
    icon: Eye,
    title: "Transparência total",
    description: "Todas as informações claras e acessíveis, sem surpresas.",
  },
  {
    icon: Users,
    title: "Atendimento humano",
    description: "Pessoas reais cuidando da sua conquista, do início ao fim.",
  },
  {
    icon: Target,
    title: "Compromisso com sua conquista",
    description: "Vamos além da venda. Estamos aqui para sua realização.",
  },
];

const ValueProposition = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".pillar-item");
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
    <section ref={sectionRef} className="section-padding bg-card relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Muito além de{" "}
            <span className="text-gradient-gold">vender carros</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="pillar-item opacity-0 bg-background rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {pillar.description}
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

export default ValueProposition;
