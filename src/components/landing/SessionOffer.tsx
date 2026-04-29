import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, sessionOffer } from "@/config/site";

const cards = [
  {
    emoji: "💬",
    title: "Conversa",
    text: "Aqui eu entendo exatamente o que está acontecendo com você: quando a ansiedade começou, quando piora, o que você tenta fazer e por que não funciona. Sem julgamento. Sem enrolação. Só clareza — vou mapear seu cenário atual.",
  },
  {
    emoji: "🧭",
    title: "Descoberta + Alívio",
    text: "Este é o ponto principal da sessão. Vamos descobrir juntos a raiz do padrão que está gerando ansiedade, autossabotagem, procrastinação, culpa, vazio — e em seguida aplico uma técnica prática para aliviar imediatamente os sintomas.",
  },
  {
    emoji: "🗺️",
    title: "Plano Futuro",
    text: "Aqui você recebe um plano simples e objetivo para os próximos dias: o que fazer, o que evitar e como manter o controle emocional no dia a dia. Se fizer sentido, eu também te mostro como continuar o processo com acompanhamento estruturado e personalizado.",
  },
];

export const SessionOffer = () => {
  return (
    <section id="sessao" className="py-20 md:py-28 bg-sand/40">
      <div className="container-soft">
        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight font-semibold">
            Em 60 minutos você descobrirá como vencer o{" "}
            <span className="italic text-secondary">medo</span> e a{" "}
            <span className="italic text-secondary">insegurança</span> que geram{" "}
            <span className="italic text-gradient-gold">ansiedade</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">
            Você sai com clareza sobre o que causa insegurança e paralisa suas decisões.
          </p>
          <p className="mt-3 text-sm text-secondary font-medium">
            👇 Veja exatamente o que acontece na sessão
          </p>
        </div>

        {/* 3 cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-2xl p-7 shadow-card hover:shadow-soft transition-all border border-border/60"
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="font-serif text-xl text-primary mb-3">{c.title}</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Offer card */}
        <div className="mt-12 max-w-2xl mx-auto bg-card/70 backdrop-blur rounded-3xl p-8 md:p-12 shadow-soft border border-border/60 text-center">
          <h3 className="font-serif text-2xl md:text-4xl text-primary leading-tight">
            Descubra como vencer{" "}
            <span className="italic text-secondary underline decoration-gold/60 underline-offset-4">
              a insegurança
            </span>{" "}
            que causa ansiedade
          </h3>

          <ul className="mt-7 space-y-2.5 inline-block text-left">
            {sessionOffer.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/85">
                <Check className="h-4 w-4 text-secondary shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Oportunidade especial
            </p>
            {sessionOffer.oldPrice && (
              <p className="mt-2 text-sm text-muted-foreground line-through">
                De: {sessionOffer.oldPrice}
              </p>
            )}
            <p className="mt-1 font-serif text-3xl md:text-4xl font-semibold text-secondary">
              Apenas: {sessionOffer.price}
            </p>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Toque abaixo para garantir este valor especial
          </p>

          <Button
            asChild
            size="lg"
            className="mt-5 bg-gradient-deep text-primary-foreground hover:opacity-90 transition-all rounded-2xl px-10 h-14 text-base font-semibold uppercase tracking-wider w-full md:w-auto"
          >
            <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
              Agendar sessão agora
            </a>
          </Button>

          <p className="mt-5 text-xs text-muted-foreground">
            Agendamento em até 24h
          </p>
          <p className="mt-3 text-xs text-foreground/70 italic max-w-md mx-auto">
            Se você chegou até aqui, não foi por acaso. Pode ter sido o sinal que
            você estava esperando: não adie mais essa decisão.
          </p>
        </div>

        {/* Confiança */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-primary uppercase">
            Confiança
          </p>
          <p className="mt-3 font-serif italic text-xl md:text-2xl text-secondary">
            +1200 atendimentos realizados!
          </p>
        </div>
      </div>
    </section>
  );
};
