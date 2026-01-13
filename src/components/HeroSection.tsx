import { Button } from "@/components/ui/button";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const parallaxSpeed = 0.3;
      
      if (scrollPosition <= maxScroll) {
        setScrollY(scrollPosition * parallaxSpeed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToVehicles = () => {
    const vehiclesSection = document.getElementById("vehicles");
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0" ref={parallaxRef}>
        <img
          src={heroImage}
          alt="Veículos Mamedio"
          className="w-full h-full object-cover object-center opacity-75 transition-all duration-500 ease-out group-hover:opacity-85 animate-image-glow"
          style={{
            transform: `translateY(${scrollY}px) scale(1.2)`,
            willChange: "transform",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/75 to-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/50" />
        {/* Efeito de brilho sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20 pb-20">
        <div className="max-w-4xl">
          {/* Logo Mamedio */}
          <div 
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 w-fit">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent font-display">Mamedio Veículos</span>
              <span className="hidden md:inline text-xs text-muted-foreground">•</span>
              <span className="hidden md:inline text-xs text-muted-foreground">Procedência garantida</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 
            className={`text-5xl font-bold leading-tight mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Comprar seu carro pode ser{" "}
            <span className="text-gradient-gold font-extrabold">simples</span>,{" "}
            <span className="text-gradient-gold font-extrabold">seguro</span> e{" "}
            <span className="text-gradient-gold font-extrabold">confiável</span>.
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl text-foreground/90 mb-10 max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Veículos selecionados com procedência garantida e atendimento direto, do primeiro contato à entrega.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col md:flex-row gap-4 mb-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              variant="hero"
              size="xl"
              className="group w-full md:w-auto"
              onClick={scrollToVehicles}
            >
              Encontrar meu próximo carro
              <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button variant="heroSecondary" size="xl" className="w-full md:w-auto">
              Tirar dúvidas com um especialista
            </Button>
          </div>

          {/* Micro CTA de rolagem */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={scrollToVehicles}
              className="flex flex-col items-center gap-2 text-foreground/70 hover:text-accent transition-colors group"
            >
              <span className="text-sm font-medium text-center">Veja algumas oportunidades selecionadas</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
