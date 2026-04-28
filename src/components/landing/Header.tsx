import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#video", label: "Vídeo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#valores", label: "Valores" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-soft flex items-center justify-between gap-6">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-xl md:text-2xl font-semibold text-primary tracking-tight">
            {siteConfig.name}
          </span>
          <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase">
            <span className="text-gold">—</span> {siteConfig.role} · {siteConfig.crp}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          className="bg-gradient-gold text-primary hover:opacity-90 hover:shadow-gold transition-all rounded-full px-5 md:px-6 font-medium"
        >
          <a href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer">
            Agendar consulta
          </a>
        </Button>
      </div>
    </header>
  );
};
