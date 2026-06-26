"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { agencyData } from "@/data/agency";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${agencyData.info.whatsapp}?text=${encodeURIComponent(agencyData.info.msgCta)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt={agencyData.info.name} className="h-10 w-auto" />
          <span className="text-xl font-heading font-extrabold tracking-tight">
            {agencyData.info.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {agencyData.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Fazer Orçamento
            </a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[73px] bottom-0 z-40 bg-background/95 backdrop-blur-md md:hidden animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="px-6 py-4 flex flex-col gap-4">
            {agencyData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Fazer Orçamento
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
