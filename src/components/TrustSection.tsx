import { ShieldCheck, FileCheck, Users, Lock } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Agências Avaliadas",
    description: "Cada agência passa por rigorosa verificação de credibilidade",
  },
  {
    icon: FileCheck,
    title: "Procedência Garantida",
    description: "Histórico completo e documentação verificada de cada veículo",
  },
  {
    icon: Users,
    title: "Atendimento Direto",
    description: "Conexão direta com as agências, sem intermediários",
  },
  {
    icon: Lock,
    title: "Segurança Total",
    description: "Plataforma segura e transações protegidas",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Por que confiar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Aqui, confiança não é promessa.{" "}
            <span className="text-gradient-gold">É critério.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selecionamos criteriosamente cada parceiro para garantir sua tranquilidade na hora de escolher seu próximo veículo.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-gradient-card rounded-xl p-6 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-accent/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
