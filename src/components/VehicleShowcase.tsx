import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Gauge, ArrowRight, ShieldCheck, Phone, Mail, Fuel, Settings } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

interface Vehicle {
  id: number;
  image: string;
  images?: string[];
  name: string;
  price: number;
  year: string;
  km: string;
  location: string;
  agency: string;
  verified: boolean;
  featured: boolean;
  fuel?: string;
  transmission?: string;
  color?: string;
  description?: string;
}

const vehiclesData: Vehicle[] = [
  {
    id: 1,
    image: car1,
    images: [car1, car2, car3],
    name: "SUV Premium 2024",
    price: 189900,
    year: "2024",
    km: "0 km",
    location: "São Paulo, SP",
    agency: "Mamedio Veículos",
    verified: true,
    featured: true,
    fuel: "Flex",
    transmission: "Automática",
    color: "Branco Perolado",
    description: "SUV Premium com tecnologia de ponta, conforto máximo e desempenho excepcional. Equipado com os mais modernos recursos de segurança e conectividade.",
  },
  {
    id: 2,
    image: car2,
    images: [car2, car1, car3],
    name: "Sports Coupé GT",
    price: 385000,
    year: "2023",
    km: "12.500 km",
    location: "São Paulo, SP",
    agency: "Mamedio Veículos",
    verified: true,
    featured: false,
    fuel: "Gasolina",
    transmission: "Automática",
    color: "Vermelho",
    description: "Coupé esportivo de alta performance com design arrojado e motor potente. Ideal para quem busca emoção ao volante com máxima segurança.",
  },
  {
    id: 3,
    image: car3,
    images: [car3, car2, car1],
    name: "Sedan Executive",
    price: 245900,
    year: "2023",
    km: "8.200 km",
    location: "São Paulo, SP",
    agency: "Mamedio Veículos",
    verified: true,
    featured: false,
    fuel: "Flex",
    transmission: "Automática",
    color: "Prata",
    description: "Sedan executivo com acabamento refinado e tecnologia avançada. Perfeito para quem valoriza conforto, elegância e eficiência.",
  },
];

const VehicleShowcase = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".vehicle-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsDialogOpen(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <section id="vehicles" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Veículos{" "}
            <span className="text-gradient-gold">selecionados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Qualidade sobre quantidade. Veículos curados especialmente para você.
          </p>
        </div>


        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclesData.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="vehicle-card group bg-background rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 transform-gpu"
              style={{
                transformStyle: "preserve-3d",
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  {vehicle.featured && (
                    <Badge variant="gold" className="text-xs animate-pulse-gold">
                      Em destaque
                    </Badge>
                  )}
                  {vehicle.verified && (
                    <Badge variant="verified" className="text-xs flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Verificado
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Selo Mamedio */}
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider">
                    Mamedio Veículos
                  </p>
                </div>

                {/* Name & Price */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-2xl font-bold text-accent mb-4">
                  {formatPrice(vehicle.price)}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    {vehicle.year}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-accent" />
                    {vehicle.km}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    {vehicle.location}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="gold"
                  className="w-full group/btn"
                  onClick={() => handleVehicleClick(vehicle)}
                >
                  Ver detalhes
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Vehicle Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedVehicle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl">
                  {selectedVehicle.name}
                </DialogTitle>
                <DialogDescription className="text-lg text-accent font-bold">
                  {formatPrice(selectedVehicle.price)}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image Carousel */}
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {(selectedVehicle.images || [selectedVehicle.image]).map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video overflow-hidden rounded-lg">
                            <img
                              src={img}
                              alt={`${selectedVehicle.name} - Imagem ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <Calendar className="w-5 h-5 text-accent mb-2" />
                    <p className="text-sm text-muted-foreground">Ano</p>
                    <p className="text-lg font-bold">{selectedVehicle.year}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <Gauge className="w-5 h-5 text-accent mb-2" />
                    <p className="text-sm text-muted-foreground">Quilometragem</p>
                    <p className="text-lg font-bold">{selectedVehicle.km}</p>
                  </div>
                  {selectedVehicle.fuel && (
                    <div className="p-4 bg-card rounded-lg border border-border">
                      <Fuel className="w-5 h-5 text-accent mb-2" />
                      <p className="text-sm text-muted-foreground">Combustível</p>
                      <p className="text-lg font-bold">{selectedVehicle.fuel}</p>
                    </div>
                  )}
                  {selectedVehicle.transmission && (
                    <div className="p-4 bg-card rounded-lg border border-border">
                      <Settings className="w-5 h-5 text-accent mb-2" />
                      <p className="text-sm text-muted-foreground">Câmbio</p>
                      <p className="text-lg font-bold">{selectedVehicle.transmission}</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                {selectedVehicle.description && (
                  <div>
                    <h4 className="text-lg font-bold mb-2">Descrição</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedVehicle.description}
                    </p>
                  </div>
                )}

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-bold">{selectedVehicle.location}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <p className="text-sm font-semibold text-accent">Mamedio Veículos</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="gold" className="flex-1 group">
                    <Phone className="w-4 h-4" />
                    Falar com vendedor
                  </Button>
                  <Button variant="goldOutline" className="flex-1 group">
                    <Mail className="w-4 h-4" />
                    Solicitar informações
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VehicleShowcase;
