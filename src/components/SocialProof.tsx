import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    text: "Atendimento claro e seguro do início ao fim. Recomendo!",
    author: "Maria Silva",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    text: "Comprei com confiança e tranquilidade. Processo muito transparente.",
    author: "João Santos",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    text: "Transparência que realmente faz diferença. Excelente experiência!",
    author: "Ana Costa",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    text: "Profissionais competentes e veículo exatamente como descrito.",
    author: "Carlos Oliveira",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    text: "Superou minhas expectativas. Recomendo a todos!",
    author: "Patrícia Lima",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    text: "Atendimento personalizado e veículo de qualidade. Muito satisfeito!",
    author: "Roberto Alves",
    location: "São Paulo, SP",
    rating: 5,
  },
];

const SocialProof = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".testimonial-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-up");
              }, index * 150);
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
            O que nossos clientes dizem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Depoimentos{" "}
            <span className="text-gradient-gold">reais</span>
          </h2>
        </div>

        {/* Grid - Mobile: 1 coluna, Desktop: múltiplas */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-item opacity-0 bg-card rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              >
                <div className="flex items-center gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent fill-accent" />
                  ))}
                </div>
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent/30 mb-3 md:mb-4" />
                <p className="text-sm sm:text-base text-foreground mb-3 md:mb-4 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                <div className="pt-3 md:pt-4 border-t border-border">
                  <p className="text-xs sm:text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
