import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

type Bonus = {
  title: string;
  description: string;
};

type BonusSectionProps = {
  bonuses: Bonus[];
};

export function BonusSection({ bonuses }: BonusSectionProps) {
  return (
    <section id="bonus" className="py-16 sm:py-24 bg-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold text-primary uppercase tracking-wider">
            🎁 Bônus Exclusivos 🎁
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-accent/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Gift className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-headline text-lg text-primary leading-tight">
                  {bonus.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
