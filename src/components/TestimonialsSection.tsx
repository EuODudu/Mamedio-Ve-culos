import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Empresário",
    image: null,
    initials: "CE",
    rating: 5,
    text: "Comprei meu carro sem medo. As informações eram claras e a agência foi extremamente profissional. Recomendo a todos!",
  },
  {
    id: 2,
    name: "Ana Paula Silva",
    role: "Médica",
    image: null,
    initials: "AP",
    rating: 5,
    text: "A transparência me surpreendeu. Pude verificar toda a procedência do veículo antes mesmo de ir à agência. Experiência excelente.",
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Advogado",
    image: null,
    initials: "RM",
    rating: 5,
    text: "O atendimento direto fez toda a diferença. Negociei diretamente com a agência e consegui condições incríveis. Super recomendo!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Quem já <span className="text-gradient-gold">conquistou</span> aprova
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de clientes que encontraram seu veículo ideal com segurança e tranquilidade.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center border border-accent/30">
                  <span className="text-sm font-bold text-accent">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
