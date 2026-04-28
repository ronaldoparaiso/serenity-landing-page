import { Quote, Star } from "lucide-react";
import { testimonials } from "@/config/site";

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="container-soft">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-secondary font-medium">
            Depoimentos
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-primary">
            Histórias de transformação
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pessoas que reencontraram o equilíbrio emocional ao longo do
            processo terapêutico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="relative bg-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-soft transition-all duration-500 border border-border/50"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/40" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed text-base md:text-lg italic">
                "{t.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-border/60">
                <div className="font-serif text-lg text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
