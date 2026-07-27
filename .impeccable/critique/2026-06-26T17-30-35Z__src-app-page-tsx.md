---
target: site todo (src/app/page.tsx)
total_score: 26
p0_count: 0
p1_count: 2
p2_count: 2
timestamp: 2026-06-26T17-30-35Z
slug: src-app-page-tsx
---
# Critique: Apogeum Digital

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No section indicator, no carousel dots, no scroll progress |
| 2 | Match System / Real World | 4 | Portuguese copy, WhatsApp CTA, familiar process metaphors |
| 3 | User Control and Freedom | 2 | Carousel autoplay never stops (stopOnInteraction: false), no back-to-top |
| 4 | Consistency and Standards | 3 | Gradients used in hero+CTA only; badge on hero only |
| 5 | Error Prevention | 3 | WhatsApp pre-filled messages, links open in new tab; no forms to break |
| 6 | Recognition Rather Than Recall | 4 | Nav labels match headings, logo visible, WhatsApp always in view |
| 7 | Flexibility and Efficiency | 2 | No keyboard shortcuts, no quick-jump, forced through carousel |
| 8 | Aesthetic and Minimalist Design | 3 | Clean foundation but Processo numbers are decorative, layout is generic |
| 9 | Error Recovery | 2 | No undo, no confirmation — limited by page simplicity |
| 10 | Help and Documentation | 1 | No FAQ, no pricing hint, no expectation of what happens after CTA |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict

**Veredito:** O site não grita "feito por IA" — evita a maioria dos teletes (ghost cards, glassmorphism, gradient text, sketchy SVG). Porém, quem tem olho treinado sente que seguiu templates de perto: números 01/02/03 gigantes, grid de cards idênticos, estrutura de seção previsível.

**Detector automático:** 0 findings (exit code 0) — só rodou regex em .tsx, não escaneou CSS. Achados manuais complementares: fontes overused (Inter + Plus Jakarta Sans), imagens sem dimensões (layout shift no portfolio), transição de width no underline do header.

## Overall Impression

Base sólida. Tipografia coesa, dark theme bem executado, canal único de conversão via WhatsApp é inteligente pro público-alvo. Os problemas são de maturidade: o site não parece "feito por IA", mas também não parece "feito por uma agência premium". Parece correto, não excelente. A maior oportunidade é quebrar a monotonia estrutural (mesmo padrão heading + subtitle em toda seção) e resolver a usabilidade do carrossel (é a feature central e a mais frágil).

## Cognitive Load

- Checklist: 6/8 aprovados. Falhas: mobile nav com 5 choices (4 links + 1 CTA), sem progressive disclosure.
- Working memory: grupos ≤4 itens. Carrossel força acesso serial — usuário não vê os 4 projetos de uma vez.
- Veredito: Bom para landing page linear. Nada crítico.

## What's Working

1. **Sistema tipográfico coeso** — Plus Jakarta Sans (pesado) + Inter (leve) cria hierarquia sem depender de cor. Melhor decisão de design do site.
2. **Browser frame no portfólio** — bolinhas macOS + hostname truncado transmite "fazemos sites reais" sem dizer. Slide parcial (md:basis-3/4) sinaliza continuidade.
3. **WhatsApp como canal único** — sem split "liga vs email vs formulário". Para público mobile do Instagram, é ótimo: um toque inicia conversa.

## Priority Issues

### [P1] Carrossel sem indicadores e autoplay sem pausa
**Onde:** `portfolio.tsx` + `carousel.tsx:43`
**Por que importa:** Usuário não sabe quantos projetos existem (sem dots), não pula pra um específico, e o slide muda sozinho a cada 4s mesmo depois de interação manual (`stopOnInteraction: false`). Viola WCAG 2.2.1.
**Fix:** Mudar pra `stopOnInteraction: true`, adicionar dots Embla abaixo do carrossel, ou ao menos "1/4" visível.
**Comando:** `$impeccable harden`

### [P1] Números 01/02/03 do Processo são clichê de template premium
**Onde:** `processo.tsx:21-24`
**Por que importa:** Números gigantes `text-9xl text-primary/10` são o elemento #1 que parece template. A própria DESIGN.md proíbe "numeração decorativa".
**Fix:** Reduzir pra `text-4xl font-bold text-primary` como marcadores inline, não decoração de fundo. Usar timeline visual (bolinha + linha + card).
**Comando:** `$impeccable quieter`

### [P2] Menu mobile anima max-height (propriedade de layout)
**Onde:** `header.tsx:54-58`
**Por que importa:** Animar max-height causa reflow e jank em dispositivos fracos (público-alvo). Viola "practice what you preach".
**Fix:** Substituir por `translate-y` + `opacity` com posicionamento absoluto.
**Comando:** `$impeccable optimize`

### [P2] Nenhum sinal de preço ou expectativa antes do CTA
**Onde:** `hero.tsx:39-43`, `cta-footer.tsx:19-23`
**Por que importa:** Público-alvo (pequenos empresários) hesita em clicar "Solicitar Orçamento" sem saber se podem pagar. Zero gerenciamento de expectativa.
**Fix:** Adicionar microcopy abaixo do CTA: "Orçamento sem compromisso • Resposta em até 24h". Ou prazos no Processo.
**Comando:** `$impeccable clarify`

### [P3] Grid de cards dos Diferenciais é estruturalmente genérico
**Onde:** `diferenciais.tsx:24-43`
**Por que importa:** Três cards idênticos em grid 3-col é padrão template. Viola "zero template genérico" e "practice what you preach".
**Fix:** Layout escalonado (2-up + 1-wide), ou row horizontal em mobile, ou alturas diferenciadas.
**Comando:** `$impeccable shape`

## Persona Red Flags

### Casey (Mobile User)
- Setas do carrossel nas bordas — alcance de polegar ruim em iPhone grande, hit target pequeno
- Sem indicador de página — Casey não sabe que existem 4 projetos
- Autoplay sem pause — frustrante
- Hero headline longo — 9 palavras wrapando 3-4 linhas em 375px
- Imagens Microlink externas — sem skeleton/fallback em 3G/4G (público brasileiro)

### Carlos (Empresário, Não-Técnico) — Persona específica
- "Edge Network", "código próprio" são jargão — Carlos não sabe por que isso é melhor
- Headline negativa "por que NÃO usamos templates" cria ansiedade, não confiança
- Sem preço ou pacote — hesita em chamar no WhatsApp
- Passos abstratos demais — não visualiza o que cada etapa significa pro negócio dele
- Sem depoimentos ou logos de clientes — validação social zero para empresário cético

### Sam (Acessibilidade)
- Autoplay sem pause — viola WCAG 2.2.2, sem prefers-reduced-motion
- aria-label="Menu" estático — deveria alternar "Abrir/Fechar" conforme estado
- Sem skip-to-content link
- Carrossel não navegável por teclado — cards não são focusable

## Minor Observations
- Gradiente decorativo no hero e CTA (bg-gradient-to-b from-primary/5) — DESIGN.md diz "não usar"
- Footer esparso demais: sem redes sociais, sem ano de copyright
- Imagens Microlink sem fallback — API cair = imagem quebrada
- WhatsApp FAB sem tooltip no desktop — ícone MessageCircle pode não ser reconhecido
- Badge "gold" com texto muito longo — "DESENVOLVIMENTO WEB PREMIUM" pode vazar em mobile
- Mesmo heading size (text-3xl md:text-5xl) em toda seção — ritmo monótono

## Questions to Consider
1. E se cada seção tivesse uma estrutura diferente de heading + body, em vez do mesmo padrão?
2. O badge do hero está ganhando seu espaço? Alguém que já chegou na página precisa de "DESENVOLVIMENTO WEB PREMIUM"?
3. E se o portfólio fosse grid estático no desktop e carrossel só no mobile?
4. A mensagem preenchida do WhatsApp é longa e formal — uma mais curta e calorosa reduziria atrito?
5. A marca vende "performance" ou "paz de espírito"? Para um psicólogo ou personal, "paz de espírito" (meu site funciona, não preciso pensar) pode resonar mais que specs técnicas.
