export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-32 pb-4 md:pt-36 md:pb-6 overflow-hidden bg-gradient-hero"
    >
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

          <h1 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-primary">
            Encontre equilíbrio emocional e{" "}
            <span className="italic text-gradient-gold">supere a ansiedade</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

