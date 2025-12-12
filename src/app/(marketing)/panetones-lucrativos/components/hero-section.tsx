import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
  onCtaClick: () => void;
};

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const heroImage = PlaceHolderImages.find((img) => img.id === "panettone-hero");

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 p-4 container mx-auto">
        <div className="bg-black/50 p-6 md:p-10 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black uppercase">
            Fature de <span className="text-accent">R$ 150 a R$ 350</span> por
            dia
          </h1>
          <h2 className="mt-4 font-body text-lg md:text-2xl max-w-3xl mx-auto">
            Vendendo Panetones Gourmet Irresistíveis (mesmo sem experiência e
            usando o forno da sua casa)
          </h2>
          <div className="mt-8 bg-accent text-accent-foreground inline-block p-4 rounded-lg shadow-lg">
            <p className="text-xl md:text-2xl font-bold">🎁 Por apenas R$ 2,90</p>
            <p className="text-sm">Acesso vitalício imediato</p>
          </div>
          <div className="mt-8">
            <Button
              onClick={onCtaClick}
              className="text-lg md:text-xl font-bold h-16 px-10 bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-transform duration-300 shadow-lg"
              size="lg"
            >
              👇 SIM, QUERO FATURAR COM PANETONES! 👇
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-300">
            <Users className="h-5 w-5" />
            <span>O método testado por mais de 1.900 alunas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
