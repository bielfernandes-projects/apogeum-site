# Architecture

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS variables (design tokens)
- **UI Components:** Radix UI (via shadcn/ui pattern)
- **Animations:** tailwindcss-animate
- **Carousel:** Embla Carousel + Autoplay
- **Internationalization:** next-intl
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel (static export)

## Directory Structure

```
src/
  app/
    [locale]/          # Rota com locale dinâmico (pt, en, es, fr)
      layout.tsx       # Root layout com NextIntlClientProvider
      page.tsx         # Página principal (landing page)
    globals.css        # Design tokens (CSS variables)
  components/
    header.tsx         # Nav fixa + LanguageSwitcher + CTA WhatsApp
    hero.tsx           # Seção hero com headline rich-text
    diferenciais.tsx   # Cards de diferenciais (3 itens)
    portfolio.tsx      # Carrossel de portfólio (Embla)
    processo.tsx       # Timeline de 3 etapas
    cta-footer.tsx     # CTA final + footer
    whatsapp-button.tsx # FAB flutuante WhatsApp
    language-switcher.tsx # Seletor de idioma (dropdown)
    ui/                # Componentes shadcn/ui (button, card, badge, carousel)
  data/
    agency.ts          # Dados não-textuais (WhatsApp, email, URLs do portfólio)
  lib/
    utils.ts           # Função cn() (clsx + tailwind-merge)
  messages/
    pt.json            # Traduções português
    en.json            # Traduções inglês
    es.json            # Traduções espanhol
    fr.json            # Traduções francês
  i18n.ts              # Config next-intl (locales, defaultLocale, getRequestConfig)
  middleware.ts        # Roteamento por locale + detecção automática
```

## Internationalization (i18n)

### How it works

1. **Middleware** (`src/middleware.ts`) intercepta toda requisição
2. Detecta o idioma do navegador via header `Accept-Language`
3. Se acessar `/` sem locale, redireciona para `/{locale}` (ex: `/en`)
4. Todas as rotas ficam sob `/{locale}/` — 4 páginas estáticas geradas no build

### Available locales

| Code | Language | Flag |
|------|----------|------|
| `pt` | Português | 🇧🇷 (padrão) |
| `en` | English | 🇺🇸 |
| `es` | Español | 🇪🇸 |
| `fr` | Français | 🇫🇷 |

### Translation files

`src/messages/{locale}.json` — cada arquivo contém todas as strings traduzíveis do site, organizadas por namespace:

- `metadata` — title/description para SEO
- `nav` — labels da navegação
- `common` — textos soltos (botões, slogans)
- `whatsapp` — mensagem CTA do WhatsApp
- `hero` — badge, headline, subheadline, CTA
- `diferenciais` — título da seção + 3 itens (title/description)
- `processo` — título da seção + 3 etapas
- `portfolio` — título da seção + 4 projetos (title/description)
- `ctaFinal` — headline, subheadline, CTA

### Rich text (highlights)

Palavras destacadas em dourado usam tags customizadas nas traduções:
```json
"headline": "<highlight>Velocidade</highlight> e <highlight>Autoridade</highlight><br/>para..."
```
Renderizadas com `t.rich("headline", { highlight: (chunks) => ... })`.

### How components consume translations

- Componentes cliente usam `useTranslations("namespace")` do next-intl
- `agencyData` só contém dados não-textuais (WhatsApp number, portfolio image URLs/links)
- Portfolio keys (`escolaNeuma`, `qualOTom`, etc.) servem como ponte entre dados e traduções

### Adding a new locale

1. Criar `src/messages/{code}.json` com todas as traduções
2. Adicionar o código ao array `locales` em `src/i18n.ts`
3. Adicionar label e flag em `localeLabels` (mesmo arquivo)
4. Pronto — middleware e build já incluem a nova rota automaticamente

### Adding new translatable text

1. Adicionar a chave em todos os `src/messages/*.json`
2. No componente, usar `useTranslations("namespace")` para acessar
3. Para rich text com highlights, usar tags `<highlight>` + `t.rich()`

## Routing & Build

- **Middleware:** `localePrefix: 'always'` — locale sempre aparece na URL
- **Static generation:** `generateStaticParams()` gera páginas para todos os locales
- **SEO:** `generateMetadata()` gera title/description por locale, com `hreflang` alternates automáticos
- **Build output:** 4 páginas SSG (`/pt`, `/en`, `/es`, `/fr`) + middleware (~43kB)

## Design Tokens

Definidos em `src/app/globals.css` como CSS variables. Referenciados no `tailwind.config.ts`. Ver `DESIGN.md` para detalhes completos do design system.

## Component Architecture

- Componentes com `"use client"`: header, hero, diferenciais, portfolio, cta-footer, whatsapp-button, language-switcher
- Componentes server: nenhum (todos precisam de `useTranslations`)
- `layout.tsx`: server component que monta `NextIntlClientProvider`
- `page.tsx`: server component que renderiza os componentes
