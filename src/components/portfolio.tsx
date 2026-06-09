"use client";

import { agencyData } from "@/data/agency";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Um pouco do nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Projetos reais que entregamos com performance, design e conversão
          </p>
        </div>

        <Carousel autoplay autoplaySpeed={4000} className="w-full">
          <CarouselContent>
            {agencyData.portfolio.map((item) => (
              <CarouselItem key={item.title} className="md:basis-3/4 lg:basis-3/5 pl-4">
                <div className="rounded-lg border border-border bg-secondary/50 overflow-hidden h-full flex flex-col">
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary/80 border-b border-border">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-auto text-[10px] text-muted-foreground/50 font-mono tracking-tight truncate max-w-[200px]">
                      {new URL(item.link).hostname}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {item.description}
                      </p>
                      <Button
                        variant="outline"
                        className="self-start border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
                        asChild
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visualizar Projeto Ao Vivo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
