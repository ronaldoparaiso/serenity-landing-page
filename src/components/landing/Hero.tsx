import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Video } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gradient-hero"
    >
      {/* Decorative organic shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-secondary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-gold/15 blur-3xl"
      />

      <div className="container-soft relative">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.25em] uppercase text-secondary font-medium">
            <span className="h-px w-8 bg-gold" />
            Psicólogo · Especialista em Ansiedade
            <span className="h-px w-8 bg-gold" />
          </span>

          <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-primary">
            Encontre equilíbrio emocional e{" "}
            <span className="italic text-gradient-gold">supere a ansiedade</span>
          </h1>

          <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Atendimento psicológico online com Terapia Cognitivo-Comportamental.
            Um espaço acolhedor e seguro para você compreender suas emoções,
            desenvolver ferramentas práticas e retomar o bem-estar no seu dia a dia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8 h-14 text-base shadow-soft transition-all"
            >
              <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
                Quero agendar minha consulta
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base border-primary/20 text-primary hover:bg-primary/5"
            >
              <a href="#video">Conhecer o trabalho</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Video className="h-4 w-4 text-secondary" />
              {siteConfig.city}
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              {siteConfig.crp} · Sigilo profissional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
