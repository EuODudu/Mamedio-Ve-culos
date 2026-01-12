import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Gauge, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  fuel?: string;
  transmission?: string;
  color?: string;
  description?: string;
  featured?: boolean;
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
    fuel: "Flex",
    transmission: "Automática",
    color: "Branco Perolado",
    description: "SUV Premium com tecnologia de ponta, conforto máximo e desempenho excepcional. Equipado com os mais modernos recursos de segurança e conectividade.",
    featured: true,
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
    fuel: "Gasolina",
    transmission: "Automática",
    color: "Vermelho",
    description: "Coupé esportivo de alta performance com design arrojado e motor potente. Ideal para quem busca emoção ao volante com máxima segurança.",
    featured: true,
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
    fuel: "Flex",
    transmission: "Automática",
    color: "Prata",
    description: "Sedan executivo com acabamento refinado e tecnologia avançada. Perfeito para quem valoriza conforto, elegância e eficiência.",
    featured: true,
  },
  {
    id: 4,
    image: car1,
    images: [car1, car2, car3],
    name: "Hatchback Premium 2024",
    price: 125900,
    year: "2024",
    km: "0 km",
    location: "São Paulo, SP",
    fuel: "Flex",
    transmission: "Automática",
    color: "Preto",
    description: "Hatchback moderno e versátil, perfeito para o dia a dia urbano com estilo e economia.",
    featured: false,
  },
  {
    id: 5,
    image: car2,
    images: [car2, car1, car3],
    name: "Pick-up Luxo 2023",
    price: 295000,
    year: "2023",
    km: "15.000 km",
    location: "São Paulo, SP",
    fuel: "Diesel",
    transmission: "Automática",
    color: "Branco",
    description: "Pick-up de alto padrão, ideal para trabalho e lazer com máximo conforto e robustez.",
    featured: false,
  },
  {
    id: 6,
    image: car3,
    images: [car3, car2, car1],
    name: "Crossover Elegance 2024",
    price: 225000,
    year: "2024",
    km: "0 km",
    location: "São Paulo, SP",
    fuel: "Flex",
    transmission: "Automática",
    color: "Cinza Metálico",
    description: "Crossover que combina elegância, espaço e tecnologia em um único veículo.",
    featured: false,
  },
];

const VehicleCarousel = () => {
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
      observer.observe(sectionRef.current);
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
        <div className="text-center mb-6 sm:mb-8 md:mb-12 animate-fade-up">
          <span className="inline-block text-accent font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
            Nossa Seleção
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Veículos{" "}
            <span className="text-gradient-gold">selecionados</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Qualidade sobre quantidade. Veículos curados especialmente para você.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
                  {vehiclesData.map((vehicle, index) => (
                    <CarouselItem key={vehicle.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      <div
                        className="group relative bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 transform-gpu h-full"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    onMouseMove={(e) => {
                      if (window.innerWidth >= 768) {
                        const card = e.currentTarget;
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / 15;
                        const rotateY = (centerX - x) / 15;
                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
                      }
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                        {vehicle.featured && (
                          <Badge variant="gold" className="text-xs animate-pulse-gold">
                            Em destaque
                          </Badge>
                        )}
                        <Badge variant="verified" className="text-xs flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" />
                          Mamedio
                        </Badge>
                      </div>

                      {/* Hover Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
                        <div className="flex items-center gap-4 text-white text-sm">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {vehicle.year}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Gauge className="w-4 h-4" />
                            {vehicle.km}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {vehicle.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 md:p-6">
                      {/* Selo Mamedio */}
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                        <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-accent" />
                        <p className="text-[10px] sm:text-xs text-accent font-semibold uppercase tracking-wider">
                          Mamedio Veículos
                        </p>
                      </div>

                      {/* Name & Price */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-2 sm:mb-3 md:mb-4">
                        {formatPrice(vehicle.price)}
                      </p>

                      {/* Quick Details */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm text-muted-foreground mb-3 sm:mb-4 md:mb-6">
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 bg-card rounded-full border border-border">
                          {vehicle.year}
                        </span>
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 bg-card rounded-full border border-border">
                          {vehicle.fuel}
                        </span>
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 bg-card rounded-full border border-border">
                          {vehicle.transmission}
                        </span>
                      </div>

                      {/* CTA */}
                      <Button
                        variant="gold"
                        className="w-full group/btn text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3"
                        onClick={() => handleVehicleClick(vehicle)}
                      >
                        Ver detalhes
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 bg-background/80 backdrop-blur-sm border-accent/30 hover:bg-accent hover:text-accent-foreground h-8 w-8 md:h-10 md:w-10" />
            <CarouselNext className="right-2 md:right-4 bg-background/80 backdrop-blur-sm border-accent/30 hover:bg-accent hover:text-accent-foreground h-8 w-8 md:h-10 md:w-10" />
          </Carousel>
        </div>

        {/* View All Button */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <Button variant="goldOutline" size="lg" className="group w-full sm:w-auto text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3">
            Ver todos os veículos
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Vehicle Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-4 md:p-6">
          {selectedVehicle && (
            <>
              <DialogHeader className="mb-4 md:mb-6">
                <DialogTitle className="text-xl sm:text-2xl md:text-3xl">
                  {selectedVehicle.name}
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg text-accent font-bold">
                  {formatPrice(selectedVehicle.price)}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 md:space-y-6">
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
                    <CarouselPrevious className="left-2 md:left-4 h-8 w-8 md:h-10 md:w-10" />
                    <CarouselNext className="right-2 md:right-4 h-8 w-8 md:h-10 md:w-10" />
                  </Carousel>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2" />
                    <p className="text-xs md:text-sm text-muted-foreground">Ano</p>
                    <p className="text-base md:text-lg font-bold">{selectedVehicle.year}</p>
                  </div>
                  <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                    <Gauge className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2" />
                    <p className="text-xs md:text-sm text-muted-foreground">Quilometragem</p>
                    <p className="text-base md:text-lg font-bold">{selectedVehicle.km}</p>
                  </div>
                  {selectedVehicle.fuel && (
                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2" />
                      <p className="text-xs md:text-sm text-muted-foreground">Combustível</p>
                      <p className="text-base md:text-lg font-bold">{selectedVehicle.fuel}</p>
                    </div>
                  )}
                  {selectedVehicle.transmission && (
                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <Gauge className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2" />
                      <p className="text-xs md:text-sm text-muted-foreground">Câmbio</p>
                      <p className="text-base md:text-lg font-bold">{selectedVehicle.transmission}</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                {selectedVehicle.description && (
                  <div>
                    <h4 className="text-base md:text-lg font-bold mb-2">Descrição</h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {selectedVehicle.description}
                    </p>
                  </div>
                )}

                {/* Location */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-lg border border-border">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-muted-foreground">Localização</p>
                    <p className="text-sm md:text-base font-bold">{selectedVehicle.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    <p className="text-xs md:text-sm font-semibold text-accent">Mamedio Veículos</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 md:gap-4 pt-3 md:pt-4">
                  <Button variant="gold" className="w-full group text-sm md:text-base">
                    Falar com especialista
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="goldOutline" className="w-full group text-sm md:text-base">
                    Solicitar informações
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

export default VehicleCarousel;
