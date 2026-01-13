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
          <h2 className="text-5xl font-bold mb-6">
            Pronto para dar o{" "}
            <span className="text-gradient-gold">próximo passo</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fale agora com a Mamedio Veículos e encontre o carro ideal.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              variant="gold"
              size="xl"
              className="group w-full md:w-auto"
              onClick={handleContact}
            >
              <Phone className="w-5 h-5" />
              Falar com um especialista
            </Button>
            <Button
              variant="goldOutline"
              size="xl"
              className="group w-full md:w-auto"
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
