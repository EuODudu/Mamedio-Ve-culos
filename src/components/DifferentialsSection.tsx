import { Check, Award, ShieldCheck, Zap, Handshake } from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Agências Criteriosamente Selecionadas",
    description: "Cada parceiro passa por um processo rigoroso de avaliação antes de fazer parte da nossa rede.",
  },
  {
    icon: Award,
    title: "Transparência Total",
    description: "Todas as informações são claras e verificáveis. Nada de surpresas ou custos ocultos.",
  },
  {
    icon: Handshake,
    title: "Atendimento Direto",
    description: "Sem atravessadores. Você fala diretamente com a agência e negocia com quem entende.",
  },
  {
    icon: Zap,
    title: "Plataforma Moderna",
    description: "Tecnologia de ponta para uma experiência de busca rápida, segura e intuitiva.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Você escolhe com confiança.{" "}
              <span className="text-gradient-gold">Nós garantimos o padrão.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Não somos apenas uma vitrine de carros. Somos um selo de qualidade que conecta você às melhores oportunidades do mercado.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {differentials.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div
                key={item.title}
                className={`group bg-background rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card ${
                  index === 0 ? "lg:translate-y-8" : ""
                } ${index === 3 ? "lg:-translate-y-8" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-sm group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
