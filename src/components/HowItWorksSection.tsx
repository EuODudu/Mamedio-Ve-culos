import { Search, FileSearch, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Escolha o veículo ideal",
    description: "Navegue pela vitrine e encontre o carro perfeito para você.",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Analise todas as informações",
    description: "Veja todos os detalhes, fotos e especificações do veículo.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Fale direto com a Mamedio Veículos",
    description: "Entre em contato e negocie de forma simples e transparente.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <span className="inline-block text-accent font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
            Como funciona
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Simples, rápido e{" "}
            <span className="text-gradient-gold">sem complicação.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Sem burocracia. Sem surpresas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-border via-accent/30 to-border" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Number */}
              <div className="relative mb-3 sm:mb-4 md:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-lg">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent" />
                </div>
                <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 md:mb-3 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
