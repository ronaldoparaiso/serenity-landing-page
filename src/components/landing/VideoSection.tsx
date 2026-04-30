import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const VideoSection = () => {
  return (
    <section id="video" className="pt-6 pb-20 md:pt-8 md:pb-28">
      <div className="container-soft">
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

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold text-primary hover:opacity-90 hover:shadow-gold transition-all rounded-full px-10 h-14 text-base font-semibold"
          >
            <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
              Agendar minha sessão agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
