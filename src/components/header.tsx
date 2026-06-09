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
        <a href="#" className="text-xl font-heading font-extrabold tracking-tight">
          {agencyData.info.name}
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
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-border overflow-hidden transition-all duration-300",
          open ? "max-h-80" : "max-h-0"
        )}
      >
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
    </header>
  );
}
