import { Button } from "@/components/ui/button";

type FinalCTASectionProps = {
  onCtaClick: () => void;
  isRedirecting: boolean;
  price: number;
};

export function FinalCTASection({
  onCtaClick,
  isRedirecting,
  price,
}: FinalCTASectionProps) {
  return (
    <section className="bg-primary-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
          👇 Comece agora e lucre no Natal 👇
        </h2>
        <div className="mt-8 flex justify-center">
          <Button
            onClick={onCtaClick}
            disabled={isRedirecting}
            className="text-lg md:text-xl font-bold h-16 px-10 bg-accent text-accent-foreground hover:bg-accent/90 transform hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse"
            size="lg"
          >
            {isRedirecting
              ? "Redirecionando..."
              : `QUERO O PLANO PRO AGORA – R$ ${price
                  .toFixed(2)
                  .replace(".", ",")}`}
          </Button>
        </div>
      </div>
    </section>
  );
}
