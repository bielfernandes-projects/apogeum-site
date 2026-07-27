"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function switchTo(locale: Locale) {
    if (locale === currentLocale) {
      setOpen(false);
      return;
    }
    const segments = pathname.split("/").filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    const newPath = "/" + segments.join("/");
    setOpen(false);
    startTransition(() => {
      router.replace(newPath);
      router.refresh();
    });
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        disabled={isPending}
        aria-label="Change language"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-2 px-3 h-10 rounded-lg text-sm font-medium",
          "border border-border bg-transparent text-foreground",
          "hover:bg-secondary transition-colors",
          isPending && "opacity-50"
        )}
      >
        <span className="text-base leading-none">{localeLabels[currentLocale].flag}</span>
        <span className="font-bold tracking-wide">
          {localeLabels[currentLocale].label}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[180px] rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg overflow-hidden z-50">
          {locales.map((loc) => {
            const isActive = loc === currentLocale;
            const { flag, label, country } = localeLabels[loc];
            return (
              <button
                key={loc}
                type="button"
                onClick={() => switchTo(loc)}
                className={cn(
                  "w-full flex items-center justify-between gap-3 px-3 py-2.5 text-sm transition-colors",
                  "hover:bg-secondary",
                  isActive && "bg-primary/10 text-primary font-semibold"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-base leading-none">{flag}</span>
                  <span className="font-semibold">{label}</span>
                  <span className={cn(
                    "text-xs",
                    isActive ? "text-primary/70" : "text-muted-foreground"
                  )}>
                    {country}
                  </span>
                </span>
                {isActive && <Check className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
