import { Award, Car, Users, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Stat {
  icon: typeof Award;
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    icon: Car,
    value: "1.200+",
    label: "Veículos vendidos",
  },
  {
    icon: Users,
    value: "5.000+",
    label: "Clientes satisfeitos",
  },
  {
    icon: ShieldCheck,
    value: "15",
    label: "Anos de experiência",
    suffix: "anos",
  },
  {
    icon: Award,
    value: "98%",
    label: "Taxa de satisfação",
  },
  {
    icon: TrendingUp,
    value: "50+",
    label: "Veículos em estoque",
  },
  {
    icon: CheckCircle2,
    value: "100%",
    label: "Comprometidos com você",
  },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(43 96% 56%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <span className="inline-block text-accent font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            NÚMEROS QUE FALAM POR SI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-12">
            Resultados que{" "}
            <span className="text-gradient-gold">comprometem</span>
          </h2>
          
          {/* Destaque Principal - Mobile: mais compacto */}
          <div className="max-w-4xl mx-auto mb-6 md:mb-8">
            <div className="relative inline-block w-full">
              <div className="absolute -inset-2 md:-inset-4 bg-accent/10 rounded-xl md:rounded-2xl blur-xl"></div>
              <p className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 bg-card/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-accent/20 text-center">
                Não prometemos.{" "}
                <span className="text-gradient-gold relative">
                  Comprovamos com fatos.
                  <span className="absolute -bottom-0.5 md:-bottom-1 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></span>
                </span>
              </p>
            </div>
          </div>

          {/* Conteúdo Estruturado - Mobile: espaçamento reduzido */}
          <div className="max-w-5xl mx-auto space-y-4 md:space-y-5 lg:space-y-6">
            {/* Transparência em cada decisão */}
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 flex items-center gap-2 md:gap-3">
                <span className="w-0.5 md:w-1 h-6 md:h-8 lg:h-12 bg-gradient-to-b from-accent to-accent/50 rounded-full flex-shrink-0"></span>
                <span>Transparência em cada decisão</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed pl-3 md:pl-4 lg:pl-5">
                Cada número representa uma <span className="text-foreground font-semibold">escolha bem-feita</span>, um cliente atendido com <span className="text-foreground font-semibold">clareza</span> e uma conquista entregue com <span className="text-foreground font-semibold">total segurança</span>.
              </p>
            </div>

            {/* Processo que gera confiança */}
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 flex items-center gap-2 md:gap-3">
                <span className="w-0.5 md:w-1 h-6 md:h-8 lg:h-12 bg-gradient-to-b from-accent to-accent/50 rounded-full flex-shrink-0"></span>
                <span>Processo que gera confiança</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed pl-3 md:pl-4 lg:pl-5">
                Trabalhamos com <span className="text-foreground font-semibold">critérios rigorosos</span>, <span className="text-foreground font-semibold">processos bem definidos</span> e <span className="text-foreground font-semibold">controle em cada etapa</span>, para que você saiba exatamente o que está comprando.
              </p>
            </div>

            {/* Compromisso que vai além da venda */}
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 flex items-center gap-2 md:gap-3">
                <span className="w-0.5 md:w-1 h-6 md:h-8 lg:h-12 bg-gradient-to-b from-accent to-accent/50 rounded-full flex-shrink-0"></span>
                <span>Compromisso que vai além da venda</span>
              </h3>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 border border-accent/20 pl-3 md:pl-4 lg:pl-5">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                  Aqui, resultados não são apenas métricas. São reflexo de <span className="text-accent font-semibold">responsabilidade</span>, <span className="text-accent font-semibold">credibilidade</span> e <span className="text-accent font-semibold">respeito</span> em cada negociação realizada.
                </p>
              </div>
            </div>

            {/* Mensagem Final */}
            <div className="max-w-4xl mx-auto pt-4 md:pt-6 lg:pt-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-xl md:rounded-2xl blur-2xl"></div>
                <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 bg-card/80 backdrop-blur-sm rounded-lg md:rounded-xl border border-accent/30 text-center leading-relaxed">
                  Porque quando o assunto é <span className="text-gradient-gold">conquistar o próximo carro</span>,
                  <br className="hidden md:block" />
                  nossos números assumem o <span className="text-gradient-gold">compromisso com você</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid - Mobile: 2 colunas, Desktop: expande */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="stat-item opacity-0 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-background rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 lg:mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 md:mb-2">
                    {isVisible ? stat.value : "0"}
                  </div>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-tight">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
