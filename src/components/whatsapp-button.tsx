"use client";

import { useTranslations } from "next-intl";
import { agencyData } from "@/data/agency";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const t = useTranslations("common");
  const tWhatsapp = useTranslations("whatsapp");
  const { info } = agencyData;
  const whatsappUrl = `https://wa.me/${info.whatsapp}?text=${encodeURIComponent(tWhatsapp("msgCta"))}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center hover:brightness-110 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
      aria-label={t("faleConoscoWhatsapp")}
      title={t("faleConoscoWhatsapp")}
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
        {t("faleConosco")}
      </span>
    </a>
  );
}
