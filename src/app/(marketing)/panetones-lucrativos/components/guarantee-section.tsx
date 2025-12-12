import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section id="garantia" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-green-50 border-2 border-dashed border-green-600 rounded-2xl p-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="h-16 w-16 text-green-600" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-green-800">
            💥 Garantia de 7 Dias 💥
          </h2>
          <p className="mt-4 text-lg text-green-700">
            Se não fizer seu primeiro panetone perfeito ou não recuperar o
            valor investido: <strong className="font-bold">Devolvemos 100%.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
