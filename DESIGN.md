---
name: Apogeum Digital
description: Site institucional da agência de desenvolvimento web premium
colors:
  primary: "hsl(43, 74%, 66%)"
  primary-foreground: "hsl(222, 47%, 11%)"
  neutral-bg: "hsl(222, 47%, 11%)"
  neutral-fg: "hsl(210, 40%, 98%)"
  neutral-surface: "hsl(217, 32%, 17%)"
  neutral-muted: "hsl(215, 20%, 65%)"
  neutral-border: "hsl(217, 32%, 17%)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontWeight: 600
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, sans-serif"
    fontWeight: 500
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  section: "64px"
  container: "24px"
  element: "16px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "10px 24px"
  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "10px 24px"
  card-default:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.lg}"
---

# Design System: Apogeum Digital

## 1. Overview

**Creative North Star: "O Farol do Ápice"**

Como um farol no topo de um penhasco contra o oceano noturno — o design projeta um feixe de luz dourado sobre um fundo navy profundo. Não há enfeite. Cada elemento cumpre uma função: guiar, sinalizar, converter. A escuridão (bg navy) é o silêncio; o dourado (primary) é a palavra.

O sistema rejeita explicitamente templates genéricos, aparência de IA, exageros decorativos e jargão visual. A autoridade vem da precisão, não do volume. É o visual de quem entrega código próprio e resultado mensurável — e o site da agência precisa ser a prova viva disso.

**Key Characteristics:**
- Dark navy extenso com acento dourado cirúrgico
- Tipografia de display forte e encorpada com body limpo e legível
- Flat por padrão; profundidade via layering tonal, não sombra
- Elementos interativos elevam-se com sombra + brilho sutis ao hover
- Nada de gradients, glassmorphism, ilustrações sketchy ou cantos exagerados

## 2. Colors

Navy profundo como território; dourado como sinal. O contraste é deliberado e máximo.

### Primary
- **Dourado Farol** (`hsl(43, 74%, 66%)`): Ação primária, highlights, badge de destaque, elementos interativos. Usado em ≤10% da superfície — sua raridade é o ponto.

### Neutral
- **Navy Abissal** (`hsl(222, 47%, 11%)`): Background principal. Todo o silêncio visual vem daqui.
- **Branco Farol** (`hsl(210, 40%, 98%)`): Texto corpo, headings, foreground. Levemente quente para suavizar o contraste absoluto.
- **Navy Superfície** (`hsl(217, 32%, 17%)`): Cards, secondary, hover states. O tom que dá profundidade sem sombra.
- **Cinza Névoa** (`hsl(215, 20%, 65%)`): Texto secundário, metadados, labels de baixa ênfase. Contraste acima de 4.5:1 contra o fundo navy.
- **Borda Superfície** (`hsl(217, 32%, 17%)`): Bordas de containers e inputs. Mesmo tom da superfície para manter a coesão.

### Named Rules
**O Feixe Único.** O dourado primário ocupa no máximo 10% de qualquer tela. Sua concentração define hierarquia; diluí-lo é silenciar o farol.

## 3. Typography

**Display Font:** Plus Jakarta Sans (sans-serif)
**Body Font:** Inter (sans-serif)

**Caráter:** Pairing de dois sans geométricos em pesos opostos — Plus Jakarta Sans pesado e condensado para impacto editorial; Inter leve e espaçado para leitura confortável. A diferença de peso e entrelinha cria a hierarquia que a cor não precisa fazer.

**Loading:** Fontes carregadas via `next/font` (Inter + Plus Jakarta Sans) com `display: swap`. Servidas como `@font-face` self-hosted, sem request externo. Variáveis CSS `--font-inter` e `--font-plus-jakarta` expostas via `variable` e referenciadas no `tailwind.config.ts`.

### Hierarchy
- **Display** (ExtraBold 800, `clamp(2.25rem, 5vw, 4.5rem)`, leading-tight): Hero principal. `text-wrap: balance`. letter-spacing mínimo de -0.03em.
- **Headline** (Bold 700, `text-3xl md:text-5xl`, leading-tight): Títulos de seção. `text-wrap: balance`.
- **Title** (Semibold 600, `text-xl`, leading-tight): Títulos de card e subtítulos.
- **Body** (Regular 400, `text-base` / `text-lg`, leading-relaxed): Parágrafos. Cap line length em 65–75ch. Inter 400 mantém legibilidade em dark mode.
- **Label** (Medium 500, `text-sm` / `text-xs`): Navegação, badges, botões outline, metadados.

### Named Rules
**A Pirâmide de Peso.** Hierarquia visual conduzida por peso tipográfico, não por cor ou decoração. Headings em Plus Jakarta Sans pesado; body em Inter claro. A fonte faz o trabalho que highlight e underline fariam.

## 4. Elevation

Flat por padrão. Profundidade construída via layering tonal da escala navy, não via sombras. Um card sobre o fundo navy ganha `neutral-surface` como bg; um container sobre o card pode usar o navy original. A hierarquia espacial é lida pelo brilho da superfície.

Sombras existem exclusivamente para elevação interativa: botões primários carregam `shadow-lg` no estado repouso e intensificam-se no hover. Elementos flutuantes (WhatsApp FAB) usam `shadow-lg` com escala no hover. Nenhum elemento decorativo recebe sombra.

### Shadow Vocabulary
- **Interactive-elevation** (`0 10px 15px -3px rgba(0,0,0,0.2)`): Botão primário, estados de hover em elementos acionáveis.
- **Floating** (`0 10px 15px -3px rgba(0,0,0,0.3)` c/ hover intensificado): WhatsApp FAB, elementos fixos.

### Named Rules
**A Lei do Layering.** Se um elemento precisa de profundidade, mude seu tom de navy — não adicione sombra. Sombras são reservadas para "este elemento é acionável", não para "este elemento está acima".

## 5. Components

### Buttons
- **Shape:** Cantos levemente arredondados (8px, `rounded-lg`). Nada de pill nem de canto vivo.
- **Primary:** Fundo dourado (`bg-primary`), texto navy escuro (`text-primary-foreground`). Padding vertical 10px (h-10) + horizontal 24px (px-6). Sombra `shadow-lg` no repouso. Hover: `brightness-110` — o dourado acende, não se move.
- **Large:** Versão expandida (h-14, px-8, text-lg) para CTAs principais no hero e footer.
- **Outline:** Borda sutil (`border-border`), sem fundo. Hover ganha `bg-secondary` (navy superfície). Usado para ações secundárias como "Visualizar Projeto".
- **Ghost:** Sem borda, sem fundo. Hover `bg-secondary`. Presença mínima.
- **Transições:** `duration-200` em todas as propriedades. Nada de bounce ou easing complexo.

### Cards / Containers
- **Shape:** 8px (`rounded-lg`), borda 1px `border-border`.
- **Background:** `bg-secondary/50` — navy superfície com 50% de opacidade.
- **Shadow:** `shadow-sm` apenas no card default (sutil). Hover muda borda para `border-primary/30` — sem sombra adicional.
- **Padding interno:** 20px (`p-5`).
- **Uso:** Cards de diferenciais (ícone + heading + descrição).

### Badges
- **Shape:** 6px (`rounded-md`), borda, padding 3px 12px.
- **Gold variant:** Borda `border-primary/30`, fundo `bg-primary/10`, texto `text-primary`. Usado no badge do hero.
- **Default:** Fundo dourado sólido, texto navy escuro.

### Navigation (Header)
- **Comportamento:** Fixo no topo, `bg-background/90` com `backdrop-blur-md`. Borda inferior sutil.
- **Logo:** `h-10 w-auto` (40px).
- **Links:** `text-muted-foreground` com underline animado via pseudo-elemento `::after` (bg-primary, 0 → 100% width no hover).
- **Mobile:** Menu overlay fixo (`fixed inset-x-0 top-[73px] bottom-0`) com `animate-in slide-in-from-top-2 fade-in duration-300`. Botão CTA ocupa largura total. `aria-label` alterna entre "Abrir menu" / "Fechar menu".

### Carrossel (Portfolio)
- **Engine:** Embla Carousel com Autoplay (4s delay, `stopOnInteraction: true`).
- **Navegação:** Botões circulares (`rounded-full`), fundo `bg-background/80` com `backdrop-blur-sm`, posicionados nas laterais. Dots indicator navegável entre os slides.
- **Slide width:** `md:basis-3/4 lg:basis-3/5` — revela slides adjacentes parcialmente.
- **Browser Frame:** Topo do card simula janela de navegador (bolinhas vermelha/amarela/verde + hostname truncado).
- **Fallback:** `ProjectImage` component captura erro de loading e exibe placeholder com título do projeto.
- **Prefers-reduced-motion:** Autoplay desativado se `prefers-reduced-motion: reduce` estiver ativo; detectado via `matchMedia` com listener de atualização em tempo real.

### Floating WhatsApp
- **Posição:** `fixed bottom-6 right-6`.
- **Shape:** Círculo (14×14, `rounded-full`).
- **Estilo:** Fundo dourado, ícone branco. `shadow-lg` repouso, `shadow-xl` + `scale-105` hover.
- **Tooltip:** Texto "Fale conosco" aparece à esquerda no hover (desktop only), com `title` nativo para acessibilidade.

## 6. Do's and Don'ts

### Do:
- **Do** usar navy abissal como bg dominante e dourado farol como acento cirúrgico (≤10%).
- **Do** usar Plus Jakarta Sans pesado para headings e Inter para body — diferença de peso É a hierarquia.
- **Do** usar layering tonal para profundidade: bg → secondary/50 → secondary para cards.
- **Do** usar sombras apenas em elementos interativos (botões, FAB). Nada de sombra decorativa.
- **Do** manter cantos em 8px (`rounded-lg`) no máximo para cards e botões.
- **Do** usar `text-wrap: balance` em h1–h3 e `text-wrap: pretty` em prosa longa.
- **Do** limitar body text a 65–75ch de largura.
- **Do** testar cada seção em viewport mobile primeiro — leads vêm do Instagram.

### Don't:
- **Don't** parecer template WordPress/Wix — cada elemento deve parecer artesanal e intencional.
- **Don't** usar gradients decorativos, glassmorphism, ou ghost cards (borda + sombra larga juntos).
- **Don't** usar cantos exagerados (>12px em cards, >8px em botões). Pill é só para tags.
- **Don't** usar eyebrow label em posição de destaque por toda seção ("DIFERENCIAIS", "PROCESSO") — é marca registrada de site gerado por IA.
- **Don't** usar numeração de seção (01, 02, 03) a menos que seja uma sequência real.
- **Don't** usar ilustrações sketchy SVG ou `feTurbulence`/`feDisplacementMap`.
- **Don't** usar gradient text (`background-clip: text`). Destaque via peso ou tamanho.
- **Don't** animar propriedades de layout (width, height, top, left). Use transform/opacity.
- **Don't** esquecer `prefers-reduced-motion` — toda animação precisa de alternativa estática.
- **Don't** deixar heading vazar do container em mobile — teste o clamp em cada breakpoint.
