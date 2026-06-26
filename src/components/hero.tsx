import { Button } from "@/components/ui/button";
import { agencyData } from "@/data/agency";

export function Hero() {
  const { hero, info } = agencyData;
  const whatsappUrl = `https://wa.me/${info.whatsapp}?text=${encodeURIComponent(info.msgCta)}`;

  const highlighted = ["Velocidade", "Autoridade", "Topo"];

  const headline = hero.headline.split("\n").map((line, lineIdx) => (
    <span key={lineIdx}>
      {line.split(" ").map((word, i) => {
        const clean = word.replace(/[^a-zA-ZÀ-ü]/g, "");
        const punct = word.replace(/[a-zA-ZÀ-ü]/g, "");
        if (highlighted.includes(clean)) {
          return (
            <span key={i}>
              <span className="text-primary">{clean}</span>
              {punct}{" "}
            </span>
          );
        }
        return <span key={i}>{word} </span>;
      })}
      {lineIdx < hero.headline.split("\n").length - 1 && <br />}
    </span>
  ));

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16 pt-32 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          {hero.subheadline}
        </p>
        <div className="flex flex-col items-center gap-3">
          <Button size="lg" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {hero.ctaText}
            </a>
          </Button>
          <span className="text-sm text-muted-foreground/60">
            Orçamento sem compromisso &bull; Resposta em até 24h
          </span>
        </div>
      </div>
    </section>
  );
}
