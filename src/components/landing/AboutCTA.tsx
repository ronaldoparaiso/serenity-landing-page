import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Lock, ShieldCheck, Sparkles } from "lucide-react";

export const AboutCTA = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-sand/40">
      <div className="container-soft">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs tracking-[0.25em] uppercase text-secondary font-medium">
            Sobre o atendimento
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-primary leading-tight">
            Um caminho terapêutico{" "}
            <span className="italic text-secondary">feito para você</span>
          </h2>

          <div className="mt-8 space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Sou <strong className="text-primary">Fabio Moura</strong>, psicólogo
              especializado em <strong className="text-primary">Terapia Cognitivo-Comportamental</strong>{" "}
              com foco no tratamento da ansiedade. Trabalho com adolescentes e
              adultos que buscam compreender melhor suas emoções e desenvolver
              uma vida com mais leveza, propósito e equilíbrio.
            </p>
            <p>
              Cada processo terapêutico é único. Por isso, construímos juntos um
              plano personalizado, com técnicas validadas cientificamente e
              acolhimento humano em cada sessão.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-10 bg-gradient-gold text-primary hover:opacity-90 hover:shadow-gold transition-all rounded-full px-10 h-14 text-base font-semibold"
          >
            <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
              Agendar minha consulta
            </a>
          </Button>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Lock, label: "Pagamento seguro" },
              { icon: ShieldCheck, label: "Sigilo profissional" },
              { icon: Sparkles, label: "Atendimento online" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-card shadow-card text-sm text-foreground/80"
              >
                <Icon className="h-4 w-4 text-secondary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
