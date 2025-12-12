"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import { BenefitsSection } from "./components/benefits-section";
import { CourseIntroSection } from "./components/course-intro-section";
import { WhyGourmetSection } from "./components/why-gourmet-section";
import { ScenarioSection } from "./components/scenario-section";
import { ModulesSection } from "./components/modules-section";
import { BonusSection } from "./components/bonus-section";
import { PlansSection } from "./components/plans-section";
import { GuaranteeSection } from "./components/guarantee-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { UrgencySection } from "./components/urgency-section";
import { FinalCTASection } from "./components/final-cta-section";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// --- Configurable Data ---
const CONFIG = {
  checkoutProUrl: "#/checkout-pro",
  checkoutBasicoUrl: "#/checkout-basico",
  precoPro: 14.9,
  precoBasico: 2.9,
  precoFuturo: 97.0,
  timerDurationInSeconds: 300, // 5 minutes
};

const MODULES_DATA = [
  { title: "Módulo 1 – A Massa que NUNCA FICA SECA", description: "Receita base que derrete na boca e aguenta 7 dias fora da geladeira." },
  { title: "Módulo 2 – 20 Recheios Infalíveis", description: "Doce de leite, Ferrero, brigadeiro cremoso, pistache, Nutella com morango..." },
  { title: "Módulo 3 – Panetones Premium", description: "Com cobertura artística, recheios triplos e acabamento de vitrine." },
  { title: "Módulo 4 – Versões Fit, Veganas e Low Carb", description: "Atenda públicos com dieta especial e aumente o faturamento." },
  { title: "Módulo 5 – Embalagens de Luxo", description: "Transforme panetone em presente e justifique o preço de R$129 ou mais." },
  { title: "Módulo 6 – Precificação com Lucro", description: "Calculadora automática + margens de 200% a 300%." },
  { title: "Módulo 7 – Vendas com WhatsApp e Instagram", description: "Copy, cardápios e scripts prontos — mesmo se você tiver zero seguidores." },
  { title: "Módulo 8 – Primeira venda em 7 dias", description: "Plano prático e acelerado para faturar antes do Natal." },
];

const BONUS_DATA = [
    { title: "Bônus 1: Calculadora Mágica de Lucros", description: "Descubra quanto você lucra por fornada em segundos." },
    { title: "Bônus 2: 25 Scripts de Venda no WhatsApp", description: "Prontos para gerar pedidos automáticos, reservas e fechamento de carrinho." },
    { title: "Bônus 3: Panetones de Luxo que Valem R$149", description: "Receitas secretas com chocolate belga, Amarula, Red Velvet..." },
    { title: "Bônus 4: Lista de Fornecedores Premium", description: "Marcas de farinha, chocolate, embalagens e tudo que você precisa." },
    { title: "Bônus 5: Plano de Degustação Estratégica", description: "Use 2 panetones para gerar 10 encomendas com efeito viral." },
    { title: "Bônus 6: Atualização + Certificado Oficial", description: "Receba novas receitas + certificado para vender como profissional." },
];

const TESTIMONIALS_DATA = [
  { quote: "Comecei com 3 panetones e vendi tudo em 24h. R$ 480 de lucro direto.", author: "Letícia Gomes", location: "SP", initials: "LG" },
  { quote: "Faço em casa com ajuda do meu filho. Já tirei R$ 1.050 em uma semana!", author: "Ana Carolina", location: "MG", initials: "AC" },
  { quote: "Meu panetone de pistache virou o mais pedido da cidade.", author: "Vanessa Moura", location: "PE", initials: "VM" },
];


export default function PanetonesLucrativosPage() {
  const { toast } = useToast();
  const [isRedirectingTo, setIsRedirectingTo] = useState<string | null>(null);
  
  const plansRef = useRef<HTMLDivElement>(null);

  const garlandImage = PlaceHolderImages.find(img => img.id === 'christmas-garland-divider');

  const handleScrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  
  const handleCheckout = (plan: 'pro' | 'basic', source: 'hero' | 'plans' | 'final') => {
    setIsRedirectingTo(plan);
    const url = plan === 'pro' ? CONFIG.checkoutProUrl : CONFIG.checkoutBasicoUrl;
    
    if(plan === 'pro') {
      console.log('[PanetonesPage] CTA Plano Pro clicado', { source });
    } else {
      console.log('[PanetonesPage] CTA Plano Básico clicado');
    }

    setTimeout(() => {
      try {
        window.location.href = url;
      } catch (error) {
        console.error('[PanetonesPage] Falha ao redirecionar', error);
        toast({
          title: "Erro ao redirecionar",
          description: "Não foi possível abrir o checkout. Por favor, tente novamente.",
          variant: "destructive"
        });
        setIsRedirectingTo(null);
      }
    }, 500);
  };

  return (
    <div className="bg-background text-foreground font-body">
      <HeroSection onCtaClick={handleScrollToPlans} />
      {garlandImage && (
        <div className="w-full">
          <Image
            src={garlandImage.imageUrl}
            alt={garlandImage.description}
            width={1920}
            height={160}
            className="w-full object-cover"
            data-ai-hint={garlandImage.imageHint}
          />
        </div>
      )}
      <main>
        <BenefitsSection />
        <CourseIntroSection />
        <WhyGourmetSection />
        <ScenarioSection />
        <ModulesSection modules={MODULES_DATA} />
        <BonusSection bonuses={BONUS_DATA} />
        <div ref={plansRef}>
          <PlansSection 
            config={CONFIG}
            onProCtaClick={() => handleCheckout('pro', 'plans')}
            onBasicCtaClick={() => handleCheckout('basic', 'plans')}
            isRedirectingTo={isRedirectingTo}
          />
        </div>
        <GuaranteeSection />
        <TestimonialsSection testimonials={TESTIMONIALS_DATA} />
        <UrgencySection timerDuration={CONFIG.timerDurationInSeconds} futurePrice={CONFIG.precoFuturo} />
        <FinalCTASection 
          onCtaClick={() => handleCheckout('pro', 'final')}
          isRedirecting={isRedirectingTo === 'pro'}
          price={CONFIG.precoPro}
        />
      </main>
    </div>
  );
}