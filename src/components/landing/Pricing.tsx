import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans, siteConfig } from "@/config/site";

export const Pricing = () => {
  return (
    <section id="valores" className="py-20 md:py-32">
      <div className="container-soft">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-secondary font-medium">
            Investimento
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-primary">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-4 text-muted-foreground">
            Valores transparentes e flexíveis, pensados para diferentes momentos
            do seu processo terapêutico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-500 ${
                plan.highlight
                  ? "bg-gradient-deep text-primary-foreground shadow-soft md:-translate-y-4 ring-2 ring-gold"
                  : "bg-card text-foreground shadow-card hover:shadow-soft border border-border/60"
              }`}
            >
              {plan.highlight && plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-gold">
                  {plan.badge}
                </span>
              )}

              <h3
                className={`font-serif text-2xl ${
                  plan.highlight ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlight
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {plan.duration}
              </p>

              <div className="mt-6">
                <div
                  className={`font-serif text-5xl ${
                    plan.highlight ? "text-gold-light" : "text-primary"
                  }`}
                >
                  {plan.price}
                </div>
                {plan.priceNote && (
                  <div
                    className={`text-xs mt-2 ${
                      plan.highlight
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.priceNote}
                  </div>
                )}
              </div>

              <p
                className={`mt-5 text-sm leading-relaxed ${
                  plan.highlight
                    ? "text-primary-foreground/85"
                    : "text-foreground/75"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`h-5 w-5 shrink-0 ${
                        plan.highlight ? "text-gold-light" : "text-secondary"
                      }`}
                    />
                    <span
                      className={
                        plan.highlight
                          ? "text-primary-foreground/90"
                          : "text-foreground/80"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`mt-8 rounded-full h-12 ${
                  plan.highlight
                    ? "bg-gradient-gold text-primary hover:opacity-90 hover:shadow-gold"
                    : "bg-primary text-primary-foreground hover:bg-secondary"
                }`}
              >
                <a
                  href={siteConfig.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
