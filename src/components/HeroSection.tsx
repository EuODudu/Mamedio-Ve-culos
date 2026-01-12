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
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-hero group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0" ref={parallaxRef}>
        <img
          src={heroImage}
          alt="Veículos Mamedio"
          className="w-full h-full object-cover object-center opacity-70 md:opacity-75 transition-all duration-500 ease-out group-hover:opacity-85 animate-image-glow"
          style={{
            transform: `translateY(${scrollY}px) scale(1.1) md:scale(1.2)`,
            willChange: "transform",
          }}
        />
        {/* Overlay mais forte no mobile para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 md:from-background/85 via-background/80 md:via-background/75 to-background/70 md:to-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 md:from-background/70 via-transparent to-background/60 md:to-background/50" />
        {/* Efeito de brilho sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content - Mobile-first: compacto e direto */}
      <div className="container-custom relative z-10 pt-20 pb-8 md:pt-24 md:pb-12 lg:pt-20 lg:pb-20">
        <div className="max-w-4xl">
          {/* Logo Mamedio - Mais compacto no mobile */}
          <div 
            className={`mb-4 md:mb-6 lg:mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-1.5 md:gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 w-fit">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-medium text-accent font-display">Mamedio Veículos</span>
              <span className="hidden sm:inline text-xs text-muted-foreground">•</span>
              <span className="hidden sm:inline text-xs text-muted-foreground">Procedência garantida</span>
            </div>
          </div>

          {/* Main Headline - Mobile: menor e mais direto */}
          <h1 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] md:leading-tight mb-4 md:mb-6 lg:mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Comprar seu carro pode ser{" "}
            <span className="text-gradient-gold font-extrabold">simples</span>,{" "}
            <span className="text-gradient-gold font-extrabold">seguro</span> e{" "}
            <span className="text-gradient-gold font-extrabold">confiável</span>.
          </h1>

          {/* Subheadline - Mobile: mais curto */}
          <p 
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 mb-6 md:mb-8 lg:mb-10 max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Veículos selecionados com procedência garantida e atendimento direto, do primeiro contato à entrega.
          </p>

          {/* CTAs - Mobile: grande, claro, visível sem scroll */}
          <div 
            className={`flex flex-col gap-3 md:flex-row md:gap-4 mb-6 md:mb-8 lg:mb-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              variant="hero"
              size="xl"
              className="group w-full md:w-auto text-base md:text-lg px-6 py-5 md:px-8 md:py-6 min-h-[52px] md:min-h-[56px]"
              onClick={scrollToVehicles}
            >
              Encontrar meu próximo carro
              <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button variant="heroSecondary" size="xl" className="w-full md:w-auto text-base md:text-lg px-6 py-5 md:px-8 md:py-6 min-h-[52px] md:min-h-[56px]">
              Tirar dúvidas com um especialista
            </Button>
          </div>

          {/* Micro CTA de rolagem - Oculto no mobile para não competir */}
          <div 
            className={`hidden md:block transition-all duration-700 delay-400 ${
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
