import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { agencyData } from "@/data/agency";

export function Hero() {
  const { hero, info } = agencyData;
  const whatsappUrl = `https://wa.me/${info.whatsapp}?text=${encodeURIComponent(info.msgCta)}`;

  const words = hero.headline.split(" ");
  const highlighted = ["Velocidade", "Autoridade", "Topo"];

  const headline = words.map((word, i) => {
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
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16 pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <Badge variant="gold">{hero.badge}</Badge>
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          {hero.subheadline}
        </p>
        <Button size="lg" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {hero.ctaText}
          </a>
        </Button>
      </div>
    </section>
  );
}
