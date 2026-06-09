import { Button } from "@/components/ui/button";
import { agencyData } from "@/data/agency";

export function CtaFooter() {
  const { info, ctaFinal } = agencyData;
  const whatsappUrl = `https://wa.me/${info.whatsapp}?text=${encodeURIComponent(info.msgCta)}`;

  return (
    <>
      <section id="contato" className="px-6 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            {ctaFinal.headline}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            {ctaFinal.subheadline}
          </p>
          <Button size="lg" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {ctaFinal.ctaText}
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-muted-foreground text-center">
          <span className="font-heading font-bold text-foreground">{info.name}</span>
          <span className="hidden md:inline">—</span>
          <span>Sua Marca no Topo.</span>
        </div>
      </footer>
    </>
  );
}
