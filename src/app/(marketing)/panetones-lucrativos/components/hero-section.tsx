import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users, CookingPot } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
  onCtaClick: () => void;
};

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const heroImage = PlaceHolderImages.find((img) => img.id === "panettone-hero");

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center text-white overflow-hidden">
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
      <div className="absolute inset-0 bg-green-900/70"></div>
      <div className="relative z-10 p-4 container mx-auto flex items-center justify-between">
        <div className="max-w-2xl text-left">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight text-amber-300">
                Transforme Panetones em Renda Extra Nesse Natal
            </h1>
            <h2 className="mt-4 font-body text-xl md:text-2xl max-w-xl">
                Mesmo começando do zero.
            </h2>
            <p className="mt-6 text-lg text-gray-200 max-w-xl">
                Aprenda a criar Panetones Gourmet com técnicas e dicas exclusivas e descubra como transformar o Natal na sua época mais lucrativa do ano.
            </p>
            <div className="mt-8">
                <Button
                onClick={onCtaClick}
                className="text-lg md:text-xl font-bold h-16 px-10 bg-green-500 text-white hover:bg-green-600 transform hover:scale-105 transition-transform duration-300 shadow-lg"
                size="lg"
                >
                QUERO FATURAR
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
