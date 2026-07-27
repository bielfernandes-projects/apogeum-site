"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { agencyData } from "@/data/agency";

export function Hero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");
  const tWhatsapp = useTranslations("whatsapp");

  const whatsappUrl = `https://wa.me/${agencyData.info.whatsapp}?text=${encodeURIComponent(tWhatsapp("msgCta"))}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16 pt-32 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest rounded-full border border-primary/30 bg-primary/5 text-primary">
          {t("badge")}
        </span>
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
          {t.rich("headline", {
            highlight: (chunks) => <span className="text-primary">{chunks}</span>,
            br: () => <br />,
          })}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          {t("subheadline")}
        </p>
        <div className="flex flex-col items-center gap-3">
          <Button size="lg" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t("ctaText")}
            </a>
          </Button>
          <span className="text-sm text-muted-foreground/60">
            {tCommon("orcamentoAviso")}
          </span>
        </div>
      </div>
    </section>
  );
}
