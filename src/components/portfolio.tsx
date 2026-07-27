"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { agencyData } from "@/data/agency";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

function CarouselDots({ api, count }: { api: CarouselApi; count: number }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    api.on("select", () => setSelected(api.selectedScrollSnap()));
    return () => {
      api?.off("select", () => {});
    };
  }, [api]);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => api?.scrollTo(i)}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            i === selected
              ? "bg-primary w-6"
              : "bg-border hover:bg-muted-foreground/50"
          )}
          aria-label={`Ir para projeto ${i + 1}`}
        />
      ))}
    </div>
  );
}

function ProjectImage({ src, title }: { src: string; title: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-64 bg-secondary flex items-center justify-center p-6">
        <span className="text-muted-foreground text-sm text-center leading-relaxed">
          {title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="w-full h-64 object-cover"
      onError={() => setError(true)}
    />
  );
}

export function Portfolio() {
  const [api, setApi] = useState<CarouselApi>();
  const t = useTranslations("portfolio");
  const tCommon = useTranslations("common");

  return (
    <section id="portfolio" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            {t.rich("title", {
              highlight: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </h2>
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {agencyData.portfolio.map((item) => (
              <CarouselItem key={item.key} className="md:basis-3/4 lg:basis-3/5 pl-4" tabIndex={0}>
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
                      <ProjectImage src={item.image} title={t(`items.${item.key}.title`)} />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2">
                        {t(`items.${item.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {t(`items.${item.key}.description`)}
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
                          {tCommon("visualizarProjeto")}
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
          {api && <CarouselDots api={api} count={agencyData.portfolio.length} />}
        </Carousel>
      </div>
    </section>
  );
}
