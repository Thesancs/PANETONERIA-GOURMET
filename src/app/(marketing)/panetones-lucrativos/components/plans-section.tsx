import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

type PlansSectionProps = {
  config: {
    precoPro: number;
    precoBasico: number;
  };
  onProCtaClick: () => void;
  onBasicCtaClick: () => void;
  isRedirectingTo: string | null;
};

export function PlansSection({
  config,
  onProCtaClick,
  onBasicCtaClick,
  isRedirectingTo,
}: PlansSectionProps) {
  return (
    <section id="planos" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold text-primary">
            Planos Abertos – Acesso Imediato
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {/* Plano Básico */}
          <Card className="flex-1 flex flex-col shadow-md rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl text-gray-700">
                Plano Básico
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between text-center">
              <div>
                <p className="text-5xl font-bold font-headline text-primary">
                  R${" "}
                  <span className="text-7xl">
                    {config.precoBasico.toFixed(2).split(".")[0]}
                  </span>
                  ,{config.precoBasico.toFixed(2).split(".")[1]}
                </p>
                <p className="mt-4 text-muted-foreground">
                  Curso completo, todos os módulos + bônus essenciais
                </p>
                <Badge className="mt-4 bg-gray-200 text-gray-700">
                  Acesso vitalício
                </Badge>
              </div>
              <Button
                onClick={onBasicCtaClick}
                disabled={isRedirectingTo === "basic"}
                variant="outline"
                className="w-full mt-8 text-lg h-12"
              >
                {isRedirectingTo === "basic"
                  ? "Redirecionando..."
                  : "Começar Agora"}
              </Button>
            </CardContent>
          </Card>

          {/* Plano Pro */}
          <Card className="flex-1 flex flex-col shadow-xl rounded-2xl border-4 border-accent relative overflow-hidden">
            <Badge className="absolute top-0 -right-12 rotate-45 bg-accent text-accent-foreground w-48 justify-center py-2 font-bold text-sm">
              Mais Popular
            </Badge>
            <CardHeader className="text-center pt-12">
              <CardTitle className="font-headline text-4xl text-primary">
                Plano Pro
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between text-center">
              <div>
                <p className="text-5xl font-bold font-headline text-primary">
                  R${" "}
                  <span className="text-7xl">
                    {config.precoPro.toFixed(2).split(".")[0]}
                  </span>
                  ,{config.precoPro.toFixed(2).split(".")[1]}
                </p>
                <p className="mt-4 text-muted-foreground">
                  Acesso vitalício a <strong className="text-primary">tudo</strong> + suporte VIP
                </p>
                <Badge className="mt-4 bg-accent/20 text-accent-foreground">
                  Acesso vitalício
                </Badge>
              </div>
              <Button
                onClick={onProCtaClick}
                disabled={isRedirectingTo === "pro"}
                className="w-full mt-8 text-lg h-14 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isRedirectingTo === "pro"
                  ? "Redirecionando..."
                  : "QUERO O PLANO PRO AGORA"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
