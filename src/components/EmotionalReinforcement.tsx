import heroImage from "@/assets/hero-car.jpg";

const EmotionalReinforcement = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Conquista"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Seu próximo carro não é apenas uma compra.
            <br />
            <span className="text-gradient-gold">É uma conquista.</span>
          </h2>
          <p className="text-xl text-foreground/90 font-medium">
            Mamedio Veículos
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmotionalReinforcement;
