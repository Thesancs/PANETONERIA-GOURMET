import { CheckCircle2 } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    { text: "Massa úmida." },
    { text: "Recheio que escorre." },
    {
      text: 'Embalagens que fazem as pessoas perguntarem: "Isso é de confeitaria de luxo?"',
    },
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-gray-800">
            Que transforma uma massa simples em panetones absurdos:
          </h2>
          <ul className="mt-8 space-y-4 text-lg text-gray-600">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xl font-semibold text-primary">
            Vendas explodindo no WhatsApp em menos de 10 dias.
          </p>
        </div>
      </div>
    </section>
  );
}
