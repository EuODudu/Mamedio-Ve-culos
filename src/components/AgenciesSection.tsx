import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const agencies = [
  {
    id: 1,
    name: "Mamedio Veículos",
    logo: "MV",
    years: "15 anos",
    location: "São Paulo, SP",
    rating: 4.9,
    reviews: 342,
    description: "Há mais de 15 anos oferecendo veículos com procedência e atendimento especializado.",
    featured: true,
  },
  {
    id: 2,
    name: "AutoPrime",
    logo: "AP",
    years: "10 anos",
    location: "Rio de Janeiro, RJ",
    rating: 4.8,
    reviews: 256,
    description: "Referência em veículos premium com garantia estendida e pós-venda diferenciado.",
    featured: false,
  },
  {
    id: 3,
    name: "Elite Motors",
    logo: "EM",
    years: "8 anos",
    location: "Curitiba, PR",
    rating: 4.7,
    reviews: 189,
    description: "Especialistas em esportivos e importados com consultoria personalizada.",
    featured: false,
  },
];

const AgenciesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".agency-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-up");
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
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nossas Agências
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Parceiros de{" "}
            <span className="text-gradient-gold">confiança</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos apenas com agências que compartilham nossos valores de transparência e excelência.
          </p>
        </div>

        {/* Agencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencies.map((agency, index) => (
            <div
              key={agency.id}
              className="agency-card group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center border border-accent/30">
                    <span className="text-xl font-bold text-accent">
                      {agency.logo}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                      {agency.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="font-medium text-foreground">{agency.rating}</span>
                      <span>({agency.reviews} avaliações)</span>
                    </div>
                  </div>
                </div>
                {agency.featured && (
                  <Badge variant="gold" className="text-xs">
                    Destaque
                  </Badge>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {agency.description}
              </p>

              {/* Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent" />
                  {agency.years} no mercado
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" />
                  {agency.location}
                </div>
              </div>

              {/* CTA */}
              <Button variant="goldOutline" className="w-full group/btn">
                Ver veículos da agência
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenciesSection;
