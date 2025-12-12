import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users, CookingPot, Trophy } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
  onCtaClick: () => void;
};

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const heroImage = PlaceHolderImages.find((img) => img.id === "panettone-hero");

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Coluna de Texto */}
        <div className="text-left">
            <h1 className="font-headline text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Transforme Panetones em Renda Extra Nesse Natal
            </h1>
            <p className="mt-6 font-body text-xl md:text-2xl text-muted-foreground max-w-xl">
                Mesmo começando do zero.
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Aprenda a criar Panetones Gourmet com técnicas e dicas exclusivas e descubra como transformar o Natal na sua época mais lucrativa do ano.
            </p>
            <div className="mt-10">
                <Button
                onClick={onCtaClick}
                className="text-lg md:text-xl font-bold h-16 px-10 bg-accent text-accent-foreground hover:bg-accent/90 transform hover:scale-105 transition-transform duration-300 shadow-lg"
                size="lg"
                >
                QUERO FATURAR
                </Button>
            </div>
        </div>
        
        {/* Coluna da Imagem */}
        <div className="flex items-center justify-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={600}
              height={600}
              priority
              className="rounded-lg shadow-2xl object-cover aspect-square"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
