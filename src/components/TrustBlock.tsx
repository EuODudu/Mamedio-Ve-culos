import { ShieldCheck, FileText, Lock, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Agências verificadas",
    description: "Trabalhamos apenas com parceiros confiáveis",
  },
  {
    icon: FileText,
    title: "Informações claras",
    description: "Tudo transparente, sem surpresas",
  },
  {
    icon: Lock,
    title: "Compra segura",
    description: "Processo protegido e confiável",
  },
  {
    icon: Users,
    title: "Atendimento direto",
    description: "Fale com quem realmente entende",
  },
];

const TrustBlock = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".trust-item");
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
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-foreground/90 font-medium">
            Aqui você sabe exatamente o que está comprando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="trust-item opacity-0 bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
