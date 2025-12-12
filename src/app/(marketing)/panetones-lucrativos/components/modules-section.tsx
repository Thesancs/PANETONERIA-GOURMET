import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

type Module = {
  title: string;
  description: string;
};

type ModulesSectionProps = {
  modules: Module[];
};

export function ModulesSection({ modules }: ModulesSectionProps) {
  return (
    <section id="conteudo" className="py-16 sm:py-24 bg-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold text-primary">
            📚 O que você vai aprender no
            <br /> Panetones Lucrativos de Natal
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {modules.map((module, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-2 border-gray-200"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center text-lg font-bold text-primary font-headline">
                    <BookOpen className="h-5 w-5 mr-3 flex-shrink-0" />
                    {module.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-10">
                  {module.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
