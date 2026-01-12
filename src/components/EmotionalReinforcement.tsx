import heroImage from "@/assets/hero-car.jpg";

const EmotionalReinforcement = () => {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden bg-gradient-hero py-8 md:py-12 lg:py-16">
      {/* Background Image - Mobile: menos proeminente */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Conquista"
          className="w-full h-full object-cover object-center opacity-30 md:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 md:from-background via-background/90 to-background/80 md:to-background/70" />
      </div>

      {/* Content - Mobile: compacto */}
      <div className="container-custom relative z-10 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 lg:mb-6 leading-tight">
            Seu próximo carro não é apenas uma compra.
            <br className="hidden sm:block" />
            <span className="text-gradient-gold">É uma conquista.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 font-medium">
            Mamedio Veículos
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmotionalReinforcement;
