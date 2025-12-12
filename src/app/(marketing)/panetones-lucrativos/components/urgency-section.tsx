"use client";

import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";

type UrgencySectionProps = {
  timerDuration: number;
  futurePrice: number;
};

export function UrgencySection({
  timerDuration,
  futurePrice,
}: UrgencySectionProps) {
  const [timerFinished, setTimerFinished] = useState(false);

  return (
    <section id="urgencia" className="py-16 sm:py-24 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold text-primary">
            ⚠️ Última Chamada ⚠️
          </h2>
          <p className="mt-4 text-lg text-gray-700">Essa oferta expira em:</p>
          <div className="my-8 flex justify-center">
            {timerFinished ? (
              <p className="text-2xl font-bold text-primary">
                Oferta expirada — o valor pode ser ajustado a qualquer momento.
              </p>
            ) : (
              <CountdownTimer
                durationInSeconds={timerDuration}
                onComplete={() => setTimerFinished(true)}
              />
            )}
          </div>
          <p className="text-lg text-gray-600">
            Depois disso, o preço sobe para{" "}
            <strong className="font-bold text-primary">R$ {futurePrice.toFixed(2).replace(".", ",")}.</strong>
          </p>
          <div className="mt-12 space-y-6 text-left max-w-md mx-auto">
            <div className="flex items-start gap-4 p-4 bg-red-100/50 border-l-4 border-red-500 rounded-lg">
              <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                Continuar postando seus bolos bonitinhos por R$ 20...
              </p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-100/50 border-l-4 border-green-500 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                Ou começar a lucrar até R$ 100 por panetone com um produto que{" "}
                <strong className="text-green-800">VENDE SOZINHO.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
