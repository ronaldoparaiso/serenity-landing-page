import { siteConfig } from "@/config/site";

export const VideoSection = () => {
  return (
    <section id="video" className="py-20 md:py-28">
      <div className="container-soft">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs tracking-[0.25em] uppercase text-secondary font-medium">
            Apresentação
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-primary">
            Conheça meu trabalho
          </h2>
          <p className="mt-4 text-muted-foreground">
            Em poucos minutos, entenda minha abordagem e como posso te ajudar
            a transformar sua relação com a ansiedade.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-gold opacity-30 blur-xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-gold/30 bg-card">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${siteConfig.youtubeId}`}
                title="Apresentação - Fabio Moura"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
