import { MessageCircle, ShoppingBag } from "lucide-react";

export function ScenarioSection() {
  const scenarios = [
    'Você acorda com o WhatsApp lotado de mensagens como: "Tem panetone recheado de pistache com Nutella hoje?"',
    "Faz uma fornada de 10 panetones em 90 minutos. Vende por até R$ 149 cada — sem sair de casa.",
    "As encomendas fecham antes do Natal chegar.",
  ];

  return (
    <section
      id="cenario"
      className="py-16 sm:py-24 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold mb-8">
            Agora imagina...
          </h2>
          <div className="space-y-6">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 p-6 rounded-xl flex items-start space-x-4"
              >
                <MessageCircle className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <p className="text-lg md:text-xl text-left">{scenario}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xl font-semibold text-accent">
            Isso já é realidade pra mais de 1.900 alunas.
          </p>
        </div>
      </div>
    </section>
  );
}
