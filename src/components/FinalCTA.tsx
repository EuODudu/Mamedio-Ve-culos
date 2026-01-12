import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleContact = () => {
    // Aqui você pode adicionar a lógica de contato (WhatsApp, telefone, etc.)
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const scrollToVehicles = () => {
    const vehiclesSection = document.getElementById("vehicles");
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-card relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 lg:mb-6">
            Pronto para dar o{" "}
            <span className="text-gradient-gold">próximo passo</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto">
            Fale agora com a Mamedio Veículos e encontre o carro ideal.
          </p>

          {/* CTAs - Mobile: grandes e claros */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              variant="gold"
              size="xl"
              className="group w-full sm:w-auto text-base md:text-lg px-6 py-5 md:px-8 md:py-6 min-h-[52px] md:min-h-[56px]"
              onClick={handleContact}
            >
              <Phone className="w-5 h-5" />
              Falar com um especialista
            </Button>
            <Button
              variant="goldOutline"
              size="xl"
              className="group w-full sm:w-auto text-base md:text-lg px-6 py-5 md:px-8 md:py-6 min-h-[52px] md:min-h-[56px]"
              onClick={scrollToVehicles}
            >
              Ver veículos disponíveis
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
