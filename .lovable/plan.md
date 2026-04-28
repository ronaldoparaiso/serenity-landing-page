
# Landing Page — Fabio Moura, Psicólogo

Landing page de página única, moderna e acolhedora, para venda de consultas online com foco em ansiedade. Layout suave usando a paleta enviada (verde escuro, verde, dourado, dourado claro, off-white).

## Paleta e identidade visual

- **Fundo principal:** #F2F2F2 (off-white) — sensação de leveza
- **Âncora / textos fortes:** #014023 (verde escuro)
- **Destaques e ícones:** #02704C (verde)
- **CTAs e detalhes premium:** #DEB75B (dourado claro), com hover em #BF9341
- **Tipografia:** serifada elegante para títulos (Playfair Display), sans-serif limpa para texto (Inter)
- **Sensação geral:** acolhedora, com bastante respiro, cantos arredondados suaves, sombras leves, micro-animações sutis no scroll

## Estrutura da página (de cima para baixo)

1. **Header fixo / topo**
   - Logo tipográfica "Fabio Moura" em serif + linha fina dourada + subtítulo "Psicólogo · CRP 00/00000"
   - Menu âncora discreto: Sobre · Vídeo · Depoimentos · Benefícios · Valores · Contato
   - Botão "Agendar consulta" no canto direito (dourado)

2. **Hero / Título principal**
   - Headline: "Encontre equilíbrio emocional e supere a ansiedade"
   - Subheadline curta sobre atendimento online com Terapia Cognitivo-Comportamental
   - Selo: "Atendimento 100% online" + "CRP registrado"
   - CTA primário "Quero agendar minha consulta"
   - Fundo off-white com detalhe gráfico orgânico em verde/dourado

3. **Seção de vídeo do YouTube**
   - Título curto: "Conheça meu trabalho"
   - Player responsivo 16:9 com moldura sutil dourada
   - Campo de URL configurável no código (placeholder com vídeo de exemplo)

4. **Bloco de apresentação + CTA de checkout**
   - Texto curto e humano apresentando o Fabio, abordagem TCC e foco em ansiedade
   - Botão grande "Agendar minha consulta" → link externo configurável (Hotmart/Kiwify/Stripe)
   - Selos de confiança: "Pagamento seguro", "Sigilo profissional", "Atendimento online"

5. **Depoimentos**
   - Carrossel/grid de 3–6 cards com foto (placeholder), nome, texto e estrelas
   - Estrutura de dados editável no código para adicionar/remover facilmente

6. **Benefícios do tratamento de ansiedade**
   - Texto introdutório bem escrito sobre o impacto da ansiedade e o que a TCC oferece
   - Grid de 6 cards com ícone + título + descrição curta:
     - Reduzir crises e sintomas físicos
     - Compreender gatilhos e padrões de pensamento
     - Recuperar qualidade do sono
     - Melhorar relações pessoais e profissionais
     - Desenvolver ferramentas práticas para o dia a dia
     - Resgatar autoconfiança e bem-estar

7. **Valores / Planos** (sugestões criadas)
   - 3 cards lado a lado, com o do meio em destaque dourado:
     - **Sessão Avulsa** — R$ 180 · 50 min · ideal para conhecer o trabalho
     - **Pacote Mensal (4 sessões)** — R$ 640 · economia de R$ 80 · acompanhamento contínuo *[destaque]*
     - **Pacote Trimestral (12 sessões)** — R$ 1.800 · economia de R$ 360 · transformação consistente
   - Cada card com botão "Quero este plano" → checkout externo configurável

8. **Rodapé**
   - Coluna 1: nome + CRP + breve descrição
   - Coluna 2: Contato — telefone e e-mail (placeholders editáveis)
   - Coluna 3: WhatsApp com botão verde + ícones de redes sociais (Instagram, Facebook, LinkedIn) — todos como placeholders editáveis
   - Linha final com copyright e aviso de sigilo profissional
   - Botão flutuante de WhatsApp no canto inferior direito

## Detalhes técnicos

- React + Vite + TypeScript + Tailwind (stack já existente)
- Tokens HSL adicionados em `src/index.css` (verde-escuro, verde, dourado, dourado-claro, areia) e mapeados no `tailwind.config.ts`
- Fontes Playfair Display + Inter via Google Fonts no `index.html`
- Componentes em `src/components/landing/`: `Header`, `Hero`, `VideoSection`, `AboutCTA`, `Testimonials`, `Benefits`, `Pricing`, `Footer`, `WhatsappFloat`
- Constantes editáveis num único arquivo `src/config/site.ts` (URL do vídeo, link do checkout, WhatsApp, redes, valores, depoimentos) para facilitar manutenção
- Animações sutis com `tailwindcss-animate` (fade-in / slide-up no scroll)
- Totalmente responsivo (mobile-first), acessível (contraste, alt texts, aria-labels)
- Substitui o conteúdo atual de `src/pages/Index.tsx`

## O que você poderá editar facilmente depois

- URL do vídeo do YouTube
- Link do checkout (Hotmart/Kiwify/Stripe)
- Número do WhatsApp e links das redes sociais
- CRP, telefone, e-mail
- Lista de depoimentos
- Valores e nomes dos planos
