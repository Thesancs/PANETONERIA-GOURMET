import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

export function WhyGourmetSection() {
  return (
    <section id="porque-gourmet" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold text-primary">
            🧠 Por que vender panetone gourmet é o melhor negócio do Natal?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vamos fazer uma conta simples:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Panetone Comum */}
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center text-gray-600">
                Panetone Comum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Preço de Venda</p>
                <p className="text-3xl font-bold text-gray-700">R$ 49,90</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Custo de Produção</p>
                <p className="text-2xl font-semibold text-gray-600">R$ 16,00</p>
              </div>
              <div className="pt-4">
                <p className="text-sm font-bold text-green-600">Lucro Bruto por Unidade</p>
                <p className="text-4xl font-extrabold text-green-700">R$ 33,90</p>
              </div>
            </CardContent>
          </Card>

          {/* Panetone Gourmet */}
          <Card className="shadow-xl rounded-2xl border-2 border-accent">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center text-primary">
                Panetone Gourmet Exclusivo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Preço de Venda</p>
                <p className="text-3xl font-bold text-primary">R$ 129,90</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Custo de Produção</p>
                <p className="text-2xl font-semibold text-gray-600">R$ 29,90</p>
              </div>
              <div className="pt-4">
                <p className="text-sm font-bold text-green-600">Lucro Bruto por Unidade</p>
                <p className="text-4xl font-extrabold text-green-700">R$ 100,00</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-card p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-2xl font-bold text-primary">👉 Ou seja: Quase 3x mais lucro por peça.</p>
            <p className="mt-2 text-md text-muted-foreground">E tudo isso com ingredientes simples, forno de casa e apresentação matadora.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
